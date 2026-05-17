import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata = {
  title: "Contact — Amsterdam Elite Household Concierge",
  description: "Get in touch. We would love to learn more about your household and how we can support you.",
};

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-20">
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
