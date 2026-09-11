"use client";

import React from "react";
import AosInit from "@/components/AosInit";
import Navbar from "@/components/Navbar";
import UnifiedHeroSection from "@/components/UnifiedHeroSection";
import StatsCounterBar from "@/components/StatsCounterBar";
import SponsorChildSection from "@/components/SponsorChildSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import RecentActivitiesSection from "@/components/RecentActivitiesSection";
import StoriesSection from "@/components/StoriesSection";
import VolunteerismSection from "@/components/VolunteerismSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased">
      {/* 0. AOS (Animate On Scroll) Initializer */}
      <AosInit />

      {/* 1. Official CRC Navigation Bar with Mega Dropdowns & Search */}
      <Navbar />

      {/* Main Content Sections: Blending Frontend & CRC Loveable */}
      <main className="flex-grow">
        {/* 2. Unified Hero: Official CRC Banner + Mission + Real Photo Mosaic */}
        <UnifiedHeroSection />

        {/* 3. 4-Key Metrics Counter Bar (Children, Volunteers, Branches, Drives) */}
        <StatsCounterBar />

        {/* 4. Sponsor a Child Program */}
        <SponsorChildSection />

        {/* 5. 5 Core Focus Areas with Hover Sweeps */}
        <FocusAreasSection />

        {/* 6. Recent Field Activities & Action Updates */}
        <RecentActivitiesSection />

        {/* 7. Voices from the Street: Real Transformation Stories */}
        <StoriesSection />

        {/* 8. Volunteerism at CRC & University Student Impact */}
        <VolunteerismSection />

        {/* 9. Institutional Collaborations & Partners */}
        <PartnersSection />
      </main>

      {/* 10. Comprehensive Footer */}
      <Footer />
    </div>
  );
}
