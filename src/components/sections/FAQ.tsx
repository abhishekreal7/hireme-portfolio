"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { profileConfig } from "@/config/profile";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import faqData from "@/data/faq.json";

export function FAQ() {
    if (faqData.length === 0) return null;

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section id="faq" className="py-24 md:py-32 bg-background-dark text-white border-none w-full relative">
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 mb-12">
                    {/* Left Column */}
                    <div className="flex flex-col justify-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 overflow-hidden rounded-2xl w-[300px] h-[400px] md:w-[400px] md:h-[500px] relative bg-white/[0.02] border border-white/[0.05]"
                        >
                            <Image
                                src={profileConfig.avatarUrl}
                                alt="Developer portrait"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[2.5rem] md:text-5xl lg:text-7xl font-sans font-medium tracking-tight leading-[1.05]"
                        >
                            Clarifying
                            <br />
                            Deliverables
                            <br />
                            Before They Begin
                            <br />
                            with Real Process
                            <br />
                            and
                            <br />
                            <span className="text-white/40">Honest Answers.</span>
                        </motion.h2>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="flex flex-col justify-start">
                        <div className="flex flex-col divide-y divide-white/[0.05] border-t border-white/[0.05]">
                            {faqData.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="flex items-center w-full py-8 text-left gap-8 cursor-pointer"
                                    >
                                        <span className="text-sm font-semibold text-white/40 flex-shrink-0">
                                            {faq.num}
                                        </span>
                                        <span className="text-lg md:text-xl font-medium flex-1 group-hover:text-white/80 transition-colors">
                                            {faq.question}
                                        </span>
                                        <span className="text-2xl text-white/40 transition-transform duration-300 leading-none select-none"
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
                                                <p className="pb-8 pl-[4.5rem] text-white/40 text-base font-light leading-relaxed max-w-lg">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Explore More */}
                <div className="text-center mt-12">
                    <Link
                        href="/faq"
                        className="text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                        Explore More
                        <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
