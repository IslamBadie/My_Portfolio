import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const skillCategories = [
  {
    title: "MOBILE DEVELOPMENT",
    skills: ["Flutter", "Dart", "Provider", "Bloc", "Firebase", "Android SDK"],
  },
  {
    title: "ARCHITECTURE & PATTERNS",
    skills: ["Clean Architecture", "MVVM", "Repository Pattern", "SOLID Principles", "REST APIs"],
  },
  {
    title: "AI & DATA",
    skills: ["Machine Learning", "NLP", "Python", "TensorFlow", "Data Analysis"],
  },
  {
    title: "TOOLS & PLATFORMS",
    skills: ["Git", "GitHub", "Firebase", "Postman", "VS Code", "Android Studio"],
  },
  {
    title: "CYBERSECURITY",
    skills: ["Network Basics", "OWASP Top 10", "Linux", "CTF Challenges"],
  },
  {
    title: "LANGUAGES",
    skills: ["Dart", "Python", "Java", "C++", "SQL", "HTML/CSS"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-5">
      <div className="container max-w-6xl">
        <motion.h2
          className="font-mono text-2xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary">&gt;</span> Technical Skills
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-primary mb-12 rounded-full"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((cat) => (
            <GlassCard
              key={cat.title}
              gradientBorder
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="font-mono text-sm font-bold text-primary mb-4 tracking-widest transition-all duration-300 group-hover:tracking-[0.2em]">
                {cat.title}
              </h3>
              <motion.div className="flex flex-wrap gap-2" variants={cardVariants}>
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono border border-border/50 rounded-md bg-secondary/50 backdrop-blur-sm text-foreground transition-all duration-300 cursor-default hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_12px_hsl(217_91%_60%/0.2)]"
                    variants={skillVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
