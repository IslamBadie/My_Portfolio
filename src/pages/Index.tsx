import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="animate-on-scroll"><AboutSection /></div>
      <div className="animate-on-scroll"><SkillsSection /></div>
      <div className="animate-on-scroll"><ProjectsSection /></div>
      <div className="animate-on-scroll"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default Index;
