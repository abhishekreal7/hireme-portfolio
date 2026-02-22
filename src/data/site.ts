/**
 * ============================================
 *  SITE CONFIGURATION
 * ============================================
 *
 *  Controls site-wide settings: navigation, stats,
 *  footer text, contact section copy, and more.
 */

import { profileConfig } from "./profile";

export const siteConfig = {
    // ── Re-exported from profile ──────────────────────
    name: profileConfig.name,
    role: profileConfig.role,
    bio: profileConfig.bio,
    email: profileConfig.email,
    social: profileConfig.social,

    // ── Navigation ────────────────────────────────────
    navLinks: [
        { name: "Archive", href: "/#projects" },
        { name: "Experience", href: "/#experience" },
        { name: "Studio", href: "/studio" },
    ],

    // ── Hero CTA ──────────────────────────────────────
    heroCta: {
        text: "View Selected Works",
        href: "/#projects",
    },

    // ── Stats Bar ─────────────────────────────────────
    stats: [
        { value: "50+", label: "Projects Shipped" },
        { value: "08", label: "Years Experience" },
        { value: "15", label: "Global Clients" },
        { value: "Top 1%", label: "Quality Standard" },
    ],

    // ── Contact Section ───────────────────────────────
    contact: {
        heading: "Let's build something beautiful.",
        subtitle: "Whether you have a project in mind or just want to chat about design and technology, feel free to reach out.",
    },

    // ── Footer ────────────────────────────────────────
    // footerVariant: "expanded" — full footer with CTA, social, office info
    // footerVariant: "minimal"  — compact copyright-only footer
    footerVariant: "expanded" as "expanded" | "minimal",
    footer: {
        ctaHeading: "Let's create something meaningful.",
        copyright: "Built for the future.",
        links: [] as { name: string; href: string }[],
    },
};
