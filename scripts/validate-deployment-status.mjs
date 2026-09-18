import fs from 'node:fs';

const path = 'src/data/illinois/deployment-status.ts';
if (!fs.existsSync(path)) {
  console.error(`missing ${path}`);
  process.exit(1);
}
const source = fs.readFileSync(path, 'utf8');
const required = [
  "'planned'",
  "'active'",
  "'paused'",
  "'pending-deactivation'",
  "'ended'",
  "'unknown'",
  'verifiedAsOf',
  'statusChangedOn',
  'sourceAsOf',
  'owner',
];
for (const token of required) {
  if (!source.includes(token)) {
    console.error(`missing deployment-status token: ${token}`);
    process.exit(1);
  }
}
console.log('deployment-status schema looks complete');
