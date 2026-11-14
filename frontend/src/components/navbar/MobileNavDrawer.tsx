"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { navItems } from "@/data/navigation";

interface MobileNavDrawerProps {
  mobileDrawerOpen: boolean;
  setMobileDrawerOpen: (open: boolean) => void;
  expandedMobileItem: string | null;
  setExpandedMobileItem: (item: string | null) => void;
  toggleMobileAccordion: (label: string) => void;
  pathname: string | null;
}

export default function MobileNavDrawer({
  mobileDrawerOpen,
  setMobileDrawerOpen,
  expandedMobileItem,
  setExpandedMobileItem,
  toggleMobileAccordion,
  pathname,
}: MobileNavDrawerProps) {
  const handleClose = () => {
    setMobileDrawerOpen(false);
    setExpandedMobileItem(null);
  };

  return (
    <>
      {/* Soft Backdrop Overlay for Mobile Drawer */}
      <div
        className={`xl:hidden fixed inset-0 top-[var(--navbar-height,94px)] bg-black/50 z-30 transition-all duration-300 ease-out ${
          mobileDrawerOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`xl:hidden mobile-drawer-wrapper ${
          mobileDrawerOpen ? "is-open" : ""
        }`}
      >
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-content bg-white px-4 sm:px-6 py-4 sm:py-5 border-t border-gray-200 text-[#0d0f14] text-sm font-bold shadow-2xl max-h-[calc(100svh-80px)] overflow-y-auto divide-y divide-gray-100">
            <div className="space-y-1 pb-3">
              {navItems.map((item) => {
                const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                const isExpanded = expandedMobileItem === item.label;
                const isCurrentRoute =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <div key={item.label} className="py-1">
                    {hasDropdown ? (
                      <div>
                        <div className="flex items-center justify-between py-1 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <Link
                            href={item.href}
                            onClick={handleClose}
                            className={`font-heading text-sm sm:text-base font-bold tracking-tight transition-colors hover:text-[#e6000a] ${
                              isCurrentRoute ? "text-[#e6000a]" : "text-gray-900"
                            }`}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleMobileAccordion(item.label)}
                            aria-expanded={isExpanded}
                            aria-label={`Toggle ${item.label} dropdown`}
                            className={`p-2.5 rounded-lg text-gray-500 hover:text-[#e6000a] hover:bg-red-50/70 active:scale-90 transition-all duration-200 cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center ${
                              isExpanded ? "text-[#e6000a] bg-red-50/80" : ""
                            }`}
                          >
                            <ChevronDown
                              className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 ease-out ${
                                isExpanded ? "rotate-180 text-[#e6000a]" : "rotate-0"
                              }`}
                            />
                          </button>
                        </div>

                        <div
                          className={`accordion-dropdown ${
                            isExpanded ? "is-expanded" : ""
                          }`}
                        >
                          <div className="accordion-dropdown-inner">
                            <div className="pt-1.5 pb-0.5">
                              <div className="accordion-dropdown-content pl-2.5 pr-2 py-2 space-y-1 bg-red-50/30 rounded-xl border border-red-100/60">
                                <Link
                                  href={item.href}
                                  onClick={handleClose}
                                  className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-bold text-[#e6000a] bg-white border border-red-200/80 hover:bg-red-50 shadow-xs transition-colors"
                                >
                                  <span>Explore {item.label} Overview</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </Link>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                                  {item.dropdown?.map((sub) => {
                                    const isSubActive = pathname === sub.href;
                                    return (
                                      <Link
                                        key={sub.label}
                                        href={sub.href}
                                        onClick={handleClose}
                                        className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-[0.98] ${
                                          isSubActive
                                            ? "text-[#e6000a] bg-white shadow-xs font-bold"
                                            : "text-gray-700 hover:text-[#e6000a] hover:bg-white/90"
                                        }`}
                                      >
                                        <span className="flex items-center gap-2 truncate">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#e6000a] shrink-0" />
                                          <span className="truncate">{sub.label}</span>
                                        </span>
                                        <ChevronRight className="w-3 h-3 text-gray-400 shrink-0 ml-1" />
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleClose}
                        className={`flex items-center justify-between py-2 px-2 rounded-lg text-sm sm:text-base font-heading font-bold transition-all hover:text-[#e6000a] hover:translate-x-1 ${
                          isCurrentRoute ? "text-[#e6000a]" : "text-gray-900"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/#sponsor"
                onClick={handleClose}
                className="block text-center py-3 bg-[#e6000a] text-white font-heading font-bold text-sm sm:text-base rounded-lg shadow-lg hover:bg-[#a20002] active:scale-[0.98] transition-all"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
