"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, X } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  backText?: string;
}

export function PrivacyModal({
  isOpen,
  onClose,
  backText = "Back to Create Account",
}: PrivacyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-[940px] max-h-[90vh] p-0 !rounded-lg bg-bg-surface border border-text-disabled shadow-2xl overflow-y-auto [&>button]:hidden">
        <DialogTitle className="sr-only">Privacy Policy</DialogTitle>

        <div className="w-full p-6 sm:p-10 md:p-12 bg-bg-surface rounded-lg flex flex-col justify-start items-start gap-5">
          {/* Top Row with Back Button & Close X */}
          <div className="self-stretch flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-text-brand hover:opacity-80 transition cursor-pointer select-none"
            >
              <ArrowLeft className="size-4 text-text-brand" strokeWidth={2.2} />
              <span className="text-text-brand text-sm font-medium font-['Montserrat']">
                {backText}
              </span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="size-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Title & Subtitle */}
          <h2 className="text-text-primary text-2xl sm:text-3xl font-bold font-['Montserrat']">
            Privacy Policy
          </h2>

          <div className="w-full max-w-[884px] text-text-secondary text-sm font-normal font-['Montserrat']">
            Understand how account, property, usage, and uploaded information will be handled within VisionItForMe.
          </div>

          {/* Legal Placeholder Banner matching Figma */}
          <div className="w-full max-w-[884px] p-3.5 sm:px-4 sm:py-3.5 bg-bg-brand-subtle rounded-md border border-bg-brand-subtle flex flex-col justify-start items-start">
            <p className="text-[#2563eb] text-xs sm:text-sm font-normal font-['Montserrat'] leading-relaxed">
              Legal copy placeholder — final wording should be supplied or approved by the client/legal counsel before launch.
            </p>
          </div>

          {/* Section 1 */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 pt-1">
            <h3 className="self-stretch text-text-primary text-base font-semibold font-['Montserrat']">
              1. Information Collected
            </h3>
            <p className="w-full max-w-[884px] text-text-secondary text-sm font-normal font-['Montserrat'] leading-relaxed">
              Content to be finalized for production. This section is included in the UX so the legal destination and reading flow are fully designed.
            </p>
          </div>

          {/* Section 2 */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <h3 className="self-stretch text-text-primary text-base font-semibold font-['Montserrat']">
              2. How Information Is Used
            </h3>
            <p className="w-full max-w-[884px] text-text-secondary text-sm font-normal font-['Montserrat'] leading-relaxed">
              Content to be finalized for production. This section is included in the UX so the legal destination and reading flow are fully designed.
            </p>
          </div>

          {/* Section 3 */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <h3 className="self-stretch text-text-primary text-base font-semibold font-['Montserrat']">
              3. Service Providers & Integrations
            </h3>
            <p className="w-full max-w-[884px] text-text-secondary text-sm font-normal font-['Montserrat'] leading-relaxed">
              Content to be finalized for production. This section is included in the UX so the legal destination and reading flow are fully designed.
            </p>
          </div>

          {/* Section 4 */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <h3 className="self-stretch text-text-primary text-base font-semibold font-['Montserrat']">
              4. Uploaded Property Data
            </h3>
            <p className="w-full max-w-[884px] text-text-secondary text-sm font-normal font-['Montserrat'] leading-relaxed">
              Content to be finalized for production. This section is included in the UX so the legal destination and reading flow are fully designed.
            </p>
          </div>

          {/* Section 5 */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <h3 className="self-stretch text-text-primary text-base font-semibold font-['Montserrat']">
              5. Data Retention & Security
            </h3>
            <p className="w-full max-w-[884px] text-text-secondary text-sm font-normal font-['Montserrat'] leading-relaxed">
              Content to be finalized for production. This section is included in the UX so the legal destination and reading flow are fully designed.
            </p>
          </div>

          {/* Section 6 */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 pb-2">
            <h3 className="self-stretch text-text-primary text-base font-semibold font-['Montserrat']">
              6. Your Choices & Contact
            </h3>
            <p className="w-full max-w-[884px] text-text-secondary text-sm font-normal font-['Montserrat'] leading-relaxed">
              Content to be finalized for production. This section is included in the UX so the legal destination and reading flow are fully designed.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
