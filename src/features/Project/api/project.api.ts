import { ConceptOpportunity, ProjectItem } from "../types/project.types";

const PROJECT_TEMPLATES: Omit<ProjectItem, "id">[] = [
  {
    name: "South Congress Retail Gallery",
    address: "1601 S Congress Ave, Austin, TX 78704",
    topConcept: "Fast Casual Restaurant & Taproom",
    footprint: "2,450 RSF",
    status: "Completed",
    imageUrl: "/assets/images/project-restaurant.png",
  },
  {
    name: "123 Market Street Retail Plaza - Suite 104",
    address: "123 Market Street, Suite 104, Austin, TX 78701",
    topConcept: "Commercial Feasibility Study",
    footprint: "2,450 RSF",
    status: "Completed",
    imageUrl: "/assets/images/project-fitness.png",
  },
  {
    name: "456 Oak Avenue Plaza - Suite B",
    address: "456 Oak Avenue, Dallas, TX 75201",
    topConcept: "Commercial Feasibility Study",
    footprint: "1,800 RSF",
    status: "Completed",
    imageUrl: "/assets/images/project-reception.png",
  },
];

/** Figma shows the same three properties repeated in two rows. */
export const INITIAL_PROJECTS: ProjectItem[] = [...PROJECT_TEMPLATES, ...PROJECT_TEMPLATES].map(
  (project, index) => ({ ...project, id: `proj-${index + 1}` }),
);

export const STATUS_FILTERS = ["All Statuses", "Completed", "In Progress", "Draft"] as const;
export const MARKET_FILTERS = ["All Markets", "Austin, TX", "Dallas, TX"] as const;
export const PROPERTY_TYPE_FILTERS = [
  "All Property Types",
  "Food & Beverage",
  "Boutique Fitness",
  "Commercial Feasibility",
] as const;

export const CONCEPT_OPPORTUNITIES: ConceptOpportunity[] = [
  { rank: 1, category: "Food & Beberage", title: "Fast Casual Taproom & Kitchen", fitScore: 91 },
  { rank: 2, category: "Food & Beberage", title: "Fast Casual Taproom & Kitchen", fitScore: 84 },
  { rank: 3, category: "Food & Beberage", title: "Fast Casual Taproom & Kitchen", fitScore: 78 },
];
