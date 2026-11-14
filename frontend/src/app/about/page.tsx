"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

import { NAV_PANEL_ITEMS, ALL_NAV_IDS } from "@/components/about/aboutConstants";
import AboutMobileJumpBar from "@/components/about/AboutMobileJumpBar";
import AboutSidebar from "@/components/about/AboutSidebar";
import AboutPrinciplesSection from "@/components/about/AboutPrinciplesSection";
import AboutVisionSection from "@/components/about/AboutVisionSection";
import AboutObjectivesSection from "@/components/about/AboutObjectivesSection";
import AboutModesOfActionSection from "@/components/about/AboutModesOfActionSection";
import AboutAchievementsSection from "@/components/about/AboutAchievementsSection";
import AboutInstitutionalChapters from "@/components/about/AboutInstitutionalChapters";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string>("principles");
  const [copied, setCopied] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // References for mobile / tablet horizontal Jump To navigation auto-scrolling
  const jumpNavScrollRef = useRef<HTMLDivElement>(null);
  const jumpNavButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Scrollspy: automatically highlight the section in viewport and control entrance visibility (rAF throttled)
  useEffect(() => {
    let isTicking = false;
    const handleScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsNavVisible(currentScrollY > 200);

          // Check if user has scrolled near page bottom
          const isAtBottom =
            window.innerHeight + currentScrollY >=
            document.documentElement.scrollHeight - 70;
          if (isAtBottom) {
            setActiveSection(ALL_NAV_IDS[ALL_NAV_IDS.length - 1]);
            isTicking = false;
            return;
          }

          const scrollPosition = currentScrollY + 200;
          for (let i = ALL_NAV_IDS.length - 1; i >= 0; i--) {
            const id = ALL_NAV_IDS[i];
            const element = document.getElementById(id);
            if (element) {
              const top = element.offsetTop;
              if (scrollPosition >= top) {
                setActiveSection(id);
                isTicking = false;
                return;
              }
            }
          }
          setActiveSection(ALL_NAV_IDS[0]);
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Synchronize mobile Jump To menu horizontal scroll position smoothly with active section
  useEffect(() => {
    const container = jumpNavScrollRef.current;
    if (!container) return;

    const activeItem = NAV_PANEL_ITEMS.find(
      (item) =>
        item.id === activeSection ||
        Boolean(item.subItems?.some((sub) => sub.id === activeSection))
    );
    const targetId = activeItem ? activeItem.id : activeSection;
    const button = jumpNavButtonRefs.current[targetId];

    if (button) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      const relativeButtonLeft =
        buttonRect.left - containerRect.left + container.scrollLeft;
      const targetScrollLeft =
        relativeButtonLeft - container.clientWidth / 2 + buttonRect.width / 2;

      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: "smooth",
      });
    }
  }, [activeSection]);

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
      <Navbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="Official Constitution & Operational Framework"
          title="About Come For Road Child (CRC)"
          intro="Founded on 5 June 2016 at Gopalganj Science and Technology University (GSTU), Come For Road Child (CRC) is a volunteer-led student humanitarian movement dedicated to securing fundamental rights, education, and healthcare for street children across Bangladesh."
          breadcrumbs={[{ label: "About Us" }]}
        />

        {/* Mobile / Tablet Horizontal Sticky Quick Jump Bar (< lg) */}
        <AboutMobileJumpBar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          jumpNavScrollRef={jumpNavScrollRef}
          jumpNavButtonRefs={jumpNavButtonRefs}
        />

        {/* Main Content Area with Sticky Left Sidebar */}
        <div className="max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
            {/* STICKY LEFT NAVIGATION PANEL */}
            <AboutSidebar
              isNavVisible={isNavVisible}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
              copied={copied}
              handleCopyLink={handleCopyLink}
              handlePrint={handlePrint}
            />

            {/* MAIN CONTENT COLUMN */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-16 lg:space-y-20 min-w-0">
              {/* 1. PRINCIPLES & VALUES */}
              <AboutPrinciplesSection />

              {/* 2. VISION & MISSION */}
              <AboutVisionSection />

              {/* 3. STRATEGIC OBJECTIVES */}
              <AboutObjectivesSection />

              {/* 4. MODE OF ACTION */}
              <AboutModesOfActionSection />

              {/* 5. ACHIEVEMENTS */}
              <AboutAchievementsSection />

              {/* 6. INSTITUTIONAL CHAPTERS */}
              <AboutInstitutionalChapters />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
