"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Users,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Droplet,
  Sparkles,
  ShieldCheck,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  X,
  Copy,
} from "lucide-react";
import AosInit from "@/components/AosInit";
import JaagoNavbar from "@/components/JaagoNavbar";
import JaagoFooter from "@/components/JaagoFooter";
import PageHeader from "@/components/PageHeader";
import { MOCK_COUNCILS, CouncilMember } from "@/data/crcMockData";

const CATEGORIES = [
  { label: "All Members", value: "All" },
  { label: "Executive Body", value: "Executive" },
  { label: "Volunteer Teachers", value: "Volunteer" },
  { label: "Branch Leads", value: "Branch Lead" },
  { label: "Faculty Advisors", value: "Advisor" },
  { label: "Founding Mentors", value: "Founding" },
];

const BLOOD_GROUPS = ["All", "A+", "B+", "O+", "AB+", "A-", "O-"];

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlood, setSelectedBlood] = useState("All");
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);
  const [copied, setCopied] = useState(false);

  // Close modal on ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
      }
    };
    if (selectedMember) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  // Filtered members list
  const filteredMembers = useMemo(() => {
    return MOCK_COUNCILS.filter((member) => {
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.designation.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query) ||
        member.branch.toLowerCase().includes(query) ||
        member.committee.toLowerCase().includes(query) ||
        member.bloodGroup.toLowerCase().includes(query);

      // Category match
      const matchesCategory =
        selectedCategory === "All" || member.category === selectedCategory;

      // Blood group match
      const matchesBlood =
        selectedBlood === "All" || member.bloodGroup === selectedBlood;

      // Branch match
      const matchesBranch =
        selectedBranch === "All" || member.branch.includes(selectedBranch);

      return matchesSearch && matchesCategory && matchesBlood && matchesBranch;
    });
  }, [searchQuery, selectedCategory, selectedBlood, selectedBranch]);

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Founding":
        return "bg-red-500/15 text-[#e6000a] border-red-500/30";
      case "Executive":
        return "bg-amber-500/15 text-amber-800 border-amber-500/30";
      case "Volunteer":
        return "bg-emerald-500/15 text-emerald-800 border-emerald-500/30";
      case "Branch Lead":
        return "bg-blue-500/15 text-blue-800 border-blue-500/30";
      case "Advisor":
        return "bg-purple-500/15 text-purple-800 border-purple-500/30";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased">
      <AosInit />
      <JaagoNavbar />

      <main className="flex-grow">
        {/* 1. Viewport-Fitted Crimson Slash Header */}
        <PageHeader
          eyebrow="CRC Volunteers & Leadership Roster"
          title="Our Members"
          intro="Meet the dedicated student volunteers, educators, campus coordinators, and academic mentors of Come For Road Child (CRC) serving street children across Bangladesh since 2016."
          breadcrumbs={[
            { label: "About Us", href: "/about" },
            { label: "Members Directory" },
          ]}
        />

        {/* 2. Key Metrics Bar */}
        <section className="bg-white border-b border-gray-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-black font-heading text-[#e6000a]">
                  350+
                </span>
                <span className="text-xs font-semibold text-gray-600 mt-0.5">
                  Enrolled Student Volunteers
                </span>
              </div>
              <div className="flex flex-col items-center pt-3 md:pt-0">
                <span className="text-2xl sm:text-3xl font-black font-heading text-[#007938]">
                  40+
                </span>
                <span className="text-xs font-semibold text-gray-600 mt-0.5">
                  Hatekhori School Teachers
                </span>
              </div>
              <div className="flex flex-col items-center pt-3 md:pt-0">
                <span className="text-2xl sm:text-3xl font-black font-heading text-[#0d0f14]">
                  6
                </span>
                <span className="text-xs font-semibold text-gray-600 mt-0.5">
                  Active University Chapters
                </span>
              </div>
              <div className="flex flex-col items-center pt-3 md:pt-0">
                <span className="text-2xl sm:text-3xl font-black font-heading text-red-600">
                  100%
                </span>
                <span className="text-xs font-semibold text-gray-600 mt-0.5">
                  Voluntary Blood Donors
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Search & Interactive Filter Controls */}
        <section className="py-8 bg-[#f6f4f1] border-b border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
              {/* Live Search Input */}
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, department, role, branch, or blood group..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-[#e6000a] focus:ring-2 focus:ring-red-100 transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-700"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Secondary Quick Selects: Blood Group & Branch */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Blood Group Select */}
                <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 shadow-xs">
                  <Droplet className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                  <span>Blood:</span>
                  <select
                    value={selectedBlood}
                    onChange={(e) => setSelectedBlood(e.target.value)}
                    className="bg-transparent font-bold text-gray-900 focus:outline-hidden cursor-pointer"
                  >
                    {BLOOD_GROUPS.map((bg) => (
                      <option key={bg} value={bg}>
                        {bg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Branch Select */}
                <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#007938]" />
                  <span>Branch:</span>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="bg-transparent font-bold text-gray-900 focus:outline-hidden cursor-pointer"
                  >
                    {branchOptions.map((br) => (
                      <option key={br} value={br}>
                        {br === "All" ? "All Chapters" : br}
                      </option>
                    ))}
                  </select>
                </div>

                {(searchQuery || selectedCategory !== "All" || selectedBlood !== "All" || selectedBranch !== "All") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                      setSelectedBlood("All");
                      setSelectedBranch("All");
                    }}
                    className="text-xs font-bold text-[#e6000a] hover:underline px-2 py-1"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat.value
                      ? "bg-[#0d0f14] text-white shadow-sm scale-102"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat.label}
                  {cat.value === "All" ? (
                    <span className="ml-1.5 opacity-60">({MOCK_COUNCILS.length})</span>
                  ) : (
                    <span className="ml-1.5 opacity-60">
                      (
                      {
                        MOCK_COUNCILS.filter((m) => m.category === cat.value)
                          .length
                      }
                      )
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Members Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header info */}
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
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedBlood("All");
                    setSelectedBranch("All");
                  }}
                  className="mt-4 btn btn-primary text-xs px-5 py-2 font-bold"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMembers.map((member, idx) => (
                  <div
                    key={member.id}
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay={(idx % 4) * 80}
                    onClick={() => setSelectedMember(member)}
                    className="bg-white rounded-2xl p-5 border border-gray-200/90 hover:border-[#e6000a] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
                  >
                    <div>
                      {/* Card Header: Avatar & Badges */}
                      <div className="flex items-start gap-3.5 mb-4">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-sm shrink-0 border-2 border-gray-100 group-hover:scale-105 transition-transform duration-300 bg-gray-100">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span
                              className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${getCategoryColor(
                                member.category
                              )}`}
                            >
                              {member.category}
                            </span>

                            {/* Blood Group Badge */}
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-black px-1.5 py-0.5 rounded bg-red-50 text-[#e6000a] border border-red-200">
                              <Droplet className="w-2.5 h-2.5 fill-[#e6000a]" />
                              {member.bloodGroup}
                            </span>
                          </div>

                          <h3 className="font-heading text-base font-bold text-[#0d0f14] leading-tight truncate group-hover:text-[#e6000a] transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-xs font-semibold text-[#e6000a] mt-0.5 line-clamp-1">
                            {member.designation}
                          </p>
                        </div>
                      </div>

                      {/* Details List */}
                      <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span className="truncate">{member.department}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span className="truncate">{member.committee}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span className="truncate">{member.branch}</span>
                        </div>

                        {member.session && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            <span className="text-gray-500 text-[11px]">
                              Session {member.session} · {member.tenure}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Bio */}
                      <p className="mt-3 text-xs text-gray-600 leading-relaxed line-clamp-3 bg-gray-50/70 p-2.5 rounded-xl border border-gray-100">
                        {member.bio}
                      </p>
                    </div>

                    {/* Card Footer: Quick Contact & Profile Trigger */}
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between gap-2">
                        <a
                          href={`mailto:${member.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#e6000a] transition-colors truncate"
                          title={member.email}
                        >
                          <Mail className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{member.email}</span>
                        </a>

                        {member.phone && (
                          <a
                            href={`tel:${member.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-[#e6000a] flex items-center justify-center text-gray-600 shrink-0 transition-colors"
                            title={member.phone}
                          >
                            <Phone className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {/* Interactive View Profile Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMember(member);
                        }}
                        className="mt-3 w-full py-1.5 bg-gray-50 group-hover:bg-red-50 text-gray-700 group-hover:text-[#e6000a] text-xs font-bold rounded-xl border border-gray-200 group-hover:border-red-200 transition-colors flex items-center justify-center gap-1"
                      >
                        <span>View Full Profile</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 5. Call To Action: Join CRC as a Member */}
        <section className="slash-band bg-[#e6000a] text-white py-16 px-4 relative overflow-hidden border-t-2 border-red-700">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-white mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Annual Recruitment Cohort 2026
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black leading-tight text-white">
              Want to join CRC as a student volunteer or teacher?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
              If you are a student at Gopalganj Science & Technology University (GSTU) or passionate about child welfare, join our community of changemakers. Give 2 hours a week and change a child&apos;s life forever.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link
                href="/#volunteer"
                className="btn btn-secondary px-8 py-3.5 text-sm font-sans font-bold text-white bg-[#0d0f14] hover:bg-[#1f2937] shadow-xl hover:scale-105 transition-transform"
              >
                Apply for Volunteer Membership
              </Link>
              <Link
                href="/school"
                className="px-6 py-3.5 text-sm font-sans font-bold text-white border-2 border-white/40 rounded-full hover:bg-white hover:text-[#0d0f14] transition-all"
              >
                Explore Hatekhori School Routine
              </Link>
            </div>
          </div>
        </section>
      </main>

      <JaagoFooter />

      {/* 6. Member Profile Modal View (Outside main & header with z-[99999] to float above navbar) */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-xl sm:max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-gray-100 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Fixed Top Banner with Crimson Slash Design & Close Button */}
            <div className="slash-band bg-[#e6000a] h-24 sm:h-28 shrink-0 relative overflow-hidden flex items-start justify-between p-4 sm:p-5">
              <span className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/35 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white">
                <Sparkles className="w-3 h-3 text-amber-300" />
                CRC GSTU Volunteer Profile
              </span>

              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="relative z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-lg"
                aria-label="Close profile modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 2. Fixed Profile Header (Avatar, Badges, Name - not clipped by scroll) */}
            <div className="shrink-0 px-6 sm:px-8 pb-4 border-b border-gray-100 bg-white">
              {/* Avatar & Badges */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 -mt-12 sm:-mt-14 mb-3">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-gray-100 shrink-0 z-10">
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-1 sm:pt-0">
                  <span
                    className={`text-[10px] sm:text-xs font-black uppercase px-2.5 py-1 rounded-md border ${getCategoryColor(
                      selectedMember.category
                    )}`}
                  >
                    {selectedMember.category}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black px-2 py-1 rounded-md bg-red-50 text-[#e6000a] border border-red-200">
                    <Droplet className="w-3 h-3 fill-[#e6000a]" />
                    Blood: {selectedMember.bloodGroup}
                  </span>

                  <span className="text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200">
                    {selectedMember.tenure}
                  </span>
                </div>
              </div>

              {/* Name & Designation */}
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-[#0d0f14] leading-tight">
                  {selectedMember.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#e6000a] mt-0.5">
                  {selectedMember.designation}
                </p>
              </div>
            </div>

            {/* 3. Scrollable Details Body */}
            <div className="overflow-y-auto px-6 sm:px-8 py-5 space-y-4 flex-grow">
              {/* Institutional Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-gray-700">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-[#007938] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-gray-400 block text-[9px] uppercase font-bold">Academic Department</span>
                    <span className="font-bold text-gray-900 truncate block">{selectedMember.department}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#e6000a] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-gray-400 block text-[9px] uppercase font-bold">Assigned Committee</span>
                    <span className="font-bold text-gray-900 truncate block">{selectedMember.committee}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-gray-400 block text-[9px] uppercase font-bold">Campus Chapter</span>
                    <span className="font-bold text-gray-900 truncate block">{selectedMember.branch}</span>
                  </div>
                </div>

                {selectedMember.session && (
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-gray-400 block text-[9px] uppercase font-bold">Academic Session</span>
                      <span className="font-bold text-gray-900 truncate block">{selectedMember.session}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bio & Voluntary Contributions */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Voluntary Contribution & Background
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-red-50/40 p-3.5 rounded-xl border border-red-100/70">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Safeguarding & Ethics Confirmation */}
              <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#007938] shrink-0" />
                <span>Verified Volunteer · Child Safeguarding & Ethics Trained</span>
              </div>
            </div>

            {/* 3. Sticky Bottom Actions Bar */}
            <div className="shrink-0 px-6 sm:px-8 py-3.5 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="btn btn-primary text-xs font-bold px-4 py-2 inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Member</span>
                </a>

                {selectedMember.phone && (
                  <a
                    href={`tel:${selectedMember.phone}`}
                    className="btn btn-secondary text-xs font-bold px-3.5 py-2 inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call</span>
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={async () => {
                    const info = `${selectedMember.name} - ${selectedMember.designation} (${selectedMember.email})`;
                    try {
                      if (navigator?.clipboard?.writeText) {
                        await navigator.clipboard.writeText(info);
                      }
                    } catch {
                      // Fallback for environments where clipboard write permissions are restricted
                    }
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="text-xs font-bold text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-200/70 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Info</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-xs font-bold text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-200/70 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
