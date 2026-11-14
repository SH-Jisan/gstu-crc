import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Droplet,
  Building2,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { CouncilMember } from "@/data/crcMockData";
import { getCategoryColor } from "./memberConstants";

interface MemberCardProps {
  member: CouncilMember;
  index: number;
  onSelect: (member: CouncilMember) => void;
}

export default function MemberCard({ member, index, onSelect }: MemberCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={(index % 4) * 60}
      onClick={() => onSelect(member)}
      className="bg-white rounded-2xl p-5 border border-gray-200/90 hover:border-[#e6000a] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
    >
      <div>
        <div className="flex items-start gap-3.5 mb-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-sm shrink-0 border-2 border-gray-100 group-hover:scale-105 transition-transform duration-300 bg-gray-100">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 mb-1">
              <span
                className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${getCategoryColor(
                  member.category
                )}`}
              >
                {member.category}
              </span>

              <span className="inline-flex items-center gap-0.5 text-[10px] font-black px-1.5 py-0.5 rounded bg-red-50 text-[#e6000a] border border-red-200">
                <Droplet className="w-2.5 h-2.5 fill-[#e6000a]" />
                {member.bloodGroup}
              </span>
            </div>

            <h3 className="font-heading text-base font-bold text-[#0d0f14] leading-tight truncate group-hover:text-[#e6000a] transition-colors">
              {member.name}
            </h3>
            <p className="text-xs font-semibold text-[#e6000a] mt-0.5 line-clamp-1">
              {member.designation}
            </p>
          </div>
        </div>

        <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{member.department}</span>
          </div>

          <div className="flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{member.committee}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{member.branch}</span>
          </div>

          {member.session && (
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span className="text-gray-500 text-[11px]">
                Session {member.session} · {member.tenure}
              </span>
            </div>
          )}
        </div>

        <p className="mt-3 text-xs text-gray-600 leading-relaxed line-clamp-3 bg-gray-50/70 p-2.5 rounded-xl border border-gray-100">
          {member.bio}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between gap-2">
          <a
            href={`mailto:${member.email}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#e6000a] transition-colors truncate"
            title={member.email}
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{member.email}</span>
          </a>

          {member.phone && (
            <a
              href={`tel:${member.phone}`}
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-[#e6000a] flex items-center justify-center text-gray-600 shrink-0 transition-colors"
              title={member.phone}
            >
              <Phone className="w-3 h-3" />
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(member);
          }}
          className="mt-3 w-full py-1.5 bg-gray-50 group-hover:bg-red-50 text-gray-700 group-hover:text-[#e6000a] text-xs font-bold rounded-xl border border-gray-200 group-hover:border-red-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>View Full Profile</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
