"use client";

import React from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { MOCK_CAMPAIGNS } from "../data/crcMockData";

interface JaagoNewsArticlesProps {
  onOpenDonate: () => void;
}

export default function JaagoNewsArticles({
  onOpenDonate,
}: JaagoNewsArticlesProps) {
  const articles = [
    {
      id: "art-1",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
      categories: ["Information & Updates", "Child Sponsorship"],
      date: "May 10, 2026",
      title:
        "10 Years of CRC: Transforming Street Children Through Hatekhori School Free Education",
      summary:
        "From a small initiative at GSTU platform in 2016 to an audited nationwide movement educating over 520 children.",
    },
    {
      id: "art-2",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
      categories: ["Campaigns", "Seasonal Relief"],
      date: "Apr 28, 2026",
      title:
        "Winter Warmth Relief: Over 12,000 Blankets Distributed to Destitute Slum Families",
      summary:
        "Volunteer teams across 8 branches mobilized overnight packaging and distributing winter essentials to vulnerable children.",
    },
    {
      id: "art-3",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
      categories: ["Transparency", "Audit Report"],
      date: "Apr 15, 2026",
      title:
        "Annual Chartered Accountant Audit 2025-26 Publicly Published with 100% Clearance",
      summary:
        "Independent audit confirms every single donation is directly restricted to child welfare, education, and nutrition.",
    },
  ];

  return (
    <section id="news-articles" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with View All Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-amber-600">
              Updates & Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 mt-1">
              News & Articles
            </h2>
          </div>

          <a
            href="#sponsor-child"
            className="hidden sm:inline-flex items-center text-xs font-black uppercase bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full shadow-md transition-colors"
          >
            View All Articles <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>

        {/* 3-Column Articles Grid with JAAGO Signature Dashed Inner Border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-xl rounded-3xl p-3.5 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Inner Dashed Border Container (JAAGO Signature) */}
              <div className="jaago-dashed-card p-4 flex flex-col justify-between h-full space-y-4">
                <div>
                  {/* Article Photo */}
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Categories & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap gap-1">
                      {item.categories.map((cat, idx) => (
                        <span
                          key={idx}
                          className="bg-[#FFCD05]/20 border border-[#FFCD05] text-gray-950 font-bold text-[10px] px-2.5 py-0.5 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] text-gray-400 font-medium">
                      {item.date}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-base font-black text-gray-900 leading-snug line-clamp-2 hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Read More Yellow Capsule Button */}
                <div className="pt-2">
                  <button
                    onClick={onOpenDonate}
                    className="inline-flex items-center text-xs font-black uppercase bg-[#FFCD05] hover:bg-[#e6b800] text-gray-950 px-4 py-2 rounded-full transition-colors"
                  >
                    Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
