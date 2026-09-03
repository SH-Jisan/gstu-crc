"use client";

import React from "react";

export default function JaagoNewsArticles() {
  const articles = [
    {
      link: "#article-1",
      image:
        "https://jaago.com.bd/images/2024/04/sponsor-a-child_1714365666_yl5a0ydht.jpg?tr=f-auto,w-435,h-224,pr-true",
      alt: "Hatekhori Free School Begins Academic Session 2026 at GSTU Campus",
      categories: ["Hatekhori School", "Education Drive"],
      date: "January 15, 2026",
      title: "Hatekhori Free School Begins Academic Session 2026 at GSTU Campus",
      excerpt:
        "Over 85 new street and child-laborer students received complete textbooks, notebooks, school bags, and stationery kits at the GSTU campus pavilion.",
      delay: "100",
    },
    {
      link: "#article-2",
      image:
        "https://jaago.com.bd/images/2026/05/the-most-meaningful-mothers-day-gift-isnt-a-gift-its-a-life-changed_1778388756_-BZ9P3_2U.png?tr=f-auto,w-435,h-224,pr-true",
      alt: "Winter Warmth Campaign: 2,500 Blankets & Sweaters Distributed",
      categories: ["Relief & Humanitarian", "Field Operations"],
      date: "December 28, 2025",
      title: "Winter Warmth Campaign: 2,500 Blankets & Sweaters Distributed",
      excerpt:
        "CRC student volunteers completed midnight distribution drives across Gopalganj railway station, Launch Ghat, and rural riverside settlements.",
      delay: "200",
    },
    {
      link: "#article-3",
      image:
        "https://jaago.com.bd/images/2026/04/19-years-of-jaago-turning-hope-into-reality_1777199103_BR3xTK1fr.png?tr=f-auto,w-435,h-224,pr-true",
      alt: "10 Years of Come for Road Child (CRC): Turning Street Hope into Reality",
      categories: ["Anniversary Milestone", "GSTU Community"],
      date: "June 5, 2026",
      title: "10 Years of Come for Road Child: Turning Hope into Reality (2016–2026)",
      excerpt:
        "Reflecting on a decade of student-led grassroots movement: from a small open-air tutoring circle at GSTU to a registered youth foundation.",
      delay: "300",
    },
  ];

  return (
    <section id="news" className="bg-white pb-16">
      <div className="max-w-7xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center relative z-20 py-10">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="flex flex-wrap justify-between items-center mt-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block text-left mb-1">
                LATEST FIELD STORIES
              </span>
              <h2 className="text-[#1f2937] text-3xl md:text-4xl font-bold font-heading text-left uppercase">
                News &amp; Field Updates
              </h2>
            </div>
            <a
              href="#blog"
              className="hidden md:inline-flex btn btn-secondary px-6 py-2.5 text-sm font-sans shadow-lg capitalize text-white hover:scale-105 transition-transform"
            >
              View all field updates
            </a>
          </div>
        </div>

        {/* 3 Authentic CRC News Cards with Dashed Borders & Staggered AOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={item.delay}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.categories.map((cat, ci) => (
                      <span
                        key={ci}
                        className="bg-gray-900/80 backdrop-blur-sm text-[#ffcd05] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold text-gray-500 block mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-gray-900 group-hover:text-amber-700 transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-dashed border-gray-200">
                <a
                  href={item.link}
                  className="text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-800 transition-colors inline-flex items-center gap-1"
                >
                  Read Full Story &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
