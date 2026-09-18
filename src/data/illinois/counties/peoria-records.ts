export type JurisdictionRecord = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const peoriaCountyRecords: JurisdictionRecord[] = [
  {
    title: 'ISP ALPR Statistics Dashboard — archived 2026-09-18 snapshot',
    description: 'State dashboard snapshot showing 145 ISP ALPR cameras in Peoria County. These are state-owned ISP cameras, not a Peoria County Sheriff inventory.',
    officialUrl: 'https://isp.maps.arcgis.com/apps/dashboards/77d1b36b7d9f419289cffe58d8ac9e54#',
    localUrl: '/archive/isp-alpr-stats-dashboard-2026-09-18.pdf',
    kind: 'Official record',
    date: '2026-09-18',
  },
  {
    title: 'ISP FY2025 ALPR Annual Report',
    description: 'Reports 54 Peoria County ISP camera installations during FY2025 and $1,950,996 in Peoria installation costs.',
    officialUrl: 'https://isp.illinois.gov/StaticFiles/docs/DII/FY%202025%20ALPR%20Annual%20Report.pdf',
    localUrl: '/archive/isp-fy2025-alpr-annual-report.pdf',
    kind: 'Official record',
    date: '2025-07-21',
  },
  {
    title: 'ISP FY2026 ALPR Annual Report',
    description: 'Documents the current Motorola Vehicle Manager program, 90-day retention, FY2026 statewide activity, and Peoria annual maintenance cost. Its retrospective FY2025 table conflicts with the FY2025 report on Peoria installations.',
    officialUrl: 'https://isp.illinois.gov/StaticFiles/docs/DII/FY26%20ALPR%20Annual%20Report-signed.pdf',
    localUrl: '/archive/isp-fy2026-alpr-annual-report.pdf',
    kind: 'Official record',
    date: '2026-07-27',
  },
  {
    title: 'City of Peoria — 2025 Budget Report Back',
    description: 'Peoria Police describes continuing FUSUS implementation, 240 city cameras and another 241 IDOT cameras on FUSUS, and conditional access to participating private-camera feeds.',
    officialUrl: 'https://www.peoriagov.org/DocumentCenter/View/6349/2025-Budget-Report-Back-1',
    kind: 'Official record',
  },
  {
    title: 'City of Peoria — FY2025 Revised Budget',
    description: 'Documents $375,000 in 2024 DCEO funding allocated to ALPR camera technology and describes FUSUS as a real-time camera integration platform.',
    officialUrl: 'https://www.peoriagov.org/DocumentCenter/View/6426/FY-2025-Revised-Budget',
    kind: 'Official record',
  },
  {
    title: 'Peoria County — FY2023 JAG / Flock intersection camera support',
    description: 'County resolution states its $36,766 JAG share would fund body armor and annual support for Flock intersection cameras.',
    officialUrl: 'https://www.peoriacounty.gov/AgendaCenter/ViewFile/Agenda/_02272024-1571',
    kind: 'Official record',
    date: '2024-02-27',
  },
  {
    title: 'City of Peoria — 2025 State of the City Address',
    description: 'Official city address describes investments in license-plate readers and FUSUS and describes the systems being used together in investigations.',
    officialUrl: 'https://www.peoriagov.org/DocumentCenter/View/7540/2025-State-of-the-City-Address?bidId=',
    kind: 'Official record',
    date: '2025',
  },
  {
    title: 'Peoria Police — September 2026 Flock technology use',
    description: 'Official police release says detectives located a suspect using Flock technology; the release does not identify the specific Flock product or camera inventory.',
    officialUrl: 'https://peoriagov.org/m/newsflash/Archive/Item/2017?arcId=2624',
    kind: 'Official record',
    date: '2026-09-07',
  },
  {
    title: 'Peoria County Sheriff — Freedom of Information Request',
    description: 'Official Sheriff FOIA request instructions and online request portal.',
    officialUrl: 'https://www.peoriacounty.gov/603/Freedom-of-Information-Request',
    kind: 'FOIA portal',
  },
];
