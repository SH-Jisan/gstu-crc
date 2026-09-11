"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldAlert, Sparkles, Users, Calendar } from "lucide-react";
import AosInit from "@/components/AosInit";
import JaagoNavbar from "@/components/JaagoNavbar";
import JaagoFooter from "@/components/JaagoFooter";
import PageHeader from "@/components/PageHeader";

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased">
      <AosInit />
      <JaagoNavbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="CRC Core Activities"
          title="Our Programs"
          intro="Seven core programs deliver our mission — from daily sidewalk education to seasonal winter relief and nutrition support across Bangladesh."
          breadcrumbs={[{ label: "Programs" }]}
        />

        {/* 01. Street Children Education */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                <Image
                  src="/assets/school.jpg"
                  alt="Volunteer teaching street children"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#e6000a] text-white text-xs font-black uppercase px-3 py-1.5 rounded-full shadow">
                  Program 01
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                  Core Foundation
                </span>
                <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                  Street Children Education
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed sm:text-lg">
                  Small groups of 8–12 children with one lead volunteer university teacher and an assistant. Learning is activity-based: songs, drawing, counting games, and reading circles rather than intimidating rote memorisation. Every child receives a progress card reviewed monthly.
                </p>

                <div className="mt-6 bg-[#f6f4f1] rounded-2xl p-6 border border-gray-200/60">
                  <h4 className="font-heading text-sm sm:text-base text-[#0d0f14] flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-[#e6000a]" /> Volunteer Teaching Schedule
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                      <span><strong>Saturday – Wednesday:</strong> 4:00 – 6:00 PM core literacy & math classes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                      <span><strong>Thursday:</strong> Moral storytelling, hygiene practice, and cultural sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                      <span><strong>Friday:</strong> Make-up classes, home visits, and parent contact</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Nutrition & Health Support */}
        <section className="py-14 sm:py-20 bg-[#f6f4f1] border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#007938]">
                  Healthcare & Wellbeing
                </span>
                <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                  Nutrition & Health Support
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed sm:text-lg">
                  Healthy bodies nurture eager minds. We provide preventive care, nutritious snacks, and medical assistance directly to children and their mothers living in underprivileged conditions.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <h3 className="font-heading text-base text-[#0d0f14]">Awareness Sessions for Mothers</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Monthly guidance on breastfeeding, safe drinking water, hand-washing, immunisation, and recognizing pediatric illness symptoms early.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <h3 className="font-heading text-base text-[#0d0f14]">Malnutrition Prevention</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Height/weight growth screening, supplementary protein food packets for vulnerable children, and formal referrals to the local upazila health complex.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                <Image
                  src="/assets/health.jpg"
                  alt="Health and nutrition awareness session"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#007938] text-white text-xs font-black uppercase px-3 py-1.5 rounded-full shadow">
                  Program 02
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Hatekhori School Support */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                Formal Curriculum
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                Hatekhori School Support
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed sm:text-lg">
                Structured schooling for children who have never held a pencil before, guiding them smoothly from pre-primary through Class 8.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="bg-[#f6f4f1] rounded-2xl p-6 border-l-4 border-[#e6000a]">
                <h3 className="font-heading text-lg text-[#0d0f14]">Class Activities</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Reading, handwriting, arithmetic, drawing, hygiene practice, and structured free play in every daily learning block.
                </p>
              </div>

              <div className="bg-[#f6f4f1] rounded-2xl p-6 border-l-4 border-[#007938]">
                <h3 className="font-heading text-lg text-[#0d0f14]">Weekly Schedule</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  A fixed timetable per class level with subject rotation so no child misses essential Bangla, English, or Math literacy.
                </p>
              </div>

              <div className="bg-[#f6f4f1] rounded-2xl p-6 border-l-4 border-[#0d0f14]">
                <h3 className="font-heading text-lg text-[#0d0f14]">Moral Story Thursdays</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  A story, group reflection, and small interactive task teaching honesty, sharing, courage, and respect for others.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/school"
                className="inline-flex items-center gap-2 bg-[#e6000a] text-white px-6 py-3 rounded-full font-bold text-sm shadow hover:bg-[#a20002] transition-colors"
              >
                Explore Full Hatekhori School Page →
              </Link>
            </div>
          </div>
        </section>

        {/* 04 & 05. Winter Clothes & Food Distribution */}
        <section className="py-14 sm:py-20 bg-[#0d0f14] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
                <Image
                  src="/assets/campaign.jpg"
                  alt="Volunteers distributing winter clothes and food"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#e6000a] text-white text-xs font-black uppercase px-3 py-1.5 rounded-full shadow">
                  Programs 04 & 05
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                  Relief & Emergency Support
                </span>
                <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-white tracking-tight">
                  Winter Clothes & Food Distribution
                </h2>
                <div className="mt-6 space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Each December our <strong>Winter Clothes Campaign</strong> collects blankets, sweaters, and warm garments from students, university alumni, and local patrons. Surveys ensure the coldest, poorest households are prioritized.
                  </p>
                  <p>
                    The <strong>Food Distribution Programme</strong> provides warm cooked meals during Ramadan, Eid festival packages, flood relief rations, and nutrition packs throughout the academic year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06. Awareness Programs */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007938]">
                Safeguarding
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                Awareness & Child Protection
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="bg-[#f6f4f1] rounded-2xl p-6">
                <ShieldAlert className="w-8 h-8 text-[#e6000a] mb-3" />
                <h3 className="font-heading text-lg text-[#0d0f14]">Drug Abuse Prevention</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Street-level interactive talks and posters explaining the physical and legal risks of inhalants (dendi) and addiction, organized in partnership with local youth clubs.
                </p>
              </div>

              <div className="bg-[#f6f4f1] rounded-2xl p-6">
                <Sparkles className="w-8 h-8 text-[#007938] mb-3" />
                <h3 className="font-heading text-lg text-[#0d0f14]">Personal Hygiene</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Soap washing drills, nail-trimming, hair care, tooth-brushing demonstrations, and monthly personal hygiene kits distributed to regular students.
                </p>
              </div>

              <div className="bg-[#f6f4f1] rounded-2xl p-6">
                <Users className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="font-heading text-lg text-[#0d0f14]">Road & Public Safety</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Practical street-crossing guidance and safe habits for street children who live and move beside high-speed highway crossings and bus stations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07. Community Engagement */}
        <section className="py-14 sm:py-20 bg-[#f6f4f1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                Community Ties
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                Community & Village Engagement
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-heading text-lg text-[#0d0f14]">Village Programme</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Weekend student teams visit nearby suburban and rural villages for enrolment surveys, health camps, and children&apos;s study circles.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-heading text-lg text-[#0d0f14]">Parents Meetings</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Quarterly gatherings where guardians review attendance and progress reports, reaffirming their pledge to keep children off hazardous work.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-heading text-lg text-[#0d0f14]">Cultural Celebrations</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Pahela Baishakh, Victory Day, Independence Day, and annual prize-giving performances created and led by our children.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <JaagoFooter />
    </div>
  );
}
