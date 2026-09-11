import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Section, Card, Bullets } from "@/components/site/Page";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "CRC Branches — Committees, Members & Reports | CRC, GSTU" },
      {
        name: "description",
        content:
          "Explore CRC branches: branch overview, executive and permanent committees, members, activities, reports and documents.",
      },
      { property: "og:title", content: "CRC Branches" },
      {
        property: "og:description",
        content: "Branch overviews, committees, activities and reports across CRC.",
      },
    ],
  }),
  component: Branches,
});

const BRANCHES = [
  { name: "GSTU Branch", place: "Gopalganj Science & Technology University", year: "2016", lead: true },
  { name: "Gopalganj Town", place: "Gopalganj Sadar", year: "2019" },
  { name: "Tungipara", place: "Tungipara Upazila", year: "2021" },
  { name: "Kotalipara", place: "Kotalipara Upazila", year: "2022" },
  { name: "Muksudpur", place: "Muksudpur Upazila", year: "2023" },
  { name: "Dhaka Chapter", place: "Dhaka Metropolitan", year: "2024" },
];

function Branches() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="CRC Branches"
          title="One organisation, many neighbourhoods"
          intro="Each branch runs its own classes, committees and reporting under the central committee's charter."
        />

        <Section eyebrow="Branch list" title="Where CRC works today">
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {BRANCHES.map((b) => (
              <div
                key={b.name}
                className="bg-background p-6 transition-colors duration-200 hover:bg-brand/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{b.name}</h3>
                  {b.lead && (
                    <span className="bg-brand px-2 py-1 text-[10px] font-semibold tracking-wider text-brand-foreground uppercase">
                      Founding
                    </span>
                  )}
                </div>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-leaf shrink-0" /> {b.place}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Established {b.year}
                </p>
              </div>
            ))}
            <div
              className="flex items-center justify-center bg-sand p-6 text-center text-sm font-semibold text-muted-foreground transition-colors hover:bg-brand/10"
            >
              More branches coming — applications open to any campus.
            </div>
          </div>
        </Section>

        <Section
          tone="sand"
          eyebrow="Branch page structure"
          title="What every branch page contains"
          lead="A standard structure keeps every branch comparable, auditable and easy to hand over each year."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Branch overview">
              Founding date, working area, number of students, class venues and current focus.
            </Card>
            <Card title="Executive committee" accent="leaf">
              President, General Secretary, Treasurer, Organising Secretary and departmental
              secretaries with tenure dates.
            </Card>
            <Card title="Permanent committees" accent="ink">
              <Bullets
                items={["Education", "Finance & Audit", "Membership & Discipline", "Media & Publicity"]}
              />
            </Card>
            <Card title="Branch members">
              Full member directory with ID numbers, joining year and current responsibility.
            </Card>
            <Card title="Branch activities" accent="leaf">
              Weekly class logs, campaigns, awareness sessions and community events.
            </Card>
            <Card title="Reports & documents" accent="ink">
              Monthly expense reports, annual report, branch policy and meeting resolutions.
            </Card>
          </div>
        </Section>

        <Section eyebrow="Open a branch" title="Bring CRC to your campus">
          <p className="max-w-3xl text-muted-foreground">
            Any group of students willing to run weekly classes can apply for a branch charter. The
            central committee reviews the application, assigns a mentor branch and issues the branch
            policy and document set. Write to{" "}
            <a href="mailto:crcgstu@gmail.com" className="font-semibold text-brand hover:underline">
              crcgstu@gmail.com
            </a>{" "}
            to start.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
