"use client";

import data from "@/data/experience.json";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ExperiencePage() {
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
                <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6"
                    >
                        Career & Education
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight text-white mb-8"
                    >
                        My Journey.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/40 font-light max-w-xl"
                    >
                        A timeline of professional experience and academic background.
                    </motion.p>
                </div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">
                <div className="h-[1px] bg-white/[0.05]" />
            </div>

            {/* Experience Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center">
                            <Briefcase size={18} className="text-white/50" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif italic text-white">
                            Work Experience
                        </h2>
                    </motion.div>

                    <div className="space-y-0">
                        {data.experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                                className="group relative py-10 md:py-12 border-b border-white/[0.05] last:border-b-0"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                                    {/* Left: Meta */}
                                    <div className="md:w-56 flex-shrink-0">
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">
                                            {exp.period}
                                        </span>
                                        <h4 className="text-white/50 text-sm font-medium mt-2">
                                            {exp.company}
                                        </h4>
                                    </div>

                                    {/* Right: Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-medium text-white/90 mb-4">
                                            {exp.role}
                                        </h3>
                                        <p className="text-white/40 font-light leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Highlights */}
                                        {exp.highlights && exp.highlights.length > 0 && (
                                            <ul className="space-y-3">
                                                {exp.highlights.map((hl, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-white/30">
                                                        <ChevronRight size={14} className="text-white/15 mt-0.5 flex-shrink-0" />
                                                        <span>{hl}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Divider */}
            <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">
                <div className="h-[1px] bg-white/[0.05]" />
            </div>

            {/* Education Section */}
            {data.education && data.education.length > 0 && (
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6 md:px-12 max-w-[1100px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center">
                                <GraduationCap size={18} className="text-white/50" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif italic text-white">
                                Education
                            </h2>
                        </motion.div>

                        <div className="space-y-0">
                            {data.education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="group relative py-10 md:py-12 border-b border-white/[0.05] last:border-b-0"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                                        {/* Left: Meta */}
                                        <div className="md:w-56 flex-shrink-0">
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">
                                                {edu.period}
                                            </span>
                                            <h4 className="text-white/50 text-sm font-medium mt-2">
                                                {edu.institution}
                                            </h4>
                                        </div>

                                        {/* Right: Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-medium text-white/90 mb-4">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-white/40 font-light leading-relaxed mb-6">
                                                {edu.description}
                                            </p>

                                            {/* Highlights */}
                                            {edu.highlights && edu.highlights.length > 0 && (
                                                <ul className="space-y-3">
                                                    {edu.highlights.map((hl, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm text-white/30">
                                                            <ChevronRight size={14} className="text-white/15 mt-0.5 flex-shrink-0" />
                                                            <span>{hl}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
