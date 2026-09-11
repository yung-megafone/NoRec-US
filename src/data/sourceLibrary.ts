import { sources as curatedSources, type SourceRecord } from './sources';
import { evidenceCases, type EvidenceCase } from './evidence';
import { surveillanceCatalog, type CatalogSource } from './surveillanceCatalog';

const REVIEWED = '2026-09-11';

const normalizeUrl = (value: string) => {
  try {
    const url = new URL(value);
    url.hash = '';
    if (url.pathname !== '/') url.pathname = url.pathname.replace(/\/+$/, '');
    return url.toString();
  } catch {
    return value.trim().replace(/\/+$/, '');
  }
};

const stableId = (url: string) => {
  // FNV-1a: deterministic ID so adding/reordering citations does not renumber old records.
  let hash = 0x811c9dc5;
  for (let i = 0; i < url.length; i++) {
    hash ^= url.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return `WEB-${(hash >>> 0).toString(16).padStart(8, '0').toUpperCase()}`;
};

const cleanText = (value: string) =>
  value
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();

const domainFor = (href: string) => {
  try {
    return new URL(href).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

const agencyFrom = (label: string, href: string) => {
  const domain = domainFor(href);
  const known: Record<string, string> = {
    'ftc.gov': 'Federal Trade Commission',
    'gao.gov': 'U.S. Government Accountability Office',
    'oig.justice.gov': 'U.S. Department of Justice Office of Inspector General',
    'justice.gov': 'U.S. Department of Justice',
    'opm.gov': 'U.S. Office of Personnel Management',
    'illinoiscourts.gov': 'Illinois Courts',
    'ilsos.gov': 'Illinois Secretary of State',
    'ilga.gov': 'Illinois General Assembly',
    'aclu-il.org': 'ACLU of Illinois',
    'aclu.org': 'ACLU',
    'chulavistaca.gov': 'City of Chula Vista',
    'darpa.mil': 'DARPA',
    'epic.org': 'Electronic Privacy Information Center',
    'innocenceproject.org': 'Innocence Project',
    'xfinity.com': 'Comcast / Xfinity',
    'flocksafety.com': 'Flock Safety',
    'axon.com': 'Axon',
  };

  if (known[domain]) return known[domain];

  const prefix = cleanText(label).split(/\s+[—–-]\s+/)[0]?.trim();
  return prefix || domain || 'External source';
};

const typeFromUrl = (
  href: string,
  label: string,
  grade?: string
): { type: string; status: SourceRecord['status'] } => {
  if (grade === 'VENDOR DOCUMENTATION') return { type: 'Vendor documentation', status: 'Vendor' };
  if (grade === 'FOIA RECORD') return { type: 'Public records / FOIA', status: 'Primary' };
  if (grade === 'COURT RECORD') return { type: 'Court record', status: 'Primary' };
  if (grade === 'PRIMARY DOCUMENT') return { type: 'Primary document', status: 'Primary' };
  if (grade === 'ACADEMIC RESEARCH') return { type: 'Academic research', status: 'Secondary' };
  if (grade === 'INVESTIGATIVE REPORTING') return { type: 'Investigative reporting', status: 'Secondary' };
  if (grade === 'SECONDARY REPORTING') return { type: 'Reporting', status: 'Secondary' };
  if (grade === 'COMMUNITY REPORT') return { type: 'Community report', status: 'Secondary' };
  if (grade === 'UNVERIFIED') return { type: 'Unverified source', status: 'Secondary' };

  const domain = domainFor(href);
  const lower = `${href} ${label}`.toLowerCase();

  const vendorDomains = [
    'xfinity.com', 'flocksafety.com', 'axon.com', 'amazon.com',
    'ring.com', 'ford.com', 'harri.com', 'verkada.com'
  ];
  if (vendorDomains.some(d => domain.endsWith(d))) {
    return { type: 'Vendor documentation', status: 'Vendor' };
  }

  if (
    domain.endsWith('.gov') ||
    domain.endsWith('.mil') ||
    domain === 'illinoiscourts.gov' ||
    lower.includes('court of appeal') ||
    lower.includes('supreme court') ||
    lower.includes('court record') ||
    domain === 'law.justia.com'
  ) {
    if (lower.includes('court') || domain === 'law.justia.com') {
      return { type: 'Court / government record', status: 'Primary' };
    }
    return { type: 'Government record', status: 'Primary' };
  }

  if (lower.includes('complaint') && domain === 'ftc.gov') {
    return { type: 'Government complaint', status: 'Primary' };
  }

  return { type: 'Reporting / reference', status: 'Secondary' };
};

const jurisdictionFromEvidence = (item: EvidenceCase) => {
  if (item.geography?.state === 'IL') {
    if (item.geography.municipality && item.geography.county) {
      return `${item.geography.municipality}, ${item.geography.county} County, Illinois`;
    }
    if (item.geography.county) return `${item.geography.county} County, Illinois`;
    return 'Illinois';
  }

  const head = item.kicker.split(' · ')[0]?.trim() ?? '';
  const map: Record<string, string> = {
    'FEDERAL': 'United States',
    'ILLINOIS': 'Illinois',
    'MASSACHUSETTS': 'Massachusetts',
    'MICHIGAN': 'Michigan',
    'NEW YORK': 'New York',
    'NEW JERSEY': 'New Jersey',
    'MARYLAND': 'Maryland',
    'FLORIDA': 'Florida',
    'OHIO': 'Ohio',
    'TENNESSEE': 'Tennessee',
    'CALIFORNIA': 'California',
    'PENNSYLVANIA': 'Pennsylvania',
    'WASHINGTON': 'Washington',
    'OKLAHOMA': 'Oklahoma',
    'ARIZONA': 'Arizona',
    'NEBRASKA': 'Nebraska',
    'SCOTLAND': 'Scotland',
    'RING': 'United States',
    'GENETIC DATA': 'United States',
  };

  return map[head] ?? (head || 'United States / national');
};

const extractEvidenceAnchors = (item: EvidenceCase) => {
  const anchors: { href: string; label: string }[] = [];
  const re = /<a href=['"]([^'"]+)['"]>(.*?)<\/a>/g;
  let match: RegExpExecArray | null;

  while ((match = re.exec(item.bodyHtml)) !== null) {
    const href = match[1];
    if (!href.startsWith('http://') && !href.startsWith('https://')) continue;
    anchors.push({ href, label: cleanText(match[2]) });
  }
  return anchors;
};

const generatedByUrl = new Map<string, SourceRecord>();

for (const item of evidenceCases) {
  for (const anchor of extractEvidenceAnchors(item)) {
    const key = normalizeUrl(anchor.href);
    const classification = typeFromUrl(anchor.href, anchor.label);
    const current = generatedByUrl.get(key);

    const record: SourceRecord = current ?? {
      id: stableId(key),
      citation: 0,
      title: anchor.label || anchor.href,
      shortTitle: anchor.label || domainFor(anchor.href),
      jurisdiction: jurisdictionFromEvidence(item),
      agency: agencyFrom(anchor.label, anchor.href),
      type: classification.type,
      status: classification.status,
      reviewed: REVIEWED,
      originalUrl: anchor.href,
      notes: `Cited by Evidence Library entry: ${item.title}`,
      tags: [item.category, item.slug, domainFor(anchor.href)].filter(Boolean),
    };

    if (current) {
      const nextTagSet = new Set([...current.tags, item.category, item.slug, domainFor(anchor.href)].filter(Boolean));
      record.tags = [...nextTagSet];

      const evidenceName = item.title;
      if (!current.notes?.includes(evidenceName)) {
        record.notes = `${current.notes ?? 'Cited by Evidence Library.'} Also cited by: ${evidenceName}`;
      }
    }

    generatedByUrl.set(key, record);
  }
}

for (const entry of surveillanceCatalog) {
  for (const source of entry.sources) {
    const key = normalizeUrl(source.href);
    const classification = typeFromUrl(source.href, source.label, source.grade);
    const current = generatedByUrl.get(key);

    const record: SourceRecord = current ?? {
      id: stableId(key),
      citation: 0,
      title: source.label,
      shortTitle: source.label,
      jurisdiction: entry.governmentLevel === 'illinois-state'
        ? 'Illinois'
        : entry.applicability.includes('CONFIRMED IL DEPLOYMENT')
          ? 'Illinois'
          : 'United States / national',
      agency: agencyFrom(source.label, source.href),
      type: classification.type,
      status: classification.status,
      reviewed: REVIEWED,
      originalUrl: source.href,
      notes: `Cited by Surveillance catalog entry: ${entry.name}`,
      tags: [entry.rung, entry.slug, source.grade, domainFor(source.href)].filter(Boolean),
    };

    if (current) {
      record.tags = [...new Set([...current.tags, entry.rung, entry.slug, source.grade, domainFor(source.href)].filter(Boolean))];
      if (!current.notes?.includes(entry.name)) {
        record.notes = `${current.notes ?? 'Cited by Surveillance catalog.'} Also cited by: ${entry.name}`;
      }
    }

    generatedByUrl.set(key, record);
  }
}

// Curated records win when a URL is already represented there because they may
// include archival files, hashes, richer jurisdiction metadata, and permanent IDs.
const curatedUrls = new Set(curatedSources.map(source => normalizeUrl(source.originalUrl)));
const generatedSources = [...generatedByUrl.entries()]
  .filter(([url]) => !curatedUrls.has(url))
  .map(([, source]) => source)
  .sort((a, b) => a.title.localeCompare(b.title));

export const allSources: SourceRecord[] = [...curatedSources, ...generatedSources];

export const sourceLibraryStats = {
  curated: curatedSources.length,
  generated: generatedSources.length,
  total: allSources.length,
};
