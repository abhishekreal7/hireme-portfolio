"use client";

import { motion } from "framer-motion";
import testimonialsData from "@/data/testimonials.json";

/**
 * Testimonials section with infinite horizontal marquee scroll.
 * Cards scroll continuously for a premium, magazine-like feel.
 * Edit testimonials in /src/data/testimonials.json
 */
export function Testimonials() {
    if (testimonialsData.length === 0) return null;

    // Double the data for seamless infinite scroll
    const doubled = [...testimonialsData, ...testimonialsData];

    return (
        <section className="py-24 md:py-32 bg-background-dark border-t border-white/[0.03] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px] mb-16 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h3 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6">
                            Testimonials
                        </h3>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white">
                            Kind Words.
                        </h2>
                    </div>
                    <p className="text-white/30 text-sm max-w-xs font-light">
                        What clients and collaborators say about working together.
                    </p>
                </motion.div>
            </div>

            {/* Marquee Row */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{ x: [0, -50 * testimonialsData.length + "%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-8"
                    style={{ width: "max-content" }}
                >
                    {doubled.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[400px] md:w-[480px] bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 md:p-10 hover:bg-white/[0.04] transition-colors duration-500"
                        >
                            <p className="text-white/50 text-base font-light leading-relaxed mb-8 min-h-[80px]">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-4">
                                {/* Avatar circle with initials */}
                                <div className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center text-xs font-semibold text-white/60">
                                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white/80">{testimonial.name}</p>
                                    <p className="text-xs text-white/30">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
