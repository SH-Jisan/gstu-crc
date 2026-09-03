"use client";

import React, { useState } from "react";
import {
  Heart,
  ShieldAlert,
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Award,
  BookOpen,
  Users,
  FileText,
  MapPin,
} from "lucide-react";
import { CRC_META } from "../data/crcMockData";

interface NavbarProps {
  onOpenDonate: () => void;
  onOpenReport: () => void;
}

export default function Navbar({ onOpenDonate, onOpenReport }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-amber-400 font-medium">
              <Phone className="w-3.5 h-3.5 mr-1" />
              Emergency Helpline: {CRC_META.hotline}
            </span>
            <span className="hidden md:flex items-center text-slate-400">
              <Mail className="w-3.5 h-3.5 mr-1" />
              {CRC_META.email}
            </span>
          </div>

          <div className="flex items-center space-x-3 text-slate-300">
            <span className="hidden lg:inline text-slate-400">
              {CRC_META.slogan}
            </span>
            <span className="bg-blue-900/60 text-blue-300 border border-blue-700/50 px-2 py-0.5 rounded text-[11px] font-semibold">
              GSTU Flagship Branch
            </span>
            <span className="bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded text-[11px] font-semibold">
              Gov. Approved NGO
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass-header shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform duration-200">
                CRC
              </div>
              <div>
                <div className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                  Come for Road Child
                </div>
                <div className="text-xs text-blue-700 font-semibold tracking-wider uppercase mt-1">
                  GSTU Branch & Central Secretariat
                </div>
                <div className="text-[10px] text-slate-500 italic hidden sm:block">
                  Founded 5 June 2016
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
              <a
                href="#happening-now"
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors"
              >
                Happening Now
              </a>

              {/* Who We Are Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown("who")}
                  className="flex items-center px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors"
                >
                  Who We Are <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 p-2 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-2">
                  <a
                    href="#about"
                    className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 text-xs"
                  >
                    Founding Story & 2016 Origin
                  </a>
                  <a
                    href="#principles"
                    className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 text-xs"
                  >
                    Principles (Brotherhood, Trust)
                  </a>
                  <a
                    href="#governance"
                    className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 text-xs"
                  >
                    Three-Tier Governance Model
                  </a>
                </div>
              </div>

              <a
                href="#hatekhori"
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors flex items-center"
              >
                <BookOpen className="w-4 h-4 mr-1 text-amber-500" />
                Hatekhori School
              </a>

              <a
                href="#governance"
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors flex items-center"
              >
                <Users className="w-4 h-4 mr-1 text-blue-600" />
                Our People
              </a>

              <a
                href="#transparency"
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors flex items-center"
              >
                <FileText className="w-4 h-4 mr-1 text-emerald-600" />
                Transparency & Audits
              </a>

              <a
                href="#branches"
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/80 transition-colors flex items-center"
              >
                <MapPin className="w-4 h-4 mr-1 text-rose-500" />
                Branches
              </a>
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                id="btn-nav-report-concern"
                onClick={onOpenReport}
                className="flex items-center text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3.5 py-2 rounded-lg transition-colors shadow-xs"
              >
                <ShieldAlert className="w-4 h-4 mr-1.5 text-rose-600" />
                Report Concern
              </button>

              <button
                id="btn-nav-donate-now"
                onClick={onOpenDonate}
                className="flex items-center text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 active:scale-98"
              >
                <Heart className="w-4 h-4 mr-1.5 fill-current text-rose-300" />
                Donate Now
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={onOpenDonate}
                className="p-2 text-white bg-blue-600 rounded-lg"
                title="Donate"
              >
                <Heart className="w-4 h-4 fill-current" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a
                href="#happening-now"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100"
              >
                Happening Now
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100"
              >
                Who We Are & Founding 2016
              </a>
              <a
                href="#hatekhori"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 text-amber-600 font-semibold"
              >
                Hatekhori Free School
              </a>
              <a
                href="#governance"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100"
              >
                Our People (3 Councils)
              </a>
              <a
                href="#transparency"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 text-emerald-700"
              >
                Transparency & Audits
              </a>
              <a
                href="#branches"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100"
              >
                University Branches
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReport();
                }}
                className="w-full flex items-center justify-center py-2.5 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg"
              >
                <ShieldAlert className="w-4 h-4 mr-2" /> Report a Concern
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full flex items-center justify-center py-3 text-sm font-bold text-white bg-blue-600 rounded-lg shadow-md"
              >
                <Heart className="w-4 h-4 mr-2 fill-current" /> Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
