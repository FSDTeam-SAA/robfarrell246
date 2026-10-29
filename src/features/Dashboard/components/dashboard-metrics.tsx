"use client";

import React from "react";
import { MetricCard } from "@/components/shared/metric-card";
import {
  Building2,
  FolderKanban,
  Sparkles,
  FileCheck,
  Coins,
} from "lucide-react";
import { DashboardMetric } from "../types/dashboard.types";

const iconMap = {
  Building2,
  FolderKanban,
  Sparkles,
  FileCheck,
  Coins,
};

interface DashboardMetricsProps {
  metrics: DashboardMetric[];
}

export function DashboardMetrics({ metrics }: DashboardMetricsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {metrics.map((m, idx) => {
        const IconComponent = iconMap[m.iconName as keyof typeof iconMap] || Building2;
        return (
          <MetricCard
            key={idx}
            title={m.title}
            value={m.value}
            tag={m.tag}
            tagVariant={m.tagVariant}
            subtitle={m.subtitle}
            linkText={m.linkText}
            icon={IconComponent}
            iconColor={m.iconColor}
            sparklineColor={m.sparklineColor}
          />
        );
      })}
    </div>
  );
}
