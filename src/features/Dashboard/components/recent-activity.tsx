"use client";

import React from "react";

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
}

const activities: ActivityItem[] = [
  {
    id: "1",
    title: "Dossier Export Generated for 123 Market St",
    description: "Fast Casual Restaurant & Concept Deck Ready",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    title: "AI Spatial Match Completed for 456 Oak Ave",
    description: "Boutique Fitness matched with 84 Fit Score",
    timestamp: "Yesterday",
  },
  {
    id: "3",
    title: "Credit Allocation Added",
    description: "Monthly quota refreshed to 100 Credits",
    timestamp: "3 days ago",
  },
];

export function RecentActivity() {
  return (
    <div className="w-full bg-white/90 rounded-lg border border-slate-200/90 shadow-xs backdrop-blur-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-slate-200">
        <h3 className="text-xl font-semibold font-['Montserrat'] text-slate-900">
          Recent Activity
        </h3>
      </div>

      {/* List */}
      <div className="p-5 flex flex-col gap-3.5">
        {activities.map((item) => (
          <div
            key={item.id}
            className="p-3.5 bg-slate-50/80 hover:bg-slate-100/80 border border-slate-100 rounded-lg flex items-center justify-between gap-3 transition"
          >
            <div className="flex flex-col gap-0.5">
              <h4 className="text-sm font-semibold font-['Montserrat'] text-slate-900">
                {item.title}
              </h4>
              <p className="text-xs font-normal font-['Montserrat'] text-slate-500">
                {item.description}
              </p>
            </div>
            <span className="text-xs font-medium font-['Montserrat'] text-slate-400 whitespace-nowrap">
              {item.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
