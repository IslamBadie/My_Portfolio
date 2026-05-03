import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

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
          <motion.div
            className="flex flex-row md:flex-col gap-2 sm:gap-3 w-full md:w-auto md:min-w-[140px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
          >
            {[
              { href: "mailto:islambadea124@gmail.com", icon: Mail, label: "Email" },
              { href: "https://github.com/IslamBadie", icon: Github, label: "GitHub", external: true },
              { href: "https://www.linkedin.com/in/islam-abdelbadie", icon: Linkedin, label: "LinkedIn", external: true },
            ].map(({ href, icon: Icon, label, external }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex-1 md:flex-none"
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
              >
                <GlassCard className="!p-0" gradientBorder={false}>
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <span className="text-[10px] sm:text-xs md:text-sm text-foreground font-mono">{label}</span>
                  </div>
                </GlassCard>
              </motion.a>
            ))}
          </motion.div>

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
              className="w-full px-4 py-3 rounded-xl bg-card/60 backdrop-blur-xl border border-border/50 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card/60 backdrop-blur-xl border border-border/50 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-card/60 backdrop-blur-xl border border-border/50 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-xl hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 disabled:opacity-50 hover:scale-[1.02]"
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
