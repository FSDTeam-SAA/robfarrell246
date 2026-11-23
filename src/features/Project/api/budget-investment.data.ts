export type BudgetSource = "Estimated / Assumed" | "Third-Party Data" | "User Provided";

export type BudgetRow = {
  category: string;
  source: BudgetSource;
  low: string;
  expected: string;
  high: string;
  notes: string;
};

export const budgetHeader = {
  title: "Detailed 17-Line CapEx Build-Out Model",
  description: "Itemized construction cost benchmark calibrated for 2,450 SF Fast Casual conversion in Austin, TX.",
  totalLabel: "Expected Total:",
  total: "$653,000",
};

export const budgetNotice = {
  title: "FEASIBILITY BUDGET MODEL — NOT A VERIFIED CONTRACTOR QUOTE",
  body: 'This budget is a conceptual feasibility model generated from stated space specifications, municipal code requirements, and commercial cost benchmarks. It provides preliminary guidance for underwriting and lease negotiation. All lines marked "Estimated / Assumed" represent items where condition was unverified or marked "I Don\'t Know" in the wizard, and must be validated through formal general contractor walkthroughs, structural surveys, and stamped MEP plans prior to binding lease execution.',
};

export const budgetSources = [
  {
    title: "1. User Provided",
    badge: "Verified Input",
    value: "$178,000",
    description: "27% of budget based on lease dimensions, verified RTU & 400A panel specs.",
    tone: "brand",
  },
  {
    title: "2. Third-Party Data",
    badge: "Industry Indices",
    value: "$322,500",
    description: "49% benchmarked against RSMeans, AIA Austin standards, and municipal permit fee schedules.",
    tone: "success",
  },
  {
    title: "3. Estimated / Assumed",
    badge: "Contingency",
    value: "$152,500",
    description: "23% allowance for uninspected conditions (unknown ceiling structure, demo scope, and reserve).",
    tone: "warning",
  },
] as const;

export const budgetEstimates = [
  { label: "Low Estimate ($167/SF)", value: "$178,000" },
  { label: "Expected Baseline ($195/SF)", value: "$322,500" },
  { label: "High Contingency ($247/SF)", value: "$152,500" },
];

export const budgetRows: BudgetRow[] = [
  { category: "Demolition & Partition Prep", source: "Estimated / Assumed", low: "$18,000", expected: "$24,500", high: "$32,000", notes: "Non-structural demo of previous dressing rooms" },
  { category: "Framing & Drywall Partitions", source: "Third-Party Data", low: "$32,000", expected: "$42,000", high: "$54,000", notes: 'Acoustic double-layer 5/8" drywall walls (RSMeans 2026)' },
  { category: "HVAC Distribution & Diffusers", source: "User Provided", low: "$28,000", expected: "$36,000", high: "$48,000", notes: "Drop ducting modification to existing verified 10-ton RTU" },
  { category: "Electrical Power & 400A Panels", source: "User Provided", low: "$42,000", expected: "$58,000", high: "$72,000", notes: "Dedicated equipment circuit runs to verified 400A panel" },
  { category: "Plumbing & Grease Waste Lines", source: "User Provided", low: "$35,000", expected: "$48,000", high: "$65,000", notes: "Tie-in to verified existing 1,500-gallon trap" },
  { category: "Flooring (Microcement / Tile)", source: "Third-Party Data", low: "$24,000", expected: "$32,000", high: "$42,000", notes: "Polished architectural commercial grade (Austin Submarket Index)" },
  { category: "Ceiling Treatment & Acoustic Baffles", source: "Estimated / Assumed", low: "$15,000", expected: "$21,000", high: "$28,000", notes: "Exposed black ceiling with baffle arrays allowance" },
  { category: "Architectural & Task Lighting", source: "Estimated / Assumed", low: "$22,000", expected: "$31,000", high: "$41,000", notes: "Dimmable track, recessed LED, custom pendants" },
  { category: "Restroom Finishes & ADA Fixtures", source: "User Provided", low: "$16,000", expected: "$22,000", high: "$29,000", notes: "Verified 2 ADA stalls; minor tile and commercial trim" },
  { category: "Kitchen / Bar Infrastructure", source: "Third-Party Data", low: "$65,000", expected: "$88,000", high: "$115,000", notes: "Hood extension, stainless wall panels, gas lines" },
  { category: "Custom Millwork & Service Counter", source: "Third-Party Data", low: "$38,000", expected: "$52,000", high: "$68,000", notes: "Fluted white oak POS island and banquette seating" },
  { category: "Interior Finishes & Paint Palette", source: "Estimated / Assumed", low: "$12,000", expected: "$17,000", high: "$24,000", notes: "Low-VOC lime wash texture and trim paint" },
  { category: "Exterior Blade & Fascia Signage", source: "User Provided", low: "$9,000", expected: "$14,000", high: "$19,000", notes: "Illuminated LED channel letters on existing facade" },
  { category: "Permits & Municipal Plan Review", source: "Third-Party Data", low: "$8,500", expected: "$12,500", high: "$16,500", notes: "City of Austin expedited commercial MEP review" },
  { category: "Architectural & MEP Engineering Fees", source: "Third-Party Data", low: "$24,000", expected: "$34,000", high: "$45,000", notes: "Stamped CD sets and ADA survey" },
  { category: "FF&E (Tables, Chairs, Display Units)", source: "Third-Party Data", low: "$45,000", expected: "$62,000", high: "$82,000", notes: "Commercial dining chairs and custom shelving" },
  { category: "Contingency Reserve (10%)", source: "Estimated / Assumed", low: "$41,000", expected: "$59,000", high: "$78,000", notes: "Contingency allowance for uninspected infrastructure" },
];

export const budgetSummary = {
  title: "Net Tenant Out-of-Pocket Investment Summary",
  lines: [
    { label: "Expected Construction Subtotal (2,450 SF):", value: "$653,000" },
    { label: "Less: Landlord TI Allowance ($45/SF × 2,450 SF):", value: "-$77,000" },
    { label: "Less: Landlord Lump-Sum Work Contribution:", value: "-$25,000" },
  ],
  netLabel: "Net Estimated Tenant Investment:",
  net: "$551,000",
};

export const budgetDisclaimer =
  "* Disclaimer: Conceptual feasibility estimates provided for underwriting and spatial planning purposes. Final costs subject to contractor bids and stamped engineering plans.";
