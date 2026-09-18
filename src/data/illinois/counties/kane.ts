import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const kaneMunicipalities: MunicipalityRecord[] = [
  { id: 'il-algonquin', name: 'Algonquin', slug: 'algonquin', form: 'village', status: 'unresearched', counties: ['Kane', 'McHenry'], crossCounty: true },
  { id: 'il-aurora', name: 'Aurora', slug: 'aurora', form: 'city', status: 'unresearched', counties: ['Kane', 'DuPage', 'Kendall', 'Will'], crossCounty: true },
  { id: 'il-barrington-hills', name: 'Barrington Hills', slug: 'barrington-hills', form: 'village', status: 'unresearched', counties: ['Kane', 'Cook', 'Lake', 'McHenry'], crossCounty: true },
  { id: 'il-bartlett', name: 'Bartlett', slug: 'bartlett', form: 'village', status: 'unresearched', counties: ['Kane', 'Cook', 'DuPage'], crossCounty: true },
  { id: 'il-batavia', name: 'Batavia', slug: 'batavia', form: 'city', status: 'unresearched', counties: ['Kane', 'DuPage'], crossCounty: true },
  { id: 'il-big-rock', name: 'Big Rock', slug: 'big-rock', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-burlington', name: 'Burlington', slug: 'burlington', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-campton-hills', name: 'Campton Hills', slug: 'campton-hills', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-carpentersville', name: 'Carpentersville', slug: 'carpentersville', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-east-dundee', name: 'East Dundee', slug: 'east-dundee', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-elburn', name: 'Elburn', slug: 'elburn', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-elgin', name: 'Elgin', slug: 'elgin', form: 'city', status: 'documented', counties: ['Kane', 'Cook'], crossCounty: true },
  { id: 'il-geneva', name: 'Geneva', slug: 'geneva', form: 'city', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-gilberts', name: 'Gilberts', slug: 'gilberts', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-hampshire', name: 'Hampshire', slug: 'hampshire', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-hoffman-estates', name: 'Hoffman Estates', slug: 'hoffman-estates', form: 'village', status: 'unresearched', counties: ['Kane', 'Cook'], crossCounty: true },
  { id: 'il-huntley', name: 'Huntley', slug: 'huntley', form: 'village', status: 'documented', counties: ['Kane', 'McHenry'], crossCounty: true },
  { id: 'il-kaneville', name: 'Kaneville', slug: 'kaneville', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-lily-lake', name: 'Lily Lake', slug: 'lily-lake', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-maple-park', name: 'Maple Park', slug: 'maple-park', form: 'village', status: 'unresearched', counties: ['Kane', 'DeKalb'], crossCounty: true },
  { id: 'il-montgomery', name: 'Montgomery', slug: 'montgomery', form: 'village', status: 'unresearched', counties: ['Kane', 'Kendall'], crossCounty: true },
  { id: 'il-north-aurora', name: 'North Aurora', slug: 'north-aurora', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-pingree-grove', name: 'Pingree Grove', slug: 'pingree-grove', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-sleepy-hollow', name: 'Sleepy Hollow', slug: 'sleepy-hollow', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-south-elgin', name: 'South Elgin', slug: 'south-elgin', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-st-charles', name: 'St. Charles', slug: 'st-charles', form: 'city', status: 'documented', counties: ['Kane', 'DuPage'], crossCounty: true },
  { id: 'il-sugar-grove', name: 'Sugar Grove', slug: 'sugar-grove', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-virgil', name: 'Virgil', slug: 'virgil', form: 'village', status: 'unresearched', counties: ['Kane'] },
  { id: 'il-wayne', name: 'Wayne', slug: 'wayne', form: 'village', status: 'unresearched', counties: ['Kane', 'DuPage'], crossCounty: true },
  { id: 'il-west-dundee', name: 'West Dundee', slug: 'west-dundee', form: 'village', status: 'unresearched', counties: ['Kane'] },
];

export const kaneCountyFindings: SurveillanceFinding[] = [
  {
    id: 'kcso-dfr-2026',
    technology: 'Drone as First Responder / Flock Safety',
    title: 'Kane County and Aurora approved a Drone as First Responder trial',
    status: 'documented',
    summary: 'Kane County Board Resolution 26-350, passed August 11, 2026, authorizes an intergovernmental Drone as First Responder program between Kane County, the Sheriff’s Office, and Aurora Police. The resolution states KCSO leased a Flock drone platform and associated software on a trial basis, while Aurora provides pilots and operational support for monitored calls for service.',
    sourceIds: ['kcso-dfr-2026'],
    evidenceStatus: 'documented',
    operationalStatus: 'active',
    verifiedAsOf: '2026-09-18',
    sourceAsOf: '2026-08-11',
    owner: 'Kane County Sheriff’s Office / City of Aurora',
  },
  {
    id: 'kcso-flock-23',
    technology: 'ALPR / Flock Safety',
    title: 'Sheriff renewed 25-camera Flock LPR deployment for 2026',
    status: 'documented',
    summary: 'Kane County Board Resolution 26-069, passed February 10, 2026, renewed the Sheriff’s Flock contract for 25 license-plate-reader cameras dispersed countywide, including the Judicial Center and Government Center, at $72,000 per year. This is the current contracted county inventory; individual field locations remain a separate verification question.',
    sourceIds: ['kcso-flock-renewal-2025','kcso-flock-renewal-2026'],
    evidenceStatus: 'documented',
    operationalStatus: 'active',
    verifiedAsOf: '2026-09-18',
    sourceAsOf: '2026-02-10',
    owner: 'Kane County Sheriff’s Office',
  },
  {
    id: 'kcso-getac-bwc-incar',
    technology: 'Body-worn / in-car cameras',
    title: 'Getac body-worn and in-car camera systems',
    status: 'documented',
    summary: 'Kane County records document a five-year Getac in-car/body-worn-camera lease approved in 2020, and the Sheriff’s FY2025 budget presentation still identifies Getac body-worn cameras as an equipment expense. Current unit counts should be obtained from newer inventory records rather than inferred from the lease.',
    sourceIds: ['kcso-getac-2020','kcso-budget-2025'],
  },
];

export const stCharlesFindings: SurveillanceFinding[] = [
  {
    id: 'st-charles-flock',
    technology: 'ALPR / Flock Safety',
    title: 'Police Flock ALPR program documented',
    status: 'documented',
    summary: 'St. Charles lists a Flock Safety Police Transparency Portal on its official transparency page. November 2025 City Council minutes record public discussion identifying eight Flock cameras under a two-year contract; NoRec preserves that eight-camera figure as a dated 2025 record rather than silently treating it as a verified current 2026 inventory.',
    sourceIds: ['st-charles-transparency','st-charles-council-2025'],
  },
  {
    id: 'st-charles-bwc-incar',
    technology: 'Body-worn / squad-car cameras',
    title: 'Body-worn-camera and squad-car video program',
    status: 'documented',
    summary: 'A 2023 Government Operations Committee packet documents Police Department implementation planning for body-worn cameras and squad-car cameras, including testing of a squad vehicle with forward-facing and prisoner-compartment views.',
    sourceIds: ['st-charles-camera-packet-2023'],
  },
];

export const elginFindings: SurveillanceFinding[] = [
  {
    id: 'elgin-autovu-2023',
    technology: 'ALPR / Genetec AutoVu',
    title: 'Citywide camera system expanded with AutoVu LPR cameras',
    status: 'documented',
    summary: 'Elgin’s August 23, 2023 Committee of the Whole meeting records a $67,577 purchase of AutoVu license-plate-recognition cameras, equipment, and licenses to expand and update the Citywide Camera System for investigative and public-safety use. This establishes the system and procurement but not a current 2026 camera count.',
    sourceIds: ['elgin-autovu-2023'],
  },
];

export const kaneMunicipalitySource = 'https://www2.kanecountyil.gov/Pages/communities.aspx';
