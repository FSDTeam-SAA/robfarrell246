"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Coins, Menu, Settings, HelpCircle, LogOut } from "lucide-react";
import NotificationModal from "@/components/modals/notification-modal";
import LogoutModal from "@/components/modals/logout-modal";
import { useUIStore } from "@/store/ui.store";
import { toast } from "sonner";

import { usePathname } from "next/navigation";

type NavbarProps = {
  title?: string;
  description?: string;
};

export function Navbar({
  title,
  description,
}: NavbarProps) {
  const pathname = usePathname();
  const { isMobileSidebarOpen, setMobileSidebarOpen, creditBalance } = useUIStore();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  // Dynamic titles matching the page context
  let displayTitle = title;
  let displayDesc = description;

  if (!displayTitle) {
    if (pathname.toLowerCase().includes("settings")) {
      displayTitle = "Account & Platform Settings";
      displayDesc = displayDesc || "Configure profile metadata, security authentication, and automated notifications.";
    } else if (pathname.toLowerCase().includes("credit")) {
      displayTitle = "AI Credits & Wallet";
      displayDesc = displayDesc || "Good afternoon, Alex. Here’s what’s happening across your retail portfolio.";
    } else if (pathname.toLowerCase().includes("project")) {
      displayTitle = "Retail Projects";
      displayDesc = displayDesc || "Manage your property development and lease analysis portfolios.";
    } else if (pathname.toLowerCase().includes("help")) {
      displayTitle = "Help & Support";
      displayDesc = displayDesc || "Find answers, learn how Vision Before Lease works, or contact our commercial advisory support team.";
    } else {
      displayTitle = "Overview";
      displayDesc = displayDesc || "Welcome back! Here's what's happening with VELARI today.";
    }
  }

  const handleLogout = () => {
    toast.success("Logout successful!");
    setLogoutModalOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#DCE4EE] bg-white px-4 shadow-[0_2px_10px_rgba(35,52,81,0.04)] sm:px-6">
        <div className="mx-auto flex min-h-[62px] w-full max-w-[1600px] items-center justify-between gap-5 py-2">
          {/* Left Title and Mobile Hamburger */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DDE1D9] bg-white text-slate-700 shadow-xs hover:bg-[#F2F4F0] transition cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="min-w-0">
              <h1 className="truncate text-[20px] font-semibold leading-tight tracking-[-0.02em] text-[#151D30]">
                {displayTitle}
              </h1>
              {displayDesc && (
                <p className="mt-1 truncate text-[12px] leading-none text-[#5D6B82] sm:text-[13px]">
                  {displayDesc}
                </p>
              )}
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Notification Modal */}
            <NotificationModal />

            {/* Credit Balance Pill */}
            <Link
              href="/Credit"
              className="hidden h-[36px] items-center gap-1.5 rounded-[3px] border border-[#F28B19] px-3 text-[11px] font-medium text-[#E97900] transition hover:bg-[#FFF8EF] sm:inline-flex cursor-pointer"
            >
              <Coins className="h-3.5 w-3.5" strokeWidth={1.8} />
              <span>{creditBalance ?? 28} Credit Balance</span>
            </Link>

            {/* Profile Menu Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                aria-label="Open profile menu"
                className="hidden h-[40px] min-w-[176px] items-center gap-2 rounded-[3px] border border-[#E0E7F0] bg-white px-2.5 text-left transition hover:bg-[#F8FAFD] md:flex cursor-pointer"
              >
                <div className="relative h-6 w-6 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src="/assets/images/no-user.jpeg"
                    alt="Iqbal Hasan"
                    fill
                    sizes="24px"
                    className="object-cover"
                  />
                </div>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[11px] font-medium leading-4 text-[#1B2638]">
                    Iqbal Hasan
                  </span>
                  <span className="block truncate text-[9px] leading-3 text-[#718097]">
                    you@company.com
                  </span>
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 shrink-0 text-[#748298] transition-transform duration-200 ${
                    profileMenuOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.7}
                />
              </button>

              {/* Profile Dropdown */}
              {profileMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setProfileMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-56 rounded-lg border border-[#DCE4EE] bg-white p-2 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="border-b border-slate-100 px-3 py-2">
                      <p className="text-xs font-semibold text-[#151D30]">Iqbal Hasan</p>
                      <p className="text-[11px] text-[#718097]">you@company.com</p>
                    </div>
                    <div className="pt-1.5 space-y-0.5 text-xs text-[#52617A]">
                      <Link
                        href="/Settings"
                        onClick={() => setProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 rounded-md px-3 py-2 font-medium hover:bg-slate-50 hover:text-[#2F6FF2] transition-colors"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                      <Link
                        href="/HelpSupport"
                        onClick={() => setProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 rounded-md px-3 py-2 font-medium hover:bg-slate-50 hover:text-[#2F6FF2] transition-colors"
                      >
                        <HelpCircle className="h-4 w-4" />
                        <span>Help & Support</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setProfileMenuOpen(false);
                          setLogoutModalOpen(true);
                        }}
                        className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 font-medium text-[#ED3237] hover:bg-red-50 transition-colors cursor-pointer"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Logout Modal */}
      {logoutModalOpen && (
        <LogoutModal
          isOpen={logoutModalOpen}
          onClose={() => setLogoutModalOpen(false)}
          onConfirm={handleLogout}
        />
      )}
    </>
  );
}

export default Navbar;
