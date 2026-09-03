"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function JaagoHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <section className="w-full mt-14 sm:mt-16 bg-gray-50 relative overflow-hidden" id="splide01">
      {/* Slide 1: Transform the Lives of Children in Need with Education */}
      {currentSlide === 0 && (
        <div className="hero-section lg:h-[550px] xl:h-[640px] 2xl:h-[720px] bg-gray-800 overflow-hidden relative max-lg:pt-[120px] max-lg:pb-16 pt-[100px] transition-all duration-700 animate-in fade-in">
          {/* Subtle background overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffcd05_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              {/* Left Column: Headline & CTA (7 cols) */}
              <div className="lg:col-span-7 p-4 text-center lg:text-left space-y-6">
                <h1 className="font-bold font-sans text-4xl md:text-5xl xl:text-6xl text-white leading-tight">
                  Transform the Lives{" "}
                  <span className="block">
                    of <span className="font-sans text-white">Children in Need</span>
                    <br />
                    with Education
                  </span>
                </h1>

                <div>
                  <a
                    className="btn btn-primary px-8 py-3.5 text-base lg:text-lg font-sans shadow-xl capitalize font-bold text-secondary inline-flex hover:scale-105 transition-transform"
                    href="https://jaago.com.bd/sponsor-a-child"
                  >
                    Sponsor a Child
                  </a>
                </div>
              </div>

              {/* Right Column: Student Portrait + Speech Quote Bubble (5 cols) */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                {/* Floating Yellow Speech Bubble (Exact JAAGO element) */}
                <div className="hidden lg:inline-block absolute top-[10px] -left-[110px] xl:top-[30px] xl:-left-[120px] bg-[#ffcd05] p-2 rounded-3xl shadow-xl z-20 transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="flex flex-col max-w-[240px] xl:max-w-[270px] justify-center items-center border-2 border-dashed border-gray-900 rounded-2xl p-4">
                    <p className="font-sans text-xs xl:text-sm text-center mb-0 font-extrabold text-gray-950 leading-snug">
                      &quot;My resources are limited,
                      <br />
                      but my potential is not.
                      <br />
                      Help me fulfill my dreams.&quot;
                    </p>
                  </div>
                </div>

                {/* Decorative Yellow Shapes */}
                <div className="hidden lg:inline-block absolute top-[135px] left-[35px] bg-[#ffcd05] w-[40px] h-3.5 rounded-full z-10" />
                <div className="hidden lg:inline-block absolute top-[155px] left-[65px] bg-[#ffcd05] w-[25px] h-3.5 rounded-full z-10" />

                {/* Child Image */}
                <div className="relative z-10 max-w-[340px] sm:max-w-[420px] xl:max-w-[480px]">
                  <img
                    src="https://jaago.com.bd/images/2024/06/sponsor-a-child-in-bangladesh-with-jaago-foundation_1719739929_8pyv6_gzk.png?tr=f-auto,fo-auto,w-639,h-692,pr-true"
                    alt="Sponsor a child in Bangladesh with JAAGO Foundation"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide 2: JAAGO Women Scholarship Program */}
      {currentSlide === 1 && (
        <div className="hero-section lg:h-[550px] xl:h-[640px] 2xl:h-[720px] bg-[#f0ede8] overflow-hidden relative max-lg:pt-[120px] max-lg:pb-16 pt-[100px] transition-all duration-700 animate-in fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              <div className="lg:col-span-7 p-4 text-center lg:text-left space-y-4">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-600 block">
                  JAAGO Women
                </span>
                <h1 className="font-extrabold font-sans text-4xl md:text-5xl xl:text-6xl text-gray-900 leading-tight uppercase">
                  Scholarship Program
                </h1>
                <p className="text-gray-700 text-base max-w-xl">
                  Empowering resilient women and young female scholars across Bangladesh to pursue higher education and break societal barriers.
                </p>
                <div>
                  <a
                    className="btn btn-secondary px-8 py-3.5 text-base font-sans shadow-xl capitalize font-bold text-white inline-flex"
                    href="https://jaago.com.bd/women"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <img
                  src="https://jaago.com.bd/images/2024/04/sponsor-a-child_1714365666_yl5a0ydht.jpg?tr=f-auto,w-576,h-550,fo-auto,pr-true,c-maintain_ratio"
                  alt="JAAGO Scholar"
                  className="rounded-3xl shadow-xl max-w-sm w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Carousel Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`w-3 h-3 rounded-full transition-all ${
            currentSlide === 0 ? "bg-[#ffcd05] w-8" : "bg-white/60"
          }`}
          aria-label="Slide 1"
        />
        <button
          onClick={() => setCurrentSlide(1)}
          className={`w-3 h-3 rounded-full transition-all ${
            currentSlide === 1 ? "bg-[#ffcd05] w-8" : "bg-white/60"
          }`}
          aria-label="Slide 2"
        />
      </div>
    </section>
  );
}
