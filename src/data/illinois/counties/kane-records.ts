export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const kaneCountyRecords: PublicRecordLink[] = [
  {
    title: 'Kane County — Communities and Schools',
    description: 'Official county directory listing all 30 cities and villages in or partly within Kane County.',
    officialUrl: 'https://www2.kanecountyil.gov/Pages/communities.aspx',
    kind: 'Official record',
  },
  {
    title: 'Kane County — FOIA Information',
    description: 'Official county FOIA page. Elected offices, including the Sheriff, maintain their own FOIA offices.',
    officialUrl: 'https://www.kanecountyil.gov/pages/foia.aspx',
    kind: 'FOIA portal',
  },
  {
    title: 'Kane County — Sheriff Flock renewal packet',
    description: 'Official 2025 committee packet stating that a 2023 grant funded installation of 23 LPR cameras and requesting a $61,000 Flock renewal.',
    officialUrl: 'https://www.kanecountyil.gov/Lists/Events/Attachments/7382/AG%20PKT%2025-01%20JPS.pdf',
    kind: 'Official record',
    date: '2025',
  },
  {
    title: 'Kane County — Sheriff FY2025 budget presentation',
    description: 'Official Sheriff budget presentation identifying Getac body-worn cameras among agency equipment expenses.',
    officialUrl: 'https://www2.kanecountyil.gov/Lists/Events/Attachments/7108/FY2025%20Sheriff%20Budget%20Presentation.pdf',
    kind: 'Official record',
    date: 'FY2025',
  },
  {
    title: 'Kane County — Getac in-car/body-worn camera lease',
    description: 'County Board minutes containing the 2020 five-year Getac video-system lease resolution.',
    officialUrl: 'https://www.kanecountyil.gov/MeetingMinutes/5452/20-07-14%20COB%20minutes-full.pdf',
    kind: 'Official record',
    date: '2020',
  },
];

export const stCharlesRecords: PublicRecordLink[] = [
  {
    title: 'St. Charles — Transparency',
    description: 'Official transparency hub linking the Police Flock Safety transparency portal, FOIA, budgets, open data, ordinances, resolutions, and minutes.',
    officialUrl: 'https://www.stcharlesil.gov/About/Transparency',
    kind: 'Official record',
  },
  {
    title: 'St. Charles — FOIA Requests',
    description: 'Current City FOIA page with separate general and Police Department request paths and the 2026 GovQA portal.',
    officialUrl: 'https://www.stcharlesil.gov/About/Transparency/FOIA-Requests',
    kind: 'FOIA portal',
  },
  {
    title: 'St. Charles City Council — December 1, 2025 packet',
    description: 'Official packet containing November 17 minutes with public discussion of the eight-camera Flock contract.',
    officialUrl: 'https://www.stcharlesil.gov/files/assets/city/v/1/ca-public-meetings/city-council/past-meetings/2025/12-01-2025/2-cc-agenda-12-1-2025-combined_5.pdf',
    kind: 'Official record',
    date: '2025-12-01',
  },
  {
    title: 'St. Charles Government Operations Committee — Dec. 2023 packet',
    description: 'Official packet documenting squad-car camera testing and body-worn-camera implementation context.',
    officialUrl: 'https://www.stcharlesil.gov/files/assets/city/v/1/docs/public-meetings/government-operations-committee/2023/12-04-2023/goc-agda-12-4-2023-complete.pdf',
    kind: 'Official record',
    date: '2023-12-04',
  },
];

export const elginRecords: PublicRecordLink[] = [
  {
    title: 'Elgin Committee of the Whole — Aug. 23, 2023',
    description: 'Official meeting video/index documenting a $67,577 AutoVu LPR purchase to expand the Citywide Camera System.',
    officialUrl: 'https://elginvideo.cityofelgin.org/internetchannel/show/477?site=1',
    kind: 'Official record',
    date: '2023-08-23',
  },
];

export const kaneMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  'st-charles': stCharlesRecords,
  elgin: elginRecords,
};
