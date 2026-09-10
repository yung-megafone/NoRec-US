export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const mchenryCountyRecords: PublicRecordLink[] = [
  {
    title: 'McHenry County — Cities & Villages',
    description: 'Current official county yearbook directory used as the municipality baseline for this batch.',
    officialUrl: 'https://www.mchenrycountyil.gov/county-government/county-yearbook/cities-villages',
    kind: 'Official record',
  },
  {
    title: 'McHenry County — FOIA Requests',
    description: 'Official county FOIA information and request entry point, including Sheriff records.',
    officialUrl: 'https://www.mchenrycountyil.gov/county-government/foia-requests',
    kind: 'FOIA portal',
  },
  {
    title: 'McHenry County — Public Safety Video Equipment Bundle',
    description: 'County project record documenting the Sheriff body-worn/in-car camera, Taser, and Evidence.com bundle.',
    officialUrl: 'https://www.mchenrycountyil.gov/home/showpublisheddocument/108176/637949550960100000',
    kind: 'Official record',
  },
];

export const huntleyRecords: PublicRecordLink[] = [
  {
    title: 'Huntley Police — FOIA request form',
    description: 'Official Huntley Police Department FOIA form and submission instructions.',
    officialUrl: 'https://www.huntley.il.us/document_center/Departments/Police/Police-FOIA-Adobe-Fillable-R-21.pdf',
    kind: 'FOIA portal',
  },
  {
    title: 'Huntley Village Journal — March 2024',
    description: 'Official Village publication identifying body cameras and license-plate readers as Police Department technology being implemented.',
    officialUrl: 'https://www.huntley.il.us/Huntley%20Village%20Journal%20-%20March%202024%20FINAL.pdf',
    kind: 'Official record',
    date: '2024-03',
  },
  {
    title: 'Huntley Police technology presentation — 2023 coverage',
    description: 'Contemporaneous report of the Village Board presentation documenting the 17-reader Flock lease and vehicle-attribute search capabilities. A matching primary board packet should still be added when located.',
    officialUrl: 'https://www.myhuntleynews.com/2023/04/24/huntley-police-present-new-tech-at-village-board-meeting/',
    kind: 'Archive',
    date: '2023-04-24',
  },
];

export const crystalLakeRecords: PublicRecordLink[] = [
  {
    title: 'Crystal Lake Police — Automated License Plate Readers',
    description: 'Official Police Department ALPR explainer, including 30-day retention and system limitations.',
    officialUrl: 'https://www.crystallake.org/your-government/departments/police/citizen-resource-center/automated-license-plate-readers',
    kind: 'Official record',
  },
  {
    title: 'Crystal Lake Police — ALPR policy',
    description: 'Published department policy governing searches, access, sharing, logging, and evidentiary hits.',
    officialUrl: 'https://www.crystallake.org/home/showpublisheddocument/24749/638983649451470000',
    kind: 'Policy',
  },
  {
    title: 'Crystal Lake — 2026 annual budget',
    description: 'Official budget stating that additional Flock cameras are being added to the Police Department account.',
    officialUrl: 'https://www.crystallake.org/home/showpublisheddocument/24741/639004470707870000',
    kind: 'Official record',
    date: '2026',
  },
  {
    title: 'Crystal Lake Police — Records Unit / FOIA',
    description: 'Official Police Department records and FOIA contact page.',
    officialUrl: 'https://www.crystallake.org/your-government/departments/police/administrative-division/records-unit',
    kind: 'FOIA portal',
  },
];

export const woodstockRecords: PublicRecordLink[] = [
  {
    title: 'Woodstock Police — Automatic License Plate Readers',
    description: 'Official current ALPR transparency page describing Flock use, 30-day retention, access controls, and sharing.',
    officialUrl: 'https://www.woodstockil.gov/1127/License-Plate-Readers',
    kind: 'Official record',
  },
  {
    title: 'Woodstock capital plan — ALPR status update',
    description: 'Official capital record stating that eight stationary Flock cameras were deployed by November 2023 and describing planned expansion.',
    officialUrl: 'https://www.woodstockil.gov/Archive/ViewFile/Item/127',
    kind: 'Official record',
    date: '2023',
  },
  {
    title: 'Woodstock capital plan — mobile ALPR purchase',
    description: 'Official historical capital record documenting two Motorola Vigilant mobile ALPR systems and parking-enforcement integration.',
    officialUrl: 'https://www.woodstockil.gov/Archive/ViewFile/Item/69',
    kind: 'Official record',
    date: '2021',
  },
];

export const mchenryMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  huntley: huntleyRecords,
  'crystal-lake': crystalLakeRecords,
  woodstock: woodstockRecords,
};
