import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Users, MapPin, CalendarCheck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Page";
import banner from "@/assets/crc-banner.png";
import school from "@/assets/school.jpg";
import campaign from "@/assets/campaign.jpg";
import health from "@/assets/health.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRC, GSTU — Come For Road Child | Street Children Education" },
      {
        name: "description",
        content:
          "Come For Road Child (CRC), GSTU Branch educates, feeds and protects street children in Bangladesh. Volunteer, sponsor a child, or donate today.",
      },
      { property: "og:title", content: "CRC, GSTU — Come For Road Child" },
      {
        property: "og:description",
        content: "Street children education, nutrition and Hatekhori School since 2016.",
      },
    ],
  }),
  component: Index,
});

const STATS = [
  { icon: Users, value: "1,200+", label: "Children supported" },
  { icon: HeartHandshake, value: "350+", label: "Active volunteers" },
  { icon: MapPin, value: "6", label: "Active branches" },
  { icon: CalendarCheck, value: "180+", label: "Events & projects" },
];

const RECENT = [
  {
    img: campaign,
    tag: "Campaign",
    title: "Winter Clothes Distribution 2025",
    text: "Over 600 blankets and warm clothes handed to street families across Gopalganj and Dhaka.",
  },
  {
    img: school,
    tag: "Hatekhori",
    title: "Moral Story Thursday",
    text: "Weekly storytelling class where students learn honesty, empathy and courage through stories.",
  },
  {
    img: health,
    tag: "Health",
    title: "Nutrition Awareness for Mothers",
    text: "Community session on malnutrition prevention, hygiene and safe feeding practice.",
  },
];

const STORIES = [
  {
    name: "Rima, 11",
    text: "Found selling flowers at a bus stand in 2019. Today she is in Class 5 at Hatekhori and first in her class.",
  },
  {
    name: "Sabbir, 13",
    text: "Joined our evening classes after leaving a workshop job. He now reads Bangla and English fluently.",
  },
  {
    name: "Jarin, 9",
    text: "Enrolled through our sponsor-a-child programme; her family receives monthly nutrition support.",
  },
];

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-ink overflow-hidden">
          <div className="mx-auto max-w-7xl" data-aos="zoom-out" data-aos-duration="800">
            <img
              src={banner}
              alt="CRC, GSTU — Come For Road Child banner with the slogan about a street-child-free world"
              width={1920}
              height={960}
              className="w-full transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h1
                data-aos="fade-up"
                data-aos-duration="650"
                className="text-4xl leading-[1.05] text-ink-foreground md:text-6xl"
              >
                Every child of the street{" "}
                <span className="text-brand inline-block transition-transform duration-300 hover:scale-105">
                  deserves a classroom.
                </span>
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay="100"
                className="mt-5 max-w-2xl text-ink-foreground/75"
              >
                Come For Road Child (CRC) is a student-run voluntary organisation founded in 2016 at
                Gopalganj Science &amp; Technology University. We teach, feed and protect children
                who grow up on the road.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay="200"
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/donate"
                  className="group inline-flex items-center gap-2 bg-brand px-6 py-3 font-display text-sm text-brand-foreground transition-all duration-300 hover:bg-brand-deep hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  Donate Now <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 border border-ink-foreground/30 px-6 py-3 font-display text-sm text-ink-foreground transition-all duration-300 hover:bg-ink-foreground/10 hover:border-ink-foreground hover:-translate-y-0.5"
                >
                  Become a Volunteer
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div
                data-aos="fade-left"
                data-aos-duration="600"
                className="col-span-2 overflow-hidden"
              >
                <img
                  src={school}
                  alt="Volunteer teaching street children outdoors"
                  width={1280}
                  height={854}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-52"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="150"
                className="overflow-hidden"
              >
                <img
                  src={campaign}
                  alt="Volunteers distributing winter clothes"
                  width={1280}
                  height={854}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-52"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
                className="col-span-3 overflow-hidden"
              >
                <img
                  src={health}
                  alt="Nutrition awareness session"
                  width={1280}
                  height={854}
                  loading="lazy"
                  className="h-32 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-brand text-brand-foreground overflow-hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-10 md:grid-cols-4">
            {STATS.map((s, idx) => (
              <div
                key={s.label}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={idx * 100}
                className="group px-2 py-4 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <s.icon className="mx-auto size-6 opacity-80 transition-transform duration-300 group-hover:scale-110" />
                <p className="mt-3 font-display text-3xl md:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs font-semibold tracking-[0.16em] uppercase opacity-85">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Section
          eyebrow="Recent activities"
          title="What we have been doing lately"
          lead="Classes, campaigns and community work run by university student volunteers every week."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {RECENT.map((r, idx) => (
              <article
                key={r.title}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={idx * 150}
                className="group border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.title}
                    width={1280}
                    height={854}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-ink px-2 py-1 text-[10px] font-semibold tracking-[0.18em] text-ink-foreground uppercase">
                    {r.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold transition-colors duration-200 group-hover:text-brand">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/media" className="inline-flex items-center gap-1 font-display text-sm text-brand transition-transform duration-200 hover:translate-x-1 hover:underline">
              See the full gallery →
            </Link>
          </div>
        </Section>

        <Section
          tone="ink"
          eyebrow="Success stories"
          title="Stories from the street"
          lead="Real children, real change — written with their families' consent."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {STORIES.map((s, idx) => (
              <blockquote
                key={s.name}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={idx * 150}
                className="border-l-4 border-brand bg-ink pl-5 py-2 transition-all duration-300 hover:border-brand-deep hover:translate-x-1"
              >
                <p className="text-ink-foreground/80">“{s.text}”</p>
                <footer className="mt-4 font-display text-sm text-brand">{s.name}</footer>
              </blockquote>
            ))}
          </div>
        </Section>

        <Section
          tone="sand"
          eyebrow="Partners"
          title="Institutions & collaborations"
          lead="We work alongside universities, local government and community organisations."
        >
          <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {[
              "Gopalganj Science & Technology University",
              "GSTU Students' Welfare",
              "Local Union Parishad",
              "Community Health Complex",
              "Youth Volunteer Network",
              "Hatekhori School Trust",
              "District Social Services",
              "Alumni Donors Circle",
            ].map((p, idx) => (
              <div
                key={p}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={(idx % 4) * 80}
                className="flex min-h-24 items-center justify-center bg-background p-5 text-center text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-brand/5 hover:text-brand hover:scale-[1.02]"
              >
                {p}
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
