import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const kendallMunicipalities: MunicipalityRecord[] = [
  { id: 'il-aurora', name: 'Aurora', slug: 'aurora', form: 'city', status: 'unresearched', counties: ['Kane', 'DuPage', 'Kendall', 'Will'], crossCounty: true },
  { id: 'il-joliet', name: 'Joliet', slug: 'joliet', form: 'city', status: 'unresearched', counties: ['Will', 'Kendall'], crossCounty: true },
  { id: 'il-lisbon', name: 'Lisbon', slug: 'lisbon', form: 'village', status: 'unresearched', counties: ['Kendall'] },
  { id: 'il-millbrook', name: 'Millbrook', slug: 'millbrook', form: 'village', status: 'unresearched', counties: ['Kendall'] },
  { id: 'il-millington', name: 'Millington', slug: 'millington', form: 'village', status: 'unresearched', counties: ['Kendall', 'LaSalle'], crossCounty: true },
  { id: 'il-minooka', name: 'Minooka', slug: 'minooka', form: 'village', status: 'unresearched', counties: ['Grundy', 'Kendall', 'Will'], crossCounty: true },
  { id: 'il-montgomery', name: 'Montgomery', slug: 'montgomery', form: 'village', status: 'unresearched', counties: ['Kane', 'Kendall'], crossCounty: true },
  { id: 'il-newark', name: 'Newark', slug: 'newark', form: 'village', status: 'unresearched', counties: ['Kendall'] },
  { id: 'il-oswego', name: 'Oswego', slug: 'oswego', form: 'village', status: 'documented', counties: ['Kendall'] },
  { id: 'il-plainfield', name: 'Plainfield', slug: 'plainfield', form: 'village', status: 'unresearched', counties: ['Will', 'Kendall'], crossCounty: true },
  { id: 'il-plano', name: 'Plano', slug: 'plano', form: 'city', status: 'documented', counties: ['Kendall'] },
  { id: 'il-plattville', name: 'Plattville', slug: 'plattville', form: 'village', status: 'unresearched', counties: ['Kendall'] },
  { id: 'il-sandwich', name: 'Sandwich', slug: 'sandwich', form: 'city', status: 'unresearched', counties: ['DeKalb', 'Kendall'], crossCounty: true },
  { id: 'il-shorewood', name: 'Shorewood', slug: 'shorewood', form: 'village', status: 'unresearched', counties: ['Will', 'Kendall'], crossCounty: true },
  { id: 'il-yorkville', name: 'Yorkville', slug: 'yorkville', form: 'city', status: 'documented', counties: ['Kendall'] },
];

export const kendallCountyFindings: SurveillanceFinding[] = [
  {
    id: 'kendall-kencom-flock-network',
    technology: 'ALPR / regional data sharing',
    title: 'KenCom-coordinated Flock license-plate-reader network',
    status: 'documented',
    summary: 'KenCom records document a regional license-plate-reader project built around Flock Safety. Committee records from 2020-2022 describe a shared system, agency memoranda of understanding, audit and monitoring protocols, camera-placement rules, and a countywide deployment. A 2022 Oswego board record states there were ten cameras in Kendall County at that point. NoRec treats that number as historical, not as a current county inventory.',
    sourceIds: ['kendall-kencom-2020-flock-demo', 'kendall-kencom-2021-lpr-minutes', 'oswego-2022-alpr-board'],
  },
  {
    id: 'kendall-sheriff-uas-policy',
    technology: 'Drones / UAS',
    title: 'Sheriff publishes Unmanned Aerial System policy',
    status: 'documented',
    summary: 'The Kendall County Sheriff transparency page publishes an Unmanned Aerial System policy as part of its current transparency materials. This confirms a formal UAS policy framework, but the currently published landing page does not by itself establish the Sheriff’s present aircraft count, models, payloads, or flight volume.',
    sourceIds: ['kendall-sheriff-transparency'],
  },
];

export const oswegoFindings: SurveillanceFinding[] = [
  {
    id: 'oswego-flock-alpr',
    technology: 'ALPR / Flock Safety',
    title: 'Oswego Police Flock ALPR program',
    status: 'documented',
    summary: 'Village Board records from April 2022 approved both a Flock Safety memorandum and a KenCom intergovernmental agreement for automated license-plate readers. A February 2025 Oswego Police release documents an officer using the department’s Flock system during a hit-and-run investigation, confirming operational use after deployment.',
    sourceIds: ['oswego-2022-alpr-board', 'oswego-2025-flock-case'],
  },
  {
    id: 'oswego-drone-program',
    technology: 'Drones / sUAS',
    title: 'Oswego Police drone program',
    status: 'documented',
    summary: 'Oswego Police publishes a Small Unmanned Aircraft Systems policy specifically governing operation, use, administration, and oversight of the department’s drone program under Illinois law. Current aircraft count and flight totals remain to be independently resolved from primary records.',
    sourceIds: ['oswego-suas-policy'],
  },
  {
    id: 'oswego-bwc-2022',
    technology: 'Body-worn cameras',
    title: 'Body-worn camera program deployed in 2022',
    status: 'documented',
    summary: 'Oswego Police’s official 2022 annual report states that the department implemented and deployed a body-worn-camera program in 2022 following policy, procurement, training, and SAFE-T Act compliance work.',
    sourceIds: ['oswego-2022-annual-report'],
  },
];

export const planoFindings: SurveillanceFinding[] = [
  {
    id: 'plano-flock-2025',
    technology: 'ALPR / Flock Safety',
    title: 'Four-camera Flock expansion approved with Illinois AG grant',
    status: 'documented',
    summary: 'Plano records show a $14,000 Illinois Attorney General organized-retail-crime grant and a 2025 contract process for four Flock Safety license-plate-reader cameras. City staff also stated Plano already had access to one stationary camera through its KenCom partnership. The four-camera award was intended to cover rental, permitting, installation, and the first year of service.',
    sourceIds: ['plano-flock-memo-2025-10-27', 'plano-flock-council-2025-11-10'],
  },
];

export const yorkvilleFindings: SurveillanceFinding[] = [
  {
    id: 'yorkville-alpr-policy',
    technology: 'ALPR',
    title: 'Yorkville Police automated license-plate-reader policy',
    status: 'documented',
    summary: 'Yorkville Police publishes an ALPR policy governing fixed readers, alerts, hot lists, access, audit procedures, storage, retention, and law-enforcement use. The policy confirms department use of ALPR technology but does not establish a current camera count on its own.',
    sourceIds: ['yorkville-alpr-policy'],
  },
  {
    id: 'yorkville-drone-program',
    technology: 'Drones / UAS',
    title: 'Yorkville Police UAS program',
    status: 'documented',
    summary: 'Yorkville Police publishes a detailed UAS operations policy with annual reporting, deployment documentation, review, disclosure, and 30-day destruction requirements for non-exempt recordings. Public Safety Committee minutes reviewing the 2023 annual report also note department drone use and trained operators.',
    sourceIds: ['yorkville-uas-policy', 'yorkville-public-safety-2024-07'],
  },
];

export const kendallMunicipalitySources = {
  countyCommunities: 'https://www.kendallcountyil.gov/departments/economic-development/available-incentives',
  stateArchives: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=KENDALL',
  countyYearbook: 'https://www.kendallcountyil.gov/home/showpublisheddocument/184/639095932485200000',
  countyGis: 'https://maps.co.kendall.il.us/server/rest/services/Hosted/Municipalities/FeatureServer/0',
};
