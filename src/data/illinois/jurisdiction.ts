import type { DeploymentStatusMeta } from './deployment-status';

export type ResearchStatus = 'documented' | 'partial' | 'unresearched' | 'stale';
export type GovernmentForm = 'city' | 'village' | 'town';
export type FindingStatus = 'documented' | 'partial' | 'unknown' | 'planned' | 'formerly-used' | 'not-identified';

export interface MunicipalityRecord {
  id: string;
  name: string;
  slug: string;
  form: GovernmentForm;
  status: ResearchStatus;
  counties: string[];
  crossCounty?: boolean;
}

export interface SurveillanceFinding extends DeploymentStatusMeta {
  id: string;
  technology: string;
  title: string;
  status: FindingStatus;
  summary: string;
  sourceIds?: string[];
}
