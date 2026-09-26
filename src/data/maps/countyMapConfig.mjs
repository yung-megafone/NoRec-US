export const countyMapConfigs = {
  boone: {
    slug: 'boone',
    name: 'Boone County',
    center: [-88.82, 42.32],
    zoom: 10,
    overpassAreaName: 'Boone County',
    aerialTiles: null,
    boundaryPath: '/map-data/boundaries/boone.geojson',
    municipalitiesPath: '/map-data/boundaries/boone-municipalities.geojson',
    norecPath: '/map-data/norec/boone.geojson',
    osmPath: '/map-data/osm/boone.geojson',
    osmMetaPath: '/map-data/meta/boone.json'
  },
  peoria: {
    slug: 'peoria',
    name: 'Peoria County',
    center: [-89.60, 40.70],
    zoom: 10,
    overpassAreaName: 'Peoria County',
    aerialTiles: null,
    boundaryPath: '/map-data/boundaries/peoria.geojson',
    municipalitiesPath: '/map-data/boundaries/peoria-municipalities.geojson',
    norecPath: '/map-data/norec/peoria.geojson',
    osmPath: '/map-data/osm/peoria.geojson',
    osmMetaPath: '/map-data/meta/peoria.json'
  },
  winnebago: {
    slug: 'winnebago',
    name: 'Winnebago County',
    center: [-89.25, 42.33],
    zoom: 9,
    overpassAreaName: 'Winnebago County',
    aerialTiles: null,
    boundaryPath: '/map-data/boundaries/winnebago.geojson',
    municipalitiesPath: '/map-data/boundaries/winnebago-municipalities.geojson',
    norecPath: '/map-data/norec/winnebago.geojson',
    osmPath: '/map-data/osm/winnebago.geojson',
    osmMetaPath: '/map-data/meta/winnebago.json'
  }
};

export const availableCountyMapSlugs = Object.keys(countyMapConfigs).sort();
