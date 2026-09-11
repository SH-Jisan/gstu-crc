"use client";

import React from "react";
import { Quote, Sparkles } from "lucide-react";

export default function StoriesSection() {
  const stories = [
    {
      name: "Rima (11 Years)",
      role: "Class 5 Student · Former Flower Seller",
      story:
        "Found selling flowers on the cold pavement of Gopalganj bus terminal in 2019. Today she is in Class 5 at Hatekhori Free School and stands first in her section.",
      tag: "Academic Excellence",
      accent: "border-[#e6000a]",
      pill: "text-[#e6000a] bg-[#e6000a]/10",
    },
    {
      name: "Sabbir (13 Years)",
      role: "Class 4 Student · Former Workshop Apprentice",
      story:
        "Rescued from a hazardous roadside motor workshop where he worked 12 hours a day. Enrolled in our evening learning circles, he now reads Bangla and English with ease.",
      tag: "Child Labor Rescue",
      accent: "border-[#007938]",
      pill: "text-[#007938] bg-[#007938]/10",
    },
    {
      name: "Jarin (9 Years)",
      role: "Class 2 Student · Sponsee Child",
      story:
        "Living in a floating shanty near the rail line with a disabled father. Enrolled through the Sponsor a Child program; her family now receives reliable monthly nutrition rations.",
      tag: "Nutrition & Care",
      accent: "border-amber-500",
      pill: "text-amber-500 bg-amber-500/10",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0d0f14] text-white relative overflow-hidden border-t border-gray-800">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#e6000a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6000a]/15 border border-[#e6000a]/30 text-[#e6000a] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Impact · Street to School</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Voices from the Street
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            Real children, permanent transformation. Every life turned around through the compassion and relentless dedication of university volunteers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item) => (
            <div
              key={item.name}
              className={`bg-[#13161f] p-7 rounded-2xl border border-gray-800 border-l-4 ${item.accent} flex flex-col justify-between hover:border-gray-700 transition-all duration-300 hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.pill}`}>
                    {item.tag}
                  </span>
                  <Quote className="w-6 h-6 text-gray-700 opacity-60" />
                </div>

                <p className="text-sm sm:text-base text-gray-200 leading-relaxed italic">
                  &ldquo;{item.story}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-800/80">
                <h4 className="font-heading text-base font-bold text-white">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
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
