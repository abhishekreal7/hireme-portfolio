"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 ios-blur border-b border-white/[0.03]">
                <div className="container mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <a href="/" className="font-semibold tracking-[0.25em] text-xs uppercase text-white/90 hover:text-white transition-colors">
                            {siteConfig.name.split(" ").length > 1 ? siteConfig.name.split(" ")[1] : siteConfig.name}
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-12">
                        {siteConfig.navLinks.map((link) => (
                            <a key={link.name} className="nav-link" href={link.href}>
                                {link.name}
                            </a>
                        ))}
                        <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
                        <a className="text-[11px] uppercase tracking-[0.2em] font-bold text-white group flex items-center gap-2" href="/#contact">
                            Connect
                            <ArrowUpRight size={14} />
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white/70 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 left-0 right-0 z-40 md:hidden ios-blur border-b border-white/[0.03]"
                    >
                        <nav className="flex flex-col items-center py-8 gap-8">
                            {siteConfig.navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="nav-link !text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="w-12 h-[1px] bg-white/10 my-2"></div>
                            <a
                                href="/#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-[11px] uppercase tracking-[0.2em] font-bold text-white group flex items-center gap-2"
                            >
                                Connect
                                <ArrowUpRight size={14} />
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
