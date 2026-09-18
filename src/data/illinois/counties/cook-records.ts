export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const cookCountyRecords: PublicRecordLink[] = [
  {
    title: 'Illinois State Archives — Cook County local-government index',
    description: 'State index for municipal and other local governments in Cook County.',
    officialUrl: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=COOK',
    kind: 'Official record',
  },
  {
    title: 'Cook County — About Cook County',
    description: 'Current County profile stating that Cook County contains 134 municipalities.',
    officialUrl: 'https://www.cookcountyil.gov/about-cook-county',
    kind: 'Official record',
  },
  {
    title: 'Cook County Sheriff — FOIA',
    description: 'Official Cook County entry point for Sheriff public-record requests.',
    officialUrl: 'https://www.cookcountyil.gov/service/freedom-information-sheriff',
    kind: 'FOIA portal',
  },
  {
    title: 'Cook County Sheriff — Aerial Support Response Team',
    description: 'Current Sheriff page describing its multi-aircraft sUAS team, deployment categories, and links to policy and procedure.',
    officialUrl: 'https://cookcountysheriffil.gov/fleet-management-logistics/',
    kind: 'Official record',
  },
  {
    title: 'Cook County Sheriff — Policy 186, Unmanned Aerial System',
    description: 'Current 2026 UAS policy addressing authorized/prohibited uses, facial recognition, private UAS information, and retention.',
    officialUrl: 'https://cookcountysheriffil.gov/wp-content/uploads/2026/04/Unmanned_Aerial_System_-5.pdf',
    kind: 'Policy',
    date: '2026-04-01',
  },
  {
    title: 'Cook County Sheriff — Electronic Monitoring Program',
    description: 'Current page describing GPS ankle-bracelet location monitoring and two-way communication.',
    officialUrl: 'https://cookcountysheriffil.gov/electronic-monitoring-program-placement/',
    kind: 'Official record',
    date: '2026-09-08',
  },
];

export const chicagoRecords: PublicRecordLink[] = [
  {
    title: 'Chicago Police — S03-14 Body Worn Cameras',
    description: 'Current 2026 CPD body-worn-camera directive, including Evidence.com storage and retention requirements.',
    officialUrl: 'https://directives.chicagopolice.org/api/publicDirective/6120',
    kind: 'Policy',
    date: '2026',
  },
  {
    title: 'Chicago Police — Special Orders index',
    description: 'CPD directives index identifying S03-20 Automated License Plate Reader Systems, S03-05 In-Car Video Systems, S03-14 Body Worn Cameras, and S03-18 Helicopter Operations Video System.',
    officialUrl: 'https://directives.chicagopolice.org/forms/CPD-11.716.pdf',
    kind: 'Policy',
  },
  {
    title: 'Chicago District Council 17 minutes — December 10, 2025',
    description: 'Official public-safety oversight record documenting CPD Police Observation Device cameras, including a Foster/Pulaski POD installed in September 2025.',
    officialUrl: 'https://ccpsa.chicago.gov/wp-content/uploads/2025/07/Minutes-017-2025-12-10-regular.pdf',
    kind: 'Official record',
    date: '2025-12-10',
  },
];

export const skokieRecords: PublicRecordLink[] = [
  {
    title: 'Skokie Police — Automated License Plate Reader Technology',
    description: 'Current September 2026 Village page documenting Flock, Axon Fleet, Vigilant, and Alltech ALPR systems, camera counts, retention, access, sharing, and audit safeguards.',
    officialUrl: 'https://www.skokie.org/1687/Automated-License-Plate-Reader-ALPR-Tech',
    kind: 'Official record',
    date: '2026-09',
  },
  {
    title: 'Illinois 2024 Body Worn Camera Report — Skokie Police',
    description: 'State report documenting 118 Axon 3 body-worn cameras for 116 sworn Skokie officers.',
    officialUrl: 'https://www.ptb.illinois.gov/media/1912/2024-body-worn-camera-report-final.pdf',
    kind: 'Official record',
    date: '2024',
  },
  {
    title: 'Skokie Police — Special Operations',
    description: 'Current Village page identifying the body-worn-camera program among Special Operations responsibilities.',
    officialUrl: 'https://www.skokie.org/1579/Special-Operations',
    kind: 'Official record',
  },
];

export const evanstonRecords: PublicRecordLink[] = [
  {
    title: 'Evanston — Flock Safety contract memorandum',
    description: 'January 2024 City memorandum recommending a five-year $48,500-per-year Flock contract for ALPRs and cameras, extending a relationship in place since 2022.',
    officialUrl: 'https://www.cityofevanston.org/home/showpublisheddocument/93695/638399912199130000',
    kind: 'Official record',
    date: '2024-01-08',
  },
];

export const oakParkRecords: PublicRecordLink[] = [
  {
    title: 'Oak Park Police — Automated License Plate Readers',
    description: 'Official Village page documenting eight Flock ALPRs installed in 2022 and termination of the program on August 5, 2025.',
    officialUrl: 'https://www.oak-park.us/Public-Safety/Police-Department/Reports-Maps/Submit-ImagesVideo/Automated-License-Plate-Readers',
    kind: 'Official record',
    date: '2025-08-06',
  },
];

export const cookMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  chicago: chicagoRecords,
  skokie: skokieRecords,
  evanston: evanstonRecords,
  'oak-park': oakParkRecords,
};


export const mountProspectRecords: PublicRecordLink[] = [
  {
    title: 'Mount Prospect — Flock LPR Cameras / state audit response',
    description: 'Village transparency page describing the Secretary of State audit, 262 immigration-related searches, and subsequent sharing restrictions.',
    officialUrl: 'https://www.mountprospect.org/services/transparency-and-fact-check-portal/flock-lpr-cameras',
    kind: 'Official record',
    date: '2025-06-12',
  },
];

export const forestParkRecords: PublicRecordLink[] = [
  {
    title: 'Illinois Secretary of State — Forest Park Motorola ALPR audit',
    description: 'State audit announcement reporting CBP access to Forest Park ALPR data and the subsequent disabling of federal sharing capabilities.',
    officialUrl: 'https://www.ilsos.gov/news/2025/september-5-2025-giannoulias-audit-uncovers-forest-park-police-department-sharing-license-plate-reader-data.html',
    kind: 'Official record',
    date: '2025-09-05',
  },
];
