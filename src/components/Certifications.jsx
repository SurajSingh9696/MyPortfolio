"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const allCerts = [
    {
        name: "5-Day AI Agents Intensive Course with Google",
        org: "Kaggle",
        year: "Dec 2025",
        desc: "Hands-on training in AI agents with practical projects.",
        tags: ["Certification", "AI"],
        link: "https://www.kaggle.com/certification/badges/surajsingh9696/105",
        color: "#a78bfa",
    },
    {
        name: "Python Coder Certification",
        org: "Kaggle",
        year: "Nov 2025",
        desc: "Verified certification demonstrating proficiency in Python programming.",
        tags: ["Certification", "Python"],
        link: "https://www.kaggle.com/certification/badges/surajsingh9696/30",
        color: "#fbbf24",
    },
    {
        name: "CS50x by Harvard University",
        org: "Harvard University",
        year: "Nov 2024",
        desc: "Comprehensive introduction to computer science and programming.",
        tags: ["Certification", "Harvard"],
        link: "https://certificates.cs50.io/20f51df4-c9fd-45fa-b70a-39d4a0f8bbe9.pdf?size=letter",
        color: "#f87171",
    },
    {
        name: "CS50P: Intro to Programming with Python",
        org: "Harvard University",
        year: "Dec 2024",
        desc: "Introduction to programming with Python by Harvard.",
        tags: ["Certification", "Harvard", "Python"],
        link: "https://certificates.cs50.io/35cd9cb6-1deb-445b-b06d-a19b75ea9a1b.pdf?size=letter",
        color: "#fb923c",
    },
    {
        name: "ByteBattle 2024",
        org: "College",
        year: "Sep 2024",
        desc: "DSA Competition – ranked among top performers.",
        tags: ["Competition", "College", "DSA"],
        link: "https://drive.google.com/file/d/1PBD6rJwjj77yo1P3Z_6g2uxb6232vwAa/view?usp=drive_link",
        color: "#34d399",
    },
    {
        name: "DataChat Workshop on RAG",
        org: "GDG on Campus",
        year: "Sep 2024",
        desc: "Retrieval-Augmented Generation (RAG) Workshop.",
        tags: ["Workshop", "College", "RAG"],
        link: "https://drive.google.com/file/d/18njch1JbiS2Q2lvJlLzhpZ1w0PQM_yIx/view?usp=drive_link",
        color: "#22d3ee",
    },
    {
        name: "Excel: Beginner to Expert",
        org: "Analytics Vidhya",
        year: "Dec 2025",
        desc: "Comprehensive Excel training from beginner to expert level.",
        tags: ["Certification", "Excel"],
        link: "https://courses.analyticsvidhya.com/certificates/a18v9mptkg",
        color: "#4ade80",
    },
    {
        name: "GenAI for Everyone",
        org: "Analytics Vidhya",
        year: "Dec 2025",
        desc: "Comprehensive course on Generative AI technologies and applications.",
        tags: ["Certification", "GenAI"],
        link: "https://courses.analyticsvidhya.com/certificates/zhqbigmrni",
        color: "#818cf8",
    },
    {
        name: "NotebookLM Essentials to Pro",
        org: "Analytics Vidhya",
        year: "Dec 2025",
        desc: "In-depth training on NotebookLM from basics to advanced applications.",
        tags: ["Certification", "NotebookLM"],
        link: "https://courses.analyticsvidhya.com/certificates/qjuct1hmtk",
        color: "#e879f9",
    },
    {
        name: "Gemini 3: The AI That Thinks, Sees and Creates",
        org: "Analytics Vidhya",
        year: "Dec 2025",
        desc: "Comprehensive course on Google's Gemini 3 AI model and its capabilities.",
        tags: ["Certification", "Gemini 3"],
        link: "https://courses.analyticsvidhya.com/certificates/rxwqff9j1f",
        color: "#38bdf8",
    },
];

const Certifications = () => {
    const [activeTab, setActiveTab] = useState("All");
    const allCategories = ["All", ...new Set(allCerts.flatMap(cert => cert.tags))];
    const filtered = allCerts.filter(
        (c) => activeTab === "All" || c.tags.includes(activeTab)
    );

    return (
        <div id="certifications" className="relative py-24 px-6 md:px-20 text-white overflow-hidden">

            {/* Ambient glow */}
            <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-purple-700/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* ── Section Header ── */}
                <SectionHeader
                    label="Achievements"
                    heading="Milestones & Badges"
                    sub="Verified accomplishments and specializations."
                    variant="purple"
                />

                {/* ── Filter Chips ── */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2">
                    {allCategories.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase transition-all duration-300 border ${
                                activeTab === tab
                                    ? "bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/40"
                                    : "bg-[#1a1a2d] border-purple-900/40 text-gray-500 hover:text-white"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ── Cert Cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((cert, index) => (
                            <motion.div
                                key={cert.name + index}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.88 }}
                                transition={{ duration: 0.25, delay: index * 0.04 }}
                            >
                                <div
                                    className="relative h-full flex flex-col rounded-2xl overflow-hidden border border-purple-900/15 hover:border-purple-500/30 transition-all duration-300 group"
                                    style={{ background: "linear-gradient(145deg, #111128, #0d0d20)" }}
                                >
                                    {/* Colored top accent bar */}
                                    <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${cert.color}cc, transparent)` }} />

                                    <div className="p-5 flex flex-col flex-grow">
                                        {/* Header row */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div
                                                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                                                style={{ background: `${cert.color}18`, borderColor: `${cert.color}44` }}
                                            >
                                                <Award size={18} style={{ color: cert.color }} />
                                            </div>
                                            <span
                                                className="text-[10px] px-2.5 py-1 rounded-full font-bold"
                                                style={{
                                                    fontFamily: "var(--font-inter)",
                                                    background: "rgba(139, 92, 246, 0.12)",
                                                    color: "#c4b5fd",
                                                    border: "1px solid rgba(139, 92, 246, 0.3)",
                                                }}
                                            >
                                                {cert.year}
                                            </span>
                                        </div>

                                        {/* Name & Org */}
                                        <h4
                                            className="text-base font-bold mb-1 leading-snug group-hover:text-purple-200 transition-colors"
                                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                                        >
                                            {cert.name}
                                        </h4>
                                        <p
                                            className="text-xs font-semibold mb-3"
                                            style={{ color: cert.color, fontFamily: "var(--font-inter)" }}
                                        >
                                            {cert.org}
                                        </p>
                                        <p
                                            className="text-gray-400 text-xs leading-relaxed flex-grow mb-4"
                                            style={{ fontFamily: "var(--font-inter)" }}
                                        >
                                            {cert.desc}
                                        </p>

                                        {/* Footer: tags + CTA */}
                                        <div className="border-t border-white/5 pt-4 mt-auto space-y-3">
                                            <div className="flex flex-wrap gap-1.5">
                                                {cert.tags.map((tag) => (
                                                    <span key={tag} className="tag-muted">{tag}</span>
                                                ))}
                                            </div>

                                            {cert.link && (
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-bold transition-all duration-200"
                                                    style={{
                                                        fontFamily: "var(--font-inter)",
                                                        background: `${cert.color}18`,
                                                        color: cert.color,
                                                        border: `1px solid ${cert.color}40`,
                                                    }}
                                                    onMouseEnter={e => { e.currentTarget.style.background = `${cert.color}30`; }}
                                                    onMouseLeave={e => { e.currentTarget.style.background = `${cert.color}18`; }}
                                                >
                                                    <ExternalLink size={12} />
                                                    View Certificate
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
