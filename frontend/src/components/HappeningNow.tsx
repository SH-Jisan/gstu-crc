"use client";

import React from "react";
import { Heart, Bell, Calendar, Download, ArrowRight, AlertCircle } from "lucide-react";
import { MOCK_CAMPAIGNS, MOCK_NOTICES, Campaign } from "../data/crcMockData";

interface HappeningNowProps {
  onOpenDonate: (campaign?: Campaign) => void;
}

export default function HappeningNow({ onOpenDonate }: HappeningNowProps) {
  return (
    <section id="happening-now" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1 text-xs font-bold text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full mb-2">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Module 1 • Happening Now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Active Campaigns & Urgent Relief
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Every taka goes directly to child welfare, schooling, and winter aid. Verified with open audit trails.
            </p>
          </div>

          <button
            onClick={() => onOpenDonate()}
            className="flex items-center text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors"
          >
            View All Campaigns <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Campaigns Grid & Notice Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Active Campaigns Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_CAMPAIGNS.map((camp) => {
              const progressPct = Math.min(
                100,
                Math.round((camp.raisedAmount / camp.targetAmount) * 100)
              );

              return (
                <div
                  key={camp.id}
                  className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-slate-200/80 bg-white"
                >
                  <div>
                    {/* Banner Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={camp.banner}
                        alt={camp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md">
                        {camp.category}
                      </div>
                      {camp.isEmergency && (
                        <div className="absolute top-3 right-3 bg-rose-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center shadow-md animate-pulse">
                          Urgent Need
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">
                        {camp.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {camp.summary}
                      </p>

                      {/* Progress Bar */}
                      <div className="mt-5 space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-900">
                            Raised: ৳{camp.raisedAmount.toLocaleString()}
                          </span>
                          <span className="text-blue-600">{progressPct}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-600 to-amber-500 rounded-full transition-all duration-1000"
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                          <span>Goal: ৳{camp.targetAmount.toLocaleString()}</span>
                          <span>{camp.donorsCount} Supporters</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => onOpenDonate(camp)}
                      className="w-full flex items-center justify-center font-bold text-sm bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white py-2.5 rounded-xl border border-blue-200 hover:border-blue-600 transition-all duration-200"
                    >
                      <Heart className="w-4 h-4 mr-1.5 fill-current" /> Donate to this Cause
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Notice Board & Circulars (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-none">
                      Official Notice Board
                    </h3>
                    <span className="text-[11px] text-slate-500">
                      Circulars & Announcements
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Live
                </span>
              </div>

              {/* Notice List */}
              <div className="divide-y divide-slate-100 mt-2">
                {MOCK_NOTICES.map((notice) => (
                  <div key={notice.id} className="py-3.5 group">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {notice.date}
                      </span>
                      <span className="bg-slate-100 text-slate-700 font-semibold px-1.5 py-0.5 rounded text-[10px]">
                        {notice.category}
                      </span>
                    </div>
                    <a
                      href="#transparency"
                      className="text-xs font-semibold text-slate-800 hover:text-blue-700 transition-colors line-clamp-2"
                    >
                      {notice.title}
                    </a>
                    <div className="mt-1.5 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">{notice.fileSize}</span>
                      <a
                        href="#transparency"
                        className="text-blue-600 font-medium hover:underline flex items-center"
                      >
                        <Download className="w-3 h-3 mr-1" /> Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notice Board Footer */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <a
                  href="#transparency"
                  className="block text-center text-xs font-bold text-slate-700 hover:text-blue-700 transition-colors"
                >
                  View All Statutory Circulars →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
