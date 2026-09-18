import fs from 'node:fs';

const component = fs.readFileSync('src/components/QrLessonOverlay.astro', 'utf8');
const page = fs.readFileSync('src/pages/qr/index.astro', 'utf8');
const js = fs.readFileSync('public/scripts/qr-lesson.js', 'utf8');
const css = fs.readFileSync('public/styles/qr-lesson.css', 'utf8');

const forbidden = [
  'aria-modal="true"',
  'overflow = "hidden"',
  'requestAnimationFrame(() => yes.focus())',
  '<style>',
  'is:inline',
];
for (const token of forbidden) {
  if (component.includes(token) || js.includes(token)) {
    console.error(`blocking/inline QR behavior remains: ${token}`);
    process.exit(1);
  }
}

for (const token of ['/styles/qr-lesson.css','/scripts/qr-lesson.js','qr-lesson-yes','qr-lesson-no','qr-lesson-stop']) {
  if (!component.includes(token) && !js.includes(token)) {
    console.error(`missing QR token: ${token}`);
    process.exit(1);
  }
}

for (const phrase of ['NoRec.US','tracking','phishing','download','vulnerable']) {
  if (!page.toLowerCase().includes(phrase.toLowerCase())) {
    console.error(`QR page missing required teaching concept: ${phrase}`);
    process.exit(1);
  }
}

if (!css.includes('position: fixed')) {
  console.error('QR lesson card is not fixed-position');
  process.exit(1);
}

console.log('QR source architecture looks correct');
