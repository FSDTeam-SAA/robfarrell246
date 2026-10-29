"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useVerifyEmail } from "../hooks/use-verify-email";

function VerifyEmailContent() {
  const {
    email,
    otp,
    inputRefs,
    isVerifying,
    isResending,
    resendCooldown,
    handleChange,
    handleKeyDown,
    handlePaste,
    handleVerify,
    handleResend,
    handleGoBack,
  } = useVerifyEmail();

  return (
    <div className="w-full max-w-[640px] p-6 sm:p-10 md:p-12 bg-bg-surface rounded-lg outline outline-2 outline-offset-[-2px] outline-text-disabled flex flex-col justify-center items-center gap-8 shadow-xl overflow-hidden my-8">
      {/* Top Left Go Back Button matching Figma */}
      <div className="self-stretch inline-flex justify-start items-center gap-2">
        <button
          type="button"
          onClick={handleGoBack}
          className="size-8 p-1 rounded-full outline outline-1 outline-offset-[-1px] outline-text-secondary flex justify-center items-center hover:bg-slate-100 transition cursor-pointer shrink-0"
          aria-label="Go back"
        >
          <ChevronLeft className="size-4 text-text-secondary" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          onClick={handleGoBack}
          className="justify-start text-text-secondary text-base font-medium font-['Montserrat'] hover:text-slate-800 transition cursor-pointer"
        >
          Go Back
        </button>
      </div>

      {/* Brand Logo matching Figma Header */}
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

      {/* Title & Email Notice */}
      <div className="self-stretch flex flex-col justify-start items-center gap-3">
        <h1 className="self-stretch text-center text-text-primary text-2xl font-semibold font-['Montserrat'] tracking-wide">
          VERIFY YOUR EMAIL
        </h1>
        <div className="self-stretch text-center">
          <span className="text-slate-500 text-base font-medium font-['Montserrat']">
            we sent a 6-digit code to{" "}
          </span>
          <span className="text-text-brand text-base font-bold font-['Montserrat']">
            {email}
          </span>
        </div>
      </div>

      {/* 6-Digit OTP Form */}
      <form onSubmit={handleVerify} className="self-stretch flex flex-col justify-start items-center gap-8">
        <div className="self-stretch flex justify-between items-center gap-2 sm:gap-3.5">
          {otp.map((digit, index) => (
            <div
              key={index}
              className="flex-1 h-12 bg-bg-subtle rounded-sm outline outline-1 outline-offset-[-1px] outline-text-disabled focus-within:outline-[#2563eb] focus-within:outline-2 transition flex items-center justify-center overflow-hidden"
            >
              <input
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-full h-full text-center text-text-primary text-lg font-bold font-['Montserrat'] bg-transparent outline-none select-all"
                autoFocus={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Resend Code Link */}
        <div className="self-stretch text-right">
          <span className="text-text-secondary text-sm font-medium font-['Montserrat']">
            Didn&apos;t receive it?{" "}
          </span>
          <button
            type="button"
            disabled={resendCooldown > 0 || isResending}
            onClick={handleResend}
            className="text-text-brand text-sm font-bold font-['Montserrat'] underline hover:text-blue-800 transition cursor-pointer disabled:opacity-50 disabled:no-underline"
          >
            {isResending
              ? "Sending..."
              : resendCooldown > 0
              ? `Resend in ${resendCooldown}s`
              : "Resend code"}
          </button>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          disabled={isVerifying}
          className="self-stretch px-8 py-4 bg-text-brand hover:bg-blue-700 active:bg-blue-800 rounded-xs inline-flex justify-center items-center gap-2.5 transition text-bg-canvas text-base font-medium font-['Montserrat'] shadow-xs cursor-pointer disabled:opacity-60"
        >
          <span>{isVerifying ? "Verifying..." : "VERIFY EMAIL"}</span>
        </button>
      </form>
    </div>
  );
}

export function VerifyEmailView() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-slate-500 font-['Montserrat']">
          Loading Verification...
        </div>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  );
}
