import { cn } from "@/lib/utils";

import { AnalysisTabId, analysisTabs } from "@/features/Project/api/analysis-report.data";

const AnalysisTabs = ({
  activeTab,
  onChange,
}: {
  activeTab: AnalysisTabId;
  onChange: (tab: AnalysisTabId) => void;
}) => (
  <nav
    aria-label="Analysis sections"
    className="flex gap-1.5 overflow-x-auto rounded-[4px] border border-[#EFF6FF] bg-white p-1.5"
  >
    {analysisTabs.map((tab) => {
      const active = tab.id === activeTab;
      return (
        <button
          key={tab.id}
          type="button"
          aria-current={active ? "page" : undefined}
          onClick={() => onChange(tab.id)}
          className={cn(
            "h-9 shrink-0 rounded-[4px] px-6 text-[13px] font-medium transition",
            active
              ? "bg-[#2563EB] text-white shadow-[0_1px_1.5px_rgba(0,0,0,0.1)]"
              : "text-[#475569] hover:text-[#2563EB]",
          )}
        >
          {tab.label}
        </button>
      );
    })}
  </nav>
);

export default AnalysisTabs;
