import fs from 'node:fs';

const css = fs.readFileSync('src/styles/global.css', 'utf8');
const required = [
  '.evidence_library_grid',
  '.evidence_library_card',
  '.evidence_library_meta',
  '.evidence_library_actions',
  '.jurisdiction_related_evidence',
  'padding: 1.1rem',
  'gap: 1rem',
];

let failed = false;
for (const token of required) {
  if (!css.includes(token)) {
    console.error(`missing related-evidence style: ${token}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('related-evidence spacing styles present');
