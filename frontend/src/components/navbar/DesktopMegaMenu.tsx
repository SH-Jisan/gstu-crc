"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  megaMenus,
  megaMenuKeys,
  MegaMenuSection,
} from "@/data/navigation";

interface DesktopMegaMenuProps {
  currentMegaMenu: MegaMenuSection | null;
  isMegaOpen: boolean;
  drawerHeight: number | null;
  isOverflowingViewport: boolean;
  activeMegaKey: string;
  activeIdx: number;
  contentRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

export default function DesktopMegaMenu({
  currentMegaMenu,
  isMegaOpen,
  drawerHeight,
  isOverflowingViewport,
  activeMegaKey,
  activeIdx,
  contentRefs,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: DesktopMegaMenuProps) {
  if (!currentMegaMenu) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`hidden xl:block absolute left-0 right-0 top-full w-full z-40 mega-menu-wrapper ${
        isMegaOpen ? "is-open" : ""
      }`}
    >
      <div
        style={{
          height: isMegaOpen && drawerHeight ? `${drawerHeight}px` : undefined,
        }}
        className={`w-full bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border-b border-gray-200 mega-menu-drawer max-h-[calc(100vh-90px)] overflow-x-hidden ${
          isOverflowingViewport ? "overflow-y-auto" : "overflow-hidden"
        }`}
      >
        <div className="relative w-full">
          {megaMenuKeys.map((key, index) => {
            const menu = megaMenus[key];
            const isCurrent = key === activeMegaKey;
            const isBefore = index < activeIdx;
            const translateClass = isCurrent
              ? "relative translate-x-0 opacity-100 pointer-events-auto visible"
              : isBefore
              ? "absolute top-0 left-0 right-0 -translate-x-6 opacity-0 pointer-events-none invisible"
              : "absolute top-0 left-0 right-0 translate-x-6 opacity-0 pointer-events-none invisible";

            return (
              <div
                key={key}
                ref={(el) => {
                  contentRefs.current[key] = el;
                }}
                className={`w-full max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 lg:py-4.5 flex items-center gap-8 lg:gap-12 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${translateClass}`}
              >
                {/* Left Spotlight Column */}
                <div className="w-[280px] lg:w-[320px] shrink-0 text-left self-center my-auto">
                  <h3 className="font-heading font-black text-xl lg:text-[23px] text-[#0d0f14] leading-tight tracking-tight">
                    {menu.spotlight.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-gray-600 leading-relaxed font-sans">
                    {menu.spotlight.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={menu.spotlight.ctaHref}
                      onClick={onClose}
                      className="group/pill inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#0d0f14] text-xs sm:text-[12.5px] font-bold text-[#0d0f14] hover:bg-[#0d0f14] hover:text-white hover:border-[#0d0f14] transition-all duration-300 ease-out tracking-wide font-heading shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{menu.spotlight.ctaText}</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/pill:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Vertical Divider Line */}
                <div className="w-px bg-[#e6000a] self-stretch min-h-[140px]" aria-hidden="true" />

                {/* Right Category Area */}
                {menu.columns.some((col) => col.items && col.items.length > 0) ? (
                  <div className="flex-1 flex flex-col space-y-1 text-left">
                    {menu.columns.map((col) => (
                      <div
                        key={col.title}
                        className="group/col relative flex flex-col py-1.5 px-2.5 rounded-xl transition-all duration-300 ease-out hover:bg-red-50/40 hover:shadow-xs hover:-translate-y-0.5"
                      >
                        <span
                          className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-[#e6000a] opacity-0 scale-y-0 group-hover/col:opacity-100 group-hover/col:scale-y-100 transition-all duration-300 ease-out origin-center"
                          aria-hidden="true"
                        />

                        <Link
                          href={col.href}
                          onClick={onClose}
                          className="flex items-center gap-1.5 text-[14px] lg:text-[15px] font-black font-heading text-[#0d0f14] group-hover/col:text-[#e6000a] transition-all duration-300 ease-out group-hover/col:translate-x-1.5 mb-1 w-fit"
                        >
                          <span>{col.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover/col:text-[#e6000a] group-hover/col:translate-x-1 transition-all duration-300 ease-out shrink-0" />
                        </Link>

                        <ul
                          className={`grid gap-x-4 gap-y-0.5 pl-2 pt-0.5 group-hover/col:translate-x-1 transition-all duration-300 ease-out ${
                            col.items && col.items.length === 5
                              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
                              : col.items && col.items.length === 3
                              ? "grid-cols-1 md:grid-cols-3 max-w-5xl"
                              : "grid-cols-1 sm:grid-cols-2 max-w-3xl"
                          }`}
                        >
                          {col.items?.map((subItem) => (
                            <li key={subItem.label}>
                              <Link
                                href={subItem.href}
                                onClick={onClose}
                                className={`group/sub flex items-start justify-between py-0.5 px-1.5 rounded-md transition-all duration-200 hover:bg-red-50/50 ${
                                  subItem.isSubItem ? "ml-3 text-gray-600" : "text-gray-800"
                                }`}
                              >
                                <div className="flex items-start gap-1.5">
                                  <span
                                    className={`rounded-full transition-all duration-200 mt-1.5 shrink-0 ${
                                      subItem.isSubItem
                                        ? "w-1.5 h-1.5 bg-gray-300 group-hover/sub:bg-[#e6000a] group-hover/sub:scale-125"
                                        : "w-2 h-2 bg-gray-400 group-hover/sub:bg-[#e6000a] group-hover/sub:scale-125"
                                    }`}
                                    aria-hidden="true"
                                  />
                                  <div className="flex flex-col text-left">
                                    <span
                                      className={`text-[14px] leading-tight transition-colors duration-200 ${
                                        subItem.isSubItem
                                          ? "font-medium text-gray-600 group-hover/sub:text-[#e6000a] group-hover/sub:font-semibold"
                                          : "font-semibold text-gray-800 group-hover/sub:text-[#e6000a] group-hover/sub:font-bold"
                                      }`}
                                    >
                                      {subItem.label}
                                    </span>
                                    {subItem.description && (
                                      <span className="text-[12px] text-gray-500 leading-snug group-hover/sub:text-gray-700 mt-0.5 font-sans font-normal">
                                        {subItem.description}
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <ChevronRight className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover/sub:opacity-100 group-hover/sub:text-[#e6000a] group-hover/sub:translate-x-0.5 transition-all duration-200 shrink-0 ml-1 mt-1" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`flex-1 grid gap-6 lg:gap-8 text-left ${
                      menu.columns.length === 4
                        ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
                        : "grid-cols-1 md:grid-cols-3"
                    }`}
                  >
                    {menu.columns.map((col) => (
                      <Link
                        key={col.title}
                        href={col.href}
                        onClick={onClose}
                        className="group/col relative block p-3 rounded-xl transition-all duration-300 ease-out hover:bg-red-50/40 hover:shadow-xs hover:-translate-y-0.5"
                      >
                        <span
                          className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-[#e6000a] opacity-0 scale-y-0 group-hover/col:opacity-100 group-hover/col:scale-y-100 transition-all duration-300 ease-out origin-center"
                          aria-hidden="true"
                        />

                        <div className="flex items-center gap-1.5 text-[15px] font-black font-heading text-[#0d0f14] group-hover/col:text-[#e6000a] transition-all duration-300 ease-out group-hover/col:translate-x-1.5">
                          <span>{col.title}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover/col:text-[#e6000a] group-hover/col:translate-x-1 transition-all duration-300 ease-out shrink-0" />
                        </div>
                        <p className="mt-2 text-[13px] text-gray-600 leading-relaxed group-hover/col:text-gray-900 group-hover/col:translate-x-1.5 transition-all duration-300 ease-out font-sans">
                          {col.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
