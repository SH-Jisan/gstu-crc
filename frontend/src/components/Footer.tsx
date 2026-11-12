"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0f14] text-white relative">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1 (4 cols): Brand Info & Social Icons */}
          <div className="lg:col-span-4 space-y-4">
            {/* Red Square CRC Logo Badge */}
            <div className="bg-[#e6000a] text-white font-black text-xl px-3.5 py-1.5 w-fit font-heading tracking-wider select-none">
              CRC
            </div>

            <h3 className="font-heading text-lg font-bold text-white tracking-tight">
              Come For Road Child
            </h3>

            <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-[300px]">
              “পথশিশু মুক্ত পৃথিবী গড়ব একসাথে” — a student-run voluntary organisation working for
              street children since 2016.
            </p>

            {/* Social Media Square Outlined Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-gray-700 hover:border-gray-400 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-gray-700 hover:border-gray-400 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="mailto:crcgstu@gmail.com"
                className="w-8 h-8 border border-gray-700 hover:border-gray-400 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2 (2.5 cols): EXPLORE */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[#e6000a] font-bold text-xs uppercase tracking-[0.2em] block mb-4">
              EXPLORE
            </span>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About CRC
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Programs &amp; Activities
                </Link>
              </li>
              <li>
                <Link href="/school" className="hover:text-white transition-colors">
                  CRC School
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-white transition-colors">
                  Branches
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-white transition-colors">
                  Members
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (2.5 cols): PARTICIPATE */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[#e6000a] font-bold text-xs uppercase tracking-[0.2em] block mb-4">
              PARTICIPATE
            </span>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-gray-300">
              <li>
                <Link href="/media" className="hover:text-white transition-colors">
                  Media &amp; Gallery
                </Link>
              </li>
              <li>
                <Link href="/#volunteer" className="hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/promises" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#sponsor" className="hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (3.5 cols): HEAD OFFICE */}
          <div className="lg:col-span-4 space-y-3.5">
            <span className="text-[#e6000a] font-bold text-xs uppercase tracking-[0.2em] block mb-4">
              HEAD OFFICE
            </span>
            <div className="space-y-3 text-xs sm:text-[13px] text-gray-300">
              <div className="flex items-start gap-2.5 leading-snug">
                <MapPin className="w-4 h-4 text-[#007938] shrink-0 mt-0.5" />
                <span>
                  Gopalganj Science &amp; Technology University, Gopalganj 8100, Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#007938] shrink-0" />
                <a
                  href="mailto:crcgstu@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  crcgstu@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#007938] shrink-0" />
                <a
                  href="tel:+8801711000001"
                  className="hover:text-white transition-colors"
                >
                  +880 1XXX-XXXXXX
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="border-t border-gray-800/80 pt-6 mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2026 Come For Road Child (CRC), GSTU Branch.</p>
          <p>Brotherhood · Commitment · Trust</p>
        </div>
      </div>
    </footer>
  );
}
