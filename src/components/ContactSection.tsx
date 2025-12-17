import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Linkedin, Github, FileText, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import TextReveal from "./ui/TextReveal";
import ParallaxSection from "./ui/ParallaxSection";
import MagneticButton from "./ui/MagneticButton";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      const validated = contactFormSchema.parse(formData);

      // Construct WhatsApp message
      const text = `*New Portfolio Contact*\n\n*Name:* ${validated.name}\n*Email:* ${validated.email}\n*Message:* ${validated.message}`;
      const encodedText = encodeURIComponent(text);

      // TODO: Replace with your actual WhatsApp number (International format without +)
      const phoneNumber = "919999999999";

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

      window.open(whatsappUrl, '_blank');

      toast({
        title: "Opening WhatsApp",
        description: "Please send the pre-filled message to verify your contact request.",
        variant: "default",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kpachyuthz@gmail.com",
      href: "mailto:kpachyuthz@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kpachyuth",
      href: "https://linkedin.com/in/kpachyuth",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/achyuthkp27",
      href: "https://github.com/achyuthkp27",
    },
    {
      icon: FileText,
      label: "Blog",
      value: "medium.com/@kpachyuthz",
      href: "https://medium.com/@kpachyuthz",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TextReveal type="fade-up">
            <span className="inline-block px-4 py-2 text-xs font-mono tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/30 mb-6">
              Get In Touch
            </span>
          </TextReveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <TextReveal type="blur-reveal" delay={0.2} as="span">Let&apos;s</TextReveal>{" "}
            <TextReveal type="blur-reveal" delay={0.3} shouldSplit={false} as="span" className="text-gradient inline-block">Connect</TextReveal>
          </h2>
          <TextReveal type="fade-up" delay={0.4} as="p" className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </TextReveal>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <ParallaxSection speed={0.2}>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <MagneticButton key={item.label} className="w-full">
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 glass-card group cursor-pointer w-full"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  </MagneticButton>
                ))}
              </div>
            </ParallaxSection>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground resize-none transition-all"
                placeholder="Tell me about your project..."
              />
            </div>

            <MagneticButton className="w-full">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium bg-gradient-cyber text-primary-foreground rounded-xl shadow-neon transition-all"
              >
                Send via WhatsApp
                <Send className="w-4 h-4" />
              </motion.button>
            </MagneticButton>
            <p className="text-xs text-center text-muted-foreground">
              Or reach out directly via email: <a href="mailto:kpachyuthz@gmail.com" className="text-primary hover:underline">kpachyuthz@gmail.com</a>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
