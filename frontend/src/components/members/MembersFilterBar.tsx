import React from "react";
import { Search, Droplet, MapPin } from "lucide-react";
import { CATEGORIES, BLOOD_GROUPS } from "./memberConstants";

interface MembersFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedBlood: string;
  setSelectedBlood: (blood: string) => void;
  selectedBranch: string;
  setSelectedBranch: (branch: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  branchOptions: string[];
  totalCount: number;
  getCategoryCount: (cat: string) => number;
  onResetFilters: () => void;
}

export default function MembersFilterBar({
  searchQuery,
  setSearchQuery,
  selectedBlood,
  setSelectedBlood,
  selectedBranch,
  setSelectedBranch,
  selectedCategory,
  setSelectedCategory,
  branchOptions,
  totalCount,
  getCategoryCount,
  onResetFilters,
}: MembersFilterBarProps) {
  const hasActiveFilters = Boolean(
    searchQuery ||
      selectedCategory !== "All" ||
      selectedBlood !== "All" ||
      selectedBranch !== "All"
  );

  return (
    <section className="py-8 bg-[#f6f4f1] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
          {/* Search Input */}
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, department, role, branch, or blood group..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-[#e6000a] focus:ring-2 focus:ring-red-100 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Blood & Branch Dropdown Selects */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 shadow-xs">
              <Droplet className="w-3.5 h-3.5 text-red-600 fill-red-600" />
              <span>Blood:</span>
              <select
                value={selectedBlood}
                onChange={(e) => setSelectedBlood(e.target.value)}
                className="bg-transparent font-bold text-gray-900 focus:outline-hidden cursor-pointer"
              >
                {BLOOD_GROUPS.map((bg) => (
                  <option key={bg} value={bg}>
                    {bg}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#007938]" />
              <span>Branch:</span>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="bg-transparent font-bold text-gray-900 focus:outline-hidden cursor-pointer"
              >
                {branchOptions.map((br) => (
                  <option key={br} value={br}>
                    {br === "All" ? "All Chapters" : br}
                  </option>
                ))}
              </select>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="text-xs font-bold text-[#e6000a] hover:underline px-2 py-1 cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Category Pill Buttons */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? "bg-[#0d0f14] text-white shadow-sm scale-102"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.label}
              {cat.value === "All" ? (
                <span className="ml-1.5 opacity-60">({totalCount})</span>
              ) : (
                <span className="ml-1.5 opacity-60">
                  ({getCategoryCount(cat.value)})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
