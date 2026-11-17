"use client";

import { useMemo, useState } from "react";

import { INITIAL_PROJECTS } from "../api/project.api";

export function useProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("All Statuses");
  const [market, setMarket] = useState("All Markets");
  const [propertyType, setPropertyType] = useState("All Property Types");

  const projects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return INITIAL_PROJECTS.filter((item) => {
      const matchesSearch =
        !query || item.name.toLowerCase().includes(query) || item.address.toLowerCase().includes(query);
      const matchesStatus = status === "All Statuses" || item.status === status;
      const matchesMarket = market === "All Markets" || item.address.includes(market);
      const matchesType =
        propertyType === "All Property Types" ||
        item.topConcept.toLowerCase().includes(propertyType.split(" ")[0].toLowerCase());
      return matchesSearch && matchesStatus && matchesMarket && matchesType;
    });
  }, [searchQuery, status, market, propertyType]);

  return {
    projects,
    searchQuery,
    setSearchQuery,
    status,
    setStatus,
    market,
    setMarket,
    propertyType,
    setPropertyType,
  };
}
