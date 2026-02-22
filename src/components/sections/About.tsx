"use client";

import { profileConfig } from "@/config/profile";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-background-dark text-white w-full border-none">
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Bio */}
                    <div className="lg:col-span-5 flex flex-col justify-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-serif italic text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight font-light">
                                About Me.
                            </h2>
                            <div className="space-y-6 text-white/50 text-lg md:text-xl font-light leading-relaxed mb-10">
                                {profileConfig.about.paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <Link
                                href="/about"
                                className="text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors inline-flex items-center gap-2 group"
                            >
                                Explore More
                                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Values / Features */}
                    <div className="lg:col-span-7 flex flex-col justify-start lg:pt-8">
                        <div className="flex flex-col border-t border-white/[0.05]">
                            {profileConfig.about.values.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                    className="border-b border-white/[0.05] py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 group cursor-default"
                                >
                                    <span className="text-sm font-semibold tracking-wider text-white/40 md:w-12 flex-shrink-0 group-hover:text-white/60 transition-colors">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-medium tracking-wide mb-2 group-hover:text-white/80 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/40 text-lg font-light leading-relaxed group-hover:text-white/60 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
