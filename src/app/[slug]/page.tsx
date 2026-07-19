import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { SEO_PAGES, PROJECTS, SERVICES, SITE } from "@/lib/data";

// Pre-render every SEO page at build time (SSG) — fast, indexable.
export function generateStaticParams() {
  return SEO_PAGES.map((p) => ({ slug: p.slug }));
}

function getPage(slug: string) {
  return SEO_PAGES.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE.url}/${page.slug}`,
    },
  };
}

export default async function SeoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  // Show a few local projects to make the page substantial + linked.
  const local = PROJECTS.filter((p) =>
    p.location.includes(page.city)
  ).slice(0, 3);
  const projects = local.length ? local : PROJECTS.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.service,
    provider: { "@type": "ArchitecturalService", name: SITE.name, url: SITE.url },
    areaServed: { "@type": "City", name: page.city },
    name: page.h1,
    description: page.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
          <p className="label mb-6">
            {page.service} · {page.city}
          </p>
          <h1 className="display max-w-[18ch] text-[clamp(2.4rem,7vw,6rem)]">
            {page.h1}
          </h1>
          <p className="mt-8 max-w-[60ch] text-lg text-muted md:text-xl">
            {page.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              Start a project in {page.city}
            </a>
            <Link
              href="/work"
              className="rounded-full border border-ink px-7 py-3 text-sm transition-colors hover:bg-ink hover:text-paper"
            >
              See our work
            </Link>
          </div>
        </section>

        {/* Services offered in this city */}
        <section className="border-t border-line bg-pure">
          <div className="mx-auto grid max-w-[1400px] gap-px overflow-hidden border-x border-line bg-line px-0 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.key} className="bg-pure p-8 md:p-10">
                <h2 className="display text-2xl md:text-3xl">
                  {s.title} in {page.city}
                </h2>
                <p className="mt-4 text-muted">{s.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local projects */}
        <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <h2 className="display mb-10 text-[clamp(1.8rem,4vw,3rem)]">
            Recent work near {page.city}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.slug}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.category} in ${p.location}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="display mt-4 text-2xl">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {p.category} · {p.location}
                </p>
              </article>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
