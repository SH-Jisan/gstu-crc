"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Newspaper, ExternalLink } from "lucide-react";
import AosInit from "@/components/AosInit";
import JaagoNavbar from "@/components/JaagoNavbar";
import JaagoFooter from "@/components/JaagoFooter";
import PageHeader from "@/components/PageHeader";

const PHOTOS = [
  { src: "/assets/school.jpg", cat: "School classes", caption: "Outdoor afternoon learning circle on the bus stand pavement." },
  { src: "/assets/campaign.jpg", cat: "Campaigns", caption: "Winter clothes & warm blanket distribution to street families." },
  { src: "/assets/health.jpg", cat: "Events", caption: "Mothers' nutritional awareness and childhood hygiene session." },
  { src: "/assets/school.jpg", cat: "School classes", caption: "Interactive reading and slate handwriting drills with volunteers." },
  { src: "/assets/campaign.jpg", cat: "Campaigns", caption: "Emergency nutrition and Eid grocery packs distribution." },
  { src: "/assets/health.jpg", cat: "Events", caption: "Community health consultation camp in nearby village." },
];

const CATS = ["All", "School classes", "Campaigns", "Events"] as const;

export default function MediaPage() {
  const [activeCat, setActiveCat] = useState<(typeof CATS)[number]>("All");

  const filteredPhotos = activeCat === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === activeCat);

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f4f1] text-[#0d0f14] font-sans antialiased">
      <AosInit />
      <JaagoNavbar />

      <main className="flex-grow">
        <PageHeader
          eyebrow="Media & Documentation"
          title="Media & Gallery"
          intro="Photographs, documentary videos, press features, and official branding assets documenting the daily transformation of Bangladesh's street children."
          breadcrumbs={[{ label: "Media" }]}
        />

        {/* 1. Photo Gallery */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                  Visual Archives
                </span>
                <h2 className="mt-1 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                  Photo Gallery
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {CATS.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCat(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      activeCat === cat
                        ? "bg-[#e6000a] text-white shadow-md scale-105"
                        : "bg-[#f6f4f1] text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPhotos.map((p, idx) => (
                <div
                  key={idx}
                  className="group bg-[#f6f4f1] rounded-2xl overflow-hidden shadow-sm border border-gray-200/70 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                    <Image
                      src={p.src}
                      alt={p.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#0d0f14]/80 backdrop-blur-sm text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                      {p.cat}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                      {p.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Video Gallery */}
        <section className="py-14 sm:py-20 bg-[#0d0f14] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/videoseries?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI"
                  title="CRC Video Playlist"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                  Documentary Playlist
                </span>
                <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-white tracking-tight">
                  Watch CRC In Action
                </h2>
                <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  Student volunteer interviews, field footage from sidewalk classes, winter clothes distributions, and documentary features exploring the resilience of children in Bangladesh.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#e6000a] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow hover:bg-[#a20002] transition-colors"
                  >
                    Visit Official Facebook Page <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Press Coverage */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007938]">
                Public Press
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                News & Media Coverage
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="bg-[#f6f4f1] rounded-2xl p-6 border-l-4 border-[#e6000a] transition-all hover:shadow-md">
                <Newspaper className="w-6 h-6 text-[#e6000a] mb-3" />
                <h3 className="font-heading text-base text-[#0d0f14]">National Daily — 2024</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  National newspaper feature reporting on the Hatekhori school curriculum, volunteer university tutors, and street child rehabilitation in Gopalganj.
                </p>
              </div>

              <div className="bg-[#f6f4f1] rounded-2xl p-6 border-l-4 border-[#007938] transition-all hover:shadow-md">
                <Newspaper className="w-6 h-6 text-[#007938] mb-3" />
                <h3 className="font-heading text-base text-[#0d0f14]">Campus Magazine — 2023</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  In-depth interview with the founding batch exploring the journey, constitutional framework, and milestones of CRC&apos;s initial seven years.
                </p>
              </div>

              <div className="bg-[#f6f4f1] rounded-2xl p-6 border-l-4 border-[#0d0f14] transition-all hover:shadow-md">
                <Newspaper className="w-6 h-6 text-[#0d0f14] mb-3" />
                <h3 className="font-heading text-base text-[#0d0f14]">Television Special — 2022</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Broadcast segment highlighting CRC&apos;s annual winter clothes drive and warm meal distributions to disadvantaged bus stand families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Brand & Banner Showcase */}
        <section className="py-14 sm:py-20 bg-[#f6f4f1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e6000a]">
                Visual Identity
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-4xl text-[#0d0f14] tracking-tight">
                Official CRC Banner
              </h2>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <Image
                src="/assets/crc-banner.png"
                alt="Come For Road Child Official Banner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <JaagoFooter />
    </div>
  );
}
