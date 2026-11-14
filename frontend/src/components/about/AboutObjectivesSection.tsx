import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { OBJECTIVES } from "@/data/aboutData";

export default function AboutObjectivesSection() {
  return (
    <section
      id="objectives"
      className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
    >
      <div className="max-w-3xl mb-10">
        <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
          Strategic Objectives
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
          To ensure focused and measurable humanitarian outcomes, CRC GSTU
          directs its volunteer network, university student mentors, and
          institutional resources toward achieving five constitutional
          objectives:
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 items-stretch">
        {OBJECTIVES.map((obj) => (
          <div
            key={obj.num}
            className="bg-[#f6f4f1] rounded-2xl p-6 border border-gray-200/80 hover:bg-white hover:border-[#e6000a] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading text-3xl font-black text-[#e6000a]/30 group-hover:text-[#e6000a] transition-colors">
                  {obj.num}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Objective {obj.num}
                </span>
              </div>

              <h3 className="font-heading text-sm font-bold text-[#0d0f14] leading-snug mb-3">
                {obj.title}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200/70 pt-3">
                {obj.explanation}
              </p>
            </div>
          </div>
        ))}

        {/* Callout Card */}
        <div className="bg-[#0d0f14] text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#e6000a]/20 rounded-full blur-2xl pointer-events-none" />
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
              Collective Responsibility
            </span>
            <h3 className="font-heading text-base font-bold mt-2 text-white">
              Not Merely an Activity — A Responsibility We Choose to Carry
            </h3>
            <p className="mt-2 text-xs text-gray-300 leading-relaxed">
              We turn concern into collective action for underprivileged
              children who have no other safety net.
            </p>
          </div>
          <Link
            href="/programs"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#e6000a] hover:bg-red-700 px-4 py-2 rounded-xl w-fit transition-colors shadow"
          >
            <span>Explore 7 Core Programs</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
