#!/usr/bin/env node
import fs from 'node:fs';

const requiredFiles = [
  'src/components/maps/CountyMap.jsx',
  'src/components/maps/CountyMapSection.astro',
  'src/components/maps/county-map.css',
  'src/data/maps/countyMapConfig.mjs',
  'scripts/maps/refresh-osm-cache.mjs',
  'scripts/maps/extract_osm_surveillance_from_pbf.py',
  'public/map-data/osm/boone.geojson',
  'public/map-data/norec/boone.geojson',
  'public/map-data/meta/boone.json'
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`Missing required county-map file: ${file}`);
    process.exit(1);
  }
}

const countyMap = fs.readFileSync('src/components/maps/CountyMap.jsx', 'utf8');
if (!countyMap.includes('maplibregl')) {
  console.error('CountyMap.jsx must use MapLibre GL.');
  process.exit(1);
}
if (!countyMap.includes('Check OSM for updates')) {
  console.error('CountyMap.jsx is missing the consent-gated refresh UI.');
  process.exit(1);
}
if (countyMap.includes('<iframe')) {
  console.error('County map system must not use iframes.');
  process.exit(1);
}

const packageJson = fs.readFileSync('package.json', 'utf8');
if (!packageJson.includes('maplibre-gl')) {
  console.error('package.json is missing maplibre-gl.');
  process.exit(1);
}

console.log('county-map system looks complete');
