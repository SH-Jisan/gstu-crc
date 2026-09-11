"use client";

import React from "react";
import Image from "next/image";

export default function SponsorChildSection() {
  return (
    <section id="sponsor" className="sac-section relative bg-cover bg-no-repeat centered min-h-96 pb-12 bg-[#f6f4f1]">
      {/* 1. Main 50/50 Split Card */}
      <div className="max-w-6xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row shadow-2xl md:rounded-l-2xl md:rounded-r-2xl overflow-hidden bg-white border border-gray-100">
          {/* Left Column: Picture */}
          <div className="basis-1/2 flex-1 md:rounded-l-2xl overflow-hidden relative min-h-[380px] lg:min-h-[500px]">
            <Image
              fill
              className="object-cover object-center md:rounded-l-2xl hover:scale-105 transition-transform duration-700"
              src="/assets/school.jpg"
              alt="Sponsor a street child with Come for Road Child CRC Hatekhori School"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Narrative Content */}
          <div className="basis-1/2 flex-1 bg-white flex items-center md:rounded-r-2xl">
            <div className="p-8 sm:p-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#e6000a] block mb-1">
                COME FOR ROAD CHILD (CRC)
              </span>
              <h2 className="uppercase text-2xl font-bold font-heading mb-4 text-[#0d0f14]">
                Sponsor a Child Program
              </h2>
              <p className="mb-5 text-base text-gray-700 leading-relaxed">
                We firmly believe in the infinite potential of every child. Education is the sacred key to unlocking that potential. Yet, due to severe poverty, broken families, and street hardships, countless children are robbed of their right to learn.
              </p>
              <p className="mb-5 text-base text-gray-700 leading-relaxed">
                Since <strong>5 June 2016</strong>, Come for Road Child (CRC) has been running <strong>Hatekhori Free School</strong>, providing foundational education, books, stationery, and daily nutritious meals to over <strong>350 street children</strong>.
              </p>
              <p className="mb-6 text-base text-gray-700 leading-relaxed">
                With just <strong className="text-[#e6000a] font-bold">BDT 1,500</strong> per month, you can sponsor a street child&apos;s complete education, textbooks, school bag, uniform, and daily nutrition. Stand with GSTU volunteers and transform a child&apos;s destiny!
              </p>
              <a
                className="btn btn-primary px-8 py-3.5 text-base font-sans shadow-md capitalize font-bold text-white bg-[#e6000a] hover:bg-[#a20002] inline-block hover:scale-105 transition-transform rounded"
                href="#donate"
              >
                Sponsor a Child Today
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Number of Unsponsored Children Static Counter Block */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 pb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#007938] block text-center mb-1">
          COMMUNITY IMPACT · HATEKHORI CAMPUS
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] text-center font-extrabold uppercase tracking-tight">
          Children Currently Seeking Sponsorship
        </h2>
        <p className="font-heading text-5xl sm:text-7xl text-center text-[#e6000a] font-black my-3 tracking-tight">
          120
        </p>
        <p className="text-center text-sm font-semibold text-[#007938] mb-4">
          Every BDT 1,500/month guarantees a child&apos;s complete schooling, learning supplies, and daily food.
        </p>
        <div className="text-center mt-4">
          <a
            className="btn btn-primary px-8 py-3.5 text-base font-sans shadow-md capitalize font-bold text-white bg-[#e6000a] hover:bg-[#a20002] inline-block hover:scale-105 transition-transform rounded"
            href="#donate"
          >
            Become a Child Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
