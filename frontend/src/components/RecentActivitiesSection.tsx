"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function RecentActivitiesSection() {
  const activities = [
    {
      img: "/assets/campaign.jpg",
      tag: "Campaign",
      tagColor: "bg-[#e6000a] text-white",
      title: "Winter Clothes & Blanket Distribution",
      text: "Over 600 blankets and thermal warm clothes distributed to street-dwelling families and children across Gopalganj bus terminals and railway crossings.",
      date: "Winter 2025",
    },
    {
      img: "/assets/school.jpg",
      tag: "Hatekhori School",
      tagColor: "bg-[#e6000a] text-white",
      title: "Moral Storytelling & Alphabet Lessons",
      text: "Weekly interactive sessions where volunteer university mentors teach Bengali alphabet tracing, moral courage, and basic arithmetic through songs and games.",
      date: "Every Thursday",
    },
    {
      img: "/assets/health.jpg",
      tag: "Health & Nutrition",
      tagColor: "bg-[#e6000a] text-white",
      title: "Nutrition & Hygiene Awareness for Mothers",
      text: "Community healthcare counseling sessions providing mothers with essential guidance on pediatric nutrition, safe water, and emergency medical referrals.",
      date: "Monthly Drive",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#f6f4f1] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-7 sm:mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#e6000a] block mb-2">
              FIELD INITIATIVES · ONGOING ACTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0d0f14] tracking-tight">
              Recent Field Activities
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-2xl font-sans">
              Classes, humanitarian relief drives, and community health camps mobilized every week by Gopalganj Science and Technology University students.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/media"
              className="inline-flex items-center gap-2 font-heading text-xs sm:text-sm font-bold text-[#e6000a] hover:text-[#a20002] transition-colors group"
            >
              <span>Explore full media archive</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Activity Cards with rounded-lg edges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {activities.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col group"
            >
              <div className="relative aspect-[16/9.5] overflow-hidden bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-5.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#e6000a]" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-gray-600 leading-relaxed font-sans">
                    {item.text}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#e6000a]">
                  <Link
                    href="/media"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#e6000a] hover:text-[#a20002] transition-colors"
                  >
                    <span>View photographs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
