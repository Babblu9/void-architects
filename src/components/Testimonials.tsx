"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 444; // Card width (420px) + gap (24px)
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="border-t border-line bg-paper-2 py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        {/* Header with Slider Controls */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
          <Reveal>
            <span className="label text-muted text-xs uppercase tracking-widest font-mono">Testimonials</span>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)] leading-none text-ink font-normal tracking-tight">
              Don&rsquo;t take our word for it!
              <br />
              Hear it from our partners.
            </h2>
          </Reveal>
          
          {/* Slider Controls */}
          <Reveal className="flex gap-3 self-end md:self-auto">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-paper transition-colors cursor-pointer text-ink bg-pure"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-paper transition-colors cursor-pointer text-ink bg-pure"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </Reveal>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6 px-1 -mx-5 md:-mx-10 md:px-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 md:p-10 rounded-[32px] overflow-hidden min-w-[320px] sm:min-w-[380px] md:min-w-[420px] max-w-[420px] h-[400px] snap-start relative group transition-all duration-500 border border-line bg-pure shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing z-10"
            >
              {/* Background Image (fades in on hover) */}
              <Image
                src={t.image}
                alt={t.project}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0"
                sizes="(min-width: 768px) 420px, 320px"
              />
              {/* Dark Overlay (fades in on hover) */}
              <div className="absolute inset-0 bg-ink/55 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none z-0" />

              {/* Quote Content */}
              <div className="relative z-10 flex flex-col gap-6">
                <p className="text-base md:text-lg text-ink-soft group-hover:text-paper transition-colors duration-500 font-light leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="relative z-10 border-t border-line group-hover:border-white/20 pt-6 transition-colors duration-500">
                <span className="font-signature text-3.5xl md:text-4.5xl text-ink group-hover:text-paper block leading-none mb-2 transition-colors duration-500">
                  {t.author}
                </span>
                <span className="font-medium text-sm text-ink group-hover:text-paper block transition-colors duration-500 leading-tight">
                  {t.role}
                </span>
                <span className="text-xs text-muted group-hover:text-paper/60 block mt-1 transition-colors duration-500">
                  {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
