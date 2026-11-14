"use client";

import React from "react";
import {
  ChevronRight,
  Printer,
  Check,
  FileDown,
  Link2,
} from "lucide-react";
import { NAV_PANEL_ITEMS, CANONICAL_ABOUT_URL } from "./aboutConstants";

interface AboutSidebarProps {
  isNavVisible: boolean;
  activeSection: string;
  scrollToSection: (id: string, e: React.MouseEvent) => void;
  copied: boolean;
  handleCopyLink: () => void;
  handlePrint: () => void;
}

export default function AboutSidebar({
  isNavVisible,
  activeSection,
  scrollToSection,
  copied,
  handleCopyLink,
  handlePrint,
}: AboutSidebarProps) {
  return (
    <aside
      className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky self-start z-20"
      style={{ top: "max(96px, calc(50vh - 150px))" }}
    >
      <div
        className={`bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-gray-200/90 shadow-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isNavVisible
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-28 scale-95 pointer-events-none"
        }`}
      >
        {/* Sleek top brand accent line */}
        <div className="h-0.5 bg-gradient-to-r from-[#e6000a] via-rose-500 to-transparent absolute top-0 left-0 right-0" />

        {/* Panel Header */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e6000a] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e6000a]" />
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-800">
              On This Page
            </span>
          </div>
          <span className="text-[9.5px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
            6 Sections
          </span>
        </div>

        {/* Interactive Rail Navigation List */}
        <nav
          aria-label="Section Navigation"
          className="relative pl-3 border-l-2 border-gray-100 space-y-1"
        >
          {NAV_PANEL_ITEMS.map((item) => {
            const isParentActive =
              activeSection === item.id ||
              Boolean(item.subItems?.some((sub) => sub.id === activeSection));
            return (
              <div key={item.id} className="space-y-0.5">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(item.id, e)}
                  className={`group flex items-center justify-between px-2.5 py-1 rounded-lg text-[11.5px] transition-all duration-200 relative ${
                    isParentActive
                      ? "bg-red-50 text-[#e6000a] font-bold shadow-2xs translate-x-0.5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:translate-x-0.5 font-medium"
                  }`}
                >
                  {/* Left Rail Dot Indicator */}
                  <span
                    className={`absolute -left-[18px] w-2 h-2 rounded-full transition-all duration-200 ${
                      isParentActive
                        ? "bg-[#e6000a] ring-4 ring-red-100 scale-110"
                        : "bg-gray-300 group-hover:bg-[#e6000a] group-hover:scale-125"
                    }`}
                  />

                  {/* Section Label */}
                  <span className="truncate tracking-wide">{item.label}</span>

                  {/* Subtle Active Arrow Indicator */}
                  <ChevronRight
                    className={`w-3 h-3 shrink-0 transition-all duration-200 ${
                      isParentActive
                        ? "opacity-100 text-[#e6000a] translate-x-0"
                        : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                    }`}
                  />
                </a>

                {/* Nested Sub-options */}
                {item.subItems && (
                  <div className="ml-3 pl-2.5 border-l-2 border-red-100 space-y-0.5 my-1">
                    {item.subItems.map((sub) => {
                      const isSubActive = activeSection === sub.id;
                      return (
                        <a
                          key={sub.id}
                          href={`#${sub.id}`}
                          onClick={(e) => scrollToSection(sub.id, e)}
                          className={`group/sub flex items-center justify-between px-2 py-0.5 rounded-md text-[11px] transition-all duration-150 ${
                            isSubActive
                              ? "text-[#e6000a] font-bold bg-red-100/60"
                              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/70 font-medium"
                          }`}
                        >
                          <span className="truncate">{sub.label}</span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              isSubActive
                                ? "bg-[#e6000a] scale-100"
                                : "bg-transparent group-hover/sub:bg-gray-300 scale-75"
                            }`}
                          />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Share & Document Utilities */}
        <div className="pt-2.5 mt-2.5 border-t border-gray-100 space-y-2">
          {/* Share row */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Share:
            </span>
            <div className="flex items-center gap-1 text-gray-500">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  CANONICAL_ABOUT_URL
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs"
                title="Share on Facebook"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "About Come For Road Child (CRC) GSTU Branch - Official Constitution"
                )}&url=${encodeURIComponent(CANONICAL_ABOUT_URL)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs"
                title="Share on X"
              >
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  CANONICAL_ABOUT_URL
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs"
                title="Share on LinkedIn"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>

              <button
                type="button"
                onClick={handlePrint}
                className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs cursor-pointer"
                title="Print this Page"
              >
                <Printer className="w-3 h-3" />
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="px-2 py-0.5 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-[#e6000a] text-[10.5px] font-bold flex items-center gap-1 transition-all active:scale-95 ml-1 cursor-pointer"
                title="Copy page link"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-green-600" />
                    <span className="text-green-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Compact PDF download pill */}
          <a
            href="/docs/Vision-Mission-Objectives-Mode-of-Action.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-1.5 px-2 rounded-xl bg-gray-50 hover:bg-red-50/90 border border-gray-200/70 hover:border-red-200 transition-all text-gray-700 hover:text-[#e6000a]"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-white text-[#e6000a] flex items-center justify-center shadow-2xs border border-gray-100">
                <FileDown className="w-3 h-3" />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[10.5px] font-bold group-hover:text-[#e6000a]">
                  Constitution Charter
                </span>
                <span className="text-[9px] text-gray-400 mt-0.5 font-medium">
                  Official PDF · 287 KB
                </span>
              </div>
            </div>
            <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-[#e6000a] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </aside>
  );
}
