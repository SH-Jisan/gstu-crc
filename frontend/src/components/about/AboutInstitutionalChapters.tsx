import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FURTHER_CHAPTER_CARDS } from "./aboutConstants";

export default function AboutInstitutionalChapters() {
  return (
    <section id="more-chapters" className="scroll-mt-28 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#0d0f14] tracking-tight">
            Explore Institutional Chapters
          </h3>
        </div>
        <span className="text-xs font-bold text-gray-400 hidden sm:inline-block uppercase tracking-wider">
          Institutional Records
        </span>
      </div>

      <div className="space-y-4">
        {FURTHER_CHAPTER_CARDS.map((card) => (
          <Link
            key={card.id}
            id={card.id}
            href={card.href}
            className="block bg-white rounded-xl py-4 sm:py-5 px-5 sm:px-7 border border-gray-200/90 hover:border-[#e6000a] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group scroll-mt-28 relative overflow-hidden text-left cursor-pointer"
          >
            {/* Left vertical red accent line on hover */}
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#e6000a] to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
              <div className="space-y-1.5 max-w-3xl">
                {/* Title */}
                <h4 className="font-heading text-xl sm:text-2xl font-black text-[#0d0f14] group-hover:text-[#e6000a] transition-colors tracking-tight">
                  {card.title}
                </h4>

                {/* Short Details */}
                <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed font-sans font-normal">
                  {card.description}
                </p>
              </div>

              {/* Read More button on the right */}
              <div className="shrink-0 pt-1 md:pt-0">
                <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-red-50 group-hover:bg-[#e6000a] text-[#e6000a] group-hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-2xs group-hover:shadow-md border border-red-200/60 group-hover:border-transparent">
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
