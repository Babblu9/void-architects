import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Studio from "@/components/Studio";

export const metadata: Metadata = {
  title: "The Void",
  description:
    "Architecture begins not with walls or structures, but with space. The void is where possibility resides. It is the pause between form and function, the silence that gives meaning to sound, and the space that allows architecture to breathe.",
  alternates: { canonical: "/the-void" },
};

export default function TheVoidPage() {
  return (
    <PageShell>
      <Studio />
    </PageShell>
  );
}
