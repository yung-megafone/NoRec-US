export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const willCountyRecords: PublicRecordLink[] = [
  {
    title: 'Will County — Official website',
    description: 'County government entry point used to resolve departments, public records, budgets, and municipal geography.',
    officialUrl: 'https://www.willcountyillinois.com/',
    kind: 'Official record',
  },
  {
    title: 'Will County Sheriff — FOIA',
    description: 'Official Sheriff public-record request information for agency records.',
    officialUrl: 'https://www.willcosheriff.org/',
    kind: 'FOIA portal',
  },
];

export const jolietRecords: PublicRecordLink[] = [
  {
    title: 'City of Joliet — Freedom of Information Act',
    description: 'Official City FOIA entry point, including Police Department records.',
    officialUrl: 'https://www.joliet.gov/government/departments/city-clerk/freedom-of-information-act',
    kind: 'FOIA portal',
  },
  {
    title: 'City of Joliet — agendas and minutes',
    description: 'Official legislative record archive used for police technology contracts and procurement.',
    officialUrl: 'https://joliet.legistar.com/',
    kind: 'Official record',
  },
];

export const plainfieldRecords: PublicRecordLink[] = [
  {
    title: 'Village of Plainfield — FOIA',
    description: 'Official Village public-record request information.',
    officialUrl: 'https://www.plainfieldil.gov/',
    kind: 'FOIA portal',
  },
];

export const romeovilleRecords: PublicRecordLink[] = [
  {
    title: 'Village of Romeoville — FOIA',
    description: 'Official Village records/FOIA entry point.',
    officialUrl: 'https://www.romeoville.org/',
    kind: 'FOIA portal',
  },
];

export const willMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  joliet: jolietRecords,
  plainfield: plainfieldRecords,
  romeoville: romeovilleRecords,
};


export const homerGlenRecords: PublicRecordLink[] = [
  {
    title: 'Homer Glen — FLOCK Update',
    description: 'Village notice suspending utilization of Flock ALPR cameras located within Homer Glen pending a Will County Sheriff investigation and protocol review.',
    officialUrl: 'https://www.homerglenil.org/m/newsflash/home/detail/990',
    kind: 'Official record',
    date: '2026-08-31',
  },
];

export const channahonRecords: PublicRecordLink[] = [
  {
    title: 'Channahon — statement on alleged unauthorized Flock use',
    description: 'Village statement describing an internal audit, administrative leave, internal investigation, ISP review, and additional audit controls.',
    officialUrl: 'https://www.channahon.org/m/newsflash/home/detail/596',
    kind: 'Official record',
    date: '2026-08-27',
  },
];
