"use client";

import React from "react";
import {
  Heart,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  School,
  Users,
  MapPin,
  Sparkles,
} from "lucide-react";
import { CRC_META, MOCK_STATS } from "../data/crcMockData";

interface HeroSectionProps {
  onOpenDonate: () => void;
}

export default function HeroSection({ onOpenDonate }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white py-20 lg:py-28">
      {/* Ambient background glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission, Slogan & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 bg-blue-900/60 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-300 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Celebrating 10 Years of Compassion (2016 – 2026)</span>
            </div>

            {/* Main Headline & Slogan */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              The World Will Be Free From Street Children by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Connected Together
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Founded on <strong className="text-white">5 June 2016</strong> at{" "}
              <strong className="text-amber-300">Gopalganj Science and Technology University (GSTU)</strong>,{" "}
              <strong>Come for Road Child (CRC)</strong> breaks the cycle of poverty through{" "}
              <span className="underline decoration-amber-400 underline-offset-4">
                Hatekhori Free School
              </span>
              , emergency winter relief, child safeguarding, and 100% transparent chartered accountant audits.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                id="btn-hero-donate"
                onClick={onOpenDonate}
                className="flex items-center justify-center font-bold text-base bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 px-7 py-4 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-150 transform hover:-translate-y-0.5"
              >
                <Heart className="w-5 h-5 mr-2 fill-slate-950" />
                Support a Child Today
              </button>

              <a
                href="#hatekhori"
                className="flex items-center justify-center font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-4 rounded-xl backdrop-blur-md transition-all hover:border-white/30"
              >
                <BookOpen className="w-4 h-4 mr-2 text-blue-300" />
                Explore Hatekhori School
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Principles Badges */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-400">
              <div className="flex items-center bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-400" />
                Brotherhood, Commitment & Trust
              </div>
              <div className="flex items-center bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-blue-400" />
                Non-Political & Humanitarian
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/60 backdrop-blur-xl">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
                  alt="Children smiling at Hatekhori School"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating Safeguarding Badge */}
                <div className="absolute top-4 left-4 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full flex items-center shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                  Child Safeguarding Verified
                </div>

                {/* Floating Location Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                    Flagship Project Since 2017
                  </div>
                  <div className="text-lg font-extrabold text-white">
                    Hatekhori School (হাতিখড়ি স্কুল)
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Free institutional schooling for street children run by university volunteers.
                  </div>
                </div>
              </div>

              {/* Card Footer Ticker */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-700/50 flex justify-between items-center text-xs">
                <div>
                  <span className="text-slate-400">Monthly Child Support:</span>
                  <span className="ml-1 text-white font-bold text-sm">৳1,500 / mo</span>
                </div>
                <button
                  onClick={onOpenDonate}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded-lg transition-colors"
                >
                  Sponsor Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistical Counter Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {MOCK_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 text-center hover:bg-slate-800/60 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                {stat.value}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
