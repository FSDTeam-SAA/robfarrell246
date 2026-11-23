"use client";

import { useState } from "react";
import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnalysisCard, StatusBadge } from "../analysis-ui";
import {
  versionColumns,
  versionHistoryHeader,
  versionRows,
  versionSources,
} from "@/features/Project/api/version-history.data";

const VersionHistoryTab = () => {
  const [source, setSource] = useState<(typeof versionSources)[number]>(versionSources[0]);

  return (
    <AnalysisCard>
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-[#DDDDDE] p-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-bold leading-tight text-[#0F172A]">{versionHistoryHeader.title}</h3>
          <p className="mt-2.5 text-[13px] text-[#475569]">{versionHistoryHeader.description}</p>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-[13px] text-[#475569]">{versionHistoryHeader.totalLabel}</p>
          <p className="text-[16px] font-bold text-[#0F172A]">{versionHistoryHeader.total}</p>
        </div>
      </header>

      <div className="p-4">
        <div role="tablist" className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-[4px] border border-[#CBD5E1] bg-white p-1">
          {versionSources.map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={option === source}
              onClick={() => setSource(option)}
              className={cn(
                "rounded-[4px] px-3 py-1.5 text-[12px] font-medium transition",
                option === source
                  ? "bg-[#2563EB] text-white shadow-[0_1px_1.5px_rgba(0,0,0,0.1)]"
                  : "text-[#475569] hover:text-[#2563EB]",
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="overflow-x-auto rounded-[10px] border border-[#E2E8F0] bg-white">
          <table className="w-full min-w-[900px] border-collapse text-[12px]">
            <thead>
              <tr className="bg-[#E2E8F0]">
                {versionColumns.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={cn("px-5 py-3.5 font-normal text-[#252832]", i === 0 ? "text-left" : "text-center")}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {versionRows.map((row) => (
                <tr key={row.name} className="border-b border-[#DDDDDE] transition-colors last:border-b-0 hover:bg-[#F1F5F9]/60">
                  <td className="px-5 py-4 text-[#0F172A]">{row.name}</td>
                  <td className="px-5 py-4">
                    <span className="flex items-center justify-center gap-2 whitespace-nowrap text-[12px] text-[#252832]">
                      <Clock className="size-4" aria-hidden />
                      {row.date}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center text-[#0F172A]">{row.concept}</td>
                  <td className="px-5 py-4 text-center font-medium text-[#15803D]">{row.fitScore}</td>
                  <td className="px-5 py-4 text-center text-[#64748B]">{row.credits}</td>
                  <td className="px-5 py-4 text-center">
                    <StatusBadge tone="success">{row.status}</StatusBadge>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <button type="button" className="rounded-[6px] transition hover:opacity-80">
                      <StatusBadge tone="info">View</StatusBadge>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AnalysisCard>
  );
};

export default VersionHistoryTab;
