import React from "react";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  tag?: string;
  tagVariant?: "indigo" | "green" | "amber";
  subtitle?: string;
  linkText?: string;
  icon: LucideIcon;
  iconColor?: "blue" | "green" | "amber";
  sparklineColor?: "blue" | "green" | "amber";
}

export function MetricCard({
  title,
  value,
  tag,
  tagVariant = "indigo",
  subtitle,
  linkText,
  icon: Icon,
  iconColor = "blue",
  sparklineColor = "blue",
}: MetricCardProps) {
  const iconStyles = {
    blue: "bg-blue-50/80 border-blue-200 text-blue-600",
    green: "bg-emerald-50/80 border-emerald-300 text-emerald-600",
    amber: "bg-amber-50/80 border-amber-300 text-amber-600",
  }[iconColor];

  const tagStyles = {
    indigo: "bg-indigo-50/70 text-indigo-600 border-indigo-100",
    green: "bg-emerald-50 text-emerald-600 border border-emerald-300",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
  }[tagVariant];

  const sparklineStrokes = {
    blue: {
      stroke: "#3B82F6",
      fill: "url(#blue-gradient)",
    },
    green: {
      stroke: "#10B981",
      fill: "url(#green-gradient)",
    },
    amber: {
      stroke: "#F59E0B",
      fill: "url(#amber-gradient)",
    },
  }[sparklineColor];

  return (
    <div className="flex-1 min-w-[210px] p-4 bg-white/90 rounded-lg border border-slate-200/90 backdrop-blur-[10px] flex flex-col justify-between gap-2.5 shadow-xs hover:shadow-md transition">
      {/* Top Icon Row */}
      <div className="flex justify-between items-start">
        <div
          className={cn(
            "size-10 rounded-md border flex items-center justify-center transition-transform hover:scale-105",
            iconStyles
          )}
        >
          <Icon className="size-5" />
        </div>
      </div>

      {/* Main Metric Value & Wave */}
      <div className="relative flex justify-between items-end gap-2 pt-1">
        <div className="flex flex-col gap-0.5 z-10">
          <div className="text-2xl font-bold font-['Montserrat'] text-slate-900 leading-none">
            {value}
          </div>
          <div className="text-xs font-medium font-['Montserrat'] text-slate-500 mt-1">
            {title}
          </div>
          {tag && (
            <div className="mt-1">
              <span
                className={cn(
                  "inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-normal font-['Montserrat']",
                  tagStyles
                )}
              >
                {tag}
              </span>
            </div>
          )}
        </div>

        {/* Dynamic Sparkline Wave */}
        <div className="w-28 h-14 relative shrink-0">
          <svg
            viewBox="0 0 120 60"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            <defs>
              <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="green-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="amber-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {sparklineColor === "blue" && (
              <>
                <path
                  d="M0 45 C 20 45, 30 25, 45 35 C 60 45, 75 15, 90 28 C 105 40, 115 10, 120 5 L 120 60 L 0 60 Z"
                  fill={sparklineStrokes.fill}
                />
                <path
                  d="M0 45 C 20 45, 30 25, 45 35 C 60 45, 75 15, 90 28 C 105 40, 115 10, 120 5"
                  stroke={sparklineStrokes.stroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            )}

            {sparklineColor === "green" && (
              <>
                <path
                  d="M0 50 C 25 50, 40 30, 60 40 C 80 50, 95 20, 110 25 C 115 26, 118 15, 120 10 L 120 60 L 0 60 Z"
                  fill={sparklineStrokes.fill}
                />
                <path
                  d="M0 50 C 25 50, 40 30, 60 40 C 80 50, 95 20, 110 25 C 115 26, 118 15, 120 10"
                  stroke={sparklineStrokes.stroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            )}

            {sparklineColor === "amber" && (
              <>
                <path
                  d="M0 48 C 20 48, 35 32, 50 38 C 70 45, 85 22, 100 28 C 110 32, 115 18, 120 12 L 120 60 L 0 60 Z"
                  fill={sparklineStrokes.fill}
                />
                <path
                  d="M0 48 C 20 48, 35 32, 50 38 C 70 45, 85 22, 100 28 C 110 32, 115 18, 120 12"
                  stroke={sparklineStrokes.stroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </div>
      </div>

      {/* Bottom Separator & Footer */}
      <div className="pt-2 border-t border-slate-200">
        {subtitle && (
          <p className="text-[11px] font-medium font-['Montserrat'] text-slate-500 truncate">
            {subtitle}
          </p>
        )}
        {linkText && (
          <a
            href="#ledger"
            className="text-[11px] font-medium font-['Montserrat'] text-slate-500 hover:text-slate-800 flex items-center justify-between group transition"
          >
            <span>{linkText}</span>
            <ArrowRight className="size-3 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
          </a>
        )}
        {!subtitle && !linkText && (
          <div className="h-4 text-[11px] text-transparent select-none">&nbsp;</div>
        )}
      </div>
    </div>
  );
}
