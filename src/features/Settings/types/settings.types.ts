export type SettingsTabType = "profile" | "security" | "notifications";

export interface ProfileFormData {
  fullName: string;
  workEmail: string;
  company: string;
  phone: string;
  logoPreview: string | null;
}

export interface SecurityFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  twoFactorEnabled: boolean;
}

export interface NotificationFormData {
  notifyAnalysis: boolean;
  notifyCredits: boolean;
  notifyMarketing: boolean;
}

export interface ActiveSession {
  id: string;
  device: string;
  location: string;
  browser: string;
  timeAgo: string;
  isCurrent: boolean;
}
