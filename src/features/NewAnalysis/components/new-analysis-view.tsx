"use client";

import { useState } from "react";

import { AnalysisTabId } from "@/features/Project/api/analysis-report.data";
import AnalysisHeader from "@/features/Project/components/detail/analysis-header";
import AnalysisTabs from "@/features/Project/components/detail/analysis-tabs";
import AiRenderingsTab from "@/features/Project/components/detail/tabs/ai-renderings-tab";
import AssumptionsTab from "@/features/Project/components/detail/tabs/assumptions-tab";
import BudgetInvestmentTab from "@/features/Project/components/detail/tabs/budget-investment-tab";
import CompetitionPoisTab from "@/features/Project/components/detail/tabs/competition-pois-tab";
import FitScoreTab from "@/features/Project/components/detail/tabs/fit-score-tab";
import MarketDemographicsTab from "@/features/Project/components/detail/tabs/market-demographics-tab";
import OverviewTab from "@/features/Project/components/detail/tabs/overview-tab";
import ReportPreviewTab from "@/features/Project/components/detail/tabs/report-preview-tab";
import VersionHistoryTab from "@/features/Project/components/detail/tabs/version-history-tab";

export function NewAnalysisView() {
  const [activeTab, setActiveTab] = useState<AnalysisTabId>("overview");

  return (
    <section>
      <div className="flex flex-col gap-6">
        <AnalysisHeader />
        <AnalysisTabs activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "ai-renderings" && <AiRenderingsTab />}
        {activeTab === "market-demographics" && <MarketDemographicsTab />}
        {activeTab === "competition-pois" && <CompetitionPoisTab />}
        {activeTab === "budget-investment" && <BudgetInvestmentTab />}
        {activeTab === "assumptions" && <AssumptionsTab />}
        {activeTab === "fit-score" && <FitScoreTab />}
        {activeTab === "report-preview" && <ReportPreviewTab />}
        {activeTab === "version-history" && <VersionHistoryTab />}
      </div>
    </section>
  );
}
