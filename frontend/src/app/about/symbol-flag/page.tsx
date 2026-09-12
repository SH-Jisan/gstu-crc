"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Shield,
  FileDown,
  ChevronRight,
  ArrowRight,
  Users,
} from "lucide-react";
import AosInit from "@/components/AosInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function SymbolFlagPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased selection:bg-[#e6000a] selection:text-white">
      <AosInit />
      <Navbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="Official Constitution · Visual Identity"
          title="Official Symbol & Flag (প্রতীক ও পতাকা)"
          intro="The official heraldry and visual identity of Come For Road Child (CRC)—symbolizing protective embrace, student volunteer solidarity, and our constitutional commitment to a street-child-free society."
          breadcrumbs={[
            { label: "About Us", href: "/about" },
            { label: "Symbol & Flag" },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
          {/* ========================================================= */}
          {/* THE OFFICIAL EMBLEM */}
          {/* ========================================================= */}
          <section
            id="emblem"
            className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 sm:p-10 rounded-3xl bg-[#f6f4f1] border border-gray-200/90 text-center">
                <div className="w-44 h-44 sm:w-52 sm:h-52 relative flex items-center justify-center bg-white rounded-3xl p-4 border border-gray-200 shadow-md mb-6">
                  <Image
                    src="/logo/logo-navbar.png"
                    alt="Official CRC Emblem"
                    width={180}
                    height={180}
                    className="object-contain"
                    priority
                  />
                </div>
                <h3 className="font-heading text-xl font-black text-[#0d0f14]">
                  The Official Emblem
                </h3>
                <span className="text-xs font-bold text-gray-500 mt-1">
                  সিআরসি প্রতীক · Registered Mark
                </span>
                <p className="text-xs text-gray-600 mt-3 max-w-xs leading-relaxed">
                  Adopted at foundation on 5 June 2016 as the permanent heraldic identity of Come For Road Child.
                </p>

                <div className="mt-6 pt-5 border-t border-gray-200/80 w-full flex justify-center">
                  <a
                    href="/logo/logo-navbar.png"
                    download="crc-official-logo.png"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-300 text-xs font-bold text-gray-800 hover:text-[#e6000a] hover:border-[#e6000a] transition-all shadow-xs"
                  >
                    <FileDown className="w-4 h-4 text-[#e6000a]" />
                    <span>Download Logo (PNG)</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200">
                  <Shield className="w-4 h-4" />
                  <span>Heraldic Anatomy</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl text-[#0d0f14] font-black tracking-tight leading-tight">
                  Symbolism of Protective Embrace
                </h2>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  The emblem of Come For Road Child (CRC) is an artistic synthesis of protection, empathy, and collective responsibility. Every curve and silhouette reflects the core mandate of rescuing vulnerable children from vulnerability into dignity.
                </p>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-red-100 text-[#e6000a] flex items-center justify-center shrink-0 shadow-2xs">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-gray-900 block font-heading font-bold text-sm mb-0.5">
                        The Embracing Hands (সুরক্ষা ও আশ্রয়ের হাত)
                      </strong>
                      <span className="text-gray-600 leading-relaxed">
                        Two sheltering hands curve tenderly around the child. They symbolize institutional guardianship, active protection against violence, cold, and exploitation, and the warm shelter provided by student volunteers.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-green-100 text-[#007938] flex items-center justify-center shrink-0 shadow-2xs">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-gray-900 block font-heading font-bold text-sm mb-0.5">
                        The Walking Street Child (আলোকিত ভবিষ্যতের পথে শিশু)
                      </strong>
                      <span className="text-gray-600 leading-relaxed">
                        At the heart of the insignia stands a child walking forward with head held high. It represents the transition from despair and illiteracy to education, healthcare, and a productive life within society.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 shadow-2xs">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-gray-900 block font-heading font-bold text-sm mb-0.5">
                        The Enclosing Circle of Unity (একতা ও সংহতির বৃত্ত)
                      </strong>
                      <span className="text-gray-600 leading-relaxed">
                        The circular boundary symbolizes an unbroken chain of brotherhood and solidarity among university youth, ensuring that no child within our reach ever stands alone.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* FLAG COLORS & MEANINGS */}
          {/* ========================================================= */}
          <section
            id="flag"
            className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm scroll-mt-28 space-y-10"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200 mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Official Flag Colors</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                The Four Banner Colors & Philosophical Essence
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                The flag of Come for Road Child incorporates four constitutional colors, each representing a foundational principle of humanitarian commitment and social transformation:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Color 1: Red */}
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/90 flex flex-col justify-between hover:shadow-md hover:border-[#e6000a] transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#e6000a] shadow-md mb-4 flex items-center justify-center text-white font-bold font-heading">
                    #E6000A
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e6000a]">
                    Crimson Red
                  </span>
                  <h3 className="font-heading text-xl font-black text-[#0d0f14] mt-1 mb-2">
                    লাল (Sacrifice & Solidarity)
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Represents the blood of selfless sacrifice, student energy, fierce determination, and the unwavering passion of youth volunteers fighting for child rights.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-bold text-[#e6000a]">
                  Student Passion & Courage
                </div>
              </div>

              {/* Color 2: Green */}
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/90 flex flex-col justify-between hover:shadow-md hover:border-[#007938] transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#007938] shadow-md mb-4 flex items-center justify-center text-white font-bold font-heading">
                    #007938
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#007938]">
                    Vibrant Green
                  </span>
                  <h3 className="font-heading text-xl font-black text-[#0d0f14] mt-1 mb-2">
                    সবুজ (Life & Compassion)
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Symbolizes the flourishing life, fresh beginnings, growth, open-air education, and direct field empathy rooted in the soil of Bangladesh.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-bold text-[#007938]">
                  Youth & Flourishing Life
                </div>
              </div>

              {/* Color 3: Black */}
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/90 flex flex-col justify-between hover:shadow-md hover:border-gray-800 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0d0f14] shadow-md mb-4 flex items-center justify-center text-white font-bold font-heading">
                    #0D0F14
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Deep Black
                  </span>
                  <h3 className="font-heading text-xl font-black text-[#0d0f14] mt-1 mb-2">
                    কালো (Hardship & Resilience)
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Reminds us of the harsh, cold reality and dark nights faced by street children, and our solemn resolve to stand beside them until their struggles are eradicated.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-bold text-gray-800">
                  Solemn Resilience
                </div>
              </div>

              {/* Color 4: White */}
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/90 flex flex-col justify-between hover:shadow-md hover:border-gray-400 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-300 shadow-md mb-4 flex items-center justify-center text-gray-800 font-bold font-heading">
                    #FFFFFF
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Pure White
                  </span>
                  <h3 className="font-heading text-xl font-black text-[#0d0f14] mt-1 mb-2">
                    সাদা (Peace & Integrity)
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Embodies childhood innocence, moral transparency in financial management, peace, truth, and the unblemished dignity every human being deserves.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/70 text-xs font-bold text-gray-600">
                  Innocence & Transparency
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* OFFICIAL MOTTO */}
          {/* ========================================================= */}
          <section
            id="motto"
            className="bg-gradient-to-br from-[#0d0f14] via-gray-900 to-[#0d0f14] text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl relative overflow-hidden text-center scroll-mt-28"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#e6000a]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007938]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e6000a]">
                Official Organizational Slogan
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                “The World Will Be Free from Street Children by Connected Together”
              </h2>

              <p className="text-base sm:text-xl font-semibold text-gray-300 font-sans pt-1">
                (একসাথে যুক্ত হয়ে পথশিশুমুক্ত বিশ্ব গড়ে তোলা হবে)
              </p>

              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed pt-2">
                This founding motto encapsulates our unshakable conviction that street child deprivation is not an inevitable reality, but an injustice that can be overcome through connected student action, community empathy, and systemic education.
              </p>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#volunteer"
                  className="btn btn-primary px-7 py-3 text-xs sm:text-sm font-heading font-bold text-white bg-[#e6000a] hover:bg-red-700 rounded-xl inline-flex items-center gap-2 transition-colors shadow-lg"
                >
                  <span>Join Our Volunteer Movement</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl border border-gray-600 text-xs sm:text-sm font-heading font-bold text-white hover:border-white transition-colors"
                >
                  <span>Explore Guiding Values</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* BOTTOM INTER-PAGE NAVIGATION */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <Link
              href="/about/how-we-run"
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#e6000a] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Previous Page
                </span>
                <h4 className="font-heading text-base font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors mt-0.5">
                  How We Run (Governance & Finance)
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Three-Council model and restricted child fund safeguards.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-red-50 text-gray-600 group-hover:text-[#e6000a] flex items-center justify-center transition-colors shrink-0 ml-4">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </div>
            </Link>

            <Link
              href="/about"
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#e6000a] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  About Overview
                </span>
                <h4 className="font-heading text-base font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors mt-0.5">
                  About Come For Road Child
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Core Principles, 8 Values, Objectives, and Modes of Action.
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
