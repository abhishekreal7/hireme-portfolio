export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    summary: string;
    thumbnail: string;
    tags: string[];
    overview: string;
    problem: string;
    approach: string;
    processVisuals: string[];
    result: string;
    tech: string[];
}

export interface Experiment {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    videoUrl?: string;
    link?: string;
}

export const studioData = {
    processText: {
        headline: "Behind The Scenes",
        description: "My approach bridges the gap between meticulous design and high-performance engineering. Every project starts with a deep dive into the problem space, followed by rapid prototyping and precise execution. I believe in pushing the boundaries of web technology while keeping the user experience perfectly intuitive.",
    },
    caseStudies: [
        {
            id: "1",
            slug: "lumina-brand-evolution",
            title: "Lumina Brand Evolution",
            summary: "A complete visual identity and web experience overhaul for a leading AI startup.",
            thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
            tags: ["Branding", "Web Design", "Framer Motion"],
            overview: "Lumina approached me with a goal to reposition their brand in the highly competitive AI space. They needed an identity that felt both cutting-edge and deeply human.",
            problem: "Their existing brand lacked distinction, feeling overly technical and cold. The user journey on their flagship product was convoluted, leading to high drop-off rates during onboarding.",
            approach: "I led a 3-week design sprint to establish a new visual language centered around 'illuminating data'. This culminated in a dark-mode-first aesthetic with fluid, light-inspired micro-interactions.",
            processVisuals: [
                "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2000&auto=format&fit=crop",
            ],
            result: "The new identity and web presence resulted in a 40% increase in conversion rates and helped them secure a Series B funding round. The design system I created is now used across all their internal tools.",
            tech: ["Next.js", "TailwindCSS", "Figma", "Framer Motion"]
        },
        {
            id: "2",
            slug: "orbital-fintech-app",
            title: "Orbital Fintech App",
            summary: "Designing a next-generation crypto portfolio tracker for institutional investors.",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            tags: ["Product Design", "Fintech", "UI/UX"],
            overview: "Orbital is a premium wealth management platform built for family offices and institutional traders managing digital assets.",
            problem: "The challenge was displaying dense, complex financial data (order books, historical charts, multi-wallet balances) without overwhelming the user.",
            approach: "I developed a highly modular dashboard interface. By stripping away unnecessary chrome and relying on precise typography and subtle color shifts, the data became the interface itself.",
            processVisuals: [
                "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2000&auto=format&fit=crop"
            ],
            result: "Orbital successfully launched to beta, receiving praise for its extreme clarity and responsiveness. Waitlist signups exceeded 10,000 within the first week.",
            tech: ["React", "D3.js", "WebSockets", "CSS Modules"]
        }
    ] as CaseStudy[],
    experiments: [
        {
            id: "1",
            title: "Fluid Distortion Shader",
            description: "A WebGL experiment exploring interactive liquid distortion effects applied to typography.",
            thumbnail: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop",
            tags: ["Three.js", "GLSL", "Creative Coding"],
            link: "https://github.com/abhishekreal7",
        },
        {
            id: "2",
            title: "Kinetic Scroll Experience",
            description: "Pushing the boundaries of native scrolling with physics-based layout transformations.",
            thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
            tags: ["Framer Motion", "React"],
            link: "https://dribbble.com",
        },
        {
            id: "3",
            title: "Brutalism E-commerce",
            description: "A conceptual redesign of a fashion retailer focusing on extreme brutalist architecture.",
            thumbnail: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2000&auto=format&fit=crop",
            tags: ["Concept", "UI Design"],
            link: "https://behance.net",
        }
    ] as Experiment[],
};
