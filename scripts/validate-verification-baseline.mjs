import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');
const checks = [
  ['src/pages/surveillance/alpr/index.astro', 'Illinois does not impose one universal 30-day ALPR retention period.'],
  ['src/pages/surveillance/alpr/index.astro', '808 state cameras'],
  ['src/pages/surveillance/alpr/index.astro', 'Resolution 26-069'],
  ['src/pages/surveillance/face/illinois-id-photos/index.astro', 'DLDV PROPOSAL · WITHDRAWN'],
  ['src/pages/surveillance/face/illinois-id-photos/index.astro', 'September 18, 2026'],
  ['src/data/illinois/counties/kane.ts', "operationalStatus: 'active'"],
  ['src/data/illinois/counties/kane.ts', '25 license-plate-reader cameras'],
  ['src/data/illinois/counties/cook.ts', "operationalStatus: 'ended'"],
  ['src/data/illinois/counties/cook.ts', '262 immigration-related searches'],
  ['src/data/illinois/counties/dupage.ts', 'through February 2029'],
  ['src/data/illinois/counties/will.ts', "operationalStatus: 'paused'"],
  ['src/data/illinois/counties/will.ts', 'does not say the Flock system itself was suspended'],
  ['src/data/illinois/counties/kendall.ts', 'kendall-isp-state-alpr-2026'],
  ['src/data/illinois/counties/lake.ts', 'seven days'],
  ['src/data/illinois/counties/lake.ts', "owner: 'Lake Zurich Police Department'"],
  ['src/data/illinois/counties/mchenry.ts', 'Thirteen-camera Flock ALPR network'],
  ['src/data/illinois/counties/winnebago.ts', "sourceAsOf: '2026-03-02'"],
  ['src/pages/illinois/counties/dekalb/index.astro', 'Resolution 2026-059'],
  ['src/pages/illinois/counties/winnebago/index.astro', 'State-owned ISP ALPR infrastructure is a separate layer'],
];

let failed = false;
for (const [path, token] of checks) {
  const source = read(path);
  if (!source.includes(token)) {
    console.error(`missing verification token in ${path}: ${token}`);
    failed = true;
  }
}

const alpr = read('src/pages/surveillance/alpr/index.astro');
if (alpr.includes("A 2025 Sheriff's Office renewal documents 25 Flock readers")) {
  console.error('stale Kane 2025 wording remains on ALPR page');
  failed = true;
}

if (failed) process.exit(1);
console.log('verification baseline checks passed');
