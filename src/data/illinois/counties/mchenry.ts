import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const mchenryMunicipalities: MunicipalityRecord[] = [
  { id: 'il-algonquin', name: 'Algonquin', slug: 'algonquin', form: 'village', status: 'unresearched', counties: ['McHenry', 'Kane'], crossCounty: true },
  { id: 'il-barrington-hills', name: 'Barrington Hills', slug: 'barrington-hills', form: 'village', status: 'unresearched', counties: ['McHenry', 'Lake', 'Cook', 'Kane'], crossCounty: true },
  { id: 'il-bull-valley', name: 'Bull Valley', slug: 'bull-valley', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-cary', name: 'Cary', slug: 'cary', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-crystal-lake', name: 'Crystal Lake', slug: 'crystal-lake', form: 'city', status: 'documented', counties: ['McHenry'] },
  { id: 'il-fox-lake', name: 'Fox Lake', slug: 'fox-lake', form: 'village', status: 'unresearched', counties: ['McHenry', 'Lake'], crossCounty: true },
  { id: 'il-fox-river-grove', name: 'Fox River Grove', slug: 'fox-river-grove', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-greenwood', name: 'Greenwood', slug: 'greenwood', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-harvard', name: 'Harvard', slug: 'harvard', form: 'city', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-hebron', name: 'Hebron', slug: 'hebron', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-holiday-hills', name: 'Holiday Hills', slug: 'holiday-hills', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-huntley', name: 'Huntley', slug: 'huntley', form: 'village', status: 'documented', counties: ['McHenry', 'Kane'], crossCounty: true },
  { id: 'il-island-lake', name: 'Island Lake', slug: 'island-lake', form: 'village', status: 'unresearched', counties: ['McHenry', 'Lake'], crossCounty: true },
  { id: 'il-johnsburg', name: 'Johnsburg', slug: 'johnsburg', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-lake-in-the-hills', name: 'Lake in the Hills', slug: 'lake-in-the-hills', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-lakemoor', name: 'Lakemoor', slug: 'lakemoor', form: 'village', status: 'unresearched', counties: ['McHenry', 'Lake'], crossCounty: true },
  { id: 'il-lakewood', name: 'Lakewood', slug: 'lakewood', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-marengo', name: 'Marengo', slug: 'marengo', form: 'city', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-mccullom-lake', name: 'McCullom Lake', slug: 'mccullom-lake', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-mchenry', name: 'McHenry', slug: 'mchenry', form: 'city', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-oakwood-hills', name: 'Oakwood Hills', slug: 'oakwood-hills', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-port-barrington', name: 'Port Barrington', slug: 'port-barrington', form: 'village', status: 'unresearched', counties: ['McHenry', 'Lake'], crossCounty: true },
  { id: 'il-prairie-grove', name: 'Prairie Grove', slug: 'prairie-grove', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-richmond', name: 'Richmond', slug: 'richmond', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-ringwood', name: 'Ringwood', slug: 'ringwood', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-spring-grove', name: 'Spring Grove', slug: 'spring-grove', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-trout-valley', name: 'Trout Valley', slug: 'trout-valley', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-union', name: 'Union', slug: 'union', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-wonder-lake', name: 'Wonder Lake', slug: 'wonder-lake', form: 'village', status: 'unresearched', counties: ['McHenry'] },
  { id: 'il-woodstock', name: 'Woodstock', slug: 'woodstock', form: 'city', status: 'documented', counties: ['McHenry'] },
];

export const mchenryCountyFindings: SurveillanceFinding[] = [
  {
    id: 'mcso-axon-video-bundle',
    technology: 'Body-worn / in-car video / Evidence.com',
    title: 'Sheriff public-safety video equipment bundle',
    status: 'documented',
    summary: 'McHenry County project records allocated approximately $2.09 million for body-worn cameras, in-car cameras, and Tasers for patrol deputies, with the systems described as integrated and evidence stored in Evidence.com. This is a county Sheriff finding and is not attributed to any municipality.',
    sourceIds: ['mchenry-public-safety-video-bundle'],
  },
  {
    id: 'mcso-uas-sfy2024',
    technology: 'UAS / drones',
    title: 'Sheriff drone program documented in statewide reporting',
    status: 'documented',
    summary: 'Illinois statewide Freedom from Drone Surveillance Act reporting for State Fiscal Year 2024 lists McHenry County Sheriff drone activity. NoRec treats that report as a historical inventory/activity snapshot and does not assume the same fleet count remains current in 2026.',
    sourceIds: ['illinois-sfy2024-drone-report'],
  },
];

export const huntleyFindings: SurveillanceFinding[] = [
  {
    id: 'huntley-flock-2023',
    technology: 'ALPR / Flock Safety',
    title: 'Seventeen-camera Flock deployment approved in 2023',
    status: 'documented',
    summary: 'Huntley approved a four-year Flock Safety lease in 2023 for 17 automated license-plate readers intended for major thoroughfares entering and leaving the village. NoRec now labels 17 as the documented 2023 deployment baseline, not a verified 2026 installed-camera count; a current inventory, installation audit, and current sharing configuration remain unresolved.',
    sourceIds: ['huntley-2023-flock-report'],
  },
  {
    id: 'huntley-vehicle-attributes',
    technology: 'ALPR / vehicle analytics',
    title: 'Vehicle-attribute and “fingerprint” searching',
    status: 'documented',
    summary: 'The 2023 Huntley technology presentation described Flock searches using plate number and observable vehicle attributes including make, model, color, bumper stickers, decals, and roof racks.',
    sourceIds: ['huntley-2023-flock-report'],
  },
  {
    id: 'huntley-bwc',
    technology: 'Body-worn cameras',
    title: 'Body-camera implementation documented by the Village',
    status: 'documented',
    summary: 'Huntley’s March 2024 Village Journal identified body cameras and license-plate readers as technology being implemented by the Police Department. This replaces the older wording that treated body-camera deployment as supported only by secondary reporting.',
    sourceIds: ['huntley-2024-journal'],
  },
  {
    id: 'huntley-uas-sfy2024',
    technology: 'UAS / drones',
    title: 'Two police drones reported for SFY2024',
    status: 'documented',
    summary: 'Illinois Freedom from Drone Surveillance Act reporting for State Fiscal Year 2024 listed Huntley Police with two drones and 38 flights during that reporting period. Those figures are retained as a dated state-report snapshot; NoRec does not present them as a verified current 2026 fleet count.',
    sourceIds: ['illinois-sfy2024-drone-report'],
  },
];

export const crystalLakeFindings: SurveillanceFinding[] = [
  {
    id: 'crystal-lake-flock',
    technology: 'ALPR / Flock',
    title: 'Police ALPR system with 30-day retention',
    status: 'documented',
    summary: 'Crystal Lake Police publicly documents its use of fixed automated license-plate readers, states that non-investigative plate data is automatically deleted after 30 days, and says the system does not use facial recognition. The City’s 2026 budget also says additional Flock cameras are being added to the department account with grant support.',
    sourceIds: ['crystal-lake-alpr-page','crystal-lake-2026-budget'],
  },
  {
    id: 'crystal-lake-alpr-policy',
    technology: 'ALPR policy / sharing',
    title: 'Published ALPR policy governs searches, sharing, and audits',
    status: 'documented',
    summary: 'Crystal Lake publishes an ALPR policy requiring a related report or event number for investigative searches, logging access, documenting outside-agency requests, and limiting access to authorized law-enforcement purposes.',
    sourceIds: ['crystal-lake-alpr-policy'],
  },
];

export const woodstockFindings: SurveillanceFinding[] = [
  {
    id: 'woodstock-square-cameras-2026',
    technology: 'Fixed security cameras / Flock Safety',
    title: 'Six Flock security cameras operate on the Woodstock Square',
    status: 'documented',
    summary: 'Woodstock’s current transparency materials identify six fixed-position Flock security cameras on the Square, plus separate non-Flock city cameras at Benton and Main. The security cameras are not ALPRs. Woodstock says footage is deleted after 30 days unless preserved as evidence or otherwise required by law.',
    sourceIds: ['woodstock-alpr'],
    evidenceStatus: 'documented',
    operationalStatus: 'active',
    verifiedAsOf: '2026-09-18',
    sourceAsOf: '2026-09-18',
    owner: 'City of Woodstock / Woodstock Police Department',
  },
  {
    id: 'woodstock-flock',
    technology: 'ALPR / Flock Safety',
    title: 'Thirteen-camera Flock ALPR network with 30-day retention',
    status: 'documented',
    summary: 'Woodstock Police states that it uses Flock Safety ALPR technology, retains ordinary plate data for 30 days, logs searches, and does not use the system for facial recognition. Exact camera locations are not publicly disclosed by the department.',
    sourceIds: ['woodstock-alpr-page'],
    evidenceStatus: 'documented',
    operationalStatus: 'active',
    verifiedAsOf: '2026-09-18',
    owner: 'Woodstock Police Department',
  },
  {
    id: 'woodstock-fixed-mobile-history',
    technology: 'ALPR / fixed and mobile',
    title: 'Eight stationary Flock cameras deployed by late 2023; mobile ALPR history predates Flock',
    status: 'documented',
    summary: 'Woodstock capital records state that eight stationary Flock systems had been deployed by November 2023 and contemplated four additional stationary cameras. Earlier capital records document two Motorola Vigilant mobile ALPR systems. These are dated procurement/deployment records and are not combined into a claimed current 2026 camera total.',
    sourceIds: ['woodstock-cip-2023','woodstock-cip-2021'],
  },
];

export const mchenryMunicipalitySource =
  'https://www.mchenrycountyil.gov/county-government/county-yearbook/cities-villages';
