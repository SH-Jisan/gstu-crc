"use client";

import React from "react";
import { Mail, ShieldCheck } from "lucide-react";

interface NavbarTopBarProps {
  isSticky: boolean;
}

export default function NavbarTopBar({ isSticky }: NavbarTopBarProps) {
  return (
    <div
      className={`bg-[#0d0f14] text-white transition-all duration-300 ease-out ${
        isSticky ? "max-h-0 opacity-0 overflow-hidden py-0" : "max-h-12 opacity-100 py-1.5"
      } border-b border-gray-800/60`}
      role="complementary"
      aria-label="Campus Notice and Official Contacts"
    >
      <div className="max-w-[1536px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-sans tracking-wide">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#e6000a]" aria-hidden="true" />
          <span className="font-bold text-gray-300 tracking-wider">ESTD. 2016</span>
          <span className="hidden md:inline text-gray-500">|</span>
          <span className="hidden md:inline font-medium text-gray-400">
            Gopalganj Science &amp; Technology University
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <span className="text-gray-300 font-semibold tracking-wider uppercase text-[10px]">
            Brotherhood <span className="text-[#e6000a] mx-1">·</span> Commitment{" "}
            <span className="text-[#e6000a] mx-1">·</span> Trust
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:crcgstu@gmail.com"
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
            aria-label="Send email to CRC GSTU"
          >
            <Mail className="w-3 h-3 text-[#e6000a]" aria-hidden="true" />
            <span className="font-semibold uppercase tracking-wider text-[10.5px]">
              CRCGSTU@GMAIL.COM
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
