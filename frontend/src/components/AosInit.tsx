"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

export default function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    let lastWidth = window.innerWidth;
    let resizeTimer: ReturnType<typeof setTimeout>;

    // 1. Initialize AOS with resilient settings
    AOS.init({
      duration: 550,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 20,
      delay: 0,
      disable: false,
      anchorPlacement: "top-bottom",
    });

    // 2. Rescan DOM (refreshHard) after React hydration settles
    const timer1 = setTimeout(() => {
      AOS.refreshHard();
    }, 150);

    const timer2 = setTimeout(() => {
      AOS.refreshHard();
    }, 600);

    // 3. Ignore vertical resize from mobile URL address bar hide/show
    const handleResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          AOS.refreshHard();
        }, 150);
      }
    };

    const handleOrientationChange = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        lastWidth = window.innerWidth;
        AOS.refreshHard();
      }, 200);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleOrientationChange, {
      passive: true,
    });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [pathname]);

  return null;
}
