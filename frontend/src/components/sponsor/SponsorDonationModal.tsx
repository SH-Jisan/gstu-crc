"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
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

interface SponsorDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

export default function SponsorDonationModal({
  isOpen,
  onClose,
}: SponsorDonationModalProps) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"mobile" | "bank">("mobile");
  const [selectedPlan, setSelectedPlan] = useState<string>("1500");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopy = (text: string, fieldId: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sponsor-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[90svh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-red-50 flex items-center justify-center text-[#e6000a] shrink-0">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#e6000a]">
              Come for Road Child (CRC) · GSTU
            </span>
            <h3
              id="sponsor-modal-title"
              className="font-heading text-lg sm:text-2xl font-bold text-[#0d0f14]"
            >
              Direct Sponsorship & Donation
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
          Your contribution directly covers schooling, uniforms, learning materials, and nutritious lunch meals for street children at Hatekhori Free School.
        </p>

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

        <div className="flex flex-wrap border-b border-gray-200 mb-5 gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("mobile")}
            className={`pb-2.5 sm:pb-3 px-2.5 sm:px-4 font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === "mobile"
                ? "border-[#e6000a] text-[#e6000a]"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Mobile Banking</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("bank")}
            className={`pb-2.5 sm:pb-3 px-2.5 sm:px-4 font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === "bank"
                ? "border-[#e6000a] text-[#e6000a]"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Bank Transfer</span>
          </button>
        </div>

        {activeTab === "mobile" && (
          <div className="space-y-3 mb-6">
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
                  className="p-1 rounded bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
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

        <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs leading-relaxed mb-6">
          <div className="font-bold flex items-center gap-1.5 mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Reference Note</span>
          </div>
          Please mention <strong>CRC-SPONSOR</strong> or your phone number in the transaction reference note so our finance secretariat can verify and send your confirmation receipt.
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-gray-100 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-[#007938]" />
            <span>
              Hotline: <strong>+880 1711-000001</strong>
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold bg-gray-900 text-white hover:bg-black transition-colors cursor-pointer"
          >
            Close & Return
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
