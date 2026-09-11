import { surveillanceEntries as legacyEntries } from './surveillance';

export type SurveillanceRung = 'government' | 'workplace' | 'consumer' | 'private' | 'infrastructure';
export type GovernmentLevel = 'local-county' | 'illinois-state' | 'federal-national';
export type IllinoisApplicability =
  | 'CONFIRMED IL DEPLOYMENT'
  | 'IL AGENCY ACCESS'
  | 'COLLECTS IL RESIDENT DATA'
  | 'NATIONWIDE / APPLIES IN IL'
  | 'RESEARCH / NO KNOWN IL DEPLOYMENT'
  | 'HISTORICAL';
export type EvidenceGrade =
  | 'PRIMARY DOCUMENT'
  | 'FOIA RECORD'
  | 'COURT RECORD'
  | 'VENDOR DOCUMENTATION'
  | 'ACADEMIC RESEARCH'
  | 'INVESTIGATIVE REPORTING'
  | 'SECONDARY REPORTING'
  | 'COMMUNITY REPORT'
  | 'UNVERIFIED';

export type CatalogSource = {
  label: string;
  href: string;
  grade: EvidenceGrade;
};

export type CatalogEntityRef = {
  name: string;
  slug: string;
  type: 'vendor' | 'agency' | 'program' | 'platform' | 'research-program' | 'organization';
};

export type CatalogEntry = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  rung: SurveillanceRung;
  governmentLevel?: GovernmentLevel;
  status: string;
  applicability: IllinoisApplicability[];
  summary: string;
  encounter: string;
  dataCollected: string[];
  dataFlow: string[];
  operator?: string;
  entities?: CatalogEntityRef[];
  sources: CatalogSource[];
  detailHref?: string;
  caveat?: string;
};

export const rungMeta: Record<SurveillanceRung, { label: string; question: string; description: string }> = {
  government: {
    label: 'Government surveillance',
    question: 'The government is watching me.',
    description: 'Local, county, Illinois state, and federal systems that monitor, identify, locate, score, or investigate people in Illinois.'
  },
  workplace: {
    label: 'Corporate / workplace surveillance',
    question: 'I work here. How am I being tracked?',
    description: 'Monitoring performed by employers or on employer-managed systems, including user activity monitoring, productivity analytics, access logs, behavioral analytics, and insider-risk systems.'
  },
  consumer: {
    label: 'Consumer / retail surveillance',
    question: 'I shop here. How am I being tracked?',
    description: 'Retail, app, advertising, and e-commerce systems that profile customer behavior, attention, location, purchases, and willingness to pay.'
  },
  private: {
    label: 'Private / residential surveillance',
    question: 'I live near them. How am I being tracked?',
    description: 'Cameras and sensors operated by neighbors, property owners, HOAs, landlords, and other private parties that can capture people who never purchased or opted into the system.'
  },
  infrastructure: {
    label: 'Data brokers / surveillance infrastructure',
    question: 'I may never have dealt with them. Why do they have a profile on me?',
    description: 'Commercial identity, location, advertising, biometric, and intelligence infrastructure that connects data generated across the other surveillance rungs.'
  }
};

const legacyAsGovernment: CatalogEntry[] = legacyEntries.map((entry) => ({
  slug: entry.slug,
  name: entry.name,
  shortName: entry.shortName,
  category: entry.category,
  rung: 'government',
  governmentLevel: entry.slug === 'facial-recognition' || entry.slug === 'human-fingerprints' || entry.slug === 'covert-video'
    ? 'illinois-state'
    : 'local-county',
  status: entry.state,
  applicability: entry.state === 'HISTORICALLY CONFIRMED'
    ? ['HISTORICAL']
    : ['CONFIRMED IL DEPLOYMENT'],
  summary: entry.summary,
  encounter: entry.slug === 'alpr'
    ? 'Driving past a fixed or vehicle-mounted plate-reader camera.'
    : entry.slug === 'drones'
      ? 'Being present in an area observed by a law-enforcement drone during an authorized operation.'
      : entry.slug === 'facial-recognition'
        ? 'Obtaining or holding an Illinois driver license / ID, or being the subject of a qualifying facial-recognition search.'
        : 'Interacting with, passing through, or becoming the subject of the documented government system.',
  dataCollected: [entry.category],
  dataFlow: ['Collection by the documented system', 'Storage or processing by the operating agency/platform', 'Access according to applicable policy, law, and system permissions'],
  entities: entry.providers?.map((p) => ({ name: p.name, slug: p.href.split('/').filter(Boolean).pop() ?? p.name.toLowerCase().replaceAll(' ', '-'), type: 'vendor' as const })),
  sources: entry.sourceLinks.map((s) => ({
    label: s.label,
    href: s.href,
    grade: s.sourceType.includes('FOIA') ? 'FOIA RECORD' : s.sourceType.includes('Primary') ? 'PRIMARY DOCUMENT' : 'SECONDARY REPORTING'
  })),
  detailHref: entry.detailHref,
  caveat: entry.caveat
}));

