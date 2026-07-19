import { TESTIMONIALS, CLIENTS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-[14ch] text-[clamp(2rem,5.5vw,4.5rem)]">
            In their words.
          </h2>
          <p className="prose-lg max-w-[34ch] text-muted">
            Doctors, engineers, educators and institutions — the people we&rsquo;ve
            built for, in their own words.
          </p>
        </Reveal>

        {/* Editorial ledger of quotes — hairline separators, no boxes */}
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <Reveal
              key={t.project}
              className="flex flex-col border-t border-ink pt-7"
            >
              <p className="text-xl leading-relaxed text-ink-soft md:text-2xl">
                <span className="text-accent">“</span>
                {t.quote}
                <span className="text-accent">”</span>
              </p>
              <div className="mt-7">
                <p className="font-medium">{t.author}</p>
                <p className="label mt-1">{t.role}</p>
                <p className="mt-2 text-sm text-muted">{t.project}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Client roster */}
        <div className="mt-24 border-t border-line pt-10">
          <p className="label mb-6">Selected clients</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {CLIENTS.map((c) => (
              <span
                key={c}
                className="text-lg text-ink-soft md:text-xl"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
