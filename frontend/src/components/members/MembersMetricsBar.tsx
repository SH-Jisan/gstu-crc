import React from "react";

export default function MembersMetricsBar() {
  return (
    <section className="bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black font-heading text-[#e6000a]">
              350+
            </span>
            <span className="text-xs font-semibold text-gray-600 mt-0.5">
              Enrolled Student Volunteers
            </span>
          </div>
          <div className="flex flex-col items-center pt-3 md:pt-0">
            <span className="text-2xl sm:text-3xl font-black font-heading text-[#007938]">
              40+
            </span>
            <span className="text-xs font-semibold text-gray-600 mt-0.5">
              Hatekhori School Teachers
            </span>
          </div>
          <div className="flex flex-col items-center pt-3 md:pt-0">
            <span className="text-2xl sm:text-3xl font-black font-heading text-[#0d0f14]">
              6
            </span>
            <span className="text-xs font-semibold text-gray-600 mt-0.5">
              Active University Chapters
            </span>
          </div>
          <div className="flex flex-col items-center pt-3 md:pt-0">
            <span className="text-2xl sm:text-3xl font-black font-heading text-red-600">
              100%
            </span>
            <span className="text-xs font-semibold text-gray-600 mt-0.5">
              Voluntary Blood Donors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
