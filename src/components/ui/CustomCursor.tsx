"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor that replaces the default arrow with a sleek circle.
 * Scales up when hovering interactive elements (links, buttons).
 * Hidden on mobile / touch devices.
 */
export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
    }, [cursorX, cursorY, isVisible]);

    useEffect(() => {
        // Only show on non-touch devices
        if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
            window.addEventListener("mousemove", handleMouseMove);

            const handleHoverStart = () => setIsHovering(true);
            const handleHoverEnd = () => setIsHovering(false);

            // Attach hover listeners to all interactive elements
            const addListeners = () => {
                const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, [data-cursor-hover]");
                interactives.forEach(el => {
                    el.addEventListener("mouseenter", handleHoverStart);
                    el.addEventListener("mouseleave", handleHoverEnd);
                });
                return interactives;
            };

            // Use MutationObserver so dynamically added elements get the cursor too
            const observer = new MutationObserver(() => addListeners());
            observer.observe(document.body, { childList: true, subtree: true });
            const elements = addListeners();

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                observer.disconnect();
                elements.forEach(el => {
                    el.removeEventListener("mouseenter", handleHoverStart);
                    el.removeEventListener("mouseleave", handleHoverEnd);
                });
            };
        }
    }, [handleMouseMove]);

    return (
        <>
            {/* Hide default cursor globally */}
            <style jsx global>{`
                @media (pointer: fine) {
                    * { cursor: none !important; }
                }
            `}</style>

            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 64 : 16,
                        height: isHovering ? 64 : 16,
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ type: "spring", damping: 25, stiffness: 400 }}
                    className="rounded-full bg-white"
                />
            </motion.div>
        </>
    );
}
