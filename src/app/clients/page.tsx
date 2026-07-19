import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "What Void Architects' clients say — doctors, engineers, educators and institutions across Telangana & India.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  return (
    <PageShell>
      <Testimonials />
    </PageShell>
  );
}
