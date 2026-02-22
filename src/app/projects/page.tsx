"use client";

import projectsData from "@/data/projects.json";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background-dark text-white font-[family-name:var(--font-sans)]">
            <div className="noise-overlay" />

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 ios-blur border-b border-white/[0.03]">
                <div className="container mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors font-medium"
                    >
                        <ArrowLeft size={16} />
                        Back Home
                    </Link>
                </div>
            </nav>

            {/* Header */}
            <section className="pt-36 md:pt-44 pb-16 md:pb-24">
                <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6"
                    >
                        Full Archive
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight text-white mb-8"
                    >
                        All Projects.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/40 font-light max-w-xl"
                    >
                        A comprehensive look at selected works, case studies, and creative experiments.
                    </motion.p>
                </div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                <div className="h-[1px] bg-white/[0.05]" />
            </div>

            {/* Projects List */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                    <div className="space-y-0">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="group block py-10 md:py-14 border-b border-white/[0.05] hover:border-white/[0.1] transition-colors"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                                        {/* Image */}
                                        <div className="lg:w-80 flex-shrink-0 aspect-video relative overflow-hidden rounded-lg bg-[#111]">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-4 mb-4">
                                                <h2 className="text-2xl md:text-4xl font-serif italic text-white/90 group-hover:text-white transition-colors">
                                                    {project.title}
                                                </h2>
                                                <span className="text-[10px] text-white/20 font-mono flex-shrink-0 mt-2">
                                                    {project.year}
                                                </span>
                                            </div>
                                            <p className="text-white/40 font-light leading-relaxed mb-6 max-w-2xl">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-3">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/30 border border-white/[0.06] rounded-full font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-white/20 group-hover:text-white/60 transition-colors flex items-center gap-2 font-medium">
                                                    View Case Study
                                                    <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
