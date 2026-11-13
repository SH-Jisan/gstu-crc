"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronRight, Menu, X, ChevronDown } from "lucide-react";
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
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Automatically reset open drawers and dropdowns when navigating between routes
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileDrawerOpen(false);
    setExpandedMobileItem(null);
    setActiveDropdown(null);
  }
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [drawerHeight, setDrawerHeight] = useState<number | null>(null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isMegaOpen = Boolean(activeDropdown && megaMenus[activeDropdown]);
  const activeMegaKey = (activeDropdown && megaMenus[activeDropdown]) ? activeDropdown : displayedMenuKey;
  const activeIdx = megaMenuKeys.indexOf(activeMegaKey as (typeof megaMenuKeys)[number]) !== -1
    ? megaMenuKeys.indexOf(activeMegaKey as (typeof megaMenuKeys)[number])
    : 0;
  const currentMegaMenu = megaMenus[activeMegaKey] || null;

  // Measure content height for buttery smooth dynamic height animation between tabs
  useEffect(() => {
    if (activeMegaKey && contentRefs.current[activeMegaKey]) {
      const el = contentRefs.current[activeMegaKey];
      if (el) {
        setDrawerHeight(el.offsetHeight);
      }
    }
  }, [activeMegaKey, isMegaOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (activeMegaKey && contentRefs.current[activeMegaKey]) {
        const el = contentRefs.current[activeMegaKey];
        if (el) {
          setDrawerHeight(el.offsetHeight);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeMegaKey]);

  // Prevent background scroll on mobile when drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileDrawerOpen]);

  const isOverflowingViewport = Boolean(
    drawerHeight &&
    typeof window !== "undefined" &&
    drawerHeight > window.innerHeight - 90
  );

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

  const handleDesktopNavClick = (e: React.MouseEvent, id?: string) => {
    const hasMega = Boolean(id && megaMenus[id]);
    if (hasMega) {
      // Toggle dropdown on click/touch for laptops and hybrid devices
      if (activeDropdown !== id) {
        e.preventDefault();
        handleMouseEnterItem(id || null);
      }
    }
  };

  const toggleMobileAccordion = (label: string) => {
    setExpandedMobileItem((prev) => (prev === label ? null : label));
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

  // Dynamically synchronize the fixed navbar stack height to CSS variable --navbar-height
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty("--navbar-height", `${height}px`);
      }
    };
    updateNavbarHeight();
    const t1 = setTimeout(updateNavbarHeight, 150);
    const t2 = setTimeout(updateNavbarHeight, 350);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isSticky]);

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

    const handleResize = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${navRef.current.offsetHeight}px`
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);
    handleScroll();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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
          isSticky ? "py-1.5 sm:py-2 shadow-xl" : "py-2 sm:py-3 shadow-md"
        }`}
      >
        <div className="max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 sm:gap-3 xl:gap-4 font-sans">
          {/* Brand Identity: Official CRC Logo + 2-line Text */}
          <Link href="/" className="group flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <div className="relative size-8 sm:size-10 shrink-0 transition-transform duration-300 group-hover:scale-105 active:scale-95 drop-shadow-sm">
              <Image
                src="/logo/logo-navbar.png"
                alt="Come For Road Child (CRC) Official Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain rounded-full"
                priority
              />
            </div>
            <span className="flex flex-col text-left leading-tight">
              <span className="block font-heading text-xs xs:text-sm sm:text-base font-black text-[#0d0f14] group-hover:text-[#e6000a] transition-colors tracking-tight whitespace-nowrap">
                Come For Road Child
              </span>
              <span className="block text-[9px] sm:text-[11px] font-bold tracking-[0.18em] text-gray-500 uppercase mt-0.5 whitespace-nowrap">
                GSTU BRANCH
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links (Single line, strictly whitespace-nowrap) */}
          <nav className="hidden xl:flex items-center gap-0 2xl:gap-1.5 shrink-0">
            {navItems.map((item) => {
              const hasMega = Boolean(item.id && megaMenus[item.id]);
              const isCurrentRoute =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              const isActive = activeDropdown === item.id || (!activeDropdown && isCurrentRoute);
              return (
                <div
                  key={item.label}
                  className="group/nav relative py-2"
                  onMouseEnter={() => (hasMega ? handleMouseEnterItem(item.id || null) : handleMouseEnterItem(null))}
                  onMouseLeave={handleMouseLeaveItem}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleDesktopNavClick(e, item.id)}
                    className={`relative block whitespace-nowrap px-1.5 xl:px-2 2xl:px-3 py-1.5 text-xs xl:text-[12px] 2xl:text-[13.5px] font-bold transition-colors duration-200 ${
                      isActive ? "text-[#e6000a]" : "text-[#0d0f14] hover:text-[#e6000a]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Smooth expanding underline indicator */}
                    <span
                      className={`absolute bottom-0 left-1.5 right-1.5 2xl:left-2 2xl:right-2 h-[2.5px] bg-[#e6000a] rounded-full transition-all duration-300 ease-out origin-left ${
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
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Search Popover Button */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search CRC Website"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-[#e6000a] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Search Box Popover */}
              {searchOpen && (
                <div className="absolute right-0 top-11 sm:top-14 w-60 sm:w-72 max-w-[calc(100vw-24px)] bg-white rounded-xl shadow-2xl p-3 border border-gray-200 z-50 animate-popover-in">
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                    <Search className="w-4 h-4 text-gray-400 shrink-0" />
                    <input
                      type="text"
                      placeholder="Search CRC programs..."
                      className="bg-transparent border-none text-xs text-gray-800 focus:outline-none w-full"
                      autoFocus
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer shrink-0"
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
              className="hidden min-[360px]:inline-flex bg-[#e6000a] hover:bg-[#a20002] text-white font-heading font-bold text-xs sm:text-sm tracking-wide px-3 sm:px-5 2xl:px-6 py-1.5 sm:py-2.5 rounded shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shrink-0 whitespace-nowrap"
            >
              Donate
            </Link>

            {/* Mobile Drawer Trigger (Visible below XL) with Smooth Icon Morph */}
            <div className="xl:hidden shrink-0">
              <button
                onClick={() => {
                  setMobileDrawerOpen(!mobileDrawerOpen);
                  if (!mobileDrawerOpen && searchOpen) setSearchOpen(false);
                }}
                className="relative w-9 h-9 sm:w-10 sm:h-10 text-gray-800 hover:text-[#e6000a] hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center cursor-pointer active:scale-95"
                aria-label="Toggle navigation menu"
              >
                <Menu
                  className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ease-out ${
                    mobileDrawerOpen
                      ? "opacity-0 rotate-90 scale-75 pointer-events-none"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ease-out ${
                    mobileDrawerOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-75 pointer-events-none"
                  }`}
                />
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
            <div
              style={{
                height: isMegaOpen && drawerHeight ? `${drawerHeight}px` : undefined,
              }}
              className={`w-full bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border-b border-gray-200 mega-menu-drawer max-h-[calc(100vh-90px)] overflow-x-hidden ${
                isOverflowingViewport ? "overflow-y-auto" : "overflow-hidden"
              }`}
            >
              <div className="relative w-full">
                {megaMenuKeys.map((key, index) => {
                  const menu = megaMenus[key];
                  const isCurrent = key === activeMegaKey;
                  const isBefore = index < activeIdx;
                  const translateClass = isCurrent
                    ? "relative translate-x-0 opacity-100 pointer-events-auto visible"
                    : isBefore
                    ? "absolute top-0 left-0 right-0 -translate-x-6 opacity-0 pointer-events-none invisible"
                    : "absolute top-0 left-0 right-0 translate-x-6 opacity-0 pointer-events-none invisible";

                  return (
                    <div
                      key={key}
                      ref={(el) => {
                        contentRefs.current[key] = el;
                      }}
                      className={`w-full max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 lg:py-4.5 flex items-center gap-8 lg:gap-12 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${translateClass}`}
                    >
                      {/* Left Spotlight Column (Vertically centered) */}
                      <div className="w-[280px] lg:w-[320px] shrink-0 text-left self-center my-auto">
                        <h3 className="font-heading font-black text-xl lg:text-[23px] text-[#0d0f14] leading-tight tracking-tight">
                          {menu.spotlight.title}
                        </h3>
                        <p className="mt-2 text-[13px] text-gray-600 leading-relaxed font-sans">
                          {menu.spotlight.description}
                        </p>
                        <div className="mt-4">
                          <Link
                            href={menu.spotlight.ctaHref}
                            onClick={() => setActiveDropdown(null)}
                            className="group/pill inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#0d0f14] text-xs sm:text-[12.5px] font-bold text-[#0d0f14] hover:bg-[#0d0f14] hover:text-white hover:border-[#0d0f14] transition-all duration-300 ease-out tracking-wide font-heading shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                          >
                            <span>{menu.spotlight.ctaText}</span>
                            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/pill:translate-x-1" />
                          </Link>
                        </div>
                      </div>

                      {/* Vertical Divider Line (CRC Red) */}
                      <div className="w-px bg-[#e6000a] self-stretch min-h-[140px]" aria-hidden="true" />

                      {/* Right Category Area */}
                      {menu.columns.some((col) => col.items && col.items.length > 0) ? (
                        /* Stacked Category Rows with Horizontal Sub-Options (Full Signature UI Preserved with Zero Overlap) */
                        <div className="flex-1 flex flex-col space-y-1 text-left">
                          {menu.columns.map((col) => (
                            <div
                              key={col.title}
                              className="group/col relative flex flex-col py-1.5 px-2.5 rounded-xl transition-all duration-300 ease-out hover:bg-red-50/40 hover:shadow-xs hover:-translate-y-0.5"
                            >
                              {/* Signature minimalist vertical red accent line on hover */}
                              <span
                                className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-[#e6000a] opacity-0 scale-y-0 group-hover/col:opacity-100 group-hover/col:scale-y-100 transition-all duration-300 ease-out origin-center"
                                aria-hidden="true"
                              />

                              {/* Category Header */}
                              <Link
                                href={col.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-1.5 text-[14px] lg:text-[15px] font-black font-heading text-[#0d0f14] group-hover/col:text-[#e6000a] transition-all duration-300 ease-out group-hover/col:translate-x-1.5 mb-1 w-fit"
                              >
                                <span>{col.title}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover/col:text-[#e6000a] group-hover/col:translate-x-1 transition-all duration-300 ease-out shrink-0" />
                              </Link>

                              {/* Sub-links arranged horizontally (pasha-pashi) */}
                              <ul
                                className={`grid gap-x-4 gap-y-0.5 pl-2 pt-0.5 group-hover/col:translate-x-1 transition-all duration-300 ease-out ${
                                  col.items && col.items.length === 5
                                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
                                    : col.items && col.items.length === 3
                                    ? "grid-cols-1 md:grid-cols-3 max-w-5xl"
                                    : "grid-cols-1 sm:grid-cols-2 max-w-3xl"
                                }`}
                              >
                                {col.items?.map((subItem) => (
                                  <li key={subItem.label}>
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className={`group/sub flex items-start justify-between py-0.5 px-1.5 rounded-md transition-all duration-200 hover:bg-red-50/50 ${
                                        subItem.isSubItem ? "ml-3 text-gray-600" : "text-gray-800"
                                      }`}
                                    >
                                      <div className="flex items-start gap-1.5">
                                        <span
                                          className={`rounded-full transition-all duration-200 mt-1.5 shrink-0 ${
                                            subItem.isSubItem
                                              ? "w-1.5 h-1.5 bg-gray-300 group-hover/sub:bg-[#e6000a] group-hover/sub:scale-125"
                                              : "w-2 h-2 bg-gray-400 group-hover/sub:bg-[#e6000a] group-hover/sub:scale-125"
                                          }`}
                                          aria-hidden="true"
                                        />
                                        <div className="flex flex-col text-left">
                                          <span
                                            className={`text-[14px] leading-tight transition-colors duration-200 ${
                                              subItem.isSubItem
                                                ? "font-medium text-gray-600 group-hover/sub:text-[#e6000a] group-hover/sub:font-semibold"
                                                : "font-semibold text-gray-800 group-hover/sub:text-[#e6000a] group-hover/sub:font-bold"
                                            }`}
                                          >
                                            {subItem.label}
                                          </span>
                                          {subItem.description && (
                                            <span className="text-[12px] text-gray-500 leading-snug group-hover/sub:text-gray-700 mt-0.5 font-sans font-normal">
                                              {subItem.description}
                                            </span>
                                          )}
                                        </div>
                                      </div>

                                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover/sub:opacity-100 group-hover/sub:text-[#e6000a] group-hover/sub:translate-x-0.5 transition-all duration-200 shrink-0 ml-1 mt-1" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Right Category Columns for Menus without sub-items */
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
                              className="group/col relative block p-3 rounded-xl transition-all duration-300 ease-out hover:bg-red-50/40 hover:shadow-xs hover:-translate-y-0.5"
                            >
                              <span
                                className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-[#e6000a] opacity-0 scale-y-0 group-hover/col:opacity-100 group-hover/col:scale-y-100 transition-all duration-300 ease-out origin-center"
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
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Soft Backdrop Overlay for Mobile Drawer with Smooth Fade Transitions */}
        <div
          className={`xl:hidden fixed inset-0 top-[var(--navbar-height,94px)] bg-black/40 backdrop-blur-xs z-30 transition-all duration-300 ease-out ${
            mobileDrawerOpen
              ? "opacity-100 pointer-events-auto visible"
              : "opacity-0 pointer-events-none invisible"
          }`}
          onClick={() => {
            setMobileDrawerOpen(false);
            setExpandedMobileItem(null);
          }}
          aria-hidden="true"
        />

        {/* Mobile Drawer Menu with Smooth Open & Closing Curtain Transitions */}
        <div
          className={`xl:hidden mobile-drawer-wrapper ${
            mobileDrawerOpen ? "is-open" : ""
          }`}
        >
          <div className="mobile-drawer-inner">
            <div className="mobile-drawer-content bg-white px-4 sm:px-6 py-4 sm:py-5 border-t border-gray-200 text-[#0d0f14] text-sm font-bold shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto divide-y divide-gray-100">
              <div className="space-y-1 pb-3">
                {navItems.map((item) => {
                  const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                  const isExpanded = expandedMobileItem === item.label;
                  const isCurrentRoute =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(item.href);

                  return (
                    <div key={item.label} className="py-1">
                      {hasDropdown ? (
                        <div>
                          {/* Header Row with Label + Animated Chevron Toggle Button */}
                          <div className="flex items-center justify-between py-1 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <Link
                              href={item.href}
                              onClick={() => {
                                setMobileDrawerOpen(false);
                                setExpandedMobileItem(null);
                              }}
                              className={`font-heading text-sm sm:text-base font-bold tracking-tight transition-colors hover:text-[#e6000a] ${
                                isCurrentRoute ? "text-[#e6000a]" : "text-gray-900"
                              }`}
                            >
                              {item.label}
                            </Link>
                            <button
                              type="button"
                              onClick={() => toggleMobileAccordion(item.label)}
                              aria-expanded={isExpanded}
                              aria-label={`Toggle ${item.label} dropdown`}
                              className={`p-2.5 rounded-lg text-gray-500 hover:text-[#e6000a] hover:bg-red-50/70 active:scale-90 transition-all duration-200 cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center ${
                                isExpanded ? "text-[#e6000a] bg-red-50/80" : ""
                              }`}
                            >
                              <ChevronDown
                                className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 ease-out ${
                                  isExpanded ? "rotate-180 text-[#e6000a]" : "rotate-0"
                                }`}
                              />
                            </button>
                          </div>

                          {/* Smooth Animated Accordion Dropdown (CSS Grid 0fr to 1fr with inner glide) */}
                          <div
                            className={`accordion-dropdown ${
                              isExpanded ? "is-expanded" : ""
                            }`}
                          >
                            <div className="accordion-dropdown-inner">
                              <div className="pt-1.5 pb-0.5">
                                <div className="accordion-dropdown-content pl-2.5 pr-2 py-2 space-y-1 bg-red-50/30 rounded-xl border border-red-100/60">
                                  {/* Overview Main Link */}
                                  <Link
                                    href={item.href}
                                    onClick={() => {
                                      setMobileDrawerOpen(false);
                                      setExpandedMobileItem(null);
                                    }}
                                    className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-bold text-[#e6000a] bg-white border border-red-200/80 hover:bg-red-50 shadow-xs transition-colors"
                                  >
                                    <span>Explore {item.label} Overview</span>
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  </Link>

                                  {/* Sub-items in responsive 1-col (mobile) or 2-col (tablet) */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                                    {item.dropdown?.map((sub) => {
                                      const isSubActive = pathname === sub.href;
                                      return (
                                        <Link
                                          key={sub.label}
                                          href={sub.href}
                                          onClick={() => {
                                            setMobileDrawerOpen(false);
                                            setExpandedMobileItem(null);
                                          }}
                                          className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-[0.98] ${
                                            isSubActive
                                              ? "text-[#e6000a] bg-white shadow-xs font-bold"
                                              : "text-gray-700 hover:text-[#e6000a] hover:bg-white/90"
                                          }`}
                                        >
                                          <span className="flex items-center gap-2 truncate">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#e6000a] shrink-0" />
                                            <span className="truncate">{sub.label}</span>
                                          </span>
                                          <ChevronRight className="w-3 h-3 text-gray-400 shrink-0 ml-1" />
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Direct link without dropdown */
                        <Link
                          href={item.href}
                          onClick={() => {
                            setMobileDrawerOpen(false);
                            setExpandedMobileItem(null);
                          }}
                          className={`flex items-center justify-between py-2 px-2 rounded-lg text-sm sm:text-base font-heading font-bold transition-all hover:text-[#e6000a] hover:translate-x-1 ${
                            isCurrentRoute ? "text-[#e6000a]" : "text-gray-900"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Bottom CTA */}
              <div className="pt-4">
                <Link
                  href="/#sponsor"
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    setExpandedMobileItem(null);
                  }}
                  className="block text-center py-3 bg-[#e6000a] text-white font-heading font-bold text-sm sm:text-base rounded-lg shadow-lg hover:bg-[#a20002] active:scale-[0.98] transition-all"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
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
          <div className="relative z-10 bg-[#f4f2ee]/95 backdrop-blur-md border-b-2 border-[#e6000a] shadow-xs transition-colors">
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
