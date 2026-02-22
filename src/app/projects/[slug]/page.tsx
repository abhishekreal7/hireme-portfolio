import projectsData from "@/data/projects.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from "lucide-react";

// Generate static params for all project slugs
export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.title} — Case Study`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <div className="min-h-screen bg-background-dark text-white font-[family-name:var(--font-sans)]">
            {/* Noise overlay */}
            <div className="noise-overlay" />

            {/* Back Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 ios-blur border-b border-white/[0.03]">
                <div className="container mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors font-medium"
                    >
                        <ArrowLeft size={16} />
                        Back to Projects
                    </Link>
                    <div className="flex items-center gap-6">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[11px] uppercase tracking-[0.2em] font-bold text-white flex items-center gap-2 hover:text-white/80 transition-colors"
                            >
                                Live Site
                                <ArrowUpRight size={14} />
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[11px] uppercase tracking-[0.2em] font-bold text-white flex items-center gap-2 hover:text-white/80 transition-colors"
                            >
                                Source
                                <ArrowUpRight size={14} />
                            </a>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Image */}
            <section className="pt-24">
                <div className="relative w-full aspect-[21/9] max-h-[600px] overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20" />
                </div>
            </section>

            {/* Project Info */}
            <section className="container mx-auto px-6 md:px-12 max-w-[1000px] py-16 md:py-24">
                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-white/30">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
                        <Calendar size={12} />
                        {project.year}
                    </span>
                    <span className="w-[1px] h-4 bg-white/10" />
                    <div className="flex items-center gap-2">
                        <Tag size={12} />
                        <span className="text-xs uppercase tracking-[0.3em]">
                            {project.tags.join(" · ")}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic tracking-tight mb-8 text-white">
                    {project.title}
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-16 max-w-3xl">
                    {project.longDescription || project.description}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/[0.05] mb-16" />

                {/* Features */}
                {project.features && project.features.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-10">
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl"
                                >
                                    <span className="text-[10px] font-bold text-white/30 mt-1 flex-shrink-0">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-white/60 text-sm font-light leading-relaxed">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tags */}
                <div className="mb-16">
                    <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6">
                        Technologies
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/50 border border-white/[0.08] rounded-full font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/[0.05]">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:bg-white/90 transition-colors"
                        >
                            View Live Site
                            <ArrowUpRight size={14} />
                        </a>
                    )}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/10 text-white text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:bg-white/[0.05] transition-colors"
                        >
                            View Source Code
                            <ArrowUpRight size={14} />
                        </a>
                    )}
                    <Link
                        href="/#projects"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white/50 text-xs uppercase tracking-[0.2em] font-medium hover:text-white transition-colors"
                    >
                        <ArrowLeft size={14} />
                        All Projects
                    </Link>
                </div>
            </section>
        </div>
    );
}
