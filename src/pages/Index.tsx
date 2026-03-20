import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import AudienceSection from "@/components/AudienceSection";
import MentionsSection from "@/components/MentionsSection";
import ModulesSection from "@/components/ModulesSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import StrategicEffectSection from "@/components/StrategicEffectSection";
import DeveloperSection from "@/components/DeveloperSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhySection />
      <AudienceSection />
      <MentionsSection />
      <ModulesSection />
      <ComingSoonSection />
      <StrategicEffectSection />
      <DeveloperSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
