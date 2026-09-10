export type JurisdictionRecord = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const booneCountyRecords: JurisdictionRecord[] = [
  {
    title: 'BCSO Policy 450 — Automated License Plate Readers (ALPRs)',
    description: 'Policy released in NoRec FOIA request 26-164. Covers authorized use, alert verification, auditing, retention, sharing restrictions, and data captured by the ALPR system.',
    localUrl: '/archive/deflock/26-164_BCSO_Policy_450_ALPRs.pdf',
    kind: 'FOIA release',
    date: '2026-06-03',
  },
  {
    title: 'NoRec FOIA request 26-164 — request and response history',
    description: 'Archived request metadata and the public-body response history for the policy release.',
    localUrl: '/archive/deflock/26-164_BCSO_FOIA.md',
    kind: 'Archive',
    date: '2026-06-03',
  },
  {
    title: 'Boone County Sheriff / Belvidere Police FOIA request form',
    description: 'Official Boone County public-safety FOIA form. NoRec links to the government-hosted copy rather than treating the form itself as a surveillance finding.',
    officialUrl: 'https://cms8.revize.com/revize/booneil/Departments/sheriff/FOIA%20request.pdf',
    kind: 'FOIA portal',
  },
];

export const belvidereRecords: JurisdictionRecord[] = [
  {
    title: 'City of Belvidere — Flock camera locations FOIA response',
    description: 'City release listing seven Belvidere Flock entries: six installed and one in planning. This is the source of the municipal camera inventory shown on this page.',
    localUrl: '/archive/deflock/Belvidere_Flock_Camera_Locations_FOIA_Response.docx',
    kind: 'FOIA release',
  },
  {
    title: 'Extracted image — Belvidere Flock camera locations',
    description: 'Image extracted from the released DOCX for browser-friendly review.',
    localUrl: '/archive/deflock/Belvidere_Flock_Camera_Locations_FOIA_Response.png',
    kind: 'Archive',
  },
  {
    title: 'City of Belvidere — Freedom of Information',
    description: 'Official City FOIA information and request instructions.',
    officialUrl: 'https://www.belvidereil.gov/freedom-of-information/',
    kind: 'FOIA portal',
  },
  {
    title: 'Belvidere Police Department — Incident Reports & FOIA',
    description: 'Official police-department records-request page and FOIA contact information.',
    officialUrl: 'https://www.belvidereil.gov/police/incident-reports/',
    kind: 'FOIA portal',
  },
  {
    title: 'Belvidere Police Department — public-record categories',
    description: 'Official catalog of categories of records maintained by the police department.',
    officialUrl: 'https://www.belvidereil.gov/wp-content/uploads/2023/09/Police_Dept._Public_Records_for_FOIA_2010.doc.pdf',
    kind: 'Official record',
  },
];

export const booneMunicipalityFoiaLinks: Record<string, JurisdictionRecord[]> = {
  'poplar-grove': [
    {
      title: 'Village of Poplar Grove — Village Clerk / FOIA',
      description: 'The Village Clerk serves as FOIA officer; the official page includes request instructions and the current request form.',
      officialUrl: 'https://www.poplargrove-il.gov/clerk',
      kind: 'FOIA portal',
    },
  ],
  'timberlane': [
    {
      title: 'Village of Timberlane — FOIA request procedure',
      description: 'Official Village procedure, FOIA-officer contacts, and categories available immediately upon request.',
      officialUrl: 'https://villageoftimberlane.org/freedom-of-information-act-request-procedure/',
      kind: 'FOIA portal',
    },
  ],
  'loves-park': [
    {
      title: 'City of Loves Park — Freedom of Information Act',
      description: 'Official City FOIA policy, request instructions, and records contacts.',
      officialUrl: 'https://cityoflovespark.com/freedom-of-information-act/',
      kind: 'FOIA portal',
    },
    {
      title: 'Loves Park Police Department — FOIA request',
      description: 'Official police-department FOIA instructions and request access.',
      officialUrl: 'https://lovesparkpolice.org/foia-request',
      kind: 'FOIA portal',
    },
  ],
};
