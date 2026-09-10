export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const leeCountyRecords: PublicRecordLink[] = [
  {
    title: 'Lee County — Freedom of Information Act information',
    description: 'Official County FOIA instructions, request form, and department-specific records guidance.',
    officialUrl: 'https://www.leecountyil.com/334/Freedom-of-Information-Act-FOIA-Informat',
    kind: 'FOIA portal',
  },
  {
    title: 'Lee County — department FOIA contacts',
    description: 'Official department directory identifying the Sheriff Department FOIA contact and other county FOIA officers.',
    officialUrl: 'https://www.leecountyil.com/336/Department-FOIA-Contacts',
    kind: 'FOIA portal',
  },
  {
    title: 'Illinois State Archives — Lee County local-government index',
    description: 'State-maintained local-government index used as the incorporated-municipality baseline for this county batch.',
    officialUrl: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=LEE',
    kind: 'Official record',
  },
  {
    title: 'Lee County comprehensive plan',
    description: 'Official county planning document identifying Dixon and Amboy plus the county villages and noting that the Village of Lee lies on the DeKalb/Lee county line.',
    officialUrl: 'https://www.leecountyil.com/DocumentCenter/View/219/Lee-County-Comprehensive-Plan-PDF',
    kind: 'Official record',
    date: '2010-05-18',
  },
  {
    title: 'Lee County Sheriff — Unmanned Aerial System Policy',
    description: 'Official Sheriff policy governing UAS authorization, mission records, retention, evidentiary handling, public notification, and other drone-program controls.',
    officialUrl: 'https://www.leecountyil.com/DocumentCenter/View/4606/Unmanned-Aerial-System-Policy',
    kind: 'Policy',
    date: '2024-03-05',
  },
  {
    title: 'Lee County Finance Committee — FY2025 budget hearing minutes',
    description: 'Official county record listing six Flock Safety LPR cameras for the Sheriff in the preliminary capital budget.',
    officialUrl: 'https://www.leecountyil.com/AgendaCenter/ViewFile/Minutes/_08082024-934',
    kind: 'Official record',
    date: '2024-08-08',
  },
  {
    title: 'Lee County Public Safety Committee — Flock discussion',
    description: "Official committee minutes recording discussion of the uses and benefits of the Sheriff's Flock license-plate readers.",
    officialUrl: 'https://www.leecountyil.com/AgendaCenter/ViewFile/Minutes/_10082024-959',
    kind: 'Official record',
    date: '2024-10-08',
  },
  {
    title: 'Lee County Sheriff report — August 2025',
    description: 'Official Sheriff report documenting a Flock LPR hit on a stolen vehicle entering Lee County, confirming operational use after the FY2025 budget entry.',
    officialUrl: 'https://www.leecountyil.com/AgendaCenter/ViewFile/Minutes/_08122025-1076',
    kind: 'Official record',
    date: '2025-08-12',
  },
];

export const dixonRecords: PublicRecordLink[] = [
  {
    title: 'City of Dixon — FOIA request information',
    description: 'Official City FOIA page with separate instructions for City and Police Department public-record requests.',
    officialUrl: 'https://www.dixongov.com/content/departments/city-administration/city-clerk/freedom-of-information-request/',
    kind: 'FOIA portal',
  },
  {
    title: 'Dixon Police Department',
    description: 'Official Police Department page and public document entry point.',
    officialUrl: 'https://www.dixongov.com/content/departments/police-department/',
    kind: 'Official record',
  },
  {
    title: 'City of Dixon — thermal drone donation / deployment',
    description: 'Official City article documenting a thermal-imaging drone for the Fire Department, operational use at a fire, and planned police/fire drone-license training.',
    officialUrl: 'https://www.dixongov.com/sewer-equipment-donates-thermal-drone-to-fire-department/',
    kind: 'Official record',
  },
];

export const leeMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  'amboy': [
    { title: 'City of Amboy — FOIA', description: 'Official City FOIA instructions and records-request contact.', officialUrl: 'https://cityofamboy.com/foia/', kind: 'FOIA portal' },
  ],
  'ashton': [
    { title: 'Village of Ashton — Village Clerk', description: 'Official Village Clerk page identifying the Clerk as the municipal FOIA Officer.', officialUrl: 'https://ashtonil.com/village-clerk/', kind: 'FOIA portal' },
  ],
  'compton': [],
  'dixon': dixonRecords,
  'franklin-grove': [
    { title: 'Village of Franklin Grove — official website', description: 'Official municipal website; a dedicated FOIA page was not located in this pass.', officialUrl: 'http://www.franklingrove.org', kind: 'Official record' },
  ],
  'harmon': [],
  'lee': [
    { title: 'Village of Lee — FOIA', description: 'Official Village FOIA procedures and request information.', officialUrl: 'https://www.villageoflee.com/freedom-of-information-act.html', kind: 'FOIA portal' },
    { title: 'Village of Lee — cross-county geography', description: 'Official Village page confirming that Lee straddles DeKalb and Lee counties.', officialUrl: 'https://www.villageoflee.com/about-lee.html', kind: 'Official record' },
  ],
  'nelson': [
    { title: 'Village of Nelson — meetings, agendas & minutes', description: 'Official Village public meeting archive; a dedicated FOIA page was not located in this pass.', officialUrl: 'https://villageofnelson.org/meetings.html', kind: 'Official record' },
  ],
  'paw-paw': [
    { title: 'Village of Paw Paw — official website', description: 'Official Illinois Village website; no dedicated Illinois FOIA page was located in this pass.', officialUrl: 'http://pawpawil.org/', kind: 'Official record' },
  ],
  'rochelle': [
    { title: 'Rochelle dossier — canonical Ogle County route', description: 'Rochelle crosses Ogle and Lee counties. Its municipal research is maintained once under the Ogle County canonical route.', localUrl: '/illinois/counties/ogle/cities/rochelle/', kind: 'Archive' },
  ],
  'steward': [
    { title: 'Village of Steward — FOIA request form', description: 'Official Village FOIA form and submission instructions.', officialUrl: 'https://stewardil.com/files/FOIA.pdf', kind: 'FOIA portal' },
  ],
  'sublette': [
    { title: 'Village of Sublette — official website', description: 'Official municipal website identified by the Illinois State Treasurer; a dedicated FOIA page was not located in this pass.', officialUrl: 'https://www.subletteweb.com/', kind: 'Official record' },
  ],
  'west-brooklyn': [],
};
