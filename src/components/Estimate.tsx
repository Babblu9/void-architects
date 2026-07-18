"use client";

import { useMemo, useState } from "react";
import { SITE, waLink } from "@/lib/data";
import Reveal from "./Reveal";

// Indicative per-sqft rates (INR), Hyderabad market 2024-25.
// ponytail: hard-coded rate table — the whole "calculator" is area × rate.
// No backend, no pricing engine. Tune these numbers with the client.
const RATES: Record<string, Record<string, [number, number]>> = {
  "Architecture (Turnkey)": {
    Standard: [1800, 2200],
    Premium: [2300, 2900],
    Luxury: [3000, 4500],
  },
  "Interior Design": {
    Standard: [1200, 1800],
    Premium: [1900, 2800],
    Luxury: [3000, 5000],
  },
  "Design Fees Only": {
    Standard: [80, 120],
    Premium: [120, 180],
    Luxury: [180, 280],
  },
};

const SERVICES = Object.keys(RATES);
const TIERS = ["Standard", "Premium", "Luxury"] as const;

function inr(n: number) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  return `₹${(n / 1e5).toFixed(1)} L`;
}

export default function Estimate() {
  const [service, setService] = useState(SERVICES[0]);
  const [tier, setTier] = useState<(typeof TIERS)[number]>("Premium");
  const [area, setArea] = useState(2000);

  const [low, high] = useMemo(() => {
    const [rl, rh] = RATES[service][tier];
    return [area * rl, area * rh];
  }, [service, tier, area]);

  // Booking form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const estimateMsg = waLink(
    `Hi ${SITE.name}, I used your website estimator.\n` +
      `• Service: ${service}\n• Package: ${tier}\n• Area: ${area} sq.ft.\n` +
      `• Indicative estimate: ${inr(low)} – ${inr(high)}\n` +
      `Please share an exact quote.`
  );

  const bookMsg = waLink(
    `Hi ${SITE.name}, I'd like to book a FREE 3D consultation.\n` +
      `• Name: ${name || "—"}\n• Phone: ${phone || "—"}\n` +
      `• Preferred date: ${date || "flexible"}`
  );

  const canBook = name.trim() && phone.trim();

  return (
    <section id="estimate" className="border-t border-line bg-pure">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="mb-14 max-w-[46ch]">
          <p className="label mb-4">Free tools</p>
          <h2 className="display text-[clamp(2rem,5vw,4rem)]">
            Estimate your project, book a 3D walkthrough.
          </h2>
          <p className="mt-5 text-muted">
            Get an instant, no-obligation cost range — then see your space in 3D
            before a single brick is laid.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* ---- Estimator ---- */}
          <Reveal className="rounded-2xl border border-line bg-paper p-7 md:p-9">
            <h3 className="display text-2xl md:text-3xl">Free estimate</h3>

            <label className="label mt-8 block">Service</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    service === s
                      ? "border-ink bg-ink text-paper"
                      : "border-line text-muted hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <label className="label mt-7 block">Package</label>
            <div className="mt-3 flex gap-2">
              {TIERS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTier(t)}
                  className={`flex-1 rounded-full border px-4 py-2 text-sm transition-colors ${
                    tier === t
                      ? "border-ink bg-ink text-paper"
                      : "border-line text-muted hover:border-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between">
              <label className="label">Built-up area</label>
              <span className="text-sm font-medium">
                {area.toLocaleString("en-IN")} sq.ft.
              </span>
            </div>
            <input
              type="range"
              min={300}
              max={10000}
              step={100}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--ink)]"
            />

            <div className="mt-8 rounded-xl bg-ink px-6 py-6 text-paper">
              <p className="label text-paper/50">Indicative range</p>
              <p className="display mt-2 text-3xl md:text-4xl">
                {inr(low)} <span className="text-paper/50">–</span> {inr(high)}
              </p>
              <p className="mt-2 text-xs text-paper/50">
                Ballpark only. Final cost depends on site, specs and finishes.
              </p>
            </div>

            <a
              href={estimateMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-full border border-ink py-3 text-center text-sm transition-colors hover:bg-ink hover:text-paper"
            >
              Get an exact quote on WhatsApp →
            </a>
          </Reveal>

          {/* ---- 3D consultation booking ---- */}
          <Reveal className="flex flex-col rounded-2xl border border-line bg-paper p-7 md:p-9">
            <h3 className="display text-2xl md:text-3xl">Book a free 3D consultation</h3>
            <p className="mt-3 text-muted">
              Sit with our team and walk through a 3D model of your project — free,
              online or at our Madhapur studio.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div>
                <label className="label mb-2 block">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-line bg-pure px-4 py-3 text-sm outline-none focus:border-ink"
                />
              </div>
              <div>
                <label className="label mb-2 block">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  inputMode="tel"
                  placeholder="+91 …"
                  className="w-full rounded-lg border border-line bg-pure px-4 py-3 text-sm outline-none focus:border-ink"
                />
              </div>
              <div>
                <label className="label mb-2 block">Preferred date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-line bg-pure px-4 py-3 text-sm outline-none focus:border-ink"
                />
              </div>
            </div>

            <a
              href={canBook ? bookMsg : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!canBook}
              onClick={(e) => !canBook && e.preventDefault()}
              className={`mt-6 block rounded-full py-3 text-center text-sm font-medium transition-colors ${
                canBook
                  ? "bg-ink text-paper hover:-translate-y-0.5"
                  : "cursor-not-allowed bg-line text-muted"
              }`}
            >
              Book my free 3D consultation →
            </a>
            <p className="mt-3 text-center text-xs text-muted">
              Sends your details to us on WhatsApp. No spam, ever.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
