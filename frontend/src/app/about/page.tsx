"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Printer,
  Check,
  CheckCircle2,
  FileDown,
  Link2,
  ArrowRight,
} from "lucide-react";
import AosInit from "@/components/AosInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CareSplitPrinciples from "@/components/CareSplitPrinciples";
import {
  GUIDING_VALUES,
  VISION,
  MISSIONS,
  OBJECTIVES,
  MODES_OF_ACTION,
  ACHIEVEMENTS,
} from "@/data/aboutData";

interface NavSubItem {
  id: string;
  label: string;
}

interface NavPanelItem {
  id: string;
  label: string;
  subItems?: NavSubItem[];
}

const NAV_PANEL_ITEMS: NavPanelItem[] = [
  { id: "principles", label: "Our Principles" },
  { id: "vision", label: "Vision & Mission" },
  { id: "objectives", label: "Strategic Objectives" },
  { id: "modes-of-action", label: "Mode of Action" },
  { id: "achievements", label: "Achievements" },
  {
    id: "more-chapters",
    label: "Institutional Chapters",
    subItems: [
      { id: "history", label: "Our History" },
      { id: "governance", label: "How We Run" },
      { id: "symbol-flag", label: "Symbol & Flag" },
    ],
  },
];

const ALL_NAV_IDS: string[] = [
  "principles",
  "vision",
  "objectives",
  "modes-of-action",
  "achievements",
  "more-chapters",
  "history",
  "governance",
  "symbol-flag",
];

const FURTHER_CHAPTER_CARDS = [
  {
    id: "history",
    title: "Our History",
    href: "/about/our-history",
    description:
      "Originated on 5 June 2016 from an Eid shopping initiative at a railway platform by university students. Explore our 10-year journey, founding genesis, and leadership legacy.",
  },
  {
    id: "governance",
    title: "How We Run (Governance & Finance)",
    href: "/about/how-we-run",
    description:
      "A 3-tier constitutional governance framework ensuring democratic student leadership, strict financial governance, 100% voluntary student dues, and restricted child funds safeguarding.",
  },
  {
    id: "symbol-flag",
    title: "Symbol & Flag (Visual Identity)",
    href: "/about/symbol-flag",
    description:
      "Protective hands embracing a street child within a circle of unity, four symbolic banner colors, and our official motto uniting us to build a society free from street children.",
  },
];

