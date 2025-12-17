import { motion } from "framer-motion";
import TextReveal from "./ui/TextReveal";
import { ArrowUpRight, Code, Palette, Laptop } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

const services = [
    {
        title: "Web Engineering",
        description: "Building scalable, high-performance web applications with modern tech stacks.",
        icon: <Laptop className="w-8 h-8" />,
        tags: ["React/Next.js", "TypeScript", "Node.js"]
    },
    {
        title: "UI/UX Design",
        description: "Crafting intuitive and visually stunning interfaces that users love.",
        icon: <Palette className="w-8 h-8" />,
        tags: ["Figma", "Design Systems", "Prototyping"]
    },
    {
        title: "Creative Development",
        description: "Adding life to the web with complex animations and immersive 3D experiences.",
        icon: <Code className="w-8 h-8" />,
        tags: ["GSAP/Framer", "Three.js", "WebGL"]
    }
];

const Services = () => {
    return (
        <section className="py-32 px-6 md:px-12 relative overflow-hidden">
            {/* Background Ambient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <TextReveal type="mask-up" as="h2" className="font-display text-4xl md:text-6xl font-bold mb-6">
                        Services & Capabilities
                    </TextReveal>
                    <div className="max-w-2xl text-xl text-muted-foreground/80">
                        <TextReveal type="scrub" className="leading-relaxed">
                            I combine technical expertise with design sensibilities to deliver comprehensive digital solutions. From concept to code, everything is crafted with precision.
                        </TextReveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <SpotlightCard className="h-full group hover:border-primary/50 transition-colors duration-500">
                                <div className="p-8 h-full flex flex-col pt-12">
                                    <div className="mb-6 p-4 rounded-2xl bg-primary/5 w-fit text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border/50 bg-secondary/30">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        Learn more <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
