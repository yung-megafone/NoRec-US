export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const stephensonCountyRecords: PublicRecordLink[] = [
  {
    title: 'Illinois State Archives — Stephenson County local-government index',
    description: 'State index identifying Stephenson County’s incorporated municipalities and their forms of government.',
    officialUrl: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=STEPHENSON',
    kind: 'Official record',
  },
  {
    title: 'Stephenson County — 2022–2027 Multi-Hazard Mitigation Plan',
    description: 'County plan listing one city and ten villages/towns as incorporated municipalities in Stephenson County.',
    officialUrl: 'https://cms7files.revize.com/stephensoncountyil/2022-2027%20Stephenson%20County%20Multi-Hazard%20Mitigation%20Plan%20-%202022-06-01%20FINAL.pdf',
    kind: 'Official record',
    date: '2022',
  },
  {
    title: 'Stephenson County Sheriff — FOIA',
    description: 'Current Sheriff FOIA portal. The page specifically addresses requests for body-worn camera, squad-camera, jail-camera, and other law-enforcement video.',
    officialUrl: 'https://stephensonsheriff.com/foia',
    kind: 'FOIA portal',
  },
  {
    title: 'Stephenson County Sheriff — Corrections',
    description: 'Current Corrections page stating that the jail contains nearly 100 surveillance cameras and that corrections staff wear body-worn cameras.',
    officialUrl: 'https://stephensonsheriff.com/corrections',
    kind: 'Official record',
  },
  {
    title: 'Sheriff Stovall statement regarding Sonya Massey',
    description: 'Official July 2024 Sheriff statement saying body-worn cameras had been issued to all Stephenson County deputies.',
    officialUrl: 'https://stephensonsheriff.com/file_library/sheriff-stovall-s-statement-regarding-murder-of-sonya-massey-25-72-669fdd2e6e375.pdf',
    kind: 'Official record',
    date: '2024-07-23',
  },
];

export const freeportRecords: PublicRecordLink[] = [
  {
    title: 'City of Freeport — Police FOIA',
    description: 'Official City FOIA directory with a separate Freeport Police Department request path.',
    officialUrl: 'https://cityoffreeport.org/required-government-documents11/',
    kind: 'FOIA portal',
  },
  {
    title: 'Freeport Police Chief Matt Summers announces retirement',
    description: 'Official 2023 City release documenting Police Department use of license-plate readers, ShotSpotter, Tip411, and a pilot residential doorbell-camera program.',
    officialUrl: 'https://cityoffreeport.org/freeport-police-chief-matt-summers-announces-retirement/',
    kind: 'Official record',
    date: '2023-03-29',
  },
  {
    title: 'Illinois 2024 Body Worn Camera Report — Freeport Police',
    description: 'State report stating that Freeport Police patrol officers used body-worn cameras daily in 2024.',
    officialUrl: 'https://www.ptb.illinois.gov/media/1912/2024-body-worn-camera-report-final.pdf',
    kind: 'Official record',
    date: '2024',
  },
  {
    title: 'Freeport City Council highlights — October 20, 2025',
    description: 'Official City summary documenting Council approval of two security cameras on city-owned downtown poles.',
    officialUrl: 'https://cityoffreeport.org/10-20-2025-city-council-highlights/',
    kind: 'Official record',
    date: '2025-10-20',
  },
  {
    title: 'Freeport Police — tip411 launch',
    description: 'Official City announcement describing the Freeport PD app and anonymous text-tip system.',
    officialUrl: 'https://cityoffreeport.org/tip-411-now-available/',
    kind: 'Official record',
    date: '2023-02-13',
  },
];

export const stephensonMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  freeport: freeportRecords,
};
