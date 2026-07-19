import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Estimate from "@/components/Estimate";

export const metadata: Metadata = {
  title: "Free Estimate & 3D Consultation",
  description:
    "Get an instant cost estimate for your project and book a free 3D consultation with Void Architects.",
  alternates: { canonical: "/estimate" },
};

export default function EstimatePage() {
  return (
    <PageShell>
      <Estimate />
    </PageShell>
  );
}
