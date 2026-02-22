"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Stats() {
    return (
        <section className="py-24 md:py-32 border-t border-white/[0.03] bg-background-dark">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
                >
                    {siteConfig.stats.map((stat, index) => (
                        <motion.div key={index} variants={item} className="space-y-3">
                            <p className="text-3xl md:text-4xl font-serif italic text-white/90">{stat.value}</p>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
