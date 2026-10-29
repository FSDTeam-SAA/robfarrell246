"use client";

import React from "react";
import { Sparkles, MapPin, Building, Compass, Check } from "lucide-react";
import { AnalysisFormData } from "../types/analysis.types";
import { TARGET_CATEGORIES } from "../api/analysis.api";

interface AnalysisFormProps {
  form: AnalysisFormData;
  setForm: React.Dispatch<React.SetStateAction<AnalysisFormData>>;
  estimatedCredits: number;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export function AnalysisForm({
  form,
  setForm,
  estimatedCredits,
  isSubmitting,
  onSubmit,
}: AnalysisFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 shadow-xs space-y-6">
        <h2 className="text-xl font-bold text-[#0f172a] font-['Montserrat']">
          Property Information & Trade Area
        </h2>

        {/* Row 1: Property Name and Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-['Montserrat']">
              Property Name
            </label>
            <input
              type="text"
              value={form.propertyName}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, propertyName: e.target.value }))
              }
              placeholder="e.g. South Congress Retail Gallery"
              className="p-3.5 bg-white rounded-sm border border-[#94a3b8]/60 text-sm font-medium font-['Montserrat'] outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-['Montserrat']">
              Property Street Address
            </label>
            <div className="relative">
              <MapPin className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={form.propertyAddress}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, propertyAddress: e.target.value }))
                }
                placeholder="e.g. 1601 S Congress Ave, Austin, TX"
                className="w-full pl-10 pr-4 py-3.5 bg-white rounded-sm border border-[#94a3b8]/60 text-sm font-medium font-['Montserrat'] outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                required
              />
            </div>
          </div>
        </div>

        {/* Row 2: Target Category and Size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-['Montserrat']">
              Target Tenant Category
            </label>
            <select
              value={form.targetCategory}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, targetCategory: e.target.value }))
              }
              className="p-3.5 bg-white rounded-sm border border-[#94a3b8]/60 text-sm font-medium font-['Montserrat'] outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
            >
              {TARGET_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-['Montserrat']">
              Square Footage (sq ft)
            </label>
            <input
              type="number"
              value={form.squareFootage}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  squareFootage: Number(e.target.value),
                }))
              }
              className="p-3.5 bg-white rounded-sm border border-[#94a3b8]/60 text-sm font-medium font-['Montserrat'] outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
              min={100}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-['Montserrat']">
              Trade Area Radius ({form.tradeRadiusMiles} Miles)
            </label>
            <input
              type="range"
              min={1}
              max={15}
              value={form.tradeRadiusMiles}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  tradeRadiusMiles: Number(e.target.value),
                }))
              }
              className="mt-3 accent-[#2563eb] cursor-pointer"
            />
          </div>
        </div>

        {/* AI Modeling Options */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <h3 className="text-sm font-bold text-[#0f172a] font-['Montserrat']">
            AI Computation Modules
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="p-4 rounded-lg border border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition">
              <div>
                <p className="text-sm font-semibold text-slate-900 font-['Montserrat']">
                  Foot Traffic & Demographics Gravity Model
                </p>
                <p className="text-xs text-slate-500 font-['Montserrat'] mt-0.5">
                  Spatial cell mobility analysis and pedestrian density (+4 credits)
                </p>
              </div>
              <input
                type="checkbox"
                checked={form.includeFootTraffic}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    includeFootTraffic: e.target.checked,
                  }))
                }
                className="size-5 accent-[#2563eb]"
              />
            </label>

            <label className="p-4 rounded-lg border border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition">
              <div>
                <p className="text-sm font-semibold text-slate-900 font-['Montserrat']">
                  Photorealistic Concept Visualization
                </p>
                <p className="text-xs text-slate-500 font-['Montserrat'] mt-0.5">
                  AI architectural facade & retail pitch rendering (+4 credits)
                </p>
              </div>
              <input
                type="checkbox"
                checked={form.includePhotorealisticConcept}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    includePhotorealisticConcept: e.target.checked,
                  }))
                }
                className="size-5 accent-[#2563eb]"
              />
            </label>
          </div>
        </div>

        {/* Action Button & Cost Summary */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-semibold text-slate-600 font-['Montserrat']">
            Estimated Cost:{" "}
            <span className="text-[#2563eb] font-bold">
              {estimatedCredits} AI Credits
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#2563eb] hover:bg-blue-700 active:bg-blue-800 text-white rounded-sm font-medium font-['Montserrat'] transition shadow-xs cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <Sparkles className="size-4" />
            <span>
              {isSubmitting ? "Running AI Simulation..." : "Run Spatial Feasibility Analysis"}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
