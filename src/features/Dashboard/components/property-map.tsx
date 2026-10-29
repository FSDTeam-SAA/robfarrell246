"use client";

import React, { useState } from "react";
import { Plus, Minus, Navigation, ExternalLink, ArrowRight } from "lucide-react";

export function PropertyMap() {
  const [activePin, setActivePin] = useState<string>("houston");
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  return (
    <div className="w-full bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold font-['Montserrat'] text-slate-900">
            Property Report Map
          </h2>
          <p className="text-sm font-normal font-['Montserrat'] text-slate-500">
            See Where each analyzed property/report is located.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 text-sm font-medium font-['Montserrat'] bg-slate-50 px-4 py-2 rounded-md border border-slate-200/60">
          <div className="flex items-center gap-1.5 text-emerald-600">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-1.5 text-blue-600">
            <span className="size-2 rounded-full bg-blue-600" />
            <span>In Progress</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="size-2 rounded-full bg-slate-400" />
            <span>Draft</span>
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="relative w-full h-[580px] bg-[#f2ede4] overflow-hidden select-none">
        {/* Geographic SVG Background */}
        <svg
          viewBox="0 0 1100 650"
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center center" }}
        >
          <defs>
            {/* Water gradient */}
            <linearGradient id="gulf-water" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9ec0db" />
              <stop offset="100%" stopColor="#7da8cb" />
            </linearGradient>
            <linearGradient id="lake-water" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9cc2de" />
              <stop offset="100%" stopColor="#87b2d4" />
            </linearGradient>
          </defs>

          {/* Landmass background */}
          <rect width="1100" height="650" fill="#f4eee2" />

          {/* Gulf of Mexico Coastline & Ocean */}
          <path
            d="M 680 650 Q 750 560 820 540 Q 890 520 950 500 Q 1020 500 1100 520 L 1100 650 Z"
            fill="url(#gulf-water)"
          />
          <path
            d="M 850 535 C 880 540, 920 515, 960 480 C 1020 460, 1070 470, 1100 480 L 1100 650 L 850 650 Z"
            fill="url(#gulf-water)"
            opacity="0.9"
          />

          {/* Galveston Bay Water body */}
          <path
            d="M 770 540 Q 790 520 810 530 Q 820 550 790 560 Z"
            fill="#8eb4d4"
          />

          {/* Texas State Border Outline */}
          <path
            d="M 180 50 L 340 50 L 340 160 L 580 160 Q 640 180 670 210 Q 720 220 740 260 L 740 380 Q 750 420 780 460 Q 820 520 840 540 Q 780 580 720 620 Q 640 650 560 560 Q 480 510 400 470 Q 320 440 240 370 Q 190 320 180 240 Z"
            fill="#f9f5ed"
            stroke="#d8cfbe"
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          {/* Louisiana Border & Label */}
          <line x1="740" y1="260" x2="740" y2="460" stroke="#c9bfae" strokeWidth="2.5" strokeDasharray="4 4" />
          <text x="890" y="440" fill="#a49987" fontSize="24" fontWeight="bold" letterSpacing="4">
            LOUISIANA
          </text>

          {/* Major Highway Network */}
          <g stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
            {/* I-35: Dallas - Waco - Austin - San Antonio */}
            <path d="M 630 160 L 630 220 L 590 340 L 530 460 L 480 550" />
            {/* I-45: Dallas to Houston */}
            <path d="M 630 220 L 730 480 L 780 540" />
            {/* I-10: San Antonio to Houston to Louisiana */}
            <path d="M 360 480 L 480 550 L 730 480 L 980 460" />
            {/* I-20: West Texas through Fort Worth & Dallas to East */}
            <path d="M 280 240 L 420 235 L 600 225 L 630 220 L 800 230" />
            {/* Secondary Connectors */}
            <path d="M 330 180 L 420 235 L 530 460" />
            <path d="M 590 340 L 730 480" />
          </g>

          {/* Highway Color overlay */}
          <g stroke="#f3b478" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 630 160 L 630 220 L 590 340 L 530 460 L 480 550" />
            <path d="M 630 220 L 730 480 L 780 540" />
            <path d="M 360 480 L 480 550 L 730 480 L 980 460" stroke="#f69988" />
            <path d="M 280 240 L 420 235 L 600 225 L 630 220 L 800 230" stroke="#e0aa79" />
          </g>

          {/* Interstate Highway Shield Badges */}
          {/* I-35 badge */}
          <g transform="translate(620, 180)">
            <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#1e40af" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="4" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">35</text>
          </g>
          {/* I-45 badge */}
          <g transform="translate(665, 330)">
            <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#1e40af" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="4" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">45</text>
          </g>
          {/* I-10 badge */}
          <g transform="translate(350, 480)">
            <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#1e40af" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="4" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">10</text>
          </g>
          <g transform="translate(635, 530)">
            <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#1e40af" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="4" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">10</text>
          </g>
          {/* I-20 badge */}
          <g transform="translate(300, 240)">
            <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#1e40af" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="4" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">20</text>
          </g>
          {/* I-35 South badge */}
          <g transform="translate(485, 595)">
            <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#1e40af" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="4" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">35</text>
          </g>

          {/* Texas State Watermark Name */}
          <text
            x="480"
            y="390"
            fill="#8a806d"
            opacity="0.32"
            fontSize="46"
            fontWeight="bold"
            letterSpacing="10"
            textAnchor="middle"
          >
            TEXAS
          </text>

          {/* Reference Cities (Plain labels) */}
          <text x="340" y="145" fill="#334155" fontSize="14" fontWeight="bold">Lubbock</text>
          <circle cx="325" cy="141" r="3.5" fill="#475569" />

          <text x="495" y="215" fill="#334155" fontSize="15" fontWeight="bold">Fort Worth</text>
          <rect x="475" y="208" width="8" height="8" fill="#334155" />

          <text x="415" y="245" fill="#334155" fontSize="14" fontWeight="bold">Abilene</text>
          <circle cx="400" cy="241" r="3.5" fill="#475569" />

          <text x="600" y="345" fill="#334155" fontSize="14" fontWeight="bold">Waco</text>
          <circle cx="585" cy="341" r="3.5" fill="#475569" />

          <text x="490" y="555" fill="#334155" fontSize="16" fontWeight="bold">San Antonio</text>
          <circle cx="475" cy="551" r="4.5" fill="#1e293b" />

          <text x="795" y="565" fill="#334155" fontSize="13" fontWeight="bold">Galveston</text>
          <circle cx="782" cy="561" r="3" fill="#475569" />

          {/* Property Pins */}
          {/* 1. Plano Pin (Completed - Green) */}
          <g
            className="cursor-pointer transition-transform hover:scale-110"
            onClick={() => setActivePin("plano")}
          >
            <circle cx="635" cy="190" r="14" fill="#10B981" opacity="0.25" />
            <path
              d="M 635 174 C 627 174 621 180 621 188 C 621 199 635 208 635 208 C 635 208 649 199 649 188 C 649 180 643 174 635 174 Z"
              fill="#059669"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <circle cx="635" cy="186" r="4" fill="#ffffff" />
            <text x="655" y="193" fill="#0f172a" fontSize="17" fontWeight="bold" fontFamily="Montserrat">
              Plano
            </text>
          </g>

          {/* 2. Dallas Pin (City Box Marker) */}
          <g>
            <rect x="620" y="222" width="16" height="16" rx="2" fill="#334155" stroke="#ffffff" strokeWidth="2" />
            <rect x="624" y="226" width="8" height="8" fill="#ffffff" />
            <text x="645" y="235" fill="#0f172a" fontSize="19" fontWeight="bold" fontFamily="Montserrat">
              Dallas
            </text>
          </g>

          {/* 3. Austin Pin (Completed - Green) */}
          <g
            className="cursor-pointer transition-transform hover:scale-110"
            onClick={() => setActivePin("austin")}
          >
            <circle cx="535" cy="460" r="16" fill="#10B981" opacity="0.3" />
            <path
              d="M 535 442 C 526 442 519 449 519 458 C 519 470 535 480 535 480 C 535 480 551 470 551 458 C 551 449 544 442 535 442 Z"
              fill="#059669"
              stroke="#ffffff"
              strokeWidth="2.5"
            />
            <circle cx="535" cy="456" r="4" fill="#ffffff" />
            <text x="555" y="465" fill="#0f172a" fontSize="18" fontWeight="bold" fontFamily="Montserrat">
              Austin
            </text>
          </g>

          {/* 4. Houston Pin (In Progress - Royal Blue Selected) */}
          <g
            className="cursor-pointer"
            onClick={() => setActivePin("houston")}
          >
            <circle cx="740" cy="485" r="20" fill="#2563EB" opacity="0.35" className="animate-ping" />
            <path
              d="M 740 464 C 730 464 722 472 722 482 C 722 496 740 508 740 508 C 740 508 758 496 758 482 C 758 472 750 464 740 464 Z"
              fill="#1D4ED8"
              stroke="#ffffff"
              strokeWidth="3"
            />
            <circle cx="740" cy="480" r="4.5" fill="#ffffff" />
            <text x="762" y="493" fill="#0f172a" fontSize="21" fontWeight="extrabold" fontFamily="Montserrat">
              Houston
            </text>
          </g>
        </svg>

        {/* Zoom Controls Overlay on Map (Top-Left) */}
        <div className="absolute top-6 left-6 flex flex-col bg-white rounded-lg border border-slate-300 shadow-md overflow-hidden z-20">
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 1.8))}
            className="p-2.5 text-slate-700 hover:bg-slate-100 border-b border-slate-200 transition"
            title="Zoom In"
          >
            <Plus className="size-5 font-bold" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.8))}
            className="p-2.5 text-slate-700 hover:bg-slate-100 border-b border-slate-200 transition"
            title="Zoom Out"
          >
            <Minus className="size-5 font-bold" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="p-2.5 text-slate-700 hover:bg-slate-100 transition"
            title="Reset Map View"
          >
            <Navigation className="size-5" />
          </button>
        </div>

        {/* Houston Callout / Tooltip Card (Open like in Screenshot) */}
        {activePin === "houston" && (
          <div className="absolute right-8 md:right-32 bottom-20 z-30 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 animate-in fade-in zoom-in-95 duration-200">
            {/* Pointer notch to Houston pin */}
            <div className="absolute -bottom-3 left-10 md:left-12 w-6 h-6 bg-white border-b border-r border-slate-200 rotate-45 transform" />

            <div className="flex items-start gap-4">
              {/* Building Thumbnail */}
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=240&fit=crop"
                alt="Maple Street Building"
                className="w-24 h-24 rounded-lg object-cover shadow-sm shrink-0"
              />

              {/* Property Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold font-['Montserrat'] text-slate-900 truncate">
                  Maple Street Building
                </h3>
                <p className="text-xs text-slate-500 font-medium font-['Montserrat'] mb-2">
                  Houston, TX
                </p>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span>Fit Score:</span>
                    <span className="text-base font-bold text-blue-600 font-['Montserrat']">
                      78/100
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <span className="size-2 rounded-full bg-blue-600 inline-block" />
                    <span>In Progress</span>
                  </div>
                </div>

                <div className="mt-3">
                  <a
                    href="#report"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition font-['Montserrat']"
                  >
                    <span>View Report</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
