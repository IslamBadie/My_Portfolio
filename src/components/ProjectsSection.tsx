import { Film, Brain, Shield, Search } from "lucide-react";
import { motion } from "framer-motion";
import projectScreenshot from "@/assets/project-screenshot.png";

const projects = [
  {
    icon: Film,
    title: "Movie Application",
    subtitle: "Flutter · TMDB API · Firebase",
    description:
      "A full-featured movie browsing app built with Flutter and Clean Architecture. Integrates TMDB API for real-time data, Firebase for authentication and storage, and Provider for state management.",
    tags: ["Flutter", "Clean Architecture", "Firebase", "TMDB API"],
    featured: true,
  },
  {
    icon: Brain,
    title: "NLP Text Analyzer",
    subtitle: "Python · Machine Learning",
    description:
      "A natural language processing tool for sentiment analysis and text classification using machine learning models and Python libraries.",
    tags: ["Python", "NLP", "ML", "TensorFlow"],
  },
  {
    icon: Shield,
    title: "Security Scanner",
    subtitle: "Cybersecurity · Automation",
    description:
      "An automated vulnerability scanner for web applications, identifying common OWASP Top 10 issues with detailed reporting.",
    tags: ["Security", "Python", "OWASP"],
  },
  {
    icon: Search,
    title: "Portfolio Website",
    subtitle: "React · TypeScript",
    description:
      "This very portfolio — a modern, terminal-themed website built with React, TypeScript, and Tailwind CSS with smooth animations.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-5">
      <div className="container max-w-6xl">
        <motion.h2
          className="font-mono text-2xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary">&gt;</span> Projects & Work
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-primary mb-8 md:mb-12 rounded-full"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        />

        <motion.div
          className="grid md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                className={`border border-border rounded-lg p-3 sm:p-4 md:p-6 bg-card card-hover group ${
                  project.featured ? "md:col-span-2" : ""
                }`}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {project.featured && (
                  <div className="w-full h-32 sm:h-48 md:h-80 rounded-md border border-border mb-3 sm:mb-4 md:mb-6 overflow-hidden">
                    <img
                      src={projectScreenshot}
                      alt="Movie Application Screenshot"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-3 rounded-lg bg-secondary border border-border shrink-0 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_hsl(217_91%_60%/0.15)]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono text-sm sm:text-base md:text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{project.title}</h3>
                    <p className="font-mono text-xs sm:text-sm text-primary mt-1">{project.subtitle}</p>
                    <p className="text-foreground/70 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono border border-border rounded-md bg-secondary text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
