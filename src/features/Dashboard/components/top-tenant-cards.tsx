"use client";

import React from "react";

interface TenantMatch {
  id: string;
  rank: string;
  title: string;
  address: string;
  capex: string;
  fitScore: number;
  imageUrl: string;
}

const tenantMatches: TenantMatch[] = [
  {
    id: "1",
    rank: "Rank #1 Match",
    title: "Fast Casual Mediterranean Restaurant",
    address: "123 Street, Suite 104, Austin, TX 78701",
    capex: "$150k - $235k",
    fitScore: 91,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=380&fit=crop",
  },
  {
    id: "2",
    rank: "Rank #1 Match",
    title: "Boutique Fitness",
    address: "456 Oak Avenue, Dallas, TX 75201",
    capex: "$105k - $155k",
    fitScore: 84,
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=380&fit=crop",
  },
  {
    id: "3",
    rank: "Rank #1 Match",
    title: "Medical / Wellness",
    address: "789 Main Street, Houston, TX 77002",
    capex: "$140k - $220k",
    fitScore: 76,
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=380&fit=crop",
  },
];

export function TopTenantCards() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold font-['Montserrat'] text-slate-900">
          Top Tenant Properties
        </h3>
        <a
          href="#all-reports"
          className="text-xs font-medium font-['Montserrat'] text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
        >
          <span>All Reports</span>
          <span>→</span>
        </a>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tenantMatches.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition overflow-hidden flex flex-col justify-between"
          >
            {/* Image Header with Fit Badge */}
            <div className="relative w-full h-44 overflow-hidden bg-slate-100">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Fit Badge Overlay */}
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-blue-50/95 border border-blue-200/80 backdrop-blur-xs rounded-md shadow-xs">
                <span className="text-xs font-bold font-['Montserrat'] text-blue-700">
                  Fit: {item.fitScore}/100
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium font-['Montserrat'] text-blue-700">
                  {item.rank}
                </span>
                <h4 className="text-base font-semibold font-['Montserrat'] text-slate-900 line-clamp-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs font-normal font-['Montserrat'] text-slate-500 line-clamp-1">
                  {item.address}
                </p>
              </div>

              {/* CapEx Footer */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-['Montserrat']">
                <span className="text-slate-600">Est. CapEx:</span>
                <span className="font-semibold text-slate-900">{item.capex}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
