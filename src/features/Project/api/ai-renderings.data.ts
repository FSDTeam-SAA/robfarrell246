export const renderingModes = ["Slider", "Side-by-Side", "Fade", "AI Only"] as const;
export type RenderingMode = (typeof renderingModes)[number];

export const aiAngles = [
  { title: "Main Dining & POS Counter", spec: "24mm f/2.8 Architectural Tilt-Shift", tag: "Front-of-House Core", image: "/assets/images/ai-angle-1.png" },
  { title: "Storefront & Sidewalk Patio Con", spec: "35mm f/2.0 Eye-Level Exterior", tag: "Exterior Facade & Patio", image: "/assets/images/ai-angle-2.png" },
  { title: "Commercial Kitchen & Type-", spec: "28mm f/4.0 Technical Architectural", tag: "Back-of-House MEP", image: "/assets/images/ai-angle-3.png" },
  { title: "Evening Ambient Lounge Atm", spec: "50mm f/1.8 Low-Light Cinematic", tag: "Nightlife & Bar Lighting", image: "/assets/images/ai-angle-4.png" },
  { title: "Architectural Millwork & Finishe", spec: "85mm f/2.8 Macro Architectural Vignette", tag: "Material Craft Study", image: "/assets/images/ai-angle-5.png" },
];

export const conversionRows = [
  { component: "Ceiling & Lighting Grid", raw: "14.5ft bare metal deck with decommissioned fluorescent troffers & exposed conduit", ai: "Matte black acoustic baffle field with 3-circuit dimmable 2700K architectural LED track spotlights", capex: "Electrical & Lighting ($31,000)" },
  { component: "Floor Slab & Finishes", raw: "Raw scarred concrete slab with adhesive residue from prior retail tenant", ai: "Diamond-ground seamless honed terrazzo with polished brass movement joint dividing strips", capex: "Finishes & Flooring ($32,000)" },
  { component: "Service Counter & Bar Island", raw: "Open vacancy without demarcated order or checkout infrastructure", ai: "24-foot radius fluted white oak POS island with integrated POS terminals and dual ADA transaction counter", capex: "Custom Millwork ($52,000)" },
  { component: "Floor Slab & Finishes", raw: "Sanitary drain stubbed to demising wall; no exhaust or grease separation", ai: "Core drilled waste lines tied into 1,500-gal exterior trap + 14ft Type 1 stainless exhaust hood chase", capex: "Plumbing & Kitchen Infrastructure ($88,000)" },
  { component: "Floor Slab & Finishes", raw: "Fixed single-glazed commercial aluminum plate storefront", ai: "Bi-folding thermally-broken aluminum glass curtain wall opening to sidewalk outdoor patio seating", capex: "Storefront Facade ($24,000)" },
];

export const materials = [
  { name: "Honed Venetian Terrazzo", desc: "4mm Carrara marble aggregate, seamless matte resin binder, Class 1 slip resistance", rating: "Heavy Commercial Foot Traffic (10+ Year Lifespan)", swatch: "#FEF2F2" },
  { name: "Fluted American White Oak", desc: 'Solid 1.5" radius fluted profiles, low-VOC ultra-matte clear polyurethane finish', rating: "Commercial Architectural Millwork", swatch: "#FEFCE8" },
  { name: "Calacatta Quartzite Counter", desc: "3cm engineered quartzite, honed anti-microbial surface with eased pencil edge", rating: "Food-grade NSF Certified", swatch: "#ECFEFF" },
  { name: "Architectural Jet Black Steel", desc: "RAL 9005 fine textured powdercoat on structural hollow steel sections", rating: "AAMA 2604 Compliant Exterior/Interior", swatch: "#0F172A" },
  { name: "Acoustic Wood Slat Ceiling", desc: "FSC Certified white oak veneers over recycled PET charcoal sound-absorbing felt", rating: "NRC 0.85 Sound Absorption, ASTM E84 Class A Fire", swatch: "#D97706" },
];

export const spatialPrompt =
  "Photorealistic interior conversion of vacant commercial retail suite, 14.5ft exposed concrete deck with matte black acoustic spray, fluted white oak POS island with honed Calacatta quartz countertops, continuous honed Italian terrazzo flooring with inlaid brass expansion joints, custom banquette seating in cognac full-grain leather, suspended 2700K warm architectural track lighting, lush fiddle leaf ficus planters, soft indirect cove lighting.";
