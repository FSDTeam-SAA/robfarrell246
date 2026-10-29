"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface NewTicketModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  subject: string;
  setSubject: (val: string) => void;
  project: string;
  setProject: (val: string) => void;
  topic: string;
  setTopic: (val: string) => void;
  description: string;
  setDescription: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function NewTicketModal({
  isOpen,
  onOpenChange,
  subject,
  setSubject,
  project,
  setProject,
  topic,
  setTopic,
  description,
  setDescription,
  onSubmit,
}: NewTicketModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-lg rounded-xl border-slate-200 bg-white p-6 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-slate-900 font-['Montserrat']">
            Submit Support Request
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4 pt-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700 font-['Montserrat'] uppercase">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Fit Score calculation discrepancy"
              className="w-full p-3 bg-white rounded-sm border border-slate-300 text-sm font-medium font-['Montserrat'] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700 font-['Montserrat'] uppercase">
                Project
              </label>
              <input
                type="text"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="e.g. 123 Market Street"
                className="w-full p-3 bg-white rounded-sm border border-slate-300 text-sm font-medium font-['Montserrat'] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700 font-['Montserrat'] uppercase">
                Topic Category
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-3 bg-white rounded-sm border border-slate-300 text-sm font-medium font-['Montserrat'] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              >
                <option value="Report / Export">Report / Export</option>
                <option value="Competition Mapping">Competition Mapping</option>
                <option value="Fit Score Calculation">Fit Score Calculation</option>
                <option value="Account & Billing">Account & Billing</option>
                <option value="Other">Other Inquiry</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700 font-['Montserrat'] uppercase">
              Detailed Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the issue or assistance required in detail..."
              className="w-full p-3 bg-white rounded-sm border border-slate-300 text-sm font-medium font-['Montserrat'] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="px-4 py-2.5 rounded-sm border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-sm bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold font-['Montserrat'] transition shadow-xs cursor-pointer"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
