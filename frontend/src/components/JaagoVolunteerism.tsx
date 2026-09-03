"use client";

import React from "react";
import { Users, GraduationCap, Building2, ArrowRight } from "lucide-react";

interface JaagoVolunteerismProps {
  onOpenVolunteer?: () => void;
}

export default function JaagoVolunteerism({
  onOpenVolunteer,
}: JaagoVolunteerismProps) {
  return (
    <section id="volunteerism" className="max-w-full scroll-mt-24">
      {/* 1. Dark Top Container */}
      <div className="bg-gray-900 pt-16 pb-28 sm:pb-32 px-4 sm:px-6 lg:px-8 text-white text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase tracking-wider text-[#FFCD05]">
            Youth Leadership & Civic Impact
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Volunteerism
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            With an aim to mobilize university youth to build a poverty-free Bangladesh, 
            we have empowered more than <strong className="text-white">1,450+ student changemakers</strong> from 
            GSTU and public universities to mentor and teach street children.
          </p>

          {/* Floating White Impact Metrics Card (Signature JAAGO Architecture) */}
          <div className="pt-6">
            <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-3xl mx-auto border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* Metric 1 */}
                <div className="pt-4 md:pt-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-2">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-gray-900">
                    1,450+
                  </span>
                  <p className="text-xs font-bold text-gray-500 uppercase mt-1">
                    Nationwide Volunteers
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="pt-4 md:pt-0 md:pl-6 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-2">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-gray-900">
                    8+
                  </span>
                  <p className="text-xs font-bold text-gray-500 uppercase mt-1">
                    University & City Chapters
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="pt-4 md:pt-0 md:pl-6 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-gray-900">
                    520+
                  </span>
                  <p className="text-xs font-bold text-gray-500 uppercase mt-1">
                    Street Children in School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Overlapping Signature Yellow Callout Banner */}
      <div className="bg-[#FFCD05] text-center -mt-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-gray-950 leading-tight">
            Do you want to work for <span className="underline decoration-gray-900">Street Children</span> and change their future?
          </h3>
          <p className="text-sm sm:text-base text-gray-900 font-medium">
            Join the CRC volunteer movement at GSTU or your nearest campus branch. Teach, mentor, and bring smile to a child.
          </p>

          <div>
            <button
              onClick={() => {
                if (onOpenVolunteer) onOpenVolunteer();
                else alert("Volunteer registration opens next semester! Contact GSTU Branch Secretariat.");
              }}
              className="inline-flex items-center text-sm sm:text-base font-black uppercase bg-gray-950 hover:bg-gray-800 text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-150 transform hover:scale-105"
            >
              Become a National Volunteer <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
