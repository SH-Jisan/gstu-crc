"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HappeningNow from "../components/HappeningNow";
import HatekhoriSchool from "../components/HatekhoriSchool";
import GovernanceSection from "../components/GovernanceSection";
import TransparencySection from "../components/TransparencySection";
import BranchesMap from "../components/BranchesMap";
import Footer from "../components/Footer";
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
    <div className="flex flex-col min-h-screen">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenDonate={() => handleOpenDonate()}
        onOpenReport={handleOpenReport}
      />

      {/* 2. Hero Showcase */}
      <main className="flex-grow">
        <HeroSection onOpenDonate={() => handleOpenDonate()} />

        {/* 3. Happening Now (Module 1) */}
        <HappeningNow onOpenDonate={handleOpenDonate} />

        {/* 4. Hatekhori School (Module 3) */}
        <HatekhoriSchool onOpenDonate={() => handleOpenDonate()} />

        {/* 5. Three-Tier Governance (Module 4) */}
        <GovernanceSection />

        {/* 6. Financial Transparency & Audits (Module 6) */}
        <TransparencySection />

        {/* 7. Branch Network Explorer (Module 3) */}
        <BranchesMap />
      </main>

      {/* 8. Comprehensive Footer */}
      <Footer />

      {/* 9. Interactive Modals (Client Experience) */}
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
