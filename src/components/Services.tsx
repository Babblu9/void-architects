import Image from "next/image";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
      <div className="reveal mb-20 grid gap-8 md:grid-cols-12 md:items-end">
        <h2 className="display max-w-[16ch] text-[clamp(2rem,5.5vw,4.5rem)] md:col-span-8">
          Three disciplines, one hand.
        </h2>
        <p className="prose-lg text-muted md:col-span-4">
          We take a place from the ground up — building, interior and everything
          between — so the whole reads as a single, quiet idea.
        </p>
      </div>

      <div className="flex flex-col">
        {SERVICES.map((s, i) => (
          <div
            key={s.key}
            className={`grid items-center gap-8 border-t border-line py-12 md:grid-cols-2 md:gap-16 md:py-16 ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            {/* Image */}
            <div className="reveal-mask relative aspect-[5/4] w-full overflow-hidden rounded-xl [direction:ltr]">
              <Image
                src={s.image}
                alt={`${s.title} — Void Architects`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Text */}
            <div className="[direction:ltr]">
              <span className="label text-accent">{s.index}</span>
              <h3 className="display mt-5 text-[clamp(2rem,4.5vw,3.5rem)]">
                {s.title}
              </h3>
              <p className="prose-lg mt-6 text-lg text-ink-soft">{s.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
