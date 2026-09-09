import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Statement from "@/components/sections/Statement";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Numbers from "@/components/sections/Numbers";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Statement />
      <Portfolio />
      <About />
      <Numbers />
      <CTA />
      <Footer />
    </>
  );
}
