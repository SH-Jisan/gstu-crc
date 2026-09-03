"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Heart,
  ShieldAlert,
  Search,
  Menu,
  X,
  Phone,
  Mail,
} from "lucide-react";
import { CRC_META } from "../data/crcMockData";

interface JaagoNavbarProps {
  onOpenDonate: () => void;
  onOpenReport: () => void;
}

export default function JaagoNavbar({
  onOpenDonate,
  onOpenReport,
}: JaagoNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-900 shadow-md">
      {/* Top Helpline Strip */}
      <div className="hidden sm:flex bg-gray-950 text-gray-300 text-[11px] py-1 px-4 lg:px-8 justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-amber-400 font-semibold">
            <Phone className="w-3 h-3 mr-1" />
            24/7 Child Helpline: {CRC_META.hotline}
          </span>
          <span className="text-gray-500">•</span>
          <span className="flex items-center text-gray-300">
            <Mail className="w-3 h-3 mr-1 text-gray-400" />
            {CRC_META.email}
          </span>
        </div>
        <div className="flex items-center space-x-3 text-gray-400">
          <span className="bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded text-[10px] font-bold border border-blue-800">
            GSTU Campus Flagship (Est. 2016)
          </span>
          <span>Chartered Audited NGO</span>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center space-x-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFCD05] to-amber-500 flex items-center justify-center text-gray-950 font-black text-lg shadow-md group-hover:scale-105 transition-transform">
              CRC
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
                Come for Road Child
              </span>
              <span className="text-[10px] text-amber-400 font-semibold tracking-wide uppercase mt-0.5">
                GSTU Branch & Central Secretariat
              </span>
            </div>
          </a>

          {/* Desktop Center Floating Capsule Navigation (JAAGO Signature Style) */}
          <nav className="hidden lg:flex items-center bg-white px-5 py-1 rounded-full shadow-lg border border-gray-200">
            <ul className="flex items-center space-x-1 text-sm font-bold text-gray-700">
              <li>
                <a
                  href="#"
                  className="px-3.5 py-1.5 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors inline-block"
                >
                  Home
                </a>
              </li>

              {/* Focus Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("focus")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-3.5 py-1.5 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors">
                  Focus <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </button>
                {activeDropdown === "focus" && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-xs font-semibold text-gray-700 space-y-1">
                    <a
                      href="#focus-areas"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      Education & Digital Learning (Hatekhori)
                    </a>
                    <a
                      href="#volunteerism"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      Youth & Skill Development
                    </a>
                    <a
                      href="#focus-areas"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      Healthcare & Midday Nutrition
                    </a>
                    <a
                      href="#governance-transparency"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      Governance & Child Safeguarding
                    </a>
                  </div>
                )}
              </li>

              {/* Projects Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("projects")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-3.5 py-1.5 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors">
                  Projects <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </button>
                {activeDropdown === "projects" && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-xs font-semibold text-gray-700 space-y-1">
                    <a
                      href="#sponsor-child"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      Hatekhori Free School
                    </a>
                    <a
                      href="#news-articles"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      Winter Warmth Drive 2026
                    </a>
                    <a
                      href="#governance-transparency"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      Emergency Relief Operations
                    </a>
                  </div>
                )}
              </li>

              {/* About Us Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-3.5 py-1.5 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors">
                  About Us <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </button>
                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-xs font-semibold text-gray-700 space-y-1">
                    <a
                      href="#focus-areas"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      Vision, Mission & Values
                    </a>
                    <a
                      href="#governance-transparency"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      Three-Tier Governance Structure
                    </a>
                    <a
                      href="#governance-transparency"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      Audited Financial Statements
                    </a>
                    <a
                      href="#volunteerism"
                      className="block px-3 py-2 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      University Branch Network
                    </a>
                  </div>
                )}
              </li>

              <li>
                <button
                  onClick={onOpenDonate}
                  className="px-3.5 py-1.5 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Donate
                </button>
              </li>
            </ul>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Child Safeguarding Whistleblower */}
            <button
              id="btn-jaago-report"
              onClick={onOpenReport}
              className="flex items-center text-xs font-bold text-rose-300 hover:text-white bg-rose-950/60 hover:bg-rose-900 border border-rose-700/50 px-3.5 py-2.5 rounded-full transition-all duration-150"
            >
              <ShieldAlert className="w-4 h-4 mr-1.5 text-rose-400" />
              Report Concern
            </button>

            {/* Signature Yellow "Sponsor a Child" Button */}
            <button
              id="btn-jaago-sponsor-child"
              onClick={onOpenDonate}
              className="flex items-center text-sm font-black text-gray-950 bg-[#FFCD05] hover:bg-[#e6b800] px-5 py-2.5 rounded-full shadow-lg hover:shadow-[#FFCD05]/30 transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 mr-1.5 fill-gray-950" />
              Sponsor a Child
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenDonate}
              className="text-xs font-bold text-gray-950 bg-[#FFCD05] px-3.5 py-2 rounded-full"
            >
              Sponsor
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-gray-800 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 text-sm font-bold text-white">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-800"
          >
            Home
          </a>
          <a
            href="#sponsor-child"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-800 text-amber-400"
          >
            Sponsor a Child (Hatekhori School)
          </a>
          <a
            href="#focus-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-800"
          >
            Our Focus Areas
          </a>
          <a
            href="#volunteerism"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-800"
          >
            Volunteerism & Chapters
          </a>
          <a
            href="#governance-transparency"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-800"
          >
            Governance & Audits
          </a>
          <a
            href="#news-articles"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-800"
          >
            News & Articles
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-3 bg-[#FFCD05] text-gray-950 font-black rounded-xl text-center"
            >
              Sponsor a Child Now
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReport();
              }}
              className="w-full py-2.5 bg-rose-900/60 border border-rose-700/50 text-rose-300 font-bold rounded-xl text-center"
            >
              Report a Child Concern
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
