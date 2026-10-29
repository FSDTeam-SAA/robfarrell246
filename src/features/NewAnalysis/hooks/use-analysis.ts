"use client";

import { useState } from "react";
import { AnalysisFormData } from "../types/analysis.types";
import { DEFAULT_ANALYSIS_DATA } from "../api/analysis.api";
import { useUIStore } from "@/store/ui.store";
import { toast } from "sonner";

export function useAnalysis() {
  const { creditBalance } = useUIStore();
  const [form, setForm] = useState<AnalysisFormData>(DEFAULT_ANALYSIS_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const estimatedCredits =
    (form.includeFootTraffic ? 4 : 0) +
    (form.includePhotorealisticConcept ? 4 : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.propertyName || !form.propertyAddress) {
      toast.error("Please fill in property name and address.");
      return;
    }

    if ((creditBalance || 28) < estimatedCredits) {
      toast.error("Insufficient credit balance. Please top up your wallet.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        `AI Spatial Feasibility Study started for "${form.propertyName}"! -${estimatedCredits} Credits used.`
      );
      window.location.href = "/";
    }, 1200);
  };

  return {
    form,
    setForm,
    estimatedCredits,
    isSubmitting,
    handleSubmit,
  };
}
