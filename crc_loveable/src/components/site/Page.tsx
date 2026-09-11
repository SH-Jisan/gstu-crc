import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="slash-band bg-brand text-brand-foreground overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-20">
        <p className="text-xs font-semibold tracking-[0.28em] uppercase opacity-85">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base opacity-90 md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children?: ReactNode;
  tone?: "default" | "sand" | "ink";
}) {
  const bg =
    tone === "sand" ? "bg-sand" : tone === "ink" ? "bg-ink text-ink-foreground" : "bg-background";
  return (
    <section id={id} className={`${bg} scroll-mt-28`}>
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.28em] text-brand uppercase">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mt-2 max-w-3xl text-3xl md:text-4xl">
            {title}
          </h2>
        )}
        {lead && (
          <p
            className={`mt-4 max-w-3xl ${tone === "ink" ? "text-ink-foreground/75" : "text-muted-foreground"}`}
          >
            {lead}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function Card({
  title,
  children,
  accent = "brand",
  delay,
}: {
  title: string;
  children: ReactNode;
  accent?: "brand" | "leaf" | "ink";
  delay?: number;
}) {
  const bar =
    accent === "leaf"
      ? "border-l-leaf hover:border-l-leaf"
      : accent === "ink"
        ? "border-l-ink hover:border-l-ink"
        : "border-l-brand hover:border-l-brand-deep";
  return (
    <div
      className={`border border-border border-l-4 bg-card p-6 ${bar} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-muted-foreground">
      {items.map((i) => (
        <li
          key={i}
          className="flex gap-2 transition-colors hover:text-foreground"
        >
          <span className="mt-2 size-1.5 shrink-0 bg-brand" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

