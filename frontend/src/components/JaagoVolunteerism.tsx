"use client";

import React, { useState, useEffect, useRef } from "react";

export default function JaagoVolunteerism() {
  const [volunteers, setVolunteers] = useState(0);
  const [years, setYears] = useState(0);
  const [lives, setLives] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    let isCounting = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCounting) {
          isCounting = true;
          const duration = 2000;
          let startTime: number | null = null;

          const animateMetrics = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);

            setVolunteers(Math.floor(1500 * easeOutCubic));
            setYears(Math.floor(10 * easeOutCubic));
            setLives(Math.floor(10000 * easeOutCubic));

            if (progress < 1) {
              frameId = requestAnimationFrame(animateMetrics);
            } else {
              setVolunteers(1500);
              setYears(10);
              setLives(10000);
            }
          };

          frameId = requestAnimationFrame(animateMetrics);
        } else if (!entry.isIntersecting) {
          isCounting = false;
          cancelAnimationFrame(frameId);
          setVolunteers(0);
          setYears(0);
          setLives(0);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="volunteer" ref={sectionRef} className="max-w-full bg-[#0d0f14]">
      {/* 1. Top Section */}
      <div className="w-11/12 md:w-3/5 mx-auto text-center relative z-20 pt-12 md:pt-16">
        <span className="text-xs font-bold uppercase tracking-wider text-[#e6000a] block mb-2">
          YOUTH FOR HUMANITY · GSTU CAMPUS
        </span>
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-3xl md:text-5xl font-bold font-heading text-center capitalize text-white"
        >
          Volunteerism at CRC
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          className="text-lg md:text-xl text-center mt-5 mb-10 text-gray-200 font-normal leading-relaxed"
        >
          With a mission to eliminate child destitution through the power of education, we have mobilized more than{" "}
          <strong className="text-[#e6000a] font-bold">1,500+ university student changemakers</strong> from Gopalganj Science and Technology University (GSTU) and dedicated youth across the country.
        </p>

        {/* Floating White Impact Metrics Card with data-aos="zoom-out-up" */}
        <div
          data-aos="zoom-out-up"
          data-aos-duration="500"
          data-aos-delay="200"
          className="bg-white p-6 rounded-2xl shadow-2xl w-full lg:w-4/5 mx-auto text-gray-900 border border-gray-100"
        >
          <div className="flex w-full flex-col md:flex-row py-8 justify-around items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Metric 1 */}
            <div className="w-full py-4 md:py-0 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold font-heading text-[#e6000a] tracking-tight">
                {`${volunteers.toLocaleString()}+`}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Student Volunteers
              </p>
            </div>

            {/* Metric 2 */}
            <div className="w-full py-4 md:py-0 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold font-heading text-[#007938] tracking-tight">
                {`${years}+`}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Years of Service (2016–2026)
              </p>
            </div>

            {/* Metric 3 */}
            <div className="w-full py-4 md:py-0 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold font-heading text-[#e6000a] tracking-tight">
                {`${lives.toLocaleString()}+`}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Lives Impacted
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Overlapping Crimson Callout Bar with data-aos="fade-up" */}
      <div className="bg-[#e6000a] text-center -mt-[80px] pt-[140px] pb-14 px-4">
        <h3
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-2xl md:text-4xl w-11/12 md:w-4/5 mx-auto font-heading text-white leading-snug"
        >
          Do you want to stand with{" "}
          <strong className="font-extrabold text-white underline decoration-white/40">Street Children</strong> and transform their lives through education?
        </h3>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150" className="mt-8">
          <a
            className="btn btn-secondary font-heading text-lg md:text-xl capitalize px-8 py-4 text-white bg-[#0d0f14] hover:bg-[#1f2937] inline-block shadow-2xl hover:scale-105 transition-transform"
            href="#join"
          >
            Join as a CRC Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}
