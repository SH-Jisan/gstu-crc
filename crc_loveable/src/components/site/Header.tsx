import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "./nav";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase">
          <span className="text-brand">Estd. 2016</span>
          <div className="hidden gap-6 sm:flex">
            <span>Brotherhood</span>
            <span>Commitment</span>
            <span>Trust</span>
          </div>
          <a href="mailto:crcgstu@gmail.com" className="hover:text-brand">
            crcgstu@gmail.com
          </a>
        </div>
      </div>

      <div className="border-b-4 border-brand bg-background/95 backdrop-blur-sm shadow-sm transition-all">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex size-11 items-center justify-center bg-brand font-display text-lg text-brand-foreground transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
              CRC
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base transition-colors duration-200 group-hover:text-brand">Come For Road Child</span>
              <span className="block text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                GSTU Branch
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-2.5 py-2 text-[13px] font-semibold text-foreground transition-all duration-200 hover:text-brand hover:-translate-y-0.5"
                activeProps={{ className: "text-brand font-bold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/donate"
            className="ml-auto bg-brand px-5 py-2.5 font-display text-sm tracking-wide text-brand-foreground transition-all duration-300 hover:bg-brand-deep hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 xl:ml-2"
          >
            Donate
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="p-2 transition-transform active:scale-95 xl:hidden"
          >
            {open ? <X className="size-6 transition-transform rotate-90 duration-200" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-4 pb-4 xl:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-sm font-semibold transition-all duration-200 hover:text-brand hover:translate-x-1"
                activeProps={{ className: "text-brand font-bold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
