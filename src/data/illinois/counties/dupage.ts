import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const dupageMunicipalities: MunicipalityRecord[] = [
  { id: 'il-addison', name: 'Addison', slug: 'addison', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-aurora', name: 'Aurora', slug: 'aurora', form: 'city', status: 'unresearched', counties: ['Kane', 'DuPage', 'Kendall', 'Will'], crossCounty: true },
  { id: 'il-bartlett', name: 'Bartlett', slug: 'bartlett', form: 'village', status: 'unresearched', counties: ['Cook', 'DuPage', 'Kane'], crossCounty: true },
  { id: 'il-batavia', name: 'Batavia', slug: 'batavia', form: 'city', status: 'unresearched', counties: ['Kane', 'DuPage'], crossCounty: true },
  { id: 'il-bensenville', name: 'Bensenville', slug: 'bensenville', form: 'village', status: 'unresearched', counties: ['DuPage', 'Cook'], crossCounty: true },
  { id: 'il-bloomingdale', name: 'Bloomingdale', slug: 'bloomingdale', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-bolingbrook', name: 'Bolingbrook', slug: 'bolingbrook', form: 'village', status: 'unresearched', counties: ['Will', 'DuPage'], crossCounty: true },
  { id: 'il-burr-ridge', name: 'Burr Ridge', slug: 'burr-ridge', form: 'village', status: 'unresearched', counties: ['DuPage', 'Cook'], crossCounty: true },
  { id: 'il-carol-stream', name: 'Carol Stream', slug: 'carol-stream', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-chicago', name: 'Chicago', slug: 'chicago', form: 'city', status: 'unresearched', counties: ['Cook', 'DuPage'], crossCounty: true },
  { id: 'il-clarendon-hills', name: 'Clarendon Hills', slug: 'clarendon-hills', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-darien', name: 'Darien', slug: 'darien', form: 'city', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-downers-grove', name: 'Downers Grove', slug: 'downers-grove', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-elk-grove-village', name: 'Elk Grove Village', slug: 'elk-grove-village', form: 'village', status: 'unresearched', counties: ['Cook', 'DuPage'], crossCounty: true },
  { id: 'il-elmhurst', name: 'Elmhurst', slug: 'elmhurst', form: 'city', status: 'documented', counties: ['DuPage', 'Cook'], crossCounty: true },
  { id: 'il-glendale-heights', name: 'Glendale Heights', slug: 'glendale-heights', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-glen-ellyn', name: 'Glen Ellyn', slug: 'glen-ellyn', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-hanover-park', name: 'Hanover Park', slug: 'hanover-park', form: 'village', status: 'unresearched', counties: ['Cook', 'DuPage'], crossCounty: true },
  { id: 'il-hinsdale', name: 'Hinsdale', slug: 'hinsdale', form: 'village', status: 'unresearched', counties: ['Cook', 'DuPage'], crossCounty: true },
  { id: 'il-itasca', name: 'Itasca', slug: 'itasca', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-lemont', name: 'Lemont', slug: 'lemont', form: 'village', status: 'unresearched', counties: ['Cook', 'DuPage', 'Will'], crossCounty: true },
  { id: 'il-lisle', name: 'Lisle', slug: 'lisle', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-lombard', name: 'Lombard', slug: 'lombard', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-naperville', name: 'Naperville', slug: 'naperville', form: 'city', status: 'documented', counties: ['DuPage', 'Will'], crossCounty: true },
  { id: 'il-oak-brook', name: 'Oak Brook', slug: 'oak-brook', form: 'village', status: 'unresearched', counties: ['DuPage', 'Cook'], crossCounty: true },
  { id: 'il-oakbrook-terrace', name: 'Oakbrook Terrace', slug: 'oakbrook-terrace', form: 'city', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-roselle', name: 'Roselle', slug: 'roselle', form: 'village', status: 'unresearched', counties: ['DuPage', 'Cook'], crossCounty: true },
  { id: 'il-st-charles', name: 'St. Charles', slug: 'st-charles', form: 'city', status: 'unresearched', counties: ['Kane', 'DuPage'], crossCounty: true },
  { id: 'il-schaumburg', name: 'Schaumburg', slug: 'schaumburg', form: 'village', status: 'unresearched', counties: ['Cook', 'DuPage'], crossCounty: true },
  { id: 'il-villa-park', name: 'Villa Park', slug: 'villa-park', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-warrenville', name: 'Warrenville', slug: 'warrenville', form: 'city', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-wayne', name: 'Wayne', slug: 'wayne', form: 'village', status: 'unresearched', counties: ['DuPage', 'Kane'], crossCounty: true },
  { id: 'il-west-chicago', name: 'West Chicago', slug: 'west-chicago', form: 'city', status: 'documented', counties: ['DuPage'] },
  { id: 'il-westmont', name: 'Westmont', slug: 'westmont', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-wheaton', name: 'Wheaton', slug: 'wheaton', form: 'city', status: 'documented', counties: ['DuPage'] },
  { id: 'il-willowbrook', name: 'Willowbrook', slug: 'willowbrook', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-winfield', name: 'Winfield', slug: 'winfield', form: 'village', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-wood-dale', name: 'Wood Dale', slug: 'wood-dale', form: 'city', status: 'unresearched', counties: ['DuPage'] },
  { id: 'il-woodridge', name: 'Woodridge', slug: 'woodridge', form: 'village', status: 'unresearched', counties: ['DuPage', 'Will'], crossCounty: true },
];

export const dupageCountyFindings: SurveillanceFinding[] = [
  {
    id: 'dupage-sheriff-flock-2025-2029',
    technology: 'ALPR / Flock Safety',
    title: 'Sheriff Flock ALPR program contracted through February 2029',
    status: 'documented',
    summary: 'DuPage County approved continuation of the Sheriff’s Flock ALPR program for March 1, 2025 through February 28, 2029, with a contract amount not to exceed $777,602.74. The active contract establishes the county program, but NoRec does not infer a current device count from the contract total alone.',
    sourceIds: ['dupage-sheriff-flock-2025'],
    evidenceStatus: 'documented',
    operationalStatus: 'active',
    verifiedAsOf: '2026-09-18',
    sourceAsOf: '2025-03-11',
    owner: 'DuPage County Sheriff’s Office',
  },
  {
    id: 'dupage-campus-lpr-2023',
    technology: 'License-plate readers / county campus security',
    title: 'County campus security installed three license-plate readers',
    status: 'documented',
    summary: 'DuPage County’s FY2023 financial plan states that the County Security Division installed three license-plate card readers on the county campus. NoRec treats this as a county-facility security finding, not as a Sheriff or municipal camera count, and has not yet resolved the current 2026 inventory or vendor.',
    sourceIds: ['dupage-fy2023-security-lpr'],
  },
];

export const wheatonFindings: SurveillanceFinding[] = [
  {
    id: 'wheaton-flock-alpr',
    technology: 'ALPR / Flock Safety',
    title: 'Wheaton operates a large Flock ALPR deployment',
    status: 'documented',
    summary: 'Wheaton Police’s official ALPR page documents department use of automated license-plate readers. An April 2026 police memorandum sought renewal of 44 grant-funded Flock cameras at retail locations and also described an earlier four-year agreement for 20 arterial-roadway cameras. NoRec keeps those contract groups distinct rather than assuming every contracted unit is currently installed and operational without an inventory.',
    sourceIds: ['wheaton-alpr-page', 'wheaton-2026-flock-memo'],
  },
];

export const napervilleFindings: SurveillanceFinding[] = [
  {
    id: 'naperville-alpr-rtcc',
    technology: 'ALPR / real-time crime center',
    title: 'Naperville ALPR program and Real Time Crime Center expansion',
    status: 'documented',
    summary: 'Naperville’s 2025 adopted budget says the Police Department began using ALPR technology on major roadways entering the city in 2021 and budgeted a Real Time Crime Center project to expand the ALPR program and coordinate with retail establishments.',
    sourceIds: ['naperville-2025-budget-rtcc'],
  },
  {
    id: 'naperville-fixed-cameras',
    technology: 'Fixed security cameras',
    title: 'Citywide security-camera network',
    status: 'documented',
    summary: 'Naperville’s 2022 capital plan reported more than 370 security cameras across city facilities and public locations and described a recurring five-year camera management and installation program. This is a historical baseline, not a current 2026 count.',
    sourceIds: ['naperville-2022-security-cameras'],
  },
  {
    id: 'naperville-bwc',
    technology: 'Body-worn cameras',
    title: 'Police body-worn-camera program',
    status: 'documented',
    summary: 'Naperville Police states body-worn cameras were deployed in 2022 to all sworn officers and supervisors, complementing the in-car camera program begun in 2014.',
    sourceIds: ['naperville-bwc'],
  },
];

export const elmhurstFindings: SurveillanceFinding[] = [
  {
    id: 'elmhurst-alpr-geofence',
    technology: 'ALPR',
    title: 'Elmhurst maintains an ALPR geofence system',
    status: 'documented',
    summary: 'Elmhurst’s proposed 2025 budget describes a ten-camera-per-year ALPR replacement schedule on a five-year cycle to maintain the City geofence system. The same budget also describes expansion of the Public Safety Drone Program. NoRec does not infer a precise current ALPR or drone count from that planning document alone.',
    sourceIds: ['elmhurst-2025-budget'],
  },
  {
    id: 'elmhurst-bwc-incar',
    technology: 'Body-worn / in-car cameras',
    title: 'Body-worn and in-car camera system',
    status: 'documented',
    summary: 'Elmhurst capital-budget records document implementation of integrated Police Department body-worn and in-car camera systems in response to Illinois SAFE-T Act requirements.',
    sourceIds: ['elmhurst-2023-capital-budget'],
  },
];


export const westChicagoFindings: SurveillanceFinding[] = [
  {
    id: 'west-chicago-flock-review-2026',
    technology: 'ALPR / Flock Safety',
    title: 'Officer placed on leave during investigation of alleged unauthorized Flock use',
    status: 'documented',
    summary: 'On August 31, 2026, West Chicago said an internal review found information indicating that an officer may have used the Flock ALPR system for an unauthorized purpose between late 2024 and early 2025. The officer was placed on administrative leave, the DuPage County State’s Attorney was asked to investigate possible criminal conduct, and the City began a separate internal review. Administrative leave is not a finding of wrongdoing.',
    sourceIds: ['west-chicago-flock-review-2026'],
    evidenceStatus: 'under investigation',
    operationalStatus: 'active',
    verifiedAsOf: '2026-09-18',
    sourceAsOf: '2026-08-31',
    owner: 'West Chicago Police Department',
  },
];

export const dupageMunicipalitySources = {
  countyMunicipalities: 'https://www.dupagecounty.gov/Community%20Services/Documents/Community%20Development%20Block%20Grant/Amendments/2012%20DuPage%20County%20Natural%20Hazard%20Mitigation%20Plan.pdf',
  mobilityPlan: 'https://www.dupagecounty.gov/Transportation/Documents/DuPage%20Mobility%20Framework/DuPage%20County%20Mobility%20Framework%20Plan_FINAL.pdf',
};
