import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import { PROJECTS, SITE } from "@/lib/data";

const featured = PROJECTS.slice(0, 3);

export default function Home() {
  return (
    <PageShell onDark padTop={false}>
      <Hero />
      <Marquee />

      {/* Intro */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <h2 className="display max-w-[18ch] text-[clamp(1.8rem,4.5vw,3.6rem)] md:col-span-8">
            An architecture &amp; interiors studio building the calm between walls.
          </h2>
          <div className="md:col-span-4">
            <p className="prose-lg text-muted">
              From homes and hospitals to campuses and convention halls, we work
              across {SITE.coverage} — start to finish.
            </p>
            <Link
              href="/studio"
              className="mt-5 inline-block text-sm underline-offset-8 hover:underline"
            >
              About the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-line bg-pure">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="display text-[clamp(1.8rem,4.5vw,3.4rem)]">
              Featured work
            </h2>
            <Link
              href="/work"
              className="whitespace-nowrap text-sm underline-offset-8 hover:underline"
            >
              All projects →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <Link key={p.slug} href="/work" className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.category} in ${p.location}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="display mt-4 text-xl md:text-2xl">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {p.category} · {p.location.split(",").pop()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-line bg-ink text-paper">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-5 py-24 md:flex-row md:items-center md:justify-between md:px-10 md:py-28">
          <h2 className="display max-w-[16ch] text-[clamp(2rem,5vw,4rem)]">
            Have a site, a brief or an idea?
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/estimate"
              className="rounded-full bg-paper px-7 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Get a free estimate
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-paper/60 px-7 py-3 text-sm transition-colors hover:bg-paper/10"
            >
              Contact the studio
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
