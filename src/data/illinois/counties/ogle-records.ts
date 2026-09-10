export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const ogleCountyRecords: PublicRecordLink[] = [
  {
    title: 'Ogle County Sheriff — FOIA request portal',
    description: 'Public-record request portal for the Ogle County Sheriff, including an anonymous Illinois FOIA form.',
    officialUrl: 'https://records.govquest.com/oglecountyso/publicportal/requests/new/5f6dc030-13e6-11f1-aed7-234233edc158',
    kind: 'FOIA portal',
  },
  {
    title: 'Illinois State Archives — Ogle County local-government index',
    description: 'State-maintained local-government index used as the baseline for Ogle County incorporated municipalities.',
    officialUrl: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=OGLE',
    kind: 'Official record',
  },
  {
    title: 'Ogle County 2023–2025 Yearbook',
    description: 'Official county yearbook. Its city/village tax-valuation table confirms Monroe Center and the small Rockford municipal portion in Ogle County.',
    officialUrl: 'https://www.oglecountyil.gov/document_center/County%20Clerk/Yearbook/2023%20-%202025%20Yearbook%20-.pdf',
    kind: 'Official record',
    date: '2023–2025',
  },
  {
    title: 'Illinois Attorney General PAC Opinion 20-008',
    description: 'Binding FOIA opinion involving the Ogle County Sheriff. The Public Access Counselor found the Sheriff improperly withheld responsive police records concerning a minor victim.',
    officialUrl: 'https://illinoisattorneygeneral.gov/Page-Attachments/FOIAPAC/2020-Binding-PAC-Opinions/20-008.pdf',
    kind: 'Official record',
    date: '2020-12-21',
  },
];

export const ogleMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  'adeline': [],
  'byron': [
    { title: 'City of Byron — FOIA', description: 'Official City FOIA instructions and request forms.', officialUrl: 'https://cityofbyron.com/1198/Freedom-of-Information-Act-FOIA', kind: 'FOIA portal' },
  ],
  'creston': [
    { title: 'Village of Creston — FOIA information', description: 'Official Village FAQ with current FOIA submission instructions.', officialUrl: 'https://www.villageofcreston.org/faqs/', kind: 'FOIA portal' },
  ],
  'davis-junction': [],
  'forreston': [
    { title: 'Village of Forreston — FOIA', description: 'Official Village public-information request instructions.', officialUrl: 'https://villageofforreston.org/foia', kind: 'FOIA portal' },
  ],
  'hillcrest': [],
  'leaf-river': [
    { title: 'Village of Leaf River — official website', description: 'Official Village website and municipal contact information; a dedicated FOIA portal was not located in this pass.', officialUrl: 'https://www.villageofleafriver.com/', kind: 'Official record' },
  ],
  'monroe-center': [],
  'mount-morris': [
    { title: 'Village of Mount Morris — official website', description: 'Official municipal website linked from the Village code publisher; a dedicated FOIA page was not located in this pass.', officialUrl: 'http://mtmorrisil.net/', kind: 'Official record' },
  ],
  'oregon': [
    { title: 'City of Oregon — FOIA', description: 'Official City and Police Department FOIA procedures and request forms.', officialUrl: 'https://oregonil.gov/resident-information/foia/', kind: 'FOIA portal' },
  ],
  'polo': [
    { title: 'City of Polo — FOIA', description: 'Official City and Police Department FOIA instructions.', officialUrl: 'https://www.poloil.gov/page/foia', kind: 'FOIA portal' },
  ],
  'rochelle': [
    { title: 'City of Rochelle — FOIA', description: 'Official City FOIA procedures; the City Clerk serves as FOIA Officer.', officialUrl: 'https://www.cityofrochelle.net/content/city-clerk/freedom-of-information-act/', kind: 'FOIA portal' },
    { title: 'Rochelle Police — records and documents', description: 'Official Police Department documents area containing the department FOIA request form and public records.', officialUrl: 'https://www.cityofrochelle.net/~documents/department-documents/police-department-documents/', kind: 'Official record' },
  ],
  'rockford': [
    { title: 'Rockford dossier — canonical NoRec page', description: 'Rockford crosses into Ogle County, but its municipal research is maintained once under the Winnebago County canonical route.', localUrl: '/illinois/counties/winnebago/cities/rockford/', kind: 'Archive' },
  ],
  'stillman-valley': [
    { title: 'Village of Stillman Valley — FOIA compliance', description: 'Official Village FOIA procedures, records categories, and FOIA officer information.', officialUrl: 'https://stillmanvalley.us/foia-compliance/', kind: 'FOIA portal' },
  ],
};
