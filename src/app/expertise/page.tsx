import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Every space presents a unique opportunity—to understand its context, define its purpose, and shape experiences that endure. Architecture, Interior Environments, Master Planning, Landscape Design, and Spatial Strategy.",
  alternates: { canonical: "/expertise" },
};

export default function ExpertisePage() {
  return (
    <PageShell>
      <Services />
    </PageShell>
  );
}
