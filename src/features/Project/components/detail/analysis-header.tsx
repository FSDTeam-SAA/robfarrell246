import { ChevronRight, FileDown, MapPin, Repeat, Share2 } from "lucide-react";

import { projectInfo } from "@/features/Project/api/analysis-report.data";
import { StatusBadge } from "./analysis-ui";

const AnalysisHeader = ({ info = projectInfo }: { info?: typeof projectInfo }) => (
  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
    <div className="flex min-w-0 flex-col gap-3">
      <div className="flex items-center gap-1 text-[12px]">
        <span className="font-medium text-[#475569]">{info.breadcrumbParent}</span>
        <ChevronRight className="h-4 w-4 text-[#475569]" aria-hidden="true" />
        <span className="truncate font-bold text-[#2563EB]">{info.name}</span>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <p className="text-[12px] font-semibold text-[#0F172A]">{info.suite}</p>
        <StatusBadge tone="info">{info.version}</StatusBadge>
        <StatusBadge tone="success">● {info.status}</StatusBadge>
      </div>

      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 shrink-0 text-[#2563EB]" aria-hidden="true" />
        <h2 className="text-[16px] font-bold leading-tight text-[#0F172A]">{info.address}</h2>
      </div>

      <p className="text-[12px] font-medium text-[#475569]">{info.summary}</p>
    </div>

    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        className="inline-flex h-[42px] items-center justify-center gap-2 rounded-[2px] border border-white bg-[#F1F5F9] px-6 text-[13px] font-medium text-[#0F172A] transition hover:bg-[#E2E8F0]"
      >
        <FileDown className="h-4 w-4" aria-hidden="true" />
        Download Report
      </button>
      <button
        type="button"
        className="inline-flex h-[42px] items-center justify-center gap-2 rounded-[2px] border border-white bg-[#F1F5F9] px-6 text-[13px] font-medium text-[#0F172A] transition hover:bg-[#E2E8F0]"
      >
        <Share2 className="h-4 w-4" aria-hidden="true" />
        Share Brief
      </button>
      <button
        type="button"
        className="inline-flex h-[42px] items-center justify-center gap-2 rounded-[2px] bg-[#2563EB] px-6 text-[13px] font-medium text-[#F8FAFC] transition hover:bg-[#1D4ED8]"
      >
        <Repeat className="h-4 w-4" aria-hidden="true" />
        Re-run Analysis
      </button>
    </div>
  </div>
);

export default AnalysisHeader;
