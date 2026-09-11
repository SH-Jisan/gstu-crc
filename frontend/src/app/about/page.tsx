"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Award,
  Sparkles,
  ChevronRight,
  Building2,
  Scale,
  BookOpen,
  Eye,
  Printer,
  Check,
  FileDown,
  Link2,
} from "lucide-react";
import AosInit from "@/components/AosInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  FUNDAMENTAL_PRINCIPLES,
  GUIDING_VALUES,
  VISION,
  MISSIONS,
  OBJECTIVES,
  MODES_OF_ACTION,
  ACHIEVEMENTS,
} from "@/data/aboutData";

interface NavPanelItem {
  id: string;
  label: string;
}

const NAV_PANEL_ITEMS: NavPanelItem[] = [
  { id: "principles", label: "1.1 Principles & Values" },
  { id: "vision", label: "1.2 Vision & 1.3 Mission" },
  { id: "objectives", label: "1.4 Strategic Objectives" },
  { id: "modes-of-action", label: "1.5 Mode of Action" },
  { id: "achievements", label: "1.6 Achievements" },
  { id: "history", label: "3.1 Founding History" },
  { id: "governance", label: "2.2 Governance & Finance" },
  { id: "symbol-flag", label: "1.7 Symbol & Flag" },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string>("principles");
  const [copied, setCopied] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Scrollspy: automatically highlight the section in viewport and control entrance visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY > 200);

      const scrollPosition = currentScrollY + 200;
      for (let i = NAV_PANEL_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_PANEL_ITEMS[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            return;
          }
        }
      }
      setActiveSection(NAV_PANEL_ITEMS[0].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased selection:bg-[#e6000a] selection:text-white">
      <AosInit />
      <Navbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="Official Constitution & Operational Framework · Chapter 1: About"
          title="About Come For Road Child (CRC)"
          intro="CRC foundation is founded upon three fundamental principles forming the foundation of its organizational identity and purpose. CRC GSTU adopts a set of Guiding Values to translate the fundamental principles into organizational practice. Together, the Fundamental Principles and Guiding Values provide the ethical and organizational framework for CRC GSTU branch."
          breadcrumbs={[{ label: "About Us" }]}
        />

        {/* Mobile / Tablet Horizontal Sticky Quick Jump Bar (< lg) */}
        <div className="lg:hidden sticky top-16 sm:top-20 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 py-2.5 overflow-x-auto scrollbar-none flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 shrink-0 pr-2 border-r border-gray-200">
              Jump to:
            </span>
            {NAV_PANEL_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={(e) => scrollToSection(item.id, e)}
                  className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#e6000a] text-white shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                  <span>{item.label.replace(/^[0-9.]+\s*/, "")}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area with MSF-Inspired Sticky Left Sidebar */}
        <div className="max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
            {/* ========================================================= */}
            {/* STICKY LEFT NAVIGATION PANEL (CENTERED & ANIMATED SLIDE-IN) */}
            {/* ========================================================= */}
            <aside
              className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky self-start z-20"
              style={{ top: "max(96px, calc(50vh - 150px))" }}
            >
              <div
                className={`bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-gray-200/90 shadow-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isNavVisible
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 translate-y-28 scale-95 pointer-events-none"
                }`}
              >
                {/* Sleek top brand accent line */}
                <div className="h-0.5 bg-gradient-to-r from-[#e6000a] via-rose-500 to-transparent absolute top-0 left-0 right-0" />

                {/* Panel Header */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e6000a] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e6000a]" />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-800">
                      On This Page
                    </span>
                  </div>
                  <span className="text-[9.5px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                    8 Sections
                  </span>
                </div>

                {/* Interactive Rail Navigation List */}
                <nav aria-label="Section Navigation" className="relative pl-3 border-l-2 border-gray-100 space-y-0.5">
                  {NAV_PANEL_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(item.id, e)}
                        className={`group flex items-center justify-between px-2.5 py-1 rounded-lg text-[11.5px] transition-all duration-200 relative ${
                          isActive
                            ? "bg-red-50 text-[#e6000a] font-bold shadow-2xs translate-x-0.5"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:translate-x-0.5 font-medium"
                        }`}
                      >
                        {/* Left Rail Dot Indicator */}
                        <span
                          className={`absolute -left-[18px] w-2 h-2 rounded-full transition-all duration-200 ${
                            isActive
                              ? "bg-[#e6000a] ring-4 ring-red-100 scale-110"
                              : "bg-gray-300 group-hover:bg-[#e6000a] group-hover:scale-125"
                          }`}
                        />

                        {/* Section Label */}
                        <span className="truncate tracking-wide">{item.label}</span>

                        {/* Subtle Active Arrow Indicator */}
                        <ChevronRight
                          className={`w-3 h-3 shrink-0 transition-all duration-200 ${
                            isActive
                              ? "opacity-100 text-[#e6000a] translate-x-0"
                              : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                          }`}
                        />
                      </a>
                    );
                  })}
                </nav>

                {/* Share & Document Utilities */}
                <div className="pt-2.5 mt-2.5 border-t border-gray-100 space-y-2">
                  {/* Share row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Share:
                    </span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          typeof window !== "undefined" ? window.location.href : "https://crcgstu.org/about"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs"
                        title="Share on Facebook"
                      >
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>

                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          "About Come For Road Child (CRC) GSTU Branch - Official Constitution"
                        )}&url=${encodeURIComponent(
                          typeof window !== "undefined" ? window.location.href : "https://crcgstu.org/about"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs"
                        title="Share on X"
                      >
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>

                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          typeof window !== "undefined" ? window.location.href : "https://crcgstu.org/about"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs"
                        title="Share on LinkedIn"
                      >
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                        </svg>
                      </a>

                      <button
                        onClick={handlePrint}
                        className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs"
                        title="Print this Page"
                      >
                        <Printer className="w-3 h-3" />
                      </button>

                      <button
                        onClick={handleCopyLink}
                        className="px-2 py-0.5 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-[#e6000a] text-[10.5px] font-bold flex items-center gap-1 transition-all active:scale-95 ml-1"
                        title="Copy page link"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-green-600" />
                            <span className="text-green-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Link2 className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Compact PDF download pill */}
                  <a
                    href="/docs/Vision-Mission-Objectives-Mode-of-Action.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-1.5 px-2 rounded-xl bg-gray-50 hover:bg-red-50/90 border border-gray-200/70 hover:border-red-200 transition-all text-gray-700 hover:text-[#e6000a]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-white text-[#e6000a] flex items-center justify-center shadow-2xs border border-gray-100">
                        <FileDown className="w-3 h-3" />
                      </div>
                      <div className="flex flex-col text-left leading-none">
                        <span className="text-[10.5px] font-bold group-hover:text-[#e6000a]">
                          Constitution Charter
                        </span>
                        <span className="text-[9px] text-gray-400 mt-0.5 font-medium">
                          Official PDF · 287 KB
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-[#e6000a] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </aside>

            {/* ========================================================= */}
            {/* MAIN CONTENT COLUMN (75% WIDTH ON DESKTOP) */}
            {/* ========================================================= */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-16 lg:space-y-20 min-w-0">
              {/* ========================================================= */}
              {/* SECTION 1.1 PRINCIPLES (1.1.1 FUNDAMENTAL + 1.1.2 GUIDING) */}
              {/* ========================================================= */}
              <section
                id="principles"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200 mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Chapter 1 · Section 1.1</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight leading-tight">
                    1.1 Principles
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed bg-[#f6f4f1] p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                    CRC foundation is founded upon three fundamental principles forming the foundation of its organizational identity and purpose. CRC GSTU adopts a set of Guiding Values to translate the fundamental principles into organizational practice. Together, the Fundamental Principles and Guiding Values provide the ethical and organizational framework for CRC GSTU branch.
                  </p>
                </div>

                {/* 1.1.1 Fundamental Principles */}
                <div className="mt-10">
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e6000a]" />
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0d0f14] tracking-tight">
                      1.1.1 Fundamental Principles
                    </h3>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    {FUNDAMENTAL_PRINCIPLES.map((principle) => (
                      <div
                        key={principle.num}
                        className={`bg-[#f6f4f1] rounded-2xl p-6 border-l-4 ${principle.borderColor} border-t border-r border-b border-gray-200/80 shadow-xs flex flex-col justify-between transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div
                              className={`w-11 h-11 rounded-xl bg-white shadow-xs ${principle.iconColor} flex items-center justify-center`}
                            >
                              <principle.icon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                              Principle {principle.num}
                            </span>
                          </div>

                          <h4 className="font-heading text-lg font-bold text-[#0d0f14] mb-0.5">
                            {principle.num}. {principle.name}
                          </h4>
                          <span className="text-xs font-semibold text-gray-500 block mb-3">
                            ({principle.bengali})
                          </span>

                          <blockquote className="text-xs sm:text-[13px] text-gray-800 italic border-l-2 border-[#e6000a]/40 pl-3 leading-relaxed mb-3">
                            {principle.quote}
                          </blockquote>

                          <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200/60 pt-3">
                            {principle.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 1.1.2 Guiding Values */}
                <div className="mt-14 pt-10 border-t border-gray-100">
                  <div className="max-w-3xl mb-8">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#007938]" />
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0d0f14] tracking-tight">
                        1.1.2 Guiding Values
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      CRC GSTU adopts eight specific Guiding Values to translate the three fundamental principles into everyday organizational practice, ethical interactions, and humanitarian service:
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {GUIDING_VALUES.map((val) => (
                      <div
                        key={val.num}
                        className="bg-[#f6f4f1] rounded-2xl p-5 border border-gray-200/80 flex flex-col justify-between hover:bg-white hover:border-gray-300 hover:shadow-md transition-all hover:-translate-y-0.5 group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center border ${val.color}`}
                            >
                              <val.icon className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-gray-500 border border-gray-200">
                              Value {val.num}
                            </span>
                          </div>

                          <h4 className="font-heading text-base font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors">
                            {val.num}. {val.title}
                          </h4>
                          <span className="text-[11px] font-semibold text-gray-500 block mb-2">
                            ({val.bengali})
                          </span>

                          <blockquote className="text-[11px] text-gray-700 italic border-l border-red-500/40 pl-2 leading-relaxed mb-3">
                            {val.quote}
                          </blockquote>

                          <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200/50 pt-2.5">
                            {val.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ========================================================= */}
              {/* SECTION 1.2 VISION & 1.3 MISSION */}
              {/* ========================================================= */}
              <section
                id="vision"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                {/* 1.2 Vision */}
                <div className="bg-gradient-to-br from-red-50/70 to-white rounded-3xl p-6 sm:p-10 border border-red-200/80 shadow-2xs relative overflow-hidden mb-12">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200 mb-4 shadow-2xs">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Section 1.2 · Vision</span>
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl text-[#0d0f14] font-black tracking-tight">
                      1.2. Vision:
                    </h2>
                    <blockquote className="mt-4 text-base sm:text-lg text-[#0d0f14] font-medium leading-relaxed italic border-l-4 border-[#e6000a] pl-4 sm:pl-6 bg-white/90 p-4 rounded-r-2xl shadow-2xs">
                      {VISION.quote}
                    </blockquote>
                    <p className="mt-3 text-xs sm:text-sm text-gray-700 font-medium pl-4 sm:pl-6 italic">
                      {VISION.bengali}
                    </p>
                  </div>
                </div>

                {/* 1.3 Mission */}
                <div>
                  <div className="max-w-3xl mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#007938] text-xs font-bold uppercase tracking-wider border border-green-200 mb-3">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Section 1.3 · Mission</span>
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl text-[#0d0f14] font-black tracking-tight">
                      1.3. Mission:
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      Five core operational pillars define how CRC safeguards rights, supports developmental growth, and fosters community engagement:
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                    {MISSIONS.map((m) => (
                      <div
                        key={m.pillar}
                        className={`bg-[#f6f4f1] rounded-2xl p-5 shadow-2xs border-t-4 ${m.color} flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-md hover:bg-white`}
                      >
                        <div>
                          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center mb-3 shadow-xs">
                            <m.icon className={`w-4 h-4 ${m.color.split(" ")[1]}`} />
                          </div>
                          <h3 className="font-heading text-base font-bold text-[#0d0f14]">
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
              </section>

              {/* ========================================================= */}
              {/* SECTION 1.4 OBJECTIVES */}
              {/* ========================================================= */}
              <section
                id="objectives"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                <div className="max-w-3xl mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200 mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Section 1.4 · Objectives</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                    1.4. Objectives
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    CRC GSTU directs its volunteer programs, student mentors, and institutional resources toward achieving these five core constitutional objectives:
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 items-stretch">
                  {OBJECTIVES.map((obj) => (
                    <div
                      key={obj.num}
                      className="bg-[#f6f4f1] rounded-2xl p-6 border border-gray-200/80 hover:bg-white hover:border-[#e6000a] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-heading text-3xl font-black text-[#e6000a]/30 group-hover:text-[#e6000a] transition-colors">
                            {obj.num}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            Objective {obj.num}
                          </span>
                        </div>

                        <h3 className="font-heading text-sm font-bold text-[#0d0f14] leading-snug mb-3">
                          {obj.title}
                        </h3>

                        <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200/70 pt-3">
                          {obj.explanation}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Callout Card */}
                  <div className="bg-[#0d0f14] text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#e6000a]/20 rounded-full blur-2xl pointer-events-none" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                        Collective Responsibility
                      </span>
                      <h3 className="font-heading text-base font-bold mt-2 text-white">
                        Not Merely an Activity — A Responsibility We Choose to Carry
                      </h3>
                      <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                        We turn concern into collective action for underprivileged children who have no other safety net.
                      </p>
                    </div>
                    <Link
                      href="/programs"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#e6000a] hover:bg-red-700 px-4 py-2 rounded-xl w-fit transition-colors shadow"
                    >
                      <span>Explore 7 Core Programs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </section>

              {/* ========================================================= */}
              {/* SECTION 1.5 MODE OF ACTION */}
              {/* ========================================================= */}
              <section
                id="modes-of-action"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                <div className="max-w-3xl mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200 mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Section 1.5 · Operational Methodology</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                    1.5 Mode of Action
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    We strive to turn these values into meaningful action by working collectively and sustainably to create positive change in the lives of people and within society through seven defined operational methods:
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {MODES_OF_ACTION.map((mode) => (
                    <div
                      key={mode.num}
                      className="p-5 sm:p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 hover:bg-white hover:border-[#e6000a] hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-xl bg-red-100/80 text-[#e6000a] flex items-center justify-center shadow-xs">
                            <mode.icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            Method {mode.num}
                          </span>
                        </div>

                        <h3 className="font-heading text-base font-bold text-[#0d0f14] mb-0.5">
                          {mode.title}
                        </h3>
                        <span className="text-xs font-semibold text-gray-500 block mb-2.5">
                          ({mode.bengali})
                        </span>

                        <p className="text-xs font-semibold text-gray-800 leading-relaxed mb-2.5">
                          {mode.summary}
                        </p>

                        <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200/60 pt-2.5">
                          {mode.details}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Whistleblower Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0d0f14] to-gray-900 text-white flex flex-col justify-between shadow-xl">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                        Section 4 · Our Promises
                      </span>
                      <h3 className="font-heading text-base font-bold mt-2 text-white">
                        See a Need? Speak Up.
                      </h3>
                      <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                        Do you know a child who needs help or have a concern regarding child safeguarding, misconduct, or financial ethics?
                      </p>
                    </div>
                    <Link
                      href="/promises"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#e6000a] hover:bg-red-700 px-4 py-2 rounded-xl w-fit transition-colors"
                    >
                      <span>Submit a Concern Online</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </section>

              {/* ========================================================= */}
              {/* SECTION 1.6 ACHIEVEMENTS */}
              {/* ========================================================= */}
              <section
                id="achievements"
                className="bg-[#0d0f14] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-gray-800 scroll-mt-28"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#e6000a]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007938]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
                      <Award className="w-4 h-4" />
                      <span>{ACHIEVEMENTS.badge}</span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl text-white font-black tracking-tight">
                      1.6 Achievements: {ACHIEVEMENTS.title}
                    </h2>

                    <blockquote className="text-xs sm:text-sm text-gray-200 italic border-l-4 border-amber-400 pl-4 py-1 leading-relaxed">
                      {ACHIEVEMENTS.nomination}
                    </blockquote>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      CRC GSTU has pioneered campus-led child welfare initiatives in Bangladesh, demonstrating continuous commitment to street children since 5 June 2016 through free schooling, winter survival drives, medical camps, and transparent institutional governance.
                    </p>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                    {ACHIEVEMENTS.highlights.map((item) => (
                      <div
                        key={item.label}
                        className="bg-white/5 backdrop-blur-sm p-3.5 rounded-2xl border border-white/10 flex flex-col justify-between"
                      >
                        <span className="font-heading text-2xl font-black text-[#e6000a]">
                          {item.metric}
                        </span>
                        <div>
                          <span className="text-xs font-bold text-white block mt-1">
                            {item.label}
                          </span>
                          <span className="text-[10px] text-gray-400 leading-tight block mt-0.5">
                            {item.detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ========================================================= */}
              {/* CHAPTER 3: HISTORY & FOUNDING (3.1 & 3.2) */}
              {/* ========================================================= */}
              <section
                id="history"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#e6000a] text-xs font-bold uppercase tracking-wider border border-red-200">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Chapter 3: History of CRC Foundation & CRC GSTU</span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl text-[#0d0f14] font-black tracking-tight leading-tight">
                      3.1 How We Founded:{" "}
                      <span className="text-[#e6000a]">The Spark at the Railway Station</span>
                    </h2>

                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                      The journey of Come for Road Child (CRC) began with a commitment to humanity, empathy, and standing beside underprivileged children. <strong>Md. Rasel Ahmed</strong> is the Founder and Founding President of CRC foundation.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                      In <strong>2016</strong>, after receiving money to purchase clothes for Eid festival, Rasel Ahmed went shopping and saw several children at a railway station collecting discarded materials in torn clothes. Deeply moved, he and friends used their Eid shopping money to purchase clothes for those children, sparking the vision for systematic child welfare.
                    </p>

                    <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-gray-800 space-y-1">
                      <p className="text-xs font-bold uppercase text-[#e6000a] tracking-wider">
                        5 June 2016 · Simultaneous Founding
                      </p>
                      <p className="text-xs font-semibold">
                        CRC foundation and the CRC GSTU branch formally launched together on <strong>5 June 2016</strong> under founding president Md. Sakib Ahmed.
                      </p>
                      <p className="font-heading text-sm font-bold text-[#e6000a] pt-1">
                        “The World Will Be Free from Street Children by Connected Together”
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-3.5">
                    <div className="bg-[#f6f4f1] p-5 rounded-2xl border border-gray-200 space-y-3">
                      <h3 className="font-heading text-base font-bold text-[#0d0f14]">
                        Milestone Highlights
                      </h3>
                      <div className="space-y-2 text-xs text-gray-700">
                        <div className="p-2.5 bg-white rounded-xl border border-gray-200/80">
                          <strong className="text-gray-900 block font-bold">2016 · Founding</strong>
                          <span>Launch of first branch at GSTU campus.</span>
                        </div>
                        <div className="p-2.5 bg-white rounded-xl border border-gray-200/80">
                          <strong className="text-[#007938] block font-bold">2017 · Hatekhori School</strong>
                          <span>First institutional educational initiative of CRC.</span>
                        </div>
                        <div className="p-2.5 bg-white rounded-xl border border-gray-200/80">
                          <strong className="text-blue-600 block font-bold">Expansion</strong>
                          <span>Khulna Central, IU, Barisal, and MBSTU branches.</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-gray-400">
                          Section 3.2
                        </span>
                        <h4 className="font-heading text-xs font-bold text-[#0d0f14]">
                          Leadership Over Years
                        </h4>
                      </div>
                      <Link
                        href="/members"
                        className="text-xs font-bold text-[#e6000a] hover:text-red-800 flex items-center gap-1"
                      >
                        <span>View Roster</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* ========================================================= */}
              {/* CHAPTER 2: HOW WE RUN — GOVERNANCE & FINANCE (2.1 & 2.2) */}
              {/* ========================================================= */}
              <section
                id="governance"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#007938] text-xs font-bold uppercase tracking-wider border border-green-200 mb-3">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Chapter 2: How We Run</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl text-[#0d0f14] font-black tracking-tight">
                    Governance & Financial Policy
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    CRC GSTU operates under a disciplined constitutional framework, distributing oversight across three councils and enforcing transparent financial controls:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Governance */}
                  <div className="bg-[#f6f4f1] p-6 rounded-2xl border border-gray-200 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-green-100 text-[#007938] flex items-center justify-center">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[#0d0f14]">
                        Three-Council Structure (2.2)
                      </h3>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-gray-200/80">
                        <strong className="text-[#007938] block font-bold">
                          1. Permanent Council (স্থায়ী পরিষদ)
                        </strong>
                        <span className="text-gray-600">
                          Highest decision-making body for institutional continuity and constitutional oversight.
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-gray-200/80">
                        <strong className="text-blue-800 block font-bold">
                          2. Executive Council (নির্বাহী পরিষদ)
                        </strong>
                        <span className="text-gray-600">
                          Principal body for regular administration, school operations, and program execution.
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-gray-200/80">
                        <strong className="text-amber-800 block font-bold">
                          3. Temporary Council (অস্থায়ী পরিষদ)
                        </strong>
                        <span className="text-gray-600">
                          Specialized mandate for independent audit, discipline, and election commission.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Finance */}
                  <div className="bg-[#f6f4f1] p-6 rounded-2xl border border-gray-200 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-100 text-[#e6000a] flex items-center justify-center">
                        <Scale className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[#0d0f14]">
                        Financial Discipline (2.1)
                      </h3>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-gray-200/80">
                        <strong className="text-gray-900 block font-bold">
                          Restricted Child Funds (2.1.1)
                        </strong>
                        <span className="text-gray-600">
                          Funds collected for children are restricted strictly to child food, education, and healthcare.
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-gray-200/80">
                        <strong className="text-gray-900 block font-bold">
                          Independent Audit (2.1.2.2)
                        </strong>
                        <span className="text-gray-600">
                          Audit Committee independently reviews income and expenditure. Any member may request review.
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-gray-200/80">
                        <strong className="text-gray-900 block font-bold">
                          Donor Privacy (2.1.2.3)
                        </strong>
                        <span className="text-gray-600">
                          Donor details are handled with confidentiality and never disclosed without consent.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ========================================================= */}
              {/* SYMBOL & FLAG (1.7) */}
              {/* ========================================================= */}
              <section
                id="symbol-flag"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                <div className="max-w-3xl mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e6000a]">
                    Section 1.7 · Visual Identity
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl text-[#0d0f14] font-black tracking-tight">
                    Symbol & Flag (প্রতীক ও পতাকা)
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  <div className="md:col-span-5 bg-[#f6f4f1] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between text-center">
                    <div>
                      <div className="w-24 h-24 mx-auto mb-4 relative flex items-center justify-center bg-white rounded-2xl p-2 border border-gray-200 shadow-2xs">
                        <Image
                          src="/logo/logo-navbar.png"
                          alt="Official CRC Emblem"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[#0d0f14]">
                        The CRC Emblem
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        Protective hands embracing a street child within a circle of unity.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-200/80 text-[11px] text-gray-500 space-y-1 text-left">
                      <div>● Red: Lifelong student solidarity</div>
                      <div>● Green: Direct field compassion</div>
                      <div>● Black: Child protection centrality</div>
                    </div>
                  </div>

                  <div className="md:col-span-7 bg-[#f6f4f1] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-base font-bold text-[#0d0f14] mb-2">
                        Official Flag Colors
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                        <div className="p-2.5 rounded-xl bg-white border border-red-200 text-center">
                          <div className="w-4 h-4 rounded-full bg-[#e6000a] mx-auto mb-1" />
                          <span className="block text-[10px] font-bold text-gray-800">Crimson</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-green-200 text-center">
                          <div className="w-4 h-4 rounded-full bg-[#007938] mx-auto mb-1" />
                          <span className="block text-[10px] font-bold text-gray-800">Green</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-gray-300 text-center">
                          <div className="w-4 h-4 rounded-full bg-[#0d0f14] mx-auto mb-1" />
                          <span className="block text-[10px] font-bold text-gray-800">Black</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-gray-300 text-center">
                          <div className="w-4 h-4 rounded-full bg-white border border-gray-300 mx-auto mb-1" />
                          <span className="block text-[10px] font-bold text-gray-800">White</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#0d0f14] text-white p-4 rounded-xl">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#e6000a] block mb-1">
                        Official Motto
                      </span>
                      <p className="font-heading text-xs sm:text-sm font-bold">
                        “The World Will Be Free from Street Children by Connected Together”
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
