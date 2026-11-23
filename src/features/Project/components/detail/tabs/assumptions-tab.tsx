import { fitFactors, compositeScore } from "@/features/Project/api/assumptions.data";
import { AnalysisCard } from "../analysis-ui";

const AssumptionsTab = () => (
  <AnalysisCard>
    <header className="flex flex-wrap items-start justify-between gap-4 border-b border-[#DDDDDE] p-4">
      <div className="min-w-0 flex-1">
        <h2 className="text-[16px] font-bold leading-tight text-[#0F172A]">
          Structured Fit Score Multi-Factor Breakdown
        </h2>
        <p className="mt-2.5 text-[13px] text-[#475569]">
          Algorithmically evaluated across 6 weighted spatial, financial, and trade-area dimensions.
        </p>
      </div>
      <div className="flex flex-col gap-2.5 whitespace-nowrap">
        <p className="text-[13px] text-[#475569]">Composite Score:</p>
        <p className="text-[16px] font-bold leading-tight text-[#16A34A]">{compositeScore} / 100</p>
      </div>
    </header>

    <ul className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {fitFactors.map((factor) => (
        <li
          key={factor.label}
          className="flex flex-col gap-3 rounded-[8px] bg-[#F1F5F9] p-3 transition hover:shadow-sm"
        >
          <div className="flex min-h-[19px] items-center justify-between gap-2">
            <h3 className="text-[13px] font-bold text-[#0F172A]">{factor.label}</h3>
            <span className="whitespace-nowrap text-[12px] font-semibold text-[#16A34A]">{factor.score}/100</span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={factor.score}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={factor.label}
            className="h-3 w-full rounded-full bg-[#E2E8F0]"
          >
            <div className="h-3 rounded-full bg-[#16A34A]" style={{ width: `${factor.score}%` }} />
          </div>
          <p className="text-[12px] text-[#475569]">{factor.note}</p>
        </li>
      ))}
    </ul>

    <div className="p-4 pt-0">
      <div className="flex flex-col gap-3 rounded-[8px] bg-[#F1F5F9] p-4">
        <h3 className="text-[16px] font-bold text-[#0F172A]">Transparent Algorithmic Scoring</h3>
        <p className="text-[12px] text-[#64748B]">
          AI provides natural language explanations, but the score is derived from deterministic demographic models,
          MEP inspection logs, and verified construction indices.
        </p>
      </div>
    </div>
  </AnalysisCard>
);

export default AssumptionsTab;
