"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  Shield,
  Award,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Lock,
  Building2,
  Scale,
} from "lucide-react";
import AosInit from "@/components/AosInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  GUIDING_VALUES,
  MISSIONS,
  OBJECTIVES,
  MODES_OF_ACTION,
  TIMELINE,
} from "@/data/aboutData";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased">
      <AosInit />
      <Navbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="Constitution & Operational Framework"
          title="About Come For Road Child (CRC)"
          intro="Come For Road Child (CRC) is a student-led volunteer social welfare organization founded on 5 June 2016 at Gopalganj Science and Technology University (GSTU), dedicated to ensuring the fundamental rights, education, healthcare, and dignity of underprivileged street children."
          breadcrumbs={[{ label: "About Us" }]}
        />

        {/* 1. Origin & Founding History Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Founding History (3.1)</span>
                </div>

                <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight leading-tight">
                  Born from a human moment:{" "}
                  <span className="text-[#e6000a]">From Eid shopping to a national movement</span>
                </h2>

                <p className="text-gray-700 leading-relaxed sm:text-base">
                  The origin of CRC foundation is rooted in a profound human experience. In <strong>2016</strong>, after receiving money to purchase clothes for the Eid festival, <strong>Md. Rasel Ahmed</strong> (Founder and Founding President) went shopping. On his way, he saw several children at a railway station collecting discarded materials in torn, worn-out clothes. Deeply moved, he and his friends used their shopping money to purchase clothes for those children.
                </p>

                <p className="text-gray-700 leading-relaxed sm:text-base">
                  The sense of peace and fulfillment he experienced inspired him to work systematically. While visiting his maternal grandmother&apos;s home in Kashiani, Gopalganj, he met <strong>Md. Sakib Ahmed</strong>, then a first-year student of Management Studies at Gopalganj Science and Technology University (GSTU). Sakib mobilized university friends to conduct field surveys and support underprivileged children.
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-red-50/70 border border-red-200 text-gray-800 space-y-1.5">
                  <p className="text-xs font-bold uppercase text-[#e6000a] tracking-wider">
                    Historic Milestone · 5 June 2016
                  </p>
                  <p className="text-sm font-semibold">
                    The formal journey of CRC foundation and the establishment of the CRC GSTU branch took place simultaneously on <strong>5 June 2016</strong>. CRC GSTU became the first branch, with Md. Sakib Ahmed serving as its founding president under the organizational motto:
                  </p>
                  <p className="font-heading text-base sm:text-lg font-bold text-[#e6000a] pt-1">
                    “The World Will Be Free from Street Children by Connected Together”
                  </p>
                  <p className="text-xs font-medium text-gray-600 italic">
                    (থেকে একসাথে যুক্ত করব পৃথিবী পথশিশু মুক্ত)
                  </p>
                </div>
              </div>

              {/* Right Side: 3 Foundational Pillars + Best Branch Award */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#0d0f14] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#e6000a]/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold mb-4">
                    <Award className="w-3.5 h-3.5" />
                    <span>Official Recognition (Section 1.6)</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    Best Branch Prize Award
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    CRC GSTU Branch was awarded the <strong>Best Branch Recognition</strong> in appreciation of its pioneering educational initiatives, active student participation, and continued dedication to underprivileged children.
                  </p>
                  <div className="border-t border-gray-800 pt-4 grid grid-cols-2 gap-3 text-center">
                    <div className="bg-white/5 p-2.5 rounded-xl">
                      <span className="block font-heading text-lg font-bold text-[#e6000a]">2017</span>
                      <span className="text-[10px] text-gray-400 uppercase font-semibold">Hatekhori School</span>
                    </div>
                    <div className="bg-white/5 p-2.5 rounded-xl">
                      <span className="block font-heading text-lg font-bold text-[#007938]">6 Chapters</span>
                      <span className="text-[10px] text-gray-400 uppercase font-semibold">University Wings</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f6f4f1] p-5 rounded-2xl border border-gray-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                    Core Organizational Pillars
                  </span>
                  <div className="space-y-2 text-xs font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0" />
                      <span><strong>Non-political:</strong> Free from political, partisan or personal bias.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0" />
                      <span><strong>Student-led:</strong> University volunteers giving time without personal profit.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0" />
                      <span><strong>Accountable:</strong> Audited accounts with zero fund diversion policy.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Fundamental Principles (1.1.1) */}
        <section className="py-14 sm:py-20 bg-[#0d0f14] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e6000a]">
                Section 1.1.1 · Constitutional Basis
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-white font-black tracking-tight">
                Three Fundamental Principles
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                CRC foundation is built upon three fundamental principles forming our organizational identity. Together with our Guiding Values, they provide the ethical framework for all CRC branches.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {/* Principle 1 */}
              <div className="bg-gray-900/90 rounded-2xl p-6 sm:p-8 border-l-4 border-[#e6000a] shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-950/70 text-[#e6000a] flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  1. Brotherhood (ভাতৃত্ব)
                </h3>
                <blockquote className="text-xs sm:text-sm text-red-200/90 italic border-l-2 border-red-500/40 pl-3 leading-relaxed">
                  “CRC GSTU promotes a spirit of brotherhood, solidarity, mutual respect, and care among its members and volunteers and encourages them to work together as one community.”
                </blockquote>
                <p className="text-xs text-gray-400 leading-relaxed pt-1">
                  Members are part of a common community working toward a shared purpose, encouraging mutual support, compassion, and a sense of belonging while respecting individuality.
                </p>
              </div>

              {/* Principle 2 */}
              <div className="bg-gray-900/90 rounded-2xl p-6 sm:p-8 border-l-4 border-[#007938] shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-xl bg-green-950/70 text-[#007938] flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  2. Commitment (দায়বদ্ধতা)
                </h3>
                <blockquote className="text-xs sm:text-sm text-green-200/90 italic border-l-2 border-green-500/40 pl-3 leading-relaxed">
                  “CRC GSTU remains committed to its mission and objectives and encourages its members and volunteers to serve with sincerity, dedication, perseverance, and a spirit of responsibility.”
                </blockquote>
                <p className="text-xs text-gray-400 leading-relaxed pt-1">
                  Commitment means remaining dedicated even when circumstances are difficult, fulfilling responsibilities with perseverance, and turning ideals into sustained action.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="bg-gray-900/90 rounded-2xl p-6 sm:p-8 border-l-4 border-amber-500 shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-950/70 text-amber-500 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  3. Trust (বিশ্বাস)
                </h3>
                <blockquote className="text-xs sm:text-sm text-amber-200/90 italic border-l-2 border-amber-500/40 pl-3 leading-relaxed">
                  “CRC GSTU seeks to earn and protect the trust of the people it serves, its members, volunteers, partners, and the wider community through honesty, integrity, confidentiality, and sincere service.”
                </blockquote>
                <p className="text-xs text-gray-400 leading-relaxed pt-1">
                  Children, families, and donors place their confidence in our integrity. We protect confidential information, respect commitments, and use all resources responsibly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Vision & 5 Mission Pillars (1.2 & 1.3) */}
        <section className="py-14 sm:py-20 bg-[#f6f4f1] border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Vision Banner */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200 mb-12 relative overflow-hidden">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#007938]">
                  Section 1.2 · Vision Statement
                </span>
                <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                  Our Vision for Society
                </h2>
                <blockquote className="mt-4 text-base sm:text-xl text-[#0d0f14] font-medium leading-relaxed italic border-l-4 border-[#e6000a] pl-4">
                  “We envision a child-friendly, humane, and just society free from street children, where every child’s fundamental rights are ensured and where love, compassion, and humanity are embraced and promoted throughout society.”
                </blockquote>
              </div>
            </div>

            {/* 5 Mission Pillars */}
            <div>
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e6000a]">
                  Section 1.3 · Five Mission Pillars
                </span>
                <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[#0d0f14] font-black tracking-tight">
                  How We Realize Our Vision
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {MISSIONS.map((m) => (
                  <div
                    key={m.pillar}
                    className={`bg-white rounded-2xl p-6 shadow-sm border-t-4 ${m.color} flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-md`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4">
                        <m.icon className={`w-5 h-5 ${m.color.split(" ")[1]}`} />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-[#0d0f14]">
                        {m.pillar}
                      </h3>
                      <span className="text-[11px] font-semibold text-gray-500 block mb-2">
                        {m.bengali}
                      </span>
                      <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Strategic Objectives (1.4) */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e6000a]">
                Section 1.4 · Five Strategic Objectives
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                Our Specific Institutional Goals
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                CRC GSTU directs its volunteer programs, student mentors, and resources toward achieving these five core constitutional objectives:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {OBJECTIVES.map((obj) => (
                <div
                  key={obj.num}
                  className="bg-[#f6f4f1] rounded-2xl p-6 border border-gray-200/80 hover:border-[#e6000a] transition-colors relative group"
                >
                  <span className="font-heading text-3xl font-black text-[#e6000a]/20 group-hover:text-[#e6000a]/40 transition-colors block mb-2">
                    {obj.num}
                  </span>
                  <h3 className="font-heading text-base font-bold text-[#0d0f14] mb-2">
                    {obj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              ))}
              {/* Callout Card */}
              <div className="bg-[#e6000a] text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-red-200">
                    Social Welfare Focus
                  </span>
                  <h3 className="font-heading text-lg font-bold mt-2">
                    Not Merely an Activity — A Responsibility We Choose to Carry
                  </h3>
                  <p className="mt-2 text-xs text-red-100 leading-relaxed">
                    We turn concern into collective action for children who have no other safety net.
                  </p>
                </div>
                <Link
                  href="/programs"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-xl w-fit transition-colors"
                >
                  <span>Explore 7 Core Programs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Guiding Values (1.1.2 - 8 Values) */}
        <section className="py-14 sm:py-20 bg-[#f6f4f1] border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#007938]">
                Section 1.1.2 · Guiding Values
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                Eight Values Every Member Upholds
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                These values translate our fundamental principles into everyday organizational practice across our classroom shifts, campaigns, and community interactions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GUIDING_VALUES.map((val) => (
                <div
                  key={val.title}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-200/70 hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${val.color}`}>
                    <val.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#0d0f14] mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Modes of Action (1.5 - 7 Modes) */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e6000a]">
                Section 1.5 · Operational Methodology
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                Seven Modes of Action
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                We strive to turn our values into meaningful change by working collectively and sustainably through seven defined operational methods:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MODES_OF_ACTION.map((mode) => (
                <div
                  key={mode.title}
                  className="p-5 sm:p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/70 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-100/70 text-[#e6000a] flex items-center justify-center mb-3">
                    <mode.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#0d0f14] mb-2">
                    {mode.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {mode.desc}
                  </p>
                </div>
              ))}

              {/* Promises Banner Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0d0f14] to-gray-900 text-white flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                    Section 4 · Our Promises
                  </span>
                  <h3 className="font-heading text-lg font-bold mt-2">
                    See a Need? Speak Up.
                  </h3>
                  <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                    Do you know a child who needs help or have a concern regarding child safety or financial ethics? Let us know without fear of retaliation.
                  </p>
                </div>
                <Link
                  href="/promises"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-white bg-[#e6000a] hover:bg-red-700 px-4 py-2 rounded-xl w-fit transition-colors"
                >
                  <span>Submit a Concern Online</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. How We Run — Governance & Finance (Section 2) */}
        <section className="py-14 sm:py-20 bg-[#f6f4f1] border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#007938]">
                Section 2 · Governance & Financial Integrity
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                Institutional Structure & Ethical Finance
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                CRC GSTU manages its responsibilities through defined institutional councils and strict financial policies to guarantee zero corruption and full accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Governance: Three-Council Structure (2.2) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200/80 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-[#007938] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                      Section 2.2 · Governance Framework
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[#0d0f14]">
                      Three-Council Governance
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Permanent Council */}
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/60">
                    <h4 className="font-heading font-bold text-[#0d0f14] text-sm flex items-center justify-between">
                      <span>1. Permanent Council (স্থায়ী পরিষদ)</span>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-green-100 text-[#007938]">Highest Body</span>
                    </h4>
                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                      Responsible for institutional continuity, long-term oversight, and safeguarding constitutional principles. Consists of the Founder of CRC GSTU, Chief Coordinator, Office Management, Financial Management, Alumni, and Advisory Committees.
                    </p>
                  </div>

                  {/* Executive Council */}
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/60">
                    <h4 className="font-heading font-bold text-[#0d0f14] text-sm flex items-center justify-between">
                      <span>2. Executive Council (নির্বাহী পরিষদ)</span>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">Operational</span>
                    </h4>
                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                      Principal body managing day-to-day administration, classes, field operations, and volunteer coordination through Advisory Members, Executive Members, and General Members.
                    </p>
                  </div>

                  {/* Temporary Council */}
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/60">
                    <h4 className="font-heading font-bold text-[#0d0f14] text-sm flex items-center justify-between">
                      <span>3. Temporary Council (অস্থায়ী পরিষদ)</span>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">Mandated</span>
                    </h4>
                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                      Dedicated bodies established for transitional or specialized mandates: Audit Committee, Discipline Committee, Election Committee, and Special Program Committee.
                    </p>
                  </div>
                </div>
              </div>

              {/* Finance: Structured Financial Policy (2.1) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200/80 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e6000a] flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                      Section 2.1 · Financial Discipline
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[#0d0f14]">
                      Financial Policy & Integrity
                    </h3>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100">
                    <CheckCircle2 className="w-4 h-4 text-[#e6000a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block font-heading text-xs">Restricted Child Welfare Funds (2.1.1)</strong>
                      <span className="text-xs text-gray-600">
                        Money collected specifically for children is restricted strictly to their food, education, healthcare, and welfare. Zero fund diversion is permitted.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block font-heading text-xs">Permanent Financial Management Committee (2.1.2)</strong>
                      <span className="text-xs text-gray-600">
                        Oversees budget approvals, project-based expenditure reviews, and ensures every transaction is supported by documentation.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block font-heading text-xs">Independent Audit & Transparency (2.1.2.2)</strong>
                      <span className="text-xs text-gray-600">
                        An independent Audit Committee monitors finances. Members not involved in transactions inspect accounts. Any member may request a review.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <Lock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block font-heading text-xs">Donor Privacy & Confidentiality (2.1.2.3)</strong>
                      <span className="text-xs text-gray-600">
                        Donor details and personal information are handled responsibly and never disclosed publicly without express consent.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. 10-Year Growth Timeline (2016 - 2026) */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e6000a]">
                Section 3.1 & 1.6 · Organizational Milestones
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                A Decade of Service (2016–2026)
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                From a spontaneous act of empathy at a railway station to an established university network educating hundreds of street children:
              </p>
            </div>

            <div className="relative border-l-2 border-red-200 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative group">
                  {/* Pin Dot */}
                  <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#e6000a] border-4 border-white shadow" />

                  <span className="inline-block px-2.5 py-0.5 rounded bg-red-100 text-[#e6000a] text-[11px] font-bold uppercase tracking-wider mb-1">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#0d0f14]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Leadership Roster Link */}
            <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#f6f4f1] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase text-[#007938] tracking-wider">
                  Section 3.2 · Leadership Over Years
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0d0f14] mt-0.5">
                  Meet Our Leadership, Executive & Volunteer Roster
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Discover our dedicated student leaders, chapter heads, teacher volunteers, and advisors.
                </p>
              </div>
              <Link
                href="/members"
                className="btn btn-primary px-6 py-3 text-xs sm:text-sm font-bold shadow-md shrink-0 flex items-center gap-1.5"
              >
                <span>View Full Members Directory</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
