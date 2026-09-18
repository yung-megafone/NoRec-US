import fs from 'node:fs';

const counties = [
  'boone','carroll','cook','dekalb','dupage','jo-daviess','kane','kendall',
  'lake','lee','mchenry','ogle','stephenson','whiteside','will','winnebago'
];

let failed = false;
for (const slug of counties) {
  const page = `src/pages/illinois/counties/${slug}/index.astro`;
  if (!fs.existsSync(page)) {
    console.error(`missing researched county page: ${page}`);
    failed = true;
  }
}

const metadataPages = ['carroll','cook','dekalb','dupage','jo-daviess','kane','kendall','lake','lee','mchenry','ogle','stephenson','whiteside','will','winnebago'];
for (const slug of metadataPages) {
  const page = `src/pages/illinois/counties/${slug}/index.astro`;
  const source = fs.readFileSync(page, 'utf8');
  if (!source.includes('DeploymentStatusMeta')) {
    console.error(`deployment metadata renderer not wired on ${slug}`);
    failed = true;
  }
}


const statusRenderPages = [
  'src/pages/illinois/counties/carroll/index.astro',
  'src/pages/illinois/counties/cook/index.astro',
  'src/pages/illinois/counties/dupage/index.astro',
  'src/pages/illinois/counties/jo-daviess/index.astro',
  'src/pages/illinois/counties/kane/index.astro',
  'src/pages/illinois/counties/lake/index.astro',
  'src/pages/illinois/counties/mchenry/index.astro',
  'src/pages/illinois/counties/stephenson/index.astro',
  'src/pages/illinois/counties/whiteside/index.astro',
  'src/pages/illinois/counties/will/index.astro',
  'src/pages/illinois/counties/cook/cities/forest-park/index.astro',
  'src/pages/illinois/counties/cook/cities/mount-prospect/index.astro',
  'src/pages/illinois/counties/cook/cities/oak-park/index.astro',
  'src/pages/illinois/counties/cook/cities/skokie/index.astro',
  'src/pages/illinois/counties/dupage/cities/west-chicago/index.astro',
  'src/pages/illinois/counties/lake/cities/lake-zurich/index.astro',
  'src/pages/illinois/counties/lake/cities/mundelein/index.astro',
  'src/pages/illinois/counties/lake/cities/vernon-hills/index.astro',
  'src/pages/illinois/counties/mchenry/cities/woodstock/index.astro',
  'src/pages/illinois/counties/will/cities/channahon/index.astro',
  'src/pages/illinois/counties/will/cities/homer-glen/index.astro',
  'src/pages/illinois/counties/winnebago/cities/rockford/index.astro',
];
for (const page of statusRenderPages) {
  const source = fs.readFileSync(page, 'utf8');
  if (source.includes('f.status.toUpperCase()') && !source.includes('f.evidenceStatus ?? f.status')) {
    console.error(`canonical evidence label fallback not wired on ${page}`);
    failed = true;
  }
}

const metadataComponent = fs.readFileSync('src/components/jurisdictions/DeploymentStatusMeta.astro', 'utf8');
if (metadataComponent.includes('Evidence:')) {
  console.error('DeploymentStatusMeta duplicates the evidence badge');
  failed = true;
}

if (failed) process.exit(1);
console.log('researched county page checks passed');
