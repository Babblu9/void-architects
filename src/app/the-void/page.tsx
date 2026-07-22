import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Studio from "@/components/Studio";

export const metadata: Metadata = {
  title: "The Void",
  description:
    "Space is the foundation of architecture. It defines how light enters, how people move, and how experiences unfold. Before form, material, or structure, there is an understanding of place, purpose, and possibility.",
  alternates: { canonical: "/the-void" },
};

export default function TheVoidPage() {
  return (
    <PageShell>
      <Studio />
    </PageShell>
  );
}
