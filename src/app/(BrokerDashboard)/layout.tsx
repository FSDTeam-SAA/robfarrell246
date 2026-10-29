import React from "react";
import { Sidebar } from "@/components/shared/sidebar";
import { Navbar } from "@/components/shared/navbar";

export default function BrokerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F7F8F6] text-slate-800 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 lg:ml-[320px]">
        <Navbar />
        <main className="p-4 md:p-6 lg:p-7 max-w-[1640px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
