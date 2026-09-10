export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const kendallCountyRecords: PublicRecordLink[] = [
  {
    title: 'Kendall County — FOIA postings and online request portal',
    description: 'Official county FOIA hub covering Administration, KenCom, Sheriff, and other county offices.',
    officialUrl: 'https://www.kendallcountyil.gov/transparency/foia-postings-532',
    kind: 'FOIA portal',
  },
  {
    title: 'Kendall County Sheriff — Records / FOIA',
    description: 'Official Sheriff records page with current FOIA instructions and the online records-request process.',
    officialUrl: 'https://www.kendallcountyil.gov/offices/sheriff/records',
    kind: 'FOIA portal',
  },
  {
    title: 'Kendall County Sheriff — Transparency',
    description: 'Official Sheriff transparency page linking current annual reports and the Unmanned Aerial System policy.',
    officialUrl: 'https://www.kendallcountyil.gov/offices/sheriff/transparency',
    kind: 'Official record',
  },
  {
    title: 'Kendall County — municipality/community index',
    description: 'Official county list identifying 15 municipalities or municipal portions within Kendall County.',
    officialUrl: 'https://www.kendallcountyil.gov/departments/economic-development/available-incentives',
    kind: 'Official record',
  },
  {
    title: 'Illinois State Archives — Kendall County local-government index',
    description: 'State-maintained local-government index used to cross-check Kendall County municipalities.',
    officialUrl: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=KENDALL',
    kind: 'Official record',
  },
  {
    title: 'Kendall County Yearbook & Government Guide',
    description: 'Official county guide with municipal officials and jurisdiction reference information.',
    officialUrl: 'https://www.kendallcountyil.gov/home/showpublisheddocument/184/639095932485200000',
    kind: 'Official record',
    date: '2026',
  },
  {
    title: 'KenCom — 2020 Flock Safety demonstration / regional LPR discussion',
    description: 'Official KenCom Finance Committee record documenting a Flock Safety demonstration and discussion of making KenCom the hub for a shared license-plate-reader system.',
    officialUrl: 'https://www.kendallcountyil.gov/home/showpublisheddocument/17740/637336024181130000',
    kind: 'Official record',
    date: '2020-07',
  },
  {
    title: 'KenCom — License Plate Reader project minutes',
    description: 'Official 2021 Finance Committee minutes documenting agency MOUs, audit/monitoring protocols, placement rules, camera-movement rules, and early Flock installations.',
    officialUrl: 'https://www.kendallcountyil.gov/home/showpublisheddocument/21054/637653096441670000',
    kind: 'Official record',
    date: '2021-07',
  },
  {
    title: 'KenCom — License Plate Reader Committee agenda',
    description: 'Official August 2021 LPR Committee agenda showing continued work on the security and user memorandum of understanding.',
    officialUrl: 'https://www.kendallcountyil.gov/home/showpublisheddocument/20994/637643591167600000',
    kind: 'Official record',
    date: '2021-08-26',
  },
];

export const oswegoRecords: PublicRecordLink[] = [
  {
    title: 'Village of Oswego — Freedom of Information Act',
    description: 'Official Village and Police FOIA instructions and online request portal.',
    officialUrl: 'https://www.oswegoil.org/government/departments/village-clerk/freedom-of-information-act-foia',
    kind: 'FOIA portal',
  },
  {
    title: 'Oswego Village Board — Automatic License Plate Reader Program',
    description: 'Official April 2022 board packet approving the Flock Safety memorandum and KenCom intergovernmental agreement for the ALPR program.',
    officialUrl: 'https://www.oswegoil.org/home/showpublisheddocument/4840/637855499223800000',
    kind: 'Official record',
    date: '2022-04-19',
  },
  {
    title: 'Oswego Police — Flock used in 2025 hit-and-run investigation',
    description: 'Official police release documenting operational use of the department’s Flock license-plate-reader system.',
    officialUrl: 'https://www.oswegoil.org/Home/Components/News/News/457/736',
    kind: 'Official record',
    date: '2025-02-10',
  },
  {
    title: 'Oswego Police — Small Unmanned Aircraft Systems policy',
    description: 'Official policy page governing operation, use, administration, and oversight of the department drone program.',
    officialUrl: 'https://www.oswegoil.org/government/police/resources/small-unmanned-aircraft-systems-suas-policy',
    kind: 'Policy',
  },
  {
    title: 'Oswego Police — 2022 Annual Report',
    description: 'Official annual report stating that Oswego implemented and deployed its body-worn-camera program in 2022.',
    officialUrl: 'https://www.oswegoil.org/home/showpublisheddocument/5754/638155123956070000',
    kind: 'Official record',
    date: '2022',
  },
];

export const planoRecords: PublicRecordLink[] = [
  {
    title: 'City of Plano — FOIA Officer',
    description: 'Official City FOIA instructions and request forms.',
    officialUrl: 'https://cityofplanoil.com/250/City-ClerkFOIA-Officer',
    kind: 'FOIA portal',
  },
  {
    title: 'Plano — Flock grant and four-camera procurement memo',
    description: 'Official October 2025 staff memo describing the $14,000 Illinois Attorney General grant, four-camera Flock quote, and Plano’s existing KenCom camera access.',
    officialUrl: 'https://www.cityofplanoil.com/AgendaCenter/ViewFile/Item/13223?fileID=3712',
    kind: 'Official record',
    date: '2025-10-27',
  },
  {
    title: 'Plano City Council — Flock contract approval minutes',
    description: 'Official November 2025 council minutes documenting approval of four Flock Safety LPR cameras and discussion of access, retention, and data-sharing questions.',
    officialUrl: 'https://www.cityofplanoil.com/AgendaCenter/ViewFile/Minutes/_11102025-2188',
    kind: 'Official record',
    date: '2025-11-10',
  },
  {
    title: 'Plano — Illinois Attorney General ORC grant award / Flock packet',
    description: 'Official packet containing the FY26 organized-retail-crime grant award and Flock procurement materials.',
    officialUrl: 'https://www.cityofplanoil.com/AgendaCenter/ViewFile/Item/13347?fileID=3759',
    kind: 'Official record',
    date: '2025-11-24',
  },
];

