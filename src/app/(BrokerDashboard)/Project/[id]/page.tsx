import { Suspense } from "react";

import { ProjectDetailView } from "@/features/Project";
import { INITIAL_PROJECTS } from "@/features/Project/api/project.api";

export function generateStaticParams() {
  return INITIAL_PROJECTS.map((project) => ({ id: project.id }));
}

async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectDetailView projectId={id} />;
}

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <ProjectDetail params={params} />
    </Suspense>
  );
}
