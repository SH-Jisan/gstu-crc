import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Section, Card, Bullets } from "@/components/site/Page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CRC — History, Vision & Values | CRC, GSTU" },
      {
        name: "description",
        content:
          "Who we are: the history, vision, mission, values, leadership and journey of Come For Road Child (CRC), GSTU Branch since 2016.",
      },
      { property: "og:title", content: "About Come For Road Child (CRC), GSTU" },
      {
        property: "og:description",
        content: "History, vision, values, leadership and timeline of CRC since 2016.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  ["Honesty", "Transparent accounts, honest reporting and truthful communication with donors."],
  ["Service", "Volunteering without expectation — our members give time, not take credit."],
  ["Humanity", "Every child is treated with dignity, regardless of background or religion."],
  ["Awareness", "We teach families about health, hygiene, safety and children's rights."],
  ["Leadership", "Students grow into organisers, teachers and lifelong social workers."],
];

const TIMELINE = [
  ["2016", "CRC founded by a group of GSTU students who began teaching children at a bus stand."],
  ["2017", "First formal weekly class schedule and volunteer teacher roster introduced."],
  ["2018", "Winter Clothes Campaign launched; first nutrition support programme for mothers."],
  ["2020", "Emergency food distribution during the pandemic reaches hundreds of families."],
  ["2021", "Hatekhori School begins with pre-primary and primary level classes."],
  ["2023", "Branch expansion beyond GSTU; central committee and written constitution adopted."],
  ["2025", "Six active branches, structured committees, certificate and reporting systems."],
];

function About() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About CRC"
          title="Who we are"
          intro="Come For Road Child is a non-political, non-profit student voluntary organisation working for the education, nutrition and safety of street children in Bangladesh."
        />

        <Section
          eyebrow="Our history"
          title="From a bus stand mat to a school"
          lead="In 2016 a handful of Gopalganj Science & Technology University students noticed children selling flowers instead of holding books. They spread a mat, brought chalk and slates, and began teaching two hours a week. That mat became CRC."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Non-political">
              CRC carries no political identity. Membership is open to any student who accepts our
              constitution and principles.
            </Card>
            <Card title="Student-run" accent="leaf">
              Every teacher, organiser and fundraiser is a university student volunteer. No paid
              management layer.
            </Card>
            <Card title="Accountable" accent="ink">
              Monthly expense summaries and annual reports are published for members and donors.
            </Card>
          </div>
        </Section>

        <Section tone="sand" eyebrow="Vision & mission" title="A world free of street children">
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Child rights">
              Ensure every child's right to education, protection, identity and play as guaranteed
              by law.
            </Card>
            <Card title="Education" accent="leaf">
              Bring out-of-school children into a structured, activity-based learning path up to
              Class 8.
            </Card>
            <Card title="Nutrition" accent="ink">
              Fight malnutrition through meals, awareness sessions and referral to health services.
            </Card>
            <Card title="Safe childhood">
              Protect children from abuse, drug exposure, hazardous labour and road accidents.
            </Card>
          </div>
        </Section>

        <Section
          eyebrow="Fundamental principles"
          title="Brotherhood · Commitment · Trust"
          lead="These three principles are written into the CRC constitution and guide every activity of the organisation and its members."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Brotherhood">
              We foster mutual love, empathy and respect among all members, building friendly,
              family-like relationships within CRC.
            </Card>
            <Card title="Commitment" accent="leaf">
              We remain sincere and dedicated to the mission, goals and responsibilities of CRC,
              serving with genuine commitment.
            </Card>
            <Card title="Trust" accent="ink">
              We build an environment of mutual trust and confidence while respecting and protecting
              the confidentiality of our members.
            </Card>
          </div>
        </Section>

        <Section tone="sand" eyebrow="Our values" title="Five values every member signs up to">
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map(([t, d]) => (
              <div
                key={t}
                className="bg-background p-6 transition-colors duration-200 hover:bg-brand/5"
              >
                <h3 className="font-display text-brand">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Leadership" title="Founder, chairman & central committee">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Founder">
              The founding member who started the first street class in 2016 and drafted the
              organisation's first working rules.
            </Card>
            <Card title="Chairman" accent="leaf">
              Heads the central committee, represents CRC externally and approves branch charters.
            </Card>
            <Card title="Central committee" accent="ink">
              <Bullets
                items={[
                  "General Secretary & Joint Secretaries",
                  "Treasurer and Finance Committee",
                  "Education & Hatekhori Committee",
                  "Membership, Discipline and Audit Committees",
                ]}
              />
            </Card>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Committee member names and photographs can be published here once you share the current
            list.
          </p>
        </Section>

        <Section tone="ink" eyebrow="CRC journey" title="Timeline">
          <ol className="relative border-l border-ink-foreground/20 pl-6">
            {TIMELINE.map(([year, text]) => (
              <li
                key={year}
                className="mb-8 last:mb-0 transition-transform duration-200 hover:translate-x-1"
              >
                <span className="absolute -left-[7px] mt-1.5 size-3.5 bg-brand" />
                <p className="font-display text-brand">{year}</p>
                <p className="mt-1 text-sm text-ink-foreground/75">{text}</p>
              </li>
            ))}
          </ol>
        </Section>
      </main>
      <Footer />
    </>
  );
}
