#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { countyMapConfigs, availableCountyMapSlugs } from '../../src/data/maps/countyMapConfig.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..');
const outDir = path.join(repoRoot, 'public', 'map-data');
const args = process.argv.slice(2);
const all = args.includes('--all');
const selected = args.filter((arg) => !arg.startsWith('--'));
const slugs = all ? availableCountyMapSlugs : (selected.length ? selected : ['boone']);
const delayMs = Number(process.env.NOREC_OSM_DELAY_MS || 2500);

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

function buildOverpassQuery(areaName) {
  return `
[out:json][timeout:60];
area["boundary"="administrative"]["admin_level"="6"]["name"="${areaName}"]->.searchArea;
(
  node(area.searchArea)["man_made"="surveillance"];
  way(area.searchArea)["man_made"="surveillance"];
  relation(area.searchArea)["man_made"="surveillance"];
  node(area.searchArea)["surveillance:type"];
  way(area.searchArea)["surveillance:type"];
  relation(area.searchArea)["surveillance:type"];
  node(area.searchArea)["camera:type"];
  way(area.searchArea)["camera:type"];
  relation(area.searchArea)["camera:type"];
  node(area.searchArea)["camera:mount"];
  way(area.searchArea)["camera:mount"];
  relation(area.searchArea)["camera:mount"];
);
out center tags geom;
`.trim();
}

function convertElement(element) {
  let geometry = null;
  if (element.type === 'node' && typeof element.lon === 'number' && typeof element.lat === 'number') {
    geometry = { type: 'Point', coordinates: [element.lon, element.lat] };
  } else if (element.center && typeof element.center.lon === 'number' && typeof element.center.lat === 'number') {
    geometry = { type: 'Point', coordinates: [element.center.lon, element.center.lat] };
  } else if (Array.isArray(element.geometry) && element.geometry.length) {
    geometry = {
      type: 'LineString',
      coordinates: element.geometry.map((point) => [point.lon, point.lat])
    };
  }

  if (!geometry) return null;
  return {
    type: 'Feature',
    geometry,
    properties: {
      osm_id: `${element.type}/${element.id}`,
      name: element.tags?.name || null,
      operator: element.tags?.operator || null,
      norec_status: 'OSM_ONLY',
      osm_surveillance_type: element.tags?.['surveillance:type'] || null,
      camera_type: element.tags?.['camera:type'] || null,
      camera_mount: element.tags?.['camera:mount'] || null,
      raw_tags: element.tags || {}
    }
  };
}

async function refreshCounty(slug) {
  const config = countyMapConfigs[slug];
  if (!config) throw new Error(`Unknown county slug: ${slug}`);

  const response = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Accept': 'application/json',
      'User-Agent': 'NoRec.US/0.1 (+https://norec.us; OSM cache refresh)'
    },
    body: new URLSearchParams({ data: buildOverpassQuery(config.overpassAreaName) }).toString()
  });

  if (!response.ok) {
    const detail = (await response.text()).trim().replace(/\s+/g, ' ').slice(0, 800);
    throw new Error(`Overpass returned ${response.status} for ${slug}${detail ? `: ${detail}` : ''}`);
  }
  const payload = await response.json();
  const featureCollection = {
    type: 'FeatureCollection',
    features: (payload.elements || []).map(convertElement).filter(Boolean)
  };

  await fs.mkdir(path.join(outDir, 'osm'), { recursive: true });
  await fs.mkdir(path.join(outDir, 'meta'), { recursive: true });
  await fs.writeFile(path.join(outDir, 'osm', `${slug}.geojson`), `${JSON.stringify(featureCollection, null, 2)}\n`);
  await fs.writeFile(path.join(outDir, 'meta', `${slug}.json`), `${JSON.stringify({
    county: slug,
    fetchedAt: new Date().toISOString(),
    source: 'OpenStreetMap via Overpass API',
    queryArea: config.overpassAreaName,
    count: featureCollection.features.length,
    attribution: '© OpenStreetMap contributors · ODbL'
  }, null, 2)}\n`);

  console.log(`${slug}: wrote ${featureCollection.features.length} cached OSM features`);
}

for (const slug of slugs) {
  await refreshCounty(slug);
  if (slug !== slugs[slugs.length - 1]) await sleep(delayMs);
}
