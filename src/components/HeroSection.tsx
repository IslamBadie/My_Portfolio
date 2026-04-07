import { ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, hsl(217 91% 60%) 0px, transparent 1px, transparent 30px),
                          repeating-linear-gradient(90deg, hsl(217 91% 60%) 0px, transparent 1px, transparent 30px)`
      }} />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-16 max-w-5xl mx-auto">
        <div className="text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 font-mono text-sm text-muted-foreground">
            <span className="text-primary">&gt;_</span>
            <span>$ whoami</span>
            <span className="w-2 h-4 bg-primary animate-blink" />
          </div>

          <h1 className="font-mono font-bold text-3xl sm:text-5xl md:text-7xl text-foreground mb-4 md:mb-6 tracking-tight">
            Islam{" "}
            <span className="text-primary text-glow">Abdelbadie</span>
          </h1>

          <p className="font-mono text-primary text-sm sm:text-lg md:text-xl mb-4 md:mb-6">
            Software Engineer · Flutter Developer · Tech Explorer
          </p>

          <p className="text-foreground/70 text-sm sm:text-base md:text-lg max-w-xl mb-3 leading-relaxed">
            Building high-performance applications and exploring new technologies.
            One line of code at a time.
          </p>

          <p className="text-muted-foreground text-xs sm:text-sm font-mono mb-6 md:mb-10 max-w-lg" dir="rtl">
            مطور برمجيات شغوف ببناء تطبيقات عالية الأداء واستكشاف أحدث التقنيات
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-md hover:shadow-[var(--glow-primary)] transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border border-primary text-primary font-mono font-semibold rounded-md hover:bg-primary/10 transition-all duration-300"
            >
              View My Work
            </button>
          </div>
        </div>

        <div className="relative group shrink-0">
          <div className="absolute -inset-2 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-500" />
          <img
            src={profilePhoto}
            alt="Islam Mohamed Abdelbadie"
            className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-2 border-primary/40 shadow-2xl"
          />
        </div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 text-primary animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
