import { create } from "zustand";

export type RoleType = "admin" | "manager" | "viewer";
export type TimeRangeType = "24h" | "7d" | "30d" | "90d";

interface UIState {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  isMobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  selectedTimeRange: TimeRangeType;
  setTimeRange: (range: TimeRangeType) => void;
  activeRole: RoleType;
  setActiveRole: (role: RoleType) => void;
  creditBalance: number;
  maxCredits: number;
  addCredits: (amount: number) => void;
  unreadNotificationsCount: number;
  clearNotifications: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarCollapsed: false,
  toggleSidebar: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
  setSidebarCollapsed: (collapsed) => set({ isSidebarCollapsed: collapsed }),
  isMobileSidebarOpen: false,
  setMobileSidebarOpen: (open) => set({ isMobileSidebarOpen: open }),
  selectedTimeRange: "30d",
  setTimeRange: (range) => set({ selectedTimeRange: range }),
  activeRole: "admin",
  setActiveRole: (role) => set({ activeRole: role }),
  creditBalance: 28,
  maxCredits: 100,
  addCredits: (amount: number) => set((state) => ({ creditBalance: state.creditBalance + amount })),
  unreadNotificationsCount: 3,
  clearNotifications: () => set({ unreadNotificationsCount: 0 }),
}));
