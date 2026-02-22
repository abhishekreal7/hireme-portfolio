"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Scroll progress bar at the very top of the page.
 * A thin accent-colored line that fills as you scroll down.
 */
export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] z-[90] origin-left"
            style={{
                scaleX,
                background: "linear-gradient(90deg, var(--theme-gradient-from, #0099ff), var(--theme-gradient-to, #a855f7))",
            }}
        />
    );
}
