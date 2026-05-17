import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessContent from "@/components/ProcessContent";

export const metadata = {
  title: "Process — Amsterdam Elite Household Concierge",
  description: "Simple for you. Thorough from our side. How we work, step by step.",
};

export default function ProcessPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-20">
        <ProcessContent />
      </main>
      <Footer />
    </>
  );
}
