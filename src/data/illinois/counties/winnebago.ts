import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const winnebagoMunicipalities: MunicipalityRecord[] = [
  { id: 'il-cherry-valley', name: 'Cherry Valley', slug: 'cherry-valley', form: 'village', status: 'unresearched', counties: ['Winnebago', 'Boone'], crossCounty: true },
  { id: 'il-durand', name: 'Durand', slug: 'durand', form: 'village', status: 'unresearched', counties: ['Winnebago'] },
  { id: 'il-loves-park', name: 'Loves Park', slug: 'loves-park', form: 'city', status: 'unresearched', counties: ['Winnebago', 'Boone'], crossCounty: true },
  { id: 'il-machesney-park', name: 'Machesney Park', slug: 'machesney-park', form: 'village', status: 'unresearched', counties: ['Winnebago'] },
  { id: 'il-new-milford', name: 'New Milford', slug: 'new-milford', form: 'village', status: 'unresearched', counties: ['Winnebago'] },
  { id: 'il-pecatonica', name: 'Pecatonica', slug: 'pecatonica', form: 'village', status: 'unresearched', counties: ['Winnebago'] },
  { id: 'il-rockford', name: 'Rockford', slug: 'rockford', form: 'city', status: 'documented', counties: ['Winnebago'] },
  { id: 'il-rockton', name: 'Rockton', slug: 'rockton', form: 'village', status: 'unresearched', counties: ['Winnebago'] },
  { id: 'il-roscoe', name: 'Roscoe', slug: 'roscoe', form: 'village', status: 'unresearched', counties: ['Winnebago'] },
  { id: 'il-south-beloit', name: 'South Beloit', slug: 'south-beloit', form: 'city', status: 'unresearched', counties: ['Winnebago'] },
  { id: 'il-winnebago', name: 'Winnebago', slug: 'winnebago', form: 'village', status: 'unresearched', counties: ['Winnebago'] },
];

export const winnebagoMunicipalitySources = {
  stateArchives: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=WINNEBAGO',
  countyDirectory: 'https://wincoil.gov/departments/highway-department/jurisdiction-and-map',
  censusPlaces: 'https://tigerweb.geo.census.gov/tigerwebmain/Files/acs26/tigerweb_acs26_incplace_il.html',
};

export const rockfordFindings: SurveillanceFinding[] = [
  {
    id: 'rockford-flock-2026',
    technology: 'ALPR',
    title: '2026 Flock contract',
    status: 'documented',
    summary: 'Rockford approved a $443,998.16 sole-source Flock contract in 2026. Supporting city material states earlier organized-retail-crime grant funding paid for Flock Operating System software, Flock license-plate readers, and Flock PTZ cameras for the Police Department Intelligence Unit.',
    sourceIds: ['rockford-flock-contract-2026'],
  },
  {
    id: 'rockford-lpr-150',
    technology: 'ALPR',
    title: '150+ mobile and stationary LPRs',
    status: 'documented',
    summary: 'Rockford\'s current Crime Reduction Initiatives page says the city purchased more than 150 mobile and stationary license-plate readers.',
    sourceIds: ['rockford-crime-reduction'],
  },
  {
    id: 'rockford-bwc',
    technology: 'Body-worn cameras',
    title: 'Axon body-worn cameras',
    status: 'documented',
    summary: 'Rockford Police General Order 2.56 defines AXON docking stations and requires body-camera recordings to be uploaded and retained through the department\'s digital evidence workflow.',
    sourceIds: ['rockford-bwc-policy'],
  },
  {
    id: 'rockford-drones',
    technology: 'Drones',
    title: 'Six drones / eight reported flights',
    status: 'documented',
    summary: 'Illinois\' SFY 2024 Freedom from Drone Surveillance Act report records six Rockford Police Department drones and eight flights during the reporting period.',
    sourceIds: ['illinois-sfy24-drone-report'],
  },
  {
    id: 'rockford-fixed-cameras',
    technology: 'Fixed cameras',
    title: 'Expanded fixed-camera network',
    status: 'documented',
    summary: 'The City states it quadrupled the number of cameras in high-traffic and high-crime areas.',
    sourceIds: ['rockford-crime-reduction'],
  },
  {
    id: 'rockford-gunshot',
    technology: 'Gunshot detection',
    title: 'Gunshot-detection software',
    status: 'documented',
    summary: 'Rockford lists gunshot-detection software among its enforcement technology. NoRec has not yet established the current vendor, retention rules, or alert-review policy from a primary technical record.',
    sourceIds: ['rockford-crime-reduction'],
  },
  {
    id: 'rockford-social-analytics',
    technology: 'Social-media analytics',
    title: 'Social-analytic software',
    status: 'documented',
    summary: 'The City states it instituted social-analytic software to track criminal use of social media. The public page does not identify the vendor, product, source platforms, query rules, or retention configuration.',
    sourceIds: ['rockford-crime-reduction'],
  },
];
