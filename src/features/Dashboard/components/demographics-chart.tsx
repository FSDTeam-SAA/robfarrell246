"use client";

import React, { useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

type ChartTab = "rent" | "traffic" | "demand";

export function DemographicsChart() {
  const [activeTab, setActiveTab] = useState<ChartTab>("rent");

  const tabData = {
    rent: {
      headline: "$56 / SF / yr",
      change: "+7.4% YoY",
      extra: "Vacancy: 3.8% (Tight)",
      yLabels: ["58", "56", "54", "52", "50"],
      points: [
        { month: "Oct", val: 51.5, yPos: 160 },
        { month: "Nov", val: 53.8, yPos: 130 },
        { month: "Dec", val: 52.2, yPos: 150 },
        { month: "Jan", val: 55.4, yPos: 95 },
        { month: "Feb", val: 53.6, yPos: 135 },
        { month: "Mar", val: 57.2, yPos: 65 },
      ],
      pathD: "M 0 160 L 90 130 L 180 150 L 270 95 L 360 135 L 450 65",
      areaD: "M 0 160 L 90 130 L 180 150 L 270 95 L 360 135 L 450 65 L 450 200 L 0 200 Z",
    },
    traffic: {
      headline: "142k / mo",
      change: "+12.1% YoY",
      extra: "Peak: Fri-Sun 6PM",
      yLabels: ["160k", "140k", "120k", "100k", "80k"],
      points: [
        { month: "Oct", val: 110, yPos: 140 },
        { month: "Nov", val: 125, yPos: 115 },
        { month: "Dec", val: 155, yPos: 55 },
        { month: "Jan", val: 130, yPos: 105 },
        { month: "Feb", val: 138, yPos: 90 },
        { month: "Mar", val: 145, yPos: 75 },
      ],
      pathD: "M 0 140 L 90 115 L 180 55 L 270 105 L 360 90 L 450 75",
      areaD: "M 0 140 L 90 115 L 180 55 L 270 105 L 360 90 L 450 75 L 450 200 L 0 200 Z",
    },
    demand: {
      headline: "94.2 Score",
      change: "+4.8% YoY",
      extra: "Category: Prime Retail",
      yLabels: ["100", "90", "80", "70", "60"],
      points: [
        { month: "Oct", val: 82, yPos: 130 },
        { month: "Nov", val: 86, yPos: 110 },
        { month: "Dec", val: 88, yPos: 100 },
        { month: "Jan", val: 91, yPos: 80 },
        { month: "Feb", val: 92, yPos: 75 },
        { month: "Mar", val: 95, yPos: 55 },
      ],
      pathD: "M 0 130 L 90 110 L 180 100 L 270 80 L 360 75 L 450 55",
      areaD: "M 0 130 L 90 110 L 180 100 L 270 80 L 360 75 L 450 55 L 450 200 L 0 200 Z",
    },
  }[activeTab];

  return (
    <div className="bg-white/90 rounded-lg border border-slate-200/90 shadow-xs backdrop-blur-sm overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
        <h3 className="text-xl font-semibold font-['Montserrat'] text-slate-900">
          Top Tenant Properties
        </h3>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md text-sm font-medium font-['Montserrat']">
          Q1 2026
        </span>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Segmented Tab Controls */}
        <div className="p-1 bg-slate-100 rounded-md border border-slate-200/80 flex items-center gap-1">
          <button
            onClick={() => setActiveTab("rent")}
            className={cn(
              "flex-1 py-1.5 px-3 rounded text-xs font-medium font-['Montserrat'] transition-all",
              activeTab === "rent"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            )}
          >
            Rent $/SF
          </button>
          <button
            onClick={() => setActiveTab("traffic")}
            className={cn(
              "flex-1 py-1.5 px-3 rounded text-xs font-medium font-['Montserrat'] transition-all",
              activeTab === "traffic"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            )}
          >
            Foot Traffic
          </button>
          <button
            onClick={() => setActiveTab("demand")}
            className={cn(
              "flex-1 py-1.5 px-3 rounded text-xs font-medium font-['Montserrat'] transition-all",
              activeTab === "demand"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            )}
          >
            Demand Index
          </button>
        </div>

        {/* Highlight Stats Row */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold font-['Montserrat'] text-slate-900">
            {tabData.headline}
          </div>
          <div className="text-sm font-semibold font-['Montserrat'] text-emerald-600 flex items-center gap-1">
            <TrendingUp className="size-4" />
            <span>{tabData.change}</span>
          </div>
          <div className="text-xs font-normal font-['Montserrat'] text-slate-400">
            {tabData.extra}
          </div>
        </div>

        {/* Chart SVG Graphic */}
        <div className="flex items-stretch gap-3 pt-2">
          {/* Y Axis Labels */}
          <div className="flex flex-col justify-between items-end h-48 py-1 text-xs font-medium text-slate-400 font-['Montserrat']">
            {tabData.yLabels.map((lbl, idx) => (
              <span key={idx} className="leading-none">{lbl}</span>
            ))}
          </div>

          {/* Canvas Area with Grid */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="relative w-full h-48">
              {/* Background Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="w-full border-b border-dashed border-slate-200" />
                <div className="w-full border-b border-dashed border-slate-200" />
                <div className="w-full border-b border-dashed border-slate-200" />
                <div className="w-full border-b border-dashed border-slate-200" />
                <div className="w-full border-b border-slate-200" />
              </div>

              {/* Chart Curve */}
              <svg
                viewBox="0 0 450 200"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full overflow-visible"
              >
                <defs>
                  <linearGradient id="area-blue-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
                    <stop offset="85%" stopColor="#3B82F6" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Filled Area */}
                <path d={tabData.areaD} fill="url(#area-blue-gradient)" />

                {/* Line Path */}
                <path
                  d={tabData.pathD}
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points */}
                {tabData.points.map((pt, i) => (
                  <circle
                    key={i}
                    cx={i * 90}
                    cy={pt.yPos}
                    r="4"
                    fill="#2563EB"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    className="hover:scale-125 transition-transform"
                  />
                ))}
              </svg>
            </div>

            {/* X Axis Month Labels */}
            <div className="flex items-center justify-between pt-2 text-xs font-medium text-slate-400 font-['Montserrat']">
              {tabData.points.map((pt) => (
                <span key={pt.month}>{pt.month}</span>
              ))}
            </div>
          </div>
        </div>

        {/* View Full Demographics Button */}
        <button
          onClick={() => alert("Opening full demographics breakdown...")}
          className="w-full mt-2 py-3 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-800 text-sm font-semibold font-['Montserrat'] flex items-center justify-center gap-2 transition cursor-pointer shadow-xs"
        >
          <span>View Full Demographics & Competitors</span>
          <ArrowRight className="size-4 text-slate-600" />
        </button>
      </div>
    </div>
  );
}
