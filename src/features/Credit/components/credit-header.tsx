"use client";

import React from "react";

interface CreditHeaderProps {
  onTopUpClick: () => void;
}

export function CreditHeader({ onTopUpClick }: CreditHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex flex-col justify-start items-start gap-1">
        <h1 className="text-text-primary text-2xl font-bold font-['Montserrat']">
          AI Credits & Wallet
        </h1>
        <p className="text-text-secondary text-base font-normal font-['Montserrat']">
          Good afternoon, Alex. Here’s what’s happening across your retail portfolio.
        </p>
      </div>

      <button
        type="button"
        onClick={onTopUpClick}
        className="px-8 py-3.5 bg-text-brand hover:bg-blue-700 active:bg-blue-800 rounded-xs inline-flex justify-center items-center gap-2.5 transition shadow-xs cursor-pointer shrink-0"
      >
        <div className="size-5 relative flex items-center justify-center shrink-0">
          <svg
            className="size-5 text-bg-canvas"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="6" cy="10" r="1.5" fill="currentColor" />
            <path d="M12 9H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M12 11H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-bg-canvas text-base font-medium font-['Montserrat']">
          Top Up Credits
        </span>
      </button>
    </div>
  );
}
