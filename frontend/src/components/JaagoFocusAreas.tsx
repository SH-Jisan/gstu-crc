"use client";

import React from "react";
import { BookOpen, ShieldAlert, HeartPulse, Sparkles, Users } from "lucide-react";

export default function JaagoFocusAreas() {
  const areas = [
    {
      title: "Hatekhori Free School",
      subtitle: "হাতেখড়ি উন্মুক্ত পাঠশালা",
      description:
        "Providing foundational literacy, Bengali & English alphabet learning, moral education, notebooks, pencils, and daily wholesome snacks for street children in Gopalganj.",
      link: "#hatekhori",
      icon: BookOpen,
      delay: "100",
    },
    {
      title: "Child Safeguarding & Rescue",
      subtitle: "শিশু সুরক্ষা ও পুনর্বাসন",
      description:
        "Emergency intervention for children exposed to hazardous street environments, abusive child labor, and trafficking risks. Reconnecting lost children with families.",
      link: "#safeguarding",
      icon: ShieldAlert,
      delay: "200",
    },
    {
      title: "Health & Nutrition Camps",
      subtitle: "চিকিৎসা ও পুষ্টি সেবা",
      description:
        "Regular medical checkups by volunteer doctors, personal hygiene training, essential vitamin supplies, soap distribution, and treatment for seasonal illnesses.",
      link: "#health",
      icon: HeartPulse,
      delay: "300",
    },
    {
      title: "Winter Warmth & Relief",
      subtitle: "শীতবস্ত্র ও মানবিক সহায়তা",
      description:
        "Annual distribution of warm sweaters, blankets, and dry food rations to street children, floating homeless families, and vulnerable rural communities.",
      link: "#relief",
      icon: Sparkles,
      delay: "400",
    },
    {
      title: "Youth Leadership & Mentorship",
      subtitle: "যুব নেতৃত্ব ও স্বেচ্ছাসেবী কার্যক্রম",
      description:
        "Mobilizing dedicated students from Gopalganj Science and Technology University (GSTU) to serve as role models, peer mentors, and volunteer teachers.",
      link: "#youth",
      icon: Users,
      delay: "500",
    },
  ];

  return (
    <section id="focus" className="relative focus-areas bg-white z-10 py-[80px]">
      <div className="max-w-7xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Title Card with data-aos="fade-up" */}
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="bg-[#e6000a] text-white min-h-52 p-8 rounded-2xl flex flex-col justify-center shadow-lg"
        >
          <span className="font-sans text-2xl md:text-3xl text-red-100 font-medium">Our Core</span>
          <h2 className="font-bold text-3xl md:text-5xl font-heading capitalize text-white mt-1">
            Focus Areas
          </h2>
          <p className="mt-3 text-xs md:text-sm font-semibold text-red-100/90 leading-relaxed">
            Founded on 5 June 2016 at GSTU, Come for Road Child works across 5 foundational pillars to protect and educate street children.
          </p>
        </div>

        {/* 5 Focus Cards with the Crimson Sweep Hover Animation & AOS */}
        {areas.map((area, idx) => {
          const Icon = area.icon;
          return (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={area.delay}
              className="hover-sweep-card group relative bg-white border border-gray-200 min-h-52 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#e6000a] mb-5 group-hover:bg-[#0d0f14] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#007938] group-hover:text-emerald-200 block mb-1">
                  {area.subtitle}
                </span>
                <h3 className="font-bold text-xl font-heading text-[#0d0f14] mb-3 group-hover:text-white transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal group-hover:text-red-50 transition-colors">
                  {area.description}
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 group-hover:border-white/20">
                <a
                  href={area.link}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#e6000a] group-hover:text-white transition-colors"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
