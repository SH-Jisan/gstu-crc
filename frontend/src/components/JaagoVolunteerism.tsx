"use client";

import React from "react";

export default function JaagoVolunteerism() {
  return (
    <section className="max-w-full bg-gray-800">
      {/* 1. Top Section */}
      <div className="w-11/12 md:w-3/5 mx-auto text-center relative z-20 pt-12 md:pt-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center capitalize text-white">
          Volunteerism
        </h2>
        <p className="text-lg md:text-xl text-center mt-5 mb-10 text-white font-normal leading-relaxed">
          With an aim to mobilize the youth to build a better nation, we have empowered more than{" "}
          <strong className="text-white font-bold">60,000 young changemakers</strong> from all across Bangladesh and engaged them in driving positive societal change.
        </p>

        {/* Floating White Impact Metrics Card */}
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-full lg:w-4/5 mx-auto text-gray-900 border border-gray-100">
          <div className="flex w-full flex-col md:flex-row py-8 justify-around items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Metric 1 */}
            <div className="w-full py-4 md:py-0 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold font-heading text-gray-900">
                60,000
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Nationwide Volunteers
              </p>
            </div>

            {/* Metric 2 */}
            <div className="w-full py-4 md:py-0 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold font-heading text-gray-900">
                64
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Districts Covered
              </p>
            </div>

            {/* Metric 3 */}
            <div className="w-full py-4 md:py-0 flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold font-heading text-gray-900">
                495
              </span>
              <p className="mt-3 text-sm font-semibold text-gray-600 font-sans">
                Upazilas Reached
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Overlapping Yellow Callout Bar */}
      <div className="bg-[#ffcd05] text-center -mt-[80px] pt-[140px] pb-14 px-4">
        <h3 className="text-2xl md:text-4xl w-11/12 md:w-4/5 mx-auto font-heading text-gray-900 leading-snug">
          Do you want to work for the{" "}
          <strong className="font-extrabold text-gray-950">Underprivileged Communities</strong> and change their lives?
        </h3>
        <div className="mt-8">
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
