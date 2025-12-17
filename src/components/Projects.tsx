import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience with seamless checkout and inventory management.",
    tags: ["React", "Node.js", "Stripe"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and team collaboration.",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Creative Portfolio",
    description: "Award-winning portfolio site with immersive animations and 3D elements.",
    tags: ["Three.js", "GSAP", "WebGL"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking with biometric authentication.",
    tags: ["React Native", "Firebase", "Plaid"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={cardRef}
      style={{ y: springY }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl border border-border/50 bg-card"
      >
        {/* Project preview area */}
        <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          <motion.div
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 0.8 }}
            className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"
          />

          {/* Animated pattern overlay */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4"
          >
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: 0.1 }}
              className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.button>
            <motion.button
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: 0.15 }}
              className="p-3 bg-secondary text-secondary-foreground rounded-full shadow-lg"
            >
              <Github className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Project info */}
        <div className="p-6 space-y-4">
          <motion.h3
            whileHover={{ x: 5 }}
            className="font-display text-xl font-semibold group-hover:text-primary transition-colors"
          >
            {project.title}
          </motion.h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + tagIndex * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="work" className="py-32 px-6 md:px-12 noise relative overflow-hidden" ref={ref}>
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-wider uppercase text-primary mb-4"
          >
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-semibold"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
