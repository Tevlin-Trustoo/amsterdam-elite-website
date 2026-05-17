import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export const metadata = {
  title: "About — Amsterdam Elite Household Concierge",
  description: "Discreet by nature. Exceptional by standard. Learn who we are and how we work.",
};

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-20">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
