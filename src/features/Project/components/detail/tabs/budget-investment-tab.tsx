import { TriangleAlert } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  budgetDisclaimer,
  budgetEstimates,
  budgetHeader,
  budgetNotice,
  budgetRows,
  budgetSources,
  budgetSummary,
  type BudgetSource,
} from "@/features/Project/api/budget-investment.data";
import { AnalysisCard, BadgeTone, StatusBadge } from "../analysis-ui";

const sourceTone: Record<BudgetSource, BadgeTone> = {
  "Estimated / Assumed": "warning",
  "Third-Party Data": "success",
  "User Provided": "info",
};

const sourceCardStyles = {
  brand: { box: "border-[#3B82F6] bg-[#EFF6FF]", title: "text-[#2563EB]", badge: "bg-[#2563EB]/10 text-[#2563EB]" },
  success: { box: "border-[#16A34A] bg-[#F0FDF4]", title: "text-[#15803D]", badge: "bg-[#16A34A]/10 text-[#16A34A]" },
  warning: { box: "border-[#F59E0B] bg-[#FFFBEB]", title: "text-[#D97706]", badge: "bg-[#D97706]/10 text-[#D97706]" },
} as const;

const BudgetInvestmentTab = () => (
  <AnalysisCard>
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DDDDDE] p-4">
      <div className="min-w-0 flex-1">
        <h3 className="text-[16px] font-bold leading-tight text-[#0F172A]">{budgetHeader.title}</h3>
        <p className="mt-2 text-[13px] text-[#475569]">{budgetHeader.description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[13px] text-[#475569]">{budgetHeader.totalLabel}</p>
        <p className="text-[16px] font-bold text-[#0F172A]">{budgetHeader.total}</p>
      </div>
    </header>

    <div className="flex flex-col gap-4 p-4">
      <div role="note" className="flex flex-col gap-3 rounded-[8px] border border-[#F59E0B] bg-[#FFFBEB] p-3">
        <div className="flex items-center gap-2">
          <TriangleAlert className="size-4 shrink-0 text-[#F59E0B]" aria-hidden />
          <p className="text-[13px] font-semibold text-[#F59E0B]">{budgetNotice.title}</p>
        </div>
        <p className="text-[12px] leading-snug text-[#64748B]">{budgetNotice.body}</p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {budgetSources.map((s) => {
          const st = sourceCardStyles[s.tone];
          return (
            <article
              key={s.title}
              className={cn("flex flex-col gap-2.5 rounded-[8px] border p-3 backdrop-blur-[10px]", st.box)}
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className={cn("text-[13px] font-medium", st.title)}>{s.title}</h4>
                <span className={cn("whitespace-nowrap rounded-[6px] px-2 py-0.5 text-[11px] font-medium", st.badge)}>
                  {s.badge}
                </span>
              </div>
              <p className="text-[19px] font-bold text-[#0F172A]">{s.value}</p>
              <p className="text-[13px] text-[#475569]">{s.description}</p>
            </article>
          );
        })}
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {budgetEstimates.map((e) => (
          <div
            key={e.label}
            className="flex flex-col gap-2.5 rounded-[8px] border border-[#CBD5E1] bg-white/80 p-3 backdrop-blur-[10px]"
          >
            <p className="text-[13px] text-[#475569]">{e.label}</p>
            <p className="text-[19px] font-bold text-[#0F172A]">{e.value}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="p-4 pt-0">
      <div className="overflow-x-auto rounded-[8px] border border-[#E2E8F0] bg-white">
        <table className="w-full min-w-[960px] border-collapse text-[12px]">
          <thead>
            <tr className="border-b border-[#DDDDDE] bg-[#E2E8F0] text-[#252832]">
              <th scope="col" className="w-[22%] px-4 py-3 text-left font-normal">Cost Category</th>
              <th scope="col" className="px-3 py-3 text-center font-normal">Data Source</th>
              <th scope="col" className="px-3 py-3 text-center font-normal">Low</th>
              <th scope="col" className="px-3 py-3 text-center font-normal">Expected</th>
              <th scope="col" className="px-3 py-3 text-center font-normal">High</th>
              <th scope="col" className="w-[32%] px-3 py-3 text-left font-normal">Scope &amp; Notes</th>
            </tr>
          </thead>
          <tbody>
            {budgetRows.map((r) => (
              <tr key={r.category} className="border-b border-[#DDDDDE] transition-colors last:border-b-0 hover:bg-[#F1F5F9]/70">
                <th scope="row" className="px-4 py-3.5 text-left font-normal text-[#0F172A]">{r.category}</th>
                <td className="px-3 py-3.5 text-center">
                  <StatusBadge tone={sourceTone[r.source]}>{r.source}</StatusBadge>
                </td>
                <td className="px-3 py-3.5 text-center text-[#64748B]">{r.low}</td>
                <td className="px-3 py-3.5 text-center text-black">{r.expected}</td>
                <td className="px-3 py-3.5 text-center text-[#64748B]">{r.high}</td>
                <td className="px-3 py-3.5 text-[#64748B]">{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="p-4 pt-0">
      <section className="flex flex-col gap-3 rounded-[8px] bg-[#F1F5F9] p-3">
        <h4 className="text-[16px] font-bold text-[#0F172A]">{budgetSummary.title}</h4>
        <dl className="flex flex-col gap-2 py-2 text-[14px] text-[#475569]">
          {budgetSummary.lines.map((l) => (
            <div key={l.label} className="flex items-center justify-between gap-3">
              <dt>{l.label}</dt>
              <dd className="whitespace-nowrap">{l.value}</dd>
            </div>
          ))}
          <div className="my-1 h-px w-full bg-[#CBD5E1]" />
          <div className="flex items-center justify-between gap-3 font-semibold">
            <dt>{budgetSummary.netLabel}</dt>
            <dd className="whitespace-nowrap">{budgetSummary.net}</dd>
          </div>
        </dl>
      </section>
    </div>

    <footer className="flex justify-center p-4 pt-2">
      <p className="max-w-[750px] text-center text-[13px] text-[#64748B]">{budgetDisclaimer}</p>
    </footer>
  </AnalysisCard>
);

export default BudgetInvestmentTab;
