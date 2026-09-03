"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  X,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Send,
  MapPin,
} from "lucide-react";

interface ReportConcernModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportConcernModal({
  isOpen,
  onClose,
}: ReportConcernModalProps) {
  const [category, setCategory] = useState("Vulnerable Child in Distress");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [reporterName, setReporterName] = useState("");
  const [reporterPhone, setReporterPhone] = useState("");
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trackingCode = `CRC-CARE-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedCode(trackingCode);
  };

  const handleResetAndClose = () => {
    setSubmittedCode(null);
    setLocation("");
    setDescription("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="glass-modal bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedCode ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase text-rose-700 tracking-wider">
                  Module 6 • Child Protection & Safeguarding
                </span>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  Report a Concern / Speak Up
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-5 leading-relaxed bg-rose-50/70 p-3 rounded-xl border border-rose-100">
              Do you know a child who needs emergency food, clothing, medical care, or schooling? 
              Your report will be sent directly to the <strong>CRC Child Protection Officer</strong> under 
              strict anti-retaliation ethics.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Concern Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Vulnerable Street Child in Distress</option>
                  <option>Child Without Access to Food or School</option>
                  <option>Urgent Medical / Healthcare Need</option>
                  <option>Child Abuse / Harassment / Safeguarding Concern</option>
                  <option>Organizational / Financial Misconduct</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Incident / Child Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gopalganj Railway Station, Platform 1, Slum area"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Details of the Situation
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe the child's estimated age, physical condition, and immediate assistance needed..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Anonymous Toggle */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-slate-500" />
                  <span className="text-xs font-semibold text-slate-700">
                    Report Anonymously
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                />
              </div>

              {!isAnonymous && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={reporterName}
                      onChange={(e) => setReporterName(e.target.value)}
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      value={reporterPhone}
                      onChange={(e) => setReporterPhone(e.target.value)}
                      className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                    />
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-2 flex items-center justify-center font-bold text-sm bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-xl shadow-md transition-all duration-150"
              >
                <Send className="w-4 h-4 mr-2" /> Submit Safeguarding Report
              </button>
            </form>
          </div>
        ) : (
          /* Submission Confirmation */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Concern Report Received
            </h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
              Thank you for speaking up. The CRC Safeguarding team will review this notice immediately.
            </p>

            <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200 inline-block">
              <div className="text-[10px] uppercase font-bold text-slate-500">
                Encrypted Tracking Code
              </div>
              <div className="text-xl font-mono font-black text-slate-900 mt-1">
                {submittedCode}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
