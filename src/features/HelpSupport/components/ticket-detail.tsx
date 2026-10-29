"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Paperclip,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";

export interface ReplyMessage {
  id: string;
  author: string;
  role: string;
  roleType: "user" | "support";
  timestamp: string;
  avatarText: string;
  avatarBg: string;
  content: string;
}

export interface TicketData {
  id: string;
  subject: string;
  topic: string;
  priority: string;
  status: "In Review" | "Resolved";
  submittedBy: string;
  submittedEmail: string;
  createdOn: string;
  assignedAgent: string;
  project: string;
  messages: ReplyMessage[];
}

interface TicketDetailProps {
  ticket: TicketData;
  onBack: () => void;
  onUpdateTicket?: (updatedTicket: TicketData) => void;
}

export default function TicketDetail({
  ticket,
  onBack,
  onUpdateTicket,
}: TicketDetailProps) {
  const [currentTicket, setCurrentTicket] = useState<TicketData>(ticket);
  const [replyInput, setReplyInput] = useState("");
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);

  const handleToggleResolved = () => {
    const nextStatus =
      currentTicket.status === "In Review" ? "Resolved" : "In Review";
    const updated = { ...currentTicket, status: nextStatus as "In Review" | "Resolved" };
    setCurrentTicket(updated);
    onUpdateTicket?.(updated);

    if (nextStatus === "Resolved") {
      toast.success(`Ticket ${currentTicket.id} marked as Resolved!`);
    } else {
      toast.info(`Ticket ${currentTicket.id} reopened to In Review.`);
    }
  };

  const handleFileAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachedFileName(file.name);
      toast.success(`Attached file: ${file.name}`);
    }
  };

  const handleSubmitReply = () => {
    if (!replyInput.trim()) {
      toast.error("Please enter a reply description.");
      return;
    }

    const newMessage: ReplyMessage = {
      id: `msg-${Date.now()}`,
      author: "Sarah Jenkins, CCIM",
      role: "Broker / Landlord",
      roleType: "user",
      timestamp: "Just now",
      avatarText: "SJ",
      avatarBg: "bg-slate-900 text-white",
      content:
        replyInput + (attachedFileName ? ` [Attached: ${attachedFileName}]` : ""),
    };

    const updated = {
      ...currentTicket,
      messages: [...currentTicket.messages, newMessage],
    };

    setCurrentTicket(updated);
    onUpdateTicket?.(updated);

    toast.success("Report reply submitted successfully!");
    setReplyInput("");
    setAttachedFileName(null);
  };

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onBack}
          className="size-10 rounded-full border border-slate-300/80 bg-white hover:bg-slate-50 flex justify-center items-center text-slate-700 transition cursor-pointer shadow-2xs shrink-0"
          aria-label="Back to ticket list"
        >
          <ArrowLeft className="size-4.5" />
        </button>

        <div className="flex items-center gap-2 text-sm font-['Montserrat']">
          <button
            type="button"
            onClick={onBack}
            className="text-[#64748b] hover:text-[#0f172a] font-medium transition cursor-pointer"
          >
            Help & Support
          </button>
          <ChevronRight className="size-4 text-slate-400" />
          <span className="text-[#2563eb] font-bold">
            {currentTicket.id}
          </span>
        </div>
      </div>

      {/* Top Ticket Overview Card */}
      <div className="w-full p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
        {/* Status Pills and Action Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Ticket ID Tag */}
            <div className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium font-['Montserrat'] leading-4">
              {currentTicket.id}
            </div>

            {/* Status Pill */}
            <div
              className={`px-2.5 py-1 rounded-md text-xs font-medium font-['Montserrat'] leading-4 flex items-center gap-1.5 ${
                currentTicket.status === "In Review"
                  ? "bg-[#fff9ea] text-[#f59e0b] border border-[#fef08a]/60"
                  : "bg-[#effdf5] text-[#10b981] border border-[#bbf7d0]/60"
              }`}
            >
              <span>●</span>
              <span>{currentTicket.status}</span>
            </div>

            {/* Topic Tag */}
            <div className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-normal font-['Montserrat'] leading-4">
              {currentTicket.topic}
            </div>

            {/* Priority Tag */}
            <div className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-normal font-['Montserrat'] leading-4">
              {currentTicket.priority}
            </div>
          </div>

          {/* Mark as Resolved Button */}
          <button
            type="button"
            onClick={handleToggleResolved}
            className={`px-6 py-2.5 rounded-sm text-sm font-medium font-['Montserrat'] flex items-center gap-2 transition cursor-pointer shadow-2xs ${
              currentTicket.status === "Resolved"
                ? "bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200"
                : "bg-[#effdf5] hover:bg-[#dcfce7] text-[#16a34a] border border-[#bbf7d0]"
            }`}
          >
            <CheckCircle2 className="size-4.5" />
            <span>
              {currentTicket.status === "Resolved"
                ? "Reopen Ticket"
                : "Mark as Resolved"}
            </span>
          </button>
        </div>

        {/* Ticket Subject Title */}
        <div className="pb-4 border-b border-slate-200">
          <h1 className="text-xl md:text-2xl font-bold font-['Montserrat'] text-[#0f172a]">
            {currentTicket.subject}
          </h1>
        </div>

        {/* 4 Metadata Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-1">
          {/* Submitted By */}
          <div className="flex flex-col gap-1">
            <div className="text-[#64748b] text-xs font-semibold font-['Montserrat'] uppercase tracking-wider">
              Submitted By
            </div>
            <div className="text-[#0f172a] text-base font-medium font-['Montserrat']">
              {currentTicket.submittedBy}
            </div>
            <div className="text-[#64748b] text-xs font-normal font-['Montserrat'] truncate">
              {currentTicket.submittedEmail}
            </div>
          </div>

          {/* Created On */}
          <div className="flex flex-col gap-1">
            <div className="text-[#64748b] text-xs font-semibold font-['Montserrat'] uppercase tracking-wider">
              Created On
            </div>
            <div className="text-[#0f172a] text-base font-medium font-['Montserrat']">
              {currentTicket.createdOn}
            </div>
          </div>

          {/* Assigned Agent */}
          <div className="flex flex-col gap-1">
            <div className="text-[#64748b] text-xs font-semibold font-['Montserrat'] uppercase tracking-wider">
              Assigned Agent
            </div>
            <div className="text-[#0f172a] text-base font-medium font-['Montserrat']">
              {currentTicket.assignedAgent}
            </div>
          </div>

          {/* Related Project */}
          <div className="flex flex-col gap-1">
            <div className="text-[#64748b] text-xs font-semibold font-['Montserrat'] uppercase tracking-wider">
              Related Project
            </div>
            <div className="text-[#0f172a] text-base font-medium font-['Montserrat']">
              {currentTicket.project}
            </div>
          </div>
        </div>
      </div>

      {/* Lower Two-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols): Thread Messages and Reply Box */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Thread Messages */}
          {currentTicket.messages.map((msg) => (
            <div
              key={msg.id}
              className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col gap-4"
            >
              {/* Header */}
              <div className="pb-3 border-b border-slate-200 flex items-center gap-3">
                <div
                  className={`size-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border border-slate-200 ${msg.avatarBg}`}
                >
                  {msg.avatarText}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-[#0f172a] text-lg font-bold font-['Montserrat']">
                      {msg.author}
                    </div>
                    <div
                      className={`px-2 py-0.5 rounded-md text-xs font-medium font-['Montserrat'] ${
                        msg.roleType === "support"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {msg.role}
                    </div>
                  </div>
                  <div className="text-[#64748b] text-xs font-normal font-['Montserrat'] mt-0.5">
                    {msg.timestamp}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-[#475569] text-base font-normal font-['Montserrat'] leading-relaxed">
                {msg.content}
              </div>
            </div>
          ))}

          {/* Post a Reply Card */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col gap-4">
            <div className="pb-3 border-b border-slate-200 flex items-center gap-3">
              <div className="size-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 shrink-0">
                <MessageSquare className="size-5" />
              </div>
              <div className="text-[#0f172a] text-xl font-bold font-['Montserrat']">
                Post a Reply
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Textarea */}
              <div className="w-full p-4 bg-white rounded-sm border border-slate-300 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition shadow-2xs">
                <textarea
                  rows={4}
                  value={replyInput}
                  onChange={(e) => setReplyInput(e.target.value)}
                  placeholder="Please describe what happened, the steps to reproduce, or the specific question you have regarding the data..."
                  className="w-full bg-transparent text-[#0f172a] text-sm font-medium font-['Montserrat'] placeholder:text-[#94a3b8] outline-none resize-none"
                />
              </div>

              {/* Bottom Actions: Attach file & Submit Report */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                {/* Left: Attach File */}
                <label className="flex items-center gap-2 text-[#64748b] hover:text-[#0f172a] text-sm font-normal font-['Montserrat'] cursor-pointer transition">
                  <Paperclip className="size-5 text-[#64748b]" />
                  <span>
                    {attachedFileName ? `File: ${attachedFileName}` : "Attach file"}
                  </span>
                  <input
                    type="file"
                    onChange={handleFileAttach}
                    className="hidden"
                  />
                </label>

                {/* Right: Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmitReply}
                  className="px-8 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-xs flex items-center gap-2 text-base font-medium font-['Montserrat'] transition shadow-xs cursor-pointer"
                >
                  <span>Submit Report</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Request Information Card */}
        <div className="lg:col-span-4 p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col gap-6">
          {/* Top Section */}
          <div className="flex flex-col gap-2 pb-5 border-b border-slate-200">
            <div className="text-[#0f172a] text-xl font-semibold font-['Montserrat']">
              Request Information
            </div>
            <div className="text-[#64748b] text-base font-normal font-['Montserrat'] leading-relaxed">
              You are viewing your active support inquiry. Updates and responses from our staff appear here in real-time.
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-2">
            <div className="text-[#0f172a] text-xl font-semibold font-['Montserrat']">
              Need to add more details?
            </div>
            <div className="text-[#64748b] text-base font-normal font-['Montserrat'] leading-relaxed">
              Use the reply form on the left to submit screenshots or clarify your inquiry.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
