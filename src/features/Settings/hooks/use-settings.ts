"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  SettingsTabType,
  ProfileFormData,
  SecurityFormData,
  NotificationFormData,
  ActiveSession,
} from "../types/settings.types";
import {
  DEFAULT_PROFILE,
  DEFAULT_SECURITY,
  DEFAULT_NOTIFICATIONS,
  INITIAL_SESSIONS,
} from "../api/settings.api";

export function useSettings() {
  const [activeTab, setActiveTab] = useState<SettingsTabType>("profile");

  // Profile Form
  const [profile, setProfile] = useState<ProfileFormData>(DEFAULT_PROFILE);

  // Security Form
  const [security, setSecurity] = useState<SecurityFormData>(DEFAULT_SECURITY);
  const [sessions, setSessions] = useState<ActiveSession[]>(INITIAL_SESSIONS);

  // Notifications Form
  const [notifications, setNotifications] = useState<NotificationFormData>(DEFAULT_NOTIFICATIONS);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({
          ...prev,
          logoPreview: reader.result as string,
        }));
        toast.success("Logo uploaded successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile changes saved successfully!");
  };

  const handleSaveSecurity = (e: React.FormEvent) => {
    e.preventDefault();
    if (security.newPassword && security.newPassword !== security.confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }
    toast.success("Security settings updated successfully!");
    setSecurity((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  const handleRevokeSession = (sessionId: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== sessionId));
    toast.success("Device revoked successfully!");
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Notification preferences saved successfully!");
  };

  return {
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
  };
}
