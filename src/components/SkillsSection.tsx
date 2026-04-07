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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-5">
      <div className="container max-w-6xl">
        <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4">
          <span className="text-primary">&gt;</span> Technical Skills
        </h2>
        <div className="w-16 h-1 bg-primary mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="border border-border rounded-lg p-6 bg-card card-hover">
              <h3 className="font-mono text-sm font-bold text-primary mb-4 tracking-widest">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono border border-border rounded-md bg-secondary text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
