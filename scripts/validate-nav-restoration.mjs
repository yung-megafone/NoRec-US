import fs from 'node:fs';

const cssPath = process.argv[2] ?? 'src/styles/global.css';
const css = fs.readFileSync(cssPath, 'utf8');

const requirements = [
  ['hidden checkbox state', '.nav_toggle_state'],
  ['checkbox menu-open selector', '#nav_toggle_state:checked ~ ul#menu'],
  ['checkbox icon animation selector', '#nav_toggle_state:checked + .nav_toggle'],
  ['surveillance dropdown container', '.nav_submenu_details'],
  ['surveillance dropdown menu', '.nav_submenu{'],
  ['mobile dropdown rules', '@media(max-width:760px)'],
];

let failed = false;
for (const [name, token] of requirements) {
  if (!css.includes(token)) {
    console.error(`FAIL: missing ${name}: ${token}`);
    failed = true;
  }
}

const checkboxRule = css.match(/\.nav_toggle_state\s*\{[\s\S]*?\}/);
if (!checkboxRule || !/opacity\s*:\s*0/.test(checkboxRule[0]) || !/pointer-events\s*:\s*none/.test(checkboxRule[0])) {
  console.error('FAIL: .nav_toggle_state is not fully hidden/non-interactive');
  failed = true;
}

if (failed) process.exit(1);
console.log('PASS: navbar CSS matches the checkbox-based navigation contract');
