import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[620px] w-full flex-col justify-between overflow-hidden">
      {/* Parallax image layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/projects/nit-warangal.jpg"
          alt="Void Architects' monumental heritage gateway design for NIT Warangal at dusk"
          fill
          priority
          sizes="100vw"
          className="parallax object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/10 to-ink/75" />
      </div>

      {/* Top meta row */}
      <div className="mx-auto flex w-full max-w-[1600px] items-start justify-between px-5 pt-28 text-paper md:px-10 md:pt-32">
        <span className="label text-paper/70">
          Est. Studio — {SITE.cities.join(" · ")}
        </span>
        <span className="label hidden text-paper/70 sm:block">
          {SITE.coverage}
        </span>
      </div>

      {/* Headline */}
      <div className="mx-auto w-full max-w-[1600px] px-5 pb-14 md:px-10 md:pb-16">
        <h1 className="display overflow-hidden text-paper text-[clamp(2.4rem,7.5vw,6rem)]">
          <span className="block [animation:unmask_1.1s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
            Space, shaped by
          </span>
          <span className="block [animation:unmask_1.1s_cubic-bezier(0.16,1,0.3,1)_0.28s_both]">
            light &amp; silence.
          </span>
        </h1>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="prose-lg max-w-[42ch] text-base text-paper/80 md:text-lg">
            An architecture, interiors &amp; design studio delivering considered,
            light-filled work across {SITE.coverage}.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/estimate"
              className="rounded-full bg-paper px-7 py-3 text-sm font-medium text-ink transition-transform duration-500 hover:-translate-y-0.5"
            >
              Get a free estimate
            </Link>
            <Link
              href="/clients"
              className="text-sm text-paper underline-offset-8 hover:underline"
            >
              Selected work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="label text-paper/50">Scroll</span>
      </div>
    </section>
  );
}
