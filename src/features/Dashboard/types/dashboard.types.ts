export interface DashboardMetric {
  title: string;
  value: string;
  tag: string;
  tagVariant: "indigo" | "green" | "amber";
  subtitle?: string;
  linkText?: string;
  iconName: string;
  iconColor: "blue" | "green" | "amber";
  sparklineColor: "blue" | "green" | "amber";
}

export interface RecentActivityItem {
  id: string;
  title: string;
  subtitle: string;
  timeAgo: string;
  badge: string;
  badgeType: "analysis" | "report" | "tenant";
}
