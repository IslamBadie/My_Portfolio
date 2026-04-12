import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import StarfieldBackground from "@/components/StarfieldBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarfieldBackground />
      <Navbar />
      <HeroSection />
      <AnimatedSection><AboutSection /></AnimatedSection>
      <AnimatedSection delay={0.1}><SkillsSection /></AnimatedSection>
      <AnimatedSection delay={0.1}><ProjectsSection /></AnimatedSection>
      <AnimatedSection delay={0.1}><ContactSection /></AnimatedSection>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
