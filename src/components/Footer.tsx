import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/data";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/the-void", label: "The Void" },
  { href: "/expertise", label: "Expertise" },
  { href: "/approach", label: "Approach" },
  { href: "/selected-signatures", label: "Selected Signatures" },
  { href: "/contact", label: "Contact" },
];


export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/logo-light.png"
              alt="Void Architects"
              width={904}
              height={258}
              className="h-9 w-auto"
            />
            <p className="mt-5 text-sm">
              {SITE.tagline} studio working across {SITE.coverage}, from studios
              in {SITE.cities.join(" & ")}.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
            <nav className="flex flex-col gap-3">
              <p className="label mb-1 text-paper/40">Explore</p>
              {NAV.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <p className="label mb-1 text-paper/40">Studio</p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-paper/70 hover:text-paper"
              >
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="text-sm text-paper/70 hover:text-paper"
              >
                {SITE.phone}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                className="text-sm text-paper/70 hover:text-paper"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/15 pt-6 text-sm md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>{SITE.cities.join(" · ")} · Telangana · India</p>
        </div>
      </div>
    </footer>
  );
}
