import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const leeMunicipalities: MunicipalityRecord[] = [
  { id: 'il-amboy', name: 'Amboy', slug: 'amboy', form: 'city', status: 'unresearched', counties: ['Lee'] },
  { id: 'il-ashton', name: 'Ashton', slug: 'ashton', form: 'village', status: 'unresearched', counties: ['Lee'] },
  { id: 'il-compton', name: 'Compton', slug: 'compton', form: 'village', status: 'unresearched', counties: ['Lee'] },
  { id: 'il-dixon', name: 'Dixon', slug: 'dixon', form: 'city', status: 'partial', counties: ['Lee'] },
  { id: 'il-franklin-grove', name: 'Franklin Grove', slug: 'franklin-grove', form: 'village', status: 'unresearched', counties: ['Lee'] },
  { id: 'il-harmon', name: 'Harmon', slug: 'harmon', form: 'village', status: 'unresearched', counties: ['Lee'] },
  { id: 'il-lee', name: 'Lee', slug: 'lee', form: 'village', status: 'unresearched', counties: ['DeKalb', 'Lee'], crossCounty: true },
  { id: 'il-nelson', name: 'Nelson', slug: 'nelson', form: 'village', status: 'unresearched', counties: ['Lee'] },
  { id: 'il-paw-paw', name: 'Paw Paw', slug: 'paw-paw', form: 'village', status: 'unresearched', counties: ['Lee'] },
  { id: 'il-rochelle', name: 'Rochelle', slug: 'rochelle', form: 'city', status: 'unresearched', counties: ['Ogle', 'Lee'], crossCounty: true },
  { id: 'il-steward', name: 'Steward', slug: 'steward', form: 'village', status: 'unresearched', counties: ['Lee'] },
  { id: 'il-sublette', name: 'Sublette', slug: 'sublette', form: 'village', status: 'unresearched', counties: ['Lee'] },
  { id: 'il-west-brooklyn', name: 'West Brooklyn', slug: 'west-brooklyn', form: 'village', status: 'unresearched', counties: ['Lee'] },
];

export const leeCountyFindings: SurveillanceFinding[] = [
  {
    id: 'lee-flock-lpr-fy25',
    technology: 'ALPR',
    title: 'Flock Safety license-plate readers',
    status: 'documented',
    summary: "Lee County's FY2025 preliminary capital budget lists six Flock Safety license-plate-reader cameras for the Sheriff at $24,900, with $18,000 annual amounts projected in later fiscal years. A 2025 Sheriff report also documents an operational Flock hit on a stolen vehicle entering Lee County.",
    sourceIds: ['lee-budget-2024-08-08', 'lee-sheriff-report-2025-08-12'],
  },
  {
    id: 'lee-sheriff-uas-policy',
    technology: 'Drones / UAS',
    title: 'Sheriff UAS program policy',
    status: 'documented',
    summary: 'The Lee County Sheriff publishes a current Unmanned Aerial System policy governing authorization, mission documentation, retention, evidentiary handling, public notification, and permitted use of facial-recognition software on UAS-derived information under Illinois law. The policy confirms an operational UAS program framework but does not establish the current aircraft count.',
    sourceIds: ['lee-uas-policy'],
  },
];

export const dixonFindings: SurveillanceFinding[] = [
  {
    id: 'dixon-fire-thermal-drone',
    technology: 'Drones / thermal imaging',
    title: 'Thermal-imaging drone used by Dixon Fire Department',
    status: 'documented',
    summary: 'The City of Dixon reported that its Fire Department received a thermal-imaging drone and used it during a large fire. The City also reported police officers and firefighters were scheduled for drone-license training. This finding is municipal but is not evidence of a Dixon Police Department ALPR inventory.',
    sourceIds: ['dixon-fire-drone'],
  },
];

export const leeMunicipalitySources = {
  stateArchives: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=LEE',
  countyPlan: 'https://www.leecountyil.com/DocumentCenter/View/219/Lee-County-Comprehensive-Plan-PDF',
  leeCrossCounty: 'https://www.villageoflee.com/about-lee.html',
  censusCrossCounty: 'https://www2.census.gov/programs-surveys/economic-census/2012/guidance/geonotes/il/2012ec-geonotes-il.pdf',
};
