import { siteConfig } from "@/config/site";
import { profileConfig } from "@/config/profile";

/**
 * ExpandedFooter — the full footer with CTA heading, email, socials, and office info.
 * This is the default layout.
 */
function ExpandedFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background-dark py-24 md:py-32 border-t border-white/[0.03]">
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-24 md:mb-32">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-10 md:mb-12 max-w-md text-white">{siteConfig.footer.ctaHeading}</h2>
                        <a
                            className="text-2xl md:text-3xl lg:text-4xl font-light text-white/40 hover:text-white transition-colors underline underline-offset-8 decoration-white/10 break-all"
                            href={`mailto:${siteConfig.email}`}
                        >
                            {siteConfig.email}
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-16 sm:gap-24 lg:justify-end">
                        <div className="space-y-6">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Social</p>
                            <ul className="space-y-4">
                                {siteConfig.social.twitter && (
                                    <li><a className="nav-link !p-0" href={siteConfig.social.twitter} target="_blank" rel="noreferrer">Twitter</a></li>
                                )}
                                {siteConfig.social.linkedin && (
                                    <li><a className="nav-link !p-0" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                                )}
                                {siteConfig.social.github && (
                                    <li><a className="nav-link !p-0" href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub</a></li>
                                )}
                                {siteConfig.social.dribbble && (
                                    <li><a className="nav-link !p-0" href={siteConfig.social.dribbble} target="_blank" rel="noreferrer">Dribbble</a></li>
                                )}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Office</p>
                            <p className="text-xs text-white/40 leading-relaxed font-light">
                                {profileConfig.location}<br />
                                {profileConfig.availability}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/20 tracking-[0.2em] uppercase font-medium">
                    <p>© {currentYear} {siteConfig.name}. {siteConfig.footer.copyright}</p>
                    <div className="flex gap-12">
                        {siteConfig.footer.links.map((link) => (
                            <a key={link.name} className="hover:text-white transition-colors" href={link.href}>{link.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

/**
 * MinimalFooter — a compact, single-line footer.
 * Set `footerVariant: "minimal"` in /data/site.ts to use this.
 */
function MinimalFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background-dark py-8 border-t border-white/[0.03]">
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 tracking-[0.2em] uppercase font-medium">
                <p>© {currentYear} {siteConfig.name}. {siteConfig.footer.copyright}</p>
                <div className="flex items-center gap-8">
                    {siteConfig.social.twitter && (
                        <a className="hover:text-white transition-colors" href={siteConfig.social.twitter} target="_blank" rel="noreferrer">Twitter</a>
                    )}
                    {siteConfig.social.github && (
                        <a className="hover:text-white transition-colors" href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub</a>
                    )}
                    {siteConfig.social.linkedin && (
                        <a className="hover:text-white transition-colors" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    )}
                    {siteConfig.footer.links.map((link) => (
                        <a key={link.name} className="hover:text-white transition-colors" href={link.href}>{link.name}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

/**
 * Footer — renders either the expanded or minimal variant
 * based on `siteConfig.footerVariant` in /data/site.ts.
 */
export function Footer() {
    if (siteConfig.footerVariant === "minimal") {
        return <MinimalFooter />;
    }
    return <ExpandedFooter />;
}
