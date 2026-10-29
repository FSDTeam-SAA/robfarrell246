"use client";

import React from "react";
import { Building2, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { ProjectItem } from "../types/project.types";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusBadge = (status: ProjectItem["status"]) => {
    switch (status) {
      case "Active":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "In Review":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Feasibility Study":
        return "bg-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 pb-3">
          <span
            className={`px-2.5 py-0.5 rounded-md text-xs font-semibold font-['Montserrat'] border ${getStatusBadge(
              project.status
            )}`}
          >
            {project.status}
          </span>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-50 text-[#2563eb] text-xs font-semibold font-['Montserrat']">
            <Sparkles className="size-3.5" />
            <span>Fit Score: {project.fitScore}%</span>
          </div>
        </div>

        {/* Title & Address */}
        <h3 className="text-base font-bold text-[#0f172a] font-['Montserrat'] leading-snug">
          {project.name}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-['Montserrat'] mt-1.5">
          <MapPin className="size-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{project.address}, {project.city}</span>
        </div>

        {/* Property Specs */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs font-['Montserrat']">
          <div>
            <span className="text-slate-400 block text-[11px]">Type</span>
            <span className="font-semibold text-slate-700 truncate block">
              {project.propertyType}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Square Footage</span>
            <span className="font-semibold text-slate-700 block">
              {project.sqft.toLocaleString()} sq ft
            </span>
          </div>
        </div>
      </div>

      {/* Footer / Action */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-['Montserrat']">
          Updated {project.lastUpdated}
        </span>
        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563eb] hover:text-blue-700 transition cursor-pointer"
        >
          <span>View Details</span>
          <ArrowRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
