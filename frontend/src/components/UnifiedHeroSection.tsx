"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart, ShieldCheck, Award } from "lucide-react";

export default function UnifiedHeroSection() {
  return (
    <section className="pt-[106px] sm:pt-[114px] pb-14 sm:pb-20 bg-[#0d0f14] text-white relative overflow-hidden border-b border-gray-800">
      {/* Subtle radial dot grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#e6000a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Top Official CRC Banner - Viewport-Fitted */}
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-14">
          <div
            data-aos="zoom-out"
            data-aos-duration="800"
            className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 group bg-black/60 flex items-center justify-center w-fit mx-auto"
            style={{
              maxHeight: "calc(100dvh - 136px)",
            }}
          >
            <img
              src="/assets/crc-banner.png"
              alt="CRC, GSTU Official Banner — Brotherhood, Commitment, Trust"
              className="w-auto h-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
              style={{
                maxHeight: "calc(100dvh - 136px)",
                aspectRatio: "1919 / 955",
              }}
            />
          </div>

          {/* Subtle scroll cue */}
          <div className="mt-3 flex items-center gap-2 text-gray-400 text-xs font-semibold select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e6000a] animate-ping" />
            <span className="tracking-wider uppercase text-[10px] sm:text-[11px] text-gray-400">
              Scroll down for mission & field activities
            </span>
          </div>
        </div>

        {/* 2. Split 2-Column Hero: Message & Authentic Photo Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Headline, Mission & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e6000a]/15 border border-[#e6000a]/30 text-[#e6000a] text-xs font-bold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founded 5 June 2016 · GSTU Campus</span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="font-heading text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08]"
            >
              Every child of the street{" "}
              <span className="text-[#e6000a] inline-block">
                deserves a classroom.
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="150"
              className="text-base sm:text-lg text-red-200/90 font-medium italic"
            >
              “থেকে একসাথে যুক্ত করব পৃথিবী পথশিশু মুক্ত”
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
              className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Come For Road Child (CRC) is a student-run voluntary organisation founded at
              Gopalganj Science &amp; Technology University. We teach, feed, and safeguard children
              who grow up on the road through daily non-formal education and university volunteer mentorship.
            </p>

            {/* Action Buttons */}
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="250"
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
            >
              <a
                href="#sponsor"
                className="btn btn-primary px-8 py-3.5 text-sm sm:text-base font-sans shadow-xl capitalize font-bold text-white bg-[#e6000a] hover:bg-[#a20002] inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
              >
                <span>Sponsor a Child</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/school"
                className="px-6 py-3.5 text-sm sm:text-base font-sans font-bold text-white border border-gray-600 rounded-lg hover:border-[#e6000a] hover:text-[#e6000a] transition-all duration-200 inline-flex items-center active:scale-95"
              >
                Hatekhori Free School
              </Link>
            </div>

            {/* 3 Core Values Pills */}
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
              className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-center lg:justify-start gap-2.5">
                <Heart className="w-4 h-4 text-[#e6000a] shrink-0" />
                <span className="text-xs font-semibold text-gray-200">Brotherhood (ভাতৃত্ব)</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-center lg:justify-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#007938] shrink-0" />
                <span className="text-xs font-semibold text-gray-200">Commitment (দায়বদ্ধতা)</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-center lg:justify-start gap-2.5">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-xs font-semibold text-gray-200">Trust (বিশ্বাস)</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Authentic CRC 3-Photo Mosaic */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {/* Photo 1: School outdoors */}
            <div
              data-aos="fade-left"
              data-aos-duration="600"
              className="col-span-2 rounded-2xl overflow-hidden border border-white/10 shadow-xl group relative aspect-[16/10]"
            >
              <img
                src="/assets/school.jpg"
                alt="Volunteer teaching street children outdoors in Hatekhori school"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider bg-[#e6000a] px-2.5 py-1 rounded-md">
                  Hatekhori Class
                </span>
              </div>
            </div>

            {/* Photo 2: Winter Campaign */}
            <div
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="150"
              className="rounded-2xl overflow-hidden border border-white/10 shadow-xl group relative aspect-[4/3]"
            >
              <img
                src="/assets/campaign.jpg"
                alt="Volunteers distributing winter clothes and blankets"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-[#007938] px-2 py-0.5 rounded">
                  Winter Relief
                </span>
              </div>
            </div>

            {/* Photo 3: Mothers Health */}
            <div
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="250"
              className="rounded-2xl overflow-hidden border border-white/10 shadow-xl group relative aspect-[4/3]"
            >
              <img
                src="/assets/health.jpg"
                alt="Nutrition and health awareness session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-amber-600 px-2 py-0.5 rounded">
                  Health & Nutrition
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
