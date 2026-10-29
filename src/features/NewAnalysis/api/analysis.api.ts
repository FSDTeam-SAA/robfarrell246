import { AnalysisFormData } from "../types/analysis.types";

export const DEFAULT_ANALYSIS_DATA: AnalysisFormData = {
  propertyName: "",
  propertyAddress: "",
  tradeRadiusMiles: 3,
  targetCategory: "Specialty Coffee / Cafe",
  squareFootage: 2400,
  analysisType: "retail_feasibility",
  includeFootTraffic: true,
  includePhotorealisticConcept: true,
};

export const TARGET_CATEGORIES = [
  "Specialty Coffee / Cafe",
  "Casual Dining & QSR",
  "Fitness / Boutique Studio",
  "Health & Wellness / MedSpa",
  "Apparel & Lifestyle Retail",
  "Grocery & Specialty Market",
  "Financial & Advisory Branch",
];
