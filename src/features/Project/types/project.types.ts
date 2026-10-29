export type ProjectStatus = "Active" | "In Review" | "Feasibility Study" | "Archived";

export interface ProjectItem {
  id: string;
  name: string;
  address: string;
  city: string;
  propertyType: string;
  sqft: number;
  status: ProjectStatus;
  fitScore: number;
  activeAnalyses: number;
  lastUpdated: string;
  imageUrl?: string;
}

export type ProjectFilterStatus = "all" | ProjectStatus;
