export const sourceFilters = ["All Sources", "User Provided", "External APIs", "Modeled Assumptions"] as const;
export type SourceFilter = (typeof sourceFilters)[number];

export type FitScoreRow = {
  dataPoint: string;
  value: string;
  sourceType: string;
  sourceCategory: Exclude<SourceFilter, "All Sources">;
  sourceTone: "brand" | "success" | "warning";
  score: number;
  verification: string;
  notes: string;
};

export const fitScoreHeader = {
  title: "Detailed 17-Line CapEx Build-Out Model",
  description: "Itemized construction cost benchmark calibrated for 2,450 SF Fast Casual conversion in Austin, TX.",
  totalLabel: "Expected Total:",
  total: "$653,000",
};

export const fitScoreColumns = ["Data Point", "Value", "Source Type", "Verification", "Compliance Notes"] as const;

export const fitScoreRows: FitScoreRow[] = [
  { dataPoint: "Rentable Square Footage", value: "2200 RSF", sourceType: "User Provided Lease Specs", sourceCategory: "User Provided", sourceTone: "brand", score: 100, verification: "Verified", notes: "Confirmed from architectural CAD lease plan" },
  { dataPoint: "Existing Grease Trap Capacity", value: "1,500 Gallons", sourceType: "User Provided Lease Specs", sourceCategory: "User Provided", sourceTone: "brand", score: 95, verification: "High", notes: "Located in exterior sub-grade utility vault" },
  { dataPoint: "Trade Area Household Income", value: "$112,400", sourceType: "Esri Demographic Data 2026", sourceCategory: "External APIs", sourceTone: "success", score: 98, verification: "Official", notes: "Census Tract 13.02 ACS 5-year estimate" },
  { dataPoint: "Retail Spending Gap (Dining)", value: "$4.2M / yr", sourceType: "Esri Demographic Data 2026", sourceCategory: "External APIs", sourceTone: "success", score: 92, verification: "High", notes: "Unmet lunch and dinner corridor demand" },
  { dataPoint: "General Contractor Labor Rates", value: "$85–$125 / hr", sourceType: "Austin Construction Benchmark 2026", sourceCategory: "Modeled Assumptions", sourceTone: "warning", score: 85, verification: "Estimated", notes: "Union/commercial non-residential Austin average" },
  { dataPoint: "City Permit Timeline", value: "10 - 14 Weeks", sourceType: "Austin Construction Benchmark 2026", sourceCategory: "Modeled Assumptions", sourceTone: "warning", score: 80, verification: "Estimated", notes: "Subject to expedited commercial review review" },
];
