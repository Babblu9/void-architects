import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Approach from "@/components/Approach";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Every meaningful space begins with understanding. At Void Architects, we believe architecture is a process of discovery. It emerges through a dialogue between people, place, purpose, and possibility.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <PageShell>
      <Approach />
    </PageShell>
  );
}
