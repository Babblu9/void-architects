import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import { PROJECTS } from "@/lib/data";

const featured = PROJECTS.slice(0, 3);

const CRAFT = [
  {
    title: "Architecture",
    description: "Spaces shaped by purpose, proportion, context, and timeless design.",
  },
  {
    title: "Interior Environments",
    description: "Interiors that celebrate light, materiality, and the art of thoughtful living.",
  },
  {
    title: "Master Planning",
    description: "Spatial frameworks designed to guide growth, movement, and meaningful connections.",
  },
  {
    title: "Landscape Design",
    description: "Seamlessly integrating architecture and nature to create harmonious environments.",
  },
];

export default function Home() {
  return (
    <PageShell onDark padTop={false}>
      <Hero />

      {/* The Art of the Space */}
      <section className="bg-ink border-t border-line text-paper pt-16 md:pt-24 pb-0">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 mb-8">
          <span className="label text-accent font-medium text-xs uppercase tracking-widest font-mono">Locations</span>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-none text-paper font-normal tracking-tight">
            The Art of the Space
          </h2>
        </div>
        <Marquee />
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <h2 className="display max-w-[20ch] text-[clamp(1.8rem,4.5vw,3.6rem)] md:col-span-8 leading-tight">
            At Void Architects, we believe architecture is not merely about creating buildings.
          </h2>
          <div className="md:col-span-4 flex flex-col gap-6">
            <p className="prose-lg text-muted text-base leading-relaxed">
              It is about shaping experiences, defining relationships between people and place, and designing spaces that remain meaningful through time.
            </p>
            <p className="prose-lg text-muted text-base leading-relaxed">
              Every project begins with understanding and evolves through thoughtful exploration, refinement, and execution.
            </p>
            <div>
              <Link
                href="/the-void"
                className="inline-block text-sm underline-offset-8 hover:underline text-ink font-medium"
              >
                Learn about our studio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Craft */}
      <section className="border-t border-line bg-pure">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <span className="label text-accent font-medium">Expertise</span>
          <h2 className="display mt-4 mb-16 text-[clamp(2.2rem,5.5vw,4.5rem)]">
            What We Craft
          </h2>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {CRAFT.map((item, idx) => (
              <div key={idx} className="reveal flex flex-col border-l border-line pl-6 transition-colors hover:border-ink duration-500">
                <h3 className="display text-2xl lg:text-3xl">{item.title}</h3>
                <p className="prose-lg mt-4 text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-left">
            <Link
              href="/expertise"
              className="inline-block text-sm underline-offset-8 hover:underline text-ink font-medium"
            >
              Explore our expertise page →
            </Link>
          </div>
        </div>
      </section>

      {/* We Design. We Develop. We Deliver. */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <span className="label text-accent font-medium">Approach</span>
              <h2 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.5rem)] leading-tight">
                We Design.<br />We Develop.<br />We Deliver.
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-8">
              <p className="text-xl md:text-2xl font-light text-ink-soft leading-relaxed max-w-[32ch]">
                From concept to completion, every project is guided by a process of clarity, collaboration, and craftsmanship.
              </p>
              <p className="mt-6 text-base text-muted max-w-[40ch] leading-relaxed">
                We transform ideas into architectural experiences that are precise in execution and enduring in character.
              </p>
              <div className="mt-8">
                <Link
                  href="/approach"
                  className="inline-block text-sm underline-offset-8 hover:underline text-ink font-medium"
                >
                  Our approach →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Void? */}
      <section className="border-t border-line bg-pure">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <span className="label text-accent font-medium">Philosophy</span>
              <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)] leading-none">
                Why Void?
              </h2>
              <p className="text-xl md:text-2xl mt-8 font-light text-ink-soft leading-relaxed">
                Void is not the absence of space. It is the presence of possibility. It is the pause between elements, the dialogue between light and shadow, and the space that allows architecture to breathe.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end gap-6 pt-6 md:pt-0">
              <p className="prose-lg text-muted text-base leading-relaxed">
                At Void Architects, we embrace the philosophy that what is left unbuilt can be as meaningful as what is created. Every line, material, and proportion is considered to create environments that inspire connection, reflection, and experience.
              </p>
              <div className="border-l border-ink/30 pl-4 py-1 my-2">
                <p className="text-sm font-medium tracking-wide text-ink-soft uppercase font-mono">
                  Architecture begins where intention meets space. That is the Void.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Signatures */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="label text-accent font-medium">Portfolio</span>
              <h2 className="display mt-4 text-[clamp(1.8rem,4.5vw,3.4rem)]">
                Selected Signatures
              </h2>
            </div>
            <Link
              href="/selected-signatures"
              className="whitespace-nowrap text-sm underline-offset-8 hover:underline"
            >
              All projects →
            </Link>
          </div>
          <p className="prose-lg mb-12 text-muted leading-relaxed max-w-[50ch]">
            Every space begins as an idea and becomes an experience. Our work is a collection of thoughtful responses to context, purpose, and human experience—each one carrying its own architectural signature.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <Link key={p.slug} href="/selected-signatures" className="group block">
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
                  {p.category} · {p.location}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />

      {/* Closing Statement */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-28 text-center">
          <p className="text-xl md:text-3xl font-light text-ink-soft leading-relaxed max-w-[36ch] mx-auto">
            From intimate residences to institutional environments, we create architecture that responds to its context, enriches human experience, and leaves a lasting signature.
          </p>
          <p className="label mt-8 text-accent text-sm font-semibold tracking-widest">
            Void Architects — Designing Spaces. Defining Experiences.
          </p>
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
              href="/contact"
              className="rounded-full bg-paper px-7 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}


