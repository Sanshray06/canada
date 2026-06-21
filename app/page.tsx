import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import QuoteCalculator from "@/components/QuoteCalculator";
// ... existing imports

// inside your JSX, after <Services />
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <QuoteCalculator />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}
