"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Heart,
  Send,
  Phone,
  Mail,
  Users,
  CheckCircle2,
  EyeOff,
  UserCheck,
  ChevronRight,
} from "lucide-react";
import AosInit from "@/components/AosInit";
import JaagoNavbar from "@/components/JaagoNavbar";
import JaagoFooter from "@/components/JaagoFooter";
import PageHeader from "@/components/PageHeader";

export default function PromisesPage() {
  const [concernCategory, setConcernCategory] = useState("Vulnerable Child Needing Immediate Help");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [reporterName, setReporterName] = useState("");
  const [reporterPhone, setReporterPhone] = useState("");
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trackingCode = `CRC-CARE-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedCode(trackingCode);
  };

  const handleReset = () => {
    setSubmittedCode(null);
    setLocation("");
    setDescription("");
    setReporterName("");
    setReporterPhone("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased">
      <AosInit />
      <JaagoNavbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="Section 4 · Constitutional Commitments"
          title="Our Promises"
          intro="Child Protection, Safeguarding Ethics, Whistleblower Integrity, and our Unwavering Commitment to the Welfare of Underprivileged Children and Society."
          breadcrumbs={[{ label: "Our Promises" }]}
        />

        {/* 1. Whistleblower & Safe Reporting Section: See a Need? Speak Up. */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e6000a]">
                Section 4.1 · Speak Up Protocol
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight leading-tight">
                See a Need? Speak Up.
              </h2>
              <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Do you know a child who needs help? Have you seen a situation that concerns you? Tell us.
              </p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                You may know a child who is struggling to continue their education, does not have enough food or clothing, needs healthcare, or is living in circumstances where support is needed. You can also report any concern related to CRC GSTU&apos;s activities, conduct, policies, finances, or member behavior.
              </p>
              <div className="mt-4 p-3.5 bg-red-50 rounded-xl border border-red-200 text-xs sm:text-sm text-red-900 font-semibold">
                “You do not need to solve the problem yourself. You only need to speak up and let us know. Your concern may be the first step toward helping a child receive the support they need.”
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Interactive Report Form */}
              <div className="lg:col-span-7 bg-[#f6f4f1] p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-sm">
                {!submittedCode ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldAlert className="w-5 h-5 text-[#e6000a]" />
                      <h3 className="font-heading text-lg font-bold text-[#0d0f14]">
                        Submit a Concern / Referral
                      </h3>
                    </div>

                    {/* Concern Category */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        What would you like to report?
                      </label>
                      <select
                        value={concernCategory}
                        onChange={(e) => setConcernCategory(e.target.value)}
                        className="w-full text-xs sm:text-sm bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e6000a]"
                      >
                        <option>Vulnerable Child Needing Immediate Help (Food/Clothing/School)</option>
                        <option>Child Protection / Safeguarding Concern</option>
                        <option>Child Out of School / Seeking Hatekhori Admission</option>
                        <option>Misconduct, Harassment or Inappropriate Behavior</option>
                        <option>Financial Misconduct or Irregularity Concern</option>
                        <option>Volunteer Policy or Constitutional Violation</option>
                        <option>Other Community Concern</option>
                      </select>
                    </div>

                    {/* Location / Area */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Where is the situation taking place? *
                      </label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Gopalganj Launch Ghat / Railway Platform / Specific Ward"
                        className="w-full text-xs sm:text-sm bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e6000a]"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Describe the situation or assistance needed *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Please describe who is affected, what occurred, and any circumstances that can help our volunteer safeguarding team take action..."
                        className="w-full text-xs sm:text-sm bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e6000a]"
                      />
                    </div>

                    {/* Anonymous Toggle */}
                    <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <EyeOff className="w-4 h-4 text-gray-500" />
                        <div>
                          <span className="text-xs font-bold text-gray-800 block">Submit Anonymously</span>
                          <span className="text-[11px] text-gray-500">Your identity will remain completely private.</span>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="w-4 h-4 accent-[#e6000a] cursor-pointer"
                      />
                    </div>

                    {!isAnonymous && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div>
                          <label className="block text-[11px] font-bold text-gray-700 mb-1">Your Name</label>
                          <input
                            type="text"
                            value={reporterName}
                            onChange={(e) => setReporterName(e.target.value)}
                            placeholder="Full name"
                            className="w-full text-xs bg-white border border-gray-200 rounded-xl px-3 py-2 text-gray-800"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-gray-700 mb-1">Phone / Email</label>
                          <input
                            type="text"
                            value={reporterPhone}
                            onChange={(e) => setReporterPhone(e.target.value)}
                            placeholder="Contact info"
                            className="w-full text-xs bg-white border border-gray-200 rounded-xl px-3 py-2 text-gray-800"
                          />
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary w-full py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Concern Securely</span>
                    </button>
                  </form>
                ) : (
                  <div className="bg-white p-8 rounded-2xl border border-emerald-200 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900">
                      Concern Successfully Submitted
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                      Thank you for speaking up. Your report has been dispatched securely to the CRC Child Safeguarding & Ethics Officer.
                    </p>
                    <div className="inline-block p-3.5 bg-emerald-50 rounded-xl border border-emerald-200">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                        Confidential Tracking Code
                      </span>
                      <span className="font-mono text-base font-black text-emerald-700">
                        {submittedCode}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 italic">
                      Please save this code for any future inquiry with our designated officer.
                    </p>
                    <div>
                      <button
                        onClick={handleReset}
                        className="text-xs font-bold text-[#e6000a] hover:underline cursor-pointer"
                      >
                        Submit another report
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Safe Whistleblowing & Reporting Channels */}
              <div className="lg:col-span-5 space-y-5">
                {/* Zero Retaliation Guarantee */}
                <div className="p-6 sm:p-7 rounded-3xl bg-[#0d0f14] text-white space-y-3 relative overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-red-950/80 text-[#e6000a] flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    You Can Speak Up Without Fear
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    “CRC GSTU does not tolerate retaliation against anyone who raises a genuine concern in good faith. You should not be threatened, intimidated, punished, excluded, or otherwise disadvantaged simply because you have raised a legitimate concern.”
                  </p>
                  <div className="pt-2 border-t border-gray-800 text-[11px] text-gray-400">
                    Strict Confidentiality Guarantee · Whistleblower Protection
                  </div>
                </div>

                {/* Multiple Reporting Channels */}
                <div className="p-6 rounded-3xl bg-white border border-gray-200 space-y-4">
                  <h4 className="font-heading text-sm font-bold text-[#0d0f14] uppercase tracking-wider">
                    Official Reporting Channels (4.1)
                  </h4>
                  <ul className="space-y-3 text-xs text-gray-700">
                    <li className="flex items-start gap-2.5">
                      <Mail className="w-4 h-4 text-[#e6000a] shrink-0 mt-0.5" />
                      <div>
                        <strong>Confidential Email:</strong>
                        <span className="block text-gray-600">safeguarding@gstu-crc.org / crcgstu@gmail.com</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                      <div>
                        <strong>Campus Emergency Hotline:</strong>
                        <span className="block text-gray-600">+880 1700-000000 (Available 24/7)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <UserCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Designated Officer:</strong>
                        <span className="block text-gray-600">
                          Request a private, one-on-one meeting with a designated safeguarding member.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Social Welfare Manifesto (Section 4.2) */}
        <section className="py-14 sm:py-20 bg-[#f6f4f1] border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#007938]">
                Section 4.2 · Social Welfare Responsibility
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight leading-tight">
                A Commitment to the Welfare of Society
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-[#007938] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0d0f14]">
                  Standing Beside People in Need
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  “We believe that a humane society is one where people do not have to face hardship alone. Everyone deserves dignity, care, respect, and the opportunity to live a better life.”
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e6000a] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0d0f14]">
                  A Responsibility We Choose to Carry
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  “For us, social welfare is not merely an activity. It is a responsibility we choose to carry within the limits of our institutional capacity and available resources.”
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0d0f14]">
                  Together for a Humane Society
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  “By bringing together our members, volunteers, alumni, supporters, professionals, institutions, and communities, we can turn concern into action and action into meaningful change.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Ethical Code, Trust, & Data Protection (4.3 - 4.5) */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e6000a]">
                Sections 4.3 – 4.5 · Institutional Standards
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] font-black tracking-tight">
                Code of Conduct & Data Protection
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200 space-y-2.5">
                <span className="text-xs font-bold uppercase text-[#e6000a]">Section 4.3</span>
                <h3 className="font-heading text-base font-bold text-[#0d0f14]">
                  Code of Conduct for Volunteers
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every volunteer teacher and coordinator agrees to prioritize child dignity, refrain from verbal or physical reprimand, maintain neutrality, and protect student welfare above all else.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200 space-y-2.5">
                <span className="text-xs font-bold uppercase text-[#007938]">Section 4.4</span>
                <h3 className="font-heading text-base font-bold text-[#0d0f14]">
                  Trust & Accountability
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  CRC GSTU operates transparent accounts with periodic internal and independent audits. Any member has the right to inspect expenditure documentation via the monitoring committee.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f6f4f1] border border-gray-200 space-y-2.5">
                <span className="text-xs font-bold uppercase text-blue-600">Section 4.5</span>
                <h3 className="font-heading text-base font-bold text-[#0d0f14]">
                  Child Dignity & Data Protection
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Photographs and personal data of children are handled ethically. We strictly prohibit exploiting poverty or distress for sensationalism, ensuring the identity and dignity of every child is preserved.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0d0f14] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Want to learn more about our operational routine and school?
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Explore how our volunteers translate these promises into daily classroom action.
                </p>
              </div>
              <Link
                href="/school"
                className="btn btn-primary px-6 py-3 text-xs sm:text-sm font-bold shadow-md shrink-0 flex items-center gap-1.5"
              >
                <span>Explore Hatekhori School</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <JaagoFooter />
    </div>
  );
}
