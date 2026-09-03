"use client";

import React, { useState } from "react";
import {
  Users,
  Award,
  Shield,
  FileSpreadsheet,
  Download,
  Filter,
  Check,
  Building,
} from "lucide-react";
import { MOCK_COUNCILS, CouncilMember } from "../data/crcMockData";

export default function GovernanceSection() {
  const [selectedCouncil, setSelectedCouncil] = useState<"All" | "Permanent" | "Executive" | "Temporary">("All");
  const [exportSuccess, setExportSuccess] = useState(false);

  const filteredMembers =
    selectedCouncil === "All"
      ? MOCK_COUNCILS
      : MOCK_COUNCILS.filter((m) => m.councilType === selectedCouncil);

  const handleExportExcel = () => {
    setExportSuccess(true);
    setTimeout(() => {
      setExportSuccess(false);
    }, 4000);
  };

  return (
    <section id="governance" className="py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1 text-xs font-bold text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Module 4 • Our People & Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Three-Tier Governance Structure
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              CRC GSTU and its branches operate under constitutional institutional continuity, ensuring ethical service, 
              financial oversight, and transparent election mandates.
            </p>
          </div>

          {/* Interactive Excel Export Simulator */}
          <div className="shrink-0">
            <button
              id="btn-export-excel-members"
              onClick={handleExportExcel}
              className="flex items-center text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 px-4 py-2.5 rounded-xl shadow-xs transition-all duration-150"
            >
              <FileSpreadsheet className="w-4 h-4 mr-2 text-emerald-700" />
              {exportSuccess ? (
                <span className="text-emerald-900 flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1" /> CRC_Roster_2026.xlsx Exported!
                </span>
              ) : (
                "Export Active Roster (.xlsx)"
              )}
            </button>
            {exportSuccess && (
              <div className="text-[10px] text-emerald-700 font-semibold mt-1 text-right animate-in fade-in">
                Simulated real-time exceljs render & Google Drive auto-sync!
              </div>
            )}
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs max-w-xl">
          {(["All", "Permanent", "Executive", "Temporary"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedCouncil(type)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                selectedCouncil === type
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {type === "All" ? "All Councils (6)" : `${type} Council`}
            </button>
          ))}
        </div>

        {/* Council Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="glass-card bg-white rounded-2xl p-6 border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-slate-200">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                          member.councilType === "Permanent"
                            ? "bg-blue-100 text-blue-800"
                            : member.councilType === "Executive"
                            ? "bg-amber-100 text-amber-900"
                            : "bg-purple-100 text-purple-900"
                        }`}
                      >
                        {member.councilType} Council
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                        {member.branch}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mt-1.5 leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-blue-700">
                      {member.designation}
                    </p>
                  </div>
                </div>

                {/* Bio & Details */}
                <p className="text-xs text-slate-600 mt-4 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer Metadata */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Tenure: {member.tenure}</span>
                <span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-bold">
                  Blood: {member.bloodGroup}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explanatory Governance Notes */}
        <div className="mt-12 p-6 bg-blue-50/70 rounded-2xl border border-blue-200/80 text-slate-700 text-xs leading-relaxed space-y-2">
          <div className="font-bold text-blue-900 flex items-center text-sm">
            <Shield className="w-4 h-4 mr-1.5 text-blue-700" />
            CRC Constitutional Separation of Powers:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div>
              <strong className="text-slate-900">1. Permanent Council:</strong> Guardians of institutional continuity, protecting constitutional ideals, advisory, and long-term vision beyond single executive terms.
            </div>
            <div>
              <strong className="text-slate-900">2. Executive Council:</strong> Operational administration, program execution, member mobilization, and campus activity coordination.
            </div>
            <div>
              <strong className="text-slate-900">3. Temporary Council:</strong> Independent audit, discipline, and election committees active during designated monitoring mandates.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
