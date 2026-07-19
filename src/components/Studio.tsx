import Image from "next/image";
import { PROCESS, SITE } from "@/lib/data";

export default function Studio() {
  return (
    <section id="studio" className="border-t border-line">
      <div className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-36">
        <div className="reveal grid gap-10 md:grid-cols-12">
          <h2 className="display text-[clamp(2rem,5vw,4rem)] md:col-span-6">
            We design the empty as carefully as the built.
          </h2>
          <div className="prose-lg flex flex-col gap-6 text-lg text-ink-soft md:col-span-5 md:col-start-8">
            <p>
              {SITE.name} is an architecture and interior studio delivering
              projects across {SITE.coverage}, from our studios in{" "}
              {SITE.cities.join(" and ")}. We believe the void — the space
              between walls, the light that falls through it — is the real
              material of architecture.
            </p>
            <p>
              Every project, large or small, is drawn by hand before it is drawn
              by machine. We stay close, from the first site walk to the day you
              move in.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed image band */}
      <div className="reveal-mask relative mt-20 h-[52vh] min-h-[340px] w-full overflow-hidden md:mt-28 md:h-[76vh]">
        <Image
          src="/projects/sree-reddy.jpg"
          alt="Dr Sree Reddy Residence by Void Architects — a contemporary tropical-minimalist duplex at dusk"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Process — a real 4-step sequence, so the numbering carries meaning */}
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-4">
          {PROCESS.map((step) => (
            <div key={step.no} className="reveal border-t border-ink pt-6">
              <div className="flex items-baseline justify-between">
                <span className="display text-2xl">{step.title}</span>
                <span className="label text-muted">{step.no}</span>
              </div>
              <p className="prose-lg mt-4 text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
