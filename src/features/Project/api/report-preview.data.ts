export type PillTone =
  | "moderate"
  | "lowmed"
  | "low"
  | "comp"
  | "indirect"
  | "direct"
  | "reuse"
  | "modify"
  | "install"
  | "repair"
  | "brand"
  | "done"
  | "pending";

export type Pill = { text: string; tone: PillTone };

export const reportPages = [
  "Cover",
  "Strategic Abstract",
  "Market Demographics",
  "Spatial Transformation",
  "MEP Engineering",
  "CapEx Underwriting",
  "Pro Forma Economics",
  "Delivery Roadmap",
  "Certification & Signatures",
] as const;

export const cover = {
  agency: "COMMERCIAL REAL ESTATE INTELLIGENCE",
  ref: "REF: VIFM-FEAS-2026-0849 • V1.0",
  aiBadge: "AI Evaluated Tenant Opportunities (3 Concepts Ranked)",
  property: "South Congress Retail Gallery",
  address: "123 Market Street, Suite 104, Austin, TX 78701",
  archetypeLabel: "Target Tenant Archetype Recommendation",
  archetype: "Fast-Casual Mediterranean Taproom & Kitchen",
  archetypeMeta: "2,450 RSF • Second-Gen Retail / Food Conversion",
  feasibilityLabel: "Composite Feasibility",
  feasibility: "91/100",
  stats: [
    { label: "Total Fit Index", value: "91 / 100", note: "Tier 1 Prime Match", valueClass: "text-[#16A34A]", noteClass: "text-[#475569]" },
    { label: "Gross Construction CapEx", value: "$326.8k", note: "$133.37 / RSF Basis", valueClass: "text-[#0F172A]", noteClass: "text-[#475569]" },
    { label: "Landlord TI Offset", value: "-$135.3k", note: "$45/SF TI + $25k Work", valueClass: "text-[#2563EB]", noteClass: "text-[#16A34A]" },
    { label: "Net Tenant Outlay", value: "$191.5k", note: "18.4 Mo Payback Target", valueClass: "text-[#0F172A]", noteClass: "text-[#475569]", extraNote: "18.4 Mo Payback Target" },
  ],
  preparedFor: "PREPARED FOR: Austin Commercial Investment Committee",
  assetClass: "Primary Asset Class: Downtown Urban Street Retail / Mixed-Use",
  published: "Published: 2026-03-01 • Document ID: VIFM-849-01",
  pageLine: "PAGE 1 OF 9 • CONFIDENTIAL",
};

