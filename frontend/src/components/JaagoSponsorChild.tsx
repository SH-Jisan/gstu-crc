"use client";

import React from "react";

export default function JaagoSponsorChild() {
  return (
    <section className="sac-section relative bg-cover bg-no-repeat centered min-h-96 pb-12 bg-gray-50">
      {/* 1. Main 50/50 Split Card */}
      <div className="max-w-6xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row shadow-2xl md:rounded-l-2xl md:rounded-r-2xl overflow-hidden bg-white">
          {/* Left Column: Picture */}
          <div className="basis-1/2 flex-1 md:rounded-l-2xl overflow-hidden">
            <img
              loading="lazy"
              width={576}
              height={550}
              className="w-full h-full min-h-[380px] lg:min-h-[500px] object-cover object-center md:rounded-l-2xl"
              src="https://jaago.com.bd/images/2024/04/sponsor-a-child_1714365666_yl5a0ydht.jpg?tr=f-auto,fo-auto,pr-true,c-maintain_ratio"
              alt="Sponsor a child in Bangladesh with JAAGO Foundation"
            />
          </div>

          {/* Right Column: Narrative Content */}
          <div className="basis-1/2 flex-1 bg-white flex items-center md:rounded-r-2xl">
            <div className="p-8 sm:p-12">
              <h2 className="uppercase text-2xl font-bold font-heading mb-4 text-[#1f2937]">
                Sponsor a child program
              </h2>
              <p className="mb-6 text-base text-[#1f2937] leading-relaxed">
                We believe in the potential of every child and that education is the key to unlocking that potential. Yet, due to financial constraints, for countless children, education is an unattainable luxury. For the past 17 years, we have been working to change this reality!
              </p>
              <p className="mb-6 text-base text-[#1f2937] leading-relaxed">
                Through our Sponsor A Child Program, we have ensured quality education for over 5000 children from underserved communities.
              </p>
              <p className="mb-6 text-base text-[#1f2937] leading-relaxed">
                You can also join the initiative. With just{" "}
                <strong className="text-gray-950 font-bold">BDT 2,500</strong> per month, you can give children in need access to educational opportunities and support their journey towards a brighter future. Help Change a life today!
              </p>
              <a
                className="btn btn-primary px-8 py-3.5 text-base font-sans shadow-md capitalize font-bold text-[#1f2937] inline-block hover:scale-105 transition-transform"
                href="https://jaago.com.bd/sponsor-a-child"
              >
                Sponsor a Child
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Number of Unsponsored Children Counter Block */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 pb-10">
        <h2 className="font-heading text-3xl sm:text-4xl text-[#1f2937] text-center font-extrabold uppercase tracking-tight">
          Number of Unsponsored Children
        </h2>
        <p className="font-heading text-5xl sm:text-7xl text-center text-[#1f2937] font-black my-3">
          1100
        </p>
        <div className="text-center mt-4">
          <a
            className="btn btn-primary px-8 py-3.5 text-base font-sans shadow-md capitalize font-bold text-[#1f2937] inline-block hover:scale-105 transition-transform"
            href="https://jaago.com.bd/sponsor-a-child"
          >
            Sponsor a Child
          </a>
        </div>
      </div>
    </section>
  );
}
