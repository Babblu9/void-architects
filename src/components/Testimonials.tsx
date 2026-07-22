import Image from "next/image";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-line bg-paper-2 py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        {/* Header */}
        <Reveal className="mb-16">
          <span className="label text-muted text-xs uppercase tracking-widest font-mono">Testimonials</span>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-none text-ink font-normal tracking-tight">
            Don&rsquo;t take our word for it!
            <br />
            Hear it from our partners.
          </h2>
        </Reveal>

        {/* 3-Column Grid */}
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {/* Card 1: Text Card (CPWD / NIT Warangal) */}
          <Reveal className="bg-pure rounded-[32px] p-8 md:p-10 border border-line flex flex-col justify-between h-full min-h-[380px] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-6">
              {/* Quote */}
              <p className="text-base md:text-lg text-ink-soft font-light leading-relaxed">
                &ldquo;The design perfectly balances contemporary minimalism with regional heritage, resulting in an iconic campus entrance. We appreciate the creativity, attention to detail, and professional execution delivered by VOID Architects.&rdquo;
              </p>
            </div>
            
            <div className="mt-8 border-t border-line pt-6">
              <span className="font-signature text-3xl md:text-4xl text-ink block leading-none mb-1">
                CPWD Liaison
              </span>
              <span className="font-medium text-sm text-ink block">NIT Warangal Gateway</span>
              <span className="text-xs text-muted block mt-0.5">Government Liaison Representative</span>
            </div>
          </Reveal>

          {/* Card 2: Image/Video Card (Dr Sree Reddy) */}
          <Reveal className="relative rounded-[32px] p-8 md:p-10 overflow-hidden flex flex-col justify-between h-full min-h-[380px] shadow-sm group">
            {/* Background Image */}
            <Image
              src="/projects/sree-reddy.jpg"
              alt="Dr Sree Reddy Residence"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-ink/40 transition-colors duration-300 group-hover:bg-ink/45" />

            {/* Centered Play Button (Glassmorphic) */}
            <div className="relative z-10 flex justify-center items-center my-auto">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/35 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 cursor-pointer shadow-lg">
                <svg className="w-6 h-6 text-paper fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Bottom Signature Overlay */}
            <div className="relative z-10 border-t border-white/15 pt-6">
              <span className="font-signature text-3xl md:text-4xl text-paper block leading-none mb-1">
                Dr. Sree Reddy
              </span>
              <span className="font-medium text-sm text-paper block">Dr Sree Reddy Residence</span>
              <span className="text-xs text-paper/60 block mt-0.5">MBBS, MCh (USA)</span>
            </div>
          </Reveal>

          {/* Card 3: Text Card (Dr Uske Kiran) */}
          <Reveal className="bg-pure rounded-[32px] p-8 md:p-10 border border-line flex flex-col justify-between h-full min-h-[380px] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-6">
              {/* Quote */}
              <p className="text-base md:text-lg text-ink-soft font-light leading-relaxed">
                &ldquo;The final outcome exceeded our expectations. The design feels premium, functional and timeless — exactly what we envisioned: a contemporary, elegant and efficient healthcare environment.&rdquo;
              </p>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <span className="font-signature text-3xl md:text-4xl text-ink block leading-none mb-1">
                Dr. Uske Kiran
              </span>
              <span className="font-medium text-sm text-ink block">Kiran Kidney Care</span>
              <span className="text-xs text-muted block mt-0.5">MS, MCh Urology — Gold Medalist</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
