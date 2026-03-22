import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MarketingSection from "@/components/MarketingSection";
import WhySection from "@/components/WhySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MarketingSection />
      <WhySection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
