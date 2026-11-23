import { ArrowRight, MapPin, MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProjectItem } from "../types/project.types";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-[8px] border border-[#CBD5E1] bg-bg-canvas">
      <div className="relative h-[220px] w-full sm:h-[240px] xl:h-[280px]">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute right-4 top-4 rounded-[6px] bg-bg-success-subtle px-2 py-1 text-[14px] font-medium text-status-success">
          {project.status}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[20px] font-bold text-text-primary">{project.name}</h3>
            <p className="mt-2 flex items-center gap-2 text-[14px] text-[#475569]">
              <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="truncate">{project.address}</span>
            </p>
          </div>
          <button
            type="button"
            aria-label={`More actions for ${project.name}`}
            className="shrink-0 rounded p-1 text-[#475569] transition hover:bg-slate-100"
          >
            <MoreVertical className="h-6 w-6" />
          </button>
        </div>

        <div className="my-1 h-px w-full bg-[#CBD5E1]" />

        <div className="grid grid-cols-2 gap-4">
          <div className="min-w-0 rounded-[8px] bg-[#F1F5F9] p-3">
            <p className="text-[14px] text-[#475569]">Top Concept:</p>
            <p className="mt-2 truncate text-[18px] font-semibold text-text-primary">{project.topConcept}</p>
          </div>
          <div className="min-w-0 rounded-[8px] bg-[#F1F5F9] p-3">
            <p className="text-[14px] text-[#475569]">Footprint:</p>
            <p className="mt-2 truncate text-[18px] font-semibold text-text-primary">{project.footprint}</p>
          </div>
        </div>

        <div className="h-px w-full bg-[#CBD5E1]" />

        <Link
          href={`/Project/${project.id}`}
          className="mt-1 flex h-[52px] items-center justify-center gap-2.5 rounded-[2px] bg-text-brand px-8 text-[16px] font-medium text-bg-canvas transition hover:bg-blue-700"
        >
          Open Analysis Workspace
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
