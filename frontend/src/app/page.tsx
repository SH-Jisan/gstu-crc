"use client";

import React from "react";
import AosInit from "../components/AosInit";
import JaagoNavbar from "../components/JaagoNavbar";
import UnifiedHeroSection from "../components/UnifiedHeroSection";
import StatsCounterBar from "../components/StatsCounterBar";
import JaagoSponsorChild from "../components/JaagoSponsorChild";
import JaagoFocusAreas from "../components/JaagoFocusAreas";
import RecentActivitiesSection from "../components/RecentActivitiesSection";
import StoriesSection from "../components/StoriesSection";
import JaagoVolunteerism from "../components/JaagoVolunteerism";
import PartnersSection from "../components/PartnersSection";
import JaagoFooter from "../components/JaagoFooter";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased">
      {/* 0. AOS (Animate On Scroll) Initializer */}
      <AosInit />

      {/* 1. Floating Capsule Navbar with Dropdowns & Search */}
      <JaagoNavbar />

      {/* Main Content Sections: Blending Frontend & CRC Loveable */}
      <main className="flex-grow">
        {/* 2. Unified Hero: Official CRC Banner + Mission + Real Photo Mosaic */}
        <UnifiedHeroSection />

        {/* 3. 4-Key Metrics Counter Bar (Children, Volunteers, Branches, Drives) */}
        <StatsCounterBar />

        {/* 4. Sponsor a Child Program with Live Count-Up */}
        <JaagoSponsorChild />

        {/* 5. 6 Core Focus Areas with Hover Sweeps */}
        <JaagoFocusAreas />

        {/* 6. Recent Field Activities & Action Updates */}
        <RecentActivitiesSection />

        {/* 7. Voices from the Street: Real Transformation Stories */}
        <StoriesSection />

        {/* 8. Volunteerism at CRC & University Student Impact */}
        <JaagoVolunteerism />

        {/* 9. Institutional Collaborations & Partners */}
        <PartnersSection />
      </main>

      {/* 10. Comprehensive Footer */}
      <JaagoFooter />
    </div>
  );
}
