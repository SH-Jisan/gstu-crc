"use client";

import React, { useState, useEffect, useRef } from "react";

export default function JaagoVolunteerism() {
  const [hasCounted, setHasCounted] = useState(false);
  const [volunteers, setVolunteers] = useState(0);
  const [years, setYears] = useState(0);
  const [lives, setLives] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          const duration = 1800;
          const steps = 60;
          const intervalTime = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setVolunteers(Math.floor(progress * 1500));
            setYears(Math.floor(progress * 10));
            setLives(Math.floor(progress * 10000));

            if (step >= steps) {
              setVolunteers(1500);
              setYears(10);
              setLives(10000);
              clearInterval(timer);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section id="volunteer" ref={sectionRef} className="max-w-full bg-gray-800">
      {/* 1. Top Section */}
      <div className="w-11/12 md:w-3/5 mx-auto text-center relative z-20 pt-12 md:pt-16">
        <span className="text-xs font-bold uppercase tracking-wider text-[#ffcd05] block mb-2">
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
          className="text-lg md:text-xl text-center mt-5 mb-10 text-white font-normal leading-relaxed"
        >
          With a mission to eliminate child destitution through the power of education, we have mobilized more than{" "}
          <strong className="text-[#ffcd05] font-bold">1,500+ university student changemakers</strong> from Gopalganj Science and Technology University (GSTU) and dedicated youth across the country.
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
              <span className="text-3xl md:text-5xl font-bold font-heading text-gray-900 tracking-tight">
                {hasCounted ? `${volunteers.toLocaleString()}+` : "1,500+"}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Student Volunteers
              </p>
            </div>

            {/* Metric 2 */}
            <div className="w-full py-4 md:py-0 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold font-heading text-gray-900 tracking-tight">
                {hasCounted ? `${years}+` : "10+"}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Years of Service (2016–2026)
              </p>
            </div>

            {/* Metric 3 */}
            <div className="w-full py-4 md:py-0 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold font-heading text-gray-900 tracking-tight">
                {hasCounted ? `${lives.toLocaleString()}+` : "10,000+"}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Lives Impacted
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Overlapping Yellow Callout Bar with data-aos="fade-up" */}
      <div className="bg-[#ffcd05] text-center -mt-[80px] pt-[140px] pb-14 px-4">
        <h3
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-2xl md:text-4xl w-11/12 md:w-4/5 mx-auto font-heading text-gray-900 leading-snug"
        >
          Do you want to stand with{" "}
          <strong className="font-extrabold text-gray-950">Street Children</strong> and transform their lives through education?
        </h3>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150" className="mt-8">
          <a
            className="btn btn-secondary font-heading text-lg md:text-xl capitalize px-8 py-4 text-white inline-block shadow-xl hover:scale-105 transition-transform"
            href="#join"
          >
            Join as a CRC Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}
