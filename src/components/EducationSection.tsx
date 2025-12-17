import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import TextReveal from "./ui/TextReveal";
import ParallaxSection from "./ui/ParallaxSection";
import SpotlightCard from "./ui/SpotlightCard";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 px-6 md:px-12 relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TextReveal type="fade-up">
            <span className="inline-block px-4 py-2 text-xs font-mono tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/30 mb-6">
              Education
            </span>
          </TextReveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <TextReveal type="blur-reveal" delay={0.2} as="span">Academic</TextReveal>{" "}
            <TextReveal type="blur-reveal" delay={0.3} shouldSplit={false} as="span" className="text-gradient inline-block">Background</TextReveal>
          </h2>
        </motion.div>

        <ParallaxSection speed={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <SpotlightCard className="p-8 md:p-10 border-border/10" spotlightColor="rgba(139, 92, 246, 0.25)">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-cyber flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold mb-2">
                    <TextReveal type="fade-up" delay={0.4}>Bachelor of Engineering</TextReveal>
                  </h3>
                  <div className="text-xl text-primary font-medium mb-4">
                    <TextReveal type="fade-up" delay={0.5}>Computer Science & Engineering</TextReveal>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Sri Siddhartha Institute of Technology, Tumakuru</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>2017 – 2021</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Completed Bachelor's degree with focus on software engineering, data structures,
                    algorithms, and database management systems. Gained foundational knowledge in
                    programming, system design, and software development methodologies.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default EducationSection;
