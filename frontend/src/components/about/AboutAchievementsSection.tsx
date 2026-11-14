import React from "react";
import { ACHIEVEMENTS } from "@/data/aboutData";

export default function AboutAchievementsSection() {
  return (
    <section
      id="achievements"
      className="bg-[#0d0f14] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-gray-800 scroll-mt-28"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e6000a]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007938]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-white font-black tracking-tight">
            Key Achievements & Recognition
          </h2>
          <p className="text-base font-semibold text-amber-300">
            {ACHIEVEMENTS.title}
          </p>

          <blockquote className="text-xs sm:text-sm text-gray-200 italic border-l-4 border-amber-400 pl-4 py-1 leading-relaxed">
            {ACHIEVEMENTS.nomination}
          </blockquote>

          <p className="text-xs text-gray-400 leading-relaxed">
            CRC GSTU has pioneered campus-led child welfare initiatives in
            Bangladesh, demonstrating continuous commitment to street children
            since 5 June 2016 through free schooling, winter survival drives,
            medical camps, and transparent institutional governance.
          </p>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
          {ACHIEVEMENTS.highlights.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-sm p-3.5 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <span className="font-heading text-2xl font-black text-[#e6000a]">
                {item.metric}
              </span>
              <div>
                <span className="text-xs font-bold text-white block mt-1">
                  {item.label}
                </span>
                <span className="text-[10px] text-gray-400 leading-tight block mt-0.5">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
