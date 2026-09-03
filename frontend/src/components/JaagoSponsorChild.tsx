"use client";

import React, { useState } from "react";
import { Heart, CheckCircle2, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";

interface JaagoSponsorChildProps {
  onOpenDonate: () => void;
}

export default function JaagoSponsorChild({
  onOpenDonate,
}: JaagoSponsorChildProps) {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="sponsor-child" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature 50/50 Split Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          {/* Left Column: Full-Bleed Child Photo (50%) */}
          <div className="lg:w-1/2 relative min-h-[380px] lg:min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
              alt="Sponsor a child in Bangladesh with CRC Hatekhori School"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent lg:hidden" />
            
            {/* Mobile overlay text */}
            <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
              <span className="text-xs font-bold text-[#FFCD05] uppercase">
                Hatekhori School (হাতিখড়ি স্কুল)
              </span>
              <h4 className="text-lg font-bold">
                Give an underprivileged child a future today.
              </h4>
            </div>
          </div>

          {/* Right Column: Narrative & Action (50%) */}
          <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-600">
                Flagship Initiative • Since 2017
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-900 mt-1">
                Sponsor a Child Program
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We believe in the unbounded potential of every street child. Through{" "}
              <strong>Hatekhori School</strong>, founded at GSTU, we provide 
              completely free formal schooling, school uniforms, stationery, and 
              nutritious midday meals to destitute children who otherwise collect scraps or beg.
            </p>

            {/* Plan Selector Pills */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={() => setSelectedPlan("monthly")}
                className={`p-3.5 rounded-2xl text-left border-2 transition-all ${
                  selectedPlan === "monthly"
                    ? "border-[#FFCD05] bg-amber-50/50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="text-[11px] uppercase font-bold text-gray-500">
                  Monthly Support
                </div>
                <div className="text-xl font-black text-gray-900 mt-0.5">
                  ৳1,500 <span className="text-xs font-normal text-gray-500">/mo</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPlan("yearly")}
                className={`p-3.5 rounded-2xl text-left border-2 transition-all ${
                  selectedPlan === "yearly"
                    ? "border-[#FFCD05] bg-amber-50/50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="text-[11px] uppercase font-bold text-gray-500">
                  Annual Support
                </div>
                <div className="text-xl font-black text-gray-900 mt-0.5">
                  ৳18,000 <span className="text-xs font-normal text-gray-500">/yr</span>
                </div>
              </button>
            </div>

            {/* Included in Sponsorship */}
            <div className="space-y-2 text-xs font-semibold text-gray-700">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tuition, textbooks, notebooks & school supplies</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily warm midday nutritious meals & health checkups</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Quarterly student academic progress report sent to donor</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="w-full sm:w-auto flex items-center justify-center font-black text-sm uppercase bg-[#FFCD05] hover:bg-[#e6b800] text-gray-950 px-8 py-4 rounded-full shadow-lg hover:shadow-[#FFCD05]/30 transition-all duration-150 transform hover:scale-[1.02]"
              >
                <Heart className="w-4 h-4 mr-2 fill-gray-950" />
                Sponsor a Child Now
              </button>
            </div>

            <div className="text-[11px] text-gray-500 flex items-center pt-1">
              <ShieldCheck className="w-4 h-4 mr-1 text-emerald-600" />
              100% of your child sponsorship goes directly to educational programs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
