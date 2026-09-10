export type PublicRecordLink = {
  title: string;
  description?: string;
  officialUrl?: string;
  localUrl?: string;
  kind?: 'FOIA release' | 'Official record' | 'FOIA portal' | 'Policy' | 'Archive';
  date?: string;
};

export const joDaviessCountyRecords: PublicRecordLink[] = [
  {
    title: 'Illinois State Archives — Jo Daviess County local-government index',
    description: 'State index identifying Jo Daviess County’s ten incorporated municipalities and their forms of government.',
    officialUrl: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=JODAVIESS',
    kind: 'Official record',
  },
  {
    title: 'Jo Daviess County — Freedom of Information Act',
    description: 'Current County FOIA page with department-specific officers and 2026 postings, including the Sheriff’s Office.',
    officialUrl: 'https://www.jodaviesscountyil.gov/1203/Freedom-of-Information-Act',
    kind: 'FOIA portal',
  },
  {
    title: 'Jo Daviess County Sheriff — 2026 FOIA posting',
    description: 'Current Sheriff FOIA posting describing the office, records, staffing, and request contact information.',
    officialUrl: 'https://www.jodaviesscountyil.gov/DocumentCenter/View/405/Sheriffs-Office-FOIA-posting-2026-PDF',
    kind: 'FOIA portal',
    date: '2026',
  },
  {
    title: 'Illinois 2020 Body Worn Camera Report — Jo Daviess County Sheriff',
    description: 'State report documenting 25 body-worn cameras for 25 sworn deputies and/or correctional officers, plus supervisory review practices and technical issues.',
    officialUrl: 'https://www.ilga.gov/Documents/Reports/ReportsSubmitted/2907RSGAEmail5490RSGAAttach2020%20Body%20Worn%20Camera%20Report%20Final.pdf',
    kind: 'Official record',
    date: '2020',
  },
  {
    title: 'Illinois SFY2024 Freedom from Drone Surveillance Act report',
    description: 'State report listing the Jo Daviess County Sheriff’s Office as owning one drone and reporting zero flights in the survey period.',
    officialUrl: 'https://agency.icjia-api.cloud/uploads/SFY_24_Drone_Report_with_Appendices_491dfa4810.pdf',
    kind: 'Official record',
    date: '2024',
  },
];

export const galenaRecords: PublicRecordLink[] = [
  {
    title: 'City of Galena — Police Department',
    description: 'Current official Police Department page and contact information.',
    officialUrl: 'https://www.cityofgalena.org/government/departments/police',
    kind: 'Official record',
  },
  {
    title: 'Galena Police Department now hiring — August 12, 2026',
    description: 'Current City notice stating that Galena officers use Axon body-worn cameras and Axon interview rooms.',
    officialUrl: 'https://www.cityofgalena.org/residents/news/galena-police-department-now-hiring',
    kind: 'Official record',
    date: '2026-08-12',
  },
  {
    title: 'City of Galena — Requesting Records and Information',
    description: 'Official FOIA page listing the City and Police Department FOIA officers and request procedures.',
    officialUrl: 'https://www.cityofgalena.org/government/departments/city-clerk/requesting-records-and-information',
    kind: 'FOIA portal',
  },
];

export const stocktonRecords: PublicRecordLink[] = [
  {
    title: 'Village of Stockton — FOIA',
    description: 'Current Village FOIA page with a dedicated Police Department FOIA officer; listed police records include dash-camera video.',
    officialUrl: 'https://www.villageofstockton.com/government/foia/',
    kind: 'FOIA portal',
  },
];

export const eastDubuqueRecords: PublicRecordLink[] = [
  {
    title: 'City of East Dubuque — Police Department',
    description: 'Current official police department page and contact information.',
    officialUrl: 'https://www.cityofeastdubuque.com/departments/police-department',
    kind: 'Official record',
  },
  {
    title: 'East Dubuque City Code — Freedom of Information Act',
    description: 'Current codified FOIA procedure designating the City Manager as FOIA officer.',
    officialUrl: 'https://codelibrary.amlegal.com/codes/eastdubuqueil/latest/eastdubuque_il/0-0-0-366',
    kind: 'FOIA portal',
  },
];

export const joDaviessMunicipalityFoiaLinks: Record<string, PublicRecordLink[]> = {
  galena: galenaRecords,
  stockton: stocktonRecords,
  'east-dubuque': eastDubuqueRecords,
};
