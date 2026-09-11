import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Section, Card, Bullets } from "@/components/site/Page";
import school from "@/assets/school.jpg";
import health from "@/assets/health.jpg";
import campaign from "@/assets/campaign.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Activities — Education, Nutrition, Campaigns | CRC, GSTU" },
      {
        name: "description",
        content:
          "CRC programs: street children education, nutrition and health support, Hatekhori school support, winter clothes and food campaigns, awareness and community engagement.",
      },
      { property: "og:title", content: "CRC Programs & Activities" },
      {
        property: "og:description",
        content: "Education, nutrition, campaigns, awareness and community programmes run by CRC.",
      },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Programs & Activities"
          title="What we run, week after week"
          intro="Seven core programmes deliver our mission — from daily classes to seasonal relief campaigns."
        />

        <Section eyebrow="01" title="Street children education">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src={school}
                alt="Volunteer teaching street children"
                width={1280}
                height={854}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Teaching model</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Small groups of 8–12 children, one lead volunteer teacher and one assistant.
                  Learning is activity-based: songs, drawing, counting games and reading circles
                  rather than rote memorisation. Every child has a progress card reviewed monthly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Volunteer teaching schedule</h3>
                <Bullets
                  items={[
                    "Saturday–Wednesday: 4:00–6:00 PM core classes",
                    "Thursday: moral story and cultural session",
                    "Friday: make-up classes, home visits and parent contact",
                    "Rosters published weekly in the volunteer group",
                  ]}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section tone="sand" eyebrow="02" title="Nutrition & health support">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <Card title="Awareness sessions for mothers">
                Monthly sessions on breastfeeding, safe drinking water, hand-washing, immunisation
                and recognising signs of illness early.
              </Card>
              <Card title="Malnutrition prevention" accent="leaf">
                Height/weight screening, supplementary food packets for at-risk children and
                referral to the local health complex.
              </Card>
            </div>
            <div className="overflow-hidden">
              <img
                src={health}
                alt="Health and nutrition awareness session"
                width={1280}
                height={854}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          </div>
        </Section>

        <Section eyebrow="03" title="Hatekhori School support">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Class activities">
              Reading, writing, arithmetic, drawing, hygiene practice and free play in every daily
              block.
            </Card>
            <Card title="Weekly schedule" accent="leaf">
              A fixed timetable per class level, with subject rotation so no group misses core
              literacy.
            </Card>
            <Card title="Moral story Thursdays" accent="ink">
              A story, a discussion and a small task — teaching honesty, sharing and courage.
            </Card>
          </div>
        </Section>

        <Section tone="ink" eyebrow="04 & 05" title="Winter clothes & food distribution">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src={campaign}
                alt="Volunteers distributing winter clothes and food"
                width={1280}
                height={854}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-4 text-ink-foreground/80">
              <p>
                Each December our Winter Clothes Campaign collects blankets, sweaters and socks from
                students, alumni and local donors. Distribution lists are prepared by branch
                surveys so the coldest, poorest households are reached first.
              </p>
              <p>
                The Food Distribution Programme runs during Ramadan, Eid, floods and exam seasons —
                cooked meals for children in class and dry ration packs for families.
              </p>
            </div>
          </div>
        </Section>

        <Section tone="sand" eyebrow="06" title="Awareness programs">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Drug abuse prevention">
              Street-level sessions and posters explaining the risks of inhalants and addiction, run
              with local youth clubs.
            </Card>
            <Card title="Personal hygiene" accent="leaf">
              Soap, nail-cutting and tooth-brushing demonstrations plus monthly hygiene kits.
            </Card>
            <Card title="Road safety" accent="ink">
              Practical crossing drills for children who live and work beside highways and bus
              stands.
            </Card>
          </div>
        </Section>

        <Section eyebrow="07" title="Community engagement">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Village programme">
              Weekend teams visit nearby villages for enrolment surveys, health camps and study
              circles.
            </Card>
            <Card title="Parents meeting" accent="leaf">
              Quarterly meetings where guardians hear progress reports and commit to keeping
              children in class.
            </Card>
            <Card title="Cultural events" accent="ink">
              Pahela Baishakh, Victory Day and annual prize-giving performances by our students.
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
