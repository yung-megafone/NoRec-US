export type EvidenceStatus =
  | 'documented'
  | 'secondary-source confirmed'
  | 'unknown'
  | 'under investigation'
  | 'historically documented';

export type OperationalStatus =
  | 'planned'
  | 'active'
  | 'paused'
  | 'pending-deactivation'
  | 'ended'
  | 'unknown';

export type DeploymentStatusMeta = {
  evidenceStatus?: EvidenceStatus;
  operationalStatus?: OperationalStatus;
  verifiedAsOf?: string;
  statusChangedOn?: string;
  sourceAsOf?: string;
  owner?: string;
};

const operationalLabels: Record<OperationalStatus, string> = {
  planned: 'Planned',
  active: 'Active',
  paused: 'Paused',
  'pending-deactivation': 'Pending deactivation',
  ended: 'Ended',
  unknown: 'Current status unknown',
};

export function operationalStatusLabel(status: OperationalStatus): string {
  return operationalLabels[status];
}
