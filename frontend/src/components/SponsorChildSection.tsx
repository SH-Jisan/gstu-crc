"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import SponsorDonationModal from "./sponsor/SponsorDonationModal";

export default function SponsorChildSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="sponsor"
      className="sac-section relative bg-cover bg-no-repeat centered pb-6 sm:pb-8 bg-[#f6f4f1] scroll-mt-24 sm:scroll-mt-28"
    >
      {/* 1. Main 50/50 Split Narrative Card */}
      <div
        data-aos="fade-up"
        data-aos-duration="650"
        className="max-w-6xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8"
      >
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-lg overflow-hidden bg-white border border-gray-100">
          {/* Left Column: Picture */}
          <div className="basis-1/2 flex-1 overflow-hidden relative min-h-[220px] sm:min-h-[260px] lg:min-h-[330px]">
            <Image
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              src="/assets/school.jpg"
              alt="Sponsor a street child with Come for Road Child CRC Hatekhori School"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Narrative Content */}
          <div className="basis-1/2 flex-1 bg-white flex items-center">
            <div className="p-5 sm:p-6 lg:p-7">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#e6000a] block mb-1">
                COME FOR ROAD CHILD (CRC)
              </span>
              <h2 className="uppercase text-lg sm:text-xl font-bold font-heading mb-2 text-[#0d0f14]">
                Sponsor a Child Program
              </h2>
              <p className="mb-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                We firmly believe in the infinite potential of every child. Education is the sacred key to unlocking that potential. Yet, due to severe poverty, broken families, and street hardships, countless children are robbed of their right to learn.
              </p>
              <p className="mb-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Since <strong>5 June 2016</strong>, Come for Road Child (CRC) has been running <strong>Hatekhori Free School</strong>, providing foundational education, books, stationery, and daily nutritious meals to over <strong>350 street children</strong>.
              </p>
              <p className="mb-3.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                With just <strong className="text-[#e6000a] font-bold">BDT 1,500</strong> per month, you can sponsor a street child&apos;s complete education, textbooks, school bag, uniform, and daily nutrition. Stand with GSTU volunteers and transform a child&apos;s destiny!
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 text-xs sm:text-sm font-sans rounded-lg shadow-md capitalize font-bold text-white bg-[#e6000a] hover:bg-[#a20002] inline-flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current" />
                Sponsor a Child Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Number of Unsponsored Children Static Counter Block */}
      <div
        data-aos="fade-up"
        data-aos-duration="650"
        data-aos-delay="100"
        className="max-w-5xl mx-auto px-6 relative z-10 pt-2 sm:pt-4 pb-1"
      >
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#e6000a] block text-center mb-1">
          COMMUNITY IMPACT · HATEKHORI CAMPUS
        </span>
        <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-[#0d0f14] text-center font-extrabold uppercase tracking-tight">
          Children Currently Seeking Sponsorship
        </h2>
        <p className="font-heading text-4xl sm:text-5xl lg:text-6xl text-center text-[#e6000a] font-black my-1 tracking-tight">
          120
        </p>
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-600 mb-2.5">
          Every BDT 1,500/month guarantees a child&apos;s complete schooling, learning supplies, and daily food.
        </p>
        <div className="text-center mt-1.5">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2.5 text-xs sm:text-sm font-sans rounded-lg shadow-md capitalize font-bold text-white bg-[#e6000a] hover:bg-[#a20002] inline-flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-current" />
            Become a Child Sponsor
          </button>
        </div>
      </div>

      {/* 3. Interactive Sponsorship & Donation Modal */}
      <SponsorDonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
