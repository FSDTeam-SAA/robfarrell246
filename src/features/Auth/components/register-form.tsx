"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRegister } from "../hooks/use-register";
import { GoogleButton } from "./google-button";
import { RoleSelector } from "./role-selector";
import { TermsModal } from "./terms-modal";
import { PrivacyModal } from "./privacy-modal";

export function RegisterForm() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const {
    form,
    showPassword,
    setShowPassword,
    isLoading,
    handleRoleSelect,
    handleFieldChange,
    handleSubmit,
    handleGoogleSignIn,
  } = useRegister();

  return (
    <form onSubmit={handleSubmit} className="self-stretch flex flex-col justify-start items-start gap-4">
      {/* Google OAuth Button */}
      <GoogleButton onClick={handleGoogleSignIn} />

      {/* Or Divider */}
      <div className="self-stretch h-5 inline-flex justify-center items-center gap-3 overflow-hidden my-1">
        <div className="flex-1 h-px bg-slate-200"></div>
        <div className="justify-start text-slate-500 text-xs font-semibold font-['Montserrat'] whitespace-nowrap">
          OR CONTINUE WITH EMAIL
        </div>
        <div className="flex-1 h-px bg-slate-200"></div>
      </div>

      {/* Select Primary Function */}
      <RoleSelector
        selectedRole={form.role}
        onSelectRole={handleRoleSelect}
      />

      {/* FULL NAME */}
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <label className="self-stretch justify-start text-text-primary text-base font-normal font-['Montserrat']">
          FULL NAME
        </label>
        <div className="self-stretch p-3.5 bg-bg-surface rounded-sm outline outline-1 outline-offset-[-1px] outline-text-tertiary focus-within:outline-[#2563eb] focus-within:outline-2 transition flex items-center">
          <input
            type="text"
            value={form.fullName}
            onChange={(e) => handleFieldChange("fullName", e.target.value)}
            placeholder="E.G. ALEX MORGAN"
            className="w-full bg-transparent text-text-primary text-sm font-medium font-['Montserrat'] placeholder:text-text-disabled outline-none uppercase"
            required
          />
        </div>
      </div>

      {/* COMPANY / BROKERAGE */}
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <label className="self-stretch justify-start text-text-primary text-base font-normal font-['Montserrat']">
          COMPANY / BROKERAGE
        </label>
        <div className="self-stretch p-3.5 bg-bg-surface rounded-sm outline outline-1 outline-offset-[-1px] outline-text-tertiary focus-within:outline-[#2563eb] focus-within:outline-2 transition flex items-center">
          <input
            type="text"
            value={form.company}
            onChange={(e) => handleFieldChange("company", e.target.value)}
            placeholder="E.G. CUSHMAN & WAKEFIELD"
            className="w-full bg-transparent text-text-primary text-sm font-medium font-['Montserrat'] placeholder:text-text-disabled outline-none uppercase"
          />
        </div>
      </div>

      {/* WORK EMAIL */}
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <label className="self-stretch justify-start text-text-primary text-base font-normal font-['Montserrat']">
          WORK EMAIL
        </label>
        <div className="self-stretch p-3.5 bg-bg-surface rounded-sm outline outline-1 outline-offset-[-1px] outline-text-tertiary focus-within:outline-[#2563eb] focus-within:outline-2 transition flex items-center">
          <input
            type="email"
            value={form.workEmail}
            onChange={(e) => handleFieldChange("workEmail", e.target.value)}
            placeholder="alex@firm.com"
            className="w-full bg-transparent text-text-primary text-sm font-medium font-['Montserrat'] placeholder:text-text-disabled outline-none"
            required
          />
        </div>
      </div>

      {/* PASSWORD */}
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <label className="self-stretch justify-start text-text-primary text-base font-normal font-['Montserrat']">
          PASSWORD
        </label>
        <div className="self-stretch p-3.5 bg-bg-surface rounded-sm outline outline-1 outline-offset-[-1px] outline-text-tertiary focus-within:outline-[#2563eb] focus-within:outline-2 transition flex items-center justify-between">
          <input
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={(e) => handleFieldChange("password", e.target.value)}
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

      {/* Terms & Privacy Checkbox */}
      <div className="w-full inline-flex justify-start items-center gap-2 overflow-hidden py-1">
        <input
          type="checkbox"
          id="terms"
          checked={form.agreeToTerms}
          onChange={(e) => handleFieldChange("agreeToTerms", e.target.checked)}
          className="size-4 bg-white rounded-[3px] border border-slate-400 text-blue-600 focus:ring-0 cursor-pointer"
          required
        />
        <label htmlFor="terms" className="text-slate-600 text-sm font-normal font-['Montserrat'] flex flex-wrap items-center gap-1 cursor-pointer">
          <span>I agree to the</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsTermsOpen(true);
            }}
            className="text-blue-600 font-bold hover:underline cursor-pointer"
          >
            Terms & Conditions
          </button>
          <span>and</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsPrivacyOpen(true);
            }}
            className="text-blue-600 font-bold hover:underline cursor-pointer"
          >
            Privacy Policy
          </button>
        </label>
      </div>


      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="self-stretch px-8 py-4 bg-text-brand hover:bg-blue-700 active:bg-blue-800 rounded-xs inline-flex justify-center items-center gap-2.5 transition shadow-xs cursor-pointer disabled:opacity-60 mt-2"
      >
        <span className="text-bg-canvas text-base font-medium font-['Montserrat']">
          {isLoading ? "Creating Account..." : "Create Account"}
        </span>
      </button>

      {/* Footer Separator */}
      <div className="self-stretch h-px bg-slate-200 my-2"></div>

      {/* Already have an account link */}
      <div className="self-stretch text-center sm:text-left">
        <span className="text-text-secondary text-sm font-medium font-['Montserrat']">
          Already have an account?{" "}
        </span>
        <Link
          href="/login"
          className="text-text-brand text-sm font-bold font-['Montserrat'] underline hover:text-blue-800 transition"
        >
          SIGN IN
        </Link>
      </div>

      {/* Terms & Conditions Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        backText="Back to Create Account"
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        backText="Back to Create Account"
      />
    </form>
  );
}
