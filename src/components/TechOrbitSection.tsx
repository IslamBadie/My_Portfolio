import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const techStack = [
  { name: "Flutter", color: "194 80% 46%" },
  { name: "Dart", color: "195 85% 41%" },
  { name: "Python", color: "47 85% 48%" },
  { name: "Firebase", color: "33 95% 52%" },
  { name: "TensorFlow", color: "33 80% 45%" },
  { name: "React", color: "193 95% 52%" },
  { name: "Git", color: "12 80% 52%" },
  { name: "TypeScript", color: "211 60% 48%" },
];

const TechOrbitSection = () => {
  return (
    <section className="py-16 md:py-24 px-5 overflow-hidden">
      <div className="container max-w-6xl">
        <motion.h2
          className="font-mono text-2xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary">&gt;</span> Tech Stack
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-primary mb-12 rounded-full"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        />

        <motion.div
          className="relative flex items-center justify-center h-[350px] md:h-[420px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Center icon */}
          <div className="absolute z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-card/80 backdrop-blur-xl border border-primary/40 flex items-center justify-center shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
            <Code2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>

          {/* Orbit rings */}
          <div className="absolute w-[240px] h-[240px] md:w-[340px] md:h-[340px] rounded-full border border-border/20" />
          <div className="absolute w-[160px] h-[160px] md:w-[240px] md:h-[240px] rounded-full border border-border/15" />

          {/* Orbiting tech items */}
          {techStack.map((tech, i) => {
            const startAngle = (i / techStack.length) * 360;
            const isInner = i % 2 === 1;
            const duration = 25 + i * 4;
            const reverse = i % 2 === 1;

            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{ width: 0, height: 0 }}
                animate={{
                  rotate: reverse ? [startAngle, startAngle - 360] : [startAngle, startAngle + 360],
                }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg bg-card/70 backdrop-blur-lg border border-border/50 font-mono text-[11px] md:text-sm whitespace-nowrap cursor-default hover:border-primary/60 hover:bg-card/90 transition-all duration-300 hover:scale-110"
                  style={{
                    top: isInner ? "-80px" : "-120px",
                    left: "0px",
                  }}
                  animate={{ rotate: reverse ? [0, 360] : [0, -360] }}
                  transition={{ duration, repeat: Infinity, ease: "linear" }}
                >
                  <span style={{ color: `hsl(${tech.color})`, textShadow: `0 0 8px hsl(${tech.color} / 0.4)` }}>
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechOrbitSection;
