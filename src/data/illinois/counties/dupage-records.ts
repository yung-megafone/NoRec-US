export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const dupageCountyRecords: PublicRecordLink[] = [
  {
    title: 'DuPage County — Freedom of Information Act',
    description: 'Official county FOIA entry point linked throughout the DuPage County website.',
    officialUrl: 'https://www.dupagecounty.gov/',
    kind: 'FOIA portal',
  },
  {
    title: 'DuPage County FY2023 Financial Plan — County Security',
    description: 'Official county budget record documenting installation of three license-plate readers on the county campus and the camera replacement and maintenance program.',
    officialUrl: 'https://www.dupagecounty.gov/Finance/Documents/Annual%20Budget/FY2023%20Financial%20Plan%20-%20Internet%20Version.pdf',
    kind: 'Official record',
    date: '2023',
  },
  {
    title: 'DuPage County Mobility Framework Plan',
    description: 'Official county map/reference showing municipal boundaries and municipalities intersecting DuPage County.',
    officialUrl: 'https://www.dupagecounty.gov/Transportation/Documents/DuPage%20Mobility%20Framework/DuPage%20County%20Mobility%20Framework%20Plan_FINAL.pdf',
    kind: 'Official record',
  },
];

export const wheatonRecords: PublicRecordLink[] = [
  {
    title: 'Wheaton Police — Automated License Plate Readers',
    description: 'Official Police Department ALPR explainer describing system capabilities, use, searches, and sharing.',
    officialUrl: 'https://www.wheaton.il.us/1241/Automated-License-Plate-Readers',
    kind: 'Official record',
  },
  {
    title: 'Wheaton Police — April 2026 Flock renewal memorandum',
    description: 'Official council packet describing 44 grant-funded retail-location Flock cameras and the earlier 20-camera arterial-roadway agreement.',
    officialUrl: 'https://www.wheaton.il.us/AgendaCenter/ViewFile/Agenda/_04062026-3110?packet=true',
    kind: 'Official record',
    date: '2026-04-06',
  },
  {
    title: 'Wheaton — 2026 Flock renewal proceedings',
    description: 'Official council minutes approving the 44-camera lease extension and discussing access, security, and grant funding.',
    officialUrl: 'https://www.wheaton.il.us/AgendaCenter/ViewFile/Minutes/_04062026-3110',
    kind: 'Official record',
    date: '2026-04-06',
  },
  {
    title: 'Wheaton — 2023 Flock agreement',
    description: 'Official archived resolution/agreement describing FlockOS features and network access.',
    officialUrl: 'https://www.wheaton.il.us/Archive/ViewFile/Item/6074',
    kind: 'Official record',
    date: '2023',
  },
];

export const napervilleRecords: PublicRecordLink[] = [
  {
    title: 'Naperville — 2025 adopted budget / Real Time Crime Center',
    description: 'Official budget documenting ALPR use since 2021 and the Real Time Crime Center expansion project.',
    officialUrl: 'https://www.naperville.il.us/globalassets/media/finance-documents/budget-audit-reports/2025-adopted-budget.pdf',
    kind: 'Official record',
    date: '2025',
  },
  {
    title: 'Naperville — 2022 security-camera capital plan',
    description: 'Official capital plan reporting more than 370 city security cameras at that historical point.',
    officialUrl: 'https://www.naperville.il.us/globalassets/media/finance-documents/budget-audit-reports/2022cityofnapervillebudget.pdf',
    kind: 'Official record',
    date: '2022',
  },
  {
    title: 'Naperville Police — body-worn cameras',
    description: 'Official Police Department page documenting 2022 deployment and current body-camera program.',
    officialUrl: 'https://www.naperville.il.us/services/naperville-police-department/about-the-police-department/body-worn-cameras/',
    kind: 'Official record',
  },
  {
    title: 'Naperville Police — transparency / FOIA',
    description: 'Official Police transparency page with policy, video, and electronic FOIA access.',
    officialUrl: 'https://www.naperville.il.us/services/naperville-police-department/about-the-police-department/police-transparency/',
    kind: 'FOIA portal',
  },
];

export const elmhurstRecords: PublicRecordLink[] = [
  {
    title: 'Elmhurst — proposed 2025 annual operating budget',
    description: 'Official budget documenting the ALPR geofence replacement cycle and planned expansion of the Public Safety Drone Program.',
    officialUrl: 'https://www.elmhurst.org/Document%20Center/Services/Finance/Budget/2025/CITY%20OF%20ELMHURST%202025%20PROPOSED%20ANNUAL%20OPERATING%20BUDGET.pdf',
    kind: 'Official record',
    date: '2025',
  },
  {
    title: 'Elmhurst — 2023 capital expenditure budget',
    description: 'Official capital record documenting Police body-worn and in-car camera implementation.',
    officialUrl: 'https://www.elmhurst.org/Document%20Center/Services/Finance/Budget/2023/AA%20-%20MASTER%20CEB%20TO%20PRINT%20FINAL%20-%20PDF.pdf',
    kind: 'Official record',
    date: '2023',
  },
];

export const dupageMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  wheaton: wheatonRecords,
  naperville: napervilleRecords,
  elmhurst: elmhurstRecords,
};
