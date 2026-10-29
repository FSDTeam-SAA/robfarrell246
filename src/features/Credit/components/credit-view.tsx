"use client";

import React from "react";
import { useCredit } from "../hooks/use-credit";
import { CreditHeader } from "./credit-header";
import { CreditConsumptionTable } from "./credit-consumption-table";
import TopUpCreditsModal from "@/components/modals/top-up-credits-modal";

export function CreditView() {
  const {
    currentRows,
    totalRows,
    currentPage,
    totalPages,
    setCurrentPage,
    isTopUpOpen,
    setIsTopUpOpen,
    handleTopUpSuccess,
  } = useCredit();

  return (
    <div className="space-y-6">
      {/* Header with Title and Top Up Action */}
      <CreditHeader onTopUpClick={() => setIsTopUpOpen(true)} />

      {/* Credit Consumption Ledger Table */}
      <CreditConsumptionTable
        currentRows={currentRows}
        totalRows={totalRows}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Top Up Credits Multi-Step Modal */}
      <TopUpCreditsModal
        isOpen={isTopUpOpen}
        onClose={() => setIsTopUpOpen(false)}
        onSuccess={handleTopUpSuccess}
      />
    </div>
  );
}
