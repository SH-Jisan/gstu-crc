"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function UnifiedHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-[106px] sm:pt-[114px] pb-14 sm:pb-20 bg-[#0d0f14] text-white relative overflow-hidden border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Top Official CRC Banner - Viewport-Fitted */}
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-14">
          <div
            data-aos="zoom-out"
            data-aos-duration="800"
            className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 group bg-black/60 flex items-center justify-center w-fit mx-auto"
            style={{
              maxHeight: "calc(100dvh - 136px)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/crc-banner.png"
              alt="CRC, GSTU Official Banner — Brotherhood, Commitment, Trust"
              className="w-auto h-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
              style={{
                maxHeight: "calc(100dvh - 136px)",
                aspectRatio: "1919 / 955",
              }}
            />
          </div>
        </div>

        {/* 2. Split 2-Column Hero: Editorial Message & Sharp Photo Mosaic */}
        <div
          ref={heroRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-2"
        >
          {/* Left Column (6 cols): Heavy Display Headline, Concise Intro & Sharp Rectangular CTAs */}
          <div className="lg:col-span-6 text-left">
            <h1
              className={`font-heading text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] text-white tracking-tight leading-[1.06] transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              Every child of the<br className="hidden sm:inline" />{" "}
              street <span className="text-[#e6000a]">deserves a<br className="hidden sm:inline" />{" "}classroom.</span>
            </h1>

            <p
              className={`mt-5 text-[14px] sm:text-[14.5px] text-gray-300/90 font-normal leading-relaxed max-w-[600px] transition-all duration-700 delay-100 ease-out ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              Come For Road Child (CRC) is a student-run voluntary organisation founded in 2016 at
              Gopalganj Science &amp; Technology University. We teach, feed and protect children who
              grow up on the road.
            </p>

            {/* Rectangular Action Buttons */}
            <div
              className={`mt-7 flex flex-wrap items-center gap-3.5 transition-all duration-700 delay-200 ease-out ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <a
                href="#sponsor"
                className="px-7 py-3.5 text-sm font-sans font-bold text-white bg-[#e6000a] hover:bg-[#c80008] inline-flex items-center gap-2 transition-colors rounded-none"
              >
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/members"
                className="px-7 py-3.5 text-sm font-sans font-bold text-white border border-white/25 hover:border-white/60 hover:bg-white/5 inline-flex items-center transition-colors rounded-none"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>

          {/* Right Column (6 cols): Clean Sharp-Cornered 3-Photo Mosaic with Synchronized Slide Animations */}
          <div className="lg:col-span-6 grid grid-cols-[1.75fr_1fr] gap-2.5">
            {/* Photo 1 (Top-Left Wide): Hatekhori Class */}
            <div
              className={`relative h-[170px] sm:h-[205px] overflow-hidden bg-black/40 group transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <Image
                src="/assets/school.jpg"
                alt="Volunteer teaching street children outdoors in Hatekhori school"
                fill
                sizes="(max-width: 1024px) 65vw, 32vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Photo 2 (Top-Right Narrow): Winter Campaign */}
            <div
              className={`relative h-[170px] sm:h-[205px] overflow-hidden bg-black/40 group transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <Image
                src="/assets/campaign.jpg"
                alt="Volunteers distributing winter clothes and relief packs"
                fill
                sizes="(max-width: 1024px) 35vw, 18vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Photo 3 (Bottom Full-Width): Community Health & Mothers Session */}
            <div
              className={`col-span-2 relative h-[155px] sm:h-[185px] overflow-hidden bg-black/40 group transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <Image
                src="/assets/health.jpg"
                alt="Community health and nutrition awareness session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
