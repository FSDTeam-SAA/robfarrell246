"use client";

import React from "react";
import { Calendar, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyReport {
  id: string;
  name: string;
  code: string;
  location: string;
  created: string;
  fitScore: number;
  status: "In Progress" | "Completed" | "Draft";
}

const properties: PropertyReport[] = [
  {
    id: "1",
    name: "Maple Street Building",
    code: "PRP-0010",
    location: "Houston, TX",
    created: "28 Aug 2026",
    fitScore: 76,
    status: "In Progress",
  },
  {
    id: "2",
    name: "Downtown Retail Center",
    code: "PRP-0012",
    location: "Dallas, TX",
    created: "24 Aug 2026",
    fitScore: 91,
    status: "Completed",
  },
  {
    id: "3",
    name: "Sunset Strip Center",
    code: "PRP-009",
    location: "Plano, TX",
    created: "24 Aug 2026",
    fitScore: 84,
    status: "Completed",
  },
  {
    id: "4",
    name: "Lakeside Plaza",
    code: "PRP-0011",
    location: "Austin, TX",
    created: "24 Aug 2026",
    fitScore: 76,
    status: "Completed",
  },
];

export function PropertyReportStatus() {
  return (
    <div className="w-full bg-white/90 rounded-lg border border-slate-200/90 shadow-xs backdrop-blur-sm overflow-hidden">
      {/* Table Title Header */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h3 className="text-xl font-semibold font-['Montserrat'] text-slate-900">
          Property Report Status
        </h3>
        <a
          href="#all-properties"
          className="text-xs font-medium font-['Montserrat'] text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
        >
          <span>View all properties</span>
          <span>→</span>
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold font-['Montserrat'] text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-6 w-64">PROPERTY</th>
              <th className="py-3 px-4 text-center">LOCATION</th>
              <th className="py-3 px-4 text-center">CREATED</th>
              <th className="py-3 px-4 text-center">Fit Score</th>
              <th className="py-3 px-4 text-center">STATUS</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {properties.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-slate-50/80 transition-colors"
              >
                {/* Property Name & Code */}
                <td className="py-3.5 px-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900 font-['Montserrat']">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-400 font-['Montserrat']">
                      {item.code}
                    </span>
                  </div>
                </td>

                {/* Location */}
                <td className="py-3.5 px-4 text-center text-slate-700 font-medium font-['Montserrat']">
                  {item.location}
                </td>

                {/* Created */}
                <td className="py-3.5 px-4 text-center">
                  <div className="inline-flex items-center gap-1.5 text-slate-700 text-xs font-medium font-['Montserrat']">
                    <Calendar className="size-3.5 text-slate-400 shrink-0" />
                    <span>{item.created}</span>
                  </div>
                </td>

                {/* Fit Score */}
                <td className="py-3.5 px-4 text-center">
                  <span
                    className={cn(
                      "inline-flex items-center justify-center px-3 py-1 rounded-md text-sm font-semibold font-['Montserrat']",
                      item.fitScore >= 90
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    )}
                  >
                    {item.fitScore}/100
                  </span>
                </td>

                {/* Status */}
                <td className="py-3.5 px-4 text-center">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium font-['Montserrat']",
                      item.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        item.status === "Completed" ? "bg-emerald-600" : "bg-blue-600"
                      )}
                    />
                    <span>{item.status}</span>
                  </span>
                </td>

                {/* Action Button */}
                <td className="py-3.5 px-4 text-center">
                  <button
                    onClick={() => alert(`Details for ${item.name}`)}
                    className="inline-flex items-center justify-center p-1.5 rounded-md border border-blue-200 bg-blue-50/50 hover:bg-blue-100/60 text-blue-600 transition shadow-2xs"
                    title="View actions"
                  >
                    <MoreHorizontal className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
