"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface AllSetViewProps {
  onContinue: () => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function AllSetView({
  onContinue,
  title = "YOU’RE ALL SET",
  subtitle = "Your password is changed and ready to go.",
  buttonText = "CONTINUE TO SIGN IN",
}: AllSetViewProps) {
  return (
    <div className="w-full max-w-[640px] p-6 sm:p-10 md:p-12 bg-bg-surface rounded-lg outline outline-2 outline-offset-[-2px] outline-text-disabled flex flex-col justify-center items-center gap-8 shadow-xl overflow-hidden my-8">
      {/* Brand Logo */}
      <div className="w-full max-w-sm flex items-center justify-center py-1">
        <Image
          src="/assets/images/logo.png"
          alt="Vision Before Lease"
          width={280}
          height={55}
          priority
          className="h-auto w-[240px] sm:w-[280px]"
        />
      </div>

      {/* Success Emerald Icon */}
      <div className="size-28 p-2.5 bg-bg-success-subtle rounded-full flex justify-center items-center gap-2.5 shadow-xs">
        <div className="size-16 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm">
          <Check className="size-9 stroke-[3]" />
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="self-stretch flex flex-col justify-start items-center gap-2 text-center">
        <h1 className="self-stretch text-text-primary text-2xl font-semibold font-['Montserrat'] tracking-wide">
          {title}
        </h1>
        <p className="self-stretch text-slate-500 text-base font-medium font-['Montserrat']">
          {subtitle}
        </p>
      </div>

      {/* Continue Action Button */}
      <button
        type="button"
        onClick={onContinue}
        className="self-stretch px-8 py-4 bg-text-brand hover:bg-blue-700 active:bg-blue-800 rounded-xs inline-flex justify-center items-center gap-2.5 transition text-bg-canvas text-base font-medium font-['Montserrat'] shadow-xs cursor-pointer"
      >
        <span>{buttonText}</span>
      </button>
    </div>
  );
}
