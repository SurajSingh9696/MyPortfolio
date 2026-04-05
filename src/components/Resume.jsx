"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Eye, FolderOpen, Code2, Award } from "lucide-react";
import Tilt from "react-parallax-tilt";
import SectionHeader from "./SectionHeader";

const stats = [
    { icon: FolderOpen, value: "10+", label: "Projects", color: "#a78bfa", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.3)" },
    { icon: Code2,       value: "12+", label: "Technologies", color: "#22d3ee", bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.3)" },
    { icon: Award,       value: "8+",  label: "Certifications", color: "#f472b6", bg: "rgba(244,114,182,0.1)", border: "rgba(244,114,182,0.3)" },
];

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Suraj_Singh_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleView = () => {
        window.open("/resume.pdf", "_blank");
    };

    return (
        <div id="resume" className="relative py-24 px-6 md:px-20 text-white overflow-hidden">

            {/* Background blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/6 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* ── Section Header ── */}
                <div className="text-center mb-14">
                    <SectionHeader
                        label="Resume"
                        heading="Download My Resume"
                        sub="Get a comprehensive overview of my skills, experience, and achievements in a professionally formatted document."
                        variant="purple"
                    />
                </div>

                {/* ── Resume Card ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                >
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.15}
                        className="w-full max-w-2xl"
                        perspective={1200}
                        scale={1.02}
                    >
                        <div
                            className="relative rounded-3xl p-8 md:p-12 border border-purple-500/25 shadow-2xl group transition-all duration-300 hover:border-purple-400/40"
                            style={{ background: "linear-gradient(145deg, #121230, #0e0e22)" }}
                        >
                            {/* Sparkle top-right */}
                            <div className="absolute top-5 right-6 text-purple-400/50 group-hover:text-purple-400 transition-opacity">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z" />
                                </svg>
                            </div>

                            {/* Icon & Name */}
                            <div className="flex flex-col items-center mb-8">
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 border border-purple-500/25 group-hover:scale-105 transition-transform duration-300"
                                    style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(34,211,238,0.12))" }}
                                >
                                    <FileText className="text-purple-300" size={40} strokeWidth={1.5} />
                                </div>
                                <h3
                                    className="text-2xl md:text-3xl font-bold text-white mb-1"
                                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                                >
                                    Suraj Singh
                                </h3>
                                <p
                                    className="text-purple-300/80 font-medium text-base"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    Full-Stack Developer & AI Enthusiast
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {stats.map(({ icon: Icon, value, label, color, bg, border }) => (
                                    <div
                                        key={label}
                                        className="flex flex-col items-center p-4 rounded-xl border"
                                        style={{ background: bg, borderColor: border }}
                                    >
                                        <Icon size={18} style={{ color }} className="mb-2" />
                                        <div
                                            className="text-2xl font-bold mb-0.5"
                                            style={{ color, fontFamily: "var(--font-space-grotesk)" }}
                                        >
                                            {value}
                                        </div>
                                        <div
                                            className="text-[11px] text-gray-400 text-center"
                                            style={{ fontFamily: "var(--font-inter)" }}
                                        >
                                            {label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={handleDownload}
                                    className="relative flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden group/btn"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover/btn:from-purple-500 group-hover/btn:to-cyan-500 transition-all duration-300" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Download size={18} className="group-hover/btn:animate-bounce" />
                                        Download Resume
                                    </span>
                                </button>

                                <button
                                    onClick={handleView}
                                    className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-purple-300 text-sm border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-950/30 hover:text-white transition-all duration-300"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    <Eye size={18} />
                                    View Online
                                </button>
                            </div>

                            <p
                                className="text-center text-[11px] text-gray-600 mt-6"
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                                {" · "}Available in PDF · ATS-optimized
                            </p>
                        </div>
                    </Tilt>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;