export const abstract = {
  tag: "Section 01 // Strategic Abstract",
  page: "Page 2 of 9",
  title: "Executive Feasibility Summary & Investment Thesis",
  // [text, bold?]
  paragraphs: [
    [
      ["VisionItForMe Commercial Intelligence", true],
      [" has executed a comprehensive spatial feasibility, demographic catchment, and capital expenditure underwriting study on ", false],
      ["South Congress Retail Gallery", true],
      [" located at ", false],
      ["1601 S Congress Ave, Austin, TX 78704. ", true],
    ],
    [
      ["The subject property comprises ", false],
      ["2,450 RSF", true],
      [
        " of prime ground-floor retail space within Austin’s Central Business District. Currently configured as a second-generation dry retail apparel vacancy, the property features 14.5-foot clear ceiling heights, 400A 3-phase electrical service, and direct frontage on Market Street with over 18,500 daily pedestrian passersby. ",
        false,
      ],
    ],
    [
      [
        "Following quantitative modeling of nine commercial tenant archetypes against micro-demographic income segments and existing trade-area voids, our primary strategic recommendation is an upscale ",
        false,
      ],
      ["Fast-Casual Mediterranean Taproom & Kitchen.", true],
      [" This concept yields an ", false],
      ["overall Site Match Index of 91/100,", true],
      [
        " capitalizing on heavy weekday corporate office lunch density (68,200 daytime workers within 1 mile) paired with strong residential evening dining demand.",
        false,
      ],
    ],
  ] as [string, boolean][][],
  highlights: [
    {
      icon: "trend",
      title: "Unmet Market Demand",
      body: "Zero direct fast-casual healthy Mediterranean operators exist within a 0.75-mile radius, leaving a $3.2M annual unmet capture opportunity in office lunch catering.",
    },
    {
      icon: "dollar",
      title: "Unmet Market Demand",
      body: "The negotiated $45/SF Landlord TI ($110,250) combined with $25k Landlord work absorbs 41.4% of total conversion CapEx, reducing tenant equity requirement to $191,500. ",
    },
    {
      icon: "clock",
      title: "Rapid 18-Mo Payback ",
      body: "At conservative $673/RSF annualized sales ($1.65M gross), occupancy costs remain at a sustainable 8.68%, delivering projected net equity payback within 18.4 months.",
    },
  ],
  riskTitle: "Risk Assessment & Engineering Mitigation Matrix",
  riskHead: ["Key Identified Risk", "Severity", "Feasibility Evaluation", "Mitigation Strategy"],
  risks: [
    [
      "Type 1 Hood Roof Chase Penetration",
      { text: "Moderate", tone: "moderate" },
      "Existing vertical utility riser shaft is open and verified by structural engineer.",
      "Utilize pre-engineered zero-clearance double-wall stainless duct up to rooftop blower.",
    ],
    [
      "Grease Interceptor Capacity & Line Tie-In",
      { text: "Low-Medium", tone: "lowmed" },
      "Exterior parking apron accommodates 1,500-gal underground vault interceptor.",
      "Landlord work agreement allocates exterior sewer connection stubbed within 15 feet.",
    ],
    [
      "Lunch Rush Sidewalk Congestion",
      { text: "Low", tone: "low" },
      "14-foot wide sidewalk allows 32-seat outdoor patio while maintaining 8-foot ADA clearance.",
      "Dual-sided POS and dedicated mobile pickup counter inside front demising bay.",
    ],
  ] as [string, Pill, string, string][],
};

const traffic = {
  title: "Hourly Pedestrian Foot Traffic Profiling (Weekly Average: 18,500 Passersby / Day) ",
  verified: "Placer.ai Sensor Verified",
  tiles: [
    { label: "Morning Commute (7-10 AM)", value: "3,450 / hr", note: "Coffee & Grab-and-Go", tone: "default", noteClass: "text-[#16A34A]" },
    { label: "Peak Lunch (11:30 AM-1:45 PM)", value: "5,820 / hr", note: "Primary Fast-Casual Window", tone: "active", noteClass: "text-[#2563EB]" },
    { label: "Afternoon Transition (2-5 PM)", value: "2,100 / hr", note: "Patio & Snack Traffic", tone: "default", noteClass: "text-[#475569]" },
    { label: "Evening Social (6-9:30 PM)", value: "4,680 / hr", note: "Beer, Wine & Dinner Dining", tone: "navy", noteClass: "text-[#193480]" },
  ],
  timeline: ["Timeline to Opening: ", "14 - 18 Weeks"],
  status: ["Report Status: ", "100% Ready"],
};
export { traffic };

export const opportunityVoid = {
  title: "Trade Area Opportunity Void: Healthy Mediterranean & Artisan Grain Bowls",
  body: "Within the immediate 10-minute pedestrian walking shed, there are 14 burger/sandwich shops, 8 upscale steakhouse/fine dining establishments, and 6 coffee shops. High-quality fast-casual Mediterranean bowls and craft local beer tap selection are completely unrepresented, creating an extraordinary captive demand capture scenario.",
};

export const demographics = {
  tag: "Section 02 // Market Demographics",
  page: "Page 3 of 9",
  title: "Trade Area Demographics & Foot Traffic Intelligence",
  intro:
    "Grounded in Esri Business Analyst (2026 data series) and localized mobile GPS geolocation foot traffic datasets along the Market Street retail corridor.",
  head: ["Demographic Indicator", "1-Mile Radius", "3-Mile Radius", "5-Mile Radius", "Benchmark Status"],
  rows: [
    ["Total Resident Population", "42,850", "184,200", "362,400", "Top 5% Urban Density", "text-[#16A34A]"],
    ["Daytime Office Employees", "68,200", "142,500", "248,000", "Exceptional Lunch Influx", "text-[#16A34A]"],
    ["Median Household Income", "$112,400", "$96,800", "$88,500", "142% vs US Average", "text-[#16A34A]"],
    ["Avg Household Discretionary Retail Spend", "$4,850 / mo", "$4,120 / mo", "$3,680 / mo", "High Dining Index (168)", "text-[#16A34A]"],
    ["Median Age", "33.2 Yrs", "31.8 Yrs", "32.6 Yrs", "Prime Target Millennial / Gen Z", "text-[#2563EB]"],
  ] as string[][],
};

