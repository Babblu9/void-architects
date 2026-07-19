import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Studio from "@/components/Studio";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Void Architects — an architecture and interior studio in Hyderabad and Madhapur, delivering considered work across Telangana & India.",
  alternates: { canonical: "/studio" },
};

export default function StudioPage() {
  return (
    <PageShell>
      <Studio />
      <Stats />
    </PageShell>
  );
}
