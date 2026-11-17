"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { fitScoreColumns, fitScoreHeader, fitScoreRows, sourceFilters, SourceFilter } from "@/features/Project/api/fit-score.data";
import { AnalysisCard, StatusBadge } from "../analysis-ui";

const ScoreRing = ({ score }: { score: number }) => {
  const r = 17;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-8 shrink-0">
      <svg viewBox="0 0 40 40" className="size-full -rotate-90" aria-hidden>
        <circle cx="20" cy="20" r={r} fill="none" stroke="#E2E8F0" strokeWidth="3" />
        <circle
          cx="20"
          cy="20"
          r={r}
          fill="none"
          stroke="#16A34A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${(c * score) / 100} ${c}`}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-medium leading-none text-[#0F172A]">
        {score}%
      </span>
    </div>
  );
};

const FitScoreTab = () => {
  const [filter, setFilter] = useState<SourceFilter>("All Sources");
  const rows = filter === "All Sources" ? fitScoreRows : fitScoreRows.filter((r) => r.sourceCategory === filter);

  return (
    <AnalysisCard>
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-[#DDDDDE] px-5 py-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-bold leading-tight text-[#0F172A]">{fitScoreHeader.title}</h3>
          <p className="mt-2 text-[13px] leading-snug text-[#475569]">{fitScoreHeader.description}</p>
        </div>
        <div className="flex flex-col gap-2 text-right">
          <span className="text-[13px] text-[#475569]">{fitScoreHeader.totalLabel}</span>
          <span className="text-[19px] font-bold leading-none text-[#0F172A]">{fitScoreHeader.total}</span>
        </div>
      </header>

      <div className="p-5">
        <div role="tablist" className="mb-5 inline-flex max-w-full flex-wrap items-center gap-1 rounded-[4px] border border-[#CBD5E1] bg-white p-1">
          {sourceFilters.map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={option === filter}
              onClick={() => setFilter(option)}
              className={cn(
                "rounded-[4px] px-3 py-1.5 text-[11px] font-medium transition",
                option === filter ? "bg-[#2563EB] text-white" : "text-[#475569] hover:text-[#2563EB]",
              )}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto rounded-[8px] border border-[#CBD5E1]">
          <table className="w-full min-w-[960px] border-collapse text-[12px] text-[#0F172A]">
            <thead>
              <tr className="bg-[#E2E8F0]/70 text-[#475569]">
                {fitScoreColumns.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={cn("px-5 py-4 font-normal", i === 0 || i === 4 ? "text-left" : "text-center")}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.dataPoint} className="border-t border-[#DDDDDE] transition hover:bg-[#F1F5F9]/60">
                  <td className="px-5 py-3.5">{row.dataPoint}</td>
                  <td className="px-5 py-3.5 text-center">{row.value}</td>
                  <td className="px-5 py-3.5 text-center">
                    <StatusBadge tone={row.sourceTone}>{row.sourceType}</StatusBadge>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="mx-auto flex w-fit items-center gap-2.5">
                      <ScoreRing score={row.score} />
                      <div className="flex flex-col">
                        <span className="text-[12px] font-medium leading-tight text-[#16A34A]">{row.verification}</span>
                        <span className="text-[11px] leading-tight text-[#475569]">Analysis Complete</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-[#475569]">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AnalysisCard>
  );
};

export default FitScoreTab;
