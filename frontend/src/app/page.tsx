"use client";

import React from "react";
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
      <Navbar />

      <main className="flex-grow">
        <UnifiedHeroSection />
        <StatsCounterBar />
        <SponsorChildSection />
        <FocusAreasSection />
        <RecentActivitiesSection />
        <StoriesSection />
        <VolunteerismSection />
        <PartnersSection />
      </main>

      <Footer />
    </div>
  );
}
