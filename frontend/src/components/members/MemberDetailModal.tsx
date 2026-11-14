"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Droplet,
  Sparkles,
  GraduationCap,
  Building2,
  MapPin,
  Calendar,
  ShieldCheck,
  Mail,
  Phone,
  Copy,
  CheckCircle2,
} from "lucide-react";
import { CouncilMember } from "@/data/crcMockData";
import { getCategoryColor } from "./memberConstants";

interface MemberDetailModalProps {
  member: CouncilMember | null;
  onClose: () => void;
}

export default function MemberDetailModal({
  member,
  onClose,
}: MemberDetailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!member) return null;

  const handleCopyInfo = async () => {
    const info = `${member.name} - ${member.designation} (${member.email})`;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(info);
      }
    } catch {
      // Fallback for restricted clipboard environments
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-xl sm:max-w-2xl w-full max-h-[85svh] overflow-hidden shadow-2xl border border-gray-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Top */}
        <div className="slash-band bg-[#e6000a] h-24 sm:h-28 shrink-0 relative overflow-hidden flex items-start justify-between p-4 sm:p-5">
          <span className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/35 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white">
            <Sparkles className="w-3 h-3 text-amber-300" />
            CRC GSTU Volunteer Profile
          </span>

          <button
            type="button"
            onClick={onClose}
            className="relative z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-lg"
            aria-label="Close profile modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Member Avatar & Quick Info Header */}
        <div className="shrink-0 px-6 sm:px-8 pb-4 border-b border-gray-100 bg-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 -mt-12 sm:-mt-14 mb-3">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-gray-100 shrink-0 z-10">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-1 sm:pt-0">
              <span
                className={`text-[10px] sm:text-xs font-black uppercase px-2.5 py-1 rounded-md border ${getCategoryColor(
                  member.category
                )}`}
              >
                {member.category}
              </span>

              <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black px-2 py-1 rounded-md bg-red-50 text-[#e6000a] border border-red-200">
                <Droplet className="w-3 h-3 fill-[#e6000a]" />
                Blood: {member.bloodGroup}
              </span>

              <span className="text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200">
                {member.tenure}
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-black text-[#0d0f14] leading-tight">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-[#e6000a] mt-0.5">
              {member.designation}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-5 space-y-4 flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-gray-700">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-4 h-4 text-[#007938] shrink-0" />
              <div className="min-w-0">
                <span className="text-gray-400 block text-[9px] uppercase font-bold">
                  Academic Department
                </span>
                <span className="font-bold text-gray-900 truncate block">
                  {member.department}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-[#e6000a] shrink-0" />
              <div className="min-w-0">
                <span className="text-gray-400 block text-[9px] uppercase font-bold">
                  Assigned Committee
                </span>
                <span className="font-bold text-gray-900 truncate block">
                  {member.committee}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <div className="min-w-0">
                <span className="text-gray-400 block text-[9px] uppercase font-bold">
                  Campus Chapter
                </span>
                <span className="font-bold text-gray-900 truncate block">
                  {member.branch}
                </span>
              </div>
            </div>

            {member.session && (
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                <div className="min-w-0">
                  <span className="text-gray-400 block text-[9px] uppercase font-bold">
                    Academic Session
                  </span>
                  <span className="font-bold text-gray-900 truncate block">
                    {member.session}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
              Voluntary Contribution & Background
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-red-50/40 p-3.5 rounded-xl border border-red-100/70">
              {member.bio}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-[#007938] shrink-0" />
            <span>Verified Volunteer · Child Safeguarding & Ethics Trained</span>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="shrink-0 px-6 sm:px-8 py-3.5 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${member.email}`}
              className="btn btn-primary text-xs font-bold px-4 py-2 inline-flex items-center gap-1.5 shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Member</span>
            </a>

            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="btn btn-secondary text-xs font-bold px-3.5 py-2 inline-flex items-center gap-1.5"
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyInfo}
              className="text-xs font-bold text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-200/70 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Info</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-bold text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-200/70 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
