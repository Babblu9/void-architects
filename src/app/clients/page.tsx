import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Clients & Work",
  description:
    "Selected projects and client words — homes, hospitals, campuses and convention halls by Void Architects across Telangana & India.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  return (
    <PageShell>
      <Portfolio />
      <Testimonials />
    </PageShell>
  );
}