export const competition = {
  tag: "Section 03 // Competition & Trade Area Analysis",
  page: "Page 4 of 9",
  title: "Competition & Trade Area Analysis",
  exhibitA: "Exhibit 3A: Spatial Competition Cartogram & Primary Trade Ring ",
  perimeter: "1.0 Mile Trade Perimeter",
  caption: "Exposed drywall partition, concrete slab, exposed conduit, prior apparel layout.",
  tableTitle: "Exhibit 3B: Key Trade Area Operators & Competitive Proximity ",
  head: ["Operator Name", "Category", "Classification", "Distance", "Address"],
  rows: [
    ["Elements Therapeutic Massage", { text: "Complementary", tone: "comp" }, "Day Spa & Bodywork", "0.05 mi", "515 Congress Ave, Austin, TX 78701"],
    ["Starbucks Reserve Downtown", { text: "Complementary", tone: "comp" }, "Specialty Coffee & Workspace", "0.12 mi", "300 Colorado St, Austin, TX 78701"],
    ["Sweetgreen Downtown", { text: "Indirect Competitor", tone: "indirect" }, "Fast Casual Salad & Bowls", "0.13 mi", "211 Colorado St, Austin, TX 78701"],
    ["Chipotle Mexican Grill", { text: "Indirect Competitor", tone: "indirect" }, "Fast Casual Burritos & Bowls", "0.15 mi", "301 Congress Ave, Austin, TX 78701"],
    ["Chase Tower Commercial Office", { text: "Complementary", tone: "comp" }, "Class A Office Tower (450,000 RSF)", "0.16 mi", "221 W 6th St, Austin, TX 78701"],
    ["Orangetheory Fitness Downtown", { text: "Direct Competitor", tone: "direct" }, "HIIT & Group Fitness", "0.19 mi", "300 W 3rd St, Austin, TX 78701"],
  ] as [string, Pill, string, string, string][],
  aiTitle: "AI Trade Area Synergies & Competitive Void Assessment",
  aiBody:
    "Competition within the selected 1-mile trade area is low-to-moderate. 2 direct Fast-Casual Mediterranean Taproom & Kitchen competitors were identified, with Mezze Mediterranean Cafe located approximately 0.27 miles from the subject property. An additional 3 indirect operators compete for daytime discretionary spending, while 15 complementary anchors—including high-volume grocery, fitness, corporate office towers, and hotels—drive sustained daily pedestrian footfall to the corridor.",
};

export const spatial = {
  tag: "Section 04 // Spatial Architecture ",
  page: "Page 4 of 9",
  title: "Spatial Conversion Program & Photorealistic Concept",
  before: { title: "Exhibit 3A: Existing Raw Shell Condition", tag: "Field Photo", caption: "Exposed drywall partition, concrete slab, exposed conduit, prior apparel layout." },
  after: { title: "Exhibit 3B: AI Architectural Spatial Concept ", tag: "Photorealistic Model", caption: "Mediterranean Taproom with fluted oak order bar, honed terrazzo, open prep line." },
  tableTitle: "Space Programming & Seating Allocation",
  head: ["Functional Zone", "Square Footag", "% of Gross", "Seating / Capacity", "Primary Equipment / Finishes"],
  rows: [
    ["Type 1 Hood Roof Chase Penetration", { text: "Moderate", tone: "moderate" }, "58.0%", ["64 Indoor Seats", "text-[#2563EB]"], "Terrazzo floor, 12-tap draft system, banquettes"],
    ["Grease Interceptor Capacity & Line Tie-In", { text: "Low-Medium", tone: "lowmed" }, "— (Exclusive)", ["24 Outdoor Seats", "text-[#16A34A]"], "Black steel planter barriers, cafe tables, overhead heaters"],
    ["Lunch Rush Sidewalk Congestion", { text: "Low", tone: "low" }, "19.6%\t4 Kitchen ", ["4 Kitchen Staff", "text-[#0F172A]"], "14-ft Type 1 Hood, convection ovens, plancha, fryers"],
    ["Lunch Rush Sidewalk Congestion", { text: "Low", tone: "low" }, "9.8%", ["—", "text-[#0F172A]"], "8x10 modular walk-in cooler, keg box, metro shelving"],
    ["Lunch Rush Sidewalk Congestion", { text: "Low", tone: "low" }, "6.5%\t", ["—", "text-[#0F172A]"], "Existing plumbing tie-in, full ADA turnaround radii"],
    ["Lunch Rush Sidewalk Congestion", { text: "Low", tone: "low" }, "6.1%", ["—", "text-[#0F172A]"], "\tDirect egress to rear loading alley and dumpster pad"],
  ] as [string, Pill, string, [string, string], string][],
};

