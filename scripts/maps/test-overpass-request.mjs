import fs from 'node:fs';
import assert from 'node:assert/strict';

const files = [
  'scripts/maps/refresh-osm-cache.mjs',
  'src/components/maps/CountyMap.jsx'
];

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  assert.ok(source.includes('URLSearchParams'), `${file} must form-encode Overpass POST bodies`);
  assert.ok(
    source.includes("'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'") ||
    source.includes('"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"'),
    `${file} must use application/x-www-form-urlencoded`
  );
  assert.ok(!source.includes("'Content-Type': 'text/plain;charset=UTF-8'"), `${file} must not send the raw query as text/plain`);
}

console.log('Overpass request encoding checks passed');
