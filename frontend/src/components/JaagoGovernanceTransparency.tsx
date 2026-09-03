"use client";

import React, { useState } from "react";
import {
  Users,
  Shield,
  FileSpreadsheet,
  Download,
  Check,
  FileText,
  Lock,
  Eye,
  Building,
} from "lucide-react";
import { MOCK_COUNCILS, MOCK_NOTICES } from "../data/crcMockData";

export default function JaagoGovernanceTransparency() {
  const [selectedCouncil, setSelectedCouncil] = useState<"All" | "Permanent" | "Executive" | "Temporary">("All");
  const [exportSuccess, setExportSuccess] = useState(false);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const filteredMembers =
    selectedCouncil === "All"
      ? MOCK_COUNCILS
      : MOCK_COUNCILS.filter((m) => m.councilType === selectedCouncil);

  const handleExportExcel = () => {
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 3500);
  };

  const handleDownload = (id: string) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 3000);
  };

  return (
    <section id="governance-transparency" className="py-20 bg-gray-50 scroll-mt-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-amber-600">
              Module 4 & 6 • Institutional Rigor
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 mt-1">
              Governance & Public Audits
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              CRC enforces constitutional leadership through Three-Tier Councils alongside 100% public 
              Chartered Accountant audit disclosures.
            </p>
          </div>

          {/* Excel Roster Export Button */}
          <div className="shrink-0">
            <button
              onClick={handleExportExcel}
              className="flex items-center text-xs font-bold text-gray-900 bg-[#FFCD05] hover:bg-[#e6b800] px-5 py-3 rounded-full shadow-md transition-all duration-150 transform hover:scale-105"
            >
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              {exportSuccess ? (
                <span className="flex items-center font-black text-gray-950">
                  <Check className="w-4 h-4 mr-1 text-emerald-800" /> Exported CRC_Roster.xlsx
                </span>
              ) : (
                "Export Active Roster (.xlsx)"
              )}
            </button>
            {exportSuccess && (
              <p className="text-[10px] text-emerald-700 font-bold mt-1 text-right animate-in fade-in">
                Simulated real-time Excel generator & Google Drive auto-sync!
              </p>
            )}
          </div>
        </div>

        {/* Council Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-full border border-gray-200 shadow-xs max-w-xl">
          {(["All", "Permanent", "Executive", "Temporary"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedCouncil(type)}
              className={`text-xs font-black uppercase px-4 py-2 rounded-full transition-all ${
                selectedCouncil === type
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {type === "All" ? "All Councils (6)" : `${type} Council`}
            </button>
          ))}
        </div>

        {/* Council Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-gray-200">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                          member.councilType === "Permanent"
                            ? "bg-blue-100 text-blue-900"
                            : member.councilType === "Executive"
                            ? "bg-[#FFCD05]/30 text-amber-950"
                            : "bg-purple-100 text-purple-900"
                        }`}
                      >
                        {member.councilType}
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        {member.branch}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-gray-900 mt-1.5 leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-blue-700">
                      {member.designation}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mt-4 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <span>Tenure: {member.tenure}</span>
                <span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full font-bold">
                  Blood: {member.bloodGroup}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Public Audit Reports Download Vault */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-800">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#FFCD05]">
                Financial Vault
              </span>
              <h3 className="text-2xl font-black uppercase mt-1">
                Chartered Accountant Audit Reports
              </h3>
            </div>
            <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1.5 rounded-full border border-gray-700">
              Verified Transparency
            </span>
          </div>

          <div className="divide-y divide-gray-800 mt-4">
            {MOCK_NOTICES.map((doc) => (
              <div
                key={doc.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-800/40 px-3 rounded-2xl transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 text-[#FFCD05] flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {doc.title}
                    </h4>
                    <div className="flex items-center space-x-3 text-xs text-gray-400 mt-0.5">
                      <span>{doc.category}</span>
                      <span>•</span>
                      <span>Verified: {doc.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:shrink-0">
                  <span className="text-xs text-gray-400 font-mono">
                    {doc.fileSize}
                  </span>
                  <button
                    onClick={() => handleDownload(doc.id)}
                    className="flex items-center text-xs font-black uppercase text-gray-950 bg-[#FFCD05] hover:bg-[#e6b800] px-4 py-2 rounded-full transition-colors"
                  >
                    {downloadedId === doc.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 mr-1 text-emerald-950" />
                        Downloading PDF...
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 mr-1" />
                        Download PDF
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
