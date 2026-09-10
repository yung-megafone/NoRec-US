import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const joDaviessMunicipalities: MunicipalityRecord[] = [
  { id: 'il-apple-river', name: 'Apple River', slug: 'apple-river', form: 'village', status: 'unresearched', counties: ['Jo Daviess'] },
  { id: 'il-east-dubuque', name: 'East Dubuque', slug: 'east-dubuque', form: 'city', status: 'unresearched', counties: ['Jo Daviess'] },
  { id: 'il-elizabeth', name: 'Elizabeth', slug: 'elizabeth', form: 'village', status: 'unresearched', counties: ['Jo Daviess'] },
  { id: 'il-galena', name: 'Galena', slug: 'galena', form: 'city', status: 'documented', counties: ['Jo Daviess'] },
  { id: 'il-hanover', name: 'Hanover', slug: 'hanover', form: 'village', status: 'unresearched', counties: ['Jo Daviess'] },
  { id: 'il-menominee', name: 'Menominee', slug: 'menominee', form: 'village', status: 'unresearched', counties: ['Jo Daviess'] },
  { id: 'il-nora', name: 'Nora', slug: 'nora', form: 'village', status: 'unresearched', counties: ['Jo Daviess'] },
  { id: 'il-scales-mound', name: 'Scales Mound', slug: 'scales-mound', form: 'village', status: 'unresearched', counties: ['Jo Daviess'] },
  { id: 'il-stockton', name: 'Stockton', slug: 'stockton', form: 'village', status: 'partial', counties: ['Jo Daviess'] },
  { id: 'il-warren', name: 'Warren', slug: 'warren', form: 'village', status: 'unresearched', counties: ['Jo Daviess'] },
];

export const joDaviessCountyFindings: SurveillanceFinding[] = [
  {
    id: 'jo-daviess-sheriff-bwc-2020',
    technology: 'Body-worn cameras',
    title: 'Sheriff reported 25 body-worn cameras in the 2020 state report',
    status: 'partial',
    summary: 'The Illinois 2020 Body Worn Camera Report states that the Jo Daviess County Sheriff’s Office had 25 sworn deputies and/or correctional officers using 25 body-worn cameras. The report also describes supervisory review and notes connectivity, downloading, storage, and equipment issues. This is a historical 2020 snapshot and is not treated as the current 2026 inventory.',
    sourceIds: ['jo-daviess-2020-bwc-report'],
  },
  {
    id: 'jo-daviess-sheriff-drone-2024',
    technology: 'Drones / UAS',
    title: 'Sheriff reported one drone in the SFY2024 state survey',
    status: 'partial',
    summary: 'The Illinois State Fiscal Year 2024 Freedom from Drone Surveillance Act report lists the Jo Daviess County Sheriff’s Office as owning one drone and reporting zero flights in the survey period. NoRec treats this as a dated 2024 fleet snapshot rather than proof of the current 2026 inventory.',
    sourceIds: ['jo-daviess-2024-drone-report'],
  },
];

export const galenaFindings: SurveillanceFinding[] = [
  {
    id: 'galena-axon-bwc-2026',
    technology: 'Body-worn cameras',
    title: 'Galena Police currently documents Axon body-worn cameras',
    status: 'documented',
    summary: 'An August 12, 2026 City of Galena police hiring notice states that Galena officers use Axon body-worn cameras. Because the source is current to 2026, NoRec treats Axon BWC use as a current documented deployment; the page does not disclose device count, model, retention, or Evidence.com configuration.',
    sourceIds: ['galena-police-hiring-2026'],
  },
  {
    id: 'galena-axon-interview-rooms-2026',
    technology: 'Interview-room recording',
    title: 'Galena Police currently documents Axon interview rooms',
    status: 'documented',
    summary: 'The same August 2026 City notice describes state-of-the-art Axon interview rooms. NoRec records the vendor and current existence but does not infer the number of rooms, camera models, storage settings, or retention period.',
    sourceIds: ['galena-police-hiring-2026'],
  },
];

export const joDaviessMunicipalitySources = {
  municipalities: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=JODAVIESS',
};
