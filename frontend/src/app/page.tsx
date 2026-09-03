"use client";

import React from "react";
import AosInit from "../components/AosInit";
import JaagoNavbar from "../components/JaagoNavbar";
import JaagoHero from "../components/JaagoHero";
import JaagoSponsorChild from "../components/JaagoSponsorChild";
import JaagoFocusAreas from "../components/JaagoFocusAreas";
import JaagoVolunteerism from "../components/JaagoVolunteerism";
import JaagoNewsArticles from "../components/JaagoNewsArticles";
import JaagoFooter from "../components/JaagoFooter";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans antialiased overflow-x-hidden">
      {/* 0. AOS (Animate On Scroll) Initializer */}
      <AosInit />

      {/* 1. Exact JAAGO Navbar */}
      <JaagoNavbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Exact JAAGO Hero Slider & Quotes with AOS */}
        <JaagoHero />

        {/* 3. Exact JAAGO Sponsor a Child Program & 1100 Unsponsored Children with Count-Up */}
        <JaagoSponsorChild />

        {/* 4. Exact JAAGO Our Focus Areas (6 Cards with Sweep & Staggered AOS) */}
        <JaagoFocusAreas />

        {/* 5. Exact JAAGO Volunteerism & Overlapping Yellow Banner with Zoom-Out-Up & Count-Up */}
        <JaagoVolunteerism />

        {/* 6. Exact JAAGO News & Articles with Dashed Borders & Staggered Fade-Up */}
        <JaagoNewsArticles />
      </main>

      {/* 7. Exact JAAGO 3-Column Footer & Copyright */}
      <JaagoFooter />
    </div>
  );
}
