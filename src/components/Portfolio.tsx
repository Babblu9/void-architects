"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PROJECTS } from "@/lib/data";

// Editorial index list (BIG / Zaha style): a numbered typographic ledger of
// projects; hovering a row floats a large image preview that trails the cursor.
export default function Portfolio() {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const activeP = active !== null ? PROJECTS[active] : null;

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
            Selected Signatures
          </h2>
          <p className="prose-lg max-w-[45ch] text-muted leading-relaxed">
            Every space begins as an idea and becomes an experience. Our work is a collection of thoughtful responses to context, purpose, and human experience—each one carrying its own architectural signature.
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
                {/* inline image for touch / no-hover devices — natural ratio */}
                <Image
                  src={p.image}
                  alt={`${p.title} — ${p.category} in ${p.location}`}
                  width={p.w}
                  height={p.h}
                  sizes="100vw"
                  className="col-span-12 mt-3 block h-auto w-full rounded-lg md:hidden"
                />
              </a>
            </li>
          ))}
        </ol>

        {/* Closing Statement */}
        <div className="border-t border-line mt-20 pt-16 text-center">
          <p className="text-xl md:text-2xl font-light text-ink-soft max-w-[36ch] mx-auto leading-relaxed">
            Architecture is not merely what is built. It is what remains—the experiences, memories, and connections that unfold within space.
          </p>
          <p className="label mt-8 text-accent font-semibold tracking-widest">
            Every signature tells its own story.
          </p>
        </div>
      </div>

      {/* Cursor-following preview (desktop) — sized to each image's ratio */}
      <div
        ref={previewRef}
        aria-hidden
        style={{
          width: 380,
          aspectRatio: activeP ? `${activeP.w} / ${activeP.h}` : "3 / 2",
        }}
        className={`pointer-events-none fixed left-0 top-0 z-40 hidden overflow-hidden rounded-lg shadow-2xl transition-opacity duration-300 md:block ${
          active !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        {activeP && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={activeP.image}
            alt=""
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </section>
  );
}
