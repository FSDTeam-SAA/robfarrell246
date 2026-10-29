"use client";

import { useState } from "react";
import { DASHBOARD_METRICS } from "../api/dashboard.api";
import { toast } from "sonner";

export function useDashboard() {
  const [metrics] = useState(DASHBOARD_METRICS);

  const handleCreateAnalysis = () => {
    toast.info("Navigating to Spatial Analysis Setup...");
    window.location.href = "/NewAnalysis";
  };

  return {
    metrics,
    handleCreateAnalysis,
  };
}
