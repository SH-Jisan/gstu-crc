"use client";

import React from "react";
import { Building2 } from "lucide-react";

export default function PartnersSection() {
  const partners = [
    "Gopalganj Science & Technology University (GSTU)",
    "GSTU Directorate of Students' Welfare",
    "Gopalganj Sadar Union Parishad",
    "Upazila Community Health Complex",
    "Bangladesh Youth Volunteer Network",
    "Hatekhori Education & Welfare Trust",
    "Department of Social Services",
    "GSTU Alumni Donors Circle",
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#007938] block mb-2">
            INSTITUTIONAL COLLABORATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0d0f14] tracking-tight">
            Partners in Our Mission
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            Working closely with university authorities, local government agencies, and community champions to safeguard street children.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {partners.map((partner) => (
            <div
              key={partner}
              className="bg-[#f6f4f1] hover:bg-white rounded-xl p-5 text-center border border-gray-200 hover:border-[#e6000a] transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center min-h-[90px] group cursor-default"
            >
              <Building2 className="w-5 h-5 text-gray-400 group-hover:text-[#e6000a] transition-colors mb-2" />
              <span className="text-xs font-bold text-gray-800 group-hover:text-[#0d0f14] transition-colors leading-snug">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
