"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import {
  Camera,
  Check,
  Columns2,
  Copy,
  Eye,
  Layers,
  Layers2,
  Maximize2,
  Minimize2,
  RefreshCw,
  Sparkles,
  Download,
  SlidersHorizontal,
  Palette,
  Cpu,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { aiAngles, conversionRows, materials, renderingModes, spatialPrompt, type RenderingMode } from "@/features/Project/api/ai-renderings.data";
import { AnalysisCard, StatusBadge } from "../analysis-ui";

const BEFORE = "/assets/images/raw-vacancy.png";
const AFTER = "/assets/images/taproom-interior.png";

const modeIcons: Record<RenderingMode, typeof Layers> = {
  Slider: SlidersHorizontal,
  "Side-by-Side": Columns2,
  Fade: Layers2,
  "AI Only": Eye,
};

const iconBtn =
  "inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-[#CBD5E1] bg-[#F1F5F9] text-[#0F172A] transition hover:bg-[#E2E8F0]";

const AiRenderingsTab = () => {
  const [mode, setMode] = useState<RenderingMode>("Slider");
  const [pos, setPos] = useState(46);
  const [angle, setAngle] = useState(0);
  const [copied, setCopied] = useState(false);
  const [full, setFull] = useState(false);
  const [regen, setRegen] = useState(false);
  const stage = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    const el = stage.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.round(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100))));
  }, []);

  const copy = () => {
    navigator.clipboard?.writeText(spatialPrompt).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const regenerate = () => {
    setRegen(true);
    setTimeout(() => setRegen(false), 1200);
  };

  const active = aiAngles[angle];
  const concept = `AI TRANSFORMED: MODERN FAST - CASUAL TAPROOM & KITCHEN (${100 - pos}%)`;
  const label = mode === "Fade" ? `${pos}% Concept / ${100 - pos}% Original` : `${pos}% Concept / ${100 - pos}% Original`;
  const primaryBtn =
    "inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#2563EB] px-6 py-3 text-[13px] font-medium text-[#F8FAFC] transition hover:bg-[#1D4ED8]";
  const secondaryBtn =
    "inline-flex items-center justify-center gap-2 rounded-[2px] border border-white bg-[#F1F5F9] px-6 py-3 text-[13px] font-medium text-[#0F172A] transition hover:bg-[#E2E8F0]";

  return (
    <div className="flex flex-col gap-5">
      {/* Hero */}
      <AnalysisCard>
        <div className="flex flex-col gap-4 p-5">
          <div className="flex flex-wrap items-center gap-4">
            <StatusBadge tone="success" className="gap-1.5 px-2 py-1">
              <Sparkles className="size-3.5" /> AI Spatial Intelligence Engine
            </StatusBadge>
            <p className="text-[12px] text-[#475569]">3 Architectural Concept Dossiers</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[16px] font-bold text-[#0F172A]">Photorealistic AI Tenant Visualizations</h2>
            <p className="text-[13px] leading-snug text-[#475569]">
              Explore how this vacant commercial footprint converts into top recommended business concepts. Select a
              concept below to inspect multi-angle 4K transformations, construction MEP overlays, and architectural
              material specs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" className={primaryBtn}>
              <Sparkles className="size-4" /> AI Rendering Studio
            </button>
            <button type="button" className={secondaryBtn}>
              <Download className="size-4" /> Download 4K
            </button>
          </div>
        </div>
      </AnalysisCard>

      {/* Recommended concept + comparison */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="rounded-[4px] bg-[#F0FDF4] px-2 py-0.5 font-medium text-[#16A34A]">
                ★ #1 Recommended Tenant Match
              </span>
              <span className="text-[#475569]">• {active.tag === "Front-of-House Core" ? "Front-of-House Core" : active.tag}</span>
            </div>
            <h3 className="mt-3 text-[16px] font-bold text-[#0F172A]">{active.title.replace(/ Con$| Atm$| Finishe$|-$/, "")}</h3>
            <p className="mt-1 text-[13px] text-[#475569]">
              Wide-angle interior perspective highlighting the custom fluted oak ordering counter, customer
              circulation, and 46-seat dining room.
            </p>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={copy} className={primaryBtn}>
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />} Copy Prompt
            </button>
            <button type="button" onClick={() => setFull((f) => !f)} className={secondaryBtn}>
              {full ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />} Full Screen
            </button>
          </div>
        </div>

        <AnalysisCard>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DDDDDE] px-5 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#F0FDF4] text-[#16A34A]">
                <Sparkles className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-[#0F172A]">
                  Modern Fast-Casual Taproom &amp; Kitchen • Main Dining &amp; POS Counter
                </p>
                <p className="mt-1 text-[11px] text-[#475569]">Warm Coastal Mediterranean with Terrazzo &amp; Fluted Oak</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                {renderingModes.map((m) => {
                  const Icon = modeIcons[m];
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMode(m)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-[4px] px-3 py-1.5 text-[12px] font-medium transition",
                        m === mode ? "bg-[#2563EB] text-white" : "text-[#475569] hover:text-[#2563EB]",
                      )}
                    >
                      <Icon className="size-3.5" /> {m}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={regenerate}
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#EFF6FF] px-3 py-2 text-[12px] font-medium text-[#2563EB] transition hover:bg-[#DBEAFE]"
              >
                <RefreshCw className={cn("size-3.5", regen && "animate-spin")} /> Regenerate
              </button>
              <button type="button" aria-label="Download rendering" className={iconBtn}>
                <Download className="size-4" />
              </button>
              <button type="button" aria-label="Toggle full screen" onClick={() => setFull((f) => !f)} className={iconBtn}>
                {full ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
              </button>
            </div>
          </div>

          <div className="p-4">
            <div
              ref={stage}
              className={cn(
                "relative w-full select-none overflow-hidden bg-[#E2E8F0]",
                full ? "aspect-[16/7]" : "aspect-[1672/941] max-h-[460px]",
                mode === "Slider" && "cursor-ew-resize touch-none",
              )}
              onPointerDown={(e) => {
                if (mode === "Slider" || mode === "Fade") {
                  e.currentTarget.setPointerCapture(e.pointerId);
                  move(e.clientX);
                }
              }}
              onPointerMove={(e) => {
                if ((mode === "Slider" || mode === "Fade") && e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX);
              }}
            >
              {mode === "Side-by-Side" ? (
                <div className="grid size-full grid-cols-2 gap-1">
                  <div className="relative">
                    <Image src={BEFORE} alt="Current raw vacancy" fill sizes="50vw" className="object-cover" />
                  </div>
                  <div className="relative">
                    <Image src={AFTER} alt="AI transformed concept" fill sizes="50vw" className="object-cover" />
                  </div>
                </div>
              ) : (
                <>
                  <Image src={BEFORE} alt="Current raw vacancy" fill sizes="100vw" className="object-cover" draggable={false} />
                  <div
                    className="absolute inset-0"
                    style={
                      mode === "Slider"
                        ? { clipPath: `inset(0 0 0 ${pos}%)` }
                        : mode === "Fade"
                          ? { opacity: (100 - pos) / 100 }
                          : undefined
                    }
                  >
                    <Image src={AFTER} alt="AI transformed concept" fill sizes="100vw" className="object-cover" draggable={false} />
                  </div>
                </>
              )}

              {mode !== "AI Only" && (
                <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#0F172A] px-4 py-2 text-[12px] font-medium text-white">
                  CURRENT RAW VACANCY
                </span>
              )}
              {mode !== "Side-by-Side" && mode !== "AI Only" && (
                <span className="pointer-events-none absolute right-3 top-3 hidden max-w-[60%] truncate rounded-full bg-[#2563EB] px-4 py-2 text-[12px] font-medium text-white sm:block">
                  {concept}
                </span>
              )}
              {mode === "AI Only" && (
                <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#2563EB] px-4 py-2 text-[12px] font-medium text-white">
                  AI TRANSFORMED
                </span>
              )}

              {mode === "Slider" && (
                <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-[#2563EB]" style={{ left: `${pos}%` }}>
                  <span className="absolute left-1/2 top-1/2 flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[4px] border border-[#2563EB] bg-white text-[#2563EB]">
                    <Columns2 className="size-4" />
                  </span>
                </div>
              )}
              {(mode === "Slider" || mode === "Fade") && (
                <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#F1F5F9]/95 px-4 py-2 text-[12px] font-medium text-[#0F172A]">
                  {label}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-4 text-[12px] text-[#475569]">
            <p className="flex items-center gap-2">
              <Sparkles className="size-3.5 text-[#F59E0B]" />
              <span>
                <b className="font-bold text-[#0F172A]">Conceptual Architectural AI Visualization.</b> For spatial
                feasibility, lease marketing &amp; cost planning.
              </span>
            </p>
            <span className="rounded-[4px] bg-[#F1F5F9] px-3 py-1.5 text-[#475569]">Tier: Premium Boutique ($195 / SF)</span>
          </div>
        </AnalysisCard>
      </div>

      {/* Angles */}
      <AnalysisCard>
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-[#F0FDF4] text-[#16A34A]">
              <Camera className="size-4" />
            </span>
            <h3 className="text-[13px] font-bold text-[#0F172A]">Architectural Angles for Modern Fast-Casual Taproom &amp; Kitchen</h3>
          </div>
          <p className="text-[11px] text-[#475569]">Click any perspective to load in interactive comparison</p>
        </div>
        <div className="grid grid-cols-1 gap-4 px-5 pb-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {aiAngles.map((a, i) => (
            <button
              key={a.title}
              type="button"
              onClick={() => setAngle(i)}
              aria-pressed={i === angle}
              className={cn(
                "overflow-hidden rounded-[4px] border bg-white text-left transition hover:border-[#2563EB]",
                i === angle ? "border-[#2563EB] ring-1 ring-[#2563EB]" : "border-[#CBD5E1]",
              )}
            >
              <div className="relative aspect-[3/2] w-full">
                <Image src={a.image} alt={a.tag} fill sizes="(min-width:1280px) 18vw, (min-width:640px) 45vw, 100vw" className="object-cover" />
                <span className="absolute right-2 top-2 rounded-[4px] bg-black/60 px-2 py-0.5 text-[11px] text-white">{a.tag}</span>
              </div>
              <div className="px-3 py-2.5">
                <p className="truncate text-[13px] font-bold text-[#0F172A]">{a.title}</p>
                <p className="mt-0.5 truncate text-[11px] text-[#475569]">{a.spec}</p>
              </div>
            </button>
          ))}
        </div>
      </AnalysisCard>

      {/* Conversion table */}
      <AnalysisCard className="bg-[#F0FDF4]/70">
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
              <Layers className="size-4" />
            </span>
            <div>
              <h3 className="text-[13px] font-bold text-[#0F172A]">Spatial Conversion &amp; MEP Transformation Analysis</h3>
              <p className="mt-1 text-[11px] text-[#475569]">
                How the raw commercial retail shell is structurally and visually converted to meet code and operational requirements.
              </p>
            </div>
          </div>
          <span className="rounded-full bg-[#CBD5E1]/70 px-5 py-2.5 text-[12px] font-bold text-[#0F172A]">
            Property Area: 2,450 RSF
          </span>
        </div>
        <div className="mx-5 mb-5 overflow-hidden rounded-[4px] border border-[#CBD5E1] bg-white">
          <h4 className="px-4 py-3 text-[16px] font-medium text-[#0F172A]">Credit Consumption Ledger</h4>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-[11px] text-[#0F172A]">
              <thead>
                <tr className="bg-[#E2E8F0] text-[#475569]">
                  <th className="w-[18%] px-4 py-3 font-normal">BUILIING COMPONENT</th>
                  <th className="w-[27%] px-3 py-3 font-normal">RAW SHELL / CURRENT CONDITION</th>
                  <th className="w-[30%] px-3 py-3 font-normal">AI ARCHITECTURAL TRANSFORMATION</th>
                  <th className="px-4 py-3 text-right font-normal">CAPEX MAPPING</th>
                </tr>
              </thead>
              <tbody>
                {conversionRows.map((r, i) => (
                  <tr key={i} className="border-t border-[#DDDDDE] align-middle">
                    <td className="px-4 py-4">{r.component}</td>
                    <td className="px-3 py-4 leading-snug">
                      <span className="text-[#DC2626]">✕</span>
                      {r.raw}
                    </td>
                    <td className="px-3 py-4 leading-snug">
                      <span className="text-[#16A34A]">✓ </span>
                      {r.ai}
                    </td>
                    <td className="px-4 py-4 text-right text-[#16A34A]">{r.capex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnalysisCard>

      {/* Materials */}
      <AnalysisCard>
        <div className="flex items-center gap-3 px-5 py-4">
          <span className="flex size-9 items-center justify-center rounded-full bg-[#F0FDF4] text-[#16A34A]">
            <Palette className="size-4" />
          </span>
          <div>
            <h3 className="text-[13px] font-bold text-[#0F172A]">Architectural Materials &amp; Finishes Specification Board</h3>
            <p className="mt-1 text-[11px] text-[#475569]">
              Commercial-grade materials synthesized in the AI rendering, calibrated to meet code compliance and traffic durability.
            </p>
            <p className="mt-1 text-[11px] text-[#475569]">
              Style: <b className="font-bold text-[#0F172A]">Warm Coastal Mediterranean with Terrazzo &amp; Fluted Oak</b>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 border-t border-[#DDDDDE] p-5 sm:grid-cols-2 xl:grid-cols-4">
          {materials.map((m) => (
            <div key={m.name} className="flex flex-col gap-2 rounded-[4px] border border-[#CBD5E1] bg-[#F8FAFC] p-4">
              <div className="flex items-start justify-between">
                <span className="size-8 rounded-[4px]" style={{ background: m.swatch }} />
                <span className="rounded-[4px] border border-[#CBD5E1] px-1.5 text-[11px] text-[#2563EB]">$$$</span>
              </div>
              <p className="mt-2 text-[12px] font-bold text-[#0F172A]">{m.name}</p>
              <p className="text-[11px] leading-snug text-[#475569]">{m.desc}</p>
              <div className="mt-1 border-t border-[#DDDDDE] pt-2 text-[11px]">
                <p className="text-[#475569]">Rating:</p>
                <p className="mt-1 text-[#16A34A]">{m.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </AnalysisCard>

      {/* Neural params */}
      <AnalysisCard>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[#DDDDDE] bg-[#F1F5F9]/60 px-5 py-4">
          <div className="flex items-center gap-3">
            <Cpu className="size-4 text-[#16A34A]" />
            <h3 className="text-[13px] font-bold text-[#0F172A]">VisionSpatial Neural Diffusion Architecture Parameters</h3>
          </div>
          <span className="hidden text-[#475569] md:inline">•</span>
          <p className="text-[11px] text-[#475569]"><b className="text-[#0F172A]">Engine:</b> VisionSpatial Neural Diffusion v4.2 Pro</p>
          <span className="hidden text-[#475569] md:inline">•</span>
          <p className="text-[11px] text-[#475569]"><b className="text-[#0F172A]">Res:</b> 3840 x 2160 (4K UHD Architectural Spec)</p>
        </div>
        <div className="flex flex-col gap-4 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[13px] font-bold text-[#0F172A]">Synthesized Spatial Prompt:</p>
            <button type="button" onClick={copy} className={cn(secondaryBtn, "border-[#CBD5E1] bg-white")}>
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />} Copy Prompt
            </button>
          </div>
          <p className="rounded-[4px] border border-[#2563EB]/60 bg-white px-3 py-3 text-[11px] leading-relaxed text-[#475569]">
            {spatialPrompt}
          </p>
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 text-[11px] text-[#475569]">
            <p>Target Opening Timeline: <b className="font-medium text-[#0F172A]">14 - 18 Weeks</b></p>
            <p>Estimated Tenant Net CapEx: <b className="font-medium text-[#0F172A]">$341,750</b></p>
            <p>Landlord TI Contribution: <b className="font-medium text-[#0F172A]">$110,250 ($45/SF TI)</b></p>
          </div>
        </div>
      </AnalysisCard>
    </div>
  );
};

export default AiRenderingsTab;
