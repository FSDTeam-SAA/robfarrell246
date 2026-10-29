import {
  ProfileFormData,
  SecurityFormData,
  NotificationFormData,
  ActiveSession,
} from "../types/settings.types";

export const DEFAULT_PROFILE: ProfileFormData = {
  fullName: "Alex Morgan",
  workEmail: "alex@firm.com",
  company: "Austin Retail Commercial Partners",
  phone: "(512) 849-2201",
  logoPreview: null,
};

export const DEFAULT_SECURITY: SecurityFormData = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
  twoFactorEnabled: true,
};

export const DEFAULT_NOTIFICATIONS: NotificationFormData = {
  notifyAnalysis: true,
  notifyCredits: true,
  notifyMarketing: false,
};

export const INITIAL_SESSIONS: ActiveSession[] = [
  {
    id: "sess-1",
    device: "MacBook Pro",
    location: "Austin, TX (Current Device)",
    browser: "Chrome Browser • Active now",
    timeAgo: "Active now",
    isCurrent: true,
  },
  {
    id: "sess-2",
    device: "iPhone 15 Pro",
    location: "Dallas, TX",
    browser: "Safari Mobile • 3 hours ago",
    timeAgo: "3 hours ago",
    isCurrent: false,
  },
];
