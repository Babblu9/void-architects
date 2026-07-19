import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected architecture, interior, healthcare and institutional projects by Void Architects across Telangana & India.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell>
      <Portfolio />
    </PageShell>
  );
}
