import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import Positioning from "@/components/Positioning";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Quote from "@/components/Quote";
import ClosingCTA from "@/components/ClosingCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <main>
        <Navbar />
        <Hero />
        <Marquee />
        <Intro />
        <Positioning />
        <Services />
        <Gallery />
        <section id="process">
          <Process />
        </section>
        <Testimonials />
        <Quote />
        <ClosingCTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
