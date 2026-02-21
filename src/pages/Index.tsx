import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ModulesSection from "@/components/ModulesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrackingSection from "@/components/TrackingSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ModulesSection />
      <HowItWorksSection />
      <TrackingSection />
      <ComingSoonSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
