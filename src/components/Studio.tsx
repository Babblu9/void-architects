import Image from "next/image";

const PRINCIPLES = [
  {
    title: "Context",
    description: "Understanding every site's unique identity and cultural narrative.",
  },
  {
    title: "Materiality",
    description: "Exploring materials as a means of expression, creating depth, character, and permanence.",
  },
  {
    title: "Light",
    description: "Using natural light to shape atmosphere, movement, and emotional experience.",
  },
  {
    title: "Experience",
    description: "Designing spaces that connect with people and create lasting impressions.",
  },
  {
    title: "Timelessness",
    description: "Creating architecture that remains meaningful beyond trends and generations.",
  },
];

export default function Studio() {
  return (
    <section id="studio" className="border-t border-line">
      {/* Hero / Intro Title */}
      <div className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-36">
        <div className="reveal grid gap-10 md:grid-cols-12">
          <h2 className="display text-[clamp(2.2rem,5vw,4.5rem)] md:col-span-8 leading-tight">
            Architecture begins not with walls or structures, but with space.
          </h2>
          <div className="prose-lg flex flex-col gap-6 text-lg text-ink-soft md:col-span-4 justify-end">
            <p className="font-light leading-relaxed">
              The void is where possibility resides. It is the pause between form and function, the silence that gives meaning to sound, and the space that allows architecture to breathe.
            </p>
            <p className="text-sm text-muted">
              At Void Architects, we believe that great design is not merely created—it is discovered through understanding, exploration, and thoughtful refinement.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed image band */}
      <div className="reveal-mask relative mt-20 h-[52vh] min-h-[340px] w-full overflow-hidden md:mt-28 md:h-[70vh]">
        <Image
          src="/projects/sree-reddy.jpg"
          alt="Dr Sree Reddy Residence by Void Architects — contemporary tropical-minimalist duplex at dusk"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/10" />
      </div>

      {/* Who We Are */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32 border-b border-line">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <span className="label text-accent font-medium">Identity</span>
            <h3 className="display mt-4 text-[clamp(1.8rem,4vw,3.2rem)]">
              Who We Are
            </h3>
          </div>
          <div className="prose-lg text-ink-soft text-lg md:col-span-8 flex flex-col gap-6 leading-relaxed">
            <p>
              Void Architects is an architecture and design practice dedicated to creating meaningful relationships between people, place, and experience.
            </p>
            <p>
              Our work spans residential, commercial, institutional, and experiential environments, each approached with curiosity, precision, and a commitment to timeless design.
            </p>
            <p className="text-muted text-base">
              We design spaces that do more than serve a purpose—they enrich the lives of those who inhabit them and remain relevant through time.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-paper-2 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="reveal flex flex-col border border-line p-8 md:p-12 bg-pure rounded-xl">
              <span className="label text-accent font-medium">Aspiration</span>
              <h3 className="display mt-4 text-3xl">Vision</h3>
              <p className="prose-lg mt-6 text-lg text-ink-soft leading-relaxed">
                To create architecture that establishes a lasting relationship between people, place, and experience.
              </p>
              <p className="mt-4 text-muted text-sm leading-relaxed">
                We envision spaces that are defined not only by their form, but by the memories, emotions, and connections they inspire.
              </p>
            </div>

            <div className="reveal flex flex-col border border-line p-8 md:p-12 bg-pure rounded-xl">
              <span className="label text-accent font-medium">Commitment</span>
              <h3 className="display mt-4 text-3xl">Mission</h3>
              <p className="prose-lg mt-6 text-lg text-ink-soft leading-relaxed">
                To transform ideas into meaningful environments through thoughtful exploration, collaboration, and design excellence.
              </p>
              <p className="mt-4 text-muted text-sm leading-relaxed">
                We strive to balance creative vision, technical precision, and contextual understanding in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Founders */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32 border-b border-line">
        <span className="label text-accent font-medium">Leadership</span>
        <h3 className="display mt-4 mb-16 text-[clamp(2.2rem,5vw,4rem)]">
          The Founders
        </h3>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Rajesh */}
          <div className="reveal border-t border-ink pt-8 flex flex-col gap-6">
            <div className="flex justify-between items-baseline">
              <div>
                <h4 className="display text-2xl md:text-3xl">Rajesh Naik</h4>
                <p className="text-sm text-muted mt-1">Chief Space Architect</p>
              </div>
              <span className="display font-mono text-[3rem] text-ink/10 leading-none">RN</span>
            </div>
            <p className="prose-lg text-ink-soft leading-relaxed text-base">
              Believing that architecture is ultimately about human experience, Rajesh approaches every project through the lens of context, proportion, and purpose.
            </p>
            <div className="mt-2 text-ink-soft italic border-l-2 border-line pl-4">
              &ldquo;Every space has a story waiting to be revealed. Our role is simply to uncover it.&rdquo;
            </div>
          </div>

          {/* Anil */}
          <div className="reveal border-t border-ink pt-8 flex flex-col gap-6">
            <div className="flex justify-between items-baseline">
              <div>
                <h4 className="display text-2xl md:text-3xl">Anil Kumar Nekkalapudi</h4>
                <p className="text-sm text-muted mt-1">Chief Vision Architect</p>
              </div>
              <span className="display font-mono text-[3rem] text-ink/10 leading-none">AN</span>
            </div>
            <p className="prose-lg text-ink-soft leading-relaxed text-base">
              Driven by ideas and possibilities, Anil brings together conceptual thinking, spatial imagination, and design philosophy to shape meaningful architectural narratives.
            </p>
            <div className="mt-2 text-ink-soft italic border-l-2 border-line pl-4">
              &ldquo;Architecture is the art of giving form to ideas and meaning to space.&rdquo;
            </div>
          </div>
        </div>
      </div>

      {/* Our Principles */}
      <div className="bg-pure border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <span className="label text-accent font-medium">Core Beliefs</span>
          <h3 className="display mt-4 mb-16 text-[clamp(2.2rem,5vw,4rem)]">
            Our Principles
          </h3>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="reveal flex flex-col border-t border-line pt-6">
                <h4 className="display text-xl lg:text-2xl">{p.title}</h4>
                <p className="prose-lg mt-4 text-sm text-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Approach & Closing Thought */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <span className="label text-accent font-medium">Methodology</span>
            <h3 className="display mt-4 text-[clamp(1.8rem,4vw,3.2rem)] leading-tight">
              Our Approach
            </h3>
            <p className="prose-lg mt-6 text-lg text-ink-soft leading-relaxed">
              Every project begins with understanding—the character of a place, the aspirations of its users, and the possibilities waiting to emerge.
            </p>
            <p className="prose-lg mt-4 text-sm text-muted leading-relaxed">
              Through dialogue, exploration, and refinement, we create architecture that is thoughtful in conception and enduring in expression.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6 border-l border-ink/10 pl-8 py-2 md:mt-10">
            <span className="label text-muted">Closing Thought</span>
            <blockquote className="display text-2xl md:text-3xl text-ink leading-snug">
              &ldquo;The void is not emptiness. It is intention. It is the beginning of every meaningful space and the silent element that gives architecture its greatest power.&rdquo;
            </blockquote>
            <p className="label text-accent text-sm font-semibold tracking-widest mt-4">
              Void is where architecture begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

