"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const socials = [
    {
        name: "LinkedIn",
        src: "/linkedin.svg",
        href: "https://www.linkedin.com/in/suraj-singh-070a73213/",
    },
    {
        name: "GitHub",
        src: "/github.svg",
        href: "https://github.com/SurajSingh9696",
    },
];

const navLinks = ["About", "Skills", "Experience", "Projects", "Certifications", "Resume", "Connect"];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("about");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navLinks.map((l) => l.toLowerCase());
            let current = "about";
            for (let id of sections) {
                const section = document.getElementById(id);
                if (section && window.scrollY >= section.offsetTop - 120) {
                    current = id;
                }
            }
            setActiveLink(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-2xl bg-[#030014cc] shadow-lg shadow-black/30 border-b border-purple-900/30"
                    : "backdrop-blur-md bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 h-[66px] flex items-center justify-between">

                {/* ── Logo ── */}
                <a
                    href="#about-me"
                    className="group flex items-center gap-2"
                    aria-label="Go to top"
                >
                    <span
                        className="text-lg md:text-xl font-bold tracking-tight"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                        <span className="text-white group-hover:text-purple-300 transition-colors duration-300">Suraj</span>
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
                </a>

                {/* ── Desktop Nav ── */}
                <nav className="hidden md:flex items-center text-sm font-medium bg-[#10102580] border border-purple-800/30 px-6 py-2 rounded-full shadow-inner gap-1 backdrop-blur-sm">
                    {navLinks.map((link) => {
                        const id = link.toLowerCase();
                        const isActive = activeLink === id;
                        return (
                            <a
                                key={link}
                                href={`#${id}`}
                                className={`relative px-3 lg:px-4 py-1.5 rounded-full transition-all duration-250 text-[13px] font-semibold ${
                                    isActive
                                        ? "text-white"
                                        : "text-gray-400 hover:text-gray-200"
                                }`}
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/40 to-indigo-600/30 border border-purple-500/40"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10">{link}</span>
                            </a>
                        );
                    })}
                </nav>

                {/* ── Social Icons ── */}
                <div className="hidden md:flex gap-3 items-center">
                    {socials.map((s) => (
                        <a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit my ${s.name} profile`}
                            className="w-9 h-9 rounded-full flex items-center justify-center border border-purple-800/30 bg-purple-950/20 hover:bg-purple-800/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <Image src={s.src} alt={s.name} width={18} height={18} />
                        </a>
                    ))}
                </div>

                {/* ── Hamburger ── */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-purple-800/30 bg-purple-950/20 text-gray-300"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {menuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />}
                    </svg>
                </button>
            </div>

            {/* ── Mobile Menu ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-[#08081a] border-t border-purple-900/30 px-6 py-5 space-y-1"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-colors ${
                                    activeLink === link.toLowerCase()
                                        ? "text-purple-300 bg-purple-900/20"
                                        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                                }`}
                            >
                                {activeLink === link.toLowerCase() && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
                                )}
                                {link}
                            </a>
                        ))}
                        <div className="flex gap-3 pt-4 px-3">
                            {socials.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full flex items-center justify-center border border-purple-800/30 bg-purple-950/20"
                                >
                                    <Image src={s.src} alt={s.name} width={18} height={18} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
