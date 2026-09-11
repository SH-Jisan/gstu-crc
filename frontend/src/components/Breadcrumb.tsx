"use client";

import React from "react";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  variant?: "banner" | "light" | "dark" | "bar";
  className?: string;
}

export default function Breadcrumb({
  items = [],
  variant = "bar",
  className = "",
}: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...items,
  ];

  // Generate Google BreadcrumbList Structured Data (Schema.org JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://gstu-crc.org${item.href}` } : {}),
    })),
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "bar":
        return {
          container: "bg-transparent border-transparent px-0 py-0 shadow-none text-gray-600",
          homeIcon: "text-gray-500 hover:text-[#e6000a]",
          link: "text-gray-600 hover:text-[#e6000a] font-medium",
          separator: "text-gray-400",
          active: "text-[#0d0f14] font-bold",
        };
      case "light":
        return {
          container: "bg-white/90 border-gray-200 text-gray-600 shadow-sm px-3.5 py-1.5 rounded-full border",
          homeIcon: "text-gray-500 hover:text-[#e6000a]",
          link: "text-gray-600 hover:text-[#e6000a]",
          separator: "text-gray-400",
          active: "text-[#0d0f14] font-bold",
        };
      case "dark":
        return {
          container: "bg-gray-900/80 border-gray-700/60 text-gray-300 shadow-sm px-3.5 py-1.5 rounded-full border",
          homeIcon: "text-gray-400 hover:text-[#e6000a]",
          link: "text-gray-300 hover:text-white",
          separator: "text-gray-600",
          active: "text-white font-bold",
        };
      case "banner":
      default:
        return {
          container: "bg-black/35 backdrop-blur-md border-white/20 text-white/90 shadow-sm px-3.5 py-1.5 rounded-full border",
          homeIcon: "text-white/80 hover:text-white",
          link: "text-white/85 hover:text-white hover:underline underline-offset-2",
          separator: "text-white/45",
          active: "text-white font-bold tracking-wide",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <>
      {/* 1. SEO Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 2. Semantic Accessible Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`inline-flex items-center text-xs font-semibold select-none ${styles.container} ${className}`}
      >
        <ol className="flex items-center gap-1.5 sm:gap-2 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-1.5 sm:gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={`${index + 1}`} />

                {isFirst ? (
                  <Link
                    href="/"
                    itemProp="item"
                    className={`inline-flex items-center gap-1.5 transition-colors ${styles.homeIcon}`}
                    title="Back to CRC Homepage"
                  >
                    <Home className="w-3.5 h-3.5 shrink-0" />
                    <span itemProp="name" className="hover:underline underline-offset-2">
                      Home
                    </span>
                  </Link>
                ) : item.href && !isLast ? (
                  <Link
                    href={item.href}
                    itemProp="item"
                    className={`transition-colors ${styles.link}`}
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span
                    itemProp="name"
                    aria-current="page"
                    className={styles.active}
                  >
                    {item.label}
                  </span>
                )}

                {/* Separator Chevron */}
                {!isLast && (
                  <ChevronRight
                    className={`w-3 h-3 shrink-0 ${styles.separator}`}
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
