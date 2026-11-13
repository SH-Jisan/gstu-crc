"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";

export default function SmoothScroll() {
  useEffect(() => {
    // Respect user's accessibility setting for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // On mobile touch devices, preserve native 120Hz GPU momentum scrolling
    // (Prevents touch hijacking, rubber-band interference, and scroll desync)
    const isMobileTouch =
      typeof window !== "undefined" &&
      (window.innerWidth < 1024 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0);

    if (isMobileTouch) {
      // Allow native phone scroll, just handle smooth hash clicks
      const handleHashClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest("a");
        if (!target) return;
        const href = target.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      };

      document.addEventListener("click", handleHashClick);
      return () => document.removeEventListener("click", handleHashClick);
    }

    // Desktop: Initialize Lenis for smooth mouse wheel physics
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      infinite: false,
    });

    // Synchronize Lenis virtual scroll frames directly with AOS coordinate tracker
    lenis.on("scroll", () => {
      AOS.refresh();
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Sync with anchor hash changes (e.g., #sponsor, #focus, #volunteer)
    const handleHashClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, { offset: -80 });
        }
      }
    };

    document.addEventListener("click", handleHashClick);

    return () => {
      document.removeEventListener("click", handleHashClick);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
