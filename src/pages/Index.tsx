import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import RequestFormSection from "@/components/RequestFormSection";
import ContactsSection from "@/components/ContactsSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <SiteHeader />
    <main className="flex-1">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <RequestFormSection />
      <ContactsSection />
    </main>
    <SiteFooter />
  </div>
);

export default Index;
