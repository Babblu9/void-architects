"use client";

import { useState } from "react";
import { SITE, waLink } from "@/lib/data";
import Reveal from "./Reveal";

export default function Estimate() {
  // Booking form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const bookMsg = waLink(
    `Hi ${SITE.name}, I'd like to book a 3D consultation.\n` +
      `• Name: ${name || "—"}\n• Phone: ${phone || "—"}\n` +
      `• Preferred date: ${date || "flexible"}`
  );

  const canBook = name.trim() && phone.trim();

  return (
    <section id="estimate" className="border-t border-line bg-pure py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex flex-col items-center">
        <Reveal className="mb-14 text-center max-w-[500px]">
          <span className="label text-accent font-medium text-xs uppercase tracking-widest font-mono mb-4 block">3D Walkthrough</span>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] leading-none text-ink font-normal tracking-tight">
            Book a 3D Consultation
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            Sit with our team and see your space in 3D before a single brick is laid.
          </p>
        </Reveal>

        {/* ---- 3D consultation booking ---- */}
        <Reveal className="w-full max-w-[580px] flex flex-col rounded-2xl border border-line bg-paper p-7 md:p-9">
          <h3 className="display text-2xl md:text-3xl text-ink">Schedule Consultation</h3>
          <p className="mt-3 text-muted text-sm leading-relaxed">
            Walk through a 3D model of your project — online or at our studio.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-ink/60 uppercase tracking-wider font-mono">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-lg border border-line bg-pure px-4 py-3 text-sm outline-none focus:border-ink"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-ink/60 uppercase tracking-wider font-mono">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                placeholder="+91 …"
                className="w-full rounded-lg border border-line bg-pure px-4 py-3 text-sm outline-none focus:border-ink"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-ink/60 uppercase tracking-wider font-mono">Preferred date</label>
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
            className={`mt-8 block rounded-full py-3.5 text-center text-sm font-medium transition-colors ${
              canBook
                ? "bg-ink text-paper hover:-translate-y-0.5"
                : "cursor-not-allowed bg-line text-muted"
            }`}
          >
            Book my 3D consultation →
          </a>
          <p className="mt-3 text-center text-xs text-muted">
            Sends your details to us on WhatsApp. No spam, ever.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
