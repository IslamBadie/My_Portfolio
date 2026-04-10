import { Code2, Smartphone, Brain, Layers } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Code2, value: "Flutter", label: "Primary Stack" },
  { icon: Smartphone, value: "Mobile", label: "App Development" },
  { icon: Brain, value: "ML/NLP", label: "AI Exploration" },
  { icon: Layers, value: "Clean", label: "Architecture" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-5">
      <div className="container max-w-6xl">
        <motion.h2
          className="font-mono text-2xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary">&gt;</span> About Me
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-primary mb-12 rounded-full"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6 text-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              I'm <span className="text-primary font-semibold">Islam Mohamed Abdelbadie</span>, a{" "}
              <span className="text-primary font-semibold">Software Engineer</span> and{" "}
              <span className="text-primary font-semibold">Flutter Developer</span> with a passion for building
              beautiful, performant mobile applications with clean, maintainable code.
            </p>
            <p>
              I'm currently studying <span className="text-primary">Computer Science and Artificial Intelligence</span> at{" "}
              <span className="text-primary font-semibold">Arab Open University</span>.
            </p>
            <p>
              My approach centers on{" "}
              <span className="text-primary">Clean Architecture</span> — separating concerns,
              writing testable code, and building systems that scale. I integrate RESTful APIs,
              Firebase services, and state management solutions like Provider to deliver
              production-ready apps.
            </p>
            <p>
              Beyond mobile development, I explore{" "}
              <span className="text-primary">Machine Learning</span>,{" "}
              <span className="text-primary">Natural Language Processing</span>, and
              cybersecurity fundamentals — always expanding my technical horizons.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                className="border border-border rounded-lg p-4 md:p-6 bg-card card-hover flex flex-col items-center text-center"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <Icon className="w-8 h-8 text-primary mb-3" />
                <span className="font-mono text-lg md:text-2xl font-bold text-foreground">{value}</span>
                <span className="text-sm text-muted-foreground mt-1">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
