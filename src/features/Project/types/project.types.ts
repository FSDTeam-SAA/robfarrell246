export type ProjectStatus = "Completed" | "In Progress" | "Draft";

export interface ProjectItem {
  id: string;
  name: string;
  address: string;
  topConcept: string;
  footprint: string;
  status: ProjectStatus;
  imageUrl: string;
}

export type ProjectFilterStatus = "all" | ProjectStatus;

export interface ConceptOpportunity {
  rank: number;
  category: string;
  title: string;
  fitScore: number;
}
