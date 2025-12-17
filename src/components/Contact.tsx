import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 noise relative overflow-hidden" ref={ref}>
      {/* Parallax background */}
      <motion.div
        style={{ y: springY }}
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left column */}
          <div className="space-y-8">
            <motion.span
              variants={itemVariants}
              className="inline-block text-sm font-medium tracking-wider uppercase text-primary"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl font-semibold leading-tight"
            >
              Let's create
              <br />
              <span className="text-gradient">something great</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed text-lg max-w-md"
            >
              Have a project in mind? Let's talk about how we can work together
              to bring your vision to life.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6 pt-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:hello@example.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="text-foreground">San Francisco, CA</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 p-8 bg-gradient-card rounded-2xl border border-border/50"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                Your Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01, borderColor: "hsl(var(--primary))" }}
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all"
                placeholder="John Doe"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.01, borderColor: "hsl(var(--primary))" }}
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all"
                placeholder="john@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                Your Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01, borderColor: "hsl(var(--primary))" }}
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground resize-none transition-all"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium bg-gradient-gold text-primary-foreground rounded-lg transition-all"
            >
              Send Message
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Send className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
