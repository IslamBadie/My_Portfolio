import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-5">
      <div className="container max-w-4xl text-center">
        <h2 className="font-mono text-2xl md:text-5xl font-bold mb-4">
          <span className="text-primary">&gt;</span> Get In Touch
        </h2>
        <div className="w-16 h-1 bg-primary mb-6 rounded-full mx-auto" />
        <p className="text-muted-foreground mb-12">
          Interested in working together or have a question? Let's connect.
        </p>

        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
          <a href="mailto:islambadea124@gmail.com" className="border border-border rounded-lg p-4 md:p-6 bg-card card-hover flex flex-col items-center gap-2 md:gap-3">
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-sm text-foreground font-mono">Email Me</span>
          </a>
          <a href="https://github.com/IslamBadie" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg p-4 md:p-6 bg-card card-hover flex flex-col items-center gap-2 md:gap-3">
            <Github className="w-6 h-6 text-primary" />
            <span className="text-sm text-foreground font-mono">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/islam-abdelbadie" target="_blank" rel="noopener noreferrer" className="border border-border rounded-lg p-4 md:p-6 bg-card card-hover flex flex-col items-center gap-2 md:gap-3">
            <Linkedin className="w-6 h-6 text-primary" />
            <span className="text-sm text-foreground font-mono">LinkedIn</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="text-left space-y-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-md bg-input border border-border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-md bg-input border border-border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-md bg-input border border-border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-md hover:shadow-[var(--glow-primary)] transition-all duration-300"
          >
            <Send className="w-4 h-4" />
            {sent ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
