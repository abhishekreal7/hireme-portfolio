"use client";

import { profileConfig } from "@/config/profile";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function AboutPage() {
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
                        href={`mailto:${profileConfig.email}`}
                        className="text-[11px] uppercase tracking-[0.2em] text-white font-bold hover:text-white/80 transition-colors"
                    >
                        Get in touch
                    </a>
                </div>
            </nav>

            <main className="pt-36 md:pt-44 pb-24">
                <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">

                    {/* Header */}
                    <div className="mb-16 md:mb-24">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6"
                        >
                            The Person Behind The Code
                        </motion.h3>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight text-white mb-8"
                        >
                            About Me.
                        </motion.h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative items-start">

                        {/* Sticky Image Column */}
                        <div className="lg:col-span-5 lg:sticky top-32 hidden md:block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02] border border-white/[0.05]"
                            >
                                <Image
                                    src={profileConfig.avatarUrl}
                                    alt={profileConfig.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
                            </motion.div>
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-7 flex flex-col pt-4 md:pt-10">

                            {/* Mobile Image (Visible only on small screens) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="relative aspect-square w-full rounded-2xl overflow-hidden grayscale border border-white/[0.05] mb-12 md:hidden"
                            >
                                <Image
                                    src={profileConfig.avatarUrl}
                                    alt={profileConfig.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-3xl md:text-4xl font-medium tracking-wide mb-6"
                            >
                                {profileConfig.role} based in {profileConfig.location}.
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="space-y-8 text-white/50 text-lg md:text-xl font-light leading-relaxed mb-16"
                            >
                                {profileConfig.about.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </motion.div>

                            {/* Core Principles */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-10">
                                    Core Principles
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                    {profileConfig.about.values.map((value, i) => (
                                        <div key={i} className="p-8 border border-white/[0.05] rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                                            <span className="text-[10px] font-mono text-white/30 mb-4 block">0{i + 1}</span>
                                            <h4 className="text-xl font-medium text-white/90 mb-3">{value.title}</h4>
                                            <p className="text-sm text-white/50 leading-relaxed">{value.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Quick Stats / Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="border-t border-white/[0.05] pt-12"
                            >
                                <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-2">Location</h4>
                                        <p className="text-white/80">{profileConfig.location}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-2">Availability</h4>
                                        <p className="text-white/80">{profileConfig.availability}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-2">Email</h4>
                                        <a href={`mailto:${profileConfig.email}`} className="text-white/80 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">
                                            {profileConfig.email}
                                        </a>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-3">Connect</h4>
                                        <div className="flex items-center gap-4">
                                            {profileConfig.social.github && (
                                                <a href={profileConfig.social.github} target="_blank" className="text-white/50 hover:text-white transition-colors">
                                                    <Github size={18} />
                                                </a>
                                            )}
                                            {profileConfig.social.twitter && (
                                                <a href={profileConfig.social.twitter} target="_blank" className="text-white/50 hover:text-white transition-colors">
                                                    <Twitter size={18} />
                                                </a>
                                            )}
                                            {profileConfig.social.linkedin && (
                                                <a href={profileConfig.social.linkedin} target="_blank" className="text-white/50 hover:text-white transition-colors">
                                                    <Linkedin size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Back to Experience link */}
                            <div className="mt-20">
                                <Link
                                    href="/experience"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/10 text-white text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:bg-white/[0.05] transition-colors"
                                >
                                    View Experience & Education
                                    <ArrowUpRight size={14} />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
