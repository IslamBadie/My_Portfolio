import { Code2, Smartphone, Brain, Layers } from "lucide-react";

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
        <h2 className="font-mono text-2xl md:text-5xl font-bold mb-4">
          <span className="text-primary">&gt;</span> About Me
        </h2>
        <div className="w-16 h-1 bg-primary mb-12 rounded-full" />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-foreground/80 leading-relaxed">
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
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="border border-border rounded-lg p-4 md:p-6 bg-card card-hover flex flex-col items-center text-center"
              >
                <Icon className="w-8 h-8 text-primary mb-3" />
                <span className="font-mono text-lg md:text-2xl font-bold text-foreground">{value}</span>
                <span className="text-sm text-muted-foreground mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
