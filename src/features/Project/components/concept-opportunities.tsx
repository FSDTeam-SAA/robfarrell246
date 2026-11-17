import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

import { ConceptOpportunity } from "../types/project.types";

interface ConceptOpportunitiesProps {
  concepts: ConceptOpportunity[];
  activeRank: number;
  onSelect: (rank: number) => void;
}

export function ConceptOpportunities({ concepts, activeRank, onSelect }: ConceptOpportunitiesProps) {
  return (
    <section className="rounded-[8px] border border-[#CBD5E1] bg-[#E2E8F0]/70 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 text-[14px] font-semibold text-text-primary">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
          AI Evaluated Tenant Opportunities (3 Concepts Ranked)
        </h3>
        <p className="text-[12px] font-medium text-text-brand">Active: Concept #{activeRank}</p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {concepts.map((concept) => {
          const active = concept.rank === activeRank;
          return (
            <button
              key={concept.rank}
              type="button"
              aria-pressed={active}
              onClick={() => onSelect(concept.rank)}
              className={cn(
                "flex flex-col gap-3 rounded-[8px] border-2 bg-white p-3 text-left transition",
                active ? "border-text-brand" : "border-transparent hover:border-[#CBD5E1]",
              )}
            >
              <span className="flex items-center gap-2 text-[12px] text-[#475569]">
                <span className="rounded-[4px] bg-bg-success-subtle px-2 py-0.5 text-[11px] font-bold text-status-success">
                  #{concept.rank} Match
                </span>
                {concept.category}
              </span>
              <span className="flex items-end justify-between gap-3">
                <span className="text-[18px] font-bold leading-tight text-text-primary">{concept.title}</span>
                <span className="shrink-0 text-right">
                  <span className="block text-[16px] font-bold text-status-success">
                    {concept.fitScore} / 100
                  </span>
                  <span className="block text-[12px] text-[#475569]">Fit Score</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
