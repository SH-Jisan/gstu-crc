import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { NAV } from "./nav";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="h-2 bg-brand" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div data-aos="fade-up" data-aos-duration="600">
          <span className="flex size-12 items-center justify-center bg-brand font-display text-lg text-brand-foreground transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            CRC
          </span>
          <p className="mt-4 font-display text-lg">Come For Road Child</p>
          <p className="mt-2 text-sm text-ink-foreground/70">
            “পথশিশু মুক্ত পৃথিবী গড়ব একসাথে” — a student-run voluntary organisation working for
            street children since 2016.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center border border-ink-foreground/25 transition-all duration-300 hover:bg-brand hover:border-brand hover:scale-110 hover:-translate-y-0.5"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="flex size-9 items-center justify-center border border-ink-foreground/25 transition-all duration-300 hover:bg-brand hover:border-brand hover:scale-110 hover:-translate-y-0.5"
            >
              <Youtube className="size-4" />
            </a>
            <a
              href="mailto:crcgstu@gmail.com"
              aria-label="Email"
              className="flex size-9 items-center justify-center border border-ink-foreground/25 transition-all duration-300 hover:bg-brand hover:border-brand hover:scale-110 hover:-translate-y-0.5"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.slice(0, 5).map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="inline-block text-ink-foreground/75 transition-all duration-200 hover:text-brand hover:translate-x-1">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            Participate
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.slice(5).map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="inline-block text-ink-foreground/75 transition-all duration-200 hover:text-brand hover:translate-x-1">
                  {i.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/donate" className="inline-block text-ink-foreground/75 transition-all duration-200 hover:text-brand hover:translate-x-1 font-semibold text-brand">
                Donate →
              </Link>
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            Head Office
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/75">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-leaf" />
              Gopalganj Science &amp; Technology University, Gopalganj 8100, Bangladesh
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-leaf" />
              crcgstu@gmail.com
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-leaf" />
              +880 1XXX-XXXXXX
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-ink-foreground/55 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Come For Road Child (CRC), GSTU Branch.</span>
          <span>Brotherhood · Commitment · Trust</span>
        </div>
      </div>
    </footer>
  );
}
