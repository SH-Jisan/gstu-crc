import React from "react";
import CareSplitPrinciples from "@/components/CareSplitPrinciples";
import { GUIDING_VALUES } from "@/data/aboutData";

export default function AboutPrinciplesSection() {
  return (
    <section
      id="principles"
      className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
    >
      <div className="max-w-3xl mb-10">
        <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight leading-tight">
          Our Principles & Values
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed bg-[#f6f4f1] p-4 sm:p-5 rounded-2xl border border-gray-200/80">
          The CRC foundation is grounded in three Fundamental Principles that
          define its humanitarian purpose and organizational identity. To
          translate these principles into responsible daily action, CRC GSTU
          adheres to eight Guiding Values that govern volunteer conduct, student
          mentorship, and community engagement.
        </p>
      </div>

      {/* Fundamental Principles (CARE Bangladesh Alternating Split-Tile Parallax Style) */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0d0f14] tracking-tight">
              Fundamental Principles
            </h3>
          </div>
          <span className="text-xs font-semibold text-gray-500 hidden sm:inline-block">
            Humanitarian Operational Framework
          </span>
        </div>

        <div className="-mx-6 sm:-mx-10 mt-6 mb-8">
          <CareSplitPrinciples />
        </div>
      </div>

      {/* Guiding Values */}
      <div className="mt-14 pt-10 border-t border-gray-100">
        <div className="max-w-3xl mb-8">
          <div className="mb-2">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0d0f14] tracking-tight">
              Guiding Values
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            CRC GSTU upholds eight Guiding Values to translate the fundamental
            principles into disciplined organizational practice, ethical
            interactions, and sustained humanitarian service:
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {GUIDING_VALUES.map((val) => (
            <div
              key={val.title}
              className="bg-[#f6f4f1] rounded-2xl p-5 border border-gray-200/80 flex flex-col justify-between hover:bg-white hover:border-gray-300 hover:shadow-md transition-all hover:-translate-y-0.5 group"
            >
              <div>
                <h4 className="font-heading text-base font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors">
                  {val.title}
                </h4>
                <span className="text-[11px] font-semibold text-gray-500 block mb-2">
                  ({val.bengali})
                </span>

                <blockquote className="text-[11px] text-gray-700 italic border-l border-red-500/40 pl-2 leading-relaxed mb-3">
                  {val.quote}
                </blockquote>

                <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200/50 pt-2.5">
                  {val.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
