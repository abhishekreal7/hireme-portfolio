"use client";

import { studioData } from "@/data/studio";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function StudioPage() {
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
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-[11px] uppercase tracking-[0.2em] text-white font-bold hover:text-white/80 transition-colors"
                    >
                        Get in touch
                    </a>
                </div>
            </nav>

            {/* Header */}
            <section className="pt-36 md:pt-44 pb-16">
                <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6"
                    >
                        Creative Workspace
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight text-white mb-8"
                    >
                        Studio.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl"
                    >
                        <div>
                            <h4 className="text-xl text-white/90 font-medium mb-4">{studioData.processText.headline}</h4>
                            <p className="text-white/50 font-light leading-relaxed">
                                {studioData.processText.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                <div className="h-[1px] bg-white/[0.05]" />
            </div>

            {/* Case Studies Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Case Studies</h2>
                        <p className="text-white/40 font-light">Deep dives into recent, significant projects.</p>
                    </div>

                    <div className="space-y-4">
                        {studioData.caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <Link
                                    href={`/studio/${study.slug}`}
                                    className="group block p-6 md:p-8 bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.02] hover:border-white/[0.1] rounded-2xl transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-xl overflow-hidden shrink-0">
                                            <Image
                                                src={study.thumbnail}
                                                alt={study.title}
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <div className="flex items-start justify-between gap-4 mb-4">
                                                <h3 className="text-2xl md:text-3xl font-medium text-white/90 group-hover:text-white transition-colors">
                                                    {study.title}
                                                </h3>
                                                <ArrowUpRight size={20} className="text-white/30 group-hover:text-white transition-all transform group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-6">
                                                {study.summary}
                                            </p>
                                            <div className="flex gap-3 flex-wrap mt-auto">
                                                {study.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40 border border-white/[0.08] rounded-full font-medium">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Creative Lab Section */}
            <section className="py-20 md:py-28 bg-[#050505]">
                <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Creative Lab</h2>
                        <p className="text-white/40 font-light">Smaller experiments, motion tests, and visual explorations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {studioData.experiments.map((exp, index) => {
                            const content = (
                                <>
                                    <Image
                                        src={exp.thumbnail}
                                        alt={exp.title}
                                        fill
                                        className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                                    <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-medium text-white">{exp.title}</h3>
                                            {exp.link && (
                                                <ArrowUpRight size={18} className="text-white/30 group-hover:text-white transition-colors" />
                                            )}
                                        </div>
                                        <p className="text-sm text-white/60 font-light line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {exp.description}
                                        </p>
                                        <div className="flex gap-2 flex-wrap">
                                            {exp.tags.map(tag => (
                                                <span key={tag} className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-bold">
                                                    {tag} {tag !== exp.tags[exp.tags.length - 1] && <span className="mx-1 text-white/20">/</span>}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            );

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    {exp.link ? (
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group block relative rounded-2xl overflow-hidden border border-white/[0.05] bg-black cursor-pointer aspect-square"
                                        >
                                            {content}
                                        </a>
                                    ) : (
                                        <div className="group block relative rounded-2xl overflow-hidden border border-white/[0.05] bg-black aspect-square">
                                            {content}
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}
