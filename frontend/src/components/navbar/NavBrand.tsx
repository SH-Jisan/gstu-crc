"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBrand() {
  return (
    <Link href="/" className="group flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
      <div className="relative size-8 sm:size-10 shrink-0 transition-transform duration-300 group-hover:scale-105 active:scale-95 drop-shadow-sm">
        <Image
          src="/logo/logo-navbar.png"
          alt="Come For Road Child (CRC) Official Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain rounded-full"
          priority
        />
      </div>
      <span className="flex flex-col text-left leading-tight">
        <span className="block font-heading text-xs xs:text-sm sm:text-base font-black text-[#0d0f14] group-hover:text-[#e6000a] transition-colors tracking-tight whitespace-nowrap">
          Come For Road Child
        </span>
        <span className="block text-[9px] sm:text-[11px] font-bold tracking-[0.18em] text-gray-500 uppercase mt-0.5 whitespace-nowrap">
          GSTU BRANCH
        </span>
      </span>
    </Link>
  );
}
