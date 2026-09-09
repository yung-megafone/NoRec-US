
export type SurveillanceState = 'CONFIRMED' | 'HISTORICALLY CONFIRMED' | 'LEGAL FRAMEWORK' | 'UNDER INVESTIGATION';

export type SurveillanceEntry = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  state: SurveillanceState;
  summary: string;
  evidence: string;
  illinoisUse: string;
  providers?: { name: string; href: string }[];
  detailHref?: string;
  sourceLinks: { label: string; href: string; sourceType: string }[];
  caveat?: string;
};

export const surveillanceEntries: SurveillanceEntry[] = [
  {
    slug: 'facial-recognition',
    name: 'Facial recognition / biometric face search',
    shortName: 'Facial recognition',
    category: 'Biometric identification',
    state: 'CONFIRMED',
    summary: 'One-to-one and one-to-many facial comparison systems can use facial images to verify or search for identity. Illinois Secretary of State records and law expressly establish use of facial recognition in the driver-license / identification-card environment.',
    evidence: 'A 2016 Secretary of State rulemaking notice says the office uses facial recognition technology as a biometric identifier in the credentialing process. State procurement records identify IDEMIA/Morpho USA in the DL/ID software, printing, and facial-recognition contract.',
    illinoisUse: 'Illinois Secretary of State driver-license and identification-card systems; statutes also expressly address governmental requests for facial-recognition search services involving credential photographs.',
    providers: [{ name: 'IDEMIA', href: '/providers/idemia/' }],
    detailHref: '/surveillance/face/illinois-id-photos/',
    sourceLinks: [
      { label: 'Illinois Secretary of State 2016 rulemaking notice', href: 'https://www.ilsos.gov/departments/index/register/volume40/register_volume40_issue31.pdf', sourceType: 'Primary' },
      { label: 'Illinois BidBuy — IDEMIA DL/ID software, printing and facial recognition', href: 'https://www.bidbuy.illinois.gov/bso/external/bidDetail.sda?docId=23-350SOS-SOS35-B-32203&external=true&parentUrl=close', sourceType: 'Primary' },
      { label: '625 ILCS 5/6-110.1', href: 'https://www.ilga.gov/legislation/ilcs/fulltext?DocName=062500050K6-110.1', sourceType: 'Primary' }
    ],
    caveat: 'The procurement record confirms IDEMIA’s role in the DL/ID contract including facial recognition. It does not, by itself, establish every component, architecture choice, retention practice, or search workflow currently in production.'
  },
  {
    slug: 'alpr',
    name: 'Automated license plate readers (ALPR)',
    shortName: 'ALPR',
    category: 'Vehicle surveillance',
    state: 'CONFIRMED',
    summary: 'Networked cameras read license plates and commonly associate those detections with time, location, and vehicle characteristics for alerts and retrospective search.',
    evidence: 'Illinois State Police operates a statewide ALPR program and states that Motorola Solutions is its current primary vendor. Local Illinois agencies also use Flock Safety systems; NoRec has direct Boone County and Belvidere records.',
    illinoisUse: 'Illinois State Police statewide program plus municipal and county deployments.',
    providers: [
      { name: 'Flock Safety', href: '/providers/flock-safety/' },
      { name: 'Motorola Solutions', href: '/providers/motorola-solutions/' }
    ],
    detailHref: '/surveillance/alpr/',
    sourceLinks: [
      { label: 'Illinois State Police ALPR Transparency Page', href: 'https://isp.illinois.gov/CriminalInvestigations/TransparencyPage', sourceType: 'Primary' },
      { label: 'Illinois Secretary of State — Flock audit', href: 'https://www.ilsos.gov/news/2025/august-25-2025-giannoulias-audit-finds-license-plate-reader-company-in-violation-of-state-law.html', sourceType: 'Primary' },
      { label: 'Illinois Secretary of State — Motorola / Forest Park audit', href: 'https://www.ilsos.gov/news/2025/september-5-2025-giannoulias-audit-uncovers-forest-park-police-department-sharing-license-plate-reader-data.html', sourceType: 'Primary' }
    ]
  },
  {
    slug: 'drones',
    name: 'Police drones / unmanned aircraft systems',
    shortName: 'Drones / UAS',
    category: 'Aerial surveillance',
    state: 'CONFIRMED',
    summary: 'Law-enforcement drones can carry cameras and other sensors for aerial observation, search, documentation, and emergency response.',
    evidence: 'Illinois regulates law-enforcement drone use through the Freedom from Drone Surveillance Act and requires reporting that identifies agency inventories and flight activity.',
    illinoisUse: 'State reporting documents local deployments including Huntley Police and the McHenry County Sheriff’s Office.',
    detailHref: '/surveillance/drones/',
    sourceLinks: [
      { label: '725 ILCS 167 — Freedom from Drone Surveillance Act', href: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3520&Chapter=CRIMINAL+PROCEDURE&ChapterID=54&MajorTopic=RIGHTS+AND+REMEDIES', sourceType: 'Primary' },
      { label: 'McHenry County / Huntley jurisdiction file', href: '/county/60098/', sourceType: 'NoRec jurisdiction file' }
    ]
  },
  {
    slug: 'human-fingerprints',
    name: 'Human fingerprints / ABIS',
    shortName: 'Fingerprints / ABIS',
    category: 'Biometric identification',
    state: 'CONFIRMED',
    summary: 'Fingerprint systems compare biometric records for identity, criminal-history, background-check, and investigative purposes.',
    evidence: 'Illinois State Police describes an Automated Biometric Identification System (ABIS) used with a repository containing records relating to more than five million fingerprint files.',
    illinoisUse: 'Illinois State Police Bureau of Identification and related fingerprint-based identification services.',
    detailHref: '/surveillance/human-fingerprints/',
    sourceLinks: [
      { label: 'Illinois State Police — Bureau of Identification', href: 'https://isp.illinois.gov/BureauOfIdentification', sourceType: 'Primary' },
      { label: 'Illinois State Police — Fingerprint services', href: 'https://isp.illinois.gov/BureauOfIdentification/Fingerprint', sourceType: 'Primary' }
    ]
  },
  {
    slug: 'cell-site-simulators',
    name: 'Cell-site simulators / IMSI catchers / digital analyzers',
    shortName: 'Cell-site simulators',
    category: 'Device identification & location',
    state: 'CONFIRMED',
    summary: 'Cell-site simulators can cause nearby phones or other communications devices to interact with a law-enforcement device so that identifying or location information can be obtained. Illinois law also places passive digital analyzers and passive interception devices inside its definition.',
    evidence: 'Illinois enacted the Citizen Privacy Protection Act specifically regulating law-enforcement use of these devices. Public-records litigation and reporting have separately documented Chicago Police Department acquisition/use of Stingray-class equipment.',
    illinoisUse: 'Chicago Police Department use is historically documented. Illinois law regulates use statewide and generally requires a probable-cause court order for permitted law-enforcement use, subject to statutory exceptions.',
    sourceLinks: [
      { label: '725 ILCS 137 — Citizen Privacy Protection Act', href: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3716&Chapter=CRIMINAL+PROCEDURE&ChapterID=54&MajorTopic=RIGHTS+AND+REMEDIES', sourceType: 'Primary' },
      { label: 'ACLU of Illinois — Stingrays and the Chicago Police Department', href: 'https://www.aclu-il.org/publications/stingrays-and-chicago-police-department/', sourceType: 'Secondary / records-based' }
    ],
    caveat: 'Illinois law places passive digital analyzers within the regulated technology definition. The current archive does not contain a primary agency record establishing a present Illinois deployment of a passive analyzer distinct from an active cell-site simulator.'
  },
  {
    slug: 'vehicle-fingerprinting',
    name: 'Vehicle / property fingerprinting',
    shortName: 'Vehicle fingerprinting',
    category: 'Property identification & tracking',
    state: 'CONFIRMED',
    summary: 'Modern ALPR systems can describe and re-identify vehicles using more than a plate number. Vehicle make, model, color, distinguishing characteristics, and other machine-readable attributes can turn a vehicle — privately owned property — into a searchable signature.',
    evidence: 'The Boone County Sheriff’s Office ALPR policy in NoRec’s archive describes Flock detections containing the license plate together with vehicle make, model, color, and unique identifiers. Illinois State Police also operates a statewide ALPR program. NoRec uses “property fingerprinting” here to describe persistent machine-readable identification of property such as vehicles, not latent human fingerprints recovered from objects.',
    illinoisUse: 'Boone County ALPR policy and other documented Illinois ALPR deployments establish vehicle-characteristic capture and search as part of Illinois vehicle-surveillance infrastructure.',
    providers: [
      { name: 'Flock Safety', href: '/providers/flock-safety/' },
      { name: 'Motorola Solutions', href: '/providers/motorola-solutions/' }
    ],
    detailHref: '/county/61008/',
    sourceLinks: [
      { label: 'NoRec archive — BCSO Policy 450 ALPRs', href: '/archive/deflock/26-164_BCSO_Policy_450_ALPRs.pdf', sourceType: 'Primary / FOIA' },
      { label: 'Illinois State Police ALPR Transparency Page', href: 'https://isp.illinois.gov/CriminalInvestigations/TransparencyPage', sourceType: 'Primary' }
    ],
    caveat: '“Fingerprinting” is NoRec’s descriptive term for creating or using a searchable signature of property. It should not be confused with forensic latent-print examination or imply that every vendor uses the same proprietary attributes or re-identification method.'
  },
  {
    slug: 'gunshot-detection',
    name: 'Acoustic gunshot detection',
    shortName: 'Gunshot detection',
    category: 'Acoustic surveillance',
    state: 'HISTORICALLY CONFIRMED',
    summary: 'Distributed acoustic sensors detect impulsive sounds, estimate a probable gunshot location, and generate alerts for review and police response.',
    evidence: 'Chicago contracted with ShotSpotter for an Area Acoustic Gun Shot Surveillance System, and the Chicago Office of Inspector General published a detailed analysis of CPD use. Illinois State Police separately procured ShotSpotter technology for Chicago expressways.',
    illinoisUse: 'Chicago Police Department historically used ShotSpotter through 2024; Illinois State Police also procured ShotSpotter technology for expressway gunshot detection.',
    providers: [{ name: 'SoundThinking / ShotSpotter', href: '/providers/soundthinking/' }],
    sourceLinks: [
      { label: 'City of Chicago Contract 71366 — ShotSpotter', href: 'https://webapps1.chicago.gov/vcsearch/city/contracts/71366', sourceType: 'Primary' },
      { label: 'Chicago OIG — CPD Use of ShotSpotter', href: 'https://www.oversight.gov/reports/chicago-police-departments-use-shotspotter-technology', sourceType: 'Primary' },
      { label: 'Illinois BidBuy — ISP ShotSpotter procurement', href: 'https://www.bidbuy.illinois.gov/bso/external/bidDetail.sda?docId=22-493ISP-OPERA-B-29936&external=true&parentUrl=close', sourceType: 'Primary' }
    ],
    caveat: 'Chicago ended its ShotSpotter relationship in 2024, so this is labeled historically confirmed rather than implying current CPD deployment.'
  },
  {
    slug: 'body-worn-video',
    name: 'Body-worn and in-car video systems',
    shortName: 'Body / in-car video',
    category: 'Audio / video surveillance',
    state: 'CONFIRMED',
    summary: 'Body-worn and vehicle-mounted systems record law-enforcement encounters and typically depend on evidence-management software and storage infrastructure.',
    evidence: 'Illinois procurement records show Secretary of State Police selected Axon for body-worn camera equipment/software. Illinois State Police separately procured Motorola Solutions body and in-car camera systems.',
    illinoisUse: 'Multiple Illinois law-enforcement agencies, including Secretary of State Police and Illinois State Police.',
    providers: [
      { name: 'Axon', href: '/providers/axon/' },
      { name: 'Motorola Solutions', href: '/providers/motorola-solutions/' }
    ],
    sourceLinks: [
      { label: 'Illinois BidBuy — Secretary of State Police Axon body cameras', href: 'https://www.bidbuy.illinois.gov/bso/external/bidDetail.sda?docId=24-350SOS-SOS35-B-40521&external=true&parentUrl=close', sourceType: 'Primary' },
      { label: 'Illinois BidBuy — ISP Motorola body and in-car cameras', href: 'https://www.bidbuy.illinois.gov/bso/external/bidDetail.sda?docId=24-493ISP-ADMIN-B-42293&external=true&parentUrl=close', sourceType: 'Primary' }
    ]
  },
  {
    slug: 'covert-video',
    name: 'Covert video surveillance cameras',
    shortName: 'Covert video',
    category: 'Audio / video surveillance',
    state: 'CONFIRMED',
    summary: 'Concealed surveillance cameras permit investigators to record locations or subjects without an obvious camera installation.',
    evidence: 'A 2026 Illinois State Police procurement sought covert video surveillance concealment cameras.',
    illinoisUse: 'Illinois State Police procurement is documented.',
    sourceLinks: [
      { label: 'Illinois BidBuy — ISP covert surveillance cameras', href: 'https://www.bidbuy.illinois.gov/bso/external/bidDetail.sda?docId=26-493ISP-ADMIN-B-52408', sourceType: 'Primary' }
    ],
    caveat: 'The public procurement confirms acquisition intent and equipment category; sensitive operational deployment details may not be public.'
  },
  {
    slug: 'passive-device-identification',
    name: 'Passive communications-device identification / interception',
    shortName: 'Passive device identifiers',
    category: 'Device identification & location',
    state: 'UNDER INVESTIGATION',
    summary: 'Passive radio-analysis systems can collect identifying or signaling information emitted by communications devices without necessarily impersonating a cellular base station.',
    evidence: 'Illinois law explicitly includes information obtained through a “digital analyzer or other passive interception device” inside the statutory definition governing cell-site simulator devices.',
    illinoisUse: 'The legal framework expressly includes the technology category. The current archive does not establish a present Illinois agency deployment or vendor through a primary operational or procurement record.',
    sourceLinks: [
      { label: '725 ILCS 137/5 — statutory definition', href: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3716&Chapter=CRIMINAL+PROCEDURE&ChapterID=54&MajorTopic=RIGHTS+AND+REMEDIES', sourceType: 'Primary' }
    ],
    caveat: 'The statute does not establish that a particular agency owns or operates such a device. Deployment remains under investigation pending agency or procurement records.'
  }
];
