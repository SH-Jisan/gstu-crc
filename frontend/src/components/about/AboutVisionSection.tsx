import React from "react";
import { CheckCircle2 } from "lucide-react";
import { VISION, MISSIONS } from "@/data/aboutData";

export default function AboutVisionSection() {
  return (
    <section
      id="vision"
      className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
    >
      {/* Vision Statement */}
      <div className="bg-gradient-to-br from-red-50/70 to-white rounded-3xl p-6 sm:p-10 border border-red-200/80 shadow-2xs relative overflow-hidden mb-12">
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#0d0f14] font-black tracking-tight">
            Vision Statement
          </h2>
          <blockquote className="mt-4 text-base sm:text-lg text-[#0d0f14] font-medium leading-relaxed italic border-l-4 border-[#e6000a] pl-4 sm:pl-6 bg-white/90 p-4 rounded-r-2xl shadow-2xs">
            {VISION.quote}
          </blockquote>
          <p className="mt-3 text-xs sm:text-sm text-gray-700 font-medium pl-4 sm:pl-6 italic">
            {VISION.bengali}
          </p>
        </div>
      </div>

      {/* Mission Pillars */}
      <div>
        <div className="max-w-3xl mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#0d0f14] font-black tracking-tight">
            Mission Pillars
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            CRC&apos;s mission is articulated through five core operational
            pillars that guide institutional efforts to safeguard rights, deliver
            education, and restore human dignity:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {MISSIONS.map((m) => (
            <div
              key={m.pillar}
              className="bg-[#f6f4f1] rounded-2xl p-5 shadow-2xs border-t-4 border-[#e6000a] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-md hover:bg-white"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center mb-3 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#e6000a]" />
                </div>
                <h3 className="font-heading text-base font-bold text-[#0d0f14]">
                  {m.pillar}
                </h3>
                <span className="text-[11px] font-semibold text-gray-500 block mb-2">
                  ({m.bengali})
                </span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
