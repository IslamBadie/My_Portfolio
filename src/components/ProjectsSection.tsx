import { Film, Brain, Shield, Search } from "lucide-react";
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-5">
      <div className="container max-w-6xl">
        <h2 className="font-mono text-2xl md:text-5xl font-bold mb-4">
          <span className="text-primary">&gt;</span> Projects & Work
        </h2>
        <div className="w-16 h-1 bg-primary mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`border border-border rounded-lg p-6 bg-card card-hover ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {project.featured && (
                  <div className="w-full h-64 md:h-80 rounded-md border border-border mb-6 overflow-hidden">
                    <img
                      src={projectScreenshot}
                      alt="Movie Application Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary border border-border shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="font-mono text-sm text-primary mt-1">{project.subtitle}</p>
                    <p className="text-foreground/70 mt-3 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono border border-border rounded-md bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
