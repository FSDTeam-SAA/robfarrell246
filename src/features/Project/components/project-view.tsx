"use client";

import { ChevronDown, Plus, Search } from "lucide-react";
import Link from "next/link";

import {
  MARKET_FILTERS,
  PROPERTY_TYPE_FILTERS,
  STATUS_FILTERS,
} from "../api/project.api";
import { useProjects } from "../hooks/use-projects";
import { ProjectCard } from "./project-card";

export function ProjectView() {
  const {
    projects,
    searchQuery,
    setSearchQuery,
    status,
    setStatus,
    market,
    setMarket,
    propertyType,
    setPropertyType,
  } = useProjects();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <Link
          href="/NewAnalysis"
          className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[2px] bg-text-brand px-8 text-[16px] font-medium uppercase text-bg-canvas transition hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" aria-hidden="true" />
          New Analysis
        </Link>
      </div>

      <div className="rounded-[4px] bg-text-brand p-2 sm:px-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="flex h-[34px] w-full items-center gap-2 rounded-[6px] border border-border-default bg-white px-3 sm:w-[397px]">
            <Search className="h-5 w-5 shrink-0 text-[#808080]" aria-hidden="true" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by property address, name or city..."
              aria-label="Search projects"
              className="min-w-0 flex-1 bg-transparent text-[12px] text-text-primary outline-none placeholder:text-[#808080]"
            />
            <kbd className="rounded-[4px] border border-[#DDDDDE] bg-white px-2 py-1 text-[12px] text-[#808080]">⌘K</kbd>
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <FilterSelect label="Status" value={status} options={STATUS_FILTERS} onChange={setStatus} />
            <FilterSelect label="Market" value={market} options={MARKET_FILTERS} onChange={setMarket} />
            <FilterSelect
              label="Property type"
              value={propertyType}
              options={PROPERTY_TYPE_FILTERS}
              onChange={setPropertyType}
            />
          </div>
        </div>
      </div>

      {projects.length > 0 ? (
        <div className="rounded-[4px] border border-[#E2E8F0] bg-white/60 p-4 sm:p-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ) : (
        <p className="rounded-[4px] border border-[#E2E8F0] bg-white py-16 text-center text-[14px] text-[#475569]">
          No projects match your filters.
        </p>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="relative inline-flex items-center rounded-[4px] border border-[#DDDDDE] bg-[#F3F4F8]">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-[34px] cursor-pointer appearance-none bg-transparent py-2 pl-2 pr-8 text-[12px] font-medium text-[#252832] outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2 h-4 w-4 text-[#252832]" aria-hidden="true" />
    </label>
  );
}
