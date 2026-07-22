import { PROCESS } from "@/lib/data";

const PROCESS_PHASES = [
  {
    title: "We Design.",
    description: "Transforming ideas into thoughtful spatial concepts.",
  },
  {
    title: "We Develop.",
    description: "Refining concepts through detail, materiality, and technical precision.",
  },
  {
    title: "We Deliver.",
    description: "Bringing architecture to life through collaboration and execution.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-t border-line">
      {/* Intro Header */}
      <div className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-36">
        <div className="reveal grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="label text-accent font-medium">Methodology</span>
            <h2 className="display mt-4 text-[clamp(2.2rem,5.5vw,4.5rem)] leading-none lowercase">
              understanding space
            </h2>
            <p className="text-xl md:text-3xl mt-8 font-light text-ink-soft leading-relaxed max-w-[32ch]">
              Every meaningful space begins with understanding.
            </p>
          </div>
          <p className="prose-lg text-muted text-base md:col-span-4 flex flex-col justify-end leading-relaxed">
            At Void Architects, we believe architecture is a process of discovery. It emerges through a dialogue between people, place, purpose, and possibility.
          </p>
        </div>
      </div>

      {/* Discovery Phases (Understand, Explore, Refine, Realize) */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32 border-b border-line mt-12">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step) => (
            <div key={step.no} className="reveal border-t border-ink pt-6 flex flex-col justify-between min-h-[120px]">
              <h3 className="display text-2xl lg:text-3xl">{step.title}</h3>
              <p className="prose-lg mt-4 text-sm text-muted leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process Section (We Design. We Develop. We Deliver.) */}
      <div className="bg-paper-2 border-b border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <span className="label text-accent font-medium">Execution</span>
          <h3 className="display mt-4 mb-16 text-[clamp(2.2rem,5vw,4rem)]">
            Our Process
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {PROCESS_PHASES.map((phase) => (
              <div key={phase.title} className="reveal flex flex-col border border-line p-8 md:p-12 bg-pure rounded-xl transition-all duration-500 hover:shadow-lg">
                <h4 className="display text-2xl lg:text-3xl">{phase.title}</h4>
                <p className="prose-lg mt-4 text-sm text-muted leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36 text-center">
        <p className="text-xl md:text-3xl font-light text-ink-soft leading-relaxed max-w-[36ch] mx-auto">
          Architecture is more than the creation of buildings. It is the thoughtful shaping of experiences, relationships, and possibilities.
        </p>
        <blockquote className="display text-xl md:text-3xl text-accent leading-snug mt-12 max-w-[32ch] mx-auto">
          &ldquo;Because every space begins with a void—and every void holds the possibility of something extraordinary.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
