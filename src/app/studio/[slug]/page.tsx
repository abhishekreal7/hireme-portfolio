import { studioData } from "@/data/studio";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Tag } from "lucide-react";

// Generate static params for all case study slugs
export function generateStaticParams() {
    return studioData.caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = studioData.caseStudies.find((s) => s.slug === slug);
    if (!study) return { title: "Case Study Not Found" };
    return {
        title: `${study.title} — Studio Case Study`,
        description: study.summary,
    };
}

export default async function StudioCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = studioData.caseStudies.find((s) => s.slug === slug);
    if (!study) notFound();

    return (
        <div className="min-h-screen bg-background-dark text-white font-[family-name:var(--font-sans)]">
            <div className="noise-overlay" />

            {/* Back Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 ios-blur border-b border-white/[0.03]">
                <div className="container mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
                    <Link
                        href="/studio"
                        className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors font-medium"
                    >
                        <ArrowLeft size={16} />
                        Back to Studio
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24">
                <div className="relative w-full aspect-[21/9] max-h-[700px] overflow-hidden">
                    <Image
                        src={study.thumbnail}
                        alt={study.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                </div>
            </section>

            {/* Content Container */}
            <section className="container mx-auto px-6 md:px-12 max-w-[1000px] py-16 md:py-24 relative -mt-32">
                <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8 md:p-16 w-full shadow-2xl mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    {/* Meta Row */}
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-white/30">
                        <div className="flex items-center gap-2">
                            <Tag size={12} />
                            <span className="text-xs uppercase tracking-[0.3em]">
                                {study.tags.join(" · ")}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic tracking-tight mb-8 text-white relative z-10">
                        {study.title}
                    </h1>

                    {/* Summary */}
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-3xl relative z-10">
                        {study.summary}
                    </p>
                </div>

                {/* Editorial Body */}
                <div className="space-y-24">

                    {/* Overview & Problem */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6">Overview</h2>
                            <p className="text-white/70 text-lg font-light leading-relaxed">{study.overview}</p>
                        </div>
                        <div>
                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6">The Challenge</h2>
                            <p className="text-white/70 text-lg font-light leading-relaxed">{study.problem}</p>
                        </div>
                    </div>

                    {/* Approach */}
                    <div>
                        <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6">Approach & Process</h2>
                        <h3 className="text-2xl md:text-3xl font-serif italic text-white/90 mb-6 max-w-3xl leading-snug">
                            {study.approach}
                        </h3>
                    </div>

                    {/* Process Visuals */}
                    {study.processVisuals && study.processVisuals.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                            {study.processVisuals.map((visual, index) => (
                                <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05]">
                                    <Image
                                        src={visual}
                                        alt={`Process visual ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Result */}
                    <div className="border-t border-white/[0.05] pt-16">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                            <div className="md:col-span-4">
                                <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6">The Result</h2>
                            </div>
                            <div className="md:col-span-8">
                                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12">
                                    {study.result}
                                </p>

                                <div>
                                    <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-6">Tech Stack & Tools</h2>
                                    <div className="flex flex-wrap gap-3">
                                        {study.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/50 border border-white/[0.08] rounded-full font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
