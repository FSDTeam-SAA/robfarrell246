"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  DollarSign,
  Droplets,
  FileDown,
  Flame,
  MapPin,
  ShieldCheck,
  Share2,
  Sparkles,
  TrendingUp,
  TriangleAlert,
  Wind,
  Zap,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  abstract,
  capex,
  certification,
  competition,
  cover,
  demographics,
  mep,
  opportunityVoid,
  proForma,
  reportPages,
  roadmap,
  spatial,
  traffic,
  type Pill as PillData,
  type PillTone,
} from "@/features/Project/api/report-preview.data";

const IMG = "/assets/images/rpt-preview";

const pillTones: Record<PillTone, string> = {
  moderate: "bg-[#F59E0B] text-[#FFFBEB]",
  lowmed: "bg-[#EFF6FF] text-[#3B82F6]",
  low: "bg-[#F1F5F9] text-[#475569]",
  comp: "bg-[#FFFBEB] text-[#F59E0B]",
  indirect: "bg-[#F0FDF4] text-[#16A34A]",
  direct: "bg-[#FEF2F2] text-[#DC2626]",
  reuse: "bg-[#F0FDF4] text-[#15803D]",
  modify: "bg-[#ECFEFF] text-[#0E7490]",
  install: "bg-[#FFFBEB] text-[#F59E0B]",
  repair: "bg-[#EFF6FF] text-[#3B82F6]",
  brand: "bg-[#EFF6FF] text-[#2563EB]",
  done: "bg-[#F0FDF4] text-[#16A34A]",
  pending: "bg-[#CBD5E1] text-[#475569]",
};

const Pill = ({ pill, large }: { pill: PillData; large?: boolean }) => (
  <span
    className={cn(
      "inline-flex items-center whitespace-nowrap rounded-[6px] px-2",
      large ? "py-1 text-[12px] font-medium" : "py-0.5 text-[11px] font-bold",
      pillTones[pill.tone],
    )}
  >
    {pill.text}
  </span>
);

/* ---------- shared sheet primitives ---------- */

const Sheet = ({
  id,
  tag,
  page,
  title,
  brand,
  watermark,
  children,
}: {
  id: string;
  tag: string;
  page: string;
  title: string;
  brand: boolean;
  watermark: boolean;
  children: ReactNode;
}) => (
  <article
    id={id}
    className="relative scroll-mt-4 overflow-hidden rounded-[4px] border border-[#CBD5E1] bg-white/80 backdrop-blur-[10px]"
  >
    {watermark && <Watermark />}
    <div className="flex flex-col gap-3 p-4">
      <header className="flex items-center gap-2 border-b-[3px] border-black bg-[#F1F5F9] px-3 pb-3 pt-2.5">
        {brand && <Image src={`${IMG}-logo-icon.svg`} alt="VisionBeforeLease" width={42} height={34} className="shrink-0" />}
        <p className="min-w-0 flex-1 text-[13px] font-semibold text-[#2563EB]">{tag}</p>
        <span className="shrink-0 rounded-[4px] border border-[#E2E8F0] bg-[#EEF2F7] px-2 py-1.5 text-[12px] font-medium text-[#0F172A]">
          {page}
        </span>
      </header>
      <div className="flex flex-col gap-5">
        <h2 className="text-[19px] font-bold leading-tight text-[#0F172A]">{title}</h2>
        {children}
      </div>
    </div>
  </article>
);

const Watermark = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
    <span className="-rotate-[24deg] select-none whitespace-nowrap text-[64px] font-bold tracking-[0.2em] text-[#2563EB]/10 sm:text-[96px]">
      CONFIDENTIAL
    </span>
  </div>
);

