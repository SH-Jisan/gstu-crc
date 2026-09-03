"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function JaagoHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto carousel rotation every 6 seconds like Splide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <section className="w-full mt-14 sm:mt-16 bg-gray-50 relative overflow-hidden" id="splide01">
      {/* Slide 1: Transform the Lives of Street Children with Education */}
      {currentSlide === 0 && (
        <div className="hero-section lg:h-[550px] xl:h-[640px] 2xl:h-[720px] bg-gray-800 overflow-hidden relative max-lg:pt-[120px] max-lg:pb-16 pt-[100px] transition-all duration-700 animate-in fade-in">
          {/* Subtle background overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffcd05_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              {/* Left Column: Headline & CTA with data-aos="fade-up" */}
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
                className="lg:col-span-7 p-4 text-center lg:text-left space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffcd05]/10 border border-[#ffcd05]/30 text-[#ffcd05] text-xs font-bold uppercase tracking-wider">
                  <span>Founded 5 June 2016 at GSTU</span>
                </div>

                <h1 className="font-bold font-sans text-4xl md:text-5xl xl:text-6xl text-white leading-tight">
                  Transform the Lives{" "}
                  <span className="block">
                    of <span className="font-sans text-[#ffcd05]">Street Children</span>
                    <br />
                    with Education
                  </span>
                </h1>

                <p className="text-gray-300 text-sm md:text-base max-w-xl font-normal leading-relaxed">
                  &ldquo;The World Will Be Free from Street Children by Connected Together.&rdquo; Providing foundational schooling, nutritious food, and dignified care through Hatekhori Free School.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    className="btn btn-primary px-8 py-3.5 text-base lg:text-lg font-sans shadow-xl capitalize font-bold text-secondary inline-flex hover:scale-105 transition-transform"
                    href="#sponsor"
                  >
                    Sponsor a Child
                  </a>
                  <a
                    className="px-6 py-3.5 text-base font-sans font-bold text-white border border-gray-600 rounded-lg hover:border-[#ffcd05] hover:text-[#ffcd05] transition-colors inline-flex items-center"
                    href="#hatekhori"
                  >
                    Hatekhori School
                  </a>
                </div>
              </div>

              {/* Right Column: Student Portrait + Speech Quote Bubble */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                {/* Floating Yellow Speech Bubble with data-aos="fade-down" and CSS float */}
                <div
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="hidden lg:inline-block absolute top-[10px] -left-[110px] xl:top-[30px] xl:-left-[120px] bg-[#ffcd05] p-2 rounded-3xl shadow-2xl z-20 animate-float"
                >
                  <div className="flex flex-col max-w-[240px] xl:max-w-[270px] justify-center items-center border-2 border-dashed border-gray-900 rounded-2xl p-4">
                    <p className="font-sans text-xs xl:text-sm text-center mb-0 font-extrabold text-gray-950 leading-snug">
                      &quot;My resources are limited,
                      <br />
                      but my dreams are limitless.
                      <br />
                      Help me build my tomorrow.&quot;
                    </p>
                    <span className="text-[10px] font-bold text-gray-800 mt-1 uppercase tracking-tight">
                      — Hatekhori School Student
                    </span>
                  </div>
                </div>

                {/* Decorative Yellow Shapes with data-aos="fade-down" */}
                <div
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="hidden lg:inline-block absolute top-[135px] left-[35px] bg-[#ffcd05] w-[40px] h-3.5 rounded-full z-10"
                />
                <div
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="hidden lg:inline-block absolute top-[155px] left-[65px] bg-[#ffcd05] w-[25px] h-3.5 rounded-full z-10"
                />

                {/* Child Image with data-aos="fade-left" */}
                <div
                  data-aos="fade-left"
                  data-aos-duration="500"
                  className="relative z-10 max-w-[340px] sm:max-w-[420px] xl:max-w-[480px]"
                >
                  <img
                    src="https://jaago.com.bd/images/2024/06/sponsor-a-child-in-bangladesh-with-jaago-foundation_1719739929_8pyv6_gzk.png?tr=f-auto,fo-auto,w-639,h-692,pr-true"
                    alt="Sponsor a street child with Come for Road Child CRC"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide 2: Hatekhori Free School Initiative */}
      {currentSlide === 1 && (
        <div className="hero-section lg:h-[550px] xl:h-[640px] 2xl:h-[720px] bg-[#f0ede8] overflow-hidden relative max-lg:pt-[120px] max-lg:pb-16 pt-[100px] transition-all duration-700 animate-in fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="lg:col-span-7 p-4 text-center lg:text-left space-y-4"
              >
                <span className="text-sm font-bold uppercase tracking-wider text-amber-700 block">
                  FLAGSHIP INITIATIVE · GSTU CAMPUS
                </span>
                <h1 className="font-extrabold font-sans text-4xl md:text-5xl xl:text-6xl text-gray-900 leading-tight uppercase">
                  Hatekhori Free School
                </h1>
                <p className="text-gray-700 text-base max-w-xl leading-relaxed">
                  Providing free foundational literacy, textbooks, notebooks, school bags, and wholesome meals to street and child-laborers in Gopalganj, mentored daily by university students.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                  <a
                    className="btn btn-secondary px-8 py-3.5 text-base font-sans shadow-xl capitalize font-bold text-white inline-flex hover:scale-105 transition-transform"
                    href="#volunteer"
                  >
                    Join as Volunteer Teacher
                  </a>
                  <a
                    className="btn btn-primary px-8 py-3.5 text-base font-sans shadow-xl capitalize font-bold text-[#1f2937] inline-flex hover:scale-105 transition-transform"
                    href="#sponsor"
                  >
                    Sponsor Hatekhori
                  </a>
                </div>
              </div>

              {/* Slide 2 Graphic Card */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-[340px] sm:max-w-[420px]"
                >
                  <img
                    src="https://jaago.com.bd/images/2024/04/sponsor-a-child_1714365666_yl5a0ydht.jpg?tr=f-auto,fo-auto,pr-true,c-maintain_ratio"
                    alt="Hatekhori Free School Students"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manual Slide Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          <span
            onClick={() => setCurrentSlide(0)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentSlide === 0 ? "bg-[#ffcd05] w-8" : "bg-white/50"
            }`}
          />
          <span
            onClick={() => setCurrentSlide(1)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentSlide === 1 ? "bg-[#ffcd05] w-8" : "bg-white/50"
            }`}
          />
        </div>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
