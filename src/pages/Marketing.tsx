import Header from "@/components/Header";
import MarketingSection from "@/components/MarketingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const MarketingPage = () => (
  <>
    <Header />
    <main>
      <div className="pt-16" /> {/* Offset for sticky header */}
      <MarketingSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default MarketingPage;
