import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const whitesideMunicipalities: MunicipalityRecord[] = [
  { id: 'il-albany', name: 'Albany', slug: 'albany', form: 'village', status: 'unresearched', counties: ['Whiteside'] },
  { id: 'il-coleta', name: 'Coleta', slug: 'coleta', form: 'village', status: 'unresearched', counties: ['Whiteside'] },
  { id: 'il-deer-grove', name: 'Deer Grove', slug: 'deer-grove', form: 'village', status: 'unresearched', counties: ['Whiteside'] },
  { id: 'il-erie', name: 'Erie', slug: 'erie', form: 'village', status: 'unresearched', counties: ['Whiteside'] },
  { id: 'il-fulton', name: 'Fulton', slug: 'fulton', form: 'city', status: 'partial', counties: ['Whiteside'] },
  { id: 'il-lyndon', name: 'Lyndon', slug: 'lyndon', form: 'village', status: 'unresearched', counties: ['Whiteside'] },
  { id: 'il-morrison', name: 'Morrison', slug: 'morrison', form: 'city', status: 'unresearched', counties: ['Whiteside'] },
  { id: 'il-prophetstown', name: 'Prophetstown', slug: 'prophetstown', form: 'city', status: 'unresearched', counties: ['Whiteside'] },
  { id: 'il-rock-falls', name: 'Rock Falls', slug: 'rock-falls', form: 'city', status: 'documented', counties: ['Whiteside'] },
  { id: 'il-sterling', name: 'Sterling', slug: 'sterling', form: 'city', status: 'documented', counties: ['Whiteside'] },
  { id: 'il-tampico', name: 'Tampico', slug: 'tampico', form: 'village', status: 'unresearched', counties: ['Whiteside'] },
];

export const whitesideCountyFindings: SurveillanceFinding[] = [
  {
    id: 'whiteside-sheriff-bwc-2023',
    technology: 'Body-worn cameras',
    title: 'Sheriff reported 26 body-worn cameras for 25 personnel in 2023',
    status: 'partial',
    summary: 'The Illinois 2023 Body Worn Camera Report states that the Whiteside County Sheriff’s Office assigned body-worn cameras to patrol, investigations, and civil-process personnel. When fully staffed, 25 personnel used 26 cameras. This is a dated 2023 inventory and is not treated as the current 2026 count.',
    sourceIds: ['whiteside-2023-bwc-report'],
  },
  {
    id: 'whiteside-sheriff-uas-2024',
    technology: 'Drones / UAS',
    title: 'Sheriff expanded its sUAS equipment inventory in 2024',
    status: 'documented',
    summary: 'The Sheriff’s official 2024 annual report describes a 24/7 sUAS unit used for crime and crash-scene photography, search and rescue, and lawful monitoring of large gatherings or events. Capabilities include video and still-image capture, thermal imaging, a search light, and a megaphone. The report says the unit added a smaller drone for SWAT operations in 2024.',
    sourceIds: ['whiteside-sheriff-2024-annual'],
  },
  {
    id: 'whiteside-911-rapidsos-2023',
    technology: 'Emergency communications / location',
    title: 'County 911 approved RapidSOS Premium mapping in 2023',
    status: 'documented',
    summary: 'Whiteside County ETSB minutes describe a RapidSOS Premium deployment combining local GIS and real-time ESRI-based caller-location information. The record also notes integrations available with Axon body cameras, Flock license-plate readers, alarm companies, and other public-safety applications. NoRec does not infer that every available integration was enabled.',
    sourceIds: ['whiteside-etsb-rapidsos-2023'],
  },
];

export const sterlingFindings: SurveillanceFinding[] = [
  {
    id: 'sterling-flock-current',
    technology: 'Automated license plate readers',
    title: 'Sterling Police operates a current Flock Safety ALPR network',
    status: 'documented',
    summary: 'Sterling Police’s Flock Safety transparency portal currently reports 11 cameras, 30-day data retention, indefinite storage of access reasons/logging, and detection of license plates and vehicle attributes rather than facial recognition or people. The portal identifies Sterling Police as the data owner.',
    sourceIds: ['sterling-flock-transparency'],
  },
  {
    id: 'sterling-axon-bwc-2025',
    technology: 'Body-worn cameras / digital evidence',
    title: 'Sterling was making its third-year Axon body-camera payment in June 2025',
    status: 'documented',
    summary: 'Sterling’s June 16, 2025 City Council payment records include a $21,423.75 Axon Enterprise payment labeled “AXON BODY CAMERA - YEAR 3 PAYMENT” and a separate Evidence license conversion. This documents an active Axon BWC/evidence relationship in 2025 without establishing the current 2026 device count.',
    sourceIds: ['sterling-axon-payment-2025'],
  },
  {
    id: 'sterling-avigilon-2024',
    technology: 'Fixed cameras / video intercom',
    title: 'Sterling approved an Avigilon camera and intercom system in October 2024',
    status: 'documented',
    summary: 'City Council approved a $59,644.40 Rock River Service Company quote for a new Avigilon server, Avigilon cameras with intercom/video access, associated hardware, and electronic locks. The system was intended to support after-hours access following dispatch consolidation.',
    sourceIds: ['sterling-avigilon-2024'],
  },
];

export const rockFallsFindings: SurveillanceFinding[] = [
  {
    id: 'rock-falls-bwc-2019',
    technology: 'Body-worn cameras',
    title: 'Rock Falls reported 16 officers using 16 body-worn cameras in 2019',
    status: 'partial',
    summary: 'The Illinois 2019 Body Worn Camera Report states that Rock Falls Police had 16 officers using 16 body-worn cameras and that supervisors conducted random monthly video audits. This is a historical inventory and is not treated as the current 2026 count.',
    sourceIds: ['rock-falls-2019-bwc-report'],
  },
  {
    id: 'rock-falls-flock-pilot-2024',
    technology: 'Automated license plate readers',
    title: 'Rock Falls City Council received a Flock Safety LPR pilot presentation in October 2024',
    status: 'partial',
    summary: 'Official October 1, 2024 City Council minutes document a Flock Safety presentation for a license-plate-reader pilot program. A February 2026 Lee County Sheriff record later describes a stolen Rock Falls vehicle alerting on a Flock LPR, providing operational evidence of Flock use by that time. Current camera count, ownership, retention, and contract terms remain unresolved.',
    sourceIds: ['rock-falls-flock-2024', 'rock-falls-flock-2026-operational'],
  },
];

export const fultonFindings: SurveillanceFinding[] = [
  {
    id: 'fulton-flock-2025',
    technology: 'Automated license plate readers',
    title: 'Fulton Police has a documented Flock Safety ALPR deployment',
    status: 'partial',
    summary: 'Public-record aggregation by the Electronic Frontier Foundation’s Atlas of Surveillance identifies Fulton Police as operating five Flock Safety automated license-plate readers as of September 2025. NoRec has not yet located the underlying Fulton-origin contract or policy, so this remains partial pending a direct primary record.',
    sourceIds: ['fulton-flock-atlas-2025'],
  },
];

export const whitesideMunicipalitySources = {
  municipalities: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=WHITESIDE',
  yearbook: 'https://www.whitesidecountyil.gov/365/County-Yearbook-PDF',
};
