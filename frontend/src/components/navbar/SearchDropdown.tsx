"use client";

import React from "react";
import Link from "next/link";
import { Search, X, ChevronRight } from "lucide-react";
import { SearchItem, CATEGORY_COLORS } from "@/data/searchData";

interface SearchDropdownProps {
  searchOpen: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  closeSearch: () => void;
  filteredResults: SearchItem[];
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}

export default function SearchDropdown({
  searchOpen,
  searchQuery,
  setSearchQuery,
  closeSearch,
  filteredResults,
  searchInputRef,
}: SearchDropdownProps) {
  return (
    <div
      className={`absolute left-0 right-0 top-full w-full z-40 search-dropdown-wrapper ${
        searchOpen ? "is-open" : ""
      }`}
      role="region"
      aria-label="Site Search Dropdown"
    >
      <div className="search-dropdown-drawer w-full bg-white shadow-xl border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-3.5 sm:px-6 py-3 sm:py-4">
          {/* 1. Simple Clean Search Input */}
          <div className="relative flex items-center bg-gray-50 border border-gray-200 focus-within:border-[#e6000a] focus-within:bg-white focus-within:ring-2 focus-within:ring-red-500/15 rounded-xl shadow-2xs transition-all duration-200 px-3 sm:px-4 py-1.5 sm:py-2.5 min-h-[44px]">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0 mr-2 sm:mr-2.5 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search CRC website..."
              className="w-full bg-transparent border-none text-[13.5px] sm:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none font-sans"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  searchInputRef.current?.focus();
                }}
                className="p-1 sm:p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors mr-1 sm:mr-2 shrink-0 cursor-pointer touch-manipulation"
                aria-label="Clear search text"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 pointer-events-none" />
              </button>
            ) : (
              <span className="hidden sm:inline-flex items-center text-[10px] font-semibold text-gray-400 border border-gray-200 bg-white px-1.5 py-0.5 rounded shadow-2xs mr-2 select-none">
                ESC
              </span>
            )}
            <button
              type="button"
              onClick={closeSearch}
              className="shrink-0 text-xs sm:text-sm font-semibold text-gray-500 hover:text-[#e6000a] px-2 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer touch-manipulation"
            >
              Close
            </button>
          </div>

          {/* 2. Content appears below ONLY when user searches */}
          {searchQuery.trim() ? (
            <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-gray-100 max-h-[calc(100svh-140px)] sm:max-h-[min(65vh,480px)] overflow-y-auto overscroll-contain pr-0.5">
              <div className="flex items-center justify-between pb-2 px-1">
                <span className="text-xs font-bold text-gray-500">
                  {filteredResults.length > 0 ? (
                    <>
                      Found <span className="text-[#e6000a] font-black">{filteredResults.length}</span>{" "}
                      {filteredResults.length === 1 ? "result" : "results"} for &ldquo;{searchQuery}&rdquo;
                    </>
                  ) : (
                    <>No matches found</>
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-gray-400 hover:text-[#e6000a] transition-colors cursor-pointer touch-manipulation"
                >
                  Clear
                </button>
              </div>

              {filteredResults.length > 0 ? (
                <div className="space-y-1.5 pt-1">
                  {filteredResults.map((item) => {
                    const catColor = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.About;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={closeSearch}
                        className="group flex items-start justify-between gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl border border-gray-100/60 sm:border-transparent hover:border-red-100 bg-gray-50/70 hover:bg-red-50/40 transition-all duration-200 text-left active:scale-[0.99] touch-manipulation"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
                            <span
                              className={`text-[9.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md border ${catColor.bg} ${catColor.text} ${catColor.border}`}
                            >
                              {item.category}
                            </span>
                            {item.badge && (
                              <span className="text-[9.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-red-100 text-[#e6000a]">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <h4 className="text-[13px] sm:text-[14px] font-bold font-heading text-gray-900 group-hover:text-[#e6000a] transition-colors line-clamp-1">
                            {item.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-gray-500 leading-snug line-clamp-1 sm:line-clamp-2 mt-0.5 font-sans">
                            {item.description}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#e6000a] group-hover:translate-x-0.5 transition-all duration-200 shrink-0 self-center" />
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="py-5 sm:py-8 text-center text-gray-500">
                  <p className="text-sm font-semibold text-gray-700">
                    No results found for &ldquo;<span className="text-gray-900 font-bold">{searchQuery}</span>&rdquo;
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Try searching for keywords like <span className="text-gray-600 font-medium">school, sponsor, health, winter, members,</span> or <span className="text-gray-600 font-medium">branches</span>.
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
