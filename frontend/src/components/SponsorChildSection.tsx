"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  Heart,
  Copy,
  Check,
  X,
  Smartphone,
  Building2,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";

export default function SponsorChildSection() {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"mobile" | "bank">("mobile");
  const [selectedPlan, setSelectedPlan] = useState<string>("1500");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleCopy = (text: string, fieldId: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section
      id="sponsor"
      className="sac-section relative bg-cover bg-no-repeat centered min-h-96 pb-12 bg-[#f6f4f1] scroll-mt-24 sm:scroll-mt-28"
    >
      {/* 1. Main 50/50 Split Card */}
      <div className="max-w-6xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row shadow-2xl md:rounded-l-2xl md:rounded-r-2xl overflow-hidden bg-white border border-gray-100">
          {/* Left Column: Picture */}
          <div className="basis-1/2 flex-1 md:rounded-l-2xl overflow-hidden relative min-h-[380px] lg:min-h-[500px]">
            <Image
              fill
              className="object-cover object-center md:rounded-l-2xl hover:scale-105 transition-transform duration-700"
              src="/assets/school.jpg"
              alt="Sponsor a street child with Come for Road Child CRC Hatekhori School"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column: Narrative Content */}
          <div className="basis-1/2 flex-1 bg-white flex items-center md:rounded-r-2xl">
            <div className="p-8 sm:p-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#e6000a] block mb-1">
                COME FOR ROAD CHILD (CRC)
              </span>
              <h2 className="uppercase text-2xl font-bold font-heading mb-4 text-[#0d0f14]">
                Sponsor a Child Program
              </h2>
              <p className="mb-5 text-base text-gray-700 leading-relaxed">
                We firmly believe in the infinite potential of every child. Education is the sacred key to unlocking that potential. Yet, due to severe poverty, broken families, and street hardships, countless children are robbed of their right to learn.
              </p>
              <p className="mb-5 text-base text-gray-700 leading-relaxed">
                Since <strong>5 June 2016</strong>, Come for Road Child (CRC) has been running <strong>Hatekhori Free School</strong>, providing foundational education, books, stationery, and daily nutritious meals to over <strong>350 street children</strong>.
              </p>
              <p className="mb-6 text-base text-gray-700 leading-relaxed">
                With just <strong className="text-[#e6000a] font-bold">BDT 1,500</strong> per month, you can sponsor a street child&apos;s complete education, textbooks, school bag, uniform, and daily nutrition. Stand with GSTU volunteers and transform a child&apos;s destiny!
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary px-8 py-3.5 text-base font-sans shadow-md capitalize font-bold text-white bg-[#e6000a] hover:bg-[#a20002] inline-flex items-center gap-2 hover:scale-105 transition-transform rounded cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-current" />
                Sponsor a Child Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Number of Unsponsored Children Static Counter Block */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 pb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#007938] block text-center mb-1">
          COMMUNITY IMPACT · HATEKHORI CAMPUS
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl text-[#0d0f14] text-center font-extrabold uppercase tracking-tight">
          Children Currently Seeking Sponsorship
        </h2>
        <p className="font-heading text-5xl sm:text-7xl text-center text-[#e6000a] font-black my-3 tracking-tight">
          120
        </p>
        <p className="text-center text-sm font-semibold text-[#007938] mb-4">
          Every BDT 1,500/month guarantees a child&apos;s complete schooling, learning supplies, and daily food.
        </p>
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary px-8 py-3.5 text-base font-sans shadow-md capitalize font-bold text-white bg-[#e6000a] hover:bg-[#a20002] inline-flex items-center gap-2 hover:scale-105 transition-transform rounded cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-current" />
            Become a Child Sponsor
          </button>
        </div>
      </div>

      {/* 3. Interactive Sponsorship & Donation Modal */}
      {mounted &&
        isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sponsor-modal-title"
            onClick={() => setIsModalOpen(false)}
          >
          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-[#e6000a] shrink-0">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#007938]">
                  Come for Road Child (CRC) · GSTU
                </span>
                <h3
                  id="sponsor-modal-title"
                  className="font-heading text-xl sm:text-2xl font-bold text-[#0d0f14]"
                >
                  Direct Sponsorship & Donation
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              Your contribution directly covers schooling, uniforms, learning materials, and nutritious lunch meals for street children at Hatekhori Free School.
            </p>

            {/* Sponsorship Tier Selection */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Select Monthly Sponsorship Level
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "1500", title: "1 Child", amount: "৳1,500/mo" },
                  { id: "3000", title: "2 Children", amount: "৳3,000/mo" },
                  { id: "custom", title: "Relief Fund", amount: "Custom" },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedPlan(tier.id)}
                    className={`py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedPlan === tier.id
                        ? "border-[#e6000a] bg-red-50/70 text-[#e6000a] font-bold shadow-sm"
                        : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                    }`}
                  >
                    <div className="text-xs font-medium">{tier.title}</div>
                    <div className="text-sm font-bold mt-0.5">{tier.amount}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Method Switcher Tabs */}
            <div className="flex border-b border-gray-200 mb-5">
              <button
                type="button"
                onClick={() => setActiveTab("mobile")}
                className={`pb-3 px-4 font-bold text-xs sm:text-sm flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === "mobile"
                    ? "border-[#e6000a] text-[#e6000a]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <Smartphone className="w-4 h-4" />
                Mobile Banking (bKash / Nagad)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("bank")}
                className={`pb-3 px-4 font-bold text-xs sm:text-sm flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === "bank"
                    ? "border-[#e6000a] text-[#e6000a]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <Building2 className="w-4 h-4" />
                Bank Account (DBBL)
              </button>
            </div>

            {/* Tab 1: Mobile Banking */}
            {activeTab === "mobile" && (
              <div className="space-y-3 mb-6">
                {/* bKash */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase text-[#e2136e] tracking-wide">
                        bKash (Send Money / Personal)
                      </span>
                    </div>
                    <p className="font-mono text-base font-bold text-gray-900 mt-0.5">
                      01711-000001
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("01711000001", "bkash")}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition-colors shadow-sm cursor-pointer"
                  >
                    {copiedField === "bkash" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#007938]" />
                        <span className="text-[#007938]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-gray-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Nagad */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase text-[#f7941d] tracking-wide">
                        Nagad (Send Money / Personal)
                      </span>
                    </div>
                    <p className="font-mono text-base font-bold text-gray-900 mt-0.5">
                      01711-000001
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("01711000001", "nagad")}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition-colors shadow-sm cursor-pointer"
                  >
                    {copiedField === "nagad" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#007938]" />
                        <span className="text-[#007938]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-gray-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Rocket */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase text-[#8c3494] tracking-wide">
                        Rocket (Personal)
                      </span>
                    </div>
                    <p className="font-mono text-base font-bold text-gray-900 mt-0.5">
                      01711-000001-8
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("017110000018", "rocket")}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-gray-200 bg-white hover:bg-gray-100 text-gray-700 transition-colors shadow-sm cursor-pointer"
                  >
                    {copiedField === "rocket" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#007938]" />
                        <span className="text-[#007938]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-gray-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: Bank Account */}
            {activeTab === "bank" && (
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-3 text-xs sm:text-sm text-gray-700 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Bank Name:</span>
                  <span className="font-bold text-gray-900">Dutch-Bangla Bank Limited (DBBL)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Branch:</span>
                  <span className="font-bold text-gray-900">Gopalganj Branch</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Account Title:</span>
                  <span className="font-bold text-gray-900">Come For Road Child CRC GSTU</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Account No:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-gray-900">115.120.0039281</span>
                    <button
                      type="button"
                      onClick={() => handleCopy("1151200039281", "dbbl")}
                      className="p-1 rounded bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors"
                      title="Copy Account Number"
                    >
                      {copiedField === "dbbl" ? (
                        <Check className="w-3.5 h-3.5 text-[#007938]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Routing Number:</span>
                  <span className="font-mono font-bold text-gray-900">090270631</span>
                </div>
              </div>
            )}

            {/* Reference Instructions */}
            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs leading-relaxed mb-6">
              <div className="font-bold flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Reference Note</span>
              </div>
              Please mention <strong>CRC-SPONSOR</strong> or your phone number in the transaction reference note so our finance secretariat can verify and send your confirmation receipt.
            </div>

            {/* Helpline / Verification */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-gray-100 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#007938]" />
                <span>Hotline: <strong>+880 1711-000001</strong></span>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold bg-gray-900 text-white hover:bg-black transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
