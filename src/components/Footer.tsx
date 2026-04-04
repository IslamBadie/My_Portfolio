import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
        <Shield className="w-4 h-4 text-primary" />
        © 2025 Islam Abdelbadie. All rights reserved.
      </div>
      <span className="text-muted-foreground text-sm font-mono">
        Built with passion & clean code 🔒
      </span>
    </div>
  </footer>
);

export default Footer;
