import Link from "next/link";
import { SITE, SEO_PAGES } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const tel = SITE.phone.replace(/\s/g, "");
  return (
    <section
      id="contact"
      className="border-t border-line bg-ink text-paper"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label mb-5 text-paper/60">Start a project</p>
            <h2 className="display text-[clamp(2.4rem,6vw,5.5rem)]">
              Let&rsquo;s build
              <br />
              something quiet.
            </h2>
            <p className="mt-8 max-w-[42ch] text-lg text-paper/70">
              Tell us about your site, your brief or your idea. We reply to every
              enquiry within two working days.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:col-span-4 md:col-start-9">
            <div>
              <p className="label mb-2 text-paper/50">Email</p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-lg underline-offset-4 hover:underline"
              >
                {SITE.email}
              </a>
            </div>
            <div>
              <p className="label mb-2 text-paper/50">Phone / WhatsApp</p>
              <a
                href={`tel:${tel}`}
                className="block text-lg underline-offset-4 hover:underline"
              >
                {SITE.phone}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                className="mt-1 inline-block text-sm text-accent"
              >
                Message on WhatsApp →
              </a>
            </div>
            <div>
              <p className="label mb-2 text-paper/50">Studios</p>
              <p className="text-lg">{SITE.cities.join(" · ")}</p>
            </div>
          </div>
        </Reveal>

        {/* Internal links — helps local SEO and gives visitors a fast path */}
        <div className="mt-20 flex flex-wrap gap-x-6 gap-y-3 border-t border-paper/15 pt-8">
          {SEO_PAGES.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="text-sm text-paper/60 transition-colors hover:text-paper"
            >
              {p.h1}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
