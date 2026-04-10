import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    try {
      const mailtoLink = `mailto:islambadea124@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
      window.open(mailtoLink, '_blank');
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-5">
      <div className="container max-w-5xl text-center">
        <motion.h2
          className="font-mono text-2xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary">&gt;</span> Get In Touch
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-primary mb-6 rounded-full mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        />
        <motion.p
          className="text-muted-foreground mb-8 md:mb-12 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          Interested in working together or have a question? Let's connect.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Left: Contact cards */}
          <motion.div
            className="flex flex-row md:flex-col gap-2 sm:gap-3 w-full md:w-auto md:min-w-[140px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
          >
            <motion.a
              href="mailto:islambadea124@gmail.com"
              className="flex-1 md:flex-none border border-border rounded-lg p-3 sm:p-4 bg-card card-hover flex flex-col items-center gap-1.5 sm:gap-2"
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-[10px] sm:text-xs md:text-sm text-foreground font-mono">Email</span>
            </motion.a>
            <motion.a
              href="https://github.com/IslamBadie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none border border-border rounded-lg p-3 sm:p-4 bg-card card-hover flex flex-col items-center gap-1.5 sm:gap-2"
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-[10px] sm:text-xs md:text-sm text-foreground font-mono">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/islam-abdelbadie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none border border-border rounded-lg p-3 sm:p-4 bg-card card-hover flex flex-col items-center gap-1.5 sm:gap-2"
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-[10px] sm:text-xs md:text-sm text-foreground font-mono">LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Right: Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="text-left space-y-4 flex-1 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
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
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-input border border-border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-md hover:shadow-[var(--glow-primary)] transition-all duration-300 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {sent ? "Opening Email Client!" : sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
