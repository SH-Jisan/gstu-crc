"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Heart,
  Award,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface HatekhoriSchoolProps {
  onOpenDonate: () => void;
}

export default function HatekhoriSchool({ onOpenDonate }: HatekhoriSchoolProps) {
  const [activeTab, setActiveTab] = useState<"curriculum" | "nutrition" | "teachers">("curriculum");

  return (
    <section id="hatekhori" className="py-20 bg-white border-y border-slate-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-700 bg-amber-100/80 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Flagship Educational Initiative • Since 2017</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hatekhori School (হাতিখড়ি স্কুল)
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Established at the CRC GSTU branch in 2017, Hatekhori School is our first institutional 
            educational program providing completely free primary schooling, books, uniforms, and nourishment 
            to underprivileged street children.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                alt="Children learning at Hatekhori School"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold mb-1">
                  <Award className="w-4 h-4" />
                  <span>GSTU University Student Volunteers</span>
                </div>
                <h3 className="text-xl font-bold">
                  Learning, Dignity & A Brighter Tomorrow
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  University students voluntarily spend their afternoons teaching, mentoring, and protecting street children.
                </p>
              </div>
            </div>

            {/* Float Highlight Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-white p-4 rounded-2xl shadow-xl border border-slate-100 items-center space-x-3 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl">
                0৳
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  100% Free Schooling
                </div>
                <div className="text-[11px] text-slate-500">
                  Tuition, books, supplies & lunch covered by donors.
                </div>
              </div>
            </div>
          </div>

          {/* Tabbed Interactive Information (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Navigation Tabs */}
            <div className="flex space-x-2 border-b border-slate-200 pb-2">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`text-sm font-bold pb-2 px-3 transition-colors border-b-2 ${
                  activeTab === "curriculum"
                    ? "border-amber-500 text-amber-600"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                1. Curriculum & Literacy
              </button>
              <button
                onClick={() => setActiveTab("nutrition")}
                className={`text-sm font-bold pb-2 px-3 transition-colors border-b-2 ${
                  activeTab === "nutrition"
                    ? "border-amber-500 text-amber-600"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                2. Midday Nutrition & Health
              </button>
              <button
                onClick={() => setActiveTab("teachers")}
                className={`text-sm font-bold pb-2 px-3 transition-colors border-b-2 ${
                  activeTab === "teachers"
                    ? "border-amber-500 text-amber-600"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                3. Volunteer Teachers
              </button>
            </div>

            {/* Tab Contents */}
            {activeTab === "curriculum" && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-xl font-bold text-slate-900">
                  Holistic Early Childhood Development
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Beyond rote learning, Hatekhori School focuses on building foundational literacy in Bangla and English, 
                  basic arithmetic, moral values, and personal hygiene.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Bangla & English Literacy
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Arithmetic & Practical Math
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Art, Music & Creativity
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Handwashing & Sanitation Habits
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-xl font-bold text-slate-900">
                  A Hungry Belly Cannot Study
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Many street children must scavenge or beg to eat. Hatekhori School ensures every student receives a warm, 
                  nutritious meal (eggs, milk, khichuri, fruits) during classes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Fresh Daily Midday Meals
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Quarterly Pediatric Health Checks
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Dental & Eye Care Screening
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Free Seasonal Clothing Support
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "teachers" && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-xl font-bold text-slate-900">
                  University Student Volunteer Teachers
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Students from Gopalganj Science and Technology University (GSTU) and neighboring institutions commit their 
                  personal time to become educators and mentors, forming an enduring bond of brotherhood and empathy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      40+ Active Volunteer Tutors
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Child Psychology & Safeguarding Trained
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Weekly Curricular Review
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">
                      Student-to-Child Ratio of 1:8
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Sponsorship Card Callout */}
            <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/40 rounded-2xl p-6 mt-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="text-xs font-extrabold text-amber-700 uppercase tracking-wider">
                    Direct Sponsorship Program
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 mt-0.5">
                    Support a Child at Hatekhori School
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Just <strong>৳1,500 ($14) per month</strong> covers full tuition, uniform, stationery, and warm meals.
                  </p>
                </div>

                <button
                  id="btn-sponsor-child"
                  onClick={onOpenDonate}
                  className="shrink-0 flex items-center font-bold text-sm bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-3 rounded-xl shadow-md transition-all duration-150 transform hover:scale-102"
                >
                  <Heart className="w-4 h-4 mr-2 fill-slate-950" />
                  Sponsor a Child Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
