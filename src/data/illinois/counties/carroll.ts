import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const carrollMunicipalities: MunicipalityRecord[] = [
  { id: 'il-chadwick', name: 'Chadwick', slug: 'chadwick', form: 'village', status: 'unresearched', counties: ['Carroll'] },
  { id: 'il-lanark', name: 'Lanark', slug: 'lanark', form: 'city', status: 'unresearched', counties: ['Carroll'] },
  { id: 'il-milledgeville', name: 'Milledgeville', slug: 'milledgeville', form: 'village', status: 'unresearched', counties: ['Carroll'] },
  { id: 'il-mount-carroll', name: 'Mount Carroll', slug: 'mount-carroll', form: 'city', status: 'partial', counties: ['Carroll'] },
  { id: 'il-savanna', name: 'Savanna', slug: 'savanna', form: 'city', status: 'partial', counties: ['Carroll'] },
  { id: 'il-shannon', name: 'Shannon', slug: 'shannon', form: 'village', status: 'unresearched', counties: ['Carroll'] },
  { id: 'il-thomson', name: 'Thomson', slug: 'thomson', form: 'village', status: 'unresearched', counties: ['Carroll'] },
];

export const carrollCountyFindings: SurveillanceFinding[] = [
  {
    id: 'carroll-sheriff-bwc-2024',
    technology: 'Body-worn cameras',
    title: 'Sheriff completed body-camera training and prepared field deployment in June 2024',
    status: 'documented',
    summary: 'Carroll County Board records from June 20, 2024 state that Sheriff Ryan Kloepping reported his department had completed body-camera training, was still working through software issues, and expected to begin field use the following week. NoRec treats this as a documented 2024 deployment milestone, not a verified current 2026 inventory.',
    sourceIds: ['carroll-board-2024-bwc'],
  },
];

export const mountCarrollFindings: SurveillanceFinding[] = [
  {
    id: 'mount-carroll-bwc-2018',
    technology: 'Body-worn cameras',
    title: 'Mount Carroll Police documented department-wide body-camera use in 2018',
    status: 'partial',
    summary: 'The Illinois 2018 Body Worn Camera Report states that Mount Carroll Police had three full-time and seven part-time sworn officers and that all officers used body-worn cameras. The department received two BWC systems through the 2018 state grant. This is a historical baseline and does not establish the current 2026 camera inventory or vendor.',
    sourceIds: ['mount-carroll-2018-bwc-report'],
  },
];

export const savannaFindings: SurveillanceFinding[] = [
  {
    id: 'savanna-bwc-2025',
    technology: 'Body-worn cameras',
    title: 'Savanna Police body-worn camera documented in a March 2025 traffic stop',
    status: 'partial',
    summary: 'A January 2026 Illinois Appellate Court order describes a March 26, 2025 Savanna Police traffic stop and states that video from Officer Joel Colon’s body-worn camera was admitted and played at the suppression hearing. This establishes operational BWC use in 2025 but does not disclose vendor, fleet size, retention, or current 2026 inventory.',
    sourceIds: ['savanna-siegwarth-2026'],
  },
];

export const carrollMunicipalitySources = {
  municipalities: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=CARROLL',
};
