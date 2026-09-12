"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Scale,
  Shield,
  Users,
  CheckCircle2,
  Lock,
  FileText,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import AosInit from "@/components/AosInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function HowWeRunPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased selection:bg-[#e6000a] selection:text-white">
      <AosInit />
      <Navbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="Official Constitution · How We Run"
          title="Governance Architecture & Financial Integrity"
          intro="CRC GSTU operates under a disciplined constitutional framework, distributing institutional oversight across three distinct councils and enforcing non-negotiable financial integrity for every single taka collected."
          breadcrumbs={[
            { label: "About Us", href: "/about" },
            { label: "How We Run" },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
          {/* ========================================================= */}
          {/* THREE-COUNCIL GOVERNANCE OVERVIEW */}
          {/* ========================================================= */}
          <section id="governance" className="scroll-mt-28 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 text-[#007938] text-xs font-bold uppercase tracking-wider border border-green-200 mb-3">
                <Building2 className="w-4 h-4" />
                <span>Constitutional Structure</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                The Three-Council Governance Model
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                To guarantee democratic representation, uninterrupted field operations, and absolute constitutional continuity across student generations, the CRC Constitution establishes a 3-tier governance structure:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 1. Permanent Council */}
              <div
                id="permanent-council"
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#007938] transition-all flex flex-col justify-between scroll-mt-28"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#007938] flex items-center justify-center mb-5 border border-green-200/70 shadow-2xs">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#007938] block mb-1">
                    Council Tier 1 · Supreme Trustee Body
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-[#0d0f14] mb-1">
                    Permanent Council
                  </h3>
                  <span className="text-xs font-bold text-gray-500 block mb-4">
                    (স্থায়ী পরিষদ)
                  </span>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5">
                    The highest constitutional authority within CRC GSTU, composed of Founding Members, Chief Coordinators, and distinguished senior alumni advisors.
                  </p>

                  <div className="space-y-2.5 text-xs text-gray-600 border-t border-gray-100 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007938] mt-0.5 shrink-0" />
                      <span>Safeguards institutional principles and constitutional ethics.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007938] mt-0.5 shrink-0" />
                      <span>Provides long-term strategic guidance and policy continuity.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007938] mt-0.5 shrink-0" />
                      <span>Resolves structural disputes and approves constitutional amendments.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007938] mt-0.5 shrink-0" />
                      <span>Constitutes temporary election and audit commissions.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/80">
                  <span className="text-[11px] font-bold text-[#007938] uppercase tracking-wider">
                    Term: Permanent Trustee Mandate
                  </span>
                </div>
              </div>

              {/* 2. Executive Council */}
              <div
                id="executive-council"
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#e6000a]/30 shadow-md hover:shadow-lg hover:border-[#e6000a] transition-all flex flex-col justify-between relative scroll-mt-28"
              >
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#e6000a]/10 text-[#e6000a] text-[10px] font-bold uppercase tracking-wider">
                  Active Leadership
                </div>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#e6000a] flex items-center justify-center mb-5 border border-red-200/70 shadow-2xs">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#e6000a] block mb-1">
                    Council Tier 2 · Operational Leadership
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-[#0d0f14] mb-1">
                    Executive Council
                  </h3>
                  <span className="text-xs font-bold text-gray-500 block mb-4">
                    (নির্বাহী পরিষদ)
                  </span>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5">
                    The principal operational management committee elected annually from active university student members to steer all field missions and administrative duties.
                  </p>

                  <div className="space-y-2.5 text-xs text-gray-600 border-t border-gray-100 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#e6000a] mt-0.5 shrink-0" />
                      <span>Manages day-to-day operations and student volunteer mobilization.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#e6000a] mt-0.5 shrink-0" />
                      <span>Supervises Hatekhori Free School, curriculum, and class routines.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#e6000a] mt-0.5 shrink-0" />
                      <span>Organizes winter clothing relief, health camps, and Iftar drives.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#e6000a] mt-0.5 shrink-0" />
                      <span>Maintains financial books and publishes quarterly account logs.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/80">
                  <span className="text-[11px] font-bold text-[#e6000a] uppercase tracking-wider">
                    Term: 1-Year Elected Student Term
                  </span>
                </div>
              </div>

              {/* 3. Temporary Council */}
              <div
                id="temporary-council"
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-md hover:border-amber-500 transition-all flex flex-col justify-between scroll-mt-28"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 border border-amber-200/70 shadow-2xs">
                    <Scale className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                    Council Tier 3 · Specialized Mandates
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-[#0d0f14] mb-1">
                    Temporary Council
                  </h3>
                  <span className="text-xs font-bold text-gray-500 block mb-4">
                    (অস্থায়ী পরিষদ)
                  </span>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5">
                    Ad-hoc independent bodies appointed by the Permanent Council to perform specialized, time-sensitive constitutional responsibilities.
                  </p>

                  <div className="space-y-2.5 text-xs text-gray-600 border-t border-gray-100 pt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <span><strong>Election Commission:</strong> Independent panel for fair annual Executive Council voting.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <span><strong>Audit Committee:</strong> Unbiased examination of financial accounts and vouchers.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <span><strong>Disciplinary Board:</strong> Independent inquiry into constitutional breaches.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <span><strong>Emergency Tasks:</strong> Crisis relief committees during natural disasters.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/80">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                    Term: Limited to Specific Mandate
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* FINANCIAL DISCIPLINE & SAFEGUARDS */}
          {/* ========================================================= */}
          <section
            id="finance"
            className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm scroll-mt-28 space-y-10"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200 mb-3">
                <Scale className="w-4 h-4" />
                <span>Financial Discipline & Ethics</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                Financial Policy & Absolute Fund Separation
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                CRC GSTU maintains strict financial governance grounded in the sacred trust placed in us by donors, beneficiaries, and society. Every single donation is ring-fenced under explicit constitutional rules:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Policy 1: Restricted Child Funds */}
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-[#e6000a] flex items-center justify-center mb-4">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Restricted Child Fund
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#0d0f14] mt-1 mb-2">
                    Restricted Child Funds
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Donations received for street children are restricted exclusively to child food, textbooks, school bags, uniforms, and medical checkups. Under no circumstance may child funds be diverted to administrative overhead, volunteer travel, or snacks.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-bold text-[#e6000a]">
                  Zero Overhead Dilution
                </div>
              </div>

              {/* Policy 2: 100% Volunteer Self-Funding */}
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-[#007938] flex items-center justify-center mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Student Member Dues
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#0d0f14] mt-1 mb-2">
                    Student Member Dues
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Organizational running costs (such as banner printing, meeting venue logistics, and communication tools) are covered independently through voluntary monthly subscriptions contributed by active university student members.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-bold text-[#007938]">
                  Voluntary Student Dues
                </div>
              </div>

              {/* Policy 3: Independent Audits */}
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Independent Audits
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#0d0f14] mt-1 mb-2">
                    Independent Audits
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Every transaction is supported by serialized vouchers, bank deposits, and dual signatories (President + Finance Secretary). An independent Audit Committee audits all ledgers quarterly, and any member may request review.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-bold text-blue-700">
                  Open Vouchers & Dual Signature
                </div>
              </div>
            </div>

            {/* Privacy & Ethics Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0d0f14] to-gray-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e6000a]">
                  Donor Privacy Protection
                </span>
                <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                  Strict Confidentiality & Whistleblower Protection
                </h4>
                <p className="text-xs text-gray-300 max-w-2xl leading-relaxed">
                  Donor contact numbers, financial details, and private notes are handled with strict privacy protocols and never published without explicit written permission. Suspect any financial misconduct?
                </p>
              </div>
              <Link
                href="/promises"
                className="btn btn-primary px-6 py-2.5 text-xs sm:text-sm font-heading font-bold text-white bg-[#e6000a] hover:bg-red-700 rounded-xl inline-flex items-center gap-2 shrink-0 transition-colors"
              >
                <span>Report an Ethical Concern</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* ========================================================= */}
          {/* BOTTOM INTER-PAGE NAVIGATION */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <Link
              href="/about/our-history"
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#e6000a] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Previous Page
                </span>
                <h4 className="font-heading text-base font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors mt-0.5">
                  Our Founding History
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  10-Year Timeline, Railway Station Origin, and Leadership Eras.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-red-50 text-gray-600 group-hover:text-[#e6000a] flex items-center justify-center transition-colors shrink-0 ml-4">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </div>
            </Link>

            <Link
              href="/about/symbol-flag"
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#e6000a] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Next Page
                </span>
                <h4 className="font-heading text-base font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors mt-0.5">
                  Symbol & Flag (প্রতীক ও পতাকা)
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Official emblem meaning, 4 banner colors, and founding motto.
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
