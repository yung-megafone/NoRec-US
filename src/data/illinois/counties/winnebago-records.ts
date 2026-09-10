export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const winnebagoCountyRecords: PublicRecordLink[] = [
  {
    title: 'Winnebago County — jurisdiction and municipal directory',
    description: 'Official county page identifying municipal roadway jurisdictions and listing the municipalities used to cross-check this county directory.',
    officialUrl: 'https://wincoil.gov/departments/highway-department/jurisdiction-and-map',
    kind: 'Official record',
  },
  {
    title: 'Illinois State Archives — Winnebago County local-government index',
    description: 'State-maintained index used to verify the incorporated cities and villages represented in this batch.',
    officialUrl: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=WINNEBAGO',
    kind: 'Official record',
  },
  {
    title: 'Winnebago County Board — May 23, 2024 agenda packet / Flock agreement',
    description: 'County Board packet containing the five-year Flock agreement and related appropriation material.',
    officialUrl: 'https://wincoil.gov/images/2024_05_23_Board_Agenda_PACKET.pdf',
    kind: 'Official record',
    date: '2024-05-23',
  },
  {
    title: 'Winnebago County contract register',
    description: 'Official county contract-search portal for current and historical agreements.',
    officialUrl: 'https://contracts.wincoil.gov/',
    kind: 'Official record',
  },
];

export const rockfordRecords: PublicRecordLink[] = [
  {
    title: 'City of Rockford — Public Records / FOIA',
    description: 'Official City public-records page and FOIA request portal.',
    officialUrl: 'https://www.rockfordil.gov/379/Public-Records',
    kind: 'FOIA portal',
  },
  {
    title: 'Rockford Police Department — Records Requests / FOIA',
    description: 'Official police records page with FOIA request access and Records Center information.',
    officialUrl: 'https://www.rockfordil.gov/201/How-to-Obtain-Information-from-the-Rockf',
    kind: 'FOIA portal',
  },
  {
    title: 'City of Rockford — Crime Reduction Initiatives',
    description: 'Primary city page documenting more than 150 mobile/stationary LPRs, expanded cameras, gunshot-detection software, and social-analytic software.',
    officialUrl: 'https://rockfordil.gov/618/Crime-Reduction-Initiatives',
    kind: 'Official record',
  },
  {
    title: 'Rockford Police Department General Order 2.56 — Body Worn Cameras',
    description: 'Official body-camera policy. Defines AXON docking stations and operational, upload, retention, privacy, and public-record procedures.',
    officialUrl: 'https://www.rockfordil.gov/DocumentCenter/View/294/Body-Worn-Camera-Policy-101321-PDF',
    kind: 'Policy',
    date: '2021-10-13',
  },
  {
    title: 'Rockford City Council — 2026 Flock sole-source contract',
    description: 'Official legislative record for the 2026 Flock contract and supporting procurement material.',
    officialUrl: 'https://rockfordil.legistar.com/LegislationDetail.aspx?GUID=4A7C95F1-BFEC-4ECC-BFE1-0ED3276BCC38&ID=7870155&Options=ID%7CText%7C&Search=Flock',
    kind: 'Official record',
    date: '2026',
  },
  {
    title: 'Illinois SFY 2024 Freedom from Drone Surveillance Act report',
    description: 'State report containing Rockford Police and Winnebago County Sheriff drone inventories and reported flight activity.',
    officialUrl: 'https://agency.icjia-api.cloud/uploads/SFY_24_Drone_Report_with_Appendices_491dfa4810.pdf',
    kind: 'Official record',
    date: '2024',
  },
];

export const winnebagoMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  'cherry-valley': [],
  'durand': [
    { title: 'Village of Durand — FOIA', description: 'Official Village and Police Department FOIA request information.', officialUrl: 'https://villageofdurand.com/foia/', kind: 'FOIA portal' },
  ],
  'loves-park': [
    { title: 'City of Loves Park — Freedom of Information Act', description: 'Official City FOIA policy, request instructions, and records contact.', officialUrl: 'https://cityoflovespark.com/freedom-of-information-act/', kind: 'FOIA portal' },
  ],
  'machesney-park': [],
  'new-milford': [
    { title: 'Village of New Milford — official website / FOIA', description: 'Official Village website provides a dedicated FOIA section and public-meeting records.', officialUrl: 'https://villageofnewmilford.org/', kind: 'FOIA portal' },
  ],
  'pecatonica': [],
  'rockford': rockfordRecords,
  'rockton': [],
  'roscoe': [],
  'south-beloit': [
    { title: 'City of South Beloit — public-record request form', description: 'Official City documents page containing the FOIA public-record request form.', officialUrl: 'https://www.southbeloit.org/documents', kind: 'FOIA portal' },
    { title: 'South Beloit Police — records requests', description: 'Official police page with FOIA records-request instructions.', officialUrl: 'https://www.southbeloit.org/police', kind: 'FOIA portal' },
  ],
  'winnebago': [
    { title: 'Village of Winnebago — FOIA Request', description: 'Official Village FOIA procedure, request form, and Village/Police FOIA officer information.', officialUrl: 'https://www.villageofwinnebago.com/board-trustees/page/foia-request', kind: 'FOIA portal' },
  ],
};
