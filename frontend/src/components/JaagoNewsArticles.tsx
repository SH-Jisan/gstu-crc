"use client";

import React from "react";

export default function JaagoNewsArticles() {
  const articles = [
    {
      link: "https://jaago.com.bd/the-most-meaningful-mothers-day-gift-isnt-a-giftits-a-life-changed",
      image:
        "https://jaago.com.bd/images/2026/05/the-most-meaningful-mothers-day-gift-isnt-a-gift-its-a-life-changed_1778388756_-BZ9P3_2U.png?tr=f-auto,w-435,h-224,pr-true",
      alt: "The Most Meaningful Mother’s Day Gift Isn’t a Gift—It’s a Life Changed",
      categories: ["Information and Updates", "Child Sponsorship"],
      date: "May 10, 2026",
      title: "The Most Meaningful Mother’s Day Gift Isn’t a Gift—It’s a Life Changed",
      delay: "100",
    },
    {
      link: "https://jaago.com.bd/jaago-foundation-and-brritto-join-hands-for-academic-excellence-beyond-limitations",
      image:
        "https://jaago.com.bd/images/2026/04/jaago-foundation-and-brritto-join-hands-for-academic-excellence-beyond-limitations-cover_1777202294_kPAAIw3pB.jpg?tr=f-auto,w-435,h-224,pr-true",
      alt: "JAAGO Foundation and brritto Join Hands for Academic Excellence Beyond Limitations",
      categories: ["Information and Updates"],
      date: "Apr 27, 2026",
      title:
        "JAAGO Foundation and brritto Join Hands for Academic Excellence Beyond Limitations",
      delay: "200",
    },
    {
      link: "https://jaago.com.bd/19-years-of-jaago-turning-hope-into-reality",
      image:
        "https://jaago.com.bd/images/2026/04/19-years-of-jaago-turning-hope-into-reality_1777199103_BR3xTK1fr.png?tr=f-auto,w-435,h-224,pr-true",
      alt: "19 Years of JAAGO: Turning Hope Into Reality",
      categories: ["Information and Updates"],
      date: "Apr 25, 2026",
      title: "19 Years of JAAGO: Turning Hope Into Reality",
      delay: "300",
    },
  ];

  return (
    <section className="bg-white pb-16">
      <div className="max-w-7xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center relative z-20 py-10">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="flex flex-wrap justify-between items-center mt-6"
          >
            <h2 className="text-[#1f2937] text-3xl md:text-4xl font-bold font-heading text-left uppercase">
              News &amp; Articles
            </h2>
            <a
              href="https://jaago.com.bd/blog"
              className="hidden md:inline-flex btn btn-secondary px-6 py-2.5 text-sm font-sans shadow-lg capitalize text-white hover:scale-105 transition-transform"
            >
              View all articles
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={item.delay}
              className="card bg-white shadow-lg rounded-2xl p-3 border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="rounded-lg p-3 border border-dashed border-gray-300 flex flex-col justify-between h-full">
                <div>
                  <a href={item.link}>
                    <img
                      loading="lazy"
                      className="w-full h-52 object-cover object-center rounded-2xl mb-4 hover:scale-[1.02] transition-transform duration-300"
                      src={item.image}
                      alt={item.alt}
                    />
                  </a>

                  <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.categories.map((cat, cIdx) => (
                        <span
                          key={cIdx}
                          className="bg-amber-100 border border-solid border-amber-300 rounded-full px-3 py-0.5 text-xs font-bold text-gray-800"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      {item.date}
                    </span>
                  </div>

                  <a href={item.link}>
                    <h3 className="text-base font-bold font-heading text-[#1f2937] mb-4 hover:text-amber-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href={item.link}
                    className="btn btn-sm btn-primary text-[#1f2937] font-bold text-xs inline-block hover:scale-105 transition-transform"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mx-auto mt-6 md:hidden">
          <a
            href="https://jaago.com.bd/blog"
            className="btn btn-secondary px-6 py-2.5 text-sm font-sans shadow-md capitalize text-white"
          >
            View all articles
          </a>
        </div>
      </div>
    </section>
  );
}
