"use client";

import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import {
  competitionViews,
  competitors,
  demographicKpis,
  mapLegend,
  RadiusRing,
  radiusRings,
} from "@/features/Project/api/analysis-report.data";
import { AnalysisCard, AnalysisCardHeader, MetricCard, SegmentedControl, StatusBadge } from "../analysis-ui";

const typeTone = {
  "Direct Competitor": "danger",
  "Indirect Competitor": "warning",
  "Complementary Business": "success",
} as const;

const CompetitionPoisTab = () => {
  const [ring, setRing] = useState<RadiusRing>("0.5 Mile");
  const [view, setView] = useState<(typeof competitionViews)[number]>("Interactive Map");
  const [query, setQuery] = useState("");

  const visible = competitors.filter((item) => item.name.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <AnalysisCard>
      <AnalysisCardHeader
        title="Trade Area Competition & Synergies"
        description="Spatial mapping of direct, indirect, and complementary retail operators."
      >
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-4 rounded-[4px] border border-[#DDDDDE] bg-[#F3F4F8] px-2 py-2 text-[11px] font-medium text-[#252832]"
          >
            All Establishment
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>
          <SegmentedControl options={competitionViews} value={view} onChange={setView} />
        </div>
      </AnalysisCardHeader>

      <div className="flex flex-col gap-6 p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {demographicKpis.map((kpi) => (
            <MetricCard key={kpi.label} {...kpi} />
          ))}
        </div>

        <div className="flex flex-col gap-5 rounded-[8px] border border-[#E2E8F0] bg-[#F1F5F9] p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SegmentedControl label="Radius Ring:" options={radiusRings} value={ring} onChange={setRing} />

            <div className="flex flex-wrap items-center gap-4">
              <label className="flex h-9 w-full items-center gap-2 rounded-[6px] border border-[#E2E8F0] bg-white px-3 sm:w-[397px]">
                <Search className="h-4 w-4 shrink-0 text-[#808080]" aria-hidden="true" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by property address, name or city..."
                  aria-label="Search competition"
                  className="min-w-0 flex-1 bg-transparent text-[12px] text-[#0F172A] outline-none placeholder:text-[#808080]"
                />
                <kbd className="rounded-[4px] border border-[#DDDDDE] bg-white px-2 py-0.5 text-[11px] text-[#808080]">⌘K</kbd>
              </label>
              <button
                type="button"
                className="inline-flex items-center gap-4 rounded-[4px] border border-[#DDDDDE] bg-[#F3F4F8] px-2 py-2 text-[11px] font-medium text-[#252832]"
              >
                All Types
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {view === "Interactive Map" ? (
            <div className="relative aspect-[863/254] min-h-[240px] w-full overflow-hidden rounded-[4px] bg-[#0B1220]">
              <Image
                src="/assets/images/competition-map.png"
                alt="Trade area map with radius rings around the subject property"
                fill
                sizes="(min-width: 1280px) 85vw, 100vw"
                className="object-cover"
              />
              <ul className="sr-only">
                {mapLegend.map((item) => (
                  <li key={item.label}>{item.label}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-[4px] border border-[#CBD5E1] bg-white">
              <table className="w-full min-w-[640px] text-left text-[12px]">
                <thead className="bg-[#F8FAFC] text-[11px] uppercase text-[#475569]">
                  <tr>
                    {["Business", "Type", "Category", "Distance", "Rating"].map((heading) => (
                      <th key={heading} className="px-4 py-3 font-semibold">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visible.map((item) => (
                    <tr key={item.name} className="border-t border-[#DDDDDE]">
                      <td className="px-4 py-3 font-semibold text-[#0F172A]">{item.name}</td>
                      <td className="px-4 py-3">
                        <StatusBadge tone={typeTone[item.type]}>{item.type}</StatusBadge>
                      </td>
                      <td className="px-4 py-3 text-[#475569]">{item.category}</td>
                      <td className="px-4 py-3 text-[#475569]">{item.distance}</td>
                      <td className="px-4 py-3 text-[#475569]">★ {item.rating}</td>
                    </tr>
                  ))}
                  {visible.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-4 py-8 text-center text-[#475569]">
                        No establishments match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AnalysisCard>
  );
};

export default CompetitionPoisTab;
