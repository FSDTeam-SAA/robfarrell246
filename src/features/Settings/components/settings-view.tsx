"use client";

import React from "react";
import { useSettings } from "../hooks/use-settings";
import { ProfileTab } from "./profile-tab";
import { SecurityTab } from "./security-tab";
import { NotificationsTab } from "./notifications-tab";

export function SettingsView() {
  const {
    activeTab,
    setActiveTab,
    profile,
    setProfile,
    security,
    setSecurity,
    sessions,
    notifications,
    setNotifications,
    handleLogoUpload,
    handleSaveProfile,
    handleSaveSecurity,
    handleRevokeSession,
    handleSaveNotifications,
  } = useSettings();

  return (
    <div className="space-y-6">
      {/* Top Tabs Bar */}
      <div className="p-1.5 bg-white rounded-md border border-[#E2E8F0] inline-flex items-center gap-1.5 shadow-2xs">
        <button
          type="button"
          onClick={() => setActiveTab("profile")}
          className={`px-6 sm:px-7 py-2.5 rounded-sm text-sm sm:text-base font-medium font-['Montserrat'] transition cursor-pointer ${
            activeTab === "profile"
              ? "bg-[#2563eb] text-white shadow-xs"
              : "text-[#64748b] hover:text-[#0f172a] hover:bg-slate-50"
          }`}
        >
          Profile Information
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("security")}
          className={`px-6 sm:px-7 py-2.5 rounded-sm text-sm sm:text-base font-medium font-['Montserrat'] transition cursor-pointer ${
            activeTab === "security"
              ? "bg-[#2563eb] text-white shadow-xs"
              : "text-[#64748b] hover:text-[#0f172a] hover:bg-slate-50"
          }`}
        >
          Security & Sessions
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("notifications")}
          className={`px-6 sm:px-7 py-2.5 rounded-sm text-sm sm:text-base font-medium font-['Montserrat'] transition cursor-pointer ${
            activeTab === "notifications"
              ? "bg-[#2563eb] text-white shadow-xs"
              : "text-[#64748b] hover:text-[#0f172a] hover:bg-slate-50"
          }`}
        >
          Notification Preferences
        </button>
      </div>

      {/* Tab 1: Profile */}
      {activeTab === "profile" && (
        <ProfileTab
          profile={profile}
          setProfile={setProfile}
          onLogoUpload={handleLogoUpload}
          onSubmit={handleSaveProfile}
        />
      )}

      {/* Tab 2: Security */}
      {activeTab === "security" && (
        <SecurityTab
          security={security}
          setSecurity={setSecurity}
          sessions={sessions}
          onRevokeSession={handleRevokeSession}
          onSubmit={handleSaveSecurity}
        />
      )}

      {/* Tab 3: Notifications */}
      {activeTab === "notifications" && (
        <NotificationsTab
          notifications={notifications}
          setNotifications={setNotifications}
          onSubmit={handleSaveNotifications}
        />
      )}
    </div>
  );
}
