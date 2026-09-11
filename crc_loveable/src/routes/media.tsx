import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Section, Card } from "@/components/site/Page";
import school from "@/assets/school.jpg";
import campaign from "@/assets/campaign.jpg";
import health from "@/assets/health.jpg";
import banner from "@/assets/crc-banner.png";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media & Gallery — Photos, Videos & Press | CRC, GSTU" },
      {
        name: "description",
        content:
          "Photo gallery of CRC events, school classes and campaigns, plus video gallery and press coverage of Come For Road Child, GSTU.",
      },
      { property: "og:title", content: "CRC Media & Gallery" },
      {
        property: "og:description",
        content: "Photos, videos and press coverage from CRC events, classes and campaigns.",
      },
    ],
  }),
  component: Media,
});

const PHOTOS = [
  { src: school, cat: "School classes", caption: "Outdoor class at the bus stand" },
  { src: campaign, cat: "Campaigns", caption: "Winter clothes distribution" },
  { src: health, cat: "Events", caption: "Mothers' nutrition awareness session" },
  { src: school, cat: "School classes", caption: "Reading circle, Class 2" },
  { src: campaign, cat: "Campaigns", caption: "Eid food packs for families" },
  { src: health, cat: "Events", caption: "Community meeting in the village programme" },
];

const CATS = ["All", "Events", "School classes", "Campaigns"] as const;

function Media() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const shown = cat === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Media & Gallery"
          title="Our work, in pictures"
          intro="Photos and videos from classes, campaigns and community events — plus press coverage of CRC."
        />

        <Section eyebrow="Photo gallery" title="Browse by category">
          <div className="mb-8 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
                  cat === c
                    ? "bg-brand text-brand-foreground"
                    : "border border-border hover:border-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <figure
                key={i}
                className="group border border-border overflow-hidden transition-all duration-200 hover:shadow-md bg-card"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.caption}
                    width={1280}
                    height={854}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-brand uppercase">
                    {p.cat}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">{p.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section tone="ink" eyebrow="Video gallery" title="Watch CRC in action">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="aspect-video w-full overflow-hidden shadow-md">
              <iframe
                className="size-full border border-ink-foreground/20"
                src="https://www.youtube.com/embed/videoseries?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI"
                title="CRC video playlist"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="space-y-4 text-ink-foreground/80">
              <p>
                Facebook Live sessions and YouTube documentaries about our classes, campaigns and
                annual events are collected here. Send us a link and we will embed it.
              </p>
              <a
                href="https://facebook.com"
                className="inline-block bg-brand px-5 py-3 font-display text-sm text-brand-foreground transition-colors duration-200 hover:bg-brand-deep"
              >
                Visit our Facebook page
              </a>
            </div>
          </div>
        </Section>

        <Section tone="sand" eyebrow="Press" title="News coverage">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Local daily — 2024">
              Feature on the Hatekhori school and its student teachers.
            </Card>
            <Card title="Campus magazine — 2023" accent="leaf">
              Interview with the founding members on CRC's first seven years.
            </Card>
            <Card title="Television report — 2022" accent="ink">
              Coverage of the winter clothes campaign in Gopalganj.
            </Card>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Share article links with us and we will publish them with full citations.
          </p>
        </Section>

        <Section eyebrow="Brand" title="Our identity">
          <div className="overflow-hidden border border-border">
            <img
              src={banner}
              alt="CRC, GSTU official banner"
              width={1920}
              height={960}
              loading="lazy"
              className="w-full"
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
