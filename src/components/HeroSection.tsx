import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-20 pb-20 overflow-hidden">

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-16 max-w-5xl mx-auto">
        <div className="text-center md:text-left flex-1">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 mb-4 md:mb-8 font-mono text-xs sm:text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-primary">&gt;_</span>
            <span>$ whoami</span>
            <span className="w-2 h-4 bg-primary animate-blink" />
          </motion.div>

          <motion.h1
            className="font-mono font-bold text-3xl sm:text-5xl md:text-7xl text-foreground mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Islam{" "}
            <span className="text-primary text-glow">Abdelbadie</span>
          </motion.h1>

          <motion.p
            className="font-mono text-primary text-sm sm:text-lg md:text-xl mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Software Engineer · Flutter Developer · Tech Explorer
          </motion.p>

          <motion.p
            className="text-foreground/70 text-sm sm:text-base md:text-lg max-w-xl mb-3 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Building high-performance applications and exploring new technologies.
            One line of code at a time.
          </motion.p>

          <motion.p
            className="text-muted-foreground text-xs sm:text-sm font-mono mb-6 md:mb-10 max-w-lg"
            dir="rtl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            مطور برمجيات شغوف ببناء تطبيقات عالية الأداء واستكشاف أحدث التقنيات
          </motion.p>

          <motion.div
            className="flex flex-row items-center md:items-start justify-center md:justify-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 sm:px-8 sm:py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-md hover:shadow-[var(--glow-primary)] transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 sm:px-8 sm:py-3 border border-primary text-primary font-mono text-sm font-semibold rounded-md hover:bg-primary/10 transition-all duration-300"
            >
              View My Work
            </button>
          </motion.div>
        </div>

        <motion.div
          className="relative group shrink-0"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            className="absolute -inset-2 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 transition-colors duration-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute -inset-3 rounded-full border border-primary/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          />
          <div className="relative w-52 h-52 md:w-64 md:h-64">
            {!imageLoaded && (
              <div className="absolute inset-0 rounded-full border-2 border-primary/40 bg-secondary animate-pulse" />
            )}
            <img
              src={profilePhoto}
              alt="Islam Mohamed Abdelbadie"
              loading="eager"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full rounded-full object-cover border-2 border-primary/40 shadow-2xl transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-16 sm:bottom-12 md:bottom-6 text-primary animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
