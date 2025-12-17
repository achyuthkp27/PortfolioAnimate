import { motion } from "framer-motion";
import TextReveal from "./ui/TextReveal";
import MasonryGrid from "./ui/MasonryGrid";


const inspirations = [
    {
        id: 1,
        height: "h-[400px]",
        color: "from-blue-600 to-indigo-900",
        palette: ["#2563eb", "#1e40af", "#1e3a8a", "#ffffff"],
        title: "Event-Driven Architecture",
        category: "System Design",
        image: "/images/architecture/event-driven.png"
    },
    {
        id: 2,
        height: "h-[280px]",
        color: "from-emerald-500 to-teal-700",
        palette: ["#10b981", "#047857", "#064e3b", "#ccfbf1"],
        title: "Microservices Pattern",
        category: "Backend",
        image: "/images/architecture/microservices.png"
    },
    {
        id: 3,
        height: "h-[350px]",
        color: "from-orange-500 to-red-600",
        palette: ["#f97316", "#dc2626", "#7f1d1d", "#fff7ed"],
        title: "Distributed Caching",
        category: "Performance",
        image: "/images/architecture/caching.png"
    },
    {
        id: 4,
        height: "h-[450px]",
        color: "from-violet-600 to-fuchsia-900",
        palette: ["#7c3aed", "#701a75", "#4c0519", "#fae8ff"],
        title: "Cloud Native Infrastructure",
        category: "DevOps",
        image: "/images/architecture/cloud-native.png"
    },
    {
        id: 5,
        height: "h-[320px]",
        color: "from-cyan-500 to-blue-600",
        palette: ["#06b6d4", "#2563eb", "#1e3a8a", "#cffafe"],
        title: "API Gateway Logic",
        category: "Networking",
        image: "/images/architecture/api-gateway.png"
    },
    {
        id: 6,
        height: "h-[380px]",
        color: "from-slate-600 to-zinc-800",
        palette: ["#475569", "#27272a", "#000000", "#f8fafc"],
        title: "Database Sharding",
        category: "Scalability",
        image: "/images/architecture/sharding.png"
    }
];

const ArchitectureGallery = () => {
    return (
        <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-background/50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-20 text-center">
                    <TextReveal type="fade-up">
                        <span className="inline-block px-4 py-2 text-xs font-mono tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/30 mb-6">
                            Visual Engineering
                        </span>
                    </TextReveal>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        <TextReveal type="blur-reveal" delay={0.2} as="span">System</TextReveal>{" "}
                        <TextReveal type="blur-reveal" delay={0.3} shouldSplit={false} as="span" className="text-gradient inline-block">Architecture</TextReveal>
                    </h2>
                    <TextReveal type="fade-up" delay={0.4} as="p" className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Visualizing complex backend patterns and infrastructure design. A gallery of the systems I architect and build.
                    </TextReveal>
                </div>

                {/* Masonry Grid */}
                <MasonryGrid gap={24}>
                    {inspirations.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-2xl w-full ${item.height} cursor-pointer shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-500`}
                        >
                            {/* Cinematic Image Animation */}
                            <motion.div
                                className="absolute inset-0 w-full h-full"
                                animate={{
                                    scale: [1, 1.15, 1],
                                    rotate: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatType: "reverse"
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>

                            {/* Tint Overlay (matches color theme) */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-10`} />

                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none z-10" />

                            {/* Noise Overlay */}
                            <div className="absolute inset-0 noise opacity-20 z-10" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-20">
                                <div className="flex justify-between items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/20">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    <h3 className="text-white font-display text-2xl font-bold mb-1">{item.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </MasonryGrid>
            </div>
        </section>
    );
};

export default ArchitectureGallery;
