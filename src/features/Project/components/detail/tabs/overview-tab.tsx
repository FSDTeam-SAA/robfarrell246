import { AlertTriangle, CheckCircle2, Minimize2, Settings2 } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { overviewData } from "@/features/Project/api/analysis-report.data";
import { AnalysisCard, AnalysisCardHeader, StatusBadge } from "../analysis-ui";

const statTone = {
  success: "text-[#16A34A]",
  brand: "text-[#2563EB]",
  default: "text-[#0F172A]",
} as const;

const mepTone = {
  success: { box: "bg-[#F0FDF4]", text: "text-[#16A34A]", Icon: CheckCircle2 },
  brand: { box: "bg-[#EFF6FF]", text: "text-[#2563EB]", Icon: Settings2 },
} as const;

const OverviewTab = () => {
  const { archetype, mep, strengths, risks } = overviewData;

  return (
    <div className="grid grid-cols-1 items-stretch gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,41%)]">
      <div className="flex min-w-0 flex-col gap-5">
        {/* Recommended archetype */}
        <AnalysisCard>
          <div className="border-b border-[#DDDDDE] p-4">
            <div className="flex flex-wrap items-center gap-4">
              <StatusBadge tone="success">{archetype.badge}</StatusBadge>
              <span className="text-[12px] font-medium text-[#475569]">{archetype.category}</span>
            </div>
            <h3 className="mt-4 text-[16px] font-bold text-[#0F172A]">{archetype.title}</h3>
            <p className="mt-3 text-[13px] leading-snug text-[#475569]">{archetype.description}</p>
          </div>

          <div className="flex flex-col gap-3 p-5">
            <div className="rounded-[8px] bg-[#F1F5F9] p-3">
              <p className="text-[13px] font-semibold text-[#2563EB]">{archetype.demographic.title}</p>
              <p className="mt-2 text-[12px] text-[#475569]">{archetype.demographic.text}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center lg:grid-cols-4">
              {archetype.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-end gap-2 rounded-[8px] bg-[#F1F5F9] p-3">
                  <p className="w-full text-[12px] text-[#475569]">{stat.label}</p>
                  <p className={cn("w-full text-[13px] font-semibold", statTone[stat.tone])}>{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-[#CBD5E1]" />

            <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#475569]">
              <p>
                Timeline to Opening: <span className="font-bold">{archetype.timeline}</span>
              </p>
              <p>
                Report Status: <span className="font-bold">{archetype.reportStatus}</span>
              </p>
            </div>
          </div>
        </AnalysisCard>

        {/* MEP audit */}
        <AnalysisCard>
          <AnalysisCardHeader title={mep.title} />
          <div className="grid grid-cols-1 gap-3 p-5 md:grid-cols-3">
            {mep.items.map((item) => {
              const { box, text, Icon } = mepTone[item.tone];
              return (
                <div key={item.title} className={cn("flex flex-col gap-4 rounded-[8px] border border-[#CBD5E1] p-4", box)}>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", text)} aria-hidden="true" />
                      <p className={cn("text-[12px] font-medium", text)}>{item.title}</p>
                    </div>
                    <div className="h-px w-full bg-[#CBD5E1]" />
                  </div>
                  <p className="text-[11px] leading-snug text-[#475569]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </AnalysisCard>

        {/* Strengths + risks */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <InsightCard
            title="Core Conversion Strengths"
            titleClass="text-[#16A34A]"
            items={strengths}
            icon={<CheckCircle2 className="h-4 w-4 shrink-0 text-[#16A34A]" aria-hidden="true" />}
          />
          <InsightCard
            title="Identified Commercial Risks & Mitigations"
            titleClass="text-[#F59E0B]"
            items={risks}
            icon={<AlertTriangle className="h-4 w-4 shrink-0 text-[#F59E0B]" aria-hidden="true" />}
          />
        </div>
      </div>

      {/* Photo */}
      <div className="relative min-h-[360px] overflow-hidden border border-[#CBD5E1] xl:min-h-0">
        <Image
          src="/assets/images/taproom-interior.png"
          alt="Fast casual taproom interior rendering"
          fill
          sizes="(min-width: 1280px) 40vw, 100vw"
          className="object-cover"
          priority
        />
        <button
          type="button"
          className="absolute left-4 top-4 inline-flex h-[42px] items-center gap-2 rounded-[2px] border border-white bg-[#0F172A]/20 px-6 text-[13px] font-medium text-white backdrop-blur-sm transition hover:bg-[#0F172A]/40"
        >
          <Minimize2 className="h-5 w-5" aria-hidden="true" />
          Full Preview
        </button>
      </div>
    </div>
  );
};

const InsightCard = ({
  title,
  titleClass,
  items,
  icon,
}: {
  title: string;
  titleClass: string;
  items: readonly { title: string; text: string }[];
  icon: React.ReactNode;
}) => (
  <AnalysisCard className="rounded-[8px] p-4">
    <h4 className={cn("border-b border-[#CBD5E1] pb-2 text-[13px] font-semibold", titleClass)}>{title}</h4>
    <ul className="mt-4 flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.title} className="flex items-start gap-1.5">
          <span className="mt-0.5">{icon}</span>
          <p className="text-[12px] leading-snug text-[#475569]">
            <span className="font-semibold">{item.title}</span> {item.text}
          </p>
        </li>
      ))}
    </ul>
  </AnalysisCard>
);

export default OverviewTab;