export const addedCatalogEntries: CatalogEntry[] = [
  {
    slug: 'cbp-ohare-biometric-processing',
    name: 'CBP biometric facial comparison at O’Hare',
    shortName: 'CBP facial comparison',
    category: 'Biometric identity verification',
    rung: 'government',
    governmentLevel: 'federal-national',
    status: 'CONFIRMED',
    applicability: ['CONFIRMED IL DEPLOYMENT'],
    summary: 'U.S. Customs and Border Protection uses face-comparison technology at Chicago O’Hare, including Enhanced Passenger Processing for returning U.S. citizens.',
    encounter: 'Returning to the United States through an applicable CBP inspection process at Chicago O’Hare.',
    dataCollected: ['Facial image', 'Traveler identity', 'Travel/inspection context'],
    dataFlow: ['Photo captured during processing', 'Biometric comparison against government-held identity/travel records', 'Result presented to CBP processing systems and officers'],
    operator: 'U.S. Customs and Border Protection',
    entities: [{ name: 'U.S. Customs and Border Protection', slug: 'cbp', type: 'agency' }],
    sources: [{ label: 'CBP — Enhanced Passenger Processing at O’Hare (May 21, 2025)', href: 'https://www.cbp.gov/newsroom/local-media-release/chicago-cbp-and-chicago-department-aviation-introduce-updated', grade: 'PRIMARY DOCUMENT' }]
  },
  {
    slug: 'user-activity-monitoring',
    name: 'User Activity Monitoring (UAM)',
    shortName: 'User activity monitoring',
    category: 'Workplace / insider-risk monitoring',
    rung: 'workplace',
    status: 'ACTIVE CAPABILITY',
    applicability: ['NATIONWIDE / APPLIES IN IL'],
    summary: 'UAM is the technical capability to observe and record an individual’s activity on systems in order to detect insider threats and support authorized investigations. Commercial workplace-monitoring systems can implement related capabilities outside government.',
    encounter: 'Using an employer-managed computer, account, network, or other monitored work system.',
    dataCollected: ['Login/activity events', 'Application and resource access', 'File or network activity', 'Other endpoint telemetry depending on implementation'],
    dataFlow: ['Endpoint/account activity is recorded', 'Events are centralized or correlated', 'Rules or behavioral analytics identify activity for review', 'Analysts, security teams, or managers may act on resulting alerts'],
    entities: [{ name: 'UAM / UEBA systems', slug: 'uam-ueba', type: 'platform' }],
    sources: [{ label: 'NIST CSRC — User Activity Monitoring definition', href: 'https://csrc.nist.gov/glossary/term/user_activity_monitoring', grade: 'PRIMARY DOCUMENT' }],
    caveat: 'The NIST definition describes U.S. Government information-system use. It does not prove that a particular Illinois employer deploys a specific monitoring product or feature.'
  },
  {
    slug: 'surveillance-pricing',
    name: 'Surveillance pricing / individualized offers',
    shortName: 'Surveillance pricing',
    category: 'Algorithmic pricing and consumer profiling',
    rung: 'consumer',
    status: 'DOCUMENTED PRACTICE / CAPABILITY',
    applicability: ['NATIONWIDE / APPLIES IN IL'],
    summary: 'Retailers and pricing intermediaries can use granular personal and behavioral information to tailor prices, promotions, or which products are shown to different consumers.',
    encounter: 'Shopping through a website, app, loyalty ecosystem, or other channel where behavioral and personal data can be tied to the transaction.',
    dataCollected: ['Precise location', 'Browsing history', 'Shopping history', 'Demographics', 'Mouse movement', 'Cart abandonment and product interest'],
    dataFlow: ['Behavior and profile data are collected', 'A pricing or offer system estimates audience/customer characteristics', 'Different price, promotion, ranking, or offer may be presented'],
    entities: [{ name: 'Surveillance-pricing intermediaries', slug: 'surveillance-pricing-intermediaries', type: 'platform' }],
    sources: [{ label: 'FTC — Surveillance Pricing Study initial findings (Jan. 17, 2025)', href: 'https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-surveillance-pricing-study-indicates-wide-range-personal-data-used-set-individualized-consumer', grade: 'PRIMARY DOCUMENT' }],
    caveat: 'This entry documents the capability and market practice generally. It should not be used to claim that a named retailer currently personalizes every customer’s price without retailer-specific evidence.'
  },
  {
    slug: 'ring-community-requests',
    name: 'Networked doorbell cameras / Ring Community Requests',
    shortName: 'Ring / doorbell cameras',
    category: 'Residential video surveillance',
    rung: 'private',
    status: 'ACTIVE',
    applicability: ['NATIONWIDE / APPLIES IN IL'],
    summary: 'Privately operated doorbell cameras can record visitors, neighbors, pedestrians, vehicles, and public-facing areas. Ring’s Community Requests system allows verified public-safety agencies using Axon Evidence to request footage for investigations; participation is voluntary.',
    encounter: 'Walking, driving, delivering, visiting, or living within the field of view of a privately operated doorbell or residential camera.',
    dataCollected: ['Video', 'Audio where enabled/legal', 'Motion/event metadata', 'Time and camera/location context'],
    dataFlow: ['Private camera captures event', 'Footage is stored/managed through the user/vendor ecosystem', 'Owner may retain/share footage', 'If voluntarily submitted through Community Requests, footage transfers into Axon Evidence for the requesting agency'],
    operator: 'Private camera owner / property holder',
    entities: [
      { name: 'Ring', slug: 'ring', type: 'vendor' },
      { name: 'Axon Evidence', slug: 'axon-evidence', type: 'platform' }
    ],
    sources: [
      { label: 'Ring — Community Requests launch', href: 'https://blog.ring.com/?p=7608', grade: 'VENDOR DOCUMENTATION' },
      { label: 'Ring — Community Requests help documentation', href: 'https://partners.ring.com/support/articles/uds27/Community-requests', grade: 'VENDOR DOCUMENTATION' }
    ],
    caveat: 'Community Requests are voluntary. This entry does not claim that Ring continuously feeds all customer video to police.'
  },
  {
    slug: 'babel-street-locate-x',
    name: 'Babel Street Locate X / commercial location intelligence',
    shortName: 'Locate X',
    category: 'Commercial location intelligence',
    rung: 'infrastructure',
    status: 'DOCUMENTED FEDERAL USE',
    applicability: ['NATIONWIDE / APPLIES IN IL', 'COLLECTS IL RESIDENT DATA'],
    summary: 'Locate X uses commercially obtained mobile-advertising location data to support device-location analysis. FOIA litigation and released records document federal contracts involving CBP and ICE.',
    encounter: 'Carrying a mobile device whose apps or advertising ecosystem generate commercially available advertising/location telemetry.',
    dataCollected: ['Mobile advertising identifier', 'Device location history', 'Geofence-associated location events'],
    dataFlow: ['Mobile/app advertising ecosystem generates telemetry', 'Commercial data supply chain aggregates location data', 'Locate X makes location intelligence queryable', 'Authorized government users may access the commercial service'],
    entities: [
      { name: 'Babel Street', slug: 'babel-street', type: 'vendor' },
      { name: 'Locate X', slug: 'locate-x', type: 'platform' },
      { name: 'U.S. Customs and Border Protection', slug: 'cbp', type: 'agency' },
      { name: 'U.S. Immigration and Customs Enforcement', slug: 'ice', type: 'agency' }
    ],
    sources: [{ label: 'EPIC FOIA — CBP Babel Street / Locate X records', href: 'https://epic.org/documents/epic-foia-cbp-babel-street-location-tracking-service/', grade: 'FOIA RECORD' }],
    caveat: 'This entry establishes federal acquisition/use and a nationwide data capability; it does not establish that a particular Illinois resident was queried.'
  },
  {
    slug: 'adams',
    name: 'ADAMS — Anomaly Detection at Multiple Scales',
    shortName: 'ADAMS',
    category: 'Behavioral anomaly detection research',
    rung: 'workplace',
    status: 'HISTORICAL / RESEARCH COMPLETE',
    applicability: ['RESEARCH / NO KNOWN IL DEPLOYMENT', 'HISTORICAL'],
    summary: 'DARPA’s ADAMS research program developed anomaly-detection technology for massive datasets, with insider-threat detection as its initial application domain.',
    encounter: 'Research/historical entry only; NoRec does not currently document an Illinois deployment of ADAMS itself.',
    dataCollected: ['Information-system logs', 'Sensor/instrumentation data', 'Behavioral/anomaly signals'],
    dataFlow: ['Large datasets and logs are ingested', 'Algorithms identify anomalous behavior', 'Anomalies can cue additional collection or analysis'],
    operator: 'DARPA (research program)',
    entities: [
      { name: 'DARPA', slug: 'darpa', type: 'agency' },
      { name: 'ADAMS', slug: 'adams', type: 'research-program' }
    ],
    sources: [{ label: 'DARPA — ADAMS program archive', href: 'https://www.darpa.mil/research/programs/anomaly-detection-at-multiple-scales', grade: 'PRIMARY DOCUMENT' }],
    caveat: 'ADAMS is a completed federal research program, not a confirmed commercial product or known Illinois deployment.'
  }
];

export const surveillanceCatalog: CatalogEntry[] = [...legacyAsGovernment, ...addedCatalogEntries];

export const catalogEntities: CatalogEntityRef[] = Array.from(
  new Map(
    surveillanceCatalog.flatMap((entry) => entry.entities ?? []).map((entity) => [`${entity.type}:${entity.slug}`, entity])
  ).values()
);

export const entriesByRung = (rung: SurveillanceRung) => surveillanceCatalog.filter((entry) => entry.rung === rung);
export const entriesForEntity = (slug: string) => surveillanceCatalog.filter((entry) => entry.entities?.some((entity) => entity.slug === slug));
