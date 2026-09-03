"use client";

import React, { useState } from "react";
import JaagoNavbar from "../components/JaagoNavbar";
import JaagoHero from "../components/JaagoHero";
import JaagoSponsorChild from "../components/JaagoSponsorChild";
import JaagoFocusAreas from "../components/JaagoFocusAreas";
import JaagoVolunteerism from "../components/JaagoVolunteerism";
import JaagoGovernanceTransparency from "../components/JaagoGovernanceTransparency";
import JaagoNewsArticles from "../components/JaagoNewsArticles";
import JaagoFooter from "../components/JaagoFooter";
import DonationModal from "../components/DonationModal";
import ReportConcernModal from "../components/ReportConcernModal";
import { Campaign } from "../data/crcMockData";

export default function HomePage() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [activeCampaign, setActiveCampaign] = useState<Campaign | undefined>(undefined);

  const handleOpenDonate = (campaign?: Campaign) => {
    setActiveCampaign(campaign);
    setDonateModalOpen(true);
  };

  const handleOpenReport = () => {
    setReportModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* 1. JAAGO-Style Navigation Bar with Floating Capsule */}
      <JaagoNavbar
        onOpenDonate={() => handleOpenDonate()}
        onOpenReport={handleOpenReport}
      />

      <main className="flex-grow">
        {/* 2. Hero Section (Uppercase Headline, Student Portrait, Yellow CTA) */}
        <JaagoHero onOpenDonate={() => handleOpenDonate()} />

        {/* 3. Signature 50/50 Split Card: Sponsor a Child Program */}
        <JaagoSponsorChild onOpenDonate={() => handleOpenDonate()} />

        {/* 4. Our Focus Areas Grid */}
        <JaagoFocusAreas />

        {/* 5. Signature Volunteerism Section (Dark Header, Floating Metrics Card, Overlapping Yellow CTA) */}
        <JaagoVolunteerism onOpenVolunteer={() => handleOpenDonate()} />

        {/* 6. Three-Tier Governance & Public Audit Center */}
        <JaagoGovernanceTransparency />

        {/* 7. News & Articles (Dashed Inner Borders, Category Badges) */}
        <JaagoNewsArticles onOpenDonate={() => handleOpenDonate()} />
      </main>

      {/* 8. JAAGO-Style 3-Column Footer */}
      <JaagoFooter />

      {/* 9. Interactive Modals */}
      <DonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        initialCampaign={activeCampaign}
      />

      <ReportConcernModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />
    </div>
  );
}
