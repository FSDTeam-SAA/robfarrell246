import React from "react";
import { Sidebar } from "@/components/shared/sidebar";
import { Navbar } from "@/components/shared/navbar";
import { DashboardView } from "@/features/Dashboard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F7F8F6] text-slate-800 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-[320px]">
        <Navbar
          title="Overview"
          description="Good afternoon, Alex. Here’s what’s happening across your retail portfolio."
        />
        <main className="p-4 md:p-6 lg:p-7 max-w-[1640px] w-full mx-auto">
          <DashboardView />
        </main>
      </div>
    </div>
  );
}
