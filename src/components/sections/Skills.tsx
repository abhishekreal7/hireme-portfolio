"use client";

import { motion } from "framer-motion";
import { CodeXml, Zap, MonitorSmartphone, Paintbrush, Settings, Cloud, Github, Laptop, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const skills = [
    { name: "HTML & CSS", icon: CodeXml },
    { name: "JavaScript", icon: Zap },
    { name: "Responsive Design", icon: MonitorSmartphone },
    { name: "UI/UX", icon: Paintbrush },
    { name: "Web Animation", icon: Settings },
    { name: "Deployments", icon: Cloud },
    { name: "Version Control", icon: Github },
    { name: "Prototyping", icon: Laptop },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32 bg-background-dark border-t border-white/[0.03]">
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                <div className="text-center mb-24 md:mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mb-6"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-lg max-w-2xl mx-auto font-light mb-8"
                    >
                        The tools and technologies I use to bring ideas to life.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/skills"
                            className="text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors inline-flex items-center gap-2 group"
                        >
                            Explore More
                            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-y-20 lg:gap-y-24 gap-x-8 max-w-5xl mx-auto"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center space-y-6 group"
                        >
                            <div className="text-white/40 group-hover:text-white transition-colors duration-500">
                                <skill.icon strokeWidth={1.2} size={48} />
                            </div>
                            <span className="text-sm md:text-base font-semibold tracking-wide text-white group-hover:text-white/80 transition-colors duration-500">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
