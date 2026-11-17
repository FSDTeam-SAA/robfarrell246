/** Dummy data for the New Analysis route (mirrors the Figma copy). */

export const analysisTabs = [
  { id: "overview", label: "Overview" },
  { id: "ai-renderings", label: "AI Renderings" },
  { id: "market-demographics", label: "Market & Demographics" },
  { id: "competition-pois", label: "Competition & POIs" },
  { id: "budget-investment", label: "Budget & Investment" },
  { id: "assumptions", label: "Assumptions" },
  { id: "fit-score", label: "Fit Score" },
  { id: "report-preview", label: "Report Preview" },
  { id: "version-history", label: "Version History" },
] as const;

export type AnalysisTabId = (typeof analysisTabs)[number]["id"];

export const projectInfo = {
  breadcrumbParent: "Projects",
  name: "South Congress Retail Gallery",
  suite: "123 Market Street Retail Plaza - Suite 104",
  version: "Analysis v1.0",
  status: "Report Ready",
  address: "123 Market Street, Suite 104, Austin, TX 78701",
  summary: "2,450 RSF • Asking $44/SF NNN • TI $45/SF",
};

/* ----------------------------- Overview ----------------------------- */

export const overviewData = {
  archetype: {
    badge: "★ #1 Recommended Archetype (91/100 Fit)",
    category: "Food & Beverage",
    title: "Fast Casual Taproom & Kitchen",
    description:
      "Second-gen retail shell with existing 400A power and high ceilings ideal for fast-casual craft beer and elevated counter service.",
    demographic: {
      title: "Target Demographic Alignment:",
      text: "Affluent tech & creative professionals ages 24-46 seeking fresh dine-in and takeout.",
    },
    stats: [
      { label: "Fit Score", value: "91 / 100", tone: "success" },
      { label: "Est. CapEx / SF", value: "91 / 100", tone: "default" },
      { label: "Landlord TI", value: "$45/SF", tone: "brand" },
      { label: "Payback ROI", value: "14.2 Mo", tone: "success" },
    ] as const,
    timeline: "14 - 18 Weeks",
    reportStatus: "100% Ready",
  },
  mep: {
    title: "Physical Infrastructure & MEP Feasibility Audit",
    items: [
      {
        tone: "success",
        title: "Electrical Service: 400A 3-Phase",
        text: "Sufficient electrical panel capacity for heavy commercial induction appliances, espresso bars, or fitness equipment with no costly transformer upgrade.",
      },
      {
        tone: "success",
        title: "Grease Interceptor: 1,500 Gallon",
        text: "Existing exterior vault connection in place; reduces restaurant buildout lead time by approximately 6-8 weeks.",
      },
      {
        tone: "brand",
        title: "HVAC Capacity: 10-Ton RTU",
        text: "Operational rooftop unit with manufacturer warranty; requires duct drop reconfiguration and diffuser balancing.",
      },
    ] as const,
  },
  strengths: [
    {
      title: "Existing Grease Trap & Utility Drops:",
      text: "Saves an estimated $68,000 in heavy subterranean civil plumbing.",
    },
    {
      title: "High Daytime Spending Index:",
      text: "1-mile radius captures $142.8M in annual retail & dining outflow.",
    },
    {
      title: "Optimal Floor Footprint:",
      text: "2,450 SF allows 68 interior seats plus 24-seat front patio conversion.",
    },
  ],
  risks: [
    {
      title: "Peak Hour Parking Pressure:",
      text: "Recommend partnering with adjacent garage for validated merchant parking.",
    },
    {
      title: "Austin Health Permit Backlog:",
      text: "Plan review currently averages 10 weeks; early submittal is essential.",
    },
    {
      title: "HVAC Return Ducting:",
      text: "May require 2 additional drop diffusers to balance kitchen heat load.",
    },
  ],
};

/* ------------------------ Market & Demographics ------------------------ */

export const radiusRings = ["0.5 Mile", "1 Mile", "3 Mile", "5 Mile"] as const;
export type RadiusRing = (typeof radiusRings)[number];

export const demographicKpis = [
  { label: "Total Population", value: "14,280", note: "+2.8% Annual", valueTone: "default", noteTone: "success" },
  {
    label: "Median Household Income",
    value: "$118,500",
    note: "Top 8% in Metropolitan Area",
    valueTone: "brand",
    noteTone: "neutral",
  },
  {
    label: "Daytime Population",
    value: "22,400",
    note: "Corporate Employees + Commuters",
    valueTone: "default",
    noteTone: "neutral",
  },
  {
    label: "Annual Retail Expenditure",
    value: "$48.5M / yr",
    note: "Unfulfilled Outflow Demand",
    valueTone: "success",
    noteTone: "success",
  },
] as const;

export const spendingIndices = [
  { name: "Food & Dining Away from Home", index: 164, spend: "$14.2M", tone: "brand" },
  { name: "Boutique Fitness & Athletic Services", index: 152, spend: "$4.8M", tone: "success" },
  { name: "Personal Care & Longevity Wellness", index: 148, spend: "$3.6M", tone: "warning" },
] as const;

export const marketFacts = [
  {
    label: "Commercial Retail Vacancy:",
    value: "3.4%",
    note: "Extremely tight submarket supply with low tenant concessions.",
    brand: false,
  },
  {
    label: "Average Submarket Asking Rent:",
    value: "$48.50 / SF",
    note: "This space at $44/SF is competitively positioned.",
    brand: false,
  },
  {
    label: "Daily Traffic & Visibility:",
    value: "18,500 daily vehicles",
    note: "Rapid Luxury Infill & High Density",
    brand: true,
  },
] as const;

/* -------------------------- Competition & POIs -------------------------- */

export const establishmentFilters = ["All Establishment", "Direct Competitors", "Indirect Competitors", "Complementary"] as const;
export const poiTypeFilters = ["All Types", "Restaurants", "Fitness", "Retail", "Services"] as const;
export const competitionViews = ["Interactive Map", "List View"] as const;

export const mapLegend = [
  { label: "Subject Property", color: "#3B82F6" },
  { label: "Direct Competitor", color: "#EF4444" },
  { label: "Indirect Competitor", color: "#F59E0B" },
  { label: "Complementary Business", color: "#22C55E" },
] as const;

export const competitors = [
  { name: "Lazy Dog Taproom", type: "Direct Competitor", distance: "0.3 mi", category: "Restaurant / Bar", rating: "4.5" },
  { name: "Hopsmith Kitchen", type: "Direct Competitor", distance: "0.6 mi", category: "Restaurant / Bar", rating: "4.3" },
  { name: "Brew & Co. Counter", type: "Indirect Competitor", distance: "0.8 mi", category: "Cafe", rating: "4.6" },
  { name: "Barre Collective", type: "Complementary Business", distance: "0.4 mi", category: "Boutique Fitness", rating: "4.8" },
  { name: "South Congress Market", type: "Complementary Business", distance: "0.9 mi", category: "Retail", rating: "4.4" },
] as const;
