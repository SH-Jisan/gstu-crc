import React from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: PageHeaderProps) {
  return (
    <section className="slash-band relative bg-[#e6000a] text-white pt-40 sm:pt-44 pb-14 sm:pb-20 border-b border-red-700 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/85 mb-3 font-sans">
            {eyebrow}
          </p>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
            {title}
          </h1>

          {/* Intro / Description */}
          {intro && (
            <p className="mt-5 max-w-2xl text-white/95 text-base sm:text-lg leading-relaxed font-sans font-normal">
              {intro}
            </p>
          )}
        </div>
      </section>
  );
}
