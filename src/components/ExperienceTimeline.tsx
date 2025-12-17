import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, GraduationCap, ChevronDown, Award, Server, Database, Cloud, Code } from "lucide-react";
import TextReveal from "./ui/TextReveal";
import ParallaxSection from "./ui/ParallaxSection";
import ShockwaveWrapper from "./ui/ShockwaveWrapper";

const experiences = [
  {
    company: "FIS Global",
    role: "Software Engineer",
    period: "2021 – Present",
    type: "full-time",
    icon: Building2,
    color: "primary",
    achievements: [
      "Built & maintained 25+ Spring Boot microservices for corporate, retail, and mobile banking",
      "End-to-end implementation of ELK + Kafka for centralized logging → 25% faster issue resolution",
      "Integrated Swagger for full API documentation → team efficiency improvements",
      "Debugged complex production issues → better system stability and reduced downtime",
      "Supported SIT, UAT, production rollouts with technical leadership",
      "Contributed to ReactJS UI for seamless backend integration",
      "Awarded 'Above and Beyond Individual Award – Q1 2024'",
    ],
    technologies: ["Spring Boot", "Kafka", "ELK Stack", "AWS", "PostgreSQL", "React"],
  },
  {
    company: "Aniworks",
    role: "Intern",
    period: "2020",
    type: "internship",
    icon: GraduationCap,
    color: "accent",
    achievements: [
      "Worked across Web Development, AI, ML concepts",
      "Collaborated on intern-level projects",
      "Hands-on experience with real-world systems",
    ],
    technologies: ["Web Development", "AI/ML", "Python"],
  },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 px-6 md:px-12 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <ParallaxSection speed={0.2}>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      </ParallaxSection>

      <div className="max-w-5xl mx-auto">
        <ParallaxSection speed={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextReveal type="fade-up">
              <span className="inline-block px-4 py-2 text-xs font-mono tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/30 mb-6">
                Career Journey
              </span>
            </TextReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <TextReveal type="blur-reveal" delay={0.2} as="span">Professional</TextReveal>{" "}
              <TextReveal type="blur-reveal" delay={0.3} shouldSplit={false} as="span" className="text-gradient inline-block">Experience</TextReveal>
            </h2>
            <TextReveal type="fade-up" delay={0.4} as="p" className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of my growth, technical milestones, and the impact I've delivered across organizations.
            </TextReveal>
          </motion.div>
        </ParallaxSection>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/10 md:-translate-x-1/2 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent via-primary to-transparent animate-scan-beam shadow-[0_0_15px_2px_hsl(var(--primary))]" />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-auto"
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-12 z-10 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 0.5, 0], scale: [1, 2.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute w-12 h-12 rounded-full pointer-events-none"
                  style={{ backgroundColor: `hsl(var(--${exp.color}) / 0.3)` }}
                />

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-4 h-4 rounded-full bg-${exp.color} border-4 border-background shadow-lg relative z-10`}
                  style={{
                    backgroundColor: exp.color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))",
                    boxShadow: `0 0 20px hsl(var(--${exp.color}) / 0.5)`,
                  }}
                />
              </div>

              {/* Content card */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}
              >
                <ShockwaveWrapper color={exp.color}>
                  <div
                    className="glass-card p-6 cursor-pointer relative overflow-hidden transition-all duration-300 border-2 border-transparent group-hover:border-primary/50"
                    style={{
                      boxShadow: `0 0 0 0 transparent`
                    }}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `hsl(var(--${exp.color}) / 0.1)` }}
                        >
                          <exp.icon className="w-6 h-6" style={{ color: `hsl(var(--${exp.color}))` }} />
                        </div>
                        <div className={index % 2 === 0 ? "md:text-right" : ""}>
                          <h3 className="font-display text-xl font-bold text-foreground">{exp.company}</h3>
                          <p className="text-primary font-medium">{exp.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? "auto" : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border/50">
                        {/* Achievements */}
                        <ul className={`space-y-3 mb-6 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-start" : ""}`}>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-mono bg-secondary/80 text-secondary-foreground rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </ShockwaveWrapper>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default ExperienceTimeline;
