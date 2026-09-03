"use client";

import React, { useState } from "react";
import {
  Heart,
  X,
  CreditCard,
  Building,
  CheckCircle2,
  Copy,
  Download,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Campaign } from "../data/crcMockData";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCampaign?: Campaign;
}

export default function DonationModal({
  isOpen,
  onClose,
  initialCampaign,
}: DonationModalProps) {
  const [selectedProgram, setSelectedProgram] = useState(
    initialCampaign ? initialCampaign.title : "Hatekhori School Free Education"
  );
  const [amount, setAmount] = useState("1500");
  const [paymentMethod, setPaymentMethod] = useState<"bKash" | "Nagad" | "Bank" | "Card">("bKash");
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [trxId, setTrxId] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState("");
  const [copiedNumber, setCopiedNumber] = useState(false);

  if (!isOpen) return null;

  const quickAmounts = ["500", "1000", "1500", "3000", "5000"];

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `CRC-DON-${Math.floor(10000 + Math.random() * 90000)}`;
    setReceiptNumber(code);
    setIsCompleted(true);
  };

  const handleResetAndClose = () => {
    setIsCompleted(false);
    setTrxId("");
    setDonorName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="glass-modal bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Header */}
            <div className="flex items-center space-x-3 pb-2 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 flex items-center justify-center font-black text-xl shrink-0 shadow-md">
                <Heart className="w-6 h-6 fill-slate-950" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase text-amber-600 tracking-wider">
                  Module 5 • Secure Child Support Portal
                </span>
                <h3 className="text-xl font-black text-slate-900 leading-tight">
                  Make a Meaningful Donation
                </h3>
              </div>
            </div>

            {/* Program Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Select Cause / Program
              </label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option>Hatekhori School Free Education (৳1,500/Child)</option>
                <option>Winter Warmth & Blanket Distribution</option>
                <option>Emergency Healthcare & Surgery Fund</option>
                <option>Eid Clothes & Food Packets</option>
                <option>CRC General Humanitarian Fund</option>
              </select>
            </div>

            {/* Quick Amount Buttons */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Donation Amount (BDT)
              </label>
              <div className="grid grid-cols-5 gap-2 mb-2">
                {quickAmounts.map((amt) => (
                  <button
                    type="button"
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      amount === amt
                        ? "bg-amber-500 text-slate-950 shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    ৳{amt}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-xs font-bold text-slate-400">
                  ৳
                </span>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full text-sm font-bold bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Custom amount in BDT"
                />
              </div>
            </div>

            {/* Payment Method Tabs */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Choose Payment Method
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(["bKash", "Nagad", "Bank", "Card"] as const).map((method) => (
                  <button
                    type="button"
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition-all border ${
                      paymentMethod === method
                        ? "border-amber-500 bg-amber-50 text-amber-900 shadow-xs"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Account Instruction Box */}
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-700 space-y-1.5">
              {paymentMethod === "bKash" && (
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-rose-600">bKash Merchant:</span>
                    <span className="font-mono font-bold ml-1.5 text-slate-900">01700-112233</span>
                    <div className="text-[10px] text-slate-500">Make Payment • Counter 1</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("01700112233")}
                    className="p-1.5 text-xs bg-white border border-slate-200 rounded-lg hover:bg-slate-100 flex items-center font-semibold text-slate-700"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    {copiedNumber ? "Copied!" : "Copy"}
                  </button>
                </div>
              )}

              {paymentMethod === "Nagad" && (
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-amber-700">Nagad Merchant:</span>
                    <span className="font-mono font-bold ml-1.5 text-slate-900">01700-445566</span>
                    <div className="text-[10px] text-slate-500">Merchant Payment Option</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("01700445566")}
                    className="p-1.5 text-xs bg-white border border-slate-200 rounded-lg hover:bg-slate-100 flex items-center font-semibold text-slate-700"
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    {copiedNumber ? "Copied!" : "Copy"}
                  </button>
                </div>
              )}

              {paymentMethod === "Bank" && (
                <div className="text-[11px] space-y-0.5">
                  <div className="font-bold text-blue-900">Islami Bank Bangladesh Ltd (IBBL)</div>
                  <div>Account: <strong className="font-mono">Come for Road Child (CRC)</strong></div>
                  <div>A/C Number: <strong className="font-mono">2050-1234-5678-9000</strong></div>
                  <div className="text-slate-500">Gopalganj Branch • Routing: 125350000</div>
                </div>
              )}

              {paymentMethod === "Card" && (
                <div className="text-[11px] text-slate-600 flex items-center">
                  <CreditCard className="w-4 h-4 mr-1.5 text-slate-700" />
                  <span>Stripe & SSLCommerz gateway active for Visa, Mastercard, AMEX & International Donors.</span>
                </div>
              )}
            </div>

            {/* Donor Details & TrxID */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Md. Rahim"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Phone / Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="01711-xxxxxx"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Transaction ID (TrxID)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 9J82KD84LS"
                  value={trxId}
                  onChange={(e) => setTrxId(e.target.value)}
                  className="w-full text-xs font-mono font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <button
              id="btn-submit-donation"
              type="submit"
              className="w-full mt-3 flex items-center justify-center font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 py-3.5 rounded-xl shadow-md transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 mr-2 fill-slate-950" /> Confirm Donation & Generate Receipt
            </button>
          </form>
        ) : (
          /* Success Screen with Simulated PDF Receipt */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Donation Verified & Logged
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                Thank You, {donorName || "Kind Donor"}!
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto mt-1 leading-relaxed">
                Your contribution of <strong>৳{amount}</strong> to <em>{selectedProgram}</em> directly 
                transforms the life of an underprivileged child.
              </p>
            </div>

            {/* Receipt Dossier Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-2 font-bold text-slate-900">
                <span>Receipt Number:</span>
                <span className="font-mono text-blue-700">{receiptNumber}</span>
              </div>
              <div className="flex justify-between text-slate-600 pt-1">
                <span>Payment Mode:</span>
                <span className="font-semibold text-slate-800">{paymentMethod} (TrxID: {trxId})</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Status:</span>
                <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                  VERIFIED (Audited Account)
                </span>
              </div>
            </div>

            {/* Simulated Receipt Download Action */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => alert(`Simulated downloading official PDF receipt: ${receiptNumber}.pdf`)}
                className="w-full flex items-center justify-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                <Download className="w-4 h-4 mr-2" /> Download Official PDF Receipt
              </button>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
