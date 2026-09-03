"use client";

import React from "react";
import { Heart, ArrowRight, Sparkles, BookOpen, ShieldCheck } from "lucide-react";

interface JaagoHeroProps {
  onOpenDonate: () => void;
}

export default function JaagoHero({ onOpenDonate }: JaagoHeroProps) {
  return (
    <section className="relative bg-gray-900 text-white pt-32 sm:pt-36 pb-20 lg:pb-28 overflow-hidden">
      {/* Background Decorative Geometric Subtle Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFCD05_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient glowing orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFCD05]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 bg-gray-800/90 border border-gray-700 px-4 py-1.5 rounded-full text-xs font-bold text-[#FFCD05] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FFCD05]" />
              <span>Founded 5 June 2016 at GSTU Campus • 10 Years of Impact</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.08] text-white">
              Transform the Lives of{" "}
              <span className="text-[#FFCD05]">Street Children</span> With Free
              Education
            </h1>

            {/* Subtitle / Quote */}
            <blockquote className="border-l-4 border-[#FFCD05] pl-4 text-base sm:text-lg text-gray-300 italic">
              &quot;The World Will Be Free from Street Children by Connected Together.&quot;
            </blockquote>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal max-w-2xl">
              <strong>Come for Road Child (CRC)</strong> breaks generational poverty 
              through our flagship <strong className="text-white">Hatekhori Free School (হাতিখড়ি স্কুল)</strong>, 
              mobilizing university student volunteer teachers, nutritious midday meals, and radical financial transparency.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                id="btn-jaago-hero-sponsor"
                onClick={onOpenDonate}
                className="flex items-center justify-center font-black text-sm sm:text-base bg-[#FFCD05] hover:bg-[#e6b800] text-gray-950 px-8 py-4 rounded-full shadow-xl hover:shadow-[#FFCD05]/30 transition-all duration-150 transform hover:-translate-y-0.5"
              >
                <Heart className="w-5 h-5 mr-2 fill-gray-950" />
                Sponsor a Child Now
              </button>

              <a
                href="#sponsor-child"
                className="flex items-center justify-center font-bold text-sm bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-6 py-4 rounded-full transition-colors"
              >
                <BookOpen className="w-4 h-4 mr-2 text-[#FFCD05]" />
                Explore Hatekhori School
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>

            {/* Verified Badges */}
            <div className="pt-3 flex flex-wrap gap-4 text-xs font-semibold text-gray-400">
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-400" />
                Child Safeguarding Anti-Harm Policy
              </span>
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-[#FFCD05]" />
                100% Chartered Accountant Audited
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 group">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
                alt="Smiling child student holding books at Hatekhori School"
                className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 bg-gray-900/90 border border-gray-700 text-[#FFCD05] text-xs font-black uppercase px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                Hatekhori School • Since 2017
              </div>

              {/* Bottom Card Summary */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-bold text-[#FFCD05] uppercase tracking-wider">
                  Full Monthly Sponsorship
                </div>
                <div className="text-2xl font-black text-white mt-0.5">
                  ৳1,500 <span className="text-xs font-normal text-gray-300">/ child per month</span>
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  Covers free tuition, school bag, books, uniform & warm midday nourishment.
                </p>

                <button
                  onClick={onOpenDonate}
                  className="mt-3 w-full py-2.5 bg-[#FFCD05] hover:bg-[#e6b800] text-gray-950 text-xs font-black rounded-xl transition-colors"
                >
                  Sponsor This Classroom
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
