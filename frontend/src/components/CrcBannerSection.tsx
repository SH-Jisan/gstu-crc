"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award } from "lucide-react";

export default function CrcBannerSection() {
  return (
    <section id="official-banner" className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#0d0f14] text-white relative overflow-hidden border-b border-gray-800">
      {/* Subtle background radial dot overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#e6000a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e6000a]/15 border border-[#e6000a]/30 text-[#e6000a] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Central Identity · Founded 2016 at GSTU</span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            “থেকে একসাথে যুক্ত করব{" "}
            <span className="text-[#e6000a] inline-block">পৃথিবী পথশিশু মুক্ত</span>”
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed"
          >
            Come For Road Child (CRC) is a voluntary student-led organization founded at Gopalganj Science and Technology University (GSTU). We educate, feed, and safeguard street children across Bangladesh.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="250"
            className="mt-6 flex flex-wrap gap-4 justify-center"
          >
            <a
              className="btn btn-primary px-7 py-3 text-sm sm:text-base font-sans shadow-xl capitalize font-bold text-white bg-[#e6000a] hover:bg-[#a20002] inline-flex hover:scale-105 active:scale-95 transition-transform"
              href="#sponsor"
            >
              Sponsor a Child
            </a>
            <Link
              className="px-6 py-3 text-sm sm:text-base font-sans font-bold text-white border border-gray-600 rounded-lg hover:border-[#e6000a] hover:text-[#e6000a] transition-all duration-200 inline-flex items-center active:scale-95"
              href="/school"
            >
              Hatekhori Free School
            </Link>
          </div>
        </div>

        {/* The Official CRC Banner Image */}
        <div
          data-aos="zoom-out"
          data-aos-duration="800"
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 group bg-black/60 backdrop-blur-xs"
        >
          <img
            src="/assets/crc-banner.png"
            alt="CRC, GSTU Official Banner — Brotherhood, Commitment, Trust, থেকে একসাথে যুক্ত করব পৃথিবী পথশিশু মুক্ত"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
          />
        </div>

        {/* 3 Core Values Pills below banner */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 sm:p-5 rounded-2xl border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#e6000a]/20 border border-[#e6000a]/40 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-[#e6000a]" />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-bold text-white font-heading">Brotherhood (ভাতৃত্ব)</h4>
              <p className="text-xs text-gray-400">Unity among volunteers dedicated to street children welfare.</p>
            </div>
          </div>

          <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 sm:p-5 rounded-2xl border border-white/10 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#007938]/20 border border-[#007938]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#007938]" />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-bold text-white font-heading">Commitment (দায়বদ্ধতা)</h4>
              <p className="text-xs text-gray-400">Consistent education, daily meals, and child safeguarding.</p>
            </div>
          </div>

          <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 sm:p-5 rounded-2xl border border-amber-500/40 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-bold text-white font-heading">Trust (বিশ্বাস)</h4>
              <p className="text-xs text-gray-400">100% transparent audit reports and donor accountability.</p>
            </div>
          </div>
        </div>

        {/* Quick Link Action */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          className="mt-8 text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-300 hover:text-white transition-colors group"
          >
            <span>Read full story of CRC founding &amp; GSTU roots</span>
            <ArrowRight className="w-4 h-4 text-[#e6000a] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
