import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const lakeMunicipalities: MunicipalityRecord[] = [
  { id: 'il-antioch', name: 'Antioch', slug: 'antioch', form: 'village', status: 'documented', counties: ['Lake'] },
  { id: 'il-arlington-heights', name: 'Arlington Heights', slug: 'arlington-heights', form: 'village', status: 'unresearched', counties: ['Cook', 'Lake'], crossCounty: true },
  { id: 'il-bannockburn', name: 'Bannockburn', slug: 'bannockburn', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-barrington', name: 'Barrington', slug: 'barrington', form: 'village', status: 'unresearched', counties: ['Cook', 'Lake'], crossCounty: true },
  { id: 'il-barrington-hills', name: 'Barrington Hills', slug: 'barrington-hills', form: 'village', status: 'unresearched', counties: ['Cook', 'Kane', 'Lake', 'McHenry'], crossCounty: true },
  { id: 'il-beach-park', name: 'Beach Park', slug: 'beach-park', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-buffalo-grove', name: 'Buffalo Grove', slug: 'buffalo-grove', form: 'village', status: 'unresearched', counties: ['Cook', 'Lake'], crossCounty: true },
  { id: 'il-deer-park', name: 'Deer Park', slug: 'deer-park', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-deerfield', name: 'Deerfield', slug: 'deerfield', form: 'village', status: 'unresearched', counties: ['Cook', 'Lake'], crossCounty: true },
  { id: 'il-fox-lake', name: 'Fox Lake', slug: 'fox-lake', form: 'village', status: 'unresearched', counties: ['Lake', 'McHenry'], crossCounty: true },
  { id: 'il-fox-river-grove', name: 'Fox River Grove', slug: 'fox-river-grove', form: 'village', status: 'unresearched', counties: ['Lake', 'McHenry'], crossCounty: true },
  { id: 'il-grayslake', name: 'Grayslake', slug: 'grayslake', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-green-oaks', name: 'Green Oaks', slug: 'green-oaks', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-gurnee', name: 'Gurnee', slug: 'gurnee', form: 'village', status: 'documented', counties: ['Lake'] },
  { id: 'il-hainesville', name: 'Hainesville', slug: 'hainesville', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-hawthorn-woods', name: 'Hawthorn Woods', slug: 'hawthorn-woods', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-highland-park', name: 'Highland Park', slug: 'highland-park', form: 'city', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-highwood', name: 'Highwood', slug: 'highwood', form: 'city', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-indian-creek', name: 'Indian Creek', slug: 'indian-creek', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-island-lake', name: 'Island Lake', slug: 'island-lake', form: 'village', status: 'unresearched', counties: ['Lake', 'McHenry'], crossCounty: true },
  { id: 'il-kildeer', name: 'Kildeer', slug: 'kildeer', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-lake-barrington', name: 'Lake Barrington', slug: 'lake-barrington', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-lake-bluff', name: 'Lake Bluff', slug: 'lake-bluff', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-lake-forest', name: 'Lake Forest', slug: 'lake-forest', form: 'city', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-lake-villa', name: 'Lake Villa', slug: 'lake-villa', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-lake-zurich', name: 'Lake Zurich', slug: 'lake-zurich', form: 'village', status: 'documented', counties: ['Lake'] },
  { id: 'il-lakemoor', name: 'Lakemoor', slug: 'lakemoor', form: 'village', status: 'unresearched', counties: ['Lake', 'McHenry'], crossCounty: true },
  { id: 'il-libertyville', name: 'Libertyville', slug: 'libertyville', form: 'village', status: 'documented', counties: ['Lake'] },
  { id: 'il-lincolnshire', name: 'Lincolnshire', slug: 'lincolnshire', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-lindenhurst', name: 'Lindenhurst', slug: 'lindenhurst', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-long-grove', name: 'Long Grove', slug: 'long-grove', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-mettawa', name: 'Mettawa', slug: 'mettawa', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-mundelein', name: 'Mundelein', slug: 'mundelein', form: 'village', status: 'documented', counties: ['Lake'] },
  { id: 'il-north-barrington', name: 'North Barrington', slug: 'north-barrington', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-north-chicago', name: 'North Chicago', slug: 'north-chicago', form: 'city', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-old-mill-creek', name: 'Old Mill Creek', slug: 'old-mill-creek', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-park-city', name: 'Park City', slug: 'park-city', form: 'city', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-port-barrington', name: 'Port Barrington', slug: 'port-barrington', form: 'village', status: 'unresearched', counties: ['Lake', 'McHenry'], crossCounty: true },
  { id: 'il-riverwoods', name: 'Riverwoods', slug: 'riverwoods', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-round-lake', name: 'Round Lake', slug: 'round-lake', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-round-lake-beach', name: 'Round Lake Beach', slug: 'round-lake-beach', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-round-lake-heights', name: 'Round Lake Heights', slug: 'round-lake-heights', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-round-lake-park', name: 'Round Lake Park', slug: 'round-lake-park', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-third-lake', name: 'Third Lake', slug: 'third-lake', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-tower-lakes', name: 'Tower Lakes', slug: 'tower-lakes', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-vernon-hills', name: 'Vernon Hills', slug: 'vernon-hills', form: 'village', status: 'documented', counties: ['Lake'] },
  { id: 'il-volo', name: 'Volo', slug: 'volo', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-wadsworth', name: 'Wadsworth', slug: 'wadsworth', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-wauconda', name: 'Wauconda', slug: 'wauconda', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-waukegan', name: 'Waukegan', slug: 'waukegan', form: 'city', status: 'documented', counties: ['Lake'] },
  { id: 'il-winthrop-harbor', name: 'Winthrop Harbor', slug: 'winthrop-harbor', form: 'village', status: 'unresearched', counties: ['Lake'] },
  { id: 'il-zion', name: 'Zion', slug: 'zion', form: 'city', status: 'unresearched', counties: ['Lake'] },
];

export const lakeCountyFindings: SurveillanceFinding[] = [
  {
    id: 'lcso-suas-policy',
    technology: 'UAS / drones',
    title: 'Sheriff maintains a published small-UAS policy',
    status: 'documented',
    summary: 'Lake County Sheriff General Order 4.3.06, issued October 27, 2023, establishes rules for agency drone use and for storage, retrieval, and dissemination of images and data captured by the system. The policy establishes a program; NoRec does not infer a current aircraft count from the policy alone.',
    sourceIds: ['lcso-suas-policy'],
  },
];

export const mundeleinFindings: SurveillanceFinding[] = [
  {
    id: 'mundelein-flock-2026',
    technology: 'ALPR / Flock Safety',
    title: 'Fourteen Flock ALPRs approved; eleven installed by January 2026',
    status: 'documented',
    summary: 'Mundelein Police states that 14 Flock ALPR cameras are approved: 10 became operational in September 2024, one additional unit was installed in January 2026, and three remain pending permit approval. The department states ordinary ALPR data is generally retained for 30 days.',
    sourceIds: ['mundelein-alpr-page'],
  },
];

export const vernonHillsFindings: SurveillanceFinding[] = [
  {
    id: 'vernon-hills-flock-28',
    technology: 'ALPR / Flock Safety',
    title: 'Twenty-eight fixed Flock ALPR units contracted and deployed',
    status: 'documented',
    summary: 'Vernon Hills Police states 28 fixed ALPR units were contracted: 10 went into effect in February 2022, six more in March 2023, and 12 more in August 2023. The department states ordinary ALPR data is generally maintained for 30 days.',
    sourceIds: ['vernon-hills-alpr-page'],
  },
  {
    id: 'vernon-hills-portable-flock',
    technology: 'Portable ALPR',
    title: 'Separate portable Flock ALPR authorized',
    status: 'documented',
    summary: 'Village Ordinance 2023-024 authorized purchase and contracting for one law-enforcement-grade portable Flock license-plate-recognition camera. NoRec keeps this portable unit separate from the department’s 28 fixed-unit public inventory.',
    sourceIds: ['vernon-hills-2023-ordinances'],
  },
  {
    id: 'vernon-hills-uas',
    technology: 'UAS / drones',
    title: 'Police Department publishes a UAS policy',
    status: 'documented',
    summary: 'Vernon Hills Police publishes an Unmanned Aerial System policy alongside its ALPR and body-worn-camera policies. The policy establishes documented UAS capability but does not by itself establish a current aircraft count.',
    sourceIds: ['vernon-hills-policies'],
  },
];

export const lakeZurichFindings: SurveillanceFinding[] = [
  {
    id: 'lake-zurich-flock-six',
    technology: 'ALPR / Flock Safety',
    title: 'Six Flock ALPR devices contracted',
    status: 'documented',
    summary: 'Lake Zurich Police states it contracted with Flock Safety for installation and maintenance of six ALPR devices, with installations occurring as IDOT permits are issued. The department states ordinary ALPR data is generally retained for seven days and says it does not allow agencies outside Illinois access to its camera network.',
    sourceIds: ['lake-zurich-alpr-page'],
  },
];

export const waukeganFindings: SurveillanceFinding[] = [
  {
    id: 'waukegan-flock-fy24',
    technology: 'ALPR / Flock Safety',
    title: 'Thirteen-camera Flock program documented in FY2024 budget',
    status: 'documented',
    summary: 'Waukegan’s FY2024 General Fund budget reported a 13-camera Flock LPR program, with seven active at that time and six awaiting State of Illinois permits. It also reported approximately two million plate captures per month and extensive interagency sharing. These figures are retained as a dated FY2024 baseline, not a verified current 2026 inventory.',
    sourceIds: ['waukegan-fy24-budget'],
  },
];

export const gurneeFindings: SurveillanceFinding[] = [
  {
    id: 'gurnee-mills-flock',
    technology: 'ALPR / Flock Safety',
    title: 'Flock ALPR deployment at Gurnee Mills',
    status: 'documented',
    summary: 'A 2022 Gurnee Police media release documents Flock Safety ALPR cameras installed at Gurnee Mills through a business/public-safety partnership. The release establishes operational access by Gurnee Police but does not provide a camera count, so NoRec does not infer one.',
    sourceIds: ['gurnee-flock-2022'],
  },
];

export const libertyvilleFindings: SurveillanceFinding[] = [
  {
    id: 'libertyville-flock',
    technology: 'ALPR / Flock Safety',
    title: 'Fixed Flock ALPR program documented in Police Committee records',
    status: 'documented',
    summary: 'Libertyville committee records document implementation of a Flock Safety LPR program and continued work on installations, including an IDOT-permitted site at Route 176 and Woodland.',
    sourceIds: ['libertyville-flock-2021','libertyville-flock-2024'],
  },
  {
    id: 'libertyville-axon-lpr',
    technology: 'Mobile ALPR / Axon Fleet 3',
    title: 'Axon Fleet 3 real-time LPR integration planned for patrol fleet',
    status: 'documented',
    summary: 'April 2024 Police Committee minutes state staff planned to seek acquisition of Axon LPR functionality integrated with the Fleet 3 in-car video system and had budgeted funding for the FY2024-25 cycle. NoRec treats this as documented procurement/planning, not proof that every patrol vehicle is currently equipped.',
    sourceIds: ['libertyville-flock-2024'],
  },
];

export const antiochFindings: SurveillanceFinding[] = [
  {
    id: 'antioch-flock',
    technology: 'ALPR / Flock Safety',
    title: 'Village Flock ALPR deployment documented',
    status: 'documented',
    summary: 'Antioch Village Board records show a 2023 agreement with Flock Group for Flock system technology. By May 2024, Village minutes described the Flock cameras as being in final implementation stages, and the FY2024-25 budget included a Flock Cameras line item. Exact current camera count remains unresolved.',
    sourceIds: ['antioch-flock-2023','antioch-flock-2024','antioch-budget-2025'],
  },
];

export const lakeMunicipalitySource = 'https://www.lakecountyil.gov/4756/Cities-Townships-Villages';
export const lakeMunicipalityMapSource = 'https://maps.lakecountyil.gov/Output/CountyMaps/cctytwpcity.pdf';