export const yorkvilleRecords: PublicRecordLink[] = [
  {
    title: 'United City of Yorkville — Police FOIA',
    description: 'Official Yorkville Police Department records-request instructions and FOIA officer information.',
    officialUrl: 'https://www.yorkville.il.us/222/FOIA-Information-Requests',
    kind: 'FOIA portal',
  },
  {
    title: 'Yorkville Police — Automated License Plate Readers policy',
    description: 'Official ALPR policy covering fixed systems, alerts, hot lists, confidentiality, access, audit procedures, storage, and retention.',
    officialUrl: 'https://www.yorkville.il.us/Archive/ViewFile/Item/4582',
    kind: 'Policy',
  },
  {
    title: 'Yorkville Police — Unmanned Aerial System Operations policy',
    description: 'Official UAS policy covering deployments, annual reporting, review, disclosure, and destruction of non-exempt recordings.',
    officialUrl: 'https://www.yorkville.il.us/DocumentCenter/View/9572/Unmanned-Aerial-System-Operations?bidId=',
    kind: 'Policy',
  },
  {
    title: 'Yorkville Public Safety Committee — 2023 annual report review',
    description: 'Official committee minutes noting police drone use and trained operators during review of the department annual report.',
    officialUrl: 'https://www.yorkville.il.us/ArchiveCenter/ViewFile/Item/5666',
    kind: 'Official record',
    date: '2024-07',
  },
  {
    title: 'Yorkville Police — transparency and accountability',
    description: 'Official department transparency page with published general orders and annual accountability reports.',
    officialUrl: 'https://www.yorkville.il.us/788/Police-Transparency-Accountability',
    kind: 'Official record',
  },
];

export const kendallMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  'aurora': [
    { title: 'City of Aurora — official city website', description: 'Aurora spans Kane, DuPage, Kendall, and Will counties. Full municipal research should be maintained once when the Aurora canonical dossier is built.', officialUrl: 'https://www.aurora.il.us/Government-and-Engagement/About-Our-City', kind: 'Official record' },
  ],
  'joliet': [
    { title: 'City of Joliet — Police FOIA', description: 'Official Police Department public-record request instructions.', officialUrl: 'https://www.joliet.gov/government/departments/police-department/divisions/technical-services/records/foia', kind: 'FOIA portal' },
  ],
  'lisbon': [],
  'millbrook': [
    { title: 'Village of Millbrook — FOIA', description: 'Official Village FOIA instructions.', officialUrl: 'https://www.thevillageofmillbrook.com/foia.html', kind: 'FOIA portal' },
  ],
  'millington': [],
  'minooka': [
    { title: 'Village of Minooka — county jurisdiction reference', description: 'Official Village page identifying Grundy, Kendall, and Will County jurisdictions for the municipality.', officialUrl: 'https://www.minooka.com/our-government/elections/', kind: 'Official record' },
  ],
  'montgomery': [
    { title: 'Village of Montgomery — FOIA', description: 'Official municipal and Police Department records-request information.', officialUrl: 'https://www.montgomeryil.org/162/FOIA', kind: 'FOIA portal' },
    { title: 'Village of Montgomery — county jurisdiction', description: 'Official Village page confirming Montgomery lies in Kane and Kendall counties.', officialUrl: 'https://montgomeryil.org/248/Counties', kind: 'Official record' },
  ],
  'newark': [
    { title: 'Village of Newark — public-record request form', description: 'Official Village forms page with Freedom of Information public-record request material.', officialUrl: 'https://www.newark-il.us/formsandpermits', kind: 'FOIA portal' },
  ],
  'oswego': oswegoRecords,
  'plainfield': [
    { title: 'Village of Plainfield — FOIA', description: 'Official municipal and Police Department FOIA portal.', officialUrl: 'https://www.plainfieldil.gov/services/foia-requests', kind: 'FOIA portal' },
  ],
  'plano': planoRecords,
  'plattville': [
    { title: 'Village of Plattville — 2026 comprehensive plan amendment', description: 'Official Kendall County-hosted planning record confirming Plattville as an incorporated Kendall County village.', officialUrl: 'https://www.kendallcountyil.gov/home/showpublisheddocument/35163/639096096173530000', kind: 'Official record', date: '2026' },
  ],
  'sandwich': [
    { title: 'City of Sandwich — FOIA requests', description: 'Official City and Police Department FOIA instructions.', officialUrl: 'https://www.sandwich.il.us/city-clerk/page/freedom-information-act-requests', kind: 'FOIA portal' },
  ],
  'shorewood': [
    { title: 'Village of Shorewood — FOIA disclosure', description: 'Official FOIA disclosure and request instructions for Village and Police records.', officialUrl: 'https://cms2.revize.com/revize/shorewood/government/foia/Shorewood%20-%202025%20FOIA%20Disclosures_published%20Jan%2026%202024.pdf', kind: 'FOIA portal' },
  ],
  'yorkville': yorkvilleRecords,
};
