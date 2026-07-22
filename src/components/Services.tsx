import Image from "next/image";

const EXPERTISES = [
  {
    title: "Architecture",
    description: "We design architecture that responds thoughtfully to its environment, balancing form, function, and material expression.",
    image: "/projects/lbs-school.jpg",
  },
  {
    title: "Interior Environments",
    description: "Interiors are where architecture becomes personal. Through a careful dialogue between light, materiality, proportion, and detail, we create environments that elevate everyday experiences.",
    image: "/projects/sridhar.jpg",
  },
  {
    title: "Master Planning",
    description: "Meaningful spaces begin with meaningful frameworks. We develop master plans that organise movement, establish identity, and anticipate future possibilities.",
    image: "/projects/nit-warangal.jpg",
  },
  {
    title: "Landscape Design",
    description: "Landscape is not an addition to architecture—it is an integral part of it. We design outdoor environments that foster harmony between the built and the natural.",
    image: "/projects/harsha.jpg",
  },
  {
    title: "Spatial Strategy",
    description: "Beyond buildings and interiors, we explore how space influences behaviour, experience, and identity. Our spatial strategies shape environments that are intuitive, adaptable, and meaningful.",
    image: "/projects/dr-raos-clinic.jpg",
  },
];

export default function Services() {
  return (
    <section id="expertise" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
      <div className="reveal mb-20 grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <span className="label text-accent font-medium uppercase tracking-widest text-xs">Core Capabilities</span>
          <h2 className="display mt-4 text-[clamp(2.2rem,5.5vw,4.5rem)] leading-none">
            What We Shape
          </h2>
        </div>
        <p className="prose-lg text-muted text-lg md:col-span-4 leading-relaxed md:pt-8">
          We shape spaces with clarity, purpose, and a deep understanding of how they are experienced and lived.
        </p>
      </div>

      <div className="flex flex-col">
        {EXPERTISES.map((s, i) => (
          <div
            key={s.title}
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
              <div className="absolute inset-0 bg-ink/5" />
            </div>
            {/* Text */}
            <div className="[direction:ltr]">
              <h3 className="display text-[clamp(1.8rem,4.5vw,3rem)]">
                {s.title}
              </h3>
              <p className="prose-lg mt-6 text-base text-ink-soft leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Statement */}
      <div className="border-t border-line mt-16 pt-16 text-center">
        <p className="text-xl md:text-2xl font-light text-ink-soft max-w-[36ch] mx-auto leading-relaxed">
          Across every scale and discipline, our pursuit remains the same—to create spaces rooted in context, defined by purpose, and remembered for the experiences they inspire.
        </p>
        <p className="label mt-8 text-accent font-semibold tracking-widest">
          Thoughtfully designed. Precisely crafted. Timelessly experienced.
        </p>
      </div>
    </section>
  );
}

