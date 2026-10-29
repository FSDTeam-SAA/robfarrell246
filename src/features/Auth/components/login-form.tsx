"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useLogin } from "../hooks/use-login";
import { GoogleButton } from "./google-button";
import { TermsModal } from "./terms-modal";
import { PrivacyModal } from "./privacy-modal";

export function LoginForm() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const {
    form,
    showPassword,
    setShowPassword,
    isLoading,
    handleFieldChange,
    handleSubmit,
    handleGoogleSignIn,
  } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="self-stretch flex flex-col justify-start items-start gap-4">
      {/* Continue with Google */}
      <GoogleButton onClick={handleGoogleSignIn} />

      {/* Or Separator */}
      <div className="self-stretch h-5 inline-flex justify-center items-center gap-3 overflow-hidden my-1">
        <div className="flex-1 h-px bg-slate-200"></div>
        <div className="justify-start text-slate-500 text-xs font-semibold font-['Montserrat'] whitespace-nowrap">
          OR CONTINUE WITH EMAIL
        </div>
        <div className="flex-1 h-px bg-slate-200"></div>
      </div>

      {/* EMAIL ADDRESS */}
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <label className="self-stretch justify-start text-text-primary text-base font-normal font-['Montserrat']">
          EMAIL ADDRESS
        </label>
        <div className="self-stretch p-3.5 bg-bg-surface rounded-sm outline outline-1 outline-offset-[-1px] outline-text-tertiary focus-within:outline-[#2563eb] focus-within:outline-2 transition flex items-center">
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            placeholder="sarah.jenkins@cbre-demo.com"
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

      {/* Remember me & Forgot password Row */}
      <div className="self-stretch inline-flex justify-between items-center py-1">
        <label className="flex justify-start items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={form.rememberMe}
            onChange={(e) => handleFieldChange("rememberMe", e.target.checked)}
            className="size-4 bg-bg-surface rounded-[4px] border border-border-strong text-[#2563eb] focus:ring-0 cursor-pointer"
          />
          <span className="justify-start text-text-primary text-sm font-normal font-['Montserrat']">
            Remember me
          </span>
        </label>

        <Link
          href="/reset-password"
          className="text-center justify-start text-text-brand text-base font-medium font-['Montserrat'] hover:text-blue-800 hover:underline transition"
        >
          Forgot password?
        </Link>
      </div>

      {/* Action Button: SIGN IN */}
      <button
        type="submit"
        disabled={isLoading}
        className="self-stretch px-8 py-4 bg-text-brand hover:bg-blue-700 active:bg-blue-800 rounded-xs inline-flex justify-center items-center gap-2.5 transition text-bg-canvas text-base font-medium font-['Montserrat'] shadow-xs cursor-pointer disabled:opacity-60 mt-2"
      >
        <span>{isLoading ? "Signing in..." : "SIGN IN"}</span>
      </button>

      {/* Divider */}
      <div className="self-stretch h-px bg-slate-200 my-2"></div>

      {/* Don't have an account yet? CREATE ACCOUNT */}
      <div className="self-stretch text-center sm:text-left">
        <span className="text-text-secondary text-sm font-medium font-['Montserrat']">
          Don&apos;t have an account yet?{" "}
        </span>
        <Link
          href="/register"
          className="text-text-brand text-sm font-bold font-['Montserrat'] underline hover:text-blue-800 transition"
        >
          CREATE ACCOUNT
        </Link>
      </div>

      {/* Terms & Conditions Notice */}
      <div className="w-full text-center text-xs sm:text-sm text-slate-600 font-normal font-['Montserrat'] pt-1">
        <span>By continuing, you agree to the </span>
        <button
          type="button"
          onClick={() => setIsTermsOpen(true)}
          className="text-blue-600 font-semibold hover:underline cursor-pointer"
        >
          Terms & Conditions
        </button>
        <span> and </span>
        <button
          type="button"
          onClick={() => setIsPrivacyOpen(true)}
          className="text-blue-600 font-semibold hover:underline cursor-pointer"
        >
          Privacy Policy
        </button>
      </div>

      {/* Terms & Conditions Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        backText="Back to Sign In"
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        backText="Back to Sign In"
      />
    </form>
  );
}
