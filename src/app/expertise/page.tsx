import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "We shape spaces with clarity, purpose, and a deep understanding of how they are experienced and lived. Architecture, Interior Environments, Master Planning, Landscape Design, and Spatial Strategy.",
  alternates: { canonical: "/expertise" },
};

export default function ExpertisePage() {
  return (
    <PageShell>
      <Services />
    </PageShell>
  );
}
