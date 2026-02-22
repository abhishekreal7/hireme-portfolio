"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

/**
 * Premium page preloader with animated logo reveal.
 * Shows a sleek loading animation before the site content appears.
 */
export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for fonts and initial paint, then dismiss
        const timer = setTimeout(() => setIsLoading(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-[#030303] flex items-center justify-center"
                >
                    <div className="flex flex-col items-center gap-8">
                        {/* Animated name reveal */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "auto" }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                            className="overflow-hidden"
                        >
                            <span className="text-2xl md:text-3xl font-serif italic text-white/90 whitespace-nowrap tracking-tight">
                                {siteConfig.name}
                            </span>
                        </motion.div>

                        {/* Progress line */}
                        <div className="w-48 h-[1px] bg-white/10 overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 1.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                className="h-full bg-white/60"
                            />
                        </div>

                        {/* Role label */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-medium"
                        >
                            Portfolio
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
