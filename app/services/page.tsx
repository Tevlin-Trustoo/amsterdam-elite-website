import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/ServicesContent";

export const metadata = {
  title: "Services — Amsterdam Elite Household Concierge",
  description: "Every detail. Every day. Household management, lifestyle management, and relocation services.",
};

export default function ServicesPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-20">
        <ServicesContent />
      </main>
      <Footer />
    </>
  );
}
