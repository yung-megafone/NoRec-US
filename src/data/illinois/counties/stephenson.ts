import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const stephensonMunicipalities: MunicipalityRecord[] = [
  { id: 'il-cedarville', name: 'Cedarville', slug: 'cedarville', form: 'village', status: 'unresearched', counties: ['Stephenson'] },
  { id: 'il-dakota', name: 'Dakota', slug: 'dakota', form: 'town', status: 'unresearched', counties: ['Stephenson'] },
  { id: 'il-davis', name: 'Davis', slug: 'davis', form: 'village', status: 'unresearched', counties: ['Stephenson'] },
  { id: 'il-freeport', name: 'Freeport', slug: 'freeport', form: 'city', status: 'documented', counties: ['Stephenson'] },
  { id: 'il-german-valley', name: 'German Valley', slug: 'german-valley', form: 'village', status: 'unresearched', counties: ['Stephenson'] },
  { id: 'il-lena', name: 'Lena', slug: 'lena', form: 'village', status: 'unresearched', counties: ['Stephenson'] },
  { id: 'il-orangeville', name: 'Orangeville', slug: 'orangeville', form: 'village', status: 'unresearched', counties: ['Stephenson'] },
  { id: 'il-pearl-city', name: 'Pearl City', slug: 'pearl-city', form: 'village', status: 'unresearched', counties: ['Stephenson'] },
  { id: 'il-ridott', name: 'Ridott', slug: 'ridott', form: 'village', status: 'unresearched', counties: ['Stephenson'] },
  { id: 'il-rock-city', name: 'Rock City', slug: 'rock-city', form: 'village', status: 'unresearched', counties: ['Stephenson'] },
  { id: 'il-winslow', name: 'Winslow', slug: 'winslow', form: 'village', status: 'unresearched', counties: ['Stephenson'] },
];

export const stephensonCountyFindings: SurveillanceFinding[] = [
  {
    id: 'stephenson-sheriff-bwc',
    technology: 'Body-worn / squad cameras',
    title: 'Sheriff body-worn and squad-camera systems are currently documented',
    status: 'documented',
    summary: 'The Stephenson County Sheriff’s current FOIA page expressly describes body-worn-camera and squad-video records. In a July 2024 official statement, Sheriff Steve Stovall also said body-worn cameras had been issued to all deputies. NoRec has not yet established the current vendor, model, retention schedule, or total camera inventory.',
    sourceIds: ['stephenson-sheriff-foia', 'stephenson-sheriff-2024-bwc-statement'],
  },
  {
    id: 'stephenson-jail-cameras',
    technology: 'Fixed surveillance / corrections',
    title: 'County jail reports nearly 100 surveillance cameras plus staff body cameras',
    status: 'documented',
    summary: 'The Sheriff’s current Corrections page states that the Stephenson County Jail contains nearly one hundred surveillance cameras and that corrections staff wear body-worn cameras. This finding is limited to the jail/corrections environment and is not treated as a countywide public-space camera count.',
    sourceIds: ['stephenson-sheriff-corrections'],
  },
];

export const freeportFindings: SurveillanceFinding[] = [
  {
    id: 'freeport-lpr-shotspotter',
    technology: 'ALPR / acoustic gunshot detection',
    title: 'Freeport documented license-plate readers and ShotSpotter',
    status: 'partial',
    summary: 'A 2023 City of Freeport release credits the Police Department with implementing license-plate readers and ShotSpotter gunfire-location technology. The same release also identifies a pilot residential doorbell-camera program. These are documented deployments, but NoRec has not yet established the current 2026 LPR inventory, vendor, retention/sharing settings, or whether ShotSpotter remains active.',
    sourceIds: ['freeport-2023-police-tech'],
  },
  {
    id: 'freeport-bwc-2024',
    technology: 'Body-worn cameras',
    title: 'Freeport patrol officers used body-worn cameras daily in 2024',
    status: 'documented',
    summary: 'The Illinois Law Enforcement Training and Standards Board’s 2024 Body Worn Camera Report states that Freeport Police had 46 sworn officers, with 32 assigned to patrol and using body-worn cameras daily. The report also documents supervisor review authority. It does not provide a current 2026 device count or model.',
    sourceIds: ['freeport-2024-bwc-report'],
  },
  {
    id: 'freeport-downtown-cameras-2025',
    technology: 'Fixed security cameras',
    title: 'Two downtown security cameras approved in October 2025',
    status: 'documented',
    summary: 'Freeport’s October 20, 2025 City Council highlights state that Council approved two security cameras on city-owned poles in the downtown area, with the nearby business paying for them. NoRec treats these as a dated two-camera approval, not a complete citywide fixed-camera inventory.',
    sourceIds: ['freeport-2025-downtown-cameras'],
  },
  {
    id: 'freeport-tip411',
    technology: 'Tip / information platform',
    title: 'Freeport Police launched tip411 in 2023',
    status: 'documented',
    summary: 'The City announced the Freeport PD tip411 app and anonymous text-tip system in February 2023. The City described the service as stripping identifying information before police receive a tip and supporting anonymous two-way messaging.',
    sourceIds: ['freeport-tip411'],
  },
];

export const stephensonMunicipalitySources = {
  municipalities: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=STEPHENSON',
  mitigationPlan: 'https://cms7files.revize.com/stephensoncountyil/2022-2027%20Stephenson%20County%20Multi-Hazard%20Mitigation%20Plan%20-%202022-06-01%20FINAL.pdf',
};
