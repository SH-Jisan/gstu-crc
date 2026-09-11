import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Section, Card, Bullets } from "@/components/site/Page";
import school from "@/assets/school.jpg";
import campaign from "@/assets/campaign.jpg";
import health from "@/assets/health.jpg";

export const Route = createFileRoute("/school")({
  head: () => ({
    meta: [
      { title: "Hatekhori — CRC School for Street Children | CRC, GSTU" },
      {
        name: "description",
        content:
          "Hatekhori is CRC's school for street children: pre-primary to Class 8, activity-based weekly plans, university student teachers, exams, results and free admission.",
      },
      { property: "og:title", content: "CRC School — Hatekhori" },
      {
        property: "og:description",
        content: "Pre-primary to Class 8 free schooling for street children, taught by students.",
      },
    ],
  }),
  component: School,
});

const CLASSES = [
  ["Pre-primary", "Ages 4–6", "Alphabet, numbers 1–50, colours, songs, free play"],
  ["Class 1–2", "Ages 6–8", "Bangla & English reading, addition/subtraction, drawing"],
  ["Class 3–5", "Ages 8–11", "Grammar, multiplication/division, science basics, hygiene"],
  ["Class 6–8", "Ages 11–14", "Full subject set, exam preparation, life-skills and career talks"],
];

const TIMETABLE = [
  ["Saturday", "Bangla", "Mathematics", "Drawing"],
  ["Sunday", "English", "Science", "Play"],
  ["Monday", "Mathematics", "Bangla", "Hygiene"],
  ["Tuesday", "English", "Social studies", "Songs"],
  ["Wednesday", "Revision", "Mathematics", "Sports"],
  ["Thursday", "Moral story", "Group discussion", "Cultural"],
];

function School() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="CRC School"
          title="Hatekhori — the first letters"
          intro="A free school for children who have never held a pencil. Pre-primary to Class 8, taught entirely by university student volunteers."
        />

        <Section eyebrow="About" title="What Hatekhori is">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <p className="text-muted-foreground">
              “Hatekhori” is the Bangla word for a child's very first writing lesson. Our school
              carries that name because most of our students arrive with no schooling at all. There
              are no fees, no uniforms to buy and no admission tests — books, slates, snacks and
              hygiene kits are provided by CRC. Children who reach Class 5 level are supported to
              transfer into government primary schools while staying in our after-school programme.
            </p>
            <div className="overflow-hidden">
              <img
                src={school}
                alt="Hatekhori class in session"
                width={1280}
                height={854}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          </div>
        </Section>

        <Section tone="sand" eyebrow="Class categories" title="Pre-primary to Class 8">
          <div className="grid gap-px bg-border md:grid-cols-4">
            {CLASSES.map(([name, age, focus]) => (
              <div
                key={name}
                className="bg-background p-6 transition-colors duration-200 hover:bg-brand/5"
              >
                <h3 className="font-display text-brand">{name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {age}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{focus}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Teaching model" title="University students as teachers">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Bullets
                items={[
                  "Each teacher commits to a minimum of two class days per week for one semester",
                  "New volunteers shadow a senior teacher for two weeks before leading a class",
                  "Lesson plans are activity-based and prepared a week in advance",
                  "A class monitor records attendance and reports absent children for home visits",
                ]}
              />
            </div>
            <div className="overflow-x-auto border border-border shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink text-ink-foreground">
                  <tr>
                    <th className="p-3 font-display text-xs tracking-wider uppercase">Day</th>
                    <th className="p-3 font-display text-xs tracking-wider uppercase">Period 1</th>
                    <th className="p-3 font-display text-xs tracking-wider uppercase">Period 2</th>
                    <th className="p-3 font-display text-xs tracking-wider uppercase">Period 3</th>
                  </tr>
                </thead>
                <tbody>
                  {TIMETABLE.map((row) => (
                    <tr key={row[0]} className="border-t border-border transition-colors hover:bg-brand/5">
                      {row.map((cell, i) => (
                        <td
                          key={cell + i}
                          className={`p-3 ${i === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section tone="ink" eyebrow="Student gallery" title="Life inside the classroom">
          <div className="grid gap-4 md:grid-cols-3">
            {[school, campaign, health].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden border border-ink-foreground/20"
              >
                <img
                  src={src}
                  alt={`Hatekhori school moment ${i + 1}`}
                  width={1280}
                  height={854}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Section>

        <Section tone="sand" eyebrow="Assessment & entry" title="Exams, results and admission">
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Exams">
              Three assessments a year — first term, half-yearly and annual — plus continuous
              classroom evaluation.
            </Card>
            <Card title="Results" accent="leaf">
              Result sheets are read out at the parents meeting and handed to guardians with a
              progress comment.
            </Card>
            <Card title="Admission & enrolment" accent="ink">
              Open all year. A guardian visits the branch office with the child; volunteers complete
              a short enrolment form and home survey. Admission is free.
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
