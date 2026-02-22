"use client";

import projectsData from "@/data/projects.json";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function Projects() {
    if (projectsData.length === 0) return null;

    return (
        <section id="projects" className="py-24 md:py-48 bg-[#080808]">
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 border-b border-white/[0.05] pb-12">
                    <div className="max-w-2xl">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6"
                        >
                            Archive 01
                        </motion.h3>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-7xl font-serif italic leading-tight text-white"
                        >
                            Selected Projects.
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-8 md:mt-0"
                    >
                        <Link
                            href="/projects"
                            className="text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                        >
                            Explore More
                            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className={`group ${index % 2 !== 0 ? 'md:mt-32 lg:mt-48' : ''}`}
                        >
                            <Link href={`/projects/${project.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-[#111] mb-8 md:mb-10 cursor-pointer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-[1.05] group-hover:scale-100"
                                />

                                {/* Explore Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="w-24 h-24 rounded-full ios-blur border border-white/20 flex flex-col items-center justify-center bg-black/40">
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-white">Explore</span>
                                    </div>
                                </div>
                            </Link>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl md:text-2xl font-medium mb-2 text-white/90">{project.title}</h4>
                                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/40">
                                        {project.tags.slice(0, 3).join(" • ")}
                                    </p>
                                </div>
                                <span className="text-[10px] text-white/20 font-mono mt-1">{project.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
