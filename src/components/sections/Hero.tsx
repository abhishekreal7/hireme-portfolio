"use client";

import { siteConfig } from "@/config/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [0, 1000], [0, 90]);

    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background-dark">
            <div className="container mx-auto px-6 md:px-12 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">

                    {/* Left: Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-12 flex items-center gap-4"
                        >
                            <span className="h-[1px] w-8 bg-white/20"></span>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-medium">
                                {siteConfig.role}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hero-text font-serif italic tracking-ultra-tight mb-8 lg:mb-16 text-white"
                        >
                            {siteConfig.name}
                        </motion.h1>

                        <div className="max-w-xl">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-xl lg:text-2xl text-white/60 font-light leading-relaxed mb-12"
                            >
                                {siteConfig.bio}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex items-center gap-10"
                            >
                                <a
                                    className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-semibold border-b border-white/10 pb-2 hover:border-white/40 transition-all text-white/80 hover:text-white"
                                    href={siteConfig.heroCta.href}
                                >
                                    {siteConfig.heroCta.text}
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: The Glow/Globe */}
                    <div className="hidden lg:block lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1.25 }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                            className="relative group origin-center aspect-square flex items-center justify-center -mr-16"
                        >
                            {/* Blur backdrop */}
                            <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full ethereal-glow pointer-events-none -z-10 scale-125"></div>

                            {/* 3D Globe */}
                            <Globe />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute right-12 bottom-12 hidden lg:flex flex-col items-center gap-8"
            >
                <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] text-white/20 font-medium">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="h-16 w-[1px] bg-gradient-to-b from-white/20 to-transparent"
                />
            </motion.div>
        </section>
    );
}

// 3D Globe Component using cobe
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

function Globe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let globe: ReturnType<typeof createGlobe> | null = null;
        let width = 0;

        function initGlobe(canvas: HTMLCanvasElement, w: number) {
            // Prevent double-init
            if (globe) return;
            try {
                let phi = 0;
                globe = createGlobe(canvas, {
                    devicePixelRatio: 1,
                    width: w * 2,
                    height: w * 2,
                    phi: 0,
                    theta: 0.2,
                    dark: 1,
                    diffuse: 1.2,
                    mapSamples: 4000,
                    mapBrightness: 4,
                    baseColor: [0.05, 0.05, 0.05],
                    markerColor: [1, 1, 1],
                    glowColor: [0.3, 0.3, 0.3],
                    markers: [
                        { location: [40.7128, -74.0060], size: 0.05 },
                        { location: [51.5074, -0.1278], size: 0.04 },
                        { location: [35.6895, 139.6917], size: 0.06 },
                        { location: [-33.8688, 151.2093], size: 0.05 },
                    ],
                    onRender: (state) => {
                        phi += 0.003;
                        state.phi = phi;
                        state.width = width * 2;
                        state.height = width * 2;
                    }
                });
            } catch (e) {
                console.warn('Globe initialization failed:', e);
            }
        }

        // Use ResizeObserver to reliably detect when the canvas has a real width
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const w = entry.contentRect.width;
                if (w > 0) {
                    width = w;
                    if (!globe && canvasRef.current) {
                        initGlobe(canvasRef.current, w);
                    }
                }
            }
        });

        if (canvasRef.current) {
            observer.observe(canvasRef.current);
        }

        return () => {
            observer.disconnect();
            globe?.destroy();
        };
    }, []);

    return (
        <div className="w-full max-w-[600px] aspect-square relative ethereal-glow opacity-40 mix-blend-screen pointer-events-none">
            <canvas
                ref={canvasRef}
                style={{ width: "100%", height: "100%", contain: 'layout paint size' }}
            />
        </div>
    );
}
