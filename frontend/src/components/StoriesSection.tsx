"use client";

import React from "react";
import { Quote } from "lucide-react";

export default function StoriesSection() {
  const stories = [
    {
      name: "Rima, 11",
      role: "Class 5 Student · Former Flower Seller",
      tag: "Academic Excellence",
      quote:
        "“Found selling flowers at a bus stand in 2019. Today she is in Class 5 at Hatekhori and first in her class.”",
    },
    {
      name: "Sabbir, 13",
      role: "Class 4 Student · Former Workshop Apprentice",
      tag: "Child Labor Rescue",
      quote:
        "“Joined our evening classes after leaving a workshop job. He now reads Bangla and English fluently.”",
    },
    {
      name: "Jarin, 9",
      role: "Class 2 Student · Sponsee Child",
      tag: "Nutrition & Care",
      quote:
        "“Enrolled through our sponsor-a-child programme; her family receives monthly nutrition support.”",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0d0f14] text-white relative overflow-hidden border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-11">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#e6000a] block mb-2 font-sans">
            SUCCESS STORIES · REAL IMPACT
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Stories from the Street
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-gray-400 font-sans font-normal leading-relaxed">
            Real children, real change — written with their families&apos; consent.
          </p>
        </div>

        {/* 3 Hybrid Cards: Rounded-LG, Subtle Dark Surface, Signature Red Left Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {stories.map((item) => (
            <div
              key={item.name}
              className="bg-[#131620] p-5 sm:p-6 rounded-lg border border-gray-800/80 border-l-4 border-l-[#e6000a] flex flex-col justify-between hover:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 shadow-md group"
            >
              <div>
                {/* Top Row: Category Tag + Minimal Quote Icon */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#e6000a]/10 text-[#e6000a] border border-[#e6000a]/25">
                    {item.tag}
                  </span>
                  <Quote className="w-4 h-4 text-gray-500 opacity-40 group-hover:text-[#e6000a] group-hover:opacity-80 transition-colors" />
                </div>

                {/* Quote Text from Screenshot */}
                <p className="text-[13.5px] sm:text-sm text-gray-200 leading-relaxed font-sans italic">
                  {item.quote}
                </p>
              </div>

              {/* Bottom Author Block: Bold Red Name from Screenshot + Context Role */}
              <div className="mt-5 pt-4 border-t border-gray-800/80">
                <h4 className="font-heading text-sm sm:text-[15px] font-bold text-[#e6000a] tracking-wide">
                  {item.name}
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 font-sans">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
