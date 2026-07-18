"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PROJECTS } from "@/lib/data";

// Editorial index list (BIG / Zaha style): a numbered typographic ledger of
// projects; hovering a row floats a large image preview that trails the cursor.
export default function Portfolio() {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  };

  return (
    <section
      id="work"
      onMouseMove={onMove}
      className="relative border-t border-line bg-paper"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <div className="reveal mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="display text-[clamp(2rem,5.5vw,4.5rem)]">
            Selected work
          </h2>
          <p className="prose-lg max-w-[34ch] text-muted">
            A ledger of built projects across Telangana &amp; India — homes,
            workplaces and the spaces between.
          </p>
        </div>

        <ol className="border-t border-line">
          {PROJECTS.map((p, i) => (
            <li key={p.slug}>
              <a
                href={`#work`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group grid grid-cols-12 items-center gap-4 border-b border-line py-6 transition-colors duration-500 hover:bg-paper-2 md:py-8"
              >
                <span className="col-span-2 label text-muted md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 md:col-span-5">
                  <span className="display block text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {p.title}
                  </span>
                </span>
                <span className="col-span-6 col-start-3 text-sm text-muted md:col-span-3 md:col-start-auto">
                  {p.category}
                </span>
                <span className="col-span-4 text-right text-sm text-muted md:col-span-2">
                  {p.location.split(",").pop()}
                </span>
                <span className="col-span-2 hidden text-right text-sm text-muted md:block md:col-span-1">
                  {p.year}
                </span>
                {/* inline image for touch / no-hover devices */}
                <span className="relative col-span-12 mt-3 block aspect-[16/10] w-full overflow-hidden rounded-lg md:hidden">
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.category} in ${p.location}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Cursor-following preview (desktop) */}
      <div
        ref={previewRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-40 hidden aspect-[4/5] w-[300px] overflow-hidden rounded-lg transition-opacity duration-300 md:block ${
          active !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        {PROJECTS.map((p, i) => (
          <Image
            key={p.slug}
            src={p.image}
            alt=""
            fill
            sizes="300px"
            className={`object-cover transition-opacity duration-300 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
