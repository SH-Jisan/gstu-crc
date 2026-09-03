"use client";

import React from "react";
import {
  BookOpen,
  Users,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function JaagoFocusAreas() {
  const focusItems = [
    {
      icon: BookOpen,
      tag: "Focus Area 01",
      title: "Education & Digital Learning",
      description:
        "Free institutional schooling through Hatekhori School (হাতিখড়ি স্কুল). Delivering literacy, arithmetic, English, and ethical mentorship to street children.",
      link: "#sponsor-child",
      color: "from-amber-500 to-amber-600",
      iconBg: "bg-amber-100 text-amber-800",
    },
    {
      icon: Users,
      tag: "Focus Area 02",
      title: "Youth & Volunteerism",
      description:
        "Mobilizing students across Gopalganj Science and Technology University (GSTU) and nationwide public universities as voluntary tutors and community builders.",
      link: "#volunteerism",
      color: "from-blue-600 to-blue-700",
      iconBg: "bg-blue-100 text-blue-800",
    },
    {
      icon: HeartPulse,
      tag: "Focus Area 03",
      title: "Healthcare & Nutrition",
      description:
        "Combating malnutrition with daily warm midday meals at schools, pediatric dental/eye screenings, and emergency winter blanket distribution drives.",
      link: "#news-articles",
      color: "from-rose-500 to-rose-600",
      iconBg: "bg-rose-100 text-rose-800",
    },
    {
      icon: ShieldCheck,
      tag: "Focus Area 04",
      title: "Governance & Safeguarding",
      description:
        "Three-Tier constitutional governance, 100% chartered accountant public audits, and an encrypted whistleblower portal protecting vulnerable children.",
      link: "#governance-transparency",
      color: "from-emerald-500 to-emerald-600",
      iconBg: "bg-emerald-100 text-emerald-800",
    },
  ];

  return (
    <section id="focus-areas" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-black uppercase tracking-wider text-amber-600">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 mt-1">
            Our Focus Areas
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            By addressing root causes rather than temporary symptoms, CRC creates sustainable pathways 
            from street vulnerability to educated, empowered citizenship.
          </p>
        </div>

        {/* 4 Focus Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gray-50/70 rounded-3xl p-7 border border-gray-200/80 hover:bg-white hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-xs ${item.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase text-gray-900 group-hover:text-amber-600 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-200/70">
                  <a
                    href={item.link}
                    className="inline-flex items-center text-xs font-black uppercase text-gray-900 hover:text-amber-600 transition-colors"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
