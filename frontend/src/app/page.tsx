"use client";

import React from "react";
import JaagoNavbar from "../components/JaagoNavbar";
import JaagoHero from "../components/JaagoHero";
import JaagoSponsorChild from "../components/JaagoSponsorChild";
import JaagoFocusAreas from "../components/JaagoFocusAreas";
import JaagoVolunteerism from "../components/JaagoVolunteerism";
import JaagoNewsArticles from "../components/JaagoNewsArticles";
import JaagoFooter from "../components/JaagoFooter";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      {/* 1. Exact JAAGO Navbar */}
      <JaagoNavbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Exact JAAGO Hero Slider & Quotes */}
        <JaagoHero />

        {/* 3. Exact JAAGO Sponsor a Child Program & 1100 Unsponsored Children */}
        <JaagoSponsorChild />

        {/* 4. Exact JAAGO Our Focus Areas (6 Cards) */}
        <JaagoFocusAreas />

        {/* 5. Exact JAAGO Volunteerism & Overlapping Yellow Banner */}
        <JaagoVolunteerism />

        {/* 6. Exact JAAGO News & Articles with Dashed Borders */}
        <JaagoNewsArticles />
      </main>

      {/* 7. Exact JAAGO 3-Column Footer & Copyright */}
      <JaagoFooter />
    </div>
  );
}
