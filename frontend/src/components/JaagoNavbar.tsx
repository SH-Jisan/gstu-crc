"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";

export default function JaagoNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsSticky(scrollPos >= 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClickOutside);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      ref={navRef}
      id="jaagonavbar"
      className={`fixed top-0 left-0 z-[1000] w-full transition-all duration-500 ease-in-out ${
        isSticky
          ? "py-1.5 bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-700/50"
          : "py-3 bg-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 font-sans font-semibold">
          {/* 1. Official CRC Brand Identity & Logo with Size Transition on Scroll */}
          <div className="w-auto shrink-0">
            <a href="/" className="inline-block group">
              <div
                className={`flex items-center gap-2 transition-all duration-500 ease-in-out group-hover:scale-105 ${
                  isSticky ? "scale-95" : "scale-100"
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#ffcd05] flex items-center justify-center shadow-lg text-gray-900 font-black text-base sm:text-lg tracking-tighter border border-amber-300">
                  CRC
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white drop-shadow">
                    Come for Road Child
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-[#ffcd05] tracking-tight mt-0.5">
                    Est. 5 June 2016 · GSTU
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* 2. Center Floating Capsule Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center bg-white px-4 lg:px-6 py-1.5 shadow-xl rounded-full font-sans text-xs lg:text-sm text-gray-800 transition-all duration-300">
              {/* Home */}
              <li>
                <a
                  href="/"
                  className="jaago-nav-link flex items-center font-bold py-1 px-3 rounded-full hover:bg-gray-100 hover:border-gray-200 transition-colors"
                >
                  Home
                </a>
              </li>

              {/* Focus Dropdown (CRC Core Pillars) */}
              <li
                className="relative group"
                onMouseEnter={() => setActiveDropdown("focus")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={(e) => handleDropdownToggle("focus", e)}
                  className={`jaago-nav-link flex items-center font-bold py-1 px-3 rounded-full transition-colors cursor-pointer border-none bg-transparent ${
                    activeDropdown === "focus"
                      ? "bg-gray-100 border-gray-200 text-gray-900"
                      : "hover:bg-gray-100 hover:border-gray-200"
                  }`}
                >
                  <span>Focus</span>
                  <ChevronDown
                    className={`jaago-chevron w-3.5 h-3.5 ml-1 opacity-70 transition-transform duration-300 ${
                      activeDropdown === "focus" ? "rotate-180" : "group-hover:rotate-180"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`jaago-dropdown absolute min-w-[270px] left-0 mt-2 p-5 bg-white rounded-2xl shadow-2xl z-50 border border-gray-100 ${
                    isSticky ? "top-7" : "top-9"
                  } ${activeDropdown === "focus" ? "active-dropdown" : ""}`}
                >
                  <ul className="divide-y divide-dashed divide-gray-200 text-xs font-semibold text-gray-700">
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="#hatekhori"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Hatekhori Free School (হাতেখড়ি পাঠশালা)
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="#safeguarding"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Child Safeguarding & Protection
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="#health"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Health & Nutrition Camps
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="#winter-relief"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Winter Warmth & Disaster Relief
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="#youth"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Youth Leadership & Volunteerism
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Programs Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setActiveDropdown("projects")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={(e) => handleDropdownToggle("projects", e)}
                  className={`jaago-nav-link flex items-center font-bold py-1 px-3 rounded-full transition-colors cursor-pointer border-none bg-transparent ${
                    activeDropdown === "projects"
                      ? "bg-gray-100 border-gray-200 text-gray-900"
                      : "hover:bg-gray-100 hover:border-gray-200"
                  }`}
                >
                  <span>Programs</span>
                  <ChevronDown
                    className={`jaago-chevron w-3.5 h-3.5 ml-1 opacity-70 transition-transform duration-300 ${
                      activeDropdown === "projects" ? "rotate-180" : "group-hover:rotate-180"
                    }`}
                  />
                </button>

                <div
                  className={`jaago-dropdown absolute min-w-[250px] left-0 mt-2 p-5 bg-white rounded-2xl shadow-2xl z-50 border border-gray-100 ${
                    isSticky ? "top-7" : "top-9"
                  } ${activeDropdown === "projects" ? "active-dropdown" : ""}`}
                >
                  <ul className="divide-y divide-dashed divide-gray-200 text-xs font-semibold text-gray-700">
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="#current-programs"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Ongoing School Programs
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="#relief-drives"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Annual Winter Relief Drives
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="#campus-wings"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        GSTU Campus Operations
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Updates Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setActiveDropdown("updates")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={(e) => handleDropdownToggle("updates", e)}
                  className={`jaago-nav-link flex items-center font-bold py-1 px-3 rounded-full transition-colors cursor-pointer border-none bg-transparent ${
                    activeDropdown === "updates"
                      ? "bg-gray-100 border-gray-200 text-gray-900"
                      : "hover:bg-gray-100 hover:border-gray-200"
                  }`}
                >
                  <span>Updates</span>
                  <ChevronDown
                    className={`jaago-chevron w-3.5 h-3.5 ml-1 opacity-70 transition-transform duration-300 ${
                      activeDropdown === "updates" ? "rotate-180" : "group-hover:rotate-180"
                    }`}
                  />
                </button>

                <div
                  className={`jaago-dropdown absolute min-w-[220px] left-0 mt-2 p-5 bg-white rounded-2xl shadow-2xl z-50 border border-gray-100 ${
                    isSticky ? "top-7" : "top-9"
                  } ${activeDropdown === "updates" ? "active-dropdown" : ""}`}
                >
                  <ul className="divide-y divide-dashed divide-gray-200 text-xs font-semibold text-gray-700">
                    <li className="jaago-dropdown-item pt-2">
                      <a href="#blog" className="block hover:text-amber-600 transition-colors">
                        Field Stories & Blog
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a href="#news" className="block hover:text-amber-600 transition-colors">
                        Media & Press Coverage
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a href="#audit" className="block hover:text-amber-600 transition-colors">
                        Audited Financial Reports
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a href="#yearbook" className="block hover:text-amber-600 transition-colors">
                        Annual Activity Yearbook
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* About Us (Exact 2-Column MegaMenu) */}
              <li
                className="relative group"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={(e) => handleDropdownToggle("about", e)}
                  className={`jaago-nav-link flex items-center font-bold py-1 px-3 rounded-full transition-colors cursor-pointer border-none bg-transparent ${
                    activeDropdown === "about"
                      ? "bg-gray-100 border-gray-200 text-gray-900"
                      : "hover:bg-gray-100 hover:border-gray-200"
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`jaago-chevron w-3.5 h-3.5 ml-1 opacity-70 transition-transform duration-300 ${
                      activeDropdown === "about" ? "rotate-180" : "group-hover:rotate-180"
                    }`}
                  />
                </button>

                {/* MegaMenu container */}
                <div
                  id="megaMenu"
                  className={`jaago-dropdown absolute min-w-[460px] -left-28 mt-2 p-6 bg-white rounded-2xl shadow-2xl z-50 border border-gray-100 ${
                    isSticky ? "top-7" : "top-9"
                  } ${activeDropdown === "about" ? "active-dropdown" : ""}`}
                >
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs font-semibold text-gray-700">
                    <a
                      href="#vision-mission"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Vision, Mission, Values
                    </a>
                    <a
                      href="#gstu-history"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Founding & GSTU Roots
                    </a>
                    <a
                      href="#committee"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Executive Committee
                    </a>
                    <a
                      href="#advisors"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Faculty Advisors
                    </a>
                    <a
                      href="#contact"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Contact & Emergency Help
                    </a>
                    <a
                      href="#child-safeguarding"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Child Safeguarding Policy
                    </a>
                    <a
                      href="#transparency"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Transparency & Audits
                    </a>
                    <a
                      href="#volunteer"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Become a Volunteer Teacher
                    </a>
                  </div>
                </div>
              </li>

              {/* Donate */}
              <li>
                <a
                  href="#sponsor"
                  className="jaago-nav-link flex items-center font-bold py-1 px-3 lg:px-4 rounded-full hover:bg-gray-100 hover:border-gray-200 transition-colors"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Right End: Animated Search Toggle + Sponsor a Child Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button with Click Reveal */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search CRC Website"
                className="btn btn-primary btn-circle w-9 h-9 sm:w-11 sm:h-11 bg-[#ffcd05] text-[#1f2937] shadow-lg flex items-center justify-center hover:bg-[#e6b800] hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {/* Interactive Search Box Popover */}
              {searchOpen && (
                <div className="absolute right-0 top-12 sm:top-14 w-64 sm:w-72 bg-white rounded-2xl shadow-2xl p-3 border border-gray-200 z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-xl border border-gray-200">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search CRC programs, reports..."
                      className="bg-transparent border-none text-xs text-gray-800 focus:outline-none w-full"
                      autoFocus
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Signature Sponsor a Child CTA with Hover Lift */}
            <a
              className="btn btn-primary px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base font-sans shadow-xl capitalize font-bold text-[#1f2937] hover:scale-105 hover:shadow-2xl transition-all duration-300 shrink-0"
              href="#sponsor"
            >
              Sponsor a Child
            </a>

            {/* Mobile Drawer Trigger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className="p-2 text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileDrawerOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-5 border-t border-gray-700 text-white text-sm font-semibold space-y-3 animate-in slide-in-from-top duration-300">
          <a href="/" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            Home
          </a>
          <a href="#hatekhori" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            Focus: Hatekhori Free School
          </a>
          <a href="#safeguarding" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            Focus: Child Safeguarding & Health
          </a>
          <a href="#current-programs" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            Programs: Field Campaigns
          </a>
          <a href="#blog" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            Updates: Field Stories & Audits
          </a>
          <a href="#about" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            About Us: GSTU Roots & Committee
          </a>
          <a href="#sponsor" className="block py-2 text-[#ffcd05] font-bold">
            Sponsor a Child
          </a>
        </div>
      )}
    </header>
  );
}
