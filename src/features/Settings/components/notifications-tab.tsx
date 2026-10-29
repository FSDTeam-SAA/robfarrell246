"use client";

import React from "react";
import { NotificationFormData } from "../types/settings.types";

interface NotificationsTabProps {
  notifications: NotificationFormData;
  setNotifications: React.Dispatch<React.SetStateAction<NotificationFormData>>;
  onSubmit: (e: React.FormEvent) => void;
}

export function NotificationsTab({
  notifications,
  setNotifications,
  onSubmit,
}: NotificationsTabProps) {
  return (
    <div className="w-full bg-white rounded-lg border border-neutral-200 shadow-xs overflow-hidden">
      <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center bg-white">
        <h2 className="text-[#0f172a] text-xl font-semibold font-['Montserrat']">
          Notification & Email Preferences
        </h2>
      </div>

      <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-6">
        <div className="divide-y divide-slate-100 border border-slate-200 rounded-sm overflow-hidden">
          <div className="p-4 flex items-center justify-between bg-white">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 font-['Montserrat']">
                Spatial Analysis Completed Alerts
              </h4>
              <p className="text-xs text-slate-500 font-['Montserrat']">
                Receive an immediate email when retail fit scores and tenant models are computed.
              </p>
            </div>
            <input
              type="checkbox"
              checked={notifications.notifyAnalysis}
              onChange={(e) =>
                setNotifications((prev) => ({
                  ...prev,
                  notifyAnalysis: e.target.checked,
                }))
              }
              className="size-4 text-blue-600 rounded cursor-pointer"
            />
          </div>

          <div className="p-4 flex items-center justify-between bg-white">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 font-['Montserrat']">
                Credit Quota & Ledger Alerts
              </h4>
              <p className="text-xs text-slate-500 font-['Montserrat']">
                Get notified when your credit balance drops below 20% or renews.
              </p>
            </div>
            <input
              type="checkbox"
              checked={notifications.notifyCredits}
              onChange={(e) =>
                setNotifications((prev) => ({
                  ...prev,
                  notifyCredits: e.target.checked,
                }))
              }
              className="size-4 text-blue-600 rounded cursor-pointer"
            />
          </div>

          <div className="p-4 flex items-center justify-between bg-white">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 font-['Montserrat']">
                Product Releases & AI Roadmap Updates
              </h4>
              <p className="text-xs text-slate-500 font-['Montserrat']">
                Stay up to date with new spatial modeling features and market coverage.
              </p>
            </div>
            <input
              type="checkbox"
              checked={notifications.notifyMarketing}
              onChange={(e) =>
                setNotifications((prev) => ({
                  ...prev,
                  notifyMarketing: e.target.checked,
                }))
              }
              className="size-4 text-blue-600 rounded cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-sm text-base font-medium font-['Montserrat'] transition shadow-xs cursor-pointer"
          >
            Save Notification Preferences
          </button>
        </div>
      </form>
    </div>
  );
}
