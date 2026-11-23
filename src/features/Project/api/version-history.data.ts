export const versionHistoryHeader = {
  title: "Detailed 17-Line CapEx Build-Out Model",
  description:
    "Itemized construction cost benchmark calibrated for 2,450 SF Fast Casual conversion in Austin, TX.",
  totalLabel: "Expected Total:",
  total: "$653,000",
};

export const versionSources = ["All Sources", "User Provided", "External APIs", "Modeled Assumptions"] as const;

export const versionColumns = ["Data Point", "Date", "Top Concept", "Fit Score", "Credits Used", "Status", "Actions"] as const;

export const versionRows = [
  {
    name: "Analysis V1.0",
    date: "28 Aug 2026",
    concept: "Fast Casual Restaurant & Taproom",
    fitScore: "91/100",
    credits: "8 Credits",
    status: "completed",
  },
  {
    name: "Analysis V0.9 (Draft)",
    date: "28 Aug 2026",
    concept: "Boutique Reformer Pilates Studio",
    fitScore: "84/100",
    credits: "8 Credits",
    status: "completed",
  },
];
