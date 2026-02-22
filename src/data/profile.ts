/**
 * ============================================
 *  PROFILE CONFIGURATION
 * ============================================
 *
 *  Edit this file to personalize your portfolio.
 *  All personal information is stored here so you
 *  never have to touch the component files.
 */

export const profileConfig = {
    // ── Identity ──────────────────────────────────────
    name: "Alex Morgan",
    role: "Creative Developer & Designer",
    bio: "I build exceptional digital experiences with a focus on polished aesthetics and fluid animations. Currently crafting premium web solutions at the intersection of design and code.",
    email: "alex@morganstudio.co",
    location: "San Francisco, CA",
    availability: "Remote Worldwide",

    // ── Portrait ──────────────────────────────────────
    avatarUrl: "/assets/profile/avatar.png",

    // ── Social Links ──────────────────────────────────
    // Set any link to "" (empty string) to hide it
    social: {
        github: "https://github.com/alexmorgan",
        twitter: "https://twitter.com/alexmorgandev",
        linkedin: "https://linkedin.com/in/alexmorgan",
        dribbble: "https://dribbble.com/alexmorgan",
    },

    // ── About Section ─────────────────────────────────
    about: {
        paragraphs: [
            "Hello! I'm Alex, a passionate developer and designer based in San Francisco. My journey in web development started back in 2016, and I've been obsessed with bringing ideas to life on the screen ever since.",
            "My philosophy revolves around minimalism and functionality. I believe that great design is invisible — it just works seamlessly while looking incredibly polished.",
            "When I'm not coding, you can find me exploring new design trends, contributing to open source, or enjoying a pour-over at my favorite local roaster.",
        ],
        values: [
            {
                title: "Clean Code",
                description: "Writing maintainable and scalable code using modern practices and battle-tested patterns.",
            },
            {
                title: "Premium Design",
                description: "Crafting interfaces that are both beautiful and functional, with obsessive attention to detail.",
            },
            {
                title: "Fast Performance",
                description: "Optimizing for speed to deliver sub-second load times and exceptional user experiences.",
            },
        ],
    },
};
