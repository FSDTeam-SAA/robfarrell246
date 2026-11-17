"use client";

import { useState } from "react";

import { AnalysisTabId, projectInfo } from "../api/analysis-report.data";
import { CONCEPT_OPPORTUNITIES, INITIAL_PROJECTS } from "../api/project.api";
import { ConceptOpportunities } from "./concept-opportunities";
import AnalysisHeader from "./detail/analysis-header";
import AnalysisTabs from "./detail/analysis-tabs";
import AiRenderingsTab from "./detail/tabs/ai-renderings-tab";
import AssumptionsTab from "./detail/tabs/assumptions-tab";
import BudgetInvestmentTab from "./detail/tabs/budget-investment-tab";
import CompetitionPoisTab from "./detail/tabs/competition-pois-tab";
import FitScoreTab from "./detail/tabs/fit-score-tab";
import MarketDemographicsTab from "./detail/tabs/market-demographics-tab";
import OverviewTab from "./detail/tabs/overview-tab";
import ReportPreviewTab from "./detail/tabs/report-preview-tab";
import VersionHistoryTab from "./detail/tabs/version-history-tab";

export function ProjectDetailView({ projectId }: { projectId: string }) {
  const [activeTab, setActiveTab] = useState<AnalysisTabId>("overview");
  const [activeConcept, setActiveConcept] = useState(1);

  // Dummy data: every project shows the same report; only the title follows the card.
  const project = INITIAL_PROJECTS.find((item) => item.id === projectId);
  const info = project ? { ...projectInfo, name: project.name } : projectInfo;

  return (
    <section className="flex flex-col gap-6">
      <AnalysisHeader info={info} />
      <ConceptOpportunities
        concepts={CONCEPT_OPPORTUNITIES}
        activeRank={activeConcept}
        onSelect={setActiveConcept}
      />
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
    </section>
  );
}
