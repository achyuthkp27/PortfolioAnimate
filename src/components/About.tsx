import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const skills = [
    { category: "Development", items: ["React", "TypeScript", "Node.js", "Next.js"] },
    { category: "Design", items: ["Figma", "UI/UX", "Motion Design", "Branding"] },
    { category: "Tools", items: ["Git", "AWS", "Docker", "Tailwind"] },
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  return (
    <section id="about" className="py-32 px-6 md:px-12 noise relative overflow-hidden" ref={ref}>
      {/* Parallax background */}
      <motion.div
        style={{ y: springY }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"
      />

      <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto">
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
              About Me
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl font-semibold leading-tight"
            >
              Turning ideas into
              <br />
              <span className="text-gradient">digital reality</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed text-lg">
              I'm a passionate creative developer with a love for building beautiful,
              functional websites and applications. With expertise spanning both design
              and development, I bring a unique perspective to every project.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              My approach combines clean code with thoughtful design, creating experiences
              that not only look stunning but also perform flawlessly. I believe in the
              power of attention to detail and user-centered design.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    className="font-display text-3xl md:text-4xl font-semibold text-gradient"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Skills */}
          <div className="space-y-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: 50, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + groupIndex * 0.15 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="p-6 bg-gradient-card rounded-2xl border border-border/50 transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                <h3 className="font-display text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + groupIndex * 0.15 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                      className="px-4 py-2 text-sm bg-secondary/50 text-secondary-foreground rounded-full cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
