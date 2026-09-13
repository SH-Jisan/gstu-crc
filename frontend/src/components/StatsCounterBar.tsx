"use client";

import React from "react";
import { Users, HeartHandshake, MapPin, CalendarCheck } from "lucide-react";

export default function StatsCounterBar() {
  const stats = [
    {
      icon: Users,
      value: "1,200+",
      label: "Children Supported",
    },
    {
      icon: HeartHandshake,
      value: "350+",
      label: "Active Student Volunteers",
    },
    {
      icon: MapPin,
      value: "6",
      label: "Campus Branches",
    },
    {
      icon: CalendarCheck,
      value: "180+",
      label: "Field Events & Drives",
    },
  ];

  return (
    <section className="bg-[#e6000a] text-white overflow-hidden shadow-lg border-b border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 transition-transform hover:-translate-y-0.5 duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-3 shadow-inner">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-red-100 font-sans">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
