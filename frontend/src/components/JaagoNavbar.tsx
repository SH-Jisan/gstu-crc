"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";

const defaultRouteBreadcrumbMap: Record<string, BreadcrumbItem[]> = {
  "/about": [{ label: "About Us" }],
  "/members": [{ label: "About Us", href: "/about" }, { label: "Members Directory" }],
  "/programs": [{ label: "Programs & Activities" }],
  "/school": [{ label: "Programs", href: "/programs" }, { label: "Hatekhori Free School" }],
  "/branches": [{ label: "Branches" }],
  "/media": [{ label: "Media & Gallery" }],
  "/promises": [{ label: "Our Promises" }],
};

interface JaagoNavbarProps {
  breadcrumbs?: BreadcrumbItem[];
}

export default function JaagoNavbar({ breadcrumbs }: JaagoNavbarProps = {}) {
  const pathname = usePathname();
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
      setIsSticky(scrollPos >= 40);
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

  const navItems = [
    {
      label: "About CRC",
      href: "/about",
      id: "about",
      dropdown: [
        { label: "Overview & History", href: "/about#history" },
        { label: "Vision, Mission & Values", href: "/about#vision" },
        { label: "5 Core Principles", href: "/about#principles" },
        { label: "Executive Leadership", href: "/about#leadership" },
        { label: "Growth Timeline", href: "/about#timeline" },
      ],
    },
    {
      label: "Programs & Activities",
      href: "/programs",
      id: "programs",
      dropdown: [
        { label: "All 7 Core Programs", href: "/programs" },
        { label: "Street Children Education", href: "/programs#education" },
        { label: "Nutrition & Health Camps", href: "/programs#health-camps" },
        { label: "Winter Warmth & Relief", href: "/programs#winter-warmth" },
        { label: "Child Safeguarding Policy", href: "/programs#safeguarding" },
      ],
    },
    {
      label: "CRC School",
      href: "/school",
      id: "school",
      dropdown: [
        { label: "Hatekhori Free School", href: "/school" },
        { label: "Class Curriculum (Pre-Primary to 8)", href: "/school#curriculum" },
        { label: "Weekly Timetable Routine", href: "/school#schedule" },
        { label: "Volunteer Teaching Standards", href: "/school#standards" },
      ],
    },
    {
      label: "Branches",
      href: "/branches",
      id: "branches",
      dropdown: [
        { label: "All 6 Campus Chapters", href: "/branches" },
        { label: "GSTU Central Branch", href: "/branches#gstu" },
        { label: "Gopalganj Town Chapter", href: "/branches#town" },
        { label: "Tungipara & Kotalipara", href: "/branches#upazila" },
        { label: "Barishal & Khulna Wings", href: "/branches#divisional" },
      ],
    },
    {
      label: "Members",
      href: "/members",
    },
    {
      label: "Media & Gallery",
      href: "/media",
      id: "media",
      dropdown: [
        { label: "Photo Archives", href: "/media#gallery" },
        { label: "Documentary Video", href: "/media#video" },
        { label: "Press & News Coverage", href: "/media#press" },
        { label: "Official CRC Banner", href: "/media#banner" },
      ],
    },
    {
      label: "Get Involved",
      href: "/#volunteer",
    },
    {
      label: "Resources",
      href: "/programs#safeguarding",
    },
    {
      label: "Contact Us",
      href: "/about#contact",
    },
  ];

  return (
    <header
      ref={navRef}
      id="jaagonavbar"
      className="fixed top-0 left-0 z-[1000] w-full transition-all duration-300 ease-out"
    >
      {/* 1. Top Bar (Black background with red established date, values & email) */}
      <div
        className={`bg-[#0d0f14] text-white transition-all duration-300 ease-out ${
          isSticky
            ? "max-h-0 opacity-0 overflow-hidden py-0"
            : "max-h-12 opacity-100 py-1.5 border-b border-gray-800/60"
        }`}
      >
        <div className="max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-bold tracking-[0.22em] uppercase font-sans">
          <span className="text-[#e6000a] tracking-[0.25em] whitespace-nowrap">ESTD. 2016</span>

          <div className="hidden md:flex items-center gap-6 xl:gap-8 text-white font-bold tracking-[0.25em] whitespace-nowrap">
            <span>BROTHERHOOD</span>
            <span>COMMITMENT</span>
            <span>TRUST</span>
          </div>

          <a
            href="mailto:crcgstu@gmail.com"
            className="text-white hover:text-[#e6000a] transition-colors tracking-[0.18em] whitespace-nowrap"
          >
            CRCGSTU@GMAIL.COM
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Bar (White background, bottom red border, logo, links, search & donate) */}
      <div
        className={`relative z-30 border-b-4 border-[#e6000a] bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isSticky ? "py-2 shadow-xl" : "py-2.5 sm:py-3 shadow-md"
        }`}
      >
        <div className="max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4 font-sans">
          {/* Brand Identity: Red CRC Box + 2-line Text */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
            <span className="flex size-10 sm:size-11 items-center justify-center rounded bg-[#e6000a] text-white font-heading font-black text-lg sm:text-xl shadow-md transition-transform duration-300 group-hover:scale-105 active:scale-95">
              CRC
            </span>
            <span className="flex flex-col text-left leading-tight whitespace-nowrap">
              <span className="block font-heading text-sm sm:text-base font-black text-[#0d0f14] group-hover:text-[#e6000a] transition-colors tracking-tight">
                Come For Road Child
              </span>
              <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mt-0.5">
                GSTU BRANCH
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links (Single line, strictly whitespace-nowrap) */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 shrink-0">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.dropdown);
              return (
                <div
                  key={item.label}
                  className="relative group/nav"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.id || null)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="block whitespace-nowrap px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[12.5px] 2xl:text-[13.5px] font-bold text-[#0d0f14] hover:text-[#e6000a] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown Menu with Smooth Transition */}
                  {hasDropdown && item.dropdown && (
                    <div
                      className={`absolute left-0 top-full pt-2 z-50 min-w-[240px] transition-all duration-200 ${
                        activeDropdown === item.id
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2.5 space-y-0.5">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block whitespace-nowrap px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#e6000a] hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Controls: Search Icon + Donate Button + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Popover Button */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search CRC Website"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-[#e6000a] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Search Box Popover */}
              {searchOpen && (
                <div className="absolute right-0 top-12 sm:top-14 w-64 sm:w-72 bg-white rounded-xl shadow-2xl p-3 border border-gray-200 z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search CRC programs, school..."
                      className="bg-transparent border-none text-xs text-gray-800 focus:outline-none w-full"
                      autoFocus
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Donate Button (Matches screenshot: red box with bold white text) */}
            <a
              href="/#sponsor"
              className="bg-[#e6000a] hover:bg-[#a20002] text-white font-heading font-bold text-sm tracking-wide px-5 sm:px-6 py-2.5 rounded shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shrink-0"
            >
              Donate
            </a>

            {/* Mobile Drawer Trigger (Visible below XL) */}
            <div className="xl:hidden">
              <button
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className="p-2 text-gray-800 hover:text-[#e6000a] hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu with Smooth Slide Animation */}
        {mobileDrawerOpen && (
          <div className="xl:hidden bg-white px-6 py-5 border-t border-gray-200 text-[#0d0f14] text-sm font-bold space-y-2 animate-in slide-in-from-top duration-200 shadow-xl max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block py-1.5 text-gray-900 hover:text-[#e6000a] hover:translate-x-1 transition-all font-heading text-sm"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-3 py-1 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileDrawerOpen(false)}
                        className="block py-1 text-xs text-gray-600 hover:text-[#e6000a] transition-colors"
                      >
                        • {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <a
                href="/#sponsor"
                onClick={() => setMobileDrawerOpen(false)}
                className="block text-center py-3 bg-[#e6000a] text-white font-heading font-bold rounded shadow-lg hover:bg-[#a20002]"
              >
                Donate Now
              </a>
            </div>
          </div>
        )}
      </div>

      {/* 3. Sub-Navbar Breadcrumb Strip (Fixed with Navbar, stays visible during scroll) */}
      {(() => {
        const activeBreadcrumbs =
          breadcrumbs !== undefined
            ? breadcrumbs
            : pathname && pathname !== "/"
            ? defaultRouteBreadcrumbMap[pathname] || [
                {
                  label:
                    pathname.replace(/^\//, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
                    "Page",
                },
              ]
            : null;

        if (!activeBreadcrumbs || activeBreadcrumbs.length === 0) return null;

        return (
          <div className="relative z-10 bg-[#f4f2ee]/95 backdrop-blur-md border-b border-gray-200/90 shadow-xs transition-colors">
            <div className="max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
              <Breadcrumb items={activeBreadcrumbs} variant="bar" />
              <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                GSTU Campus · Estd 2016
              </span>
            </div>
          </div>
        );
      })()}
    </header>
  );
}
