"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronRight, Menu, X } from "lucide-react";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";
import {
  megaMenus,
  megaMenuKeys,
  defaultRouteBreadcrumbMap,
  navItems,
} from "@/data/navigation";

interface NavbarProps {
  breadcrumbs?: BreadcrumbItem[];
}

export default function Navbar({ breadcrumbs }: NavbarProps = {}) {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [displayedMenuKey, setDisplayedMenuKey] = useState<string>("about");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    if (id && megaMenus[id]) {
      setDisplayedMenuKey(id);
    }
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

  return (
    <header
      ref={navRef}
      id="crc-navbar"
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
          {/* Brand Identity: Official CRC Logo + 2-line Text */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="relative size-10 sm:size-11 shrink-0 transition-transform duration-300 group-hover:scale-105 active:scale-95 drop-shadow-sm">
              <Image
                src="/logo/logo-navbar.png"
                alt="Come For Road Child (CRC) Official Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain rounded-full"
                priority
              />
            </div>
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
            <Link
              href="/#sponsor"
              className="bg-[#e6000a] hover:bg-[#a20002] text-white font-heading font-bold text-sm tracking-wide px-5 sm:px-6 py-2.5 rounded shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shrink-0"
            >
              Donate
            </Link>

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
            <div className="w-full bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border-b border-gray-200 mega-menu-drawer overflow-hidden">
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
                        <p className="mt-3 text-[13.5px] text-gray-600 leading-relaxed font-sans">
                          {menu.spotlight.description}
                        </p>
                        <div className="mt-6">
                          <Link
                            href={menu.spotlight.ctaHref}
                            onClick={() => setActiveDropdown(null)}
                            className="group/pill inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#0d0f14] text-xs sm:text-[13px] font-bold text-[#0d0f14] hover:bg-[#0d0f14] hover:text-white hover:border-[#0d0f14] transition-all duration-300 ease-out tracking-wide font-heading shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
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
                        {menu.columns.map((col) => {
                          if (col.items && col.items.length > 0) {
                            return (
                              <div
                                key={col.title}
                                className="group/col relative flex flex-col p-3.5 -m-3.5 rounded-xl transition-all duration-300 ease-out hover:bg-red-50/40 hover:shadow-xs hover:-translate-y-0.5"
                              >
                                {/* Minimalist vertical red accent line covering the full section height on hover */}
                                <span
                                  className="absolute left-0 top-3.5 bottom-3.5 w-1 rounded-full bg-[#e6000a] opacity-0 scale-y-0 group-hover/col:opacity-100 group-hover/col:scale-y-100 transition-all duration-300 ease-out origin-center"
                                  aria-hidden="true"
                                />

                                {/* Category Header */}
                                <Link
                                  href={col.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center gap-1.5 text-[15px] lg:text-base font-black font-heading text-[#0d0f14] group-hover/col:text-[#e6000a] transition-all duration-300 ease-out group-hover/col:translate-x-1.5 mb-2.5"
                                >
                                  <span>{col.title}</span>
                                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover/col:text-[#e6000a] group-hover/col:translate-x-1 transition-all duration-300 ease-out shrink-0" />
                                </Link>

                                {/* List of Sub-links */}
                                <ul className="space-y-0.5 pl-2.5 pt-0.5 group-hover/col:translate-x-1 transition-all duration-300 ease-out">
                                  {col.items.map((subItem) => (
                                    <li key={subItem.label}>
                                      <Link
                                        href={subItem.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className={`group/sub flex items-center justify-between py-1 px-2 -mx-1 rounded-md transition-all duration-200 hover:bg-white/80 hover:shadow-2xs ${
                                          subItem.isSubItem ? "ml-3.5 text-gray-600" : "text-gray-800"
                                        }`}
                                      >
                                        <div className="flex items-center gap-2">
                                          <span
                                            className={`rounded-full transition-all duration-200 ${
                                              subItem.isSubItem
                                                ? "w-1.5 h-1.5 bg-gray-300 group-hover/sub:bg-[#e6000a] group-hover/sub:scale-125"
                                                : "w-2 h-2 bg-gray-400 group-hover/sub:bg-[#e6000a] group-hover/sub:scale-125"
                                            }`}
                                            aria-hidden="true"
                                          />
                                          <span className={`text-[13.5px] transition-colors duration-200 ${
                                            subItem.isSubItem
                                              ? "font-medium text-gray-600 group-hover/sub:text-[#e6000a] group-hover/sub:font-semibold"
                                              : "font-semibold text-gray-800 group-hover/sub:text-[#e6000a] group-hover/sub:font-bold"
                                          }`}>
                                            {subItem.label}
                                          </span>
                                        </div>

                                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover/sub:opacity-100 group-hover/sub:text-[#e6000a] group-hover/sub:translate-x-0.5 transition-all duration-200 shrink-0 ml-1" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          }

                          return (
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

                              <div className="flex items-center gap-1.5 text-[15px] font-black font-heading text-[#0d0f14] group-hover/col:text-[#e6000a] transition-all duration-300 ease-out group-hover/col:translate-x-1.5">
                                <span>{col.title}</span>
                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/col:text-[#e6000a] group-hover/col:translate-x-1 transition-all duration-300 ease-out shrink-0" />
                              </div>
                              <p className="mt-2 text-[13px] text-gray-600 leading-relaxed group-hover/col:text-gray-900 group-hover/col:translate-x-1.5 transition-all duration-300 ease-out font-sans">
                                {col.description}
                              </p>
                            </Link>
                          );
                        })}
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
              <Link
                href="/#sponsor"
                onClick={() => setMobileDrawerOpen(false)}
                className="block text-center py-3 bg-[#e6000a] text-white font-heading font-bold rounded shadow-lg hover:bg-[#a20002]"
              >
                Donate Now
              </Link>
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

      {/* Soft Blurred Backdrop Overlay for the Page when Mega Menu is Open (No Grayscale, Pure Subtle Blur) */}
      <div
        className={`hidden xl:block fixed inset-0 top-0 w-screen h-screen -z-10 transition-all duration-300 ease-out ${
          isMegaOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(1.5px)",
          WebkitBackdropFilter: "blur(1.5px)",
        }}
        onClick={() => setActiveDropdown(null)}
        aria-hidden="true"
      />
    </header>
  );
}
