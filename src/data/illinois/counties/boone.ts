export type MunicipalityStatus = 'documented' | 'partial' | 'unresearched';

export interface BooneMunicipality {
  id: string;
  name: string;
  slug: string;
  form: 'city' | 'village' | 'town';
  status: MunicipalityStatus;
  counties: string[];
  crossCounty?: boolean;
}

export const booneMunicipalities: BooneMunicipality[] = [
  {
    id: 'il-belvidere',
    name: 'Belvidere',
    slug: 'belvidere',
    form: 'city',
    status: 'documented',
    counties: ['Boone'],
  },
  {
    id: 'il-caledonia',
    name: 'Caledonia',
    slug: 'caledonia',
    form: 'village',
    status: 'unresearched',
    counties: ['Boone'],
  },
  {
    id: 'il-capron',
    name: 'Capron',
    slug: 'capron',
    form: 'village',
    status: 'unresearched',
    counties: ['Boone'],
  },
  {
    id: 'il-cherry-valley',
    name: 'Cherry Valley',
    slug: 'cherry-valley',
    form: 'village',
    status: 'unresearched',
    counties: ['Boone', 'Winnebago'],
    crossCounty: true,
  },
  {
    id: 'il-loves-park',
    name: 'Loves Park',
    slug: 'loves-park',
    form: 'city',
    status: 'unresearched',
    counties: ['Boone', 'Winnebago'],
    crossCounty: true,
  },
  {
    id: 'il-poplar-grove',
    name: 'Poplar Grove',
    slug: 'poplar-grove',
    form: 'village',
    status: 'unresearched',
    counties: ['Boone'],
  },
  {
    id: 'il-timberlane',
    name: 'Timberlane',
    slug: 'timberlane',
    form: 'village',
    status: 'unresearched',
    counties: ['Boone'],
  },
];

export const booneMunicipalitySource = {
  label: 'U.S. Census Bureau / Boone County records',
  censusUrl: 'https://tigerweb.geo.census.gov/tigerwebmain/Files/acs26/tigerweb_acs26_incplace_il.html',
  countyUrl: 'https://www.belvidereil.gov/wp-content/uploads/2023/09/data_book.pdf',
};