export const mep = {
  tag: "Section 05 // MEP Engineering",
  page: "Page 5 of 9",
  title: "Technical MEP & Infrastructure Feasibility Audit",
  badge: "REUSE (Existing Reusable)",
  cards: [
    { icon: "plumbing", name: "Plumbing", scope: "Tenant Scope", tint: "rgba(5,180,255,0.1)", color: "#05B4FF", lines: [["Condition:", "Yes — Functional & No Additional Plumbing Work Needed"], ["Capacity:", "2 ADA Restrooms present"], ["Restrooms:", "Modeled standard"]] },
    { icon: "hvac", name: "HVAC", scope: "Landlord Scope", tint: "rgba(255,98,0,0.1)", color: "#FF6200", lines: [["Condition:", "Yes — Functional & Adequate"], ["Capacity:", "10 Tons (Trane RTU)"], ["Exhaust Hood:", "Standard duct routing"]] },
    { icon: "electrical", name: "Electrical / Power", scope: "Landlord Scope", tint: "rgba(0,34,255,0.1)", color: "#0022FF", lines: [["Condition:", "Yes — Functional & Adequate"], ["Capacity:", "400 Amp"], ["Voltage:", "120/208V 3-Phase Commercial"]] },
    { icon: "fire", name: "Fire Protection", scope: "Landlord Scope", tint: "rgba(1,154,24,0.1)", color: "#019A18", lines: [["Condition:", "Yes — Functional & Adequate"], ["Head Modification:", "Drop & relocate for layout"]] },
    { icon: "gas", name: "Gas Supply", scope: "Tenant Scope", tint: "rgba(211,142,13,0.1)", color: "#D38E0D", lines: [["Condition:", "Yes — Available & Functional"], ["Meter / Pressure:", "2-inch Line (1.2M BTU)"], ["Gas Demand:", "High-capacity commercial cookline"]] },
  ],
  assumptionsTitle: "Utilities & Infrastructure Assumptions & Source Attribution",
  verification: "3-Tier Verification",
  tiers: [
    {
      icon: "check",
      title: "1. User-Provided Inputs",
      titleClass: "text-[#16A34A]",
      labelled: true,
      items: [
        ["Plumbing: ", "Yes — Functional & No Additional Plumbing Work Needed"],
        ["HVAC:", "Yes — Functional & Adequate (landlord)"],
        ["Electrical:", "Yes — Functional & Adequate"],
        ["Fire Sprinklers:", "Yes — Functional & Adequate"],
        ["Gas Line:", "Yes — Available & Functional"],
      ],
    },
    {
      icon: "building",
      title: "2. Third-Party Code Standards",
      titleClass: "text-[#2563EB]",
      labelled: false,
      items: [
        ["", "City of Austin Water Utility Grease Interceptor Ordinance"],
        ["", "City of Austin Water Utility Grease Interceptor Ordinance"],
        ["", "NFPA 13 Standard for Sprinkler Systems & NFPA 96 Hood Ventilation"],
        ["", "International Plumbing Code (IPC) 2024 occupant load sizing"],
      ],
    },
    {
      icon: "warn",
      title: "3. Modeled Allowances & Contingencies",
      titleClass: "text-[#F59E0B]",
      labelled: false,
      items: [
        ["", "Modeled baseline assumptions applied for unverified infrastructure parameters."],
        ["", "Includes 10%-15% contingency reserve allowance for site condition variances."],
        ["", "Field walk-through by licensed MEP engineer strongly advised prior to lease execution."],
        ["", "Standard 10% construction reserve applied."],
      ],
    },
  ],
  disclaimer:
    "“Infrastructure conditions and costs are conceptual feasibility estimates and have not been independently inspected or verified.”",
};

