import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Void Architects — studios in Hanamkonda and Hyderabad, working across Telangana & India.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell onDark padTop={false}>
      <Contact />
    </PageShell>
  );
}
