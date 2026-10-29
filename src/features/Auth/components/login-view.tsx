"use client";

import React from "react";
import Image from "next/image";
import { LoginForm } from "./login-form";

export function LoginView() {
  return (
    <div className="w-full max-w-[800px] p-6 sm:p-10 md:p-12 bg-bg-surface rounded-lg border-2 border-text-disabled flex flex-col justify-center items-center gap-6 sm:gap-8 shadow-xl overflow-hidden my-8">
      {/* Brand Logo matching Figma Header */}
      <div className="w-full max-w-sm flex items-center justify-center py-2">
        <Image
          src="/assets/images/logo.png"
          alt="Vision Before Lease"
          width={280}
          height={55}
          priority
          className="h-auto w-[240px] sm:w-[280px]"
        />
      </div>

      {/* Header Titles */}
      <div className="self-stretch flex flex-col justify-start items-center gap-2 text-center">
        <h1 className="self-stretch text-text-primary text-2xl font-semibold font-['Montserrat'] tracking-wide">
          SIGN IN TO ACCOUNT
        </h1>
        <p className="self-stretch text-slate-500 text-base font-medium font-['Montserrat']">
          Commercial Retail Intelligence Platform
        </p>
      </div>

      {/* Thin Horizontal Divider */}
      <div className="self-stretch h-px bg-slate-200" />

      {/* Sign In Form */}
      <LoginForm />
    </div>
  );
}
