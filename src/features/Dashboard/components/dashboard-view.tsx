"use client";

import React from "react";
import { Plus } from "lucide-react";
import { useDashboard } from "../hooks/use-dashboard";
import { DashboardMetrics } from "./dashboard-metrics";
import { PropertyReportStatus } from "./property-report-status";
import { TopTenantCards } from "./top-tenant-cards";
import { RecentActivity } from "./recent-activity";
import { DemographicsChart } from "./demographics-chart";
import { PropertyMap } from "./property-map";

export function DashboardView() {
  const { metrics, handleCreateAnalysis } = useDashboard();

  return (
    <div className="space-y-6">
      {/* Top Action Bar: Create NEW ANALYSIS button */}
      <div className="flex justify-end items-center">
        <button
          type="button"
          onClick={handleCreateAnalysis}
          className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-medium text-sm px-6 py-3 rounded-xs flex items-center gap-2 shadow-sm font-['Montserrat'] transition cursor-pointer"
        >
          <Plus className="size-4 stroke-[2.5]" />
          <span>Create NEW ANALYSIS</span>
        </button>
      </div>

      {/* Top 5 Metric Cards */}
      <DashboardMetrics metrics={metrics} />

      {/* Middle Section: Two Columns (Left: Table + Cards, Right: Activity + Demographic Chart) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (approx 7.5/12 cols) */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <PropertyReportStatus />
          <TopTenantCards />
        </div>

        {/* Right Column (approx 4.5/12 cols) */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          <RecentActivity />
          <DemographicsChart />
        </div>
      </div>

      {/* Bottom Section: Property Report Map */}
      <section className="w-full">
        <PropertyMap />
      </section>
    </div>
  );
}
