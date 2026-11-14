import React from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { MODES_OF_ACTION } from "@/data/aboutData";

export default function AboutModesOfActionSection() {
  return (
    <section
      id="modes-of-action"
      className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
    >
      <div className="max-w-3xl mb-10">
        <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
          Mode of Action
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
          CRC translates foundational principles and values into concrete
          community outcomes through seven structured operational methods
          designed for sustainable social impact:
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {MODES_OF_ACTION.map((mode) => (
          <div
            key={mode.title}
            className="p-5 sm:p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 hover:bg-white hover:border-[#e6000a] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-red-100/80 text-[#e6000a] flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Action Method
                </span>
              </div>

              <h3 className="font-heading text-base font-bold text-[#0d0f14] mb-0.5">
                {mode.title}
              </h3>
              <span className="text-xs font-semibold text-gray-500 block mb-2.5">
                ({mode.bengali})
              </span>

              <p className="text-xs font-semibold text-gray-800 leading-relaxed mb-2.5">
                {mode.summary}
              </p>

              <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200/60 pt-2.5">
                {mode.details}
              </p>
            </div>
          </div>
        ))}

        {/* Whistleblower Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0d0f14] to-gray-900 text-white flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
              Our Promises
            </span>
            <h3 className="font-heading text-base font-bold mt-2 text-white">
              See a Need? Speak Up.
            </h3>
            <p className="mt-2 text-xs text-gray-300 leading-relaxed">
              Do you know a child who needs help or have a concern regarding
              child safeguarding, misconduct, or financial ethics?
            </p>
          </div>
          <Link
            href="/promises"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#e6000a] hover:bg-red-700 px-4 py-2 rounded-xl w-fit transition-colors"
          >
            <span>Submit a Concern Online</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
