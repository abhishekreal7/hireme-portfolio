"use client";

import skillsData from "@/data/skills.json";
import { motion } from "framer-motion";
import { ArrowLeft, Code2, Server, Wrench } from "lucide-react";
import Link from "next/link";

const categoryIcons: Record<string, typeof Code2> = {
    "Frontend": Code2,
    "Backend": Server,
    "Tools & Design": Wrench,
};

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-background-dark text-white font-[family-name:var(--font-sans)]">
            <div className="noise-overlay" />

            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 ios-blur border-b border-white/[0.03]">
                <div className="container mx-auto px-6 md:px-12 h-24 flex items-center">
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
                <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6"
                    >
                        Technical Arsenal
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight text-white mb-8"
                    >
                        Skills & Tools.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/40 font-light max-w-xl"
                    >
                        The technologies, frameworks, and tools I use to build exceptional digital experiences.
                    </motion.p>
                </div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">
                <div className="h-[1px] bg-white/[0.05]" />
            </div>

            {/* Skills Grid by Category */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">
                    <div className="space-y-20">
                        {skillsData.map((category, catIndex) => {
                            const Icon = categoryIcons[category.category] || Code2;

                            return (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * catIndex + 0.3 }}
                                >
                                    {/* Category Header */}
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center">
                                            <Icon size={18} className="text-white/50" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-serif italic text-white">
                                            {category.category}
                                        </h2>
                                    </div>

                                    {/* Skills */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                        {category.items.map((skill, i) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.05 * i + 0.3 + 0.1 * catIndex }}
                                                className="group px-6 py-5 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
                                            >
                                                <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors">
                                                    {skill}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
