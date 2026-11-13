"use client";

import React from "react";
import Link from "next/link";

export default function VolunteerismSection() {
  return (
    <section id="volunteer" className="max-w-full bg-[#0d0f14] scroll-mt-24 sm:scroll-mt-28">
      {/* 1. Top Section */}
      <div className="w-11/12 md:w-3/5 mx-auto text-center relative z-20 pt-8 sm:pt-11">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#e6000a] block mb-1.5">
          YOUTH FOR HUMANITY · GSTU CAMPUS
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-center capitalize text-white">
          Volunteerism at CRC
        </h2>
        <p className="text-sm sm:text-base text-center mt-3 mb-6 sm:mb-8 text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
          With a mission to eliminate child destitution through the power of
          education, we have mobilized more than{" "}
          <strong className="text-[#e6000a] font-bold">
            1,500+ university student changemakers
          </strong>{" "}
          from Gopalganj Science and Technology University (GSTU) and dedicated
          youth across the country.
        </p>

        {/* Floating White Impact Metrics Card */}
        <div className="bg-white p-4 sm:p-5 rounded-xl shadow-2xl w-full lg:w-4/5 mx-auto text-gray-900 border border-gray-100">
          <div className="flex w-full flex-col md:flex-row py-3 sm:py-4 justify-around items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Metric 1 */}
            <div className="w-full py-2.5 md:py-0 flex flex-col items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#e6000a] tracking-tight">
                1,500+
              </span>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-gray-600 font-sans">
                Student Volunteers
              </p>
            </div>

            {/* Metric 2 */}
            <div className="w-full py-2.5 md:py-0 flex flex-col items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#0d0f14] tracking-tight">
                10+
              </span>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-gray-600 font-sans">
                Years of Service (2016–2026)
              </p>
            </div>

            {/* Metric 3 */}
            <div className="w-full py-2.5 md:py-0 flex flex-col items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#e6000a] tracking-tight">
                10,000+
              </span>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-gray-600 font-sans">
                Lives Impacted
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Overlapping Crimson Callout Bar with slash-band effect */}
      <div className="slash-band relative bg-[#e6000a] text-center -mt-[55px] pt-[95px] pb-10 sm:pb-12 px-4 overflow-hidden border-t-2 border-white/10">
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl w-11/12 md:w-4/5 mx-auto font-heading text-white leading-snug">
            Do you want to stand with{" "}
            <strong className="font-extrabold text-white underline decoration-white/40">
              Street Children
            </strong>{" "}
            and transform their lives through education?
          </h3>
          <div className="mt-5">
            <Link
              className="btn btn-secondary font-heading text-sm sm:text-base capitalize px-7 py-3 text-white bg-[#0d0f14] hover:bg-[#1f2937] inline-block shadow-2xl hover:scale-105 transition-transform rounded-full"
              href="/members"
            >
              Join as a CRC Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
