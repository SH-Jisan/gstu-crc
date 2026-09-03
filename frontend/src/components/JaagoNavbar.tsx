"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";

export default function JaagoNavbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 py-3 z-[1000] duration-500 transition-all w-full bg-gray-800" id="jaagonavbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 font-sans font-semibold">
          {/* Logo */}
          <div className="w-1/3 lg:w-1/4">
            <a href="https://jaago.com.bd">
              <img
                width="110"
                height="73"
                className="w-[110px]"
                src="https://jaago.com.bd/images/2024/09/jaago-logo_1727084165_w2fULrshk.png?tr=f-auto,w-165,h-100"
                alt="JAAGO Foundation"
              />
            </a>
          </div>

          {/* Desktop Center Floating Capsule Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center bg-white px-6 py-1.5 shadow-xl rounded-full font-sans text-sm text-gray-800">
              <li>
                <a
                  href="https://jaago.com.bd"
                  className="flex items-center font-bold py-1.5 px-3 rounded-full hover:bg-gray-100 transition-colors"
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
                <a
                  href="#"
                  className="flex items-center font-bold py-1.5 px-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Focus
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </a>
                {activeDropdown === "focus" && (
                  <ul className="absolute min-w-[260px] left-0 top-full mt-2 p-4 bg-white rounded-xl shadow-2xl z-50 divide-y divide-gray-100 text-xs font-semibold text-gray-700 animate-in fade-in">
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/education-program" className="block">
                        Education and Digital Learning
                      </a>
                    </li>
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/youth-development-program" className="block">
                        Youth and Skill Development
                      </a>
                    </li>
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/women" className="block">
                        Women
                      </a>
                    </li>
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/environment" className="block">
                        Environment
                      </a>
                    </li>
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/governance" className="block">
                        Governance and Advocacy
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Projects Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("projects")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className="flex items-center font-bold py-1.5 px-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Projects
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </a>
                {activeDropdown === "projects" && (
                  <ul className="absolute min-w-[240px] left-0 top-full mt-2 p-4 bg-white rounded-xl shadow-2xl z-50 divide-y divide-gray-100 text-xs font-semibold text-gray-700 animate-in fade-in">
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/current-project" className="block">
                        Current Projects
                      </a>
                    </li>
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/completed-project" className="block">
                        Completed Projects
                      </a>
                    </li>
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/global-giving" className="block">
                        Global Giving Projects
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Updates Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("updates")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className="flex items-center font-bold py-1.5 px-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Updates
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </a>
                {activeDropdown === "updates" && (
                  <ul className="absolute min-w-[220px] left-0 top-full mt-2 p-4 bg-white rounded-xl shadow-2xl z-50 divide-y divide-gray-100 text-xs font-semibold text-gray-700 animate-in fade-in">
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/blog" className="block">
                        Blog
                      </a>
                    </li>
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/jaago-in-news" className="block">
                        JAAGO in News
                      </a>
                    </li>
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/report" className="block">
                        Reports
                      </a>
                    </li>
                    <li className="py-2 hover:text-amber-600 transition-colors">
                      <a href="https://jaago.com.bd/yearbook" className="block">
                        Yearbook
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* About Us Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className="flex items-center font-bold py-1.5 px-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  About Us
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </a>
                {activeDropdown === "about" && (
                  <div className="absolute min-w-[340px] -left-16 top-full mt-2 p-5 bg-white rounded-2xl shadow-2xl z-50 text-xs font-semibold text-gray-700 grid grid-cols-2 gap-3 animate-in fade-in">
                    <a href="https://jaago.com.bd/vision-mission-values" className="hover:text-amber-600">
                      Vision, Mission, Values
                    </a>
                    <a href="https://jaago.com.bd/team" className="hover:text-amber-600">
                      JAAGO Team
                    </a>
                    <a href="https://jaago.com.bd/awards-recognitions" className="hover:text-amber-600">
                      Awards & Recognitions
                    </a>
                    <a href="https://jaago.com.bd/faqs" className="hover:text-amber-600">
                      FAQ
                    </a>
                    <a href="https://jaago.com.bd/contact" className="hover:text-amber-600">
                      Contact
                    </a>
                    <a href="https://jaago.com.bd/career" className="hover:text-amber-600">
                      Career
                    </a>
                    <a href="https://jaago.com.bd/internship" className="hover:text-amber-600">
                      Internship
                    </a>
                    <a href="https://jaago.com.bd/become-a-teacher" className="hover:text-amber-600">
                      Become a Teacher
                    </a>
                  </div>
                )}
              </li>

              <li>
                <a
                  href="https://sponsorachild.jaagofoundation.org/donation"
                  className="flex items-center font-bold py-1.5 px-4 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Right End: Search + Sponsor a Child */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              aria-label="Search"
              className="btn btn-primary btn-circle w-11 h-11 bg-primary text-secondary shadow-lg flex items-center justify-center hover:bg-[#e6b800]"
            >
              <Search className="h-5 w-5" />
            </button>

            <a
              className="btn btn-primary px-6 py-2.5 text-sm lg:text-base font-sans shadow-xl capitalize font-bold text-secondary"
              href="https://sponsorachild.jaagofoundation.org/children"
            >
              Sponsor a Child
            </a>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://sponsorachild.jaagofoundation.org/children"
              className="btn btn-primary btn-sm text-xs capitalize"
            >
              Sponsor a Child
            </a>
            <button
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              className="p-2 text-white bg-gray-700 rounded-lg"
            >
              {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileDrawerOpen && (
        <div className="lg:hidden bg-gray-900 px-6 py-4 border-t border-gray-700 text-white text-sm font-semibold space-y-3 animate-in slide-in-from-top-2">
          <a href="https://jaago.com.bd" className="block py-1 border-b border-gray-800">
            Home
          </a>
          <a href="https://jaago.com.bd/education-program" className="block py-1 border-b border-gray-800">
            Focus: Education and Digital Learning
          </a>
          <a href="https://jaago.com.bd/youth-development-program" className="block py-1 border-b border-gray-800">
            Focus: Youth and Skill Development
          </a>
          <a href="https://jaago.com.bd/current-project" className="block py-1 border-b border-gray-800">
            Projects: Current Projects
          </a>
          <a href="https://jaago.com.bd/blog" className="block py-1 border-b border-gray-800">
            Updates: Blog
          </a>
          <a href="https://jaago.com.bd/vision-mission-values" className="block py-1 border-b border-gray-800">
            About Us
          </a>
          <a href="https://sponsorachild.jaagofoundation.org/donation" className="block py-1 text-primary">
            Donate
          </a>
        </div>
      )}
    </header>
  );
}
