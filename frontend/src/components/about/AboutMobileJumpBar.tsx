"use client";

import React from "react";
import { NAV_PANEL_ITEMS } from "./aboutConstants";

interface AboutMobileJumpBarProps {
  activeSection: string;
  scrollToSection: (id: string, e: React.MouseEvent) => void;
  jumpNavScrollRef: React.RefObject<HTMLDivElement | null>;
  jumpNavButtonRefs: React.MutableRefObject<Record<string, HTMLButtonElement | null>>;
}

export default function AboutMobileJumpBar({
  activeSection,
  scrollToSection,
  jumpNavScrollRef,
  jumpNavButtonRefs,
}: AboutMobileJumpBarProps) {
  return (
    <div className="lg:hidden sticky top-[var(--navbar-height,94px)] z-20 bg-white/98 border-b-2 border-[#e6000a] shadow-xs transform-gpu">
      <div
        ref={jumpNavScrollRef}
        className="max-w-7xl mx-auto px-4 py-2.5 overflow-x-auto scrollbar-none flex items-center gap-2 relative scroll-smooth"
      >
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 shrink-0 pr-2 border-r border-gray-200">
          Jump to:
        </span>
        {NAV_PANEL_ITEMS.map((item) => {
          const isActive =
            activeSection === item.id ||
            Boolean(item.subItems?.some((sub) => sub.id === activeSection));
          return (
            <button
              key={item.id}
              ref={(el) => {
                jumpNavButtonRefs.current[item.id] = el;
              }}
              type="button"
              onClick={(e) => scrollToSection(item.id, e)}
              className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? "bg-[#e6000a] text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isActive ? "bg-white" : "bg-gray-400"
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
