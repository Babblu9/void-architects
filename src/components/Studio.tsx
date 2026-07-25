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
      <div className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-36 flex flex-col items-center text-center">
        <div className="reveal flex flex-col items-center gap-10 md:gap-12 max-w-[950px]">
          <h2 className="display text-[clamp(2.2rem,5vw,4.5rem)] leading-tight">
            Architecture Begins by Understanding Space.
          </h2>
          <div className="flex flex-col items-center gap-8 max-w-[850px]">
            <p className="text-xl md:text-2xl font-light text-ink-soft leading-relaxed">
              Space is the foundation of architecture. It defines how light enters, how people move, and how experiences unfold. Before form, material, or structure, there is an understanding of place, purpose, and possibility.
            </p>
            <p className="text-base text-muted leading-relaxed max-w-[640px]">
              At Void Architects, we believe great architecture is not merely designed—it is discovered through curiosity, collaboration, and thoughtful refinement.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed image band */}
      <div className="reveal-mask relative mt-20 h-[52vh] min-h-[340px] w-full overflow-hidden md:mt-28 md:h-[70vh]">
        <Image
          src="/projects/matrusri-onsite.jpg"
          alt="Sri Matru Sri College by Void Architects — contemporary institutional building on-site"
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
        <span className="label text-accent font-medium uppercase tracking-[0.3em] text-xs">Leadership</span>
        <h3 className="display mt-4 mb-24 text-[clamp(2.2rem,5vw,4rem)]">
          The Founders
        </h3>
        
        <div className="flex flex-col gap-32 md:gap-48">
          {/* Rajesh */}
          <div className="reveal grid gap-12 md:grid-cols-12 items-center">
            {/* Portrait */}
            <div className="md:col-span-5 relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-paper-2 group">
              <Image
                src="/team/rajesh.png"
                alt="Rajesh Naik — Chief Space Architect & Founder of Void Architects"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover grayscale sepia-[15%] transition-all duration-700 hover:scale-[1.03] hover:grayscale-0 hover:sepia-0"
                priority
              />
            </div>
            {/* Info */}
            <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
              <div>
                <h4 className="display text-4xl md:text-5xl lg:text-6xl font-normal relative group/title inline-block">
                  Rajesh Naik
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-ink transition-all duration-500 group-hover/title:w-full"></span>
                </h4>
                <p className="text-base text-muted uppercase tracking-[0.2em] mt-2">Co-Founder & Architect</p>
              </div>

              <blockquote className="display text-2xl md:text-3xl italic text-ink-soft leading-snug border-l-2 border-accent pl-6 my-4">
                &ldquo;Architecture is not built. It is remembered.&rdquo;
              </blockquote>

              <div className="flex flex-col gap-4 text-base">
                <div>
                  <span className="font-semibold text-muted text-xs uppercase tracking-wider block">Biography</span>
                  <p className="text-ink-soft mt-1 leading-relaxed">
                    Believing that architecture is ultimately about human experience, Rajesh approaches every project through the lens of context, proportion, and purpose.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-muted text-xs uppercase tracking-wider block">Design Philosophy</span>
                  <p className="text-ink-soft mt-1 leading-relaxed">
                    Uncovering the silent narratives of spaces through exposing natural materials and respecting the site’s innate context.
                  </p>
                </div>
              </div>

              {/* Personal Details Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-b border-line py-6 my-2 text-sm">
                <div>
                  <span className="text-muted block font-medium">Experience</span>
                  <span className="text-ink font-semibold mt-1 block">8+ Years</span>
                </div>
                <div>
                  <span className="text-muted block font-medium">Specialisation</span>
                  <span className="text-ink font-semibold mt-1 block">Residential Design</span>
                </div>
                <div>
                  <span className="text-muted block font-medium">Believes In</span>
                  <span className="text-ink font-semibold mt-1 block">Minimalism & Context</span>
                </div>
                <div>
                  <span className="text-muted block font-medium">Favourite Material</span>
                  <span className="text-ink font-semibold mt-1 block">Exposed Concrete</span>
                </div>
              </div>

              <div className="flex gap-6 mt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-wider uppercase border-b border-ink hover:text-accent hover:border-accent transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:rajesh@voidarchitects.in" className="text-sm font-semibold tracking-wider uppercase border-b border-ink hover:text-accent hover:border-accent transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Anil */}
          <div className="reveal grid gap-12 md:grid-cols-12 items-center">
            {/* Info */}
            <div className="md:col-span-6 md:col-span-push-6 flex flex-col gap-6 md:order-1">
              <div>
                <h4 className="display text-4xl md:text-5xl lg:text-6xl font-normal relative group/title inline-block">
                  Anil Kumar
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-ink transition-all duration-500 group-hover/title:w-full"></span>
                </h4>
                <p className="text-base text-muted uppercase tracking-[0.2em] mt-2">Co-Founder & Chief Visionary</p>
              </div>

              <blockquote className="display text-2xl md:text-3xl italic text-ink-soft leading-snug border-l-2 border-accent pl-6 my-4">
                &ldquo;Architecture is the art of giving form to ideas and meaning to space.&rdquo;
              </blockquote>

              <div className="flex flex-col gap-4 text-base">
                <div>
                  <span className="font-semibold text-muted text-xs uppercase tracking-wider block">Biography</span>
                  <p className="text-ink-soft mt-1 leading-relaxed">
                    Driven by ideas and possibilities, Anil brings together conceptual thinking, spatial imagination, and design philosophy to shape meaningful architectural narratives.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-muted text-xs uppercase tracking-wider block">Design Philosophy</span>
                  <p className="text-ink-soft mt-1 leading-relaxed">
                    Balancing creative vision, technical precision, and contextual understanding in every project to turn dreams into reality.
                  </p>
                </div>
              </div>

              {/* Personal Details Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-b border-line py-6 my-2 text-sm">
                <div>
                  <span className="text-muted block font-medium">Experience</span>
                  <span className="text-ink font-semibold mt-1 block">10+ Years</span>
                </div>
                <div>
                  <span className="text-muted block font-medium">Specialisation</span>
                  <span className="text-ink font-semibold mt-1 block">Commercial & Luxury Estates</span>
                </div>
                <div>
                  <span className="text-muted block font-medium">Believes In</span>
                  <span className="text-ink font-semibold mt-1 block">Purpose-driven Innovation</span>
                </div>
                <div>
                  <span className="text-muted block font-medium">Favourite Material</span>
                  <span className="text-ink font-semibold mt-1 block">Natural Stone</span>
                </div>
              </div>

              <div className="flex gap-6 mt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold tracking-wider uppercase border-b border-ink hover:text-accent hover:border-accent transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:anil@voidarchitects.in" className="text-sm font-semibold tracking-wider uppercase border-b border-ink hover:text-accent hover:border-accent transition-colors">
                  Email
                </a>
              </div>
            </div>

            {/* Portrait */}
            <div className="md:col-span-5 md:col-start-8 relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-paper-2 group md:order-2">
              <Image
                src="/team/anil.jpg"
                alt="Anil Kumar Nekkalapudi — Chief Vision Architect & Founder of Void Architects"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover grayscale sepia-[15%] transition-all duration-700 hover:scale-[1.03] hover:grayscale-0 hover:sepia-0"
                priority
              />
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