const CANONICAL_ABOUT_URL = "https://crcgstu.org/about";

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
      for (let i = ALL_NAV_IDS.length - 1; i >= 0; i--) {
        const id = ALL_NAV_IDS[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection(ALL_NAV_IDS[0]);
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
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
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
          eyebrow="Official Constitution & Operational Framework"
          title="About Come For Road Child (CRC)"
          intro="Founded on 5 June 2016 at Gopalganj Science and Technology University (GSTU), Come For Road Child (CRC) is a volunteer-led student humanitarian movement dedicated to securing fundamental rights, education, and healthcare for street children across Bangladesh."
          breadcrumbs={[{ label: "About Us" }]}
        />

        {/* Mobile / Tablet Horizontal Sticky Quick Jump Bar (< lg) */}
        <div className="lg:hidden sticky top-[103px] sm:top-[108px] z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 py-2.5 overflow-x-auto scrollbar-none flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 shrink-0 pr-2 border-r border-gray-200">
              Jump to:
            </span>
            {NAV_PANEL_ITEMS.map((item) => {
              const isActive =
                activeSection === item.id ||
                Boolean(
                  item.subItems?.some((sub) => sub.id === activeSection),
                );
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
                  <span>{item.label}</span>
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
                    6 Sections
                  </span>
                </div>

                {/* Interactive Rail Navigation List */}
                <nav
                  aria-label="Section Navigation"
                  className="relative pl-3 border-l-2 border-gray-100 space-y-1"
                >
                  {NAV_PANEL_ITEMS.map((item) => {
                    const isParentActive =
                      activeSection === item.id ||
                      Boolean(
                        item.subItems?.some((sub) => sub.id === activeSection),
                      );
                    return (
                      <div key={item.id} className="space-y-0.5">
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(item.id, e)}
                          className={`group flex items-center justify-between px-2.5 py-1 rounded-lg text-[11.5px] transition-all duration-200 relative ${
                            isParentActive
                              ? "bg-red-50 text-[#e6000a] font-bold shadow-2xs translate-x-0.5"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:translate-x-0.5 font-medium"
                          }`}
                        >
                          {/* Left Rail Dot Indicator */}
                          <span
                            className={`absolute -left-[18px] w-2 h-2 rounded-full transition-all duration-200 ${
                              isParentActive
                                ? "bg-[#e6000a] ring-4 ring-red-100 scale-110"
                                : "bg-gray-300 group-hover:bg-[#e6000a] group-hover:scale-125"
                            }`}
                          />

                          {/* Section Label */}
                          <span className="truncate tracking-wide">
                            {item.label}
                          </span>

                          {/* Subtle Active Arrow Indicator */}
                          <ChevronRight
                            className={`w-3 h-3 shrink-0 transition-all duration-200 ${
                              isParentActive
                                ? "opacity-100 text-[#e6000a] translate-x-0"
                                : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                            }`}
                          />
                        </a>

                        {/* Nested Sub-options */}
                        {item.subItems && (
                          <div className="ml-3 pl-2.5 border-l-2 border-red-100 space-y-0.5 my-1">
                            {item.subItems.map((sub) => {
                              const isSubActive = activeSection === sub.id;
                              return (
                                <a
                                  key={sub.id}
                                  href={`#${sub.id}`}
                                  onClick={(e) => scrollToSection(sub.id, e)}
                                  className={`group/sub flex items-center justify-between px-2 py-0.5 rounded-md text-[11px] transition-all duration-150 ${
                                    isSubActive
                                      ? "text-[#e6000a] font-bold bg-red-100/60"
                                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/70 font-medium"
                                  }`}
                                >
                                  <span className="truncate">{sub.label}</span>
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                                      isSubActive
                                        ? "bg-[#e6000a] scale-100"
                                        : "bg-transparent group-hover/sub:bg-gray-300 scale-75"
                                    }`}
                                  />
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
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
                          CANONICAL_ABOUT_URL,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs"
                        title="Share on Facebook"
                      >
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>

                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          "About Come For Road Child (CRC) GSTU Branch - Official Constitution",
                        )}&url=${encodeURIComponent(
                          CANONICAL_ABOUT_URL,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs"
                        title="Share on X"
                      >
                        <svg
                          className="w-2.5 h-2.5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>

                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          CANONICAL_ABOUT_URL,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-lg bg-gray-100 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xs"
                        title="Share on LinkedIn"
                      >
                        <svg
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 24 24"
                        >
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
              {/* PRINCIPLES (FUNDAMENTAL & GUIDING VALUES) */}
              {/* ========================================================= */}
              <section
                id="principles"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                <div className="max-w-3xl mb-10">
                  <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight leading-tight">
                    Our Principles & Values
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed bg-[#f6f4f1] p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                    The CRC foundation is grounded in three Fundamental
                    Principles that define its humanitarian purpose and
                    organizational identity. To translate these principles into
                    responsible daily action, CRC GSTU adheres to eight Guiding
                    Values that govern volunteer conduct, student mentorship,
                    and community engagement.
                  </p>
                </div>

                {/* Fundamental Principles (CARE Bangladesh Alternating Split-Tile Parallax Style) */}
                <div className="mt-10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0d0f14] tracking-tight">
                        Fundamental Principles
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 hidden sm:inline-block">
                      Humanitarian Operational Framework
                    </span>
                  </div>

                  <div className="-mx-6 sm:-mx-10 mt-6 mb-8">
                    <CareSplitPrinciples />
                  </div>
                </div>

                {/* Guiding Values */}
                <div className="mt-14 pt-10 border-t border-gray-100">
                  <div className="max-w-3xl mb-8">
                    <div className="mb-2">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0d0f14] tracking-tight">
                        Guiding Values
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      CRC GSTU upholds eight Guiding Values to translate the
                      fundamental principles into disciplined organizational
                      practice, ethical interactions, and sustained humanitarian
                      service:
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {GUIDING_VALUES.map((val) => (
                      <div
                        key={val.title}
                        className="bg-[#f6f4f1] rounded-2xl p-5 border border-gray-200/80 flex flex-col justify-between hover:bg-white hover:border-gray-300 hover:shadow-md transition-all hover:-translate-y-0.5 group"
                      >
                        <div>

                          <h4 className="font-heading text-base font-bold text-[#0d0f14] group-hover:text-[#e6000a] transition-colors">
                            {val.title}
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
              {/* VISION & MISSION */}
              {/* ========================================================= */}
              <section
                id="vision"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                {/* Vision */}
                <div className="bg-gradient-to-br from-red-50/70 to-white rounded-3xl p-6 sm:p-10 border border-red-200/80 shadow-2xs relative overflow-hidden mb-12">
                  <div className="max-w-3xl">
                    <h2 className="font-heading text-2xl sm:text-3xl text-[#0d0f14] font-black tracking-tight">
                      Vision Statement
                    </h2>
                    <blockquote className="mt-4 text-base sm:text-lg text-[#0d0f14] font-medium leading-relaxed italic border-l-4 border-[#e6000a] pl-4 sm:pl-6 bg-white/90 p-4 rounded-r-2xl shadow-2xs">
                      {VISION.quote}
                    </blockquote>
                    <p className="mt-3 text-xs sm:text-sm text-gray-700 font-medium pl-4 sm:pl-6 italic">
                      {VISION.bengali}
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div>
                  <div className="max-w-3xl mb-8">
                    <h2 className="font-heading text-2xl sm:text-3xl text-[#0d0f14] font-black tracking-tight">
                      Mission Pillars
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                      CRC&apos;s mission is articulated through five core
                      operational pillars that guide institutional efforts to
                      safeguard rights, deliver education, and restore human
                      dignity:
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                    {MISSIONS.map((m) => (
                      <div
                        key={m.pillar}
                        className="bg-[#f6f4f1] rounded-2xl p-5 shadow-2xs border-t-4 border-[#e6000a] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-md hover:bg-white"
                      >
                        <div>
                          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center mb-3 shadow-xs">
                            <CheckCircle2 className="w-4 h-4 text-[#e6000a]" />
                          </div>
                          <h3 className="font-heading text-base font-bold text-[#0d0f14]">
                            {m.pillar}
                          </h3>
                          <span className="text-[11px] font-semibold text-gray-500 block mb-2">
                            ({m.bengali})
                          </span>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ========================================================= */}
              {/* OBJECTIVES */}
              {/* ========================================================= */}
              <section
                id="objectives"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                <div className="max-w-3xl mb-10">
                  <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                    Strategic Objectives
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    To ensure focused and measurable humanitarian outcomes, CRC
                    GSTU directs its volunteer network, university student
                    mentors, and institutional resources toward achieving five
                    constitutional objectives:
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
                        Not Merely an Activity — A Responsibility We Choose to
                        Carry
                      </h3>
                      <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                        We turn concern into collective action for
                        underprivileged children who have no other safety net.
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
              {/* MODE OF ACTION */}
              {/* ========================================================= */}
              <section
                id="modes-of-action"
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm scroll-mt-28"
              >
                <div className="max-w-3xl mb-10">
                  <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                    Mode of Action
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    CRC translates foundational principles and values into
                    concrete community outcomes through seven structured
                    operational methods designed for sustainable social impact:
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {MODES_OF_ACTION.map((mode) => (
                    <div
                      key={mode.title}
                      className="p-5 sm:p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200/80 hover:bg-white hover:border-[#e6000a] hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-xl bg-red-100/80 text-[#e6000a] flex items-center justify-center shadow-xs">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            Action Method
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
                        Our Promises
                      </span>
                      <h3 className="font-heading text-base font-bold mt-2 text-white">
                        See a Need? Speak Up.
                      </h3>
                      <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                        Do you know a child who needs help or have a concern
                        regarding child safeguarding, misconduct, or financial
                        ethics?
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
              {/* ACHIEVEMENTS */}
              {/* ========================================================= */}
              <section
                id="achievements"
                className="bg-[#0d0f14] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-gray-800 scroll-mt-28"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#e6000a]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007938]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="font-heading text-2xl sm:text-3xl text-white font-black tracking-tight">
                      Key Achievements & Recognition
                    </h2>
                    <p className="text-base font-semibold text-amber-300">
                      {ACHIEVEMENTS.title}
                    </p>

                    <blockquote className="text-xs sm:text-sm text-gray-200 italic border-l-4 border-amber-400 pl-4 py-1 leading-relaxed">
                      {ACHIEVEMENTS.nomination}
                    </blockquote>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      CRC GSTU has pioneered campus-led child welfare
                      initiatives in Bangladesh, demonstrating continuous
                      commitment to street children since 5 June 2016 through
                      free schooling, winter survival drives, medical camps, and
                      transparent institutional governance.
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
              {/* EXPLORE MORE: OUR HISTORY, HOW WE RUN, SYMBOL & FLAG */}
              {/* ========================================================= */}
              <section id="more-chapters" className="scroll-mt-28 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#0d0f14] tracking-tight">
                      Explore Institutional Chapters
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-gray-400 hidden sm:inline-block uppercase tracking-wider">
                    Institutional Records
                  </span>
                </div>

                <div className="space-y-4">
                  {FURTHER_CHAPTER_CARDS.map((card) => (
                    <Link
                      key={card.id}
                      id={card.id}
                      href={card.href}
                      className="block bg-white rounded-xl py-4 sm:py-5 px-5 sm:px-7 border border-gray-200/90 hover:border-[#e6000a] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group scroll-mt-28 relative overflow-hidden text-left cursor-pointer"
                    >
                      {/* Left vertical red accent line on hover */}
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#e6000a] to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                        <div className="space-y-1.5 max-w-3xl">
                          {/* Title */}
                          <h4 className="font-heading text-xl sm:text-2xl font-black text-[#0d0f14] group-hover:text-[#e6000a] transition-colors tracking-tight">
                            {card.title}
                          </h4>

                          {/* Short Details */}
                          <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed font-sans font-normal">
                            {card.description}
                          </p>
                        </div>

                        {/* Read More button on the right */}
                        <div className="shrink-0 pt-1 md:pt-0">
                          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-red-50 group-hover:bg-[#e6000a] text-[#e6000a] group-hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-2xs group-hover:shadow-md border border-red-200/60 group-hover:border-transparent">
                            <span>Read more</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
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
