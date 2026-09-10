import type { MunicipalityRecord } from '../jurisdiction';

export const ogleMunicipalities: MunicipalityRecord[] = [
  { id: 'il-adeline', name: 'Adeline', slug: 'adeline', form: 'village', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-byron', name: 'Byron', slug: 'byron', form: 'city', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-creston', name: 'Creston', slug: 'creston', form: 'village', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-davis-junction', name: 'Davis Junction', slug: 'davis-junction', form: 'village', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-forreston', name: 'Forreston', slug: 'forreston', form: 'village', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-hillcrest', name: 'Hillcrest', slug: 'hillcrest', form: 'village', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-leaf-river', name: 'Leaf River', slug: 'leaf-river', form: 'village', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-monroe-center', name: 'Monroe Center', slug: 'monroe-center', form: 'village', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-mount-morris', name: 'Mount Morris', slug: 'mount-morris', form: 'village', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-oregon', name: 'Oregon', slug: 'oregon', form: 'city', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-polo', name: 'Polo', slug: 'polo', form: 'city', status: 'unresearched', counties: ['Ogle'] },
  { id: 'il-rochelle', name: 'Rochelle', slug: 'rochelle', form: 'city', status: 'unresearched', counties: ['Ogle', 'Lee'], crossCounty: true },
  { id: 'il-rockford', name: 'Rockford', slug: 'rockford', form: 'city', status: 'documented', counties: ['Winnebago', 'Ogle'], crossCounty: true },
  { id: 'il-stillman-valley', name: 'Stillman Valley', slug: 'stillman-valley', form: 'village', status: 'unresearched', counties: ['Ogle'] },
];

export const ogleMunicipalitySources = {
  stateArchives: 'https://apps.ilsos.gov/isa/localGovNameIndexSearch.do?county=OGLE',
  countyYearbook: 'https://www.oglecountyil.gov/document_center/County%20Clerk/Yearbook/2023%20-%202025%20Yearbook%20-.pdf',
  censusCrossCounty: 'https://www2.census.gov/programs-surveys/economic-census/2012/guidance/geonotes/il/2012ec-geonotes-il.pdf',
};
