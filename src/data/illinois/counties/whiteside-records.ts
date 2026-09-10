export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const whitesideCountyRecords: PublicRecordLink[] = [
  {
    title: 'Illinois State Archives — Whiteside County local-government index',
    description: 'State index identifying Whiteside County’s eleven incorporated municipalities and their forms of government.',
    officialUrl: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=WHITESIDE',
    kind: 'Official record',
  },
  {
    title: 'Whiteside County — Freedom of Information Act',
    description: 'Current County FOIA page. The County Administrator receives requests, including Sheriff records.',
    officialUrl: 'https://www.whitesidecountyil.gov/248/Freedom-of-Information-Act',
    kind: 'FOIA portal',
  },
  {
    title: 'Whiteside County Sheriff — 2024 Annual Report',
    description: 'Official annual report documenting the Sheriff’s sUAS/drone unit, capabilities, deployments, and 2024 equipment expansion.',
    officialUrl: 'https://www.whitesidecountyil.gov/DocumentCenter/View/1080',
    kind: 'Official record',
    date: '2024',
  },
  {
    title: 'Illinois 2023 Body Worn Camera Report — Whiteside County Sheriff',
    description: 'State report documenting 26 body-worn cameras used by 25 patrol, investigations, and civil-process personnel when fully staffed.',
    officialUrl: 'https://www.ptb.illinois.gov/media/1849/2023-body-worn-camera-report-final.pdf',
    kind: 'Official record',
    date: '2023',
  },
  {
    title: 'Whiteside County ETSB minutes — January 19, 2023',
    description: 'Official 911 board minutes describing RapidSOS Premium mapping/location capabilities and available public-safety integrations.',
    officialUrl: 'https://www.whitesidecountyil.gov/AgendaCenter/ViewFile/Minutes/_01192023-3',
    kind: 'Official record',
    date: '2023-01-19',
  },
];

export const sterlingRecords: PublicRecordLink[] = [
  {
    title: 'Sterling Police — Flock Safety Transparency Portal',
    description: 'Current vendor transparency portal reporting camera count, retention, searches, hotlist sources, prohibited uses, and access policy.',
    officialUrl: 'https://transparency.flocksafety.com/Sterling-IL-PD',
    kind: 'Official record',
  },
  {
    title: 'Sterling City Council agenda — June 16, 2025',
    description: 'Official City payment register documenting the third-year Axon body-camera payment and Evidence license conversion.',
    officialUrl: 'https://www.sterling-il.gov/AgendaCenter/ViewFile/Agenda/_06162025-439',
    kind: 'Official record',
    date: '2025-06-16',
  },
  {
    title: 'Sterling City Council minutes — October 21, 2024',
    description: 'Official minutes approving an Avigilon server, cameras, intercom/video access, hardware, and electronic locks.',
    officialUrl: 'https://www.sterling-il.gov/AgendaCenter/ViewFile/Minutes/_10212024-399',
    kind: 'Official record',
    date: '2024-10-21',
  },
  {
    title: 'City of Sterling — Freedom of Information Request',
    description: 'Current City FOIA page with a separate Police Department request path and police-records contacts.',
    officialUrl: 'https://www.sterling-il.gov/236/Freedom-of-Information-Request',
    kind: 'FOIA portal',
  },
];

export const rockFallsRecords: PublicRecordLink[] = [
  {
    title: 'Rock Falls City Council minutes — October 1, 2024',
    description: 'Official minutes documenting a Flock Safety presentation for a license-plate-reader pilot program.',
    officialUrl: 'https://rockfalls61071.net/download/agendas_and_minutes/2024_agendas_and_minutes/2024_city_council/2024_city_council_minutes/10-01-2024-City-Council-Meeting-Minutes.pdf',
    kind: 'Official record',
    date: '2024-10-01',
  },
  {
    title: 'Illinois 2019 Body Worn Camera Report — Rock Falls Police',
    description: 'State report documenting 16 officers using 16 body-worn cameras and monthly supervisory audits.',
    officialUrl: 'https://www.ptb.illinois.gov/media/1551/2019-body-worn-camera-report.pdf',
    kind: 'Official record',
    date: '2019',
  },
  {
    title: 'Lee County Sheriff monthly report — February 2026',
    description: 'Official neighboring-county record describing a stolen Rock Falls vehicle alerting on a Flock license-plate reader.',
    officialUrl: 'https://leecountyil.com/AgendaCenter/ViewFile/Minutes/_03102026-1156',
    kind: 'Official record',
    date: '2026-03-10',
  },
];

export const fultonRecords: PublicRecordLink[] = [
  {
    title: 'EFF Atlas of Surveillance — Fulton Police Flock deployment',
    description: 'Secondary public-record index identifying five Fulton Police Flock Safety ALPRs as of September 2025; underlying Fulton-origin records remain a follow-up target.',
    officialUrl: 'https://www.atlasofsurveillance.org/search?location=Sterling%2C+IL',
    kind: 'Archive',
    date: '2025-09',
  },
];

export const whitesideMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  sterling: sterlingRecords,
  'rock-falls': rockFallsRecords,
  fulton: fultonRecords,
};
