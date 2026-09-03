"use client";

import React, { useState } from "react";
import { MapPin, Users, Phone, Calendar, Building, Sparkles } from "lucide-react";
import { MOCK_BRANCHES, Branch } from "../data/crcMockData";

export default function BranchesMap() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(MOCK_BRANCHES[0]);

  return (
    <section id="branches" className="py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-rose-800 bg-rose-100 px-3.5 py-1 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-rose-600" />
            <span>Module 3 • Where We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nationwide University & City Branch Network
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            From our founding roots at Gopalganj Science and Technology University (GSTU) in 2016, CRC chapters 
            have emerged across leading public universities and district hubs across Bangladesh.
          </p>
        </div>

        {/* Interactive Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Branch List Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider px-2">
              Select Active Chapter ({MOCK_BRANCHES.length})
            </h3>
            {MOCK_BRANCHES.map((b) => {
              const isSelected = b.id === selectedBranch.id;
              return (
                <button
                  key={b.id}
                  onClick={() => setSelectedBranch(b)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? "bg-white border-blue-600 shadow-md ring-2 ring-blue-600/10"
                      : "bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        {b.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {b.location}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
                    {b.volunteersCount} Volunteers
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Branch Profile (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Chapter Dossier
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    {selectedBranch.name}
                  </h3>
                  <div className="text-xs text-slate-500 flex items-center mt-1">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-rose-500" />
                    {selectedBranch.university} • {selectedBranch.location}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-black text-blue-700">
                    {selectedBranch.volunteersCount}+
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Active Student Volunteers
                  </div>
                </div>
              </div>

              {/* Branch Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs text-slate-500">Establishment</div>
                  <div className="font-bold text-slate-900 text-sm mt-0.5 flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-blue-600" />
                    Founded in {selectedBranch.establishedYear}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs text-slate-500">Lead Coordinator</div>
                  <div className="font-bold text-slate-900 text-sm mt-0.5 flex items-center">
                    <Users className="w-4 h-4 mr-1 text-emerald-600" />
                    {selectedBranch.coordinator}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 sm:col-span-2">
                  <div className="text-xs text-slate-500">Official Branch Contact</div>
                  <div className="font-bold text-slate-900 text-sm mt-0.5 flex items-center">
                    <Phone className="w-4 h-4 mr-1 text-amber-600" />
                    {selectedBranch.phone} (Available 9 AM - 8 PM)
                  </div>
                </div>
              </div>

              {/* Branch Operations Showcase */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 leading-relaxed space-y-2">
                <div className="font-bold text-blue-900 flex items-center text-sm">
                  <Sparkles className="w-4 h-4 mr-1 text-blue-700" />
                  Key Chapter Responsibilities:
                </div>
                <p>
                  • Mobilizing university students to conduct classes at local <strong>Hatekhori Schools</strong>.
                </p>
                <p>
                  • Conducting seasonal winter blanket drives, flood relief packaging, and street child medical clinics.
                </p>
                <p>
                  • Maintaining active student membership rosters and democratic committee elections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
