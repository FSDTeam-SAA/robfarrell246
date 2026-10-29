"use client";

import React, { useState } from "react";
import { Plus, ChevronLeft, ChevronRight, HelpCircle, FileQuestion, PhoneCall } from "lucide-react";

export interface TicketSummary {
  id: string;
  subject: string;
  project: string;
  topic: string;
  status: "In Review" | "Resolved";
  lastUpdated: string;
}

interface SupportTicketTableProps {
  tickets: TicketSummary[];
  onSelectTicket: (ticketId: string) => void;
  onOpenNewTicketModal: () => void;
}

export default function SupportTicketTable({
  tickets,
  onSelectTicket,
  onOpenNewTicketModal,
}: SupportTicketTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-6">
      {/* Top Action Bar: Submit Support Request */}
      <div className="flex justify-end items-center">
        <button
          type="button"
          onClick={onOpenNewTicketModal}
          className="px-7 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-sm text-sm font-medium font-['Montserrat'] flex items-center gap-2 shadow-xs transition cursor-pointer"
        >
          <Plus className="size-4 stroke-[2.5]" />
          <span>Submit Support Request</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="w-full bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden">
        {/* Card Title Header */}
        <div className="px-6 py-4.5 border-b border-neutral-200 flex justify-between items-center bg-white">
          <h2 className="text-[#0f172a] text-xl font-bold font-['Montserrat'] tracking-tight">
            Recent Support Requests
          </h2>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#f0f4f9] border-b border-neutral-200 text-gray-700 text-xs font-semibold font-['Montserrat'] select-none">
                <th className="py-3 px-6 w-44">Ticket ID</th>
                <th className="py-3 px-6 min-w-[280px]">Subject</th>
                <th className="py-3 px-6 w-52">Topic</th>
                <th className="py-3 px-6 w-32 text-center">Status</th>
                <th className="py-3 px-6 w-52 text-center">Last Updated</th>
                <th className="py-3 px-6 w-28 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-neutral-200/70">
              {tickets.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => onSelectTicket(item.id)}
                  className="hover:bg-slate-50/70 transition-colors duration-150 cursor-pointer"
                >
                  <td className="py-4 px-6 text-sm font-medium font-['Montserrat'] text-[#0f172a] whitespace-nowrap">
                    {item.id}
                  </td>
                  <td className="py-4 px-6 min-w-[280px]">
                    <div className="text-sm font-semibold text-[#0f172a] font-['Montserrat'] leading-snug">
                      {item.subject}
                    </div>
                    <div className="text-xs text-slate-500 font-normal font-['Montserrat'] mt-1 truncate">
                      Project: {item.project}
                    </div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium font-['Montserrat'] bg-[#dce4ee] text-[#475569]">
                      {item.topic}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    <span
                      className={`inline-flex items-center justify-center px-3 py-0.5 rounded-md text-xs font-medium font-['Montserrat'] ${
                        item.status === "In Review"
                          ? "bg-[#fff9ea] text-[#f59e0b] border border-[#fef08a]/60"
                          : "bg-[#effdf5] text-[#10b981] border border-[#bbf7d0]/60"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center text-xs font-medium text-slate-500 font-['Montserrat'] whitespace-nowrap">
                    {item.lastUpdated}
                  </td>
                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTicket(item.id);
                      }}
                      className="inline-flex items-center justify-center px-3 py-0.5 rounded-md text-xs font-semibold font-['Montserrat'] bg-[#fff9ea] hover:bg-[#fef3c7] text-[#f59e0b] transition cursor-pointer"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="px-6 py-3.5 bg-white border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-sm font-medium text-slate-500 font-['Montserrat']">
            12 requests · Page {currentPage} of 2
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              className="px-3 py-1 rounded-sm border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer flex items-center gap-1"
            >
              <ChevronLeft className="size-3.5" />
              <span>Prev</span>
            </button>
            <span className="size-8 rounded-sm border border-slate-300 bg-slate-100 text-xs font-bold text-slate-900 flex items-center justify-center">
              {currentPage}
            </span>
            <button
              type="button"
              disabled={currentPage === 2}
              onClick={() => setCurrentPage(2)}
              className="px-3 py-1 rounded-sm border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 cursor-pointer flex items-center gap-1"
            >
              <span>Next</span>
              <ChevronRight className="size-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Advisory Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
          <div className="size-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <HelpCircle className="size-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 font-['Montserrat']">
              Knowledge Base & FAQs
            </h4>
            <p className="text-xs text-slate-500 font-['Montserrat'] mt-1 leading-relaxed">
              Step-by-step guides for running AI trade area analysis and configuring tenant categories.
            </p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
          <div className="size-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <FileQuestion className="size-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 font-['Montserrat']">
              Commercial Pitch Templates
            </h4>
            <p className="text-xs text-slate-500 font-['Montserrat'] mt-1 leading-relaxed">
              Download presentation-ready templates formatted for landlord representation.
            </p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
          <div className="size-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <PhoneCall className="size-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 font-['Montserrat']">
              Dedicated Advisory Hotline
            </h4>
            <p className="text-xs text-slate-500 font-['Montserrat'] mt-1 leading-relaxed">
              Direct access to retail real estate data consultants for enterprise brokers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
