"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Calendar, Award, Building, FileText, Users, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import AosInit from "@/components/AosInit";
import JaagoNavbar from "@/components/JaagoNavbar";
import JaagoFooter from "@/components/JaagoFooter";
import PageHeader from "@/components/PageHeader";

const BRANCHES = [
  {
    name: "GSTU Central Branch",
    place: "Gopalganj Science & Technology University Campus",
    year: "2016",
    lead: true,
    desc: "The founding headquarters established in 2016. Coordinates central curriculum, volunteer teacher training, and charter oversight.",
  },
  {
    name: "Gopalganj Town Chapter",
    place: "Gopalganj Sadar Municipality",
    year: "2019",
    desc: "Operates daily sidewalk learning circles near town center bus stations and railway crossings.",
  },
  {
    name: "Tungipara Chapter",
    place: "Tungipara Upazila, Gopalganj",
    year: "2021",
    desc: "Provides education and nutrition support for children of local agricultural workers and boatmen communities.",
  },
  {
    name: "Kotalipara Chapter",
    place: "Kotalipara Upazila, Gopalganj",
    year: "2022",
    desc: "Focuses on rural village literacy, health checkups, and adolescent girls' schooling persistence.",
  },
  {
    name: "Muksudpur Chapter",
    place: "Muksudpur Upazila, Gopalganj",
    year: "2023",
    desc: "Active student volunteer chapter delivering weekend educational camps and winter clothes drives.",
  },
  {
    name: "Dhaka Metropolitan Chapter",
    place: "Dhaka Capital Region",
    year: "2024",
    desc: "Coordinates corporate partnerships, alumni donor networks, and emergency street child shelter referrals.",
  },
];

const STRUCTURE_ITEMS = [
  {
    title: "Branch Overview",
    desc: "Founding date, local working perimeter, number of active pupils, venue schedules, and immediate branch priorities.",
    icon: Building,
  },
  {
    title: "Executive Committee",
    desc: "Branch President, General Secretary, Treasurer, Organising Secretary, and departmental secretaries with fixed tenures.",
    icon: Users,
  },
  {
    title: "Permanent Committees",
    desc: "Four specialized sub-committees: Education, Finance & Audit, Membership & Discipline, and Media & Documentation.",
    icon: ShieldCheck,
  },
  {
    title: "Member Roster",
    desc: "Complete volunteer member directory with official university registration numbers, induction batch, and assigned duties.",
    icon: Award,
  },
  {
    title: "Activity Logs",
    desc: "Weekly attendance logs, lesson progress metrics, relief campaigns, mothers' sessions, and public outreach events.",
    icon: Calendar,
  },
  {
    title: "Audited Reports",
    desc: "Monthly balance sheets, verified donation registers, expense breakdowns, and annual AGM resolutions.",
    icon: FileText,
  },
];

export default function BranchesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased">
      <AosInit />
      <JaagoNavbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="National Footprint"
          title="CRC Branches"
          intro="One organisation, many neighbourhoods. Each branch conducts verified street classrooms, student committees, and transparent reports under our constitutional central charter."
          breadcrumbs={[{ label: "Branches" }]}
        />

        {/* 1. Branch Directory Grid */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                Active Chapters
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                Where CRC works today
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BRANCHES.map((b) => (
                <div
                  key={b.name}
                  className="bg-[#f6f4f1] rounded-2xl p-6 sm:p-7 border border-gray-200/70 transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-lg text-[#0d0f14]">{b.name}</h3>
                    {b.lead && (
                      <span className="bg-[#e6000a] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                        Founding
                      </span>
                    )}
                  </div>

                  <p className="mt-2.5 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700">
                    <MapPin className="w-4 h-4 text-[#007938] shrink-0" />
                    <span>{b.place}</span>
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {b.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-gray-500">
                    <span>Est. {b.year}</span>
                    <span className="text-[#e6000a] flex items-center gap-1">
                      Active Chapter <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Standard Branch Governance */}
        <section className="py-14 sm:py-20 bg-[#f6f4f1] border-b border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007938]">
                Standard Operating Procedure
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                Standard Branch Governance
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed sm:text-base">
                A unified governance protocol keeps every chapter accountable, legally compliant, and effortless to transfer to newly elected student leaders each academic year.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {STRUCTURE_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/70 transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e6000a] flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-base text-[#0d0f14]">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Open a Branch CTA */}
        <section className="py-16 sm:py-20 bg-[#0d0f14] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-red-500/20 text-red-400 border border-red-500/30 mb-4">
              Campus Expansion
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl text-white tracking-tight">
              Bring CRC to Your University Campus
            </h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Are you a dedicated university student passionate about changing the lives of street children around your campus? Any committed student cohort can apply for a formal CRC branch charter.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:crcgstu@gmail.com"
                className="inline-flex items-center gap-2 bg-[#e6000a] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-xl hover:bg-[#a20002] transition-colors"
              >
                <Mail className="w-4 h-4" /> Apply for Branch Charter
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-gray-700 bg-gray-900/60 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors"
              >
                Read CRC Constitution
              </Link>
            </div>
          </div>
        </section>
      </main>

      <JaagoFooter />
    </div>
  );
}
