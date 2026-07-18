"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#studio", label: "Studio" },
  { href: "/#estimate", label: "Free estimate" },
  { href: "/#contact", label: "Contact" },
];

// onDark = the top of the page behind the nav is a dark hero image.
// Home passes onDark; content pages (light top) leave it false.
export default function Nav({ onDark = false }: { onDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light treatment only while transparent over a dark hero.
  const light = onDark && !scrolled && !open;
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <Link
          href="/"
          className={`flex items-baseline gap-2 leading-none transition-colors duration-500 ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          <span className="display text-lg tracking-tight sm:text-xl">
            Void
          </span>
          <span
            className={`label ${light ? "text-paper/70" : "text-muted"}`}
          >
            Architects
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap text-sm tracking-wide transition-colors ${
                light
                  ? "text-paper/80 hover:text-paper"
                  : "text-ink/80 hover:text-ink"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#estimate"
            className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm transition-colors ${
              light
                ? "border-paper/70 text-paper hover:bg-paper hover:text-ink"
                : "border-ink text-ink hover:bg-ink hover:text-paper"
            }`}
          >
            Book 3D consult
          </a>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 transition-transform duration-300 ${
              light ? "bg-paper" : "bg-ink"
            } ${open ? "translate-y-[4px] rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 transition-transform duration-300 ${
              light ? "bg-paper" : "bg-ink"
            } ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-paper/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-lg text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="py-4 text-sm text-muted"
          >
            {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
