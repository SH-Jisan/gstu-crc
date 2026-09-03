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
          {/* 1. Official Logo with Smooth Size Transition on Scroll & Hover Scale */}
          <div className="w-auto shrink-0">
            <a href="https://jaago.com.bd" className="inline-block group">
              <img
                width="110"
                height="73"
                className={`transition-all duration-500 ease-in-out group-hover:scale-105 ${
                  isSticky ? "w-[85px] sm:w-[95px] scale-95" : "w-[100px] sm:w-[110px] scale-100"
                }`}
                src="https://jaago.com.bd/images/2024/09/jaago-logo_1727084165_w2fULrshk.png?tr=f-auto,w-165,h-100"
                alt="JAAGO Foundation"
              />
            </a>
          </div>

          {/* 2. Center Floating Capsule Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center bg-white px-4 lg:px-6 py-1.5 shadow-xl rounded-full font-sans text-xs lg:text-sm text-gray-800 transition-all duration-300">
              {/* Home */}
              <li>
                <a
                  href="https://jaago.com.bd"
                  className="jaago-nav-link flex items-center font-bold py-1 px-3 rounded-full hover:bg-gray-100 hover:border-gray-200 transition-colors"
                >
                  Home
                </a>
              </li>

              {/* Focus Dropdown */}
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
                        href="https://jaago.com.bd/education-program"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Education and Digital Learning
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="https://jaago.com.bd/youth-development-program"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Youth and Skill Development
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="https://jaago.com.bd/women"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Women
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="https://jaago.com.bd/environment"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Environment
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="https://jaago.com.bd/governance"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Governance and Advocacy
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Projects Dropdown */}
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
                  <span>Projects</span>
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
                        href="https://jaago.com.bd/current-project"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Current Projects
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="https://jaago.com.bd/completed-project"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Completed Projects
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a
                        href="https://jaago.com.bd/global-giving"
                        className="block hover:text-amber-600 transition-colors"
                      >
                        Global Giving Projects
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
                      <a href="https://jaago.com.bd/blog" className="block hover:text-amber-600 transition-colors">
                        Blog
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a href="https://jaago.com.bd/jaago-in-news" className="block hover:text-amber-600 transition-colors">
                        JAAGO in News
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a href="https://jaago.com.bd/report" className="block hover:text-amber-600 transition-colors">
                        Reports
                      </a>
                    </li>
                    <li className="jaago-dropdown-item pt-2">
                      <a href="https://jaago.com.bd/yearbook" className="block hover:text-amber-600 transition-colors">
                        Yearbook
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* About Us (Exact JAAGO MegaMenu with 2 columns) */}
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
                      href="https://jaago.com.bd/vision-mission-values"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Vision, Mission, Values
                    </a>
                    <a
                      href="https://jaago.com.bd/team"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      JAAGO Team
                    </a>
                    <a
                      href="https://jaago.com.bd/awards-recognitions"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Awards & Recognitions
                    </a>
                    <a
                      href="https://jaago.com.bd/faqs"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      FAQ
                    </a>
                    <a
                      href="https://jaago.com.bd/contact"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Contact
                    </a>
                    <a
                      href="https://jaago.com.bd/career"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Career
                    </a>
                    <a
                      href="https://jaago.com.bd/internship"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Internship
                    </a>
                    <a
                      href="https://jaago.com.bd/become-a-teacher"
                      className="jaago-dropdown-item hover:text-amber-600 block"
                    >
                      Become a Teacher
                    </a>
                  </div>
                </div>
              </li>

              {/* Donate */}
              <li>
                <a
                  href="https://sponsorachild.jaagofoundation.org/donation"
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
                aria-label="Search"
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
                      placeholder="Search JAAGO..."
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
              href="https://sponsorachild.jaagofoundation.org/children"
            >
              Sponsor a Child
            </a>

            {/* Mobile Drawer Trigger (Only on xs/sm screens) */}
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
          <a href="https://jaago.com.bd" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            Home
          </a>
          <a href="https://jaago.com.bd/education-program" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            Focus: Education and Digital Learning
          </a>
          <a href="https://jaago.com.bd/youth-development-program" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            Focus: Youth and Skill Development
          </a>
          <a href="https://jaago.com.bd/current-project" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            Projects: Current Projects
          </a>
          <a href="https://jaago.com.bd/blog" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            Updates: Blog
          </a>
          <a href="https://jaago.com.bd/vision-mission-values" className="block py-1.5 border-b border-gray-800 hover:text-[#ffcd05]">
            About Us
          </a>
          <a href="https://sponsorachild.jaagofoundation.org/donation" className="block py-2 text-[#ffcd05] font-bold">
            Donate
          </a>
        </div>
      )}
    </header>
  );
}
