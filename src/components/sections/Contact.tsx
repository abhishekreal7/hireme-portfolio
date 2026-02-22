"use client";

import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Github, Twitter, Linkedin, Dribbble, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <Section id="contact" className="bg-muted/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            {siteConfig.contact.heading}
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 max-w-md">
                            {siteConfig.contact.subtitle}
                        </p>

                        <div className="flex flex-col gap-6">
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="inline-flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors w-fit"
                            >
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                                    <Mail size={20} />
                                </div>
                                {siteConfig.email}
                            </a>

                            <div className="flex gap-4 mt-4">
                                {siteConfig.social.github && (
                                    <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                                        <Github size={20} />
                                    </a>
                                )}
                                {siteConfig.social.twitter && (
                                    <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                                        <Twitter size={20} />
                                    </a>
                                )}
                                {siteConfig.social.linkedin && (
                                    <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                                        <Linkedin size={20} />
                                    </a>
                                )}
                                {siteConfig.social.dribbble && (
                                    <a href={siteConfig.social.dribbble} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                                        <Dribbble size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="bg-background/80 backdrop-blur-md p-8 rounded-3xl border border-border/50 shadow-sm relative overflow-hidden">
                            {/* Form glowing accent */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />

                            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/20" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/20" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/20" />
                                </div>

                                <Button type="submit" size="lg" className="w-full rounded-xl bg-white text-black hover:bg-white/90 font-medium">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
