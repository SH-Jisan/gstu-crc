import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function MembersJoinCta() {
  return (
    <section className="slash-band bg-[#e6000a] text-white py-16 px-4 relative overflow-hidden border-t-2 border-red-700">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-white mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Annual Recruitment Cohort 2026
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading font-black leading-tight text-white">
          Want to join CRC as a student volunteer or teacher?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          If you are a student at Gopalganj Science & Technology University (GSTU)
          or passionate about child welfare, join our community of changemakers.
          Give 2 hours a week and change a child&apos;s life forever.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link
            href="/#volunteer"
            className="btn btn-secondary px-8 py-3.5 text-sm font-sans font-bold text-white bg-[#0d0f14] hover:bg-[#1f2937] shadow-xl hover:scale-105 transition-transform"
          >
            Apply for Volunteer Membership
          </Link>
          <Link
            href="/school"
            className="px-6 py-3.5 text-sm font-sans font-bold text-white border-2 border-white/40 rounded-full hover:bg-white hover:text-[#0d0f14] transition-all"
          >
            Explore Hatekhori School Routine
          </Link>
        </div>
      </div>
    </section>
  );
}
