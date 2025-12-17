import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, Box, Torus, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen, Mail } from "lucide-react";
import { Suspense } from "react";
import TextReveal from "./ui/TextReveal";
import ParallaxSection from "./ui/ParallaxSection";
import MagneticButton from "./ui/MagneticButton";

const FloatingGeometry = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4aa" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#a855f7" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 64, 64]} position={[-3, 2, -2]}>
          <MeshDistortMaterial
            color="#00d4aa"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <Box args={[1.2, 1.2, 1.2]} position={[3, -1, -1]} rotation={[0.5, 0.5, 0]}>
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.3}
            metalness={0.7}
          />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <Torus args={[0.8, 0.3, 32, 64]} position={[0, -2, -3]} rotation={[Math.PI / 3, 0, 0]}>
          <MeshDistortMaterial
            color="#ec4899"
            attach="material"
            distort={0.2}
            speed={2}
            roughness={0.2}
            metalness={0.9}
          />
        </Torus>
      </Float>

      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Sphere args={[0.5, 32, 32]} position={[4, 3, -4]}>
          <MeshDistortMaterial
            color="#f97316"
            attach="material"
            distort={0.5}
            speed={3}
            roughness={0.3}
            metalness={0.6}
          />
        </Sphere>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const Hero3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <FloatingGeometry />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-[1]" />
      <div className="absolute inset-0 grid-pattern opacity-20 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <TextReveal type="fade-up" delay={0.2}>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase text-[#22c55e] bg-[#22c55e]/10 rounded-full border border-[#22c55e]/30 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </TextReveal>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <TextReveal type="blur-reveal" delay={0.4} className="block">Achyuth </TextReveal>
              <TextReveal type="blur-reveal" delay={0.6} shouldSplit={false} className="block text-gradient neon-text">KP</TextReveal>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {["Software Developer", "React Js", "Spring Boot", "Microservices", "AWS"].map((tag, i) => (
                <TextReveal key={tag} type="fade-up" delay={0.6 + i * 0.1} as="span">
                  <span
                    className="px-3 py-1.5 text-xs font-mono bg-secondary/80 text-secondary-foreground rounded-full border border-border/50"
                  >
                    {tag}
                  </span>
                </TextReveal>
              ))}
            </motion.div>

            <TextReveal type="fade-up" delay={0.8} as="p" className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Engineering scalable systems with precision, performance, and a product mindset.
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium bg-gradient-cyber text-primary-foreground rounded-full shadow-neon transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </MagneticButton>

              <MagneticButton>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium glass rounded-full hover:bg-secondary/80 transition-all"
                >
                  <FolderOpen className="w-4 h-4" />
                  View Projects
                </motion.a>
              </MagneticButton>

              <MagneticButton>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </motion.a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right side decorative element */}
          <ParallaxSection speed={0.2} className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-cyber rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute inset-8 glass-card rounded-3xl flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-gradient">4+</span>
                  <span className="absolute bottom-8 text-sm text-muted-foreground">Years Experience</span>
                </div>
              </div>
            </motion.div>
          </ParallaxSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono uppercase tracking-wider">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
