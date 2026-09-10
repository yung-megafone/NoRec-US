import type { MunicipalityRecord, SurveillanceFinding } from '../jurisdiction';

export const willMunicipalities: MunicipalityRecord[] = [
  { id: 'il-aurora', name: 'Aurora', slug: 'aurora', form: 'city', status: 'unresearched', counties: ['Will', 'Kane', 'DuPage', 'Kendall'], crossCounty: true },
  { id: 'il-beecher', name: 'Beecher', slug: 'beecher', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-bolingbrook', name: 'Bolingbrook', slug: 'bolingbrook', form: 'village', status: 'unresearched', counties: ['Will', 'DuPage'], crossCounty: true },
  { id: 'il-braceville', name: 'Braceville', slug: 'braceville', form: 'village', status: 'unresearched', counties: ['Will', 'Grundy'], crossCounty: true },
  { id: 'il-braidwood', name: 'Braidwood', slug: 'braidwood', form: 'city', status: 'unresearched', counties: ['Will'] },
  { id: 'il-channahon', name: 'Channahon', slug: 'channahon', form: 'village', status: 'unresearched', counties: ['Will', 'Grundy'], crossCounty: true },
  { id: 'il-coal-city', name: 'Coal City', slug: 'coal-city', form: 'village', status: 'unresearched', counties: ['Will', 'Grundy'], crossCounty: true },
  { id: 'il-crest-hill', name: 'Crest Hill', slug: 'crest-hill', form: 'city', status: 'unresearched', counties: ['Will'] },
  { id: 'il-crete', name: 'Crete', slug: 'crete', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-diamond', name: 'Diamond', slug: 'diamond', form: 'village', status: 'unresearched', counties: ['Will', 'Grundy'], crossCounty: true },
  { id: 'il-elwood', name: 'Elwood', slug: 'elwood', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-frankfort', name: 'Frankfort', slug: 'frankfort', form: 'village', status: 'unresearched', counties: ['Will', 'Cook'], crossCounty: true },
  { id: 'il-godley', name: 'Godley', slug: 'godley', form: 'village', status: 'unresearched', counties: ['Will', 'Grundy'], crossCounty: true },
  { id: 'il-homer-glen', name: 'Homer Glen', slug: 'homer-glen', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-joliet', name: 'Joliet', slug: 'joliet', form: 'city', status: 'documented', counties: ['Will', 'Kendall'], crossCounty: true },
  { id: 'il-lemont', name: 'Lemont', slug: 'lemont', form: 'village', status: 'unresearched', counties: ['Will', 'Cook', 'DuPage'], crossCounty: true },
  { id: 'il-lockport', name: 'Lockport', slug: 'lockport', form: 'city', status: 'unresearched', counties: ['Will'] },
  { id: 'il-manhattan', name: 'Manhattan', slug: 'manhattan', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-minooka', name: 'Minooka', slug: 'minooka', form: 'village', status: 'unresearched', counties: ['Will', 'Grundy', 'Kendall'], crossCounty: true },
  { id: 'il-mokena', name: 'Mokena', slug: 'mokena', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-monee', name: 'Monee', slug: 'monee', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-naperville', name: 'Naperville', slug: 'naperville', form: 'city', status: 'unresearched', counties: ['Will', 'DuPage'], crossCounty: true },
  { id: 'il-new-lenox', name: 'New Lenox', slug: 'new-lenox', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-orland-park', name: 'Orland Park', slug: 'orland-park', form: 'village', status: 'unresearched', counties: ['Will', 'Cook'], crossCounty: true },
  { id: 'il-park-forest', name: 'Park Forest', slug: 'park-forest', form: 'village', status: 'unresearched', counties: ['Will', 'Cook'], crossCounty: true },
  { id: 'il-peotone', name: 'Peotone', slug: 'peotone', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-plainfield', name: 'Plainfield', slug: 'plainfield', form: 'village', status: 'documented', counties: ['Will', 'Kendall'], crossCounty: true },
  { id: 'il-rockdale', name: 'Rockdale', slug: 'rockdale', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-romeoville', name: 'Romeoville', slug: 'romeoville', form: 'village', status: 'documented', counties: ['Will'] },
  { id: 'il-sauk-village', name: 'Sauk Village', slug: 'sauk-village', form: 'village', status: 'unresearched', counties: ['Will', 'Cook'], crossCounty: true },
  { id: 'il-shorewood', name: 'Shorewood', slug: 'shorewood', form: 'village', status: 'unresearched', counties: ['Will', 'Kendall'], crossCounty: true },
  { id: 'il-steger', name: 'Steger', slug: 'steger', form: 'village', status: 'unresearched', counties: ['Will', 'Cook'], crossCounty: true },
  { id: 'il-symerton', name: 'Symerton', slug: 'symerton', form: 'village', status: 'unresearched', counties: ['Will'] },
  { id: 'il-university-park', name: 'University Park', slug: 'university-park', form: 'village', status: 'unresearched', counties: ['Will', 'Cook'], crossCounty: true },
  { id: 'il-wilmington', name: 'Wilmington', slug: 'wilmington', form: 'city', status: 'unresearched', counties: ['Will'] },
  { id: 'il-woodridge', name: 'Woodridge', slug: 'woodridge', form: 'village', status: 'unresearched', counties: ['Will', 'DuPage'], crossCounty: true },
];

export const willCountyFindings: SurveillanceFinding[] = [
  {
    id: 'wcso-bwc',
    technology: 'Body-worn cameras',
    title: 'Sheriff body-worn-camera program documented',
    status: 'documented',
    summary: 'Will County Sheriff records and public budget materials document a body-worn-camera program and related digital-evidence infrastructure. NoRec keeps this at the Sheriff/county level and does not infer municipal camera inventories from it.',
    sourceIds: ['will-sheriff-foia','will-budget'],
  },
];

export const jolietFindings: SurveillanceFinding[] = [
  {
    id: 'joliet-flock',
    technology: 'ALPR / Flock Safety',
    title: 'Flock ALPR program documented in city records',
    status: 'documented',
    summary: 'Joliet procurement and council records document Police Department use of Flock Safety automated license-plate-reader technology. Contract records establish the program but should not be converted into a current installed-camera count without a newer inventory and installation audit.',
    sourceIds: ['joliet-flock-records'],
  },
  {
    id: 'joliet-bwc',
    technology: 'Body-worn cameras',
    title: 'Police body-worn-camera program',
    status: 'documented',
    summary: 'Joliet Police maintains body-worn-camera records and policy materials as part of its public-record and transparency framework. Current device counts remain a separate inventory question.',
    sourceIds: ['joliet-foia'],
  },
];

export const plainfieldFindings: SurveillanceFinding[] = [
  {
    id: 'plainfield-flock',
    technology: 'ALPR / Flock Safety',
    title: 'Flock Safety ALPR use documented',
    status: 'documented',
    summary: 'Plainfield Village records document Flock Safety license-plate-reader contracting and police use. NoRec treats the contract as evidence of the system and leaves current installed count, locations, retention configuration, and sharing as follow-up questions unless a newer primary inventory resolves them.',
    sourceIds: ['plainfield-flock'],
  },
];

export const romeovilleFindings: SurveillanceFinding[] = [
  {
    id: 'romeoville-flock',
    technology: 'ALPR / Flock Safety',
    title: 'Police Flock ALPR system documented',
    status: 'documented',
    summary: 'Romeoville public meeting and procurement records document Police Department Flock Safety ALPR technology. The dossier distinguishes contract/procurement evidence from a verified current camera inventory.',
    sourceIds: ['romeoville-flock'],
  },
];

export const willMunicipalitySource = 'https://www.willcountyillinois.com/';
