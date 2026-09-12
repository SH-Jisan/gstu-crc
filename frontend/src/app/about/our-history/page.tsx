"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  ChevronRight,
  Users,
  ArrowRight,
} from "lucide-react";
import AosInit from "@/components/AosInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { TIMELINE } from "@/data/aboutData";

export default function OurHistoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased selection:bg-[#e6000a] selection:text-white">
      <AosInit />
      <Navbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="Official Constitution · History of CRC"
          title="Our Founding History & A Decade of Impact"
          intro="From a compassionate Eid shopping initiative at a railway station on 5 June 2016 to a nationwide volunteer social welfare movement empowering over 1,200 street children across Bangladesh."
          breadcrumbs={[
            { label: "About Us", href: "/about" },
            { label: "Our History" },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
          {/* ========================================================= */}
          {/* THE SPARK AT THE RAILWAY STATION */}
          {/* ========================================================= */}
          <section
            id="founding"
            className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200">
                  <Sparkles className="w-4 h-4" />
                  <span>Origin & Genesis</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl text-[#0d0f14] font-black tracking-tight leading-tight">
                  The Spark at the Railway Station:{" "}
                  <span className="text-[#e6000a]">How We Founded</span>
                </h2>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  The journey of <strong>Come for Road Child (CRC)</strong> began with an unyielding commitment to humanity, empathy, and standing beside vulnerable children left behind by society. <strong>Md. Rasel Ahmed</strong> is the visionary Founder and Founding President of CRC Foundation.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  In <strong>2016</strong>, during the festive shopping days preceding Eid, Rasel Ahmed went to purchase new clothes with money saved for himself. Passing by a railway platform, he observed several street children collecting discarded plastic and food scraps in torn rags. Deeply touched by this stark disparity, Rasel and close friends made an immediate decision: they donated their entire Eid clothing budget to buy new shirts, pants, and gifts for those children.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  That singular moment transformed compassion into institutional determination. Realizing that temporary charity would not rescue children from cycles of deprivation, they decided that a structured, youth-driven organization was essential to guarantee education, nutrition, and dignity.
                </p>

                <div className="p-5 rounded-2xl bg-gradient-to-r from-red-50 via-red-50/60 to-white border border-red-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#e6000a] tracking-wider">
                    <Calendar className="w-4 h-4" />
                    <span>5 June 2016 · Simultaneous Foundation & GSTU Branch Launch</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">
                    Md. Rasel Ahmed met <strong>Md. Sakib Ahmed</strong> (then a 1st-year Management student at Gopalganj Science and Technology University) in Kashiani, Gopalganj. Together with university classmates, they formally established CRC Foundation and launched <strong>CRC GSTU Branch</strong> as its pioneering campus chapter on 5 June 2016.
                  </p>
                  <p className="font-heading text-sm sm:text-base font-bold text-[#e6000a] pt-1 italic">
                    “The World Will Be Free from Street Children by Connected Together”
                  </p>
                </div>
              </div>

              {/* Right Side Visual Highlights Card */}
              <div className="lg:col-span-5 space-y-5">
                <div className="bg-[#0d0f14] text-white p-7 sm:p-8 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#e6000a]/20 rounded-full blur-3xl pointer-events-none" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e6000a] block mb-3">
                    Foundational Heritage
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mb-4">
                    Founded on Student Solidarity
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#e6000a] mt-1.5 shrink-0" />
                      <span><strong>Zero Outside Overhead:</strong> Initially funded entirely by student volunteers pooling personal lunch money and pocket stipends.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#007938] mt-1.5 shrink-0" />
                      <span><strong>Direct Field Proximity:</strong> Classes conducted in open parks and campus pavilions before establishing permanent study centers.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span><strong>Constitutional Permanence:</strong> Grounded in written statutes to ensure ethics, rotation of student conveners, and audit transparency.</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Constitutional Identity
                    </span>
                    <h4 className="font-heading text-sm font-bold text-[#0d0f14]">
                      Emblem & Flag Significance
                    </h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Explore the symbolism behind our protective hands and 4 banner colors.
                    </p>
                  </div>
                  <Link
                    href="/about/symbol-flag"
                    className="p-3 bg-white text-[#e6000a] hover:bg-[#e6000a] hover:text-white rounded-xl shadow-xs transition-colors shrink-0 ml-3"
                    title="View Symbol & Flag"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION: 10-YEAR MILESTONE TIMELINE (2016–2026) */}
          {/* ========================================================= */}
          <section id="timeline" className="scroll-mt-28">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200 mb-3">
                <Calendar className="w-4 h-4" />
                <span>Decade Journey · 2016 to 2026</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                Chronicle of a Decade: Our Milestones
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                Key constitutional and operational turning points that shaped CRC GSTU into an award-winning humanitarian organization.
              </p>
            </div>

            <div className="relative border-l-2 border-[#e6000a]/40 ml-4 sm:ml-8 md:ml-32 space-y-10 sm:space-y-12 pb-4">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative pl-6 sm:pl-10 group">
                  {/* Timeline Indicator Node */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#e6000a] shadow-xs group-hover:scale-125 group-hover:bg-[#e6000a] transition-all duration-300" />

                  {/* Year Tag */}
                  <div className="md:absolute md:-left-32 md:top-1 md:w-24 md:text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#e6000a]/10 text-[#e6000a] text-xs font-extrabold uppercase font-heading">
                      {item.year}
                    </span>
                  </div>

                  {/* Milestone Card */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#e6000a] transition-all">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================= */}
          {/* LEADERSHIP OVER THE YEARS */}
          {/* ========================================================= */}
          <section
            id="leadership"
            className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm scroll-mt-28"
          >
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200 mb-3">
                <Users className="w-4 h-4" />
                <span>Generational Stewardship</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                Leadership Over the Years
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                Under the CRC Constitution, leadership is not an entitlement but an active duty of service. Over the past decade, successive executive panels, founding trustees, and university faculty advisors have carried the torch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Founding Conveners */}
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 hover:bg-white hover:border-[#e6000a] hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    2016–2018
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#0d0f14] mt-1 mb-2">
                    Founding Conveners Era
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Led by founder Md. Rasel Ahmed and inaugural GSTU branch president Md. Sakib Ahmed, establishing the first constitution, volunteer oaths, and railway station schools.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-semibold text-[#e6000a]">
                  5 June 2016 Inauguration
                </div>
              </div>

              {/* Card 2: Institutional Expansion */}
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 hover:bg-white hover:border-[#e6000a] hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    2019–2022
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#0d0f14] mt-1 mb-2">
                    Institutional Expansion
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Formation of the Three-Council governance system, permanent curriculum for Hatekhori School, and launching upazila branches in Tungipara and Kotalipara.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-semibold text-[#007938]">
                  School & Regional Hubs
                </div>
              </div>

              {/* Card 3: Modern Governance & Honors */}
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 hover:bg-white hover:border-[#e6000a] hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    2023–2026
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#0d0f14] mt-1 mb-2">
                    Decade & Best Branch
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Recognition with the Best Branch Prize, expansion into Khulna Central, IU, BU, and MBSTU, and modern digital registries for over 350 active student volunteers.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-semibold text-amber-600">
                  Best Branch Prize Honor
                </div>
              </div>
            </div>

            {/* Roster Navigation Banner */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#0d0f14] to-gray-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div>
                <h4 className="font-heading text-base sm:text-lg font-bold">
                  View the Complete Leadership Roster & Alumni Directory
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  Explore verified profiles of current Executive Council members, Permanent Council trustees, and student changemakers.
                </p>
              </div>
              <Link
                href="/members"
                className="btn btn-primary px-6 py-2.5 text-xs sm:text-sm font-heading font-bold text-white bg-[#e6000a] hover:bg-red-700 rounded-xl inline-flex items-center gap-2 shrink-0 transition-colors"
              >
                <span>Browse Members Directory</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* ========================================================= */}
          {/* BOTTOM INTER-PAGE NAVIGATION */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <Link
              href="/about"
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#e6000a] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Previous Page
                </span>
                <h4 className="font-heading text-base font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors mt-0.5">
                  About Come For Road Child
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Principles, 8 Values, Objectives, and Modes of Action.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-red-50 text-gray-600 group-hover:text-[#e6000a] flex items-center justify-center transition-colors shrink-0 ml-4">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </div>
            </Link>

            <Link
              href="/about/how-we-run"
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#e6000a] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Next Page
                </span>
                <h4 className="font-heading text-base font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors mt-0.5">
                  How We Run (Governance & Finance)
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Three-Council model and restricted child fund safeguards.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-red-50 text-gray-600 group-hover:text-[#e6000a] flex items-center justify-center transition-colors shrink-0 ml-4">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
