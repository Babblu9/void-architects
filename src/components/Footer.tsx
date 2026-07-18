import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 border-t border-paper/15 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-baseline gap-2">
          <span className="display text-xl text-paper">Void</span>
          <span className="label text-paper/50">Architects</span>
        </div>
        <p className="text-sm">
          {SITE.tagline} · {SITE.cities.join(" & ")}
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
