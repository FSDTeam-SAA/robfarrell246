"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useResetPassword } from "../hooks/use-reset-password";
import { AllSetView } from "./all-set-view";

export function ResetPasswordView() {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isLoading,
    isSuccess,
    handleSubmit,
    handleGoBack,
    handleContinueToSignIn,
  } = useResetPassword();

  if (isSuccess) {
    return <AllSetView onContinue={handleContinueToSignIn} />;
  }

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

      {/* Title & Subtitle */}
      <div className="self-stretch flex flex-col justify-start items-center gap-3 text-center">
        <h1 className="self-stretch text-text-primary text-2xl font-semibold font-['Montserrat'] tracking-wide">
          RESET PASSWORD?
        </h1>
        <p className="self-stretch text-slate-500 text-base font-medium font-['Montserrat'] leading-relaxed">
          Please enter a new password for your account. Use a strong password to keep your account secure.
        </p>
      </div>

      {/* Form with Password and Confirm Password */}
      <form onSubmit={handleSubmit} className="self-stretch flex flex-col justify-start items-start gap-5">
        {/* NEW PASSWORD */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <label className="self-stretch justify-start text-text-primary text-base font-normal font-['Montserrat']">
            NEW PASSWORD
          </label>
          <div className="self-stretch p-3.5 bg-bg-surface rounded-sm outline outline-1 outline-offset-[-1px] outline-text-tertiary focus-within:outline-[#2563eb] focus-within:outline-2 transition flex items-center justify-between">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-transparent text-text-primary text-sm font-medium font-['Montserrat'] placeholder:text-text-disabled outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-400 hover:text-slate-600 transition pl-2 cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <label className="self-stretch justify-start text-text-primary text-base font-normal font-['Montserrat']">
            CONFIRM PASSWORD
          </label>
          <div className="self-stretch p-3.5 bg-bg-surface rounded-sm outline outline-1 outline-offset-[-1px] outline-text-tertiary focus-within:outline-[#2563eb] focus-within:outline-2 transition flex items-center justify-between">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-transparent text-text-primary text-sm font-medium font-['Montserrat'] placeholder:text-text-disabled outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-slate-400 hover:text-slate-600 transition pl-2 cursor-pointer"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        {/* Submit Action Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="self-stretch px-8 py-4 bg-text-brand hover:bg-blue-700 active:bg-blue-800 rounded-xs inline-flex justify-center items-center gap-2.5 transition text-bg-canvas text-base font-medium font-['Montserrat'] shadow-xs cursor-pointer disabled:opacity-60 mt-3"
        >
          <span>{isLoading ? "Updating Password..." : "RESET PASSWORD"}</span>
        </button>
      </form>
    </div>
  );
}
