"use client";

import React from "react";
import { BookOpen, Users, User, CloudLightning, Scale } from "lucide-react";

export default function JaagoFocusAreas() {
  const areas = [
    {
      title: "Education and Digital Learning",
      description:
        "Education is the core focus area of JAAGO. For 17 years, JAAGO has been working to make education accessible to children from marginalized communities and hard-to-reach areas.",
      link: "https://jaago.com.bd/education-program",
      icon: BookOpen,
      delay: "100",
    },
    {
      title: "Youth and Skill Development",
      description:
        "With a firm belief that youths are the future of our nation, JAAGO has launched initiatives focusing on youth empowerment and skills development.",
      link: "https://jaago.com.bd/youth-development-program",
      icon: Users,
      delay: "200",
    },
    {
      title: "Women",
      description:
        "To promote and protect women’s rights, JAAGO has been working to break women’s barriers to education, foster skills development, and raise mass awareness on issues like gender-based violence, mental and menstrual health management etc.",
      link: "https://jaago.com.bd/women",
      icon: User,
      delay: "300",
    },
    {
      title: "Environment",
      description:
        "From global warming and environmental pollution to climate change, we are creating opportunities for the youth to do their part to protect our planet.",
      link: "https://jaago.com.bd/environment",
      icon: CloudLightning,
      delay: "400",
    },
    {
      title: "Governance and Advocacy",
      description:
        "By equipping youths with the knowledge of civic education and enhancing their knowledge of their civic responsibilities, JAAGO is empowering them to shape their dream Bangladesh.",
      link: "https://jaago.com.bd/governance",
      icon: Scale,
      delay: "500",
    },
  ];

  return (
    <section className="relative focus-areas bg-white z-10 py-[80px]">
      <div className="max-w-7xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Title Card with data-aos="fade-up" */}
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="bg-[#ffcd05] min-h-52 p-8 rounded-2xl flex flex-col justify-center shadow-lg"
        >
          <span className="font-sans text-2xl md:text-4xl text-[#1f2937]">Our</span>
          <h2 className="font-bold text-3xl md:text-5xl font-heading capitalize text-[#1f2937] mt-1">
            Focus areas
          </h2>
        </div>

        {/* Focus Cards 2 to 6 with data-aos staggered delays and yellow hover sweep */}
        {areas.map((area, idx) => {
          const IconComponent = area.icon;
          return (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={area.delay}
              className="relative bg-white group flex-col justify-start text-left p-3 rounded-2xl shadow-lg z-10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Signature JAAGO Yellow Hover Sweep Layer */}
              <div className="absolute bg-[#ffcd05] rounded-2xl w-0 h-full -z-10 left-0 top-0 duration-500 group-hover:w-full transition-all ease-in-out" />

              <div className="text-left p-8 border border-dashed rounded-xl border-gray-300 hover:border-gray-500 duration-200 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-amber-50 group-hover:bg-white text-gray-900 flex items-center justify-center mb-4 transition-colors">
                    <IconComponent className="w-8 h-8 text-gray-800" />
                  </div>

                  <h3 className="font-sans text-xl md:text-2xl uppercase mt-2 font-bold text-[#1f2937] leading-snug">
                    {area.title}
                  </h3>
                  <p className="my-5 text-sm text-gray-600 group-hover:text-gray-900 leading-relaxed transition-colors">
                    {area.description}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={area.link}
                    className="inline-block text-sm font-semibold capitalize px-5 py-2.5 border border-dashed rounded-full border-gray-300 text-gray-800 group-hover:bg-[#1f2937] group-hover:text-white transition-colors duration-200"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
