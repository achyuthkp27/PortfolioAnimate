import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/achyuthkp27", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/kpachyuth", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kpachyuthz@gmail.com", label: "Email" },
    { icon: FileText, href: "https://medium.com/@kpachyuthz", label: "Medium" },
  ];

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="font-display text-lg font-bold">
            <span className="text-gradient">Achyuth</span>
            <span className="text-foreground">.dev</span>
          </a>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-destructive fill-destructive" /> using React & Three.js
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Achyuth KP. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
