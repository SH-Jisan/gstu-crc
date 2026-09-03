"use client";

import React, { useState, useEffect, useRef } from "react";

export default function JaagoVolunteerism() {
  const [hasCounted, setHasCounted] = useState(false);
  const [volunteers, setVolunteers] = useState(0);
  const [districts, setDistricts] = useState(0);
  const [upazilas, setUpazilas] = useState(0);
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
            setVolunteers(Math.floor(progress * 60000));
            setDistricts(Math.floor(progress * 64));
            setUpazilas(Math.floor(progress * 495));

            if (step >= steps) {
              setVolunteers(60000);
              setDistricts(64);
              setUpazilas(495);
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
    <section ref={sectionRef} className="max-w-full bg-gray-800">
      {/* 1. Top Section */}
      <div className="w-11/12 md:w-3/5 mx-auto text-center relative z-20 pt-12 md:pt-16">
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-3xl md:text-5xl font-bold font-heading text-center capitalize text-white"
        >
          Volunteerism
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          className="text-lg md:text-xl text-center mt-5 mb-10 text-white font-normal leading-relaxed"
        >
          With an aim to mobilize the youth to build a better nation, we have empowered more than{" "}
          <strong className="text-white font-bold">60,000 young changemakers</strong> from all across Bangladesh and engaged them in driving positive societal change.
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
                {hasCounted ? volunteers.toLocaleString() : "60,000"}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Nationwide Volunteers
              </p>
            </div>

            {/* Metric 2 */}
            <div className="w-full py-4 md:py-0 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold font-heading text-gray-900 tracking-tight">
                {hasCounted ? districts : "64"}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Districts Covered
              </p>
            </div>

            {/* Metric 3 */}
            <div className="w-full py-4 md:py-0 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold font-heading text-gray-900 tracking-tight">
                {hasCounted ? upazilas : "495"}
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Upazilas Reached
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
          Do you want to work for the{" "}
          <strong className="font-extrabold text-gray-950">Underprivileged Communities</strong> and change their lives?
        </h3>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150" className="mt-8">
          <a
            rel="nofollow"
            className="btn btn-secondary font-heading text-lg md:text-xl capitalize px-8 py-4 text-white inline-block shadow-xl hover:scale-105 transition-transform"
            href="https://vbd.com.bd/registration-form"
            target="_blank"
          >
            Become a national volunteer
          </a>
        </div>
      </div>
    </section>
  );
}