export const capex = {
  tag: "Section 06 // CapEx Underwriting",
  page: "Page 6 of 9",
  title: "Comprehensive CapEx Budget & Tenant Investment Model",
  head: ["Cost Trade & Scope", "Budget State", "Source / Basis", "Low", "Expected", "High", "Cost / RSF"],
  rows: [
    ["Plumbing & Drainage", "Sanitary Sewer & Interior Plumbing Fixtures", { text: "REUSE (Existing Reusable)", tone: "reuse" }, "User verified existing plumbing fixtures functional & reusable", "$17,200", "$26,580", "$36,088", "$18.82"],
    ["Plumbing & Drainage", "Exterior Vault Grease Interceptor (1,500-Gallon)", { text: "MODIFY / UPGRADE", tone: "modify" }, "Mandated by City Health Code for commercial food service", "$12,000", "$18,000", "$26,080", "$7.35"],
    ["HVAC & Mechanical", "Commercial HVAC System & Air Distribution", { text: "REUSE (Existing Reusable)", tone: "reuse" }, "User verified existing system functional & adequate", "$1,500", "$2,568", "$4,180", "$1.04"],
    ["Electrical & Power", "Main Electrical Service, Panels & Branch Distribution", { text: "REUSE (Existing Reusable)", tone: "reuse" }, "User verified existing electrical adequate & functional", "$2,800", "$4,655", "$7,080", "$1.90"],
    ["Life Safety & Fire Protection", "NFPA 13 Fire Sprinkler Modifications & Life Safety Alarms", { text: "REUSE (Existing Reusable)", tone: "reuse" }, "User verified existing fire protection adequate & reusable", "$200", "$375", "$625", "$0.15"],
    ["Life Safety & Fire Protection", "Commercial Kitchen Hood UL 300 Wet Chemical Fire Suppression", { text: "NEW INSTALLATION", tone: "install" }, "City Fire Code requirement for commercial cooking appliances", "$5,500", "$7,800", "$10,580", "$3.18"],
    ["Gas & Thermal Supply", "Natural Gas Line & High-BTU Meter Manifold", { text: "REUSE (Existing Reusable)", tone: "reuse" }, "User verified existing gas functional and available", "$500", "$1,200", "$2,200", "$0.49"],
    ["Demolition & Subfloor", "Demolition, Selective Partition Removal & Concrete Slab Saw-Cutting", { text: "REPAIR (Minor Service)", tone: "repair" }, "Standard architectural commercial turnover scope", "$14,000", "$18,508", "$24,580", "$7.55"],
    ["HVAC & Mechanical", "Type 1 Stainless Commercial Exhaust Hood & Rooftop Blower", { text: "NEW INSTALLATION", tone: "install" }, "Standard restaurant cooking ventilation specification", "$32,000", "$42,500", "$54,080", "$17.35"],
    ["Interiors & Millwork", "Architectural Millwork, Cashwrap Counter & Custom Banquettes", { text: "NEW INSTALLATION", tone: "install" }, "Commercial interior finish schedule", "$28,000", "$38,008", "$49,080", "$15.51"],
    ["Finishes & Aesthetics", "Commercial Flooring (Terrazzo / Polished Concrete) & Paint", { text: "MODIFY / UPGRADE", tone: "modify" }, "RSMeans Austin commercial finish rates", "$26,000", "$36,250", "$47,088", "$14.88"],
    ["FF&E & Equipment", "Kitchen Equipment Package & Modular Walk-In Cooler", { text: "NEW INSTALLATION", tone: "install" }, "Industry benchmark capital equipment package", "$55,000", "$72,580", "$92,080", "$29.59"],
    ["Soft Costs & Permits", "Architectural Permit Drawings, MEP Engineering Stamps & City Fees", { text: "REPAIR (Minor Service)", tone: "repair" }, "Standard 8% architectural engineering fee ratio", "$18,000", "$25,508", "$33,080", "$10.41"],
    ["Contingency & Reserves", "Construction & Unforeseen Utility Contingency (10%)", { text: "REPAIR (Minor Service)", tone: "repair" }, "10% reserve adjusted for 0 unverified utility condition(s)", "$21,270", "$29,434", "$38,593", "$12.01"],
  ] as [string, string, Pill, string, string, string, string, string][],
  total: ["GROSS TOTAL ESTIMATED CAPEX", "$233,970", "$323,774", "$424,518", "$132.15"],
  stackTitle: "Capital Stack & Tenant Equity Outlay Reconciliation",
  stack: [
    { label: "Gross Project Cost", value: "$323,774", note: "100% Turnkey CapEx" },
    { label: "Landlord Credits & Allowance", value: "-$135,250", note: "$110,250 TI ($45/SF) + $25,000 LL Work" },
    { label: "Net Tenant Out-of-Pocket Outlay ", value: "$188,524", note: "Just $76.95 / RSF Net Equity" },
  ],
};

