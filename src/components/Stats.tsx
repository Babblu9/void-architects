"use client";

import { useEffect, useRef, useState } from "react";
import { STATS, type Stat } from "@/lib/data";

// Count-up that runs once when scrolled into view. Reduced-motion or
// no-IntersectionObserver → shows the final value immediately (never blank).
function useCountUp(target: number, decimals: number, run: boolean) {
  const [n, setN] = useState(run ? 0 : target);
  useEffect(() => {
    if (!run) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const rafId = requestAnimationFrame(() => {
        setN(target);
      });
      return () => cancelAnimationFrame(rafId);
    }

    const dur = 1400;
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(2, -10 * p); // easeOutExpo
      setN(Number((target * eased).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, decimals, run]);
  return n;
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const animate = !stat.noCount; // years stay static (no count-up)
  const n = useCountUp(stat.value, stat.decimals ?? 0, run && animate);
  const shown = animate
    ? n.toLocaleString("en-IN", {
        minimumFractionDigits: stat.decimals ?? 0,
        maximumFractionDigits: stat.decimals ?? 0,
      })
    : String(stat.value);

  return (
    <div className="flex flex-col gap-3 border-t border-paper/25 pt-5 md:pt-7">
      <span className="display whitespace-nowrap text-[clamp(2.6rem,6vw,4.6rem)] leading-none tabular-nums text-paper">
        {shown}
        {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
      </span>
      <span className="label text-paper/55">{stat.label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || run) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [run]);

  return (
    <section ref={ref} className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-[16ch] text-[clamp(1.8rem,4.5vw,3.4rem)] text-paper">
            A decade of built work.
          </h2>
          <p className="prose-lg max-w-[36ch] text-paper/60">
            Numbers we&rsquo;re proud of — every one of them drawn, detailed and
            delivered by the studio.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}
