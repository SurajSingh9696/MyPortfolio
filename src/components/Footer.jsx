"use client";

import React from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const navLinks = [
    { label: "About",          href: "#about" },
    { label: "Skills",         href: "#skills" },
    { label: "Experience",     href: "#experience" },
    { label: "Projects",       href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Resume",         href: "#resume" },
];

const socials = [
    {
        icon: Github,
        href: "https://github.com/SurajSingh9696",
        label: "GitHub",
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/suraj-singh-070a73213/",
        label: "LinkedIn",
    },
];

const Footer = () => {
    return (
        <footer id="connect" className="relative py-20 px-6 md:px-20 overflow-hidden" style={{ background: "#020210" }}>

            {/* Top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-purple-700/50 to-transparent" />

            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-800/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* ── Main Row ── */}
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-14">

                    {/* ── Left: Branding + CTA ── */}
                    <div className="flex flex-col gap-5 max-w-sm">
                        <div>
                            <span
                                className="text-2xl font-bold tracking-tight"
                                style={{ fontFamily: "var(--font-space-grotesk)" }}
                            >
                                <span className="text-white">Suraj</span>
                                <span
                                    style={{
                                        background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    {" "}Singh
                                </span>
                            </span>
                        </div>

                        <h2
                            className="text-3xl font-bold text-white leading-tight"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                            Let&apos;s Build Something{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #a78bfa, #f472b6)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Amazing
                            </span>{" "}
                            Together.
                        </h2>

                        <p
                            className="text-gray-400 text-sm leading-relaxed"
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            I&apos;m currently open to new opportunities. My inbox is always open —
                            whether for a project, a question, or just a hello.
                        </p>

                        <a
                            href="mailto:singhbb954@gmail.com"
                            className="group inline-flex items-center gap-3 mt-1"
                        >
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-purple-700/40 bg-purple-950/30 text-purple-400 group-hover:bg-purple-800/40 group-hover:text-white group-hover:border-purple-500/60 transition-all duration-300">
                                <Mail size={18} />
                            </div>
                            <span
                                className="text-purple-400 group-hover:text-cyan-400 font-semibold text-sm transition-colors"
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                singhbb954@gmail.com
                            </span>
                            <ArrowUpRight
                                size={14}
                                className="text-purple-500 group-hover:text-cyan-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </a>
                    </div>

                    {/* ── Right: Nav Links ── */}
                    <div className="flex flex-col gap-4">
                        <p
                            className="text-[11px] font-bold uppercase tracking-widest text-gray-600"
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            Quick Links
                        </p>
                        <div className="grid grid-cols-2 gap-x-16 gap-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-gray-400 hover:text-purple-300 transition-colors font-medium"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Divider ── */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-900/40 to-transparent mb-8" />

                {/* ── Bottom Row ── */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                    {/* Copyright */}
                    <p
                        className="text-xs text-gray-600 font-medium"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        © {new Date().getFullYear()} · Designed & Built by{" "}
                        <span className="text-purple-400 font-semibold">Suraj Singh</span>
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 rounded-full flex items-center justify-center border border-purple-800/25 bg-purple-950/20 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-800/30 transition-all duration-300 hover:scale-105"
                            >
                                <Icon size={17} />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
