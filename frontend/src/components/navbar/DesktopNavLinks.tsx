"use client";

import React from "react";
import Link from "next/link";
import { navItems, megaMenus } from "@/data/navigation";

interface DesktopNavLinksProps {
  pathname: string | null;
  activeDropdown: string | null;
  onMouseEnterItem: (id: string | null) => void;
  onMouseLeaveItem: () => void;
  onNavClick: (e: React.MouseEvent, id?: string) => void;
}

export default function DesktopNavLinks({
  pathname,
  activeDropdown,
  onMouseEnterItem,
  onMouseLeaveItem,
  onNavClick,
}: DesktopNavLinksProps) {
  return (
    <nav className="hidden xl:flex items-center gap-0 2xl:gap-1.5 shrink-0" aria-label="Main Navigation">
      {navItems.map((item) => {
        const hasMega = Boolean(item.id && megaMenus[item.id]);
        const isCurrentRoute =
          item.href === "/"
            ? pathname === "/"
            : pathname?.startsWith(item.href);
        const isActive = activeDropdown === item.id || (!activeDropdown && isCurrentRoute);

        return (
          <div
            key={item.label}
            className="group/nav relative py-2"
            onMouseEnter={() =>
              hasMega ? onMouseEnterItem(item.id || null) : onMouseEnterItem(null)
            }
            onMouseLeave={onMouseLeaveItem}
          >
            <Link
              href={item.href}
              onClick={(e) => onNavClick(e, item.id)}
              className={`relative block whitespace-nowrap px-1.5 xl:px-2 2xl:px-3 py-1.5 text-xs xl:text-[12px] 2xl:text-[13.5px] font-bold transition-colors duration-200 ${
                isActive ? "text-[#e6000a]" : "text-[#0d0f14] hover:text-[#e6000a]"
              }`}
            >
              <span>{item.label}</span>
              <span
                className={`absolute bottom-0 left-1.5 right-1.5 2xl:left-2 2xl:right-2 h-[2.5px] bg-[#e6000a] rounded-full transition-all duration-300 ease-out origin-left ${
                  isActive
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100"
                }`}
                aria-hidden="true"
              />
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
