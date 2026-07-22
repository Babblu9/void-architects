"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";


const SLIDES = [
  {
    id: "01",
    title: "Void is Where Architecture Begins.",
    image: "/projects/nit-warangal.jpg",
    alt: "Void Architects' monumental campus gateway design for NIT Warangal at dusk",
  },
  {
    id: "02",
    title: "Spaces That Speak Without Words.",
    image: "/projects/sree-reddy.jpg",
    alt: "Dr Sree Reddy Residence by Void Architects — contemporary tropical-minimalist duplex at dusk",
  },
  {
    id: "03",
    title: "Designed to Endure. Crafted to Inspire.",
    image: "/projects/pothunuri.jpg",
    alt: "Pothunuri Convention Hall by Void Architects — contemporary luxury convention hall",
  },
];

const ROTATE_INTERVAL = 6000; // 6 seconds

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    startTimeRef.current = Date.now();

    // Defer resetting progress to the next animation frame to avoid calling setState
    // synchronously within the effect body.
    const rafId = requestAnimationFrame(() => {
      setProgress(0);
    });

    const tickInterval = 50;
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / ROTATE_INTERVAL) * 100, 100);
      setProgress(pct);

      if (elapsed >= ROTATE_INTERVAL) {
        setActiveSlide((prev) => (prev + 1) % SLIDES.length);
      }
    }, tickInterval);

    return () => {
      cancelAnimationFrame(rafId);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activeSlide]);


  return (
    <section className="relative flex h-[100svh] min-h-[620px] w-full flex-col justify-between overflow-hidden">
      {/* Background images fade layer */}
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 -z-10 overflow-hidden transition-opacity duration-1000 ease-in-out ${
            activeSlide === idx ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="parallax object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/10 to-ink/75" />
        </div>
      ))}
      {/* Spacer to push content down below absolute navbar */}
      <div className="h-28 md:h-36" />

      {/* Headline & Carousel Elements */}
      <div className="mx-auto w-full max-w-[1600px] px-5 pb-14 md:px-10 md:pb-16">
        <div className="grid grid-cols-1 grid-rows-1">
          {SLIDES.map((slide, idx) => (
            <h1
              key={slide.id}
              className={`col-start-1 row-start-1 display text-paper text-[clamp(2.2rem,6.5vw,5.5rem)] transition-all duration-700 ease-out ${
                activeSlide === idx
                  ? "translate-y-0 opacity-100 pointer-events-auto"
                  : "translate-y-8 opacity-0 pointer-events-none"
              }`}
            >
              {slide.title}
            </h1>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="prose-lg max-w-[42ch] text-base text-paper/80 md:text-lg">
            An architecture, interiors &amp; design studio delivering considered,
            light-filled work.
          </p>

          {/* Carousel Navigation Indicators & CTAs */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between md:gap-8">
            <div className="flex gap-4">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setActiveSlide(idx);
                  }}
                  className="group flex flex-col items-start gap-1.5 py-4 text-left cursor-pointer"
                  aria-label={`Go to slide ${slide.id}`}
                >
                  <div className="h-[2px] w-10 bg-paper/20 relative rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-paper rounded-full transition-all ease-linear"
                      style={{
                        width: activeSlide === idx ? `${progress}%` : "0%",
                        transitionDuration: activeSlide === idx ? "50ms" : "0ms",
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="rounded-full bg-paper px-7 py-3 text-sm font-medium text-ink transition-transform duration-500 hover:-translate-y-0.5"
              >
                Start a conversation
              </Link>
              <Link
                href="/selected-signatures"
                className="text-sm text-paper underline-offset-8 hover:underline"
              >
                Selected signatures
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="label text-paper/50">Scroll</span>
      </div>
    </section>
  );
}

