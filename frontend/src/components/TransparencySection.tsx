"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  ShieldCheck,
  CheckCircle,
  Lock,
  Eye,
  Building,
  Check,
} from "lucide-react";
import { MOCK_NOTICES } from "../data/crcMockData";

export default function TransparencySection() {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const handleSimulatedDownload = (title: string, id: string) => {
    setDownloadedId(id);
    setTimeout(() => {
      setDownloadedId(null);
    }, 3000);
  };

  return (
    <section id="transparency" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Module 6 • Our Promises & Accountability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Financial Transparency & Public Audits
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Every single donation received for underprivileged children is restricted solely to their welfare. 
            We conduct independent internal and external chartered accountant audits with public disclosure.
          </p>
        </div>

        {/* 3 Pillars of Financial Integrity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">
              Expenditure Policy
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Funds raised for a specific purpose (e.g. Hatekhori School meals or winter clothes) cannot be diverted to other activities. 
              All disbursements require Permanent Financial Management Committee sign-off.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">
              Independent Audits
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              An autonomous Audit Committee independently inspects invoices and receipts quarterly, followed by an 
              external annual audit by certified chartered accountants.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">
              Donor Privacy
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Donor personal data is handled under strict confidentiality. Donors can opt for public recognition or 100% anonymous 
              sponsorship without disclosure of phone or email.
            </p>
          </div>
        </div>

        {/* Audit Documents Download Matrix */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Public Download Vault
              </span>
              <h3 className="text-2xl font-bold mt-1">
                Chartered Accountant Audit Reports & Legal Documents
              </h3>
            </div>
            <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              Synced with Cloud Storage
            </span>
          </div>

          {/* Document Download Rows */}
          <div className="divide-y divide-slate-800 mt-4">
            {MOCK_NOTICES.map((doc) => (
              <div
                key={doc.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/40 px-3 rounded-xl transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                      {doc.title}
                    </h4>
                    <div className="flex items-center space-x-3 text-xs text-slate-400 mt-0.5">
                      <span>Category: {doc.category}</span>
                      <span>•</span>
                      <span>Verified: {doc.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:shrink-0">
                  <span className="text-xs text-slate-400 font-mono">
                    {doc.fileSize}
                  </span>
                  <button
                    onClick={() => handleSimulatedDownload(doc.title, doc.id)}
                    className="flex items-center text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 px-3.5 py-2 rounded-lg transition-colors shadow-xs active:scale-95"
                  >
                    {downloadedId === doc.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 mr-1 text-emerald-900" />
                        Downloading PDF...
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 mr-1" />
                        Download Report
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
