"use client";

import React from "react";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Building,
  ArrowUp,
} from "lucide-react";
import { CRC_META } from "../data/crcMockData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Organization Bio & Slogan (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-amber-500 flex items-center justify-center text-white font-black text-lg shadow-md">
                CRC
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                {CRC_META.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Founded on <strong>5 June 2016</strong> at Gopalganj Science and Technology University (GSTU), 
              CRC is a registered social volunteer organization committed to eradicating the suffering of street 
              children through free institutional education, winter relief, and radical transparency.
            </p>

            <div className="text-xs text-amber-400 italic font-medium">
              &quot;{CRC_META.slogan}&quot;
            </div>

            <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Audited by Certified Chartered Accountants</span>
            </div>
          </div>

          {/* Column 2: 9 Core Modules Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#happening-now" className="hover:text-amber-400 transition-colors">
                  • Happening Now & Campaigns
                </a>
              </li>
              <li>
                <a href="#hatekhori" className="hover:text-amber-400 transition-colors">
                  • Hatekhori Free School (2017)
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-amber-400 transition-colors">
                  • Three-Tier Governance Councils
                </a>
              </li>
              <li>
                <a href="#transparency" className="hover:text-amber-400 transition-colors">
                  • Financial Audits & Transparency
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-amber-400 transition-colors">
                  • University Branch Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Branch Hubs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              University Branches
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• GSTU Gopalganj</li>
              <li>• Khulna Central</li>
              <li>• Islamic University (IU)</li>
              <li>• University of Barisal (BU)</li>
              <li>• MBSTU Tangail</li>
            </ul>
          </div>

          {/* Column 4: Official Secretariat Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              Secretariat Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>GSTU Branch:</strong> Academic Building, Gopalganj Science and Technology University.
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Building className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Central Office:</strong> Khulna, Bangladesh.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline: {CRC_META.hotline}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{CRC_META.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © 2016 – {new Date().getFullYear()} <strong>Come for Road Child (CRC)</strong>. All rights reserved. 
            Official Web Platform: <code className="text-slate-400">gstu-crc.org</code>.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
