import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Estimate from "@/components/Estimate";

export const metadata: Metadata = {
  title: "Book a 3D Consultation",
  description:
    "Book a 3D consultation with Void Architects to walk through your design concept before construction starts.",
  alternates: { canonical: "/estimate" },
};

export default function EstimatePage() {
  return (
    <PageShell>
      <Estimate />
    </PageShell>
  );
}
