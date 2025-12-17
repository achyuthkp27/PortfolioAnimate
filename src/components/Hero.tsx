import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useRef } from "react";
import MagneticButton from "./ui/MagneticButton";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 md:px-12 noise overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[180px] opacity-40 mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[180px] opacity-40 mix-blend-screen"
        />
      </div>

      <motion.div style={{ opacity, scale, y: springY }} className="relative z-10 max-w-[1600px] w-full mx-auto pt-20">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#22c55e]/20 bg-[#22c55e]/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
              </span>
              <span className="text-xs font-mono tracking-widest uppercase text-[#22c55e]">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Massive Typography */}
          <h1 className="font-display font-bold tracking-tighter leading-[0.9] mb-12">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="text-[12vw] md:text-[8vw] lg:text-[7vw] text-foreground"
              >
                Creative
              </motion.div>
            </div>
            <div className="overflow-hidden flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                className="hidden md:block h-[1em] aspect-video rounded-full glass bg-gradient-to-r from-primary/20 to-accent/20 border-primary/20 mt-2"
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="text-[12vw] md:text-[8vw] lg:text-[7vw] text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient"
              >
                Developer
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="text-[12vw] md:text-[8vw] lg:text-[7vw] text-foreground flex items-center justify-center gap-4"
              >
                <span className="font-light italic font-body text-[0.5em] align-middle opacity-60">&</span> Designer
              </motion.div>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Crafting digital experiences that merge <span className="text-foreground font-medium">artistic vision</span> with <span className="text-foreground font-medium">engineering precision</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <MagneticButton>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-primary/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </MagneticButton>

            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-lg flex items-center gap-2 group">
              Get in touch
              <span className="block h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4 block text-center">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-primary blur-[2px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
