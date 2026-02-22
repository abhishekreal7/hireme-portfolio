"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = HTMLMotionProps<"section"> & {
    children: React.ReactNode;
    delay?: number;
};

export function Section({ children, className, delay = 0, ...props }: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay }}
            className={cn("py-20 md:py-32", className)}
            {...props}
        >
            {children}
        </motion.section>
    );
}
