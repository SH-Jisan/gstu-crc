"use client";

import React from "react";
import { Building2, Handshake } from "lucide-react";

export default function PartnersSection() {
  const row1 = [
    "Gopalganj Science & Technology University (GSTU)",
    "GSTU Directorate of Students' Welfare",
    "Gopalganj Sadar Union Parishad",
    "Upazila Community Health Complex",
  ];

  const row2 = [
    "Bangladesh Youth Volunteer Network",
    "Hatekhori Education & Welfare Trust",
    "Department of Social Services",
    "GSTU Alumni Donors Circle",
  ];

  // Quadruple rows for infinite, seamless looping
  const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  const renderPartnerCard = (partner: string, keyPrefix: string, idx: number) => (
    <div
      key={`${keyPrefix}-${idx}`}
      className="bg-white/95 hover:bg-white rounded-2xl px-6 py-4 border border-white/80 hover:border-white shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 group shrink-0 cursor-default select-none hover:-translate-y-1"
    >
      <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-[#e6000a] border border-red-100/80 group-hover:border-[#e6000a] flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
        <Building2 className="w-5 h-5 text-[#e6000a] group-hover:text-white transition-colors duration-300" />
      </div>
      <span className="text-xs sm:text-sm font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors whitespace-nowrap">
        {partner}
      </span>
    </div>
  );

  return (
    <section className="pt-14 sm:pt-20 pb-0 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="650"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200 text-[#007938] text-xs font-bold uppercase tracking-wider mb-3">
            <Handshake className="w-3.5 h-3.5" />
            <span>Institutional Collaborations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0d0f14] tracking-tight">
            Partners in Our Mission
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-normal">
            Working closely with university authorities, local government agencies, and community champions to safeguard street children.
          </p>
        </div>
      </div>

      {/* Red & Black Slash Ribbon Band specifically for the Marquee Cards */}
      <div
        className="slash-band relative bg-[#e6000a] w-full py-8 sm:py-10 border-t border-red-700/60 shadow-inner overflow-hidden marquee-pause"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="100"
      >
        <div className="marquee-mask relative z-10 space-y-4 sm:space-y-6">
          {/* Track 1: Smoothly scrolling Left */}
          <div className="animate-marquee-left flex items-center gap-4 sm:gap-6">
            {marqueeRow1.map((partner, idx) => renderPartnerCard(partner, "row1", idx))}
          </div>

          {/* Track 2: Smoothly scrolling Right (Alternating direction) */}
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-6">
            {marqueeRow2.map((partner, idx) => renderPartnerCard(partner, "row2", idx))}
          </div>
        </div>
      </div>
    </section>
  );
}
