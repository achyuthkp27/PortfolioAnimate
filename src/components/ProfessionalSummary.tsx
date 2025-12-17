import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Cloud, Zap } from "lucide-react";
import ParallaxSection from "./ui/ParallaxSection";
import TextReveal from "./ui/TextReveal";

const ProfessionalSummary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "Clean Code", value: "Architecture" },
    { icon: Server, label: "Microservices", value: "25+ Services" },
    { icon: Cloud, label: "Cloud Native", value: "AWS Expert" },
    { icon: Zap, label: "Performance", value: "Optimized" },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left content */}
          <div className="space-y-8">
            <TextReveal delay={0.2} type="fade-up">
              <span className="inline-block px-4 py-2 text-xs font-mono tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/30">
                About Me
              </span>
            </TextReveal>

            <ParallaxSection speed={0.2}>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                <TextReveal type="blur-reveal" delay={0.3} as="span">Building the</TextReveal>{" "}
                <TextReveal type="blur-reveal" delay={0.4} shouldSplit={false} as="span" className="text-gradient inline-block">backbone</TextReveal> of
                <br />
                <TextReveal type="blur-reveal" delay={0.5} as="span">enterprise systems</TextReveal>
              </h2>
            </ParallaxSection>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <TextReveal as="p" type="fade-up" delay={0.5}>
                Achyuth is a <span className="text-foreground font-medium">Software Engineer</span> with{" "}
                <span className="text-primary font-medium">4+ years</span> of experience designing, developing,
                and scaling enterprise-grade microservices.
              </TextReveal>
              <TextReveal as="p" type="fade-up" delay={0.6}>
                Specializing in <span className="text-foreground">Spring Boot</span>, <span className="text-foreground">ReactJs</span>, REST architectures,
                distributed systems, and cloud deployments. Recognized for proactive debugging, technical
                ownership, and delivering high-reliability systems in agile environments.
              </TextReveal>
              <TextReveal as="p" type="fade-up" delay={0.7}>
                Passionate about clean code, system design, and building products that scale to millions
                of users with exceptional performance and reliability.
              </TextReveal>
            </motion.div>
          </div>

          {/* Right - Highlights grid */}
          <ParallaxSection speed={0.4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 space-y-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <TextReveal type="blur-reveal" delay={0.6 + index * 0.1} as="p" className="text-2xl font-display font-bold text-foreground">
                      {item.value}
                    </TextReveal>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </ParallaxSection>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
