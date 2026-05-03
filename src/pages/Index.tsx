import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import StarfieldBackground from "@/components/StarfieldBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarfieldBackground />
      <Navbar />
      <HeroSection />
      <ParallaxSection speed={0.2}><AboutSection /></ParallaxSection>
      <ParallaxSection speed={0.3} delay={0.1}><SkillsSection /></ParallaxSection>
      <ParallaxSection speed={0.25} delay={0.1}><ProjectsSection /></ParallaxSection>
      <ParallaxSection speed={0.2} delay={0.1}><ContactSection /></ParallaxSection>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
