"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  PlusSquare,
  FolderKanban,
  Coins,
  MessageCircleMore,
  Settings,
  LogOut,
  ExternalLink,
  X,
} from "lucide-react";
import { toast } from "sonner";
import LogoutModal from "@/components/modals/logout-modal";
import { useUIStore } from "@/store/ui.store";

interface NavItem {
  title: string;
  url: string;
  icon: React.ElementType;
  badge?: string;
  isCustomCased?: boolean;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

export function Sidebar() {
  const pathname = usePathname();
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const {
    isMobileSidebarOpen,
    setMobileSidebarOpen,
    creditBalance = 28,
    maxCredits = 100,
  } = useUIStore();

  const navigationSections: NavSection[] = [
    {
      label: "MAIN",
      items: [
        { title: "DASHBOARD", url: "/", icon: LayoutGrid },
        { title: "NEW ANALYSIS", url: "/NewAnalysis", icon: PlusSquare },
        { title: "PROJECTS", url: "/Project", icon: FolderKanban },
      ],
    },
    {
      label: "FINANCE",
      items: [
        {
          title: "CREDIT",
          url: "/Credit",
          icon: Coins,
          badge: `${creditBalance} CR`,
        },
      ],
    },
    {
      label: "ACCOUNT",
      items: [
        {
          title: "Help & Support",
          url: "/HelpSupport",
          icon: MessageCircleMore,
          isCustomCased: true,
        },
        { title: "SETTINGS", url: "/Settings", icon: Settings },
      ],
    },
  ];

  const isActive = (url: string) => {
    if (url === "/") {
      return pathname === "/" || pathname === "/Dashboard";
    }
    const cleanUrl = url.toLowerCase().replace(/^\//, "");
    const cleanPath = pathname.toLowerCase().replace(/^\//, "");
    return cleanPath === cleanUrl || cleanPath.startsWith(`${cleanUrl}/`);
  };

  const handleLogout = async () => {
    try {
      toast.success("Logout successful!");
      setLogoutModalOpen(false);
    } catch {
      toast.error("Logout failed. Please try again.");
    }
  };

  const sidebarContent = (
    <div
      className="flex min-h-screen flex-col bg-white bg-cover bg-center bg-no-repeat w-[320px] select-none border-r border-[#D9E0EA]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.94)), url('/assets/images/dashboard_sidebar_bg.png')",
      }}
    >
      {/* Brand Header */}
      <div className="flex h-[88px] shrink-0 items-center justify-between border-b border-[#DCE3EC] bg-white px-10">
        <Link
          href="/"
          aria-label="Go to dashboard overview"
          onClick={() => setMobileSidebarOpen(false)}
          className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FF2] focus-visible:ring-offset-2"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Vision Before Lease"
            width={244}
            height={48}
            priority
            className="h-auto w-[244px]"
          />
        </Link>
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(false)}
          className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 transition"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation Sections */}
      <nav aria-label="Dashboard navigation" className="flex-1 px-3 pb-4 pt-[18px] overflow-y-auto">
        {navigationSections.map((section, sectionIndex) => (
          <section
            key={section.label}
            aria-labelledby={`sidebar-section-${sectionIndex}`}
            className={sectionIndex === 0 ? "" : "mt-[15px]"}
          >
            <h2
              id={`sidebar-section-${sectionIndex}`}
              className="mb-[15px] px-[18px] text-sm font-normal uppercase leading-[1.2] text-[#61718A]"
            >
              {section.label}
            </h2>

            <ul className="space-y-0">
              {section.items.map((item) => {
                const active = isActive(item.url);
                const Icon = item.icon;

                return (
                  <li key={item.title}>
                    <Link
                      href={item.url}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMobileSidebarOpen(false)}
                      style={
                        active
                          ? {
                              backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.56), rgba(255,255,255,0.56)), url('/assets/images/sidebar_menu.png')",
                              backgroundPosition: "center 48%",
                              backgroundSize: "cover",
                            }
                          : undefined
                      }
                      className={`flex h-10 items-center justify-between border-y px-[18px] text-base font-normal leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2F6FF2] ${
                        active
                          ? "border-[#2F6FF2] bg-white/25 text-[#1769FF]"
                          : "border-transparent text-[#52617A] hover:bg-white/45 hover:text-[#2F6FF2]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon
                          aria-hidden="true"
                          className={`h-5 w-5 shrink-0 ${
                            active && item.title === "DASHBOARD" ? "fill-current" : ""
                          }`}
                          strokeWidth={active ? 2.2 : 2}
                        />
                        <span
                          className={`truncate ${
                            item.isCustomCased ? "" : "uppercase"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Pill Badge */}
                      {item.badge && (
                        <div className="px-2 py-0.5 rounded-full border border-amber-300/80 bg-amber-50 text-[10px] font-bold text-amber-600 tracking-tight shrink-0">
                          {item.badge}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        {/* Sign Out Button (matching robfarrell246-admin-dashboard) */}
        <button
          type="button"
          onClick={() => {
            setMobileSidebarOpen(false);
            setLogoutModalOpen(true);
          }}
          className="mt-[5px] flex h-10 w-full items-center gap-3 border-y border-transparent px-[18px] text-left text-base font-normal uppercase leading-none text-[#ED3237] transition-colors hover:bg-red-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ED3237] cursor-pointer"
        >
          <LogOut aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2.2} />
          <span>SIGN OUT</span>
        </button>
      </nav>

      {/* Pinned Credit Balance & Subscription Card */}
      <div className="p-3 border-t border-[#DCE3EC] bg-white/50 backdrop-blur-xs">
        <div className="p-3.5 border border-amber-300/80 bg-amber-50/40 rounded-lg flex flex-col gap-3 shadow-xs">
          {/* Top Line */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="h-4 w-4 text-[#E97900] shrink-0" strokeWidth={1.8} />
              <span className="text-xs font-semibold text-[#151D30] font-['Montserrat']">
                Credit Balance
              </span>
            </div>
            <span className="text-xs font-bold text-[#E97900] font-['Montserrat']">
              {creditBalance}/{maxCredits}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full bg-white rounded-full border border-amber-200 overflow-hidden shadow-inner">
            <div
              className="h-full bg-[#F28B19] rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(100, Math.max(0, (creditBalance / maxCredits) * 100))}%`,
              }}
            />
          </div>

          {/* Manage Subscription Button */}
          <button
            type="button"
            onClick={() => alert("Subscription Management")}
            className="w-full py-1.5 px-3 bg-white hover:bg-slate-50 border border-slate-300 rounded text-[11px] font-semibold text-slate-700 flex items-center justify-center gap-1.5 shadow-2xs transition cursor-pointer"
          >
            <span>Manage Subscription</span>
            <ExternalLink className="h-3 w-3 text-slate-500" />
          </button>

          {/* Role Tag */}
          <div className="text-center">
            <span className="text-[10px] font-bold text-[#E97900] tracking-wider uppercase font-['Montserrat']">
              LANDLORD / BROKER
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 z-40 h-screen w-[320px]">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Sidebar */}
      {isMobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <aside className="relative z-50 h-screen w-[320px] shadow-2xl animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Logout Confirmation Modal */}
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

export default Sidebar;
