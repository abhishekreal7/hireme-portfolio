"use client";

import { useState } from "react";
import faqData from "@/data/faq.json";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
                <div className="container mx-auto px-6 md:px-12 max-w-[900px]">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6"
                    >
                        Common Questions
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight text-white mb-8"
                    >
                        FAQ.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/40 font-light max-w-xl"
                    >
                        Everything you need to know about working together, process, and deliverables.
                    </motion.p>
                </div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-6 md:px-12 max-w-[900px]">
                <div className="h-[1px] bg-white/[0.05]" />
            </div>

            {/* Full FAQ Accordion */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 max-w-[900px]">
                    <div className="flex flex-col divide-y divide-white/[0.05]">
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 + 0.3 }}
                                className="group"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="flex items-center w-full py-8 md:py-10 text-left gap-8 cursor-pointer"
                                >
                                    <span className="text-sm font-semibold text-white/30 flex-shrink-0 font-mono">
                                        {faq.num}
                                    </span>
                                    <span className="text-xl md:text-2xl font-medium flex-1 group-hover:text-white/80 transition-colors">
                                        {faq.question}
                                    </span>
                                    <span
                                        className="text-2xl text-white/40 transition-transform duration-300 leading-none select-none"
                                        style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
                                    >
                                        +
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-10 pl-[4.5rem] text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
