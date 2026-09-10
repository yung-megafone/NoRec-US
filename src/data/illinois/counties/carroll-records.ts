export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const carrollCountyRecords: PublicRecordLink[] = [
  {
    title: 'Illinois State Archives — Carroll County local-government index',
    description: 'State index identifying Carroll County’s seven incorporated municipalities and their forms of government.',
    officialUrl: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=CARROLL',
    kind: 'Official record',
  },
  {
    title: 'Carroll County Board packet — June 20, 2024',
    description: 'Official County Board packet stating that the Sheriff had completed body-camera training, was resolving software issues, and expected field use to begin the following week.',
    officialUrl: 'https://www.carrollcountyil.gov/BOARD%20PACKET_6.20.24.pdf',
    kind: 'Official record',
    date: '2024-06-20',
  },
  {
    title: 'Carroll County Sheriff — official department page',
    description: 'Official Carroll County Sheriff department page and current agency contact point.',
    officialUrl: 'https://www.carroll-county.net/county_departments/sheriff/index.php',
    kind: 'Official record',
  },
];

export const mountCarrollRecords: PublicRecordLink[] = [
  {
    title: 'Illinois 2018 Body Worn Camera Report — Mount Carroll Police',
    description: 'State report documenting department-wide BWC use among three full-time and seven part-time officers and two BWC systems received through the 2018 grant.',
    officialUrl: 'https://www.ptb.illinois.gov/media/1461/iletsb_body_worn_camera_report_2018.pdf',
    kind: 'Official record',
    date: '2018',
  },
];

export const savannaRecords: PublicRecordLink[] = [
  {
    title: 'People v. Siegwarth — Illinois Appellate Court order',
    description: 'January 2026 Illinois Appellate Court order documenting body-worn-camera video from a March 26, 2025 Savanna Police traffic stop.',
    officialUrl: 'https://ilcourtsaudio.blob.core.windows.net/antilles-resources/resources/cd43d559-dcaf-4a63-8131-cf1d5da52cf5/People%20v.%20Siegwarth%202026%20IL%20App%20%284th%29%20250778-.pdf',
    kind: 'Official record',
    date: '2026-01-08',
  },
];

export const carrollMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  'mount-carroll': mountCarrollRecords,
  savanna: savannaRecords,
};
