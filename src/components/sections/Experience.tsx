"use client";

import { Section } from "@/components/layout/Section";
import data from "@/data/experience.json";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Experience() {
    if (data.experience.length === 0) return null;

    return (
        <Section id="experience" className="bg-muted/10 relative overflow-hidden">
            {/* Background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
                            Experience
                        </h2>
                        <p className="text-muted-foreground text-lg text-center md:text-left max-w-xl">
                            My professional journey so far.
                        </p>
                    </div>
                    <Link
                        href="/experience"
                        className="text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors flex items-center gap-2 group self-center md:self-auto"
                    >
                        Explore More
                        <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                    </Link>
                </div>

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-border" />

                    <div className="space-y-16">
                        {data.experience.map((exp, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={exp.id} className="relative flex flex-col md:flex-row items-center w-full group">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[-2rem] md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(var(--primary),0.5)] group-hover:scale-125 transition-transform" />

                                    {/* Content Left (Even) or Empty Left (Odd) */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-full md:w-1/2 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 hidden md:block opacity-0"
                                            }`}
                                    >
                                        {isEven && (
                                            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-border transition-colors">
                                                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full mb-3">
                                                    {exp.period}
                                                </span>
                                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                                <h4 className="text-primary font-medium mb-3">{exp.company}</h4>
                                                <p className="text-muted-foreground">{exp.description}</p>
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Content Right (Odd) or Empty Right (Even) */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-full md:w-1/2 ${!isEven ? "md:pl-16 text-left" : "md:pr-16 hidden md:block opacity-0"
                                            }`}
                                    >
                                        {!isEven && (
                                            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-border transition-colors">
                                                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full mb-3">
                                                    {exp.period}
                                                </span>
                                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                                <h4 className="text-primary font-medium mb-3">{exp.company}</h4>
                                                <p className="text-muted-foreground">{exp.description}</p>
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}
