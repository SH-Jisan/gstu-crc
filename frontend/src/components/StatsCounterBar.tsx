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
      label: "Active Volunteers",
    },
    {
      icon: MapPin,
      value: "6",
      label: "Active Branches",
    },
    {
      icon: CalendarCheck,
      value: "180+",
      label: "Events & Projects",
    },
  ];

  return (
    <section className="bg-[#e6000a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white/90 mb-3"
                  strokeWidth={1.75}
                />
                <span className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-white leading-none">
                  {stat.value}
                </span>
                <span className="mt-2.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 font-sans">
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
