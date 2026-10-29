export type AnalysisType =
  | "retail_feasibility"
  | "demographics_gravity"
  | "tenant_fit_score"
  | "competition_mapping";

export interface AnalysisFormData {
  propertyName: string;
  propertyAddress: string;
  tradeRadiusMiles: number;
  targetCategory: string;
  squareFootage: number;
  analysisType: AnalysisType;
  includeFootTraffic: boolean;
  includePhotorealisticConcept: boolean;
}
