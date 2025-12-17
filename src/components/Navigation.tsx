import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

import Logo from "./ui/Logo";
import MagneticButton from "./ui/MagneticButton";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-0 right-0 z-50 px-6 transition-all duration-300`}
      >
        <div className={`max-w-5xl mx-auto rounded-full px-6 py-3 transition-all duration-300 ${isScrolled
          ? "glass border border-border/50 shadow-lg shadow-black/5 bg-background/60 backdrop-blur-md"
          : "bg-transparent border border-transparent"
          }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="font-display text-xl font-bold"
            >
              <span className="text-gradient">Achyuth</span>
              <span className="text-foreground">.dev</span>
            </motion.a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <a
                    href={item.href}
                    className={`text-sm transition-colors relative group ${activeSection === item.href.substring(1)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === item.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 -z-10 bg-primary/10 blur-lg rounded-full"
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                )}
              </motion.button>

              {/* CTA Button */}
              <MagneticButton>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:inline-flex px-5 py-2.5 text-sm font-medium bg-foreground text-background rounded-full transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  Hire Me
                </motion.a>
              </MagneticButton>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="md:hidden p-2 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.5 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 text-lg font-medium bg-gradient-cyber text-primary-foreground rounded-full"
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
