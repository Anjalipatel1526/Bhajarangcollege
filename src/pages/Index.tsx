import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import PlacementsSection from "@/components/home/PlacementsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <ProgramsSection />
      <FacilitiesSection />
      <PlacementsSection />
      <TestimonialsSection />
      <AnnouncementsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