const DataTable = ({
  head,
  minWidth = 760,
  children,
  centerFrom = 1,
}: {
  head: string[];
  minWidth?: number;
  children: ReactNode;
  centerFrom?: number;
}) => (
  <div className="overflow-x-auto border border-[#CBD5E1] bg-white/80">
    <table className="w-full border-collapse text-[12px]" style={{ minWidth }}>
      <thead>
        <tr className="bg-[#E2E8F0] text-[#252832]">
          {head.map((h, i) => (
            <th
              key={`${h}-${i}`}
              scope="col"
              className={cn("border-b border-[#DDDDDE] px-3 py-3 font-normal", i >= centerFrom ? "text-center" : "text-left")}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

const Td = ({ className, children }: { className?: string; children: ReactNode }) => (
  <td className={cn("border-b border-[#DDDDDE] px-3 py-3 align-middle font-medium text-[#0F172A]", className)}>{children}</td>
);

const TableTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="border border-b-0 border-[#CBD5E1] bg-white/80 px-5 py-3 text-[16px] font-bold text-[#0F172A]">{children}</h3>
);

const StatTile = ({
  label,
  value,
  note,
  labelClass = "text-[#475569]",
  valueClass = "text-[#0F172A]",
  noteClass = "text-[#475569]",
  noteBold = true,
  active,
}: {
  label: string;
  value: string;
  note: string;
  labelClass?: string;
  valueClass?: string;
  noteClass?: string;
  noteBold?: boolean;
  active?: boolean;
}) => (
  <div
    className={cn(
      "flex flex-col gap-2 rounded-[8px] bg-[#F1F5F9] p-3 text-center transition hover:bg-[#E8EEF5]",
      active && "border border-[#2563EB]",
    )}
  >
    <p className={cn("text-[12px]", labelClass)}>{label}</p>
    <p className={cn("text-[16px] font-bold", valueClass)}>{value}</p>
    <p className={cn("text-[12px]", noteBold ? "font-semibold" : "", noteClass)}>{note}</p>
  </div>
);

const TrafficPanel = () => (
  <div className="flex flex-col gap-3 border-b border-[#DDDDDE] pb-4">
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-[8px] bg-[#F1F5F9] p-3">
      <p className="text-[13px] font-semibold text-[#0F172A]">{traffic.title}</p>
      <p className="text-[12px] text-[#2563EB]">{traffic.verified}</p>
    </div>
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {traffic.tiles.map((t) => (
        <StatTile
          key={t.label}
          label={t.label}
          value={t.value}
          note={t.note}
          active={t.tone === "active"}
          labelClass={t.tone === "active" ? "text-[#2563EB]" : "text-[#475569]"}
          valueClass={t.tone === "active" ? "text-[#2563EB]" : t.tone === "navy" ? "text-[#193480]" : "text-[#0F172A]"}
          noteClass={t.noteClass}
        />
      ))}
    </div>
    <hr className="border-[#DDDDDE]" />
    <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#475569]">
      <p>
        {traffic.timeline[0]}
        <b>{traffic.timeline[1]}</b>
      </p>
      <p>
        {traffic.status[0]}
        <b>{traffic.status[1]}</b>
      </p>
    </div>
  </div>
);

const OpportunityVoid = () => (
  <div className="flex items-start gap-2 rounded-[8px] bg-[#F1F5F9] p-3">
    <Compass className="size-8 shrink-0 text-[#0F172A]" aria-hidden />
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      <h3 className="text-[16px] font-bold leading-tight text-[#0F172A]">{opportunityVoid.title}</h3>
      <p className="text-[12px] leading-snug text-[#475569]">{opportunityVoid.body}</p>
    </div>
  </div>
);

const highlightIcons = { trend: TrendingUp, dollar: DollarSign, clock: Clock } as const;
const mepIcons = { plumbing: Droplets, hvac: Wind, electrical: Zap, fire: ShieldCheck, gas: Flame } as const;
const tierIcons = { check: CheckCircle2, building: Building2, warn: TriangleAlert } as const;

/* ---------- main component ---------- */

const ReportPreviewTab = () => {
  const [view, setView] = useState<"continuous" | "page">("continuous");
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [brand, setBrand] = useState(true);
  const [watermark, setWatermark] = useState(false);

  const total = reportPages.length;

  const goTo = (next: number) => {
    const n = Math.min(total, Math.max(1, next));
    setPage(n);
    if (view === "continuous" && typeof document !== "undefined") {
      document.getElementById(`rp-page-${n}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const visible = (n: number) => view === "continuous" || page === n;
  const common = { brand, watermark };

  const outlineBtn =
    "inline-flex h-[40px] items-center gap-2 rounded-[4px] border bg-white px-3 text-[13px] font-medium transition";

  return (
    <div className="flex flex-col gap-5">
      {/* toolbar */}
      <section aria-label="Report controls" className="flex flex-col gap-3 border-b border-[#DDDDDE] px-2 pb-5">
        <div className="flex flex-wrap items-stretch gap-3">
          <div className="flex items-center gap-1 rounded-[4px] border border-[#94A3B8] bg-white p-1.5">
            {(
              [
                ["continuous", "Continuous Folio"],
                ["page", `Page View (${page}/${total})`],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setView(key)}
                aria-pressed={view === key}
                className={cn(
                  "rounded-[4px] px-5 py-1.5 text-[13px] font-medium transition",
                  view === key ? "bg-[#2563EB] text-white shadow-[0_1px_1.5px_rgba(0,0,0,0.1)]" : "text-[#475569] hover:text-[#2563EB]",
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="relative">
            <select
              aria-label="Jump to page"
              value={page}
              onChange={(e) => goTo(Number(e.target.value))}
              className="h-full min-h-[44px] w-full appearance-none rounded-[4px] border border-[#94A3B8] bg-white py-1.5 pl-3 pr-9 text-[13px] font-medium text-[#475569] outline-none transition hover:border-[#2563EB] focus-visible:border-[#2563EB]"
            >
              {reportPages.map((name, i) => (
                <option key={name} value={i + 1}>{`Page ${i + 1}: ${name}`}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#475569]" aria-hidden />
          </div>

          <div className="flex items-center gap-2 rounded-[4px] border border-[#94A3B8] bg-white p-1.5">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              disabled={page <= 1}
              className="inline-flex items-center gap-1 rounded-[4px] border border-[#E2E8F0] px-2 py-1 text-[12px] font-medium text-[#475569] transition hover:border-[#2563EB] hover:text-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowLeft className="size-3.5" aria-hidden /> Prev
            </button>
            <span className="inline-flex size-7 items-center justify-center rounded-[4px] border border-[#E2E8F0] bg-[#2563EB] text-[12px] font-medium text-white">
              {page}
            </span>
            <span className="text-[12px] font-medium text-[#0F172A]">OF</span>
            <span className="inline-flex size-7 items-center justify-center rounded-[4px] border border-[#E2E8F0] bg-[#EEF2F7] text-[12px] font-medium text-[#0F172A]">
              {total}
            </span>
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              disabled={page >= total}
              className="inline-flex items-center gap-1 rounded-[4px] border border-[#E2E8F0] px-2 py-1 text-[12px] font-medium text-[#0F172A] transition hover:border-[#2563EB] hover:text-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next <ArrowRight className="size-3.5" aria-hidden />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-[40px] items-center gap-3 rounded-[4px] border border-[#94A3B8] bg-white px-3 text-[13px] font-medium text-[#475569]">
            <button
              type="button"
              aria-label="Zoom out"
              onClick={() => setZoom((z) => Math.max(50, z - 10))}
              className="transition hover:text-[#2563EB]"
            >
              <ZoomOut className="size-4" />
            </button>
            <span className="min-w-[40px] text-center">{zoom}%</span>
            <button
              type="button"
              aria-label="Zoom in"
              onClick={() => setZoom((z) => Math.min(150, z + 10))}
              className="transition hover:text-[#2563EB]"
            >
              <ZoomIn className="size-4" />
            </button>
          </div>

          <button
            type="button"
            aria-pressed={brand}
            onClick={() => setBrand((b) => !b)}
            className={cn(outlineBtn, "border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF]", brand && "bg-white")}
          >
            <Building2 className="size-5" aria-hidden /> VisionItForMe Brand
          </button>
          <button
            type="button"
            aria-pressed={watermark}
            onClick={() => setWatermark((w) => !w)}
            className={cn(outlineBtn, "border-[#2563EB] text-[#2563EB] hover:bg-[#DBEAFE]", watermark ? "bg-[#DBEAFE]" : "bg-[#EFF6FF]")}
          >
            <ShieldCheck className="size-5" aria-hidden /> Confidential Watermark
          </button>
          <button
            type="button"
            className="inline-flex h-[44px] items-center gap-2 rounded-[2px] bg-[#2563EB] px-6 text-[13px] font-medium text-[#F8FAFC] transition hover:bg-[#1D4ED8]"
          >
            <FileDown className="size-4" aria-hidden /> Export PDF
          </button>
          <button
            type="button"
            className="inline-flex h-[44px] items-center gap-2 rounded-[2px] border border-white bg-[#F1F5F9] px-6 text-[13px] font-medium text-[#0F172A] transition hover:bg-[#E2E8F0]"
          >
            <Share2 className="size-4" aria-hidden /> Share
          </button>
        </div>
      </section>

      {/* report pages */}
      <div className="flex flex-col gap-6" style={{ zoom: zoom / 100 }}>
        {visible(1) && (
          <div id="rp-page-1" className="scroll-mt-4">
            <article className="relative overflow-hidden rounded-[4px] border border-[#CBD5E1] bg-white/80 backdrop-blur-[10px]">
              {watermark && <Watermark />}
              <div className="flex flex-col gap-4 p-4">
                <header className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-black bg-[#F1F5F9] px-3 pb-3 pt-2.5">
                  <p className="text-[13px] font-semibold text-[#2563EB]">{cover.agency}</p>
                  {brand && (
                    <Image
                      src={`${IMG}-logo-wide.svg`}
                      alt="VisionBeforeLease - See it, plan it, budget it"
                      width={506}
                      height={93}
                      className="h-auto w-[240px] md:w-[405px]"
                    />
                  )}
                  <span className="rounded-[4px] border border-[#E2E8F0] bg-[#EEF2F7] px-2 py-1.5 text-[12px] font-medium text-[#0F172A]">
                    {cover.ref}
                  </span>
                </header>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-stretch sm:justify-between">
                    <div className="flex min-w-0 flex-col gap-2.5">
                      <p className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#F0FDF4] px-3 py-2 text-[12px] font-medium text-[#16A34A]">
                        <Sparkles className="size-5" aria-hidden /> {cover.aiBadge}
                      </p>
                      <h2 className="text-[19px] font-bold leading-tight text-[#0F172A]">{cover.property}</h2>
                      <p className="flex items-center gap-2 text-[16px] text-[#0F172A]">
                        <MapPin className="size-4 shrink-0 text-[#2563EB]" aria-hidden /> {cover.address}
                      </p>
                    </div>
                    <div className="relative aspect-[453/207] w-[180px] shrink-0 self-start overflow-hidden sm:self-stretch">
                      <Image
                        src={`${IMG}-riverton-src.png`}
                        alt="Riverton Properties"
                        width={1448}
                        height={1086}
                        className="pointer-events-none absolute max-w-none"
                        style={{ height: "524.64%", left: "-211.7%", top: "-228.99%", width: "319.65%" }}
                      />
                    </div>
                  </div>

                  <div className="relative flex min-h-[340px] items-end overflow-hidden rounded-[4px] border border-[#CBD5E1] p-4 lg:h-[455px]">
                    <Image src={`${IMG}-cover.png`} alt="Concept restaurant interior" fill sizes="(min-width: 1024px) 1200px, 100vw" className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative flex w-full flex-wrap items-end justify-between gap-4">
                      <div className="flex min-w-0 flex-col gap-3">
                        <p className="text-[13px] font-semibold text-white">{cover.archetypeLabel}</p>
                        <p className="text-[19px] font-bold leading-tight text-white">{cover.archetype}</p>
                        <p className="text-[16px] text-white">{cover.archetypeMeta}</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-[13px] font-semibold text-white">{cover.feasibilityLabel}</p>
                        <p className="text-[19px] font-bold text-[#16A34A]">{cover.feasibility}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {cover.stats.map((s) => (
                      <div key={s.label} className="flex flex-col gap-2 rounded-[8px] bg-[#F1F5F9] p-3 transition hover:bg-[#E8EEF5]">
                        <p className="text-[12px] font-medium text-[#475569]">{s.label}</p>
                        <p className={cn("text-[16px] font-bold", s.valueClass)}>{s.value}</p>
                        <p className={cn("text-[12px]", s.noteClass)}>{s.note}</p>
                        {s.extraNote && <p className="text-[12px] text-[#475569]">{s.extraNote}</p>}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-between gap-3 text-[16px] text-[#0F172A] md:flex-row">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">{cover.preparedFor}</p>
                      <p>{cover.assetClass}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:items-start">
                      <p>{cover.published}</p>
                      <p className="font-bold text-[#2563EB]">{cover.pageLine}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {visible(2) && (
          <div id="rp-page-2" className="scroll-mt-4">
            <Sheet id="rp-sheet-s01" tag={abstract.tag} page={abstract.page} title={abstract.title} {...common}>
              <div className="flex flex-col gap-4 text-[16px] leading-snug text-[#0F172A]">
                {abstract.paragraphs.map((para, i) => (
                  <p key={i}>
                    {para.map(([text, bold], j) => (bold ? <strong key={j} className="font-semibold">{text}</strong> : <span key={j}>{text}</span>))}
                  </p>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {abstract.highlights.map((h, i) => {
                  const Icon = highlightIcons[h.icon as keyof typeof highlightIcons];
                  return (
                    <div key={i} className="flex flex-col gap-3 rounded-[8px] border border-[#CBD5E1] bg-[#F1F5F9] p-4 transition hover:border-[#2563EB]">
                      <span className="flex size-[44px] items-center justify-center rounded-[2px] border border-white bg-[#F0FDF4] text-[#16A34A]">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <h3 className="text-[16px] font-bold text-[#0F172A]">{h.title}</h3>
                      <p className="text-[11px] leading-snug text-[#475569]">{h.body}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <TableTitle>{abstract.riskTitle}</TableTitle>
                <DataTable head={abstract.riskHead} minWidth={820} centerFrom={1}>
                  {abstract.risks.map(([risk, sev, evalText, mitigation]) => (
                    <tr key={risk} className="transition hover:bg-[#F8FAFC]">
                      <Td className="w-[22%]">{risk}</Td>
                      <Td className="text-center"><Pill pill={sev} /></Td>
                      <Td>{evalText}</Td>
                      <Td>{mitigation}</Td>
                    </tr>
                  ))}
                </DataTable>
              </div>
            </Sheet>
          </div>
        )}

        {visible(3) && (
          <div id="rp-page-3" className="scroll-mt-4">
            <Sheet id="rp-sheet-s02" tag={demographics.tag} page={demographics.page} title={demographics.title} {...common}>
              <p className="-mt-3 text-[16px] leading-snug text-[#0F172A]">{demographics.intro}</p>
              <DataTable head={demographics.head} minWidth={760} centerFrom={1}>
                {demographics.rows.map((r) => (
                  <tr key={r[0]} className="transition hover:bg-[#F8FAFC]">
                    <Td className="w-[22%]">{r[0]}</Td>
                    <Td className="text-center">{r[1]}</Td>
                    <Td className="text-center">{r[2]}</Td>
                    <Td className="text-center">{r[3]}</Td>
                    <Td className={r[5]}>{r[4]}</Td>
                  </tr>
                ))}
              </DataTable>
              <TrafficPanel />
              <OpportunityVoid />
            </Sheet>
          </div>
        )}

        {visible(4) && (
          <div id="rp-page-4" className="flex scroll-mt-4 flex-col gap-6">
            <Sheet id="rp-sheet-s03" tag={competition.tag} page={competition.page} title={competition.title} {...common}>
              <section className="flex flex-col gap-3 rounded-[4px] border border-[#CBD5E1] bg-white/80 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-[19px] font-bold text-[#0F172A]">{competition.exhibitA}</h3>
                  <p className="text-[12px] text-[#475569]">{competition.perimeter}</p>
                </div>
                <Image
                  src={`${IMG}-map.png`}
                  alt="Spatial competition cartogram showing the primary trade ring"
                  width={1918}
                  height={820}
                  sizes="(min-width: 1024px) 1400px, 100vw"
                  className="aspect-[1918/820] w-full rounded-[8px] object-cover"
                />
                <p className="p-3 text-[12px] text-[#475569]">{competition.caption}</p>
              </section>
              <div>
                <TableTitle>{competition.tableTitle}</TableTitle>
                <DataTable head={competition.head} minWidth={820} centerFrom={1}>
                  {competition.rows.map(([name, cls, cat, dist, addr]) => (
                    <tr key={name} className="transition hover:bg-[#F8FAFC]">
                      <Td className="w-[22%]">{name}</Td>
                      <Td className="text-center"><Pill pill={cls} /></Td>
                      <Td className="text-center">{cat}</Td>
                      <Td className="text-center">{dist}</Td>
                      <Td className="text-center">{addr}</Td>
                    </tr>
                  ))}
                </DataTable>
              </div>
              <div className="flex flex-col gap-2 rounded-[8px] bg-[#F1F5F9] p-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-5 shrink-0 text-[#2563EB]" aria-hidden />
                  <h3 className="text-[16px] font-bold text-[#2563EB]">{competition.aiTitle}</h3>
                </div>
                <p className="text-[12px] leading-snug text-[#475569]">{competition.aiBody}</p>
              </div>
            </Sheet>

            <Sheet id="rp-sheet-s04" tag={spatial.tag} page={spatial.page} title={spatial.title} {...common}>
              <div className="grid grid-cols-1 gap-4 rounded-[4px] border border-[#CBD5E1] bg-white/80 p-4 lg:grid-cols-2">
                {[
                  { ...spatial.before, src: `${IMG}-shell.png`, brandTone: false },
                  { ...spatial.after, src: `${IMG}-concept.png`, brandTone: true },
                ].map((ex) => (
                  <figure key={ex.title} className="flex flex-col gap-3 rounded-[12px] border border-[#CBD5E1] bg-[#F8FAFC] p-4">
                    <div className={cn("flex flex-wrap items-center justify-between gap-2", ex.brandTone ? "text-[#2563EB]" : "text-[#0F172A]")}>
                      <h3 className="text-[19px] font-bold">{ex.title}</h3>
                      <span className={cn("text-[12px]", ex.brandTone ? "" : "text-[#475569]")}>{ex.tag}</span>
                    </div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] lg:aspect-auto lg:h-[250px]">
                      <Image src={ex.src} alt={ex.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <figcaption className={cn("p-3 text-[12px]", ex.brandTone ? "text-[#2563EB]" : "text-[#475569]")}>{ex.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <div>
                <TableTitle>{spatial.tableTitle}</TableTitle>
                <DataTable head={spatial.head} minWidth={820} centerFrom={1}>
                  {spatial.rows.map(([zone, pill, pct, [seat, seatClass], equip], i) => (
                    <tr key={i} className="transition hover:bg-[#F8FAFC]">
                      <Td className="w-[22%]">{zone}</Td>
                      <Td className="text-center"><Pill pill={pill} /></Td>
                      <Td>{pct}</Td>
                      <Td className={seatClass}>{seat}</Td>
                      <Td>{equip}</Td>
                    </tr>
                  ))}
                </DataTable>
              </div>
              <TrafficPanel />
              <OpportunityVoid />
            </Sheet>
          </div>
        )}

        {visible(5) && (
          <div id="rp-page-5" className="scroll-mt-4">
            <Sheet id="rp-sheet-s05" tag={mep.tag} page={mep.page} title={mep.title} {...common}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {mep.cards.map((c) => {
                  const Icon = mepIcons[c.icon as keyof typeof mepIcons];
                  return (
                    <div key={c.name} className="flex flex-col gap-3 rounded-[4px] bg-[#F1F5F9] p-4 transition hover:shadow-sm">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex min-w-0 items-start gap-2">
                          <span className="rounded-[4px] p-2" style={{ backgroundColor: c.tint, color: c.color }}>
                            <Icon className="size-5" aria-hidden />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[14px] font-medium text-[#0F172A]">{c.name}</p>
                            <p className="text-[12px] text-[#475569]">{c.scope}</p>
                          </div>
                        </div>
                        <span className="shrink-0 rounded-[6px] bg-[#F0FDF4] px-2 py-1 text-[11px] text-[#15803D]">{mep.badge}</span>
                      </div>
                      <dl className="flex flex-col gap-2 text-[13px]">
                        {c.lines.map(([k, v]) => (
                          <div key={k} className="flex gap-1">
                            <dt className="shrink-0 font-medium text-[#0F172A]">{k}</dt>
                            <dd className="text-[#475569]">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  );
                })}
              </div>
              <section className="flex flex-col gap-4 rounded-[8px] bg-[#F1F5F9] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-[16px] font-semibold text-[#0F172A]">{mep.assumptionsTitle}</h3>
                  <span className="text-[13px] font-medium text-[#2563EB]">{mep.verification}</span>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {mep.tiers.map((t) => {
                    const Icon = tierIcons[t.icon as keyof typeof tierIcons];
                    return (
                      <div key={t.title} className="flex flex-col gap-3 rounded-[4px] bg-[#F8FAFC] p-4">
                        <div className={cn("flex items-center gap-2", t.titleClass)}>
                          <Icon className="size-4 shrink-0" aria-hidden />
                          <h4 className="text-[14px] font-medium">{t.title}</h4>
                        </div>
                        <ul className="flex flex-col gap-2 text-[12px]">
                          {t.items.map(([k, v], i) => (
                            <li key={i} className="flex gap-1">
                              <span aria-hidden className="text-[#475569]">–</span>
                              <span className="text-[#475569]">
                                {t.labelled && <>{k} </>}
                                {t.labelled ? <b className="font-medium text-[#0F172A]">{v}</b> : v}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <p className="flex items-start gap-2 rounded-[8px] border border-[#F59E0B]/50 bg-[#FFFBEB] p-4 text-[13px] font-semibold text-[#F59E0B]">
                  <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden /> {mep.disclaimer}
                </p>
              </section>
            </Sheet>
          </div>
        )}

        {visible(6) && (
          <div id="rp-page-6" className="scroll-mt-4">
            <Sheet id="rp-sheet-s06" tag={capex.tag} page={capex.page} title={capex.title} {...common}>
              <DataTable head={capex.head} minWidth={1000} centerFrom={1}>
                {capex.rows.map(([trade, scope, pill, basis, low, exp, high, rsf], i) => (
                  <tr key={i} className="transition hover:bg-[#F8FAFC]">
                    <Td className="w-[24%]">
                      <p className="text-[13px] font-medium">{trade}</p>
                      <p className="mt-1 text-[12px] font-normal text-[#475569]">{scope}</p>
                    </Td>
                    <Td className="text-center"><Pill pill={pill} large /></Td>
                    <Td className="text-center">{basis}</Td>
                    <Td className="text-center text-[#475569]">{low}</Td>
                    <Td className="text-center">{exp}</Td>
                    <Td className="text-center text-[#475569]">{high}</Td>
                    <Td className="text-center text-[#475569]">{rsf}</Td>
                  </tr>
                ))}
                <tr className="bg-white/80">
                  <td className="px-3 py-4 text-[16px] font-medium text-[#0F172A]" colSpan={3}>{capex.total[0]}</td>
                  {capex.total.slice(1).map((v, i) => (
                    <td key={i} className="px-3 py-4 text-center text-[12px] font-medium text-[#475569]">{v}</td>
                  ))}
                </tr>
              </DataTable>
              <section className="flex flex-col gap-4 rounded-[8px] bg-[#CBD5E1] p-4">
                <h3 className="text-[16px] font-semibold text-[#0F172A]">{capex.stackTitle}</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {capex.stack.map((s) => (
                    <div key={s.label} className="flex flex-col gap-2 rounded-[4px] bg-[#F8FAFC] p-4">
                      <p className="text-[13px] text-[#475569]">{s.label}</p>
                      <p className="text-[16px] font-semibold text-[#0F172A]">{s.value}</p>
                      <p className="text-[12px] text-[#475569]">{s.note}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Sheet>
          </div>
        )}

        {visible(7) && (
          <div id="rp-page-7" className="scroll-mt-4">
            <Sheet id="rp-sheet-s07" tag={proForma.tag} page={proForma.page} title={proForma.title} {...common}>
              <p className="-mt-3 text-[13px] text-[#475569]">{proForma.intro}</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {proForma.tiles.map((t) => (
                  <StatTile key={t.label} {...t} />
                ))}
              </div>
              <DataTable head={proForma.head} minWidth={900} centerFrom={1}>
                {proForma.rows.map(([metric, y1, y2, y3, y4, y5, rsf]) => (
                  <tr key={metric} className="transition hover:bg-[#F8FAFC]">
                    <Td className="w-[24%] text-[13px]">{metric}</Td>
                    <Td className="text-center"><Pill pill={y1} large /></Td>
                    <Td className="text-center"><Pill pill={y2} large /></Td>
                    <Td className="text-center text-[#475569]">{y3}</Td>
                    <Td className="text-center">{y4}</Td>
                    <Td className="text-center text-[#475569]">{y5}</Td>
                    <Td className="text-center text-[#475569]">{rsf}</Td>
                  </tr>
                ))}
                <tr className="bg-[#F0FDF4]">
                  <td className="px-3 py-3 text-[13px] font-medium text-[#0F172A]">{proForma.total[0]}</td>
                  {proForma.total.slice(1, 6).map((v, i) => (
                    <td key={i} className="px-3 py-3 text-center text-[12px] font-bold text-[#16A34A]">{v}</td>
                  ))}
                  <td className="px-3 py-3 text-center text-[12px] font-medium text-[#475569]">{proForma.total[6]}</td>
                </tr>
              </DataTable>
            </Sheet>
          </div>
        )}

        {visible(8) && (
          <div id="rp-page-8" className="scroll-mt-4">
            <Sheet id="rp-sheet-s08" tag={roadmap.tag} page={roadmap.page} title={roadmap.title} {...common}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {roadmap.cards.map((c) => (
                  <div key={c.title} className="flex flex-col gap-2 rounded-[8px] bg-[#F1F5F9] p-5">
                    <h3 className="text-[16px] font-bold text-[#0F172A]">{c.title}</h3>
                    <p className="text-[12px] leading-snug text-[#475569]">
                      {c.parts.map(([text, bold], i) => (bold ? <b key={i}>{text}</b> : <span key={i}>{text}</span>))}
                    </p>
                  </div>
                ))}
              </div>
              <section className="flex flex-col gap-5 border border-[#CBD5E1] bg-white/80 p-5">
                <h3 className="text-[16px] font-bold text-[#0F172A]">{roadmap.timelineTitle}</h3>
                <ol className="flex flex-col gap-5">
                  {roadmap.milestones.map((m) => (
                    <li key={m.title} className="flex flex-col gap-3 rounded-[8px] border-2 border-[#E2E8F0] bg-white p-4 transition hover:border-[#CBD5E1]">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className={cn("rounded-[6px] px-2 py-0.5 text-[11px] font-bold", m.weeksClass)}>{m.weeks}</span>
                        <p className="min-w-0 flex-1 text-[13px] font-bold text-[#0F172A]">{m.title}</p>
                        <span className={cn("rounded-[6px] px-2 py-0.5 text-[11px] font-bold", m.statusClass)}>{m.status}</span>
                      </div>
                      <div className={cn("h-3 w-full rounded-full", m.track)}>
                        <div className={cn("h-3 w-[7%] min-w-[64px] rounded-full", m.fill)} />
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </Sheet>
          </div>
        )}

        {visible(9) && (
          <div id="rp-page-9" className="scroll-mt-4">
            <Sheet id="rp-sheet-s09" tag={certification.tag} page={certification.page} title={certification.title} {...common}>
              <section className="flex flex-col gap-3 rounded-[8px] bg-[#F1F5F9] p-5">
                <h3 className="text-[16px] font-bold text-[#0F172A]">{certification.disclaimerTitle}</h3>
                <ul className="grid grid-cols-1 gap-3 text-[12px] text-[#475569] md:grid-cols-2">
                  {certification.sources.map(([k, v]) => (
                    <li key={k}>
                      <b className="font-bold text-[#0F172A]">{k}</b>
                      {v}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="flex flex-col gap-3 rounded-[8px] bg-[#F1F5F9] p-5">
                <h3 className="text-[16px] font-bold text-[#0F172A]">{certification.auditTitle}</h3>
                <p className="text-[13px] leading-snug text-[#475569]">{certification.auditBody}</p>
              </section>
              <hr className="border-[#DDDDDE]" />
              <section className="flex flex-col gap-8">
                <h3 className="text-[16px] font-bold text-[#0F172A]">{certification.signTitle}</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {certification.signers.map((s, i) => (
                    <div key={s.name} className={cn("flex flex-col gap-3", i === 1 && "md:items-center", i === 2 && "md:items-end")}>
                      <div className="h-px w-full bg-[#DDDDDE] md:w-[160px]" />
                      <p className="text-[16px] italic text-black">{certification.signed}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {certification.signers.map((s) => (
                    <div key={s.name} className="flex flex-col gap-2">
                      <p className="text-[16px] font-bold text-[#0F172A]">{s.name}</p>
                      <p className="text-[16px] italic text-black">{s.role}</p>
                      <p className="text-[12px] text-[#475569]">{s.org}</p>
                    </div>
                  ))}
                </div>
                <hr className="border-[#DDDDDE]" />
                <div className="grid grid-cols-1 gap-3 text-[13px] font-medium text-[#475569] md:grid-cols-3">
                  <p>{certification.footer[0]}</p>
                  <p className="md:text-center">{certification.footer[1]}</p>
                  <p className="md:text-right">{certification.footer[2]}</p>
                </div>
              </section>
            </Sheet>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPreviewTab;
