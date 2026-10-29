"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { TicketData, TicketSummary } from "../types/support.types";
import { DEFAULT_TICKETS_DATABASE } from "../api/support.api";
import { toast } from "sonner";

export function useSupport() {
  const searchParams = useSearchParams();
  const queryTicketId = searchParams.get("id");

  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(
    queryTicketId || null
  );

  const [ticketsData, setTicketsData] = useState<Record<string, TicketData>>(
    DEFAULT_TICKETS_DATABASE
  );

  // New ticket modal state
  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false);
  const [newSubject, setNewSubject] = useState("");
  const [newProject, setNewProject] = useState("");
  const [newTopic, setNewTopic] = useState("Report / Export");
  const [newDescription, setNewDescription] = useState("");

  const handleUpdateTicket = (updatedTicket: TicketData) => {
    setTicketsData((prev) => ({
      ...prev,
      [updatedTicket.id]: updatedTicket,
    }));
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubject.trim()) return;

    const newId = `#SUP-${1025 + Object.keys(ticketsData).length}`;
    const created: TicketData = {
      id: newId,
      subject: newSubject,
      project: newProject || "General Project",
      topic: newTopic,
      priority: "Normal Priority",
      status: "In Review",
      submittedBy: "Alex Morgan",
      submittedEmail: "alex@firm.com",
      createdOn: "Just now",
      assignedAgent: "Alexander Sterling",
      messages: [
        {
          id: `msg-${Date.now()}`,
          author: "Alex Morgan",
          role: "Broker / Landlord",
          roleType: "user",
          timestamp: "Just now",
          avatarText: "AM",
          avatarBg: "bg-slate-900 text-white",
          content: newDescription || newSubject,
        },
      ],
    };

    setTicketsData((prev) => ({
      [newId]: created,
      ...prev,
    }));

    toast.success(`Ticket ${newId} created successfully!`);
    setIsNewTicketOpen(false);
    setNewSubject("");
    setNewProject("");
    setNewDescription("");
    setSelectedTicketId(newId);
  };

  const ticketSummaries: TicketSummary[] = Object.values(ticketsData).map((t) => ({
    id: t.id,
    subject: t.subject,
    project: t.project,
    topic: t.topic,
    status: t.status,
    lastUpdated: t.messages[t.messages.length - 1]?.timestamp || t.createdOn,
  }));

  const activeTicket = selectedTicketId ? ticketsData[selectedTicketId] : null;

  return {
    selectedTicketId,
    setSelectedTicketId,
    activeTicket,
    ticketSummaries,
    handleUpdateTicket,
    isNewTicketOpen,
    setIsNewTicketOpen,
    newSubject,
    setNewSubject,
    newProject,
    setNewProject,
    newTopic,
    setNewTopic,
    newDescription,
    setNewDescription,
    handleCreateTicket,
  };
}
