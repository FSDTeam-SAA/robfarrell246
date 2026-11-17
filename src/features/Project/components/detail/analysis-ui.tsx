import { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** White glass card used across every analysis tab (Figma "Table" frame). */
export const AnalysisCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <section
    className={cn(
      "overflow-hidden rounded-[4px] border border-[#CBD5E1] bg-white/80 backdrop-blur-[10px]",
      className,
    )}
  >
    {children}
  </section>
);

/** Card header row: bold title + optional description + optional right slot. */
export const AnalysisCardHeader = ({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) => (
  <header
    className={cn(
      "flex flex-wrap items-center justify-between gap-4 border-b border-[#DDDDDE] px-5 py-4",
      className,
    )}
  >
    <div className="min-w-0 flex-1">
      <h3 className="text-[16px] font-bold leading-tight text-[#0F172A]">{title}</h3>
      {description && <p className="mt-2 text-[13px] leading-snug text-[#475569]">{description}</p>}
    </div>
    {children}
  </header>
);

const badgeTones = {
  success: "bg-[#F0FDF4] text-[#16A34A]",
  info: "bg-[#F0F9FF] text-[#3157D5]",
  brand: "bg-[#EFF6FF] text-[#2563EB]",
  warning: "bg-[#FFFBEB] text-[#D97706]",
  danger: "bg-[#FEF2F2] text-[#DC2626]",
  neutral: "bg-[#F1F5F9] text-[#475569]",
} as const;

export type BadgeTone = keyof typeof badgeTones;

export const StatusBadge = ({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 whitespace-nowrap rounded-[6px] px-2 py-0.5 text-[11px] font-medium leading-[16px]",
      badgeTones[tone],
      className,
    )}
  >
    {children}
  </span>
);

const valueTones = {
  default: "text-[#0E1224]",
  brand: "text-[#2563EB]",
  success: "text-[#16A34A]",
  warning: "text-[#F59E0B]",
  danger: "text-[#DC2626]",
} as const;

export type ValueTone = keyof typeof valueTones;

/** KPI tile: label / big value / divider / footnote (used by Market + Competition tabs). */
export const MetricCard = ({
  label,
  value,
  note,
  valueTone = "default",
  noteTone = "neutral",
}: {
  label: string;
  value: string;
  note: string;
  valueTone?: ValueTone;
  noteTone?: "neutral" | "success";
}) => (
  <div className="flex flex-col gap-3 rounded-[8px] border border-[#CBD5E1] bg-white/80 p-4 backdrop-blur-[10px]">
    <p className="text-[11px] font-medium text-[#475569]">{label}</p>
    <p className={cn("text-[19px] font-bold leading-none", valueTones[valueTone])}>{value}</p>
    <div className="h-px w-full bg-[#CBD5E1]" />
    <p className={cn("text-[11px] font-bold", noteTone === "success" ? "text-[#16A34A]" : "text-[#475569]")}>
      {note}
    </p>
  </div>
);

/** Segmented control (radius ring, map/list view, slider modes ...). */
export const SegmentedControl = <T extends string>({
  options,
  value,
  onChange,
  label,
  className,
}: {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  label?: string;
  className?: string;
}) => (
  <div
    className={cn(
      "inline-flex items-center gap-2 rounded-[4px] border border-[#CBD5E1] bg-white px-2 py-1",
      className,
    )}
  >
    {label && <span className="text-[13px] font-medium text-[#475569]">{label}</span>}
    {options.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => onChange(option)}
        className={cn(
          "rounded-[4px] px-3 py-1.5 text-[11px] font-medium transition",
          option === value
            ? "bg-[#2563EB] text-white shadow-[0_1px_1.5px_rgba(0,0,0,0.1)]"
            : "text-[#475569] hover:text-[#2563EB]",
        )}
      >
        {option}
      </button>
    ))}
  </div>
);
