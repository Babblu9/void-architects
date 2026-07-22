import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Selected Signatures",
  description:
    "Every space begins as an idea and becomes an experience. Our work is a collection of thoughtful responses to context, purpose, and human experience—each one carrying its own architectural signature.",
  alternates: { canonical: "/selected-signatures" },
};

export default function SelectedSignaturesPage() {
  return (
    <PageShell>
      <Portfolio />
      <Testimonials />
    </PageShell>
  );
}