export const proForma = {
  tag: "Section 07 // Pro Forma Economics",
  page: "Page 7 of 9",
  title: "Pro Forma Lease Economics & Investment Return",
  intro:
    "Conservative base pro forma model demonstrating tenant debt service coverage, rent-to-sales ratios, and net operator cash flows across Year 1 through Year 5.",
  tiles: [
    { label: "Base Rent (NNN)", value: "$46.00 / SF", note: "$112,700 / yr", labelClass: "text-[#475569]", valueClass: "text-[#0F172A]", noteClass: "text-[#16A34A]" },
    { label: "CAM / NNN Expenses", value: "$12.50 / SF", note: "$30,625 / yr", labelClass: "text-[#0F172A]", valueClass: "text-[#0F172A]", noteClass: "text-[#0F172A]" },
    { label: "Projected Annual Sales", value: "$1,650,000", note: "$673 / RSF Target ", labelClass: "text-[#475569]", valueClass: "text-[#2563EB]", noteClass: "text-[#2563EB]" },
    { label: "Occupancy Cost Ratio", value: "8.68%", note: "Target Healthy <10%", labelClass: "text-[#475569]", valueClass: "text-[#16A34A]", noteClass: "text-[#16A34A]" },
  ],
  head: ["Financial Metric", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Cost / RSF"],
  rows: [
    ["Gross Restaurant Sales", { text: "$1,650,000", tone: "reuse" }, { text: "$1,732,500", tone: "reuse" }, "$17,200", "$26,580", "$36,088", "$18.82"],
    ["Cost of Goods Sold (COGS - 28%)", { text: "($462,000)", tone: "reuse" }, { text: "($485,100)", tone: "reuse" }, "$12,000", "$18,000", "$26,080", "$7.35"],
    ["Labor & Payroll (30%)", { text: "($495,000)", tone: "reuse" }, { text: "($519,750)", tone: "reuse" }, "$1,500", "$2,568", "$4,180", "$1.04"],
    ["Total Occupancy Cost (Rent + CAM)", { text: "($143,325)", tone: "brand" }, { text: "($147,625)", tone: "brand" }, "$2,800", "$4,655", "$7,080", "$1.90"],
  ] as [string, Pill, Pill, string, string, string, string][],
  total: ["Net Operating Income (EBITDA)", "$244,200", "$272,400", "$302,800", "$335,600", "$371,100", "$0.15"],
};

export const roadmap = {
  tag: "Section 08 // Delivery Roadmap",
  page: "Page 8 of 9",
  title: "Permitting Roadmap, Regulatory Audit & Delivery Schedule",
  cards: [
    { title: "Zoning & Land Use", parts: [["Zoning: ", false], ["CBD-DMU", true], [" (Downtown Mixed-Use). Restaurant with on-premise alcohol consumption is permitted by right without conditional use variances.", false]] },
    { title: "City Building Permits", parts: [["City of Austin Development Services Department commercial tenant finish-out permit pathway. Expedited review scheduled: ", false], ["4-6 weeks.", true]] },
    { title: "Health & TABC Licensing", parts: [["Austin Public Health food establishment review (3 weeks) + Texas Alcoholic Beverage Commission (TABC) Wine and Malt Beverage Permit (6 weeks).", false]] },
  ] as { title: string; parts: [string, boolean][] }[],
  timelineTitle: "24-Week Critical Path Delivery Milestone Timeline",
  milestones: [
    { weeks: "Weeks 01-04:", weeksClass: "bg-[#F0FDF4] text-[#16A34A]", title: "Architectural & MEP Stamped Plan Production", status: "Completed", statusClass: "bg-[#F0FDF4] text-[#16A34A]", track: "bg-[#EFF6FF]", fill: "bg-[#2563EB]" },
    { weeks: "Weeks 05-08", weeksClass: "bg-[#EFF6FF] text-[#2563EB]", title: "Permit Submission, Plan Review & Contractor Bids", status: "In Progress", statusClass: "bg-[#CBD5E1] text-[#475569]", track: "bg-[#FFFBEB]", fill: "bg-[#F59E0B]" },
    { weeks: "Weeks 09-14:", weeksClass: "bg-[#EFF6FF] text-[#0E7490]", title: "Demolition, Trenching & Underground MEP Rough-in", status: "Scheduled", statusClass: "bg-[#CBD5E1] text-[#475569]", track: "bg-[#EFF6FF]", fill: "bg-[#0E7490]" },
    { weeks: "Weeks 15-18:", weeksClass: "bg-[#EFF6FF] text-[#2563EB]", title: "Framing, Drywall, Exhaust Hood & Architectural Finishes", status: "Scheduled", statusClass: "bg-[#CBD5E1] text-[#475569]", track: "bg-[#EFF6FF]", fill: "bg-[#2563EB]" },
    { weeks: "Weeks 19-21:", weeksClass: "bg-[#EFF6FF] text-[#2563EB]", title: "Kitchen Equipment Delivery, Draft System & POS Setup", status: "Scheduled", statusClass: "bg-[#CBD5E1] text-[#475569]", track: "bg-[#EFF6FF]", fill: "bg-[#2563EB]" },
    { weeks: "Weeks 22-24:", weeksClass: "bg-[#EFF6FF] text-[#2563EB]", title: "City Final Inspections, Health Permit & Grand Opening", status: "Milestone Target", statusClass: "bg-[#CBD5E1] text-[#475569]", track: "bg-[#F0FDF4]", fill: "bg-[#16A34A]" },
  ],
};

export const certification = {
  tag: "Section 09 // Certification & Signatures",
  page: "Page 9 of 9",
  title: "Professional Audit Trail & Document Execution Sign-off",
  disclaimerTitle: "Confidential Commercial Real Estate Memorandum Disclaimer:",
  sources: [
    ["• Esri Demographics:", " 2026 US Micro-demographic Data Series"],
    ["• Placer.ai Geolocation:", "  18,500 Average Daily Corridor Foot Traffic"],
    ["• RSMeans Construction:", " Austin Metro Index 2026 Q1 Construction Costs"],
    ["• Building Inspections:", " 400A Service & 10-Ton Trane RTU Field Verified"],
  ],
  auditTitle: "Third-Party Verified Data Integration Audit Trail:",
  auditBody:
    "This spatial feasibility study, AI concept rendering, and capital expenditure financial model are generated for underwriting, spatial planning, and marketing purposes only. Final construction pricing is subject to competitive contractor bidding and formal stamped engineering construction documents. VisionItForMe does not warrant future tenant gross sales, which depend on operator execution, general economic conditions, and business performance.",
  signTitle: "Executive Sign-off & Committee Acceptance",
  signed: "Digitally Signed & Verified",
  signers: [
    { name: "Marcus Vance, CCIM", role: "Managing Director, Retail Advisory", org: "Austin Commercial Capital" },
    { name: "Elena Rostova, AIA", role: "Lead Architectural Technologist", org: "VisionItForMe Spatial AI Lab" },
    { name: "Principal / Tenant Signatory", role: "Authorized Leasing Representative", org: "Date: _______________" },
  ],
  footer: ["CONFIDENTIAL MEMORANDUM • ALL RIGHTS RESERVED", "SYSTEM REGISTRATION: SHA256-8A7B-9C0D-4E5F", "PAGE 9 OF 9 • END OF DOSSIER"],
};
