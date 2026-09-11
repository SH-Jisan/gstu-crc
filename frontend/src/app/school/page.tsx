"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, GraduationCap } from "lucide-react";
import AosInit from "@/components/AosInit";
import JaagoNavbar from "@/components/JaagoNavbar";
import JaagoFooter from "@/components/JaagoFooter";
import PageHeader from "@/components/PageHeader";

const CLASSES = [
  { name: "Pre-Primary", age: "Ages 4–6", focus: "Bangla & English alphabet tracing, oral rhymes, counting blocks, and habit formation." },
  { name: "Class 1–2", age: "Ages 6–8", focus: "Reading fluency, sentence building, elementary addition & subtraction, and drawing." },
  { name: "Class 3–5", age: "Ages 8–11", focus: "Grammar, multiplication/division, general science basics, environmental hygiene." },
  { name: "Class 6–8", age: "Ages 11–14", focus: "Full subject curriculum, state exam preparation, life-skills, and career mentorship." },
];

const TIMETABLE = [
  { day: "Saturday", p1: "Bangla Reading", p2: "Mathematics", p3: "Drawing & Art" },
  { day: "Sunday", p1: "English Basics", p2: "General Science", p3: "Indoor Learning Play" },
  { day: "Monday", p1: "Mathematics", p2: "Bangla Writing", p3: "Hygiene & Handwash" },
  { day: "Tuesday", p1: "English Vocabulary", p2: "Social Studies", p3: "Songs & Poetry" },
  { day: "Wednesday", p1: "Weekly Revision", p2: "Math Exercises", p3: "Sports & Drills" },
  { day: "Thursday", p1: "Moral Storytelling", p2: "Group Discussion", p3: "Cultural Activities" },
];

export default function SchoolPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased">
      <AosInit />
      <JaagoNavbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="CRC Flagship Project"
          title="Hatekhori Free School"
          intro="“হাতেখড়ি” — the sacred first writing lesson. A completely free, non-formal school transforming sidewalk children into confident scholars through compassionate university volunteer teachers."
          breadcrumbs={[{ label: "Programs", href: "/programs" }, { label: "Hatekhori School" }]}
        />

        {/* 1. About Hatekhori */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                  Our Philosophy
                </span>
                <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                  Every child deserves the dignity of the alphabet
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed sm:text-lg">
                  “Hatekhori” is the Bengali tradition where a child holds a chalk pencil for the very first time. Our school bears this name because most students join us without ever having stepped into a classroom.
                </p>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                  There are zero tuition fees, no expensive uniform mandates, and no entrance barrier exams. Slate boards, notebooks, textbooks, daily snacks, and hygiene supplies are provided free of cost by CRC. When children complete Class 5, CRC assists their transition into formal government primary schools while continuing evening coaching.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold bg-green-50 text-[#007938] px-3.5 py-2 rounded-xl border border-green-200">
                    <CheckCircle2 className="w-4 h-4" /> 100% Free Tuition & Supplies
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold bg-red-50 text-[#e6000a] px-3.5 py-2 rounded-xl border border-red-200">
                    <CheckCircle2 className="w-4 h-4" /> Class 5 Government School Transfer
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                <Image
                  src="/assets/school.jpg"
                  alt="Hatekhori school classroom in session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Class Levels */}
        <section className="py-14 sm:py-20 bg-[#f6f4f1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007938]">
                Curriculum Structure
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                Pre-Primary to Class 8
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CLASSES.map((c) => (
                <div
                  key={c.name}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/70 transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <span className="inline-block text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-red-100 text-[#e6000a] mb-3">
                    {c.age}
                  </span>
                  <h3 className="font-heading text-lg text-[#0d0f14]">{c.name}</h3>
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {c.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Teaching Model & Timetable */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                Operational Routine
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                Teaching Model & Timetable
              </h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] items-start">
              <div className="bg-[#f6f4f1] rounded-2xl p-6 sm:p-8 border border-gray-200/70">
                <h3 className="font-heading text-lg text-[#0d0f14] mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#e6000a]" /> Volunteer Teaching Standards
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                    <span>Each teacher commits to a minimum of two teaching shifts weekly per academic semester.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                    <span>New volunteer educators shadow senior lead teachers for two weeks prior to leading a section.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                    <span>Activity-based lesson plans are prepared and reviewed every Friday evening.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                    <span>An assigned class monitor logs absent children for immediate home visits and safety follow-ups.</span>
                  </li>
                </ul>
              </div>

              {/* Weekly Timetable Table */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                <div className="bg-[#0d0f14] px-6 py-4 text-white">
                  <h4 className="font-heading text-sm uppercase tracking-wider text-red-400">
                    Weekly Classroom Schedule
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200 text-gray-700">
                      <tr>
                        <th className="p-3.5 font-bold uppercase tracking-wider">Day</th>
                        <th className="p-3.5 font-bold uppercase tracking-wider">Period 1 (4:00 PM)</th>
                        <th className="p-3.5 font-bold uppercase tracking-wider">Period 2 (4:45 PM)</th>
                        <th className="p-3.5 font-bold uppercase tracking-wider">Period 3 (5:30 PM)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {TIMETABLE.map((row) => (
                        <tr key={row.day} className="hover:bg-red-50/40 transition-colors">
                          <td className="p-3.5 font-bold text-[#0d0f14]">{row.day}</td>
                          <td className="p-3.5 text-gray-600">{row.p1}</td>
                          <td className="p-3.5 text-gray-600">{row.p2}</td>
                          <td className="p-3.5 text-gray-600">{row.p3}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Classroom Photos */}
        <section className="py-14 sm:py-20 bg-[#0d0f14] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                Classroom Moments
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-white tracking-tight">
                Life inside Hatekhori School
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-800">
                <Image src="/assets/school.jpg" alt="Reading circle" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-800">
                <Image src="/assets/campaign.jpg" alt="Winter session" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-800">
                <Image src="/assets/health.jpg" alt="Hygiene instruction" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Assessment & Admission */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007938]">
                Quality & Growth
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                Assessments & Year-Round Admission
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="bg-[#f6f4f1] rounded-2xl p-6 border-l-4 border-[#e6000a]">
                <h3 className="font-heading text-lg text-[#0d0f14]">Three Annual Terms</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Three comprehensive progress evaluations annually — First Term, Half-Yearly, and Annual Examinations — complemented by weekly classroom milestone notes.
                </p>
              </div>

              <div className="bg-[#f6f4f1] rounded-2xl p-6 border-l-4 border-[#007938]">
                <h3 className="font-heading text-lg text-[#0d0f14]">Guardians Meeting</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Progress report cards are presented directly to mothers and fathers with verbal feedback, encouraging parents to support study habits at night.
                </p>
              </div>

              <div className="bg-[#f6f4f1] rounded-2xl p-6 border-l-4 border-[#0d0f14]">
                <h3 className="font-heading text-lg text-[#0d0f14]">Open 365 Days</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Any child can be enrolled at any time of the year. Guardians visit our branch venue with the child; volunteers complete an intake assessment and issue study materials immediately.
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
