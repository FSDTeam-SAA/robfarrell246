"use client";

import { useState, useMemo } from "react";
import { ProjectItem, ProjectFilterStatus } from "../types/project.types";
import { INITIAL_PROJECTS } from "../api/project.api";
import { toast } from "sonner";

export function useProjects() {
  const [projects, setProjects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProjectFilterStatus>("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [projects, searchQuery, statusFilter]);

  const handleCreateProject = () => {
    toast.info("Opening New Property Ingestion Wizard...");
  };

  return {
    projects: filteredProjects,
    totalCount: projects.length,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    handleCreateProject,
  };
}
