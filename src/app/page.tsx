import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import { PROJECTS } from "@/lib/data";

const featured = PROJECTS.slice(0, 3);

const CRAFT = [
  {
    title: "Architectural Experiences",
    description: "Spaces shaped by purpose, proportion, materiality, and the character of place.",
  },
  {
    title: "Spatial Strategies",
    description: "Thoughtful frameworks that guide growth, identity, and meaningful experiences.",
  },
  {
    title: "Interior Environments",
    description: "Interiors composed through a dialogue of light, texture, and timeless detail.",
  },
  {
    title: "Landscape Connections",
    description: "Harmonious relationships between built form, nature, and human experience.",
  },
];

export default function Home() {
  return (
    <PageShell onDark padTop={false}>
      <Hero />
      <Marquee />

      {/* Intro: Why Void? */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="label text-accent font-medium">Philosophy</span>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] leading-none">
              Why Void?
            </h2>
            <p className="text-xl md:text-2xl mt-8 font-light text-ink-soft leading-relaxed">
              Void is not the absence of space. It is the presence of possibility. It is the pause between elements, the balance between light and shadow, the space that allows architecture to breathe.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end gap-6 pt-6 md:pt-0">
            <p className="prose-lg text-muted text-base leading-relaxed">
              At Void Architects, we explore the relationship between form and emptiness, creating environments where every element has purpose and every space has meaning.
            </p>
            <p className="prose-lg text-muted text-base leading-relaxed">
              From intimate residences to institutional environments, we shape spaces where light, material, and human experience come together with intention. Architecture defined by purpose, precision, and permanence.
            </p>
            <div className="mt-4">
              <Link
                href="/studio"
                className="inline-block text-sm underline-offset-8 hover:underline text-ink font-medium"
              >
                About the studio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Craft */}
      <section className="border-t border-line bg-pure">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <span className="label text-accent font-medium">Our Offerings</span>
          <h2 className="display mt-4 mb-16 text-[clamp(2.2rem,5.5vw,4.5rem)]">
            What We Craft
          </h2>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {CRAFT.map((item, idx) => (
              <div key={idx} className="reveal flex flex-col border-l border-line pl-6 transition-colors hover:border-ink duration-500">
                <span className="label text-muted">0{idx + 1}</span>
                <h3 className="display mt-4 text-2xl lg:text-3xl">{item.title}</h3>
                <p className="prose-lg mt-4 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Philosophy Band */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <span className="label text-accent font-medium">Process Philosophy</span>
              <h2 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.5rem)] leading-tight">
                We Design.<br />We Develop.<br />We Deliver.
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-8">
              <p className="text-xl md:text-2xl font-light text-ink-soft leading-relaxed max-w-[32ch]">
                From vision to reality, every project is shaped through a considered process of exploration, refinement, and execution.
              </p>
              <p className="mt-6 text-base text-muted max-w-[40ch]">
                Creating spaces where ideas become experiences and architecture becomes a lasting expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Signatures */}
      <section className="border-t border-line bg-pure">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="display text-[clamp(1.8rem,4.5vw,3.4rem)]">
              Selected Signatures
            </h2>
            <Link
              href="/clients"
              className="whitespace-nowrap text-sm underline-offset-8 hover:underline"
            >
              All projects →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <Link key={p.slug} href="/clients" className="group block">
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

