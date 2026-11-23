"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  demographicKpis,
  marketFacts,
  RadiusRing,
  radiusRings,
  spendingIndices,
} from "@/features/Project/api/analysis-report.data";
import { AnalysisCard, AnalysisCardHeader, MetricCard, SegmentedControl } from "../analysis-ui";

const indexTone = {
  brand: { border: "border-[#2563EB]", text: "text-[#2563EB]", bar: "bg-[#2563EB]" },
  success: { border: "border-[#16A34A]", text: "text-[#16A34A]", bar: "bg-[#16A34A]" },
  warning: { border: "border-[#F59E0B]", text: "text-[#F59E0B]", bar: "bg-[#F59E0B]" },
} as const;

/** Bar fill is relative to the strongest index so the bars read as a comparison. */
const MAX_INDEX = 200;

const MarketDemographicsTab = () => {
  const [ring, setRing] = useState<RadiusRing>("0.5 Mile");

  return (
    <AnalysisCard>
      <AnalysisCardHeader
        title="Trade Area Demographics & Consumer Demand"
        description="Verified demographic rings and retail consumer spending expenditure models from Esri ArcGIS & ACS."
      >
        <SegmentedControl label="Radius Ring:" options={radiusRings} value={ring} onChange={setRing} />
      </AnalysisCardHeader>

      <div className="flex flex-col gap-6 p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {demographicKpis.map((kpi) => (
            <MetricCard key={kpi.label} {...kpi} />
          ))}
        </div>

        <div className="flex flex-col gap-6 rounded-[8px] border border-[#E2E8F0] bg-[#F1F5F9] p-4">
          <div className="flex flex-wrap items-center gap-4">
            <h4 className="flex-1 text-[16px] font-bold text-[#0F172A]">
              Trade Area Consumer Spending Indices (National Baseline = 100)
            </h4>
            <p className="text-[12px] font-semibold text-[#16A34A]">Indexed Above National Average</p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {spendingIndices.map((item) => {
              const tone = indexTone[item.tone];
              return (
                <div key={item.name} className={cn("flex flex-col gap-4 rounded-[8px] border-2 bg-white p-4", tone.border)}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[13px] font-bold text-[#0F172A]">{item.name}</p>
                    <p className={cn("shrink-0 text-[12px] font-semibold", tone.text)}>Index {item.index}</p>
                  </div>
                  <div
                    className="h-4 w-full rounded-[27px] bg-[#EFF6FF]"
                    role="progressbar"
                    aria-label={`${item.name} index`}
                    aria-valuenow={item.index}
                    aria-valuemin={0}
                    aria-valuemax={MAX_INDEX}
                  >
                    <div
                      className={cn("h-4 rounded-[12px]", tone.bar)}
                      style={{ width: `${(item.index / MAX_INDEX) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-medium text-[#475569]">Annual Spend in Ring:</p>
                    <span className={cn("rounded-[6px] bg-[#EFF6FF] px-2 py-0.5 text-[11px] font-bold", tone.text)}>
                      {item.spend}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {marketFacts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-4 rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC] p-4">
              <p className="text-[12px] text-[#475569]">{fact.label}</p>
              <p className={cn("text-[16px] font-bold", fact.brand ? "text-[#2563EB]" : "text-[#0F172A]")}>{fact.value}</p>
              <div className="h-px w-full bg-[#CBD5E1]" />
              <p className="text-[12px] text-[#475569]">{fact.note}</p>
            </div>
          ))}
        </div>
      </div>
    </AnalysisCard>
  );
};

export default MarketDemographicsTab;
