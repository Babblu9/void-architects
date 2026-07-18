import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Studio from "@/components/Studio";
import Stats from "@/components/Stats";
import Estimate from "@/components/Estimate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav onDark />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Studio />
        <Stats />
        <Estimate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
