"use client";

import React from "react";
import { ShieldCheck, Laptop, Smartphone } from "lucide-react";
import { SecurityFormData, ActiveSession } from "../types/settings.types";

interface SecurityTabProps {
  security: SecurityFormData;
  setSecurity: React.Dispatch<React.SetStateAction<SecurityFormData>>;
  sessions: ActiveSession[];
  onRevokeSession: (sessionId: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function SecurityTab({
  security,
  setSecurity,
  sessions,
  onRevokeSession,
  onSubmit,
}: SecurityTabProps) {
  return (
    <div className="w-full bg-white rounded-lg border border-neutral-200 shadow-xs overflow-hidden">
      <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center bg-white">
        <h2 className="text-[#0f172a] text-xl font-semibold font-['Montserrat']">
          Security & Active Sessions
        </h2>
      </div>

      <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[#0f172a] text-sm font-semibold font-['Montserrat']">
              Current Password
            </label>
            <input
              type="password"
              value={security.currentPassword}
              onChange={(e) =>
                setSecurity((prev) => ({ ...prev, currentPassword: e.target.value }))
              }
              placeholder="••••••••••••"
              className="p-3.5 bg-white rounded-sm border border-[#94a3b8]/60 text-sm font-medium font-['Montserrat'] outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#0f172a] text-sm font-semibold font-['Montserrat']">
              New Password
            </label>
            <input
              type="password"
              value={security.newPassword}
              onChange={(e) =>
                setSecurity((prev) => ({ ...prev, newPassword: e.target.value }))
              }
              placeholder="••••••••••••"
              className="p-3.5 bg-white rounded-sm border border-[#94a3b8]/60 text-sm font-medium font-['Montserrat'] outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#0f172a] text-sm font-semibold font-['Montserrat']">
              Confirm Password
            </label>
            <input
              type="password"
              value={security.confirmPassword}
              onChange={(e) =>
                setSecurity((prev) => ({ ...prev, confirmPassword: e.target.value }))
              }
              placeholder="••••••••••••"
              className="p-3.5 bg-white rounded-sm border border-[#94a3b8]/60 text-sm font-medium font-['Montserrat'] outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
            />
          </div>
        </div>

        {/* 2FA Card */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-6 text-green-600" />
            <div>
              <h4 className="text-sm font-semibold text-slate-900 font-['Montserrat']">
                Two-Factor Authentication (2FA)
              </h4>
              <p className="text-xs text-slate-500 font-['Montserrat']">
                Secure your brokerage data by requiring a verification code on login.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              setSecurity((prev) => ({
                ...prev,
                twoFactorEnabled: !prev.twoFactorEnabled,
              }))
            }
            className={`px-4 py-1.5 rounded text-xs font-semibold font-['Montserrat'] transition cursor-pointer ${
              security.twoFactorEnabled
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-slate-200 text-slate-700"
            }`}
          >
            {security.twoFactorEnabled ? "Enabled" : "Disabled"}
          </button>
        </div>

        {/* Active Sessions */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-900 font-['Montserrat']">
            Current Active Devices
          </h4>
          <div className="divide-y divide-slate-100 border border-slate-200 rounded-sm overflow-hidden">
            {sessions.map((sess) => (
              <div
                key={sess.id}
                className="p-3.5 flex items-center justify-between bg-white text-xs"
              >
                <div className="flex items-center gap-3">
                  {sess.device.includes("Phone") ? (
                    <Smartphone className="size-4 text-slate-400" />
                  ) : (
                    <Laptop className="size-4 text-blue-600" />
                  )}
                  <div>
                    <p className="font-semibold text-slate-800">
                      {sess.device} - {sess.location}
                    </p>
                    <p className="text-slate-400">{sess.browser}</p>
                  </div>
                </div>

                {sess.isCurrent ? (
                  <span className="text-green-600 font-semibold">Online</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => onRevokeSession(sess.id)}
                    className="text-red-600 hover:underline cursor-pointer"
                  >
                    Revoke
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-sm text-base font-medium font-['Montserrat'] transition shadow-xs cursor-pointer"
          >
            Update Security Settings
          </button>
        </div>
      </form>
    </div>
  );
}
