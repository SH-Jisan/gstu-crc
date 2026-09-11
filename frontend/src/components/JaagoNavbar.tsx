"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";

interface MegaMenuColumn {
  title: string;
  href: string;
  description: string;
}

interface MegaMenuSection {
  spotlight: {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  columns: MegaMenuColumn[];
}

const megaMenus: Record<string, MegaMenuSection> = {
  about: {
    spotlight: {
      title: "We are Come For Road Child (CRC)",
      description:
        "A student-led volunteer social welfare organization founded on 5 June 2016 at GSTU, dedicated to ensuring the fundamental rights, education, and healthcare of underprivileged street children.",
      ctaText: "Discover who we are",
      ctaHref: "/about",
    },
    columns: [
      {
        title: "History & Genesis",
        href: "/about#history",
        description:
          "From a 2016 Eid shopping moment at a railway station to an organized nationwide campus movement.",
      },
      {
        title: "Principles & Values",
        href: "/about#principles",
        description:
          "Brotherhood, Commitment, and Trust guiding our 8 operational values and non-profit ethics.",
      },
      {
        title: "How We Are Run",
        href: "/about#governance",
        description:
          "A 3-Council structure (Permanent, Executive, Temporary) ensuring transparent, student-led management.",
      },
      {
        title: "Milestones & Awards",
        href: "/about#timeline",
        description:
          "A 10-year development trajectory and official recognition with the Best Branch Prize.",
      },
    ],
  },
  programs: {
    spotlight: {
      title: "Our Humanitarian Programs",
      description:
        "Direct field operations, basic education, healthcare checkups, and seasonal emergency relief for street children across Bangladesh.",
      ctaText: "Explore all programs",
      ctaHref: "/programs",
    },
    columns: [
      {
        title: "Street Child Education",
        href: "/programs#education",
        description:
          "Free open-air schooling, stationery, books, and basic literacy training for street children.",
      },
      {
        title: "Nutrition & Health Camps",
        href: "/programs#health-camps",
        description:
          "Routine doctor checkups, hygiene kits, soap distribution, and treatment for seasonal illnesses.",
      },
      {
        title: "Winter Warmth & Relief",
        href: "/programs#winter-warmth",
        description:
          "Annual distribution of warm sweaters, blankets, and rations to floating homeless families.",
      },
      {
        title: "Child Safeguarding",
        href: "/programs#safeguarding",
        description:
          "Safe shelter support, anti-trafficking vigilance, and emergency rescue protocols.",
      },
    ],
  },
  school: {
    spotlight: {
      title: "Hatekhori Free School",
      description:
        "Our flagship open-air education initiative transforming street children into confident, literate learners with moral and formal foundation.",
      ctaText: "View school model",
      ctaHref: "/school",
    },
    columns: [
      {
        title: "Class Curriculum",
        href: "/school#curriculum",
        description:
          "Structured tiers from Pre-Primary basics to Grade 8 mainstream school transitions.",
      },
      {
        title: "Weekly Timetable",
        href: "/school#schedule",
        description:
          "Flexible afternoon sessions accommodating children's daily survival routines.",
      },
      {
        title: "Volunteer Teaching",
        href: "/school#standards",
        description:
          "GSTU university students acting as dedicated mentors, tutors, and positive role models.",
      },
    ],
  },
  branches: {
    spotlight: {
      title: "Campus & Regional Chapters",
      description:
        "A synchronized network of passionate university student volunteers driving street child welfare across divisions and districts.",
      ctaText: "Explore all branches",
      ctaHref: "/branches",
    },
    columns: [
      {
        title: "GSTU Central Branch",
        href: "/branches#gstu",
        description:
          "The founding branch and central operational engine headquartered in Gopalganj.",
      },
      {
        title: "Town & Upazila Wings",
        href: "/branches#upazila",
        description:
          "Gopalganj Town, Tungipara, and Kotalipara local volunteer action teams.",
      },
      {
        title: "Divisional Chapters",
        href: "/branches#divisional",
        description:
          "Expanding initiatives across Barishal, Khulna, and neighboring universities.",
      },
    ],
  },
  media: {
    spotlight: {
      title: "Media, Press & Documentary",
      description:
        "Authentic photographs, video documentaries, and press coverage of our field campaigns and milestones from 2016 to the present day.",
      ctaText: "Explore media gallery",
      ctaHref: "/media",
    },
    columns: [
      {
        title: "Photo Archives",
        href: "/media#gallery",
        description:
          "High-resolution captures of Hatekhori classrooms, Eid clothes distribution, and relief drives.",
      },
      {
        title: "Documentary Stories",
        href: "/media#video",
        description:
          "Impact videos and authentic interviews with student volunteers and school beneficiaries.",
      },
      {
        title: "Press & News Coverage",
        href: "/media#press",
        description:
          "National and regional newspaper reports, recognition, and branch achievements.",
      },
    ],
  },
};

const megaMenuKeys = ["about", "programs", "school", "branches", "media"] as const;

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
  const [displayedMenuKey, setDisplayedMenuKey] = useState<string>("about");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (activeDropdown && megaMenus[activeDropdown]) {
      setDisplayedMenuKey(activeDropdown);
    }
  }, [activeDropdown]);

  const isMegaOpen = Boolean(activeDropdown && megaMenus[activeDropdown]);
  const activeMegaKey = (activeDropdown && megaMenus[activeDropdown]) ? activeDropdown : displayedMenuKey;
  const activeIdx = megaMenuKeys.indexOf(activeMegaKey as (typeof megaMenuKeys)[number]) !== -1
    ? megaMenuKeys.indexOf(activeMegaKey as (typeof megaMenuKeys)[number])
    : 0;
  const currentMegaMenu = megaMenus[activeMegaKey] || null;

  const handleMouseEnterItem = (id: string | null) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(id);
  };

  const handleMouseLeaveItem = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleMegaMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMegaMenuMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

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
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
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
              const hasMega = Boolean(item.id && megaMenus[item.id]);
              const isActive = activeDropdown === item.id;
              return (
                <div
                  key={item.label}
                  className="group/nav relative py-2"
                  onMouseEnter={() => (hasMega ? handleMouseEnterItem(item.id || null) : handleMouseEnterItem(null))}
                  onMouseLeave={handleMouseLeaveItem}
                >
                  <Link
                    href={item.href}
                    className={`relative block whitespace-nowrap px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs xl:text-[12.5px] 2xl:text-[13.5px] font-bold transition-colors duration-200 ${
                      isActive ? "text-[#e6000a]" : "text-[#0d0f14] hover:text-[#e6000a]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Smooth expanding underline indicator */}
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#e6000a] rounded-full transition-all duration-300 ease-out origin-left ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
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
                <div className="absolute right-0 top-12 sm:top-14 w-64 sm:w-72 bg-white rounded-xl shadow-2xl p-3 border border-gray-200 z-50 animate-popover-in">
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

        {/* Full-Width Mega Dropdown Panel with Smooth Slide Down & Slide Up (Curtain Animation) */}
        {currentMegaMenu && (
          <div
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
            className={`hidden xl:block absolute left-0 right-0 top-full w-full z-40 mega-menu-wrapper ${
              isMegaOpen ? "is-open" : ""
            }`}
          >
            <div className="w-full bg-white/98 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border-b border-gray-200/80 mega-menu-drawer overflow-hidden">
              <div className="max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 grid grid-cols-1 grid-rows-1 items-start">
                {megaMenuKeys.map((key, index) => {
                  const menu = megaMenus[key];
                  const isCurrent = key === activeMegaKey;
                  const isBefore = index < activeIdx;
                  const translateClass = isCurrent
                    ? "translate-x-0 opacity-100 pointer-events-auto visible"
                    : isBefore
                    ? "-translate-x-6 opacity-0 pointer-events-none invisible"
                    : "translate-x-6 opacity-0 pointer-events-none invisible";

                  return (
                    <div
                      key={key}
                      className={`col-start-1 row-start-1 w-full flex items-start gap-8 lg:gap-12 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${translateClass}`}
                    >
                      {/* Left Spotlight Column */}
                      <div className="w-[280px] lg:w-[320px] shrink-0 text-left">
                        <h3 className="font-heading font-black text-2xl lg:text-[26px] text-[#0d0f14] leading-tight tracking-tight">
                          {menu.spotlight.title}
                        </h3>
                        <p className="mt-3 text-xs sm:text-[13px] text-gray-600 leading-relaxed font-sans">
                          {menu.spotlight.description}
                        </p>
                        <div className="mt-6">
                          <Link
                            href={menu.spotlight.ctaHref}
                            onClick={() => setActiveDropdown(null)}
                            className="group/pill inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#0d0f14] text-xs font-bold text-[#0d0f14] hover:bg-[#0d0f14] hover:text-white hover:border-[#0d0f14] transition-all duration-300 ease-out tracking-wide font-heading shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                          >
                            <span>{menu.spotlight.ctaText}</span>
                            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/pill:translate-x-1" />
                          </Link>
                        </div>
                      </div>

                      {/* Subtle Vertical Divider Line */}
                      <div className="w-px bg-gray-200/80 self-stretch min-h-[160px]" aria-hidden="true" />

                      {/* Right Category Columns with Smooth Minimalist Card Hover */}
                      <div
                        className={`flex-1 grid gap-6 lg:gap-8 text-left ${
                          menu.columns.length === 4
                            ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
                            : "grid-cols-1 md:grid-cols-3"
                        }`}
                      >
                        {menu.columns.map((col) => (
                          <Link
                            key={col.title}
                            href={col.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group/col relative block p-3.5 -m-3.5 rounded-xl transition-all duration-300 ease-out hover:bg-red-50/40 hover:shadow-xs hover:-translate-y-0.5"
                          >
                            {/* Minimalist vertical red accent line on hover */}
                            <span
                              className="absolute left-0 top-3.5 bottom-3.5 w-1 rounded-full bg-[#e6000a] opacity-0 scale-y-0 group-hover/col:opacity-100 group-hover/col:scale-y-100 transition-all duration-300 ease-out origin-center"
                              aria-hidden="true"
                            />

                            <div className="flex items-center gap-1.5 text-sm lg:text-[15px] font-black font-heading text-[#0d0f14] group-hover/col:text-[#e6000a] transition-all duration-300 ease-out group-hover/col:translate-x-1.5">
                              <span>{col.title}</span>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover/col:text-[#e6000a] group-hover/col:translate-x-1 transition-all duration-300 ease-out shrink-0" />
                            </div>
                            <p className="mt-2 text-xs text-gray-500 leading-relaxed group-hover/col:text-gray-800 group-hover/col:translate-x-1.5 transition-all duration-300 ease-out font-sans">
                              {col.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Drawer Menu with Smooth Slide Animation */}
        {mobileDrawerOpen && (
          <div className="xl:hidden bg-white px-6 py-5 border-t border-gray-200 text-[#0d0f14] text-sm font-bold space-y-2 animate-mobile-drawer shadow-xl max-h-[80vh] overflow-y-auto">
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
