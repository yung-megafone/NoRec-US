
export type InvestigationStatus = 'Drafting' | 'Ready to file' | 'Filed' | 'Awaiting response' | 'Partial response' | 'Appeal / follow-up' | 'Closed';
export type EvidenceState = 'DOCUMENTED' | 'UNKNOWN' | 'UNDER INVESTIGATION';

export type Investigation = {
  id: string;
  title: string;
  jurisdiction: string;
  agency: string;
  topic: string;
  state: EvidenceState;
  status: InvestigationStatus;
  opened: string;
  updated: string;
  summary: string;
  questions: string[];
  requestedRecords: string[];
  currentFindings?: string[];
  publicRecordsLaw?: string;
};

export const investigations: Investigation[] = [
  {
    id: 'IL-SOS-FR-001',
    title: 'Illinois Secretary of State facial-recognition system',
    jurisdiction: 'Illinois',
    agency: 'Illinois Secretary of State',
    topic: 'Facial recognition',
    state: 'UNDER INVESTIGATION',
    status: 'Drafting',
    opened: '2026-09-09',
    updated: '2026-09-09',
    summary: 'Illinois law establishes that the Secretary of State maintains credential photographs and expressly addresses facial-recognition search services. Operational details remain unclear from the statutes and public-facing material reviewed so far.',
    questions: [
      'How long are historical driver’s-license, permit, and state-ID photographs retained?',
      'Are facial templates, embeddings, feature vectors, or other derived biometric records stored separately from the source photographs?',
      'Which agencies may request facial-recognition searches in practice?',
      'How many searches have been performed, by year and requesting agency?',
      'What legal or policy predicate is required for a search?',
      'What audit logs, access logs, or approval records exist?',
      'What vendor, software, infrastructure, or cloud systems support the service?',
      'How are images prepared, submitted, compared, returned, retained, and deleted?',
      'What notice, if any, is given to Illinois residents during credential issuance?'
    ],
    requestedRecords: [
      'Policies, SOPs, directives, manuals, training material, and memoranda governing facial-recognition searches or captured-image searches.',
      'Retention schedules and destruction policies for current and historical credential photographs and any derived biometric data.',
      'Vendor contracts, statements of work, licenses, subscriptions, purchase orders, invoices, renewals, and system documentation.',
      'Data dictionaries, system architecture descriptions, field definitions, database documentation, and records describing templates or embeddings.',
      'Aggregate search counts by year, requesting agency, purpose, and disposition where maintained.',
      'Logs or audit records identifying requesting agencies, request dates, approvals, and search activity, subject to lawful redaction.',
      'Policies governing image export, secondary dissemination, recipient retention, and deletion.',
      'Public-facing or internal notice language concerning facial-recognition-related use of credential photographs.'
    ],
    currentFindings: [
      '625 ILCS 5/6-110.1 requires the Secretary of State to maintain captured photographs and sets confidentiality and disclosure rules.',
      '625 ILCS 5/6-110.1 and 15 ILCS 335/11 expressly refer to facial-recognition search services.',
      '92 Ill. Adm. Code 1030.140 governs use and disclosure of captured images for specified recipients and investigations.',
      'The credential population is not limited to adults; Illinois states there is no minimum age for a state ID card.'
    ],
    publicRecordsLaw: 'Illinois Freedom of Information Act, 5 ILCS 140'
  },
  {
    id: 'IL-SOS-FR-002',
    title: 'DMV / credentialing notice and public disclosure',
    jurisdiction: 'Illinois',
    agency: 'Illinois Secretary of State',
    topic: 'Notice / transparency',
    state: 'UNDER INVESTIGATION',
    status: 'Drafting',
    opened: '2026-09-09',
    updated: '2026-09-09',
    summary: 'The founder does not recall being told during the credentialing process that Secretary of State photographs are subject to statutory facial-recognition provisions. That personal experience is not enough to establish statewide notice practices.',
    questions: [
      'What written, posted, digital, verbal, or form-based notice is provided before or during photograph capture?',
      'Do DMV facilities display any notice specifically mentioning facial recognition?',
      'Do application forms, privacy statements, receipts, appointment portals, or employee scripts disclose secondary use for facial-recognition searches?',
      'Has notice language changed over time?'
    ],
    requestedRecords: [
      'Current and historical privacy notices used at Driver Services facilities.',
      'Application forms, photo-capture notices, kiosk text, signage, handouts, web notices, and employee scripts.',
      'Policies requiring or describing disclosure to applicants about image storage, sharing, or facial-recognition use.',
      'Records showing revisions to notice language and the dates those revisions took effect.'
    ],
    publicRecordsLaw: 'Illinois Freedom of Information Act, 5 ILCS 140'
  },
  {
    id: 'IL-SURV-MAP-001',
    title: 'Local surveillance infrastructure inventory',
    jurisdiction: 'Northern Illinois',
    agency: 'Multiple local agencies',
    topic: 'ALPR / cameras / surveillance systems',
    state: 'UNDER INVESTIGATION',
    status: 'Ready to file',
    opened: '2026-09-09',
    updated: '2026-09-09',
    summary: 'NoRec has begun a documented local surveillance inventory using FOIA records and field observations. Existing records establish Boone County ALPR policy details and a City of Belvidere Flock location list; ownership and operational details for additional mapped devices remain unresolved.',
    questions: [
      'Which surveillance technologies are currently deployed or contracted?',
      'How many devices or endpoints exist?',
      'Where are they located when location can lawfully be disclosed?',
      'What vendors and contracts support them?',
      'What data-sharing networks are enabled?',
      'What retention, export, and audit rules apply?'
    ],
    requestedRecords: [
      'Current contracts, invoices, purchase orders, grants, subscriptions, and renewals for surveillance technologies.',
      'Inventories, asset lists, deployment counts, and system descriptions.',
      'Policies governing access, retention, exports, hotlists, sharing, and auditing.',
      'Data-sharing agreements, memoranda of understanding, and network-participation agreements.',
      'Training materials and administrator documentation.'
    ],
    publicRecordsLaw: 'Illinois Freedom of Information Act, 5 ILCS 140'
  }
];
