import fs from 'node:fs';
import assert from 'node:assert/strict';

const operatorScript = fs.readFileSync('scripts/maps/refresh-osm-cache.mjs', 'utf8');
const browserMap = fs.readFileSync('src/components/maps/CountyMap.jsx', 'utf8');

assert.match(operatorScript, /['\"]User-Agent['\"]\s*:\s*['\"]NoRec\.US\//, 'operator refresh must identify NoRec.US with a unique User-Agent');
assert.match(operatorScript, /['\"]Accept['\"]\s*:\s*['\"]application\/json['\"]/, 'operator refresh should request JSON');
assert.match(operatorScript, /await response\.text\(\)/, 'operator refresh must include the Overpass response body in HTTP error diagnostics');
assert.match(browserMap, /referrerPolicy\s*:\s*['\"]origin['\"]/, 'browser refresh must explicitly send only the NoRec origin as Referer');
assert.doesNotMatch(browserMap, /headers\s*:\s*\{[^}]*User-Agent/s, 'browser code must not try to spoof User-Agent');

console.log('Overpass identification checks passed');
