"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LedgerEntry } from "../types/credit.types";

interface CreditConsumptionTableProps {
  currentRows: LedgerEntry[];
  totalRows: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CreditConsumptionTable({
  currentRows,
  totalRows,
  currentPage,
  totalPages,
  onPageChange,
}: CreditConsumptionTableProps) {
  return (
    <div className="w-full bg-white rounded-xl border border-neutral-200 shadow-xs overflow-hidden">
      {/* Card Header Title */}
      <div className="p-4 sm:p-5 border-b border-neutral-200 flex justify-between items-center bg-white">
        <h2 className="text-text-primary text-xl font-semibold font-['Montserrat']">
          Credit Consumption Ledger
        </h2>
      </div>

      {/* Responsive Table Container */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-action-disabled border-b border-neutral-200">
              <th className="w-60 min-w-[240px] px-4 py-3.5 text-left text-gray-800 text-sm font-normal font-['Montserrat'] select-none">
                DATE
              </th>
              <th className="min-w-[280px] px-4 py-3.5 text-left text-gray-800 text-sm font-normal font-['Montserrat'] select-none">
                ACTIVITY DESCRIPTION
              </th>
              <th className="min-w-[220px] px-4 py-3.5 text-left text-gray-800 text-sm font-normal font-['Montserrat'] select-none">
                TARGET PROJECT
              </th>
              <th className="w-48 px-4 py-3.5 text-center text-gray-800 text-sm font-normal font-['Montserrat'] select-none">
                CREDITS DELTA
              </th>
              <th className="w-52 px-4 py-3.5 text-center text-gray-800 text-sm font-normal font-['Montserrat'] select-none">
                REMAINING BALANCE
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-200">
            {currentRows.map((row) => {
              const isPositive = row.delta.startsWith("+");
              return (
                <tr
                  key={row.id}
                  className="hover:bg-slate-50/70 transition-colors duration-150"
                >
                  {/* Date */}
                  <td className="w-60 min-w-[240px] px-4 py-3.5">
                    <div className="text-text-primary text-sm font-medium font-['Montserrat'] truncate">
                      {row.date}
                    </div>
                  </td>

                  {/* Activity Description */}
                  <td className="min-w-[280px] px-4 py-3.5">
                    <div className="text-text-primary text-sm font-medium font-['Montserrat'] line-clamp-1">
                      {row.activity}
                    </div>
                  </td>

                  {/* Target Project */}
                  <td className="min-w-[220px] px-4 py-3.5">
                    <div
                      className={`text-sm font-medium font-['Montserrat'] ${
                        row.project === "—" ? "text-slate-400" : "text-text-primary"
                      }`}
                    >
                      {row.project}
                    </div>
                  </td>

                  {/* Credits Delta Badge */}
                  <td className="w-48 px-4 py-3.5 text-center whitespace-nowrap">
                    <div className="flex justify-center items-center">
                      <span
                        className={`px-2 py-0.5 rounded-md inline-flex items-center gap-1.5 text-xs font-medium font-['Montserrat'] leading-4 ${
                          isPositive
                            ? "bg-bg-success-subtle text-status-success"
                            : "bg-bg-error-subtle text-status-error"
                        }`}
                      >
                        {row.delta}
                      </span>
                    </div>
                  </td>

                  {/* Remaining Balance Badge */}
                  <td className="w-52 px-4 py-3.5 text-center whitespace-nowrap">
                    <div className="flex justify-center items-center">
                      <span className="px-2 py-0.5 bg-bg-warning-subtle text-status-warning rounded-md inline-flex items-center gap-1.5 text-xs font-medium font-['Montserrat'] leading-4">
                        {row.remainingBalance}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer with Pagination matching Figma HTML */}
      <div className="px-6 py-4 bg-white border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-text-secondary text-sm font-medium font-['Montserrat']">
          {totalRows} requests · Page {currentPage} of {totalPages}
        </div>

        <div className="flex items-center gap-2.5">
          {/* Prev Button */}
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className="rounded-sm outline outline-1 outline-offset-[-1px] outline-border-default px-2 py-1 flex items-center gap-1 overflow-hidden transition hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <div className="size-4 relative flex items-center justify-center">
              <ChevronLeft className="size-3.5 text-text-secondary" />
            </div>
            <span className="text-text-secondary text-sm font-medium font-['Montserrat']">
              Prev
            </span>
          </button>

          {/* Page Number */}
          <div className="size-8 p-2 bg-surface-subtle rounded-sm outline outline-1 outline-offset-[-1px] outline-border-default flex justify-center items-center overflow-hidden">
            <span className="text-center text-text-primary text-sm font-medium font-['Montserrat']">
              {currentPage}
            </span>
          </div>

          {/* Next Button */}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            className="px-2 py-1 rounded-sm outline outline-1 outline-offset-[-1px] outline-border-default flex items-center gap-1 transition hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <span className="text-text-primary text-sm font-medium font-['Montserrat']">
              Next
            </span>
            <div className="size-4 relative flex items-center justify-center">
              <ChevronRight className="size-3.5 text-text-primary" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
