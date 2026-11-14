"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { MOCK_COUNCILS, CouncilMember } from "@/data/crcMockData";

import MembersMetricsBar from "@/components/members/MembersMetricsBar";
import MembersFilterBar from "@/components/members/MembersFilterBar";
import MemberCard from "@/components/members/MemberCard";
import MemberDetailModal from "@/components/members/MemberDetailModal";
import MembersJoinCta from "@/components/members/MembersJoinCta";

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlood, setSelectedBlood] = useState("All");
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);

  // Close modal on ESC key and lock body scroll safely
  useEffect(() => {
    if (!selectedMember) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  // Distinct branches for filter
  const branchOptions = useMemo(() => {
    const branches = new Set<string>();
    MOCK_COUNCILS.forEach((m) => {
      if (m.branch.includes("GSTU")) branches.add("GSTU");
      if (m.branch.includes("Gopalganj")) branches.add("Gopalganj");
      if (m.branch.includes("Tungipara")) branches.add("Tungipara");
      if (m.branch.includes("Kotalipara")) branches.add("Kotalipara");
      if (m.branch.includes("Barishal")) branches.add("Barishal");
    });
    return ["All", ...Array.from(branches)];
  }, []);

  // Filtered members list
  const filteredMembers = useMemo(() => {
    return MOCK_COUNCILS.filter((member) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.designation.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query) ||
        member.branch.toLowerCase().includes(query) ||
        member.committee.toLowerCase().includes(query) ||
        member.bloodGroup.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" || member.category === selectedCategory;

      const matchesBlood =
        selectedBlood === "All" || member.bloodGroup === selectedBlood;

      const matchesBranch =
        selectedBranch === "All" || member.branch.includes(selectedBranch);

      return matchesSearch && matchesCategory && matchesBlood && matchesBranch;
    });
  }, [searchQuery, selectedCategory, selectedBlood, selectedBranch]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedBlood("All");
    setSelectedBranch("All");
  };

  const getCategoryCount = (catValue: string) => {
    return MOCK_COUNCILS.filter((m) => m.category === catValue).length;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased">
      <Navbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="CRC Volunteers & Leadership Roster"
          title="Our Members"
          intro="Meet the dedicated student volunteers, educators, campus coordinators, and academic mentors of Come For Road Child (CRC) serving street children across Bangladesh since 2016."
          breadcrumbs={[
            { label: "About Us", href: "/about" },
            { label: "Members Directory" },
          ]}
        />

        {/* 1. Key Metrics Bar */}
        <MembersMetricsBar />

        {/* 2. Search & Interactive Filter Controls */}
        <MembersFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedBlood={selectedBlood}
          setSelectedBlood={setSelectedBlood}
          selectedBranch={selectedBranch}
          setSelectedBranch={setSelectedBranch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          branchOptions={branchOptions}
          totalCount={MOCK_COUNCILS.length}
          getCategoryCount={getCategoryCount}
          onResetFilters={handleResetFilters}
        />

        {/* 3. Members Roster Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-heading text-[#0d0f14]">
                  Active Members Roster
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Showing {filteredMembers.length} of {MOCK_COUNCILS.length} registered members · Click on any card to view full profile
                </p>
              </div>
            </div>

            {filteredMembers.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8 shadow-xs">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800">No members found</h3>
                <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                  We couldn&apos;t find any member matching your search query or filters. Try adjusting your search term.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-4 btn btn-primary text-xs px-5 py-2 font-bold cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMembers.map((member, idx) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    index={idx}
                    onSelect={(m) => setSelectedMember(m)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 4. Volunteer Call To Action Banner */}
        <MembersJoinCta />
      </main>

      <Footer />

      {/* 5. Member Profile Modal View */}
      <MemberDetailModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}
