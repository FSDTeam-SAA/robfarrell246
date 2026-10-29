"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ArrowRight, Check, CreditCard, Loader2 } from "lucide-react";
import { useUIStore } from "@/store/ui.store";

export interface CreditPackage {
  id: string;
  badge: string;
  credits: number;
  price: number;
  priceDisplay: string;
  isEnterprise?: boolean;
}

export const CREDIT_PACKAGES: CreditPackage[] = [
  {
    id: "pack-20",
    badge: "Standard",
    credits: 20,
    price: 20,
    priceDisplay: "$ 20 USD",
  },
  {
    id: "pack-50",
    badge: "10% Savings",
    credits: 50,
    price: 45,
    priceDisplay: "$ 45 USD",
  },
  {
    id: "pack-150",
    badge: "20% Savings ( Best Value )",
    credits: 150,
    price: 120,
    priceDisplay: "$ 120 USD",
  },
  {
    id: "pack-500",
    badge: "30 % Enterprise pack",
    credits: 500,
    price: 350,
    priceDisplay: "$ 350 USD",
    isEnterprise: true,
  },
];

interface TopUpCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (details: { credits: number; price: number; name: string }) => void;
}

export default function TopUpCreditsModal({
  isOpen,
  onClose,
  onSuccess,
}: TopUpCreditsModalProps) {
  const { addCredits } = useUIStore();
  const [selectedPack, setSelectedPack] = useState<CreditPackage>(CREDIT_PACKAGES[1]); // Default 50 credits
  const [step, setStep] = useState<"select" | "processing" | "success">("select");

  const handleStartPurchase = () => {
    setStep("processing");

    setTimeout(() => {
      // Apply credits to store
      addCredits(selectedPack.credits);

      if (onSuccess) {
        onSuccess({
          credits: selectedPack.credits,
          price: selectedPack.price,
          name: selectedPack.badge,
        });
      }

      setStep("success");
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    // Reset state after dialog closes
    setTimeout(() => {
      setStep("select");
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-[629px] p-0 !rounded-sm bg-bg-surface border-0 shadow-2xl overflow-hidden [&>button]:hidden">
        <DialogTitle className="sr-only">Top Up Credits</DialogTitle>

        {/* ================= STEP 1: SELECT PACKAGE ================= */}
        {step === "select" && (
          <div className="w-full p-6 bg-bg-surface rounded-sm flex flex-col justify-start items-start gap-4">
            {/* Modal Header */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch pb-4 border-b border-gray-100 flex justify-between items-start overflow-hidden">
                <div className="flex-1 flex justify-start items-center gap-2">
                  {/* Warning / Gold Coin Icon */}
                  <div className="size-8 relative overflow-hidden flex items-center justify-center">
                    <svg
                      className="size-7 text-status-warning"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" />
                      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
                      <path d="M12 8.5V15.5M10 10H14M10 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="justify-start text-text-primary text-xl font-semibold font-['Montserrat']">
                    Top Up Credits
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="size-8 flex justify-center items-center rounded-full hover:bg-slate-100 text-zinc-500 transition cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="self-stretch justify-start text-text-secondary text-sm font-normal font-['Montserrat']">
                Credits never expire and unlock instant AI feasibility studies, photorealistic concept rendering, and report exports.
              </div>
            </div>

            {/* Packages Grid: 2 rows of 2 columns */}
            <div className="self-stretch flex flex-col gap-4">
              {/* Row 1: 20 CREDITS and 50 CREDITS */}
              <div className="self-stretch flex flex-col sm:flex-row justify-start items-stretch gap-4">
                {/* 20 Credits Card */}
                {renderPackageCard(
                  CREDIT_PACKAGES[0],
                  selectedPack.id === CREDIT_PACKAGES[0].id,
                  () => setSelectedPack(CREDIT_PACKAGES[0])
                )}

                {/* 50 Credits Card */}
                {renderPackageCard(
                  CREDIT_PACKAGES[1],
                  selectedPack.id === CREDIT_PACKAGES[1].id,
                  () => setSelectedPack(CREDIT_PACKAGES[1])
                )}
              </div>

              {/* Row 2: 150 CREDITS and 500 CREDITS */}
              <div className="self-stretch flex flex-col sm:flex-row justify-start items-stretch gap-4">
                {/* 150 Credits Card */}
                {renderPackageCard(
                  CREDIT_PACKAGES[2],
                  selectedPack.id === CREDIT_PACKAGES[2].id,
                  () => setSelectedPack(CREDIT_PACKAGES[2])
                )}

                {/* 500 Credits Card */}
                {renderPackageCard(
                  CREDIT_PACKAGES[3],
                  selectedPack.id === CREDIT_PACKAGES[3].id,
                  () => setSelectedPack(CREDIT_PACKAGES[3])
                )}
              </div>
            </div>

            {/* Default Card Information */}
            <div className="self-stretch p-4 bg-bg-surface rounded-sm outline outline-1 outline-offset-[-1px] outline-text-tertiary flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div className="size-5 text-text-tertiary flex items-center justify-center shrink-0">
                  <CreditCard className="size-4.5 stroke-[1.8]" />
                </div>
                <div className="truncate">
                  <span className="text-text-secondary text-sm font-medium font-['Montserrat']">
                    Default Card:{" "}
                  </span>
                  <span className="text-text-primary text-sm font-semibold font-['Montserrat']">
                    Visa ending in 4242
                  </span>
                </div>
              </div>
              <div className="text-status-success text-sm font-semibold font-['Montserrat'] shrink-0">
                Instant Deposit
              </div>
            </div>

            {/* Action Buttons */}
            <div className="self-stretch pt-4 border-t border-bg-subtle flex justify-start items-center gap-4">
              {/* Cancel Button */}
              <button
                type="button"
                onClick={handleClose}
                className="px-8 py-3.5 bg-bg-canvas rounded-xs outline outline-1 outline-offset-[-1px] outline-slate-200 hover:bg-slate-100 flex justify-center items-center gap-2.5 transition cursor-pointer"
              >
                <div className="size-4 flex items-center justify-center text-text-tertiary">
                  <X className="size-3.5" />
                </div>
                <span className="text-text-secondary text-base font-medium font-['Montserrat']">
                  Cancel
                </span>
              </button>

              {/* Purchase Button */}
              <button
                type="button"
                onClick={handleStartPurchase}
                className="flex-1 px-8 py-3.5 bg-text-brand hover:bg-blue-700 active:bg-blue-800 rounded-xs flex justify-center items-center gap-2.5 transition shadow-xs cursor-pointer"
              >
                <span className="text-bg-canvas text-base font-medium font-['Montserrat']">
                  Purchase {selectedPack.credits} credit for ${selectedPack.price}
                </span>
                <div className="size-5 flex items-center justify-center">
                  <ArrowRight className="size-4 text-bg-canvas" strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: PROCESSING WITH STRIPE ================= */}
        {step === "processing" && (
          <div className="w-full p-6 bg-bg-surface rounded-sm flex flex-col justify-center items-center gap-10 sm:gap-12 min-h-[460px]">
            {/* Header */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch pb-4 border-b border-gray-100 flex justify-between items-start overflow-hidden">
                <div className="flex-1 flex justify-start items-center gap-2">
                  <div className="size-8 relative overflow-hidden flex items-center justify-center">
                    <svg
                      className="size-7 text-status-warning"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" />
                      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
                      <path d="M12 8.5V15.5M10 10H14M10 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="justify-start text-text-primary text-xl font-semibold font-['Montserrat']">
                    Top Up Credits
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="size-8 flex justify-center items-center rounded-full hover:bg-slate-100 text-zinc-500 transition cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Spinner Animation */}
            <div className="flex items-center justify-center py-4">
              <div className="relative size-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-pulse" />
                <Loader2 className="size-14 text-text-brand animate-spin stroke-[2.5]" />
              </div>
            </div>

            {/* Processing Text */}
            <div className="self-stretch flex flex-col justify-center items-center gap-2 pb-6">
              <div className="text-center text-text-primary text-2xl font-bold font-['Montserrat']">
                Processing Payment With Stripe
              </div>
              <div className="self-stretch text-center text-text-secondary text-sm font-normal font-['Montserrat']">
                Authorizing transaction for ${selectedPack.price}.......
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 3: PAYMENT SUCCESSFUL ================= */}
        {step === "success" && (
          <div className="w-full p-6 bg-bg-surface rounded-sm flex flex-col justify-center items-center gap-8 sm:gap-10 min-h-[460px]">
            {/* Header */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch pb-4 border-b border-gray-100 flex justify-between items-start overflow-hidden">
                <div className="flex-1 flex justify-start items-center gap-2">
                  <div className="size-8 relative overflow-hidden flex items-center justify-center">
                    <svg
                      className="size-7 text-status-warning"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" />
                      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
                      <path d="M12 8.5V15.5M10 10H14M10 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="justify-start text-text-primary text-xl font-semibold font-['Montserrat']">
                    Top Up Credits
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="size-8 flex justify-center items-center rounded-full hover:bg-slate-100 text-zinc-500 transition cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Success Check Icon */}
            <div className="size-28 p-2.5 bg-bg-success-subtle rounded-full flex justify-center items-center shadow-xs animate-in zoom-in-75 duration-200">
              <div className="size-16 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm">
                <Check className="size-9 stroke-[3]" />
              </div>
            </div>

            {/* Success Text */}
            <div className="self-stretch flex flex-col justify-center items-center gap-2">
              <div className="text-center text-text-primary text-2xl font-bold font-['Montserrat']">
                Payment Successful!
              </div>
              <div className="self-stretch text-center text-text-secondary text-sm font-normal font-['Montserrat']">
                {selectedPack.credits} Credits have been deposited to your wallet.
              </div>
            </div>

            {/* Continue Working Button */}
            <button
              type="button"
              onClick={handleClose}
              className="self-stretch px-8 py-4 bg-text-brand hover:bg-blue-700 active:bg-blue-800 rounded-xs flex justify-center items-center gap-2.5 transition shadow-xs cursor-pointer"
            >
              <span className="text-bg-canvas text-base font-medium font-['Montserrat']">
                Continue Working
              </span>
              <div className="size-5 flex items-center justify-center">
                <ArrowRight className="size-4 text-bg-canvas" strokeWidth={2.5} />
              </div>
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/** Helper function to render each package card according to Figma HTML */
function renderPackageCard(
  pack: CreditPackage,
  isSelected: boolean,
  onClick: () => void
) {
  return (
    <div
      onClick={onClick}
      className={`flex-1 p-4 rounded-lg flex flex-col justify-center items-start gap-4 cursor-pointer transition-all duration-150 select-none ${
        isSelected
          ? "bg-bg-brand-subtle outline outline-2 outline-offset-[-2px] outline-text-brand shadow-xs"
          : "bg-bg-canvas outline outline-1 outline-offset-[-1px] outline-text-disabled hover:outline-slate-400"
      }`}
    >
      {/* Badge */}
      <div
        className={`px-2 py-1 rounded-sm flex justify-center items-center gap-2.5 overflow-hidden ${
          pack.isEnterprise ? "bg-bg-brand-subtle" : "bg-action-tertiary-pressed"
        }`}
      >
        <div className="text-text-brand text-sm font-semibold font-['Montserrat'] whitespace-nowrap">
          {pack.badge}
        </div>
      </div>

      {/* Credits Amount with Coin Icon */}
      <div className="self-stretch flex justify-start items-center gap-2">
        <div className="size-4 relative overflow-hidden flex items-center justify-center shrink-0">
          <svg
            className="size-4 text-status-warning"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9.5" cy="9.5" r="4.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
            <path d="M7 4.5V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <div className="text-status-warning text-base font-bold font-['Montserrat'] whitespace-nowrap">
          {pack.credits} CREDITS
        </div>
      </div>

      {/* Price */}
      <div className="self-stretch text-text-brand text-sm font-bold font-['Montserrat']">
        {pack.priceDisplay}
      </div>
    </div>
  );
}
