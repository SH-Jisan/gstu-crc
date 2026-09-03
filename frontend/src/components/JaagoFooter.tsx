"use client";

import React from "react";
import { Phone, Mail, MapPin, Building, ArrowUp, Heart } from "lucide-react";
import { CRC_META } from "../data/crcMockData";

export default function JaagoFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-gray-800">
          {/* Col 1: About CRC */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFCD05] text-gray-950 flex items-center justify-center font-black text-xl shadow-md">
                CRC
              </div>
              <div>
                <span className="text-xl font-black text-white uppercase tracking-tight">
                  {CRC_META.name}
                </span>
                <div className="text-xs text-amber-400 font-semibold">
                  GSTU Campus Secretariat & Branches
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Come for Road Child (CRC) is a registered social volunteer organization 
              founded on <strong>5 June 2016</strong> at Gopalganj Science and Technology University (GSTU). 
              We are dedicated to eradicating child homelessness and illiteracy through 
              free education at Hatekhori School and complete financial transparency.
            </p>

            <div className="text-xs text-[#FFCD05] italic font-semibold">
              &quot;The World Will Be Free from Street Children by Connected Together&quot;
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div className="space-y-4">
            <h3 className="text-white uppercase text-xl font-black tracking-tight">
              Useful Links
            </h3>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#sponsor-child" className="text-[#FFCD05] hover:underline flex items-center">
                  • Sponsor a Child (Hatekhori School)
                </a>
              </li>
              <li>
                <a href="#focus-areas" className="text-[#FFCD05] hover:underline flex items-center">
                  • Our Focus Areas
                </a>
              </li>
              <li>
                <a href="#volunteerism" className="text-[#FFCD05] hover:underline flex items-center">
                  • Volunteerism & University Chapters
                </a>
              </li>
              <li>
                <a href="#governance-transparency" className="text-[#FFCD05] hover:underline flex items-center">
                  • Three-Tier Governance & Audit Reports
                </a>
              </li>
              <li>
                <a href="#news-articles" className="text-[#FFCD05] hover:underline flex items-center">
                  • News, Stories & Circulars
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-white uppercase text-xl font-black tracking-tight">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#FFCD05] shrink-0 mt-0.5" />
                <span>
                  <strong>GSTU Chapter:</strong> Academic Building, Gopalganj Science and Technology University, Gopalganj-8100.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Building className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Central Secretariat:</strong> Khulna Division, Bangladesh.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#FFCD05] shrink-0" />
                <span>Emergency Child Helpline: {CRC_META.hotline}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{CRC_META.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © 2016 – {new Date().getFullYear()} <strong>Come for Road Child (CRC)</strong>. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
