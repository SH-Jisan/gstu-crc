"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AosInit() {
  useEffect(() => {
    // 1. Initialize AOS with responsive, touch-friendly settings
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true, // Keep elements visible once animated (prevents flickering/blank sections on mobile scroll)
      mirror: false, // Prevents elements from disappearing when scrolling past on phone screens
      offset: 35, // Trigger smoothly when element is 35px into viewport (ideal for short mobile viewports)
      delay: 0,
      disable: false, // Explicitly enable on all devices (mobile, tablet, desktop)
      anchorPlacement: "top-bottom",
    });

    // 2. Multi-stage refresh to recompute coordinates as dynamic Next.js images and fonts load
    const timer1 = setTimeout(() => {
      AOS.refreshHard();
    }, 120);

    const timer2 = setTimeout(() => {
      AOS.refreshHard();
    }, 500);

    const timer3 = setTimeout(() => {
      AOS.refreshHard();
    }, 1200);

    // 3. Handle window resize and orientation change (e.g. phone portrait to landscape)
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return null;
}
