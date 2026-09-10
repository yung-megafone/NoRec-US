export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const lakeCountyRecords: PublicRecordLink[] = [
  {
    title: 'Lake County — Cities, Townships & Villages',
    description: 'Official county directory; Lake County states that 52 incorporated cities and villages are present in the county.',
    officialUrl: 'https://www.lakecountyil.gov/4756/Cities-Townships-Villages',
    kind: 'Official record',
  },
  {
    title: 'Lake County GIS — Township and City/Village Map',
    description: 'Official county GIS map showing municipal and township boundaries.',
    officialUrl: 'https://maps.lakecountyil.gov/Output/CountyMaps/cctytwpcity.pdf',
    kind: 'Official record',
    date: '2023',
  },
  {
    title: 'Lake County Sheriff — FOIA Request',
    description: 'Official Sheriff FOIA portal and submission information, including separate handling for body-worn-camera and other audiovisual records.',
    officialUrl: 'https://www.lakecountyil.gov/1893/Freedom-of-Information-Act-FOIA-Request',
    kind: 'FOIA portal',
  },
  {
    title: 'Lake County Sheriff — Small Unmanned Aircraft Systems policy',
    description: 'General Order 4.3.06 governing Sheriff drone use and captured data.',
    officialUrl: 'https://www.lakecountyil.gov/DocumentCenter/View/70638/4306-Small-Unmanned-Aircraft-Systems-10-27-23?bidId=',
    kind: 'Policy',
    date: '2023-10-27',
  },
];

export const mundeleinRecords: PublicRecordLink[] = [
  {
    title: 'Mundelein Police — Automated License Plate Readers',
    description: 'Official current ALPR page with camera deployment counts, installation dates, retention, uses, and transparency portal.',
    officialUrl: 'https://www.mundelein.org/745/AUTOMATED-LICENSE-PLATE-READERS',
    kind: 'Official record',
    date: '2026',
  },
];

export const vernonHillsRecords: PublicRecordLink[] = [
  {
    title: 'Vernon Hills Police — Automated License Plate Readers',
    description: 'Official ALPR transparency page documenting 28 contracted fixed units and 30-day general retention.',
    officialUrl: 'https://www.vernonhills.org/963/Automated-License-Plate-Readers',
    kind: 'Official record',
  },
  {
    title: 'Vernon Hills Police — Department Policies',
    description: 'Official policy index linking ALPR, body-worn-camera, and unmanned-aircraft-system policies.',
    officialUrl: 'https://www.vernonhills.org/964/Department-Policies',
    kind: 'Policy',
  },
  {
    title: 'Vernon Hills — 2023 ordinances',
    description: 'Official ordinance index documenting a portable Flock ALPR, eleven-reader maintenance agreement, and villagewide CCTV expansion.',
    officialUrl: 'https://www.vernonhills.org/950/Ordinance-2023',
    kind: 'Official record',
    date: '2023',
  },
];

export const lakeZurichRecords: PublicRecordLink[] = [
  {
    title: 'Lake Zurich Police — Automated License Plate Recognition',
    description: 'Official current page documenting six Flock devices, seven-day general retention, search guardrails, and Illinois-only network access.',
    officialUrl: 'https://www.lakezurich.org/810/Automated-License-Plate-Recognition',
    kind: 'Official record',
  },
];

export const waukeganRecords: PublicRecordLink[] = [
  {
    title: 'Waukegan — FY2024 General Fund Budget',
    description: 'Official city budget documenting the 13-camera Flock program, then-current permit/install status, plate volumes, and sharing figures.',
    officialUrl: 'https://www.waukeganil.gov/DocumentCenter/View/8336/4-General-Fund---FY24-',
    kind: 'Official record',
    date: 'FY2024',
  },
];

export const gurneeRecords: PublicRecordLink[] = [
  {
    title: 'Gurnee Police — Flock Safety expansion at Gurnee Mills',
    description: 'Official 2022 Police Department media release documenting operational Flock ALPR use at Gurnee Mills.',
    officialUrl: 'https://www.gurnee.il.us/docs/default-source/police-department-files/flock-safety-success_11-15-22.pdf?sfvrsn=f2ca4bb1_0',
    kind: 'Official record',
    date: '2022-11-14',
  },
];

export const libertyvilleRecords: PublicRecordLink[] = [
  {
    title: 'Libertyville Police Committee — April 2024 minutes',
    description: 'Official minutes documenting ongoing fixed Flock installation and proposed Axon Fleet 3 real-time LPR integration.',
    officialUrl: 'https://www.libertyville.com/AgendaCenter/ViewFile/Minutes/_04162024-2239',
    kind: 'Official record',
    date: '2024-04-16',
  },
  {
    title: 'Libertyville Police Committee — April 2021 agenda',
    description: 'Official record documenting implementation work on the Flock Safety LPR program.',
    officialUrl: 'https://www.libertyville.com/AgendaCenter/ViewFile/Agenda/_04192021-1619',
    kind: 'Official record',
    date: '2021-04-19',
  },
];

export const antiochRecords: PublicRecordLink[] = [
  {
    title: 'Antioch Village Board — May 2023 agenda',
    description: 'Official agenda containing Resolution 23-28 for an agreement with Flock Group Inc.',
    officialUrl: 'https://www.antioch.il.gov/download/village_board/Agendas/2023/05-10-23-Village-Board-Agenda.pdf',
    kind: 'Official record',
    date: '2023-05-10',
  },
  {
    title: 'Antioch Village Board — May 2024 approved minutes',
    description: 'Official minutes reporting that Flock cameras were in the final implementation stages.',
    officialUrl: 'https://www.antioch.il.gov/download/village_board/Minutes/2024/05-08-24-VB-and-COW-Minutes.pdf',
    kind: 'Official record',
    date: '2024-05-08',
  },
  {
    title: 'Antioch — FY2024-25 Operating and Capital Budget',
    description: 'Official budget containing a Flock Cameras expense line.',
    officialUrl: 'https://www.antioch.il.gov/download/Finance%20Documents/operating_and_capital_budget/FINAL-BOOK-2024-2025-to-Jim-Moran-for-website-7-9-24.pdf',
    kind: 'Official record',
    date: 'FY2024-25',
  },
];

export const lakeMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  mundelein: mundeleinRecords,
  'vernon-hills': vernonHillsRecords,
  'lake-zurich': lakeZurichRecords,
  waukegan: waukeganRecords,
  gurnee: gurneeRecords,
  libertyville: libertyvilleRecords,
  antioch: antiochRecords,
};
