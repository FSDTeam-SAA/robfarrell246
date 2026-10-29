"use client";

import { useState } from "react";
import { LedgerEntry, TopUpSuccessDetails } from "../types/credit.types";
import { INITIAL_LEDGER_DATA } from "../api/credit.api";
import { useUIStore } from "@/store/ui.store";
import { toast } from "sonner";

export function useCredit() {
  const { creditBalance, addCredits } = useUIStore();
  const [ledger, setLedger] = useState<LedgerEntry[]>(INITIAL_LEDGER_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(ledger.length / itemsPerPage);
  const currentRows = ledger.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTopUpSuccess = (details: TopUpSuccessDetails) => {
    const newEntry: LedgerEntry = {
      id: `tx-${Date.now()}`,
      date: new Date().toISOString(),
      activity: `Purchased Credit Booster (+${details.credits} credits)`,
      project: "—",
      delta: `+${details.credits} Credits`,
      remainingBalance: (creditBalance || 28) + details.credits,
    };

    setLedger((prev) => [newEntry, ...prev]);
    toast.success(`Successfully added ${details.credits} AI Credits to your wallet!`);
  };

  return {
    creditBalance,
    ledger,
    currentPage,
    totalPages,
    totalRows: ledger.length,
    currentRows,
    setCurrentPage,
    isTopUpOpen,
    setIsTopUpOpen,
    handleTopUpSuccess,
  };
}
