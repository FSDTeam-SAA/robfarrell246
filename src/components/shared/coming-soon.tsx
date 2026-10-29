"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft, Clock } from "lucide-react";

interface ComingSoonProps {
  title?: string;
  description?: string;
  badge?: string;
}

export function ComingSoon({
  title = "Coming Soon",
  description = "This feature is currently under active development and will be available soon.",
  badge = "COMING SOON",
}: ComingSoonProps) {
  return (
    <div className="w-full min-h-[520px] flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-xl bg-bg-surface rounded-2xl border border-slate-200/80 p-8 sm:p-12 text-center shadow-xs flex flex-col items-center justify-center gap-5">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold font-['Montserrat'] tracking-wide">
          <Clock className="size-3.5" />
          <span>{badge}</span>
        </div>

        {/* Icon Circle */}
        <div className="size-20 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2563eb] shadow-xs my-2">
          <Sparkles className="size-10 stroke-[1.8]" />
        </div>

        {/* Heading */}
        <div className="space-y-2 max-w-md">
          <h2 className="text-text-primary text-2xl sm:text-3xl font-bold font-['Montserrat'] tracking-tight">
            {title}
          </h2>
          <p className="text-text-secondary text-sm sm:text-base font-normal font-['Montserrat'] leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#2563eb] hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-medium font-['Montserrat'] shadow-xs transition cursor-pointer"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
