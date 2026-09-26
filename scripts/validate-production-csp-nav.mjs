import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

const astro = read('astro.config.mjs');
const htaccess = read('public/.htaccess');
const layout = read('src/layouts/BaseLayout.astro');
const navHotfix = read('public/style/nav-selected-hotfix.css');

check(/experimental\s*:\s*\{[\s\S]*?csp\s*:\s*\{/.test(astro), 'Astro build-time CSP hashing is not enabled');
for (const directive of [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "media-src 'self'",
  "frame-src 'none'",
  "worker-src 'self'",
  "manifest-src 'self'",
  'upgrade-insecure-requests',
]) {
  check(astro.includes(`"${directive}"`), `Astro CSP missing directive: ${directive}`);
}

check(
  /Header always set Content-Security-Policy "frame-ancestors 'none'"/.test(htaccess),
  'Apache CSP should retain only frame-ancestors, which cannot be enforced by a meta CSP',
);
check(
  !/Header always set Content-Security-Policy "[^"]*(?:script-src|style-src|default-src)/.test(htaccess),
  'Apache CSP still constrains script/style/default sources and will intersect with Astro hashes',
);
check(!/<script\s+is:inline>/.test(layout), 'BaseLayout still contains is:inline scripts that Astro cannot hash automatically');
check(layout.includes('/style/nav-selected-hotfix.css'), 'navbar containment stylesheet is not loaded');
check(navHotfix.includes('ul#menu > li.selected .nav_submenu li a'), 'submenu selected-state containment rule is missing');
check(navHotfix.includes('content: none !important'), 'submenu selected pseudo-element reset is missing');
check(layout.includes("['tools', '/tools/', 'Tools']"), 'Tools navigation entry was lost');
check(layout.includes("pathname.startsWith('/tools/')"), 'Tools active-route inference was lost');

if (failures.length) {
  console.error(`production CSP/nav validation failed (${failures.length})`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('production CSP/nav validation passed');
