"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";
import {
  megaMenus,
  megaMenuKeys,
  defaultRouteBreadcrumbMap,
} from "@/data/navigation";
import { SEARCH_ITEMS } from "@/data/searchData";

import NavbarTopBar from "./navbar/NavbarTopBar";
import NavBrand from "./navbar/NavBrand";
import DesktopNavLinks from "./navbar/DesktopNavLinks";
import SearchDropdown from "./navbar/SearchDropdown";
import DesktopMegaMenu from "./navbar/DesktopMegaMenu";
import MobileNavDrawer from "./navbar/MobileNavDrawer";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Automatically reset open drawers and dropdowns when navigating between routes
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileDrawerOpen(false);
    setExpandedMobileItem(null);
    setActiveDropdown(null);
    setSearchOpen(false);
    setSearchQuery("");
  }

  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [drawerHeight, setDrawerHeight] = useState<number | null>(null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isMegaOpen = Boolean(activeDropdown && megaMenus[activeDropdown]);
  const activeMegaKey =
    activeDropdown && megaMenus[activeDropdown] ? activeDropdown : displayedMenuKey;
  const activeIdx =
    megaMenuKeys.indexOf(activeMegaKey as (typeof megaMenuKeys)[number]) !== -1
      ? megaMenuKeys.indexOf(activeMegaKey as (typeof megaMenuKeys)[number])
      : 0;
  const currentMegaMenu = megaMenus[activeMegaKey] || null;

  // Close search dropdown cleanly
  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  // Toggle search dropdown with mutual exclusivity
  const toggleSearch = () => {
    setSearchOpen((prev) => {
      const next = !prev;
      if (next) {
        setActiveDropdown(null);
        setMobileDrawerOpen(false);
        setExpandedMobileItem(null);
      } else {
        setSearchQuery("");
      }
      return next;
    });
  };

  // Auto-focus search input when opened
  useEffect(() => {
    if (!searchOpen) return;
    const timer = setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, [searchOpen]);

  // Live search filtering
  const filteredResults = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();
    if (!trimmed) return [];
    return SEARCH_ITEMS.filter((item) => {
      return (
        item.title.toLowerCase().includes(trimmed) ||
        item.description.toLowerCase().includes(trimmed) ||
        item.category.toLowerCase().includes(trimmed) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(trimmed))
      );
    });
  }, [searchQuery]);

  // Measure content height ONLY on desktop (xl >= 1280px) where mega-menu is visible
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1280) return;
    if (activeMegaKey && contentRefs.current[activeMegaKey]) {
      const el = contentRefs.current[activeMegaKey];
      if (el) {
        setDrawerHeight(el.offsetHeight);
      }
    }
  }, [activeMegaKey, isMegaOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) return;
      if (activeMegaKey && contentRefs.current[activeMegaKey]) {
        const el = contentRefs.current[activeMegaKey];
        if (el) {
          setDrawerHeight(el.offsetHeight);
        }
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [activeMegaKey]);

  // Prevent background scroll on mobile when drawer is open
  useEffect(() => {
    if (!mobileDrawerOpen) return;
    document.body.style.overflow = "hidden";
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
    if (searchOpen) setSearchOpen(false);
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
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleNavClick = (e: React.MouseEvent, id?: string) => {
    if (id && megaMenus[id]) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileAccordion = (label: string) => {
    setExpandedMobileItem((prev) => (prev === label ? null : label));
  };

  // Sticky header state detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to dismiss menus and search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("header") || navRef.current?.contains(target)) {
        return;
      }
      setActiveDropdown(null);
      setMobileDrawerOpen(false);
      setExpandedMobileItem(null);
      setSearchOpen(false);
      setSearchQuery("");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileDrawerOpen(false);
        setExpandedMobileItem(null);
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-white select-none transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]"
    >
      {/* 1. Global Utility Top Bar */}
      <NavbarTopBar isSticky={isSticky} />

      {/* 2. Primary Navigation Bar */}
      <div className="relative border-b-2 border-[#e6000a] bg-white">
        <div className="max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-[60px] sm:h-[68px] 2xl:h-[72px] flex items-center justify-between gap-1 xl:gap-2">
          {/* Logo & Brand Identity */}
          <NavBrand />

          {/* Desktop Navigation Links */}
          <DesktopNavLinks
            pathname={pathname}
            activeDropdown={activeDropdown}
            onMouseEnterItem={handleMouseEnterItem}
            onMouseLeaveItem={handleMouseLeaveItem}
            onNavClick={handleNavClick}
          />

          {/* Right Action Cluster (Search, Donate, Mobile Menu Trigger) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleSearch();
              }}
              className={`p-2 rounded-full transition-colors flex items-center justify-center cursor-pointer active:scale-95 touch-manipulation select-none ${
                searchOpen
                  ? "bg-red-50 text-[#e6000a]"
                  : "text-gray-700 hover:text-[#e6000a] hover:bg-gray-100"
              }`}
              aria-label={searchOpen ? "Close search bar" : "Open search bar"}
              aria-expanded={searchOpen}
            >
              <Search
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 pointer-events-none ${
                  searchOpen ? "scale-110 text-[#e6000a]" : ""
                }`}
              />
            </button>

            {/* Donate CTA Button */}
            <Link
              href="/#sponsor"
              className="hidden min-[360px]:inline-flex bg-[#e6000a] hover:bg-[#a20002] text-white font-heading font-bold text-xs sm:text-sm tracking-wide px-3 sm:px-5 2xl:px-6 py-1.5 sm:py-2.5 rounded shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shrink-0 whitespace-nowrap"
            >
              Donate
            </Link>

            {/* Mobile Drawer Trigger */}
            <div className="xl:hidden shrink-0">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileDrawerOpen((prev) => {
                    const next = !prev;
                    if (next && searchOpen) setSearchOpen(false);
                    return next;
                  });
                }}
                className="relative w-9 h-9 sm:w-10 sm:h-10 text-gray-800 hover:text-[#e6000a] hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center cursor-pointer active:scale-95 touch-manipulation select-none"
                aria-label="Toggle navigation menu"
              >
                <Menu
                  className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ease-out pointer-events-none ${
                    mobileDrawerOpen
                      ? "opacity-0 rotate-90 scale-75 pointer-events-none"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`w-5 h-5 sm:w-6 sm:h-6 absolute transition-all duration-300 ease-out pointer-events-none ${
                    mobileDrawerOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-75 pointer-events-none"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Simple Search Dropdown Panel */}
        <SearchDropdown
          searchOpen={searchOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          closeSearch={closeSearch}
          filteredResults={filteredResults}
          searchInputRef={searchInputRef}
        />

        {/* Full-Width Desktop Mega Dropdown Panel */}
        <DesktopMegaMenu
          currentMegaMenu={currentMegaMenu}
          isMegaOpen={isMegaOpen}
          drawerHeight={drawerHeight}
          isOverflowingViewport={isOverflowingViewport}
          activeMegaKey={activeMegaKey}
          activeIdx={activeIdx}
          contentRefs={contentRefs}
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
          onClose={() => setActiveDropdown(null)}
        />

        {/* Mobile Navigation Drawer */}
        <MobileNavDrawer
          mobileDrawerOpen={mobileDrawerOpen}
          setMobileDrawerOpen={setMobileDrawerOpen}
          expandedMobileItem={expandedMobileItem}
          setExpandedMobileItem={setExpandedMobileItem}
          toggleMobileAccordion={toggleMobileAccordion}
          pathname={pathname}
        />
      </div>

      {/* 3. Sub-Navbar Breadcrumb Strip */}
      {(() => {
        const activeBreadcrumbs =
          breadcrumbs !== undefined
            ? breadcrumbs
            : pathname && pathname !== "/"
            ? defaultRouteBreadcrumbMap[pathname] || [
                {
                  label:
                    pathname
                      .replace(/^\//, "")
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase()) || "Page",
                },
              ]
            : null;

        if (!activeBreadcrumbs || activeBreadcrumbs.length === 0) return null;

        return (
          <div className="relative z-10 bg-[#f4f2ee] md:bg-[#f4f2ee]/95 md:backdrop-blur-md border-b-2 border-[#e6000a] shadow-xs transform-gpu transition-colors">
            <div className="max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
              <Breadcrumb items={activeBreadcrumbs} variant="bar" />
              <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                GSTU Campus · Estd 2016
              </span>
            </div>
          </div>
        );
      })()}

      {/* Soft Blurred Backdrop Overlay for Desktop Mega Menu */}
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

      {/* Soft Blurred Backdrop Overlay for Search Dropdown */}
      <div
        className={`fixed inset-0 top-0 w-screen h-screen -z-10 transition-all duration-300 ease-out touch-manipulation cursor-pointer ${
          searchOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(1.5px)",
          WebkitBackdropFilter: "blur(1.5px)",
        }}
        onClick={closeSearch}
        aria-hidden="true"
      />
    </header>
  );
}
