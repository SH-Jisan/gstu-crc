"use client";

import React from "react";
import { BookOpen, ShieldAlert, HeartPulse, Sparkles, Users, ArrowRight } from "lucide-react";

export default function FocusAreasSection() {
  const areas = [
    {
      title: "Hatekhori Free School",
      subtitle: "হাতেখড়ি উন্মুক্ত পাঠশালা",
      description:
        "Providing foundational literacy, Bengali & English alphabet learning, moral education, notebooks, pencils, and daily wholesome snacks for street children in Gopalganj.",
      link: "#hatekhori",
      icon: BookOpen,
      delay: "80",
    },
    {
      title: "Child Safeguarding & Rescue",
      subtitle: "শিশু সুরক্ষা ও পুনর্বাসন",
      description:
        "Emergency intervention for children exposed to hazardous street environments, abusive child labor, and trafficking risks. Reconnecting lost children with families.",
      link: "#safeguarding",
      icon: ShieldAlert,
      delay: "160",
    },
    {
      title: "Health & Nutrition Camps",
      subtitle: "চিকিৎসা ও পুষ্টি সেবা",
      description:
        "Regular medical checkups by volunteer doctors, personal hygiene training, essential vitamin supplies, soap distribution, and treatment for seasonal illnesses.",
      link: "#health",
      icon: HeartPulse,
      delay: "240",
    },
    {
      title: "Winter Warmth & Relief",
      subtitle: "শীতবস্ত্র ও মানবিক সহায়তা",
      description:
        "Annual distribution of warm sweaters, blankets, and dry food rations to street children, floating homeless families, and vulnerable rural communities.",
      link: "#relief",
      icon: Sparkles,
      delay: "320",
    },
    {
      title: "Youth Leadership & Mentorship",
      subtitle: "যুব নেতৃত্ব ও স্বেচ্ছাসেবী কার্যক্রম",
      description:
        "Mobilizing dedicated students from Gopalganj Science and Technology University (GSTU) to serve as role models, peer mentors, and volunteer teachers.",
      link: "#youth",
      icon: Users,
      delay: "400",
    },
  ];

  return (
    <section id="focus" className="relative focus-areas bg-white z-10 py-[80px] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Title Card with subtle ambient accent and fade-up */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="false"
          className="group relative overflow-hidden bg-[#e6000a] text-white min-h-52 p-8 rounded-2xl flex flex-col justify-center shadow-lg transition-transform duration-300"
        >
          {/* Subtle ambient background glow & geometric circle */}
          <div
            className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/[0.08] pointer-events-none transition-transform duration-700 ease-out group-hover:scale-125"
            aria-hidden="true"
          />
          <div
            className="absolute -right-2 -top-10 w-24 h-24 rounded-full bg-black/[0.08] pointer-events-none"
            aria-hidden="true"
          />

          <span className="relative z-10 font-sans text-2xl md:text-3xl text-red-100 font-medium">Our Core</span>
          <h2 className="relative z-10 font-bold text-3xl md:text-5xl font-heading capitalize text-white mt-1">
            Focus Areas
          </h2>
          <p className="relative z-10 mt-3 text-xs md:text-sm font-semibold text-red-100/90 leading-relaxed">
            Founded on 5 June 2016 at GSTU, Come for Road Child works across 5 foundational pillars to protect and educate street children.
          </p>
        </div>

        {/* 5 Focus Cards with Staggered Fade-Up and Refined Hover Micro-Interactions */}
        {areas.map((area, idx) => {
          const Icon = area.icon;
          return (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="550"
              data-aos-delay={area.delay}
              data-aos-once="false"
              className="hover-sweep-card group relative bg-white border border-gray-200 min-h-52 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative z-10">
                {/* Icon Container with Micro Scale/Rotate on Hover */}
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#e6000a] mb-5 group-hover:bg-[#0d0f14] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-xs">
                  <Icon className="w-6 h-6 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3" />
                </div>
                <span className="text-[11px] font-bold text-[#007938] group-hover:text-emerald-200 block mb-1 transition-colors">
                  {area.subtitle}
                </span>
                <h3 className="font-bold text-xl font-heading text-[#0d0f14] mb-3 group-hover:text-white transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal group-hover:text-red-50 transition-colors">
                  {area.description}
                </p>
              </div>

              {/* Learn More link with gliding arrow */}
              <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 group-hover:border-white/20 transition-colors">
                <a
                  href={area.link}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#e6000a] group-hover:text-white transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
