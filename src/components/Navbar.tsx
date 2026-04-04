import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 font-mono text-primary font-bold text-lg tracking-wider">
          <Shield className="w-5 h-5" />
          ISLAM.DEV
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-mono text-sm text-foreground hover:text-primary transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border/50 pb-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left px-6 py-3 font-mono text-sm text-foreground hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
