"use client";

import React, { Suspense } from "react";
import { useSupport } from "../hooks/use-support";
import TicketDetail from "./ticket-detail";
import SupportTicketTable from "./support-ticket-table";
import { NewTicketModal } from "./new-ticket-modal";

function HelpSupportContent() {
  const {
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
  } = useSupport();

  if (selectedTicketId && activeTicket) {
    return (
      <TicketDetail
        ticket={activeTicket}
        onBack={() => setSelectedTicketId(null)}
        onUpdateTicket={handleUpdateTicket}
      />
    );
  }

  return (
    <>
      <SupportTicketTable
        tickets={ticketSummaries}
        onSelectTicket={(id) => setSelectedTicketId(id)}
        onOpenNewTicketModal={() => setIsNewTicketOpen(true)}
      />

      <NewTicketModal
        isOpen={isNewTicketOpen}
        onOpenChange={setIsNewTicketOpen}
        subject={newSubject}
        setSubject={setNewSubject}
        project={newProject}
        setProject={setNewProject}
        topic={newTopic}
        setTopic={setNewTopic}
        description={newDescription}
        setDescription={setNewDescription}
        onSubmit={handleCreateTicket}
      />
    </>
  );
}

export function HelpSupportView() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-slate-500 font-['Montserrat']">
          Loading Support Portal...
        </div>
      }
    >
      <HelpSupportContent />
    </Suspense>
  );
}
