"use client";

import React from "react";
import { Upload, Building2, CheckCircle2 } from "lucide-react";
import { ProfileFormData } from "../types/settings.types";

interface ProfileTabProps {
  profile: ProfileFormData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileFormData>>;
  onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ProfileTab({
  profile,
  setProfile,
  onLogoUpload,
  onSubmit,
}: ProfileTabProps) {
  return (
    <div className="w-full bg-white rounded-lg border border-neutral-200 shadow-xs overflow-hidden">
      <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center bg-white">
        <h2 className="text-[#0f172a] text-xl font-semibold font-['Montserrat']">
          Personal & Company Profile
        </h2>
      </div>

      <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[#0f172a] text-sm font-semibold font-['Montserrat'] uppercase tracking-wider">
              FULL NAME
            </label>
            <div className="p-3.5 bg-white rounded-sm border border-[#94a3b8]/60 focus-within:border-[#2563eb] focus-within:ring-1 focus-within:ring-[#2563eb] transition shadow-2xs">
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, fullName: e.target.value }))
                }
                placeholder="E.G. ALEX MORGAN"
                className="w-full bg-transparent text-[#0f172a] text-sm font-medium font-['Montserrat'] placeholder:text-[#cbd5e1] outline-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#0f172a] text-sm font-semibold font-['Montserrat'] uppercase tracking-wider">
              WORK EMAIL
            </label>
            <div className="p-3.5 bg-white rounded-sm border border-[#94a3b8]/60 focus-within:border-[#2563eb] focus-within:ring-1 focus-within:ring-[#2563eb] transition shadow-2xs">
              <input
                type="email"
                value={profile.workEmail}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, workEmail: e.target.value }))
                }
                placeholder="alex@firm.com"
                className="w-full bg-transparent text-[#0f172a] text-sm font-medium font-['Montserrat'] placeholder:text-[#cbd5e1] outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[#0f172a] text-sm font-semibold font-['Montserrat']">
              Company / Brokerage
            </label>
            <div className="p-3.5 bg-white rounded-sm border border-[#94a3b8]/60 focus-within:border-[#2563eb] focus-within:ring-1 focus-within:ring-[#2563eb] transition shadow-2xs">
              <input
                type="text"
                value={profile.company}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, company: e.target.value }))
                }
                placeholder="Austin Retail Commercial Partners"
                className="w-full bg-transparent text-[#0f172a] text-sm font-medium font-['Montserrat'] placeholder:text-[#cbd5e1] outline-none"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#0f172a] text-sm font-semibold font-['Montserrat']">
              Phone Number
            </label>
            <div className="p-3.5 bg-white rounded-sm border border-[#94a3b8]/60 focus-within:border-[#2563eb] focus-within:ring-1 focus-within:ring-[#2563eb] transition shadow-2xs">
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, phone: e.target.value }))
                }
                placeholder="(512) 849-2201"
                className="w-full bg-transparent text-[#0f172a] text-sm font-medium font-['Montserrat'] placeholder:text-[#cbd5e1] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#0f172a] text-sm font-semibold font-['Montserrat']">
            Brokerage / Company Logo
          </label>
          <div className="p-4 bg-white rounded-sm border border-[#94a3b8]/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="size-12 rounded-md bg-[#e2e8f0]/70 flex items-center justify-center shrink-0 overflow-hidden border border-[#cbd5e1]">
                {profile.logoPreview ? (
                  <img
                    src={profile.logoPreview}
                    alt="Company Logo Preview"
                    className="size-full object-cover"
                  />
                ) : (
                  <Building2 className="size-6 text-[#64748b]" />
                )}
              </div>
              <div className="flex flex-col">
                <div className="text-[#0f172a] text-sm font-medium font-['Montserrat']">
                  {profile.logoPreview ? "Custom Company Logo Uploaded" : "No Custom Company Logo"}
                </div>
                <div className="text-[#94a3b8] text-xs font-normal font-['Montserrat'] mt-0.5">
                  Currently using default VisionBeforeLease branding and brokerage initials fallback.
                </div>
              </div>
            </div>

            <label className="shrink-0 px-4 py-2 bg-blue-600/15 hover:bg-blue-600/25 text-[#2563eb] border border-blue-200 rounded-sm inline-flex items-center gap-2 text-xs font-medium font-['Montserrat'] transition cursor-pointer shadow-2xs">
              <Upload className="size-3.5" />
              <span>Upload Logo</span>
              <input
                type="file"
                accept="image/*"
                onChange={onLogoUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-sm text-base font-medium font-['Montserrat'] transition shadow-xs cursor-pointer flex items-center gap-2"
          >
            <CheckCircle2 className="size-4" />
            <span>Save Profile Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
}
