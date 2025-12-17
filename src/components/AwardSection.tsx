import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, Trophy } from "lucide-react";
import TextReveal from "./ui/TextReveal";
import ParallaxSection from "./ui/ParallaxSection";
import SpotlightCard from "./ui/SpotlightCard";

const AwardSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="py-32 px-6 md:px-12 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TextReveal type="fade-up">
            <span className="inline-block px-4 py-2 text-xs font-mono tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/30 mb-6">
              Recognition
            </span>
          </TextReveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <TextReveal type="blur-reveal" delay={0.2} as="span">Awards &</TextReveal>{" "}
            <TextReveal type="blur-reveal" delay={0.3} shouldSplit={false} as="span" className="text-gradient inline-block">Achievements</TextReveal>
          </h2>
        </motion.div>

        {/* Award Card */}
        <ParallaxSection speed={0.3}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <SpotlightCard className="p-8 md:p-12 border-border/10" spotlightColor="rgba(6, 182, 212, 0.25)">
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                {/* Trophy/Badge */}
                <motion.div
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={isInView ? { rotate: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                  className="relative"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-glow-pulse">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-cyber flex items-center justify-center">
                      <Trophy className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Floating stars */}
                  <motion.div
                    animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-2 -right-2"
                  >
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="absolute -bottom-2 -left-2"
                  >
                    <Star className="w-4 h-4 text-accent fill-accent" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <TextReveal type="fade-up" delay={0.6}>
                      <span className="inline-block px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full mb-4">
                        Q1 2024
                      </span>
                    </TextReveal>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                      <TextReveal type="blur-reveal" delay={0.7} as="span">Above and Beyond Individual Award</TextReveal>
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">FIS Global</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Recognized for exceptional contributions to the banking microservices platform,
                      demonstrating technical excellence, proactive problem-solving, and leadership
                      in delivering high-impact solutions.
                    </p>
                  </motion.div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default AwardSection;
