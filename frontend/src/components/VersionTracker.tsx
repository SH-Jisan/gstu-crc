"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import versionData from "@/version.json";

/**
 * VersionTracker
 * 
 * Automatically synchronizes the browser's address bar (URL) with the latest
 * deployment version (e.g. ?v=v1.0.0-f53268f) and exposes console diagnostics.
 */
export default function VersionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Console deployment signature for instant QA verification
    if (pathname === "/") {
      console.log(
        `%c🚀 Come For Road Child (CRC) %c${versionData.tag} %c(Build: ${versionData.buildDate})`,
        "background: #e6000a; color: white; font-weight: bold; padding: 3px 7px; border-radius: 4px 0 0 4px;",
        "background: #0d0f14; color: #10b981; font-weight: bold; font-family: monospace; padding: 3px 7px;",
        "background: #1f2937; color: #9ca3af; padding: 3px 7px; border-radius: 0 4px 4px 0;"
      );
    }

    // 2. Synchronize address bar URL with active version query parameter
    try {
      const currentUrl = new URL(window.location.href);
      const activeVersion = currentUrl.searchParams.get("v");

      if (activeVersion !== versionData.tag) {
        currentUrl.searchParams.set("v", versionData.tag);
        const newRelativeUrl =
          currentUrl.pathname + currentUrl.search + currentUrl.hash;
        window.history.replaceState(null, "", newRelativeUrl);
      }
    } catch {
      // Graceful fallback for non-browser or sandbox contexts
    }
  }, [pathname]);

  return null;
}
