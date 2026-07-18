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

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-6">
        <Link href="/" className="flex items-baseline gap-2 leading-none">
          <span className="display text-xl md:text-2xl">Void</span>
          <span className="label hidden text-muted sm:inline">Architects</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#estimate"
            className="rounded-full border border-ink px-5 py-2 text-sm transition-colors hover:bg-ink hover:text-paper"
          >
            Book 3D consult
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 pb-6 pt-2 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="py-3 text-sm text-muted"
          >
            {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
