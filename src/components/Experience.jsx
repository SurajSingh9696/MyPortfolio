"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
    {
        title: "AI/ML Developer (Intern)",
        company: "Innovexis Technologies",
        location: "Remote",
        type: "Internship",
        duration: "Feb 2026 – May 2026",
        description: "Developed and deployed machine learning models for predictive analytics in healthcare. Collaborated with cross-functional teams to integrate AI solutions into existing platforms, resulting in a 20% improvement in diagnostic accuracy.",
        technologies: ["Python", "TensorFlow", "scikit-learn", "AWS SageMaker", "Docker"],
        tags: ["Internship", "Remote"],
        accentColor: "#6abb23",
    },
    {
        title: "Python Full-Stack Intern",
        company: "ItVedant Technologies Private Ltd.",
        location: "Remote",
        type: "Internship",
        duration: "Feb 2026 – Apr 2026",
        description: "Contributed to the development of a full-stack web application using Python and Django. Implemented RESTful APIs, designed responsive frontend interfaces, and optimized database queries, leading to a 30% reduction in page load times.",
        technologies: ["Python", "Django", "React.js", "TailwindCSS", "JavaScript", "Git"],
        tags: ["Internship", "Remote"],
        accentColor: "#22d3ee",
    },
];

const Experience = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const allTypes = ["All", ...new Set(experiences.flatMap(exp => exp.tags))];
    const filteredExperiences = experiences.filter(
        (exp) => activeFilter === "All" || exp.tags.includes(activeFilter)
    );

    return (
        <div id="experience" className="relative py-24 px-6 md:px-20 text-white overflow-hidden">

            {/* Ambient glow */}
            <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-purple-700/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── Section Header ── */}
                <SectionHeader
                    label="Career"
                    heading="Work Experience"
                    sub="My professional journey and contributions to the tech world."
                    variant="cyan"
                />

                {/* ── Filter Chips ── */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
                    {allTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveFilter(type)}
                            className={`px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase transition-all duration-300 border ${
                                activeFilter === type
                                    ? "bg-cyan-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/40"
                                    : "bg-[#1a1a2d] border-cyan-900/40 text-gray-500 hover:text-white"
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* ── Experience Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <AnimatePresence mode="popLayout">
                        {filteredExperiences.map((exp, index) => (
                            <motion.div
                                key={exp.title + index}
                                layout
                                initial={{ opacity: 0, scale: 0.94 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.88 }}
                                transition={{ duration: 0.28, delay: index * 0.07 }}
                                className="h-full"
                            >
                                <Tilt
                                    glareEnable={true}
                                    glareMaxOpacity={0.1}
                                    className="h-full rounded-2xl"
                                    perspective={1200}
                                    scale={1.02}
                                >
                                    <div
                                        className="relative h-full flex flex-col rounded-2xl overflow-hidden border border-purple-900/20 group hover:border-purple-500/25 transition-all duration-300"
                                        style={{ background: "linear-gradient(145deg, #111128, #0d0d20)" }}
                                    >
                                        {/* Colored top accent bar */}
                                        <div
                                            className="h-[3px] w-full"
                                            style={{ background: `linear-gradient(90deg, ${exp.accentColor}aa, transparent)` }}
                                        />

                                        <div className="p-6 flex flex-col flex-grow">
                                            {/* Header row */}
                                            <div className="flex items-start justify-between mb-5">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110"
                                                    style={{
                                                        background: `${exp.accentColor}18`,
                                                        borderColor: `${exp.accentColor}44`,
                                                    }}
                                                >
                                                    <Building2 size={22} style={{ color: exp.accentColor }} />
                                                </div>
                                                <span
                                                    className="text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest border"
                                                    style={{
                                                        fontFamily: "var(--font-inter)",
                                                        color: exp.accentColor,
                                                        background: `${exp.accentColor}15`,
                                                        borderColor: `${exp.accentColor}40`,
                                                    }}
                                                >
                                                    {exp.type}
                                                </span>
                                            </div>

                                            {/* Title & Company */}
                                            <h3
                                                className="text-lg font-bold mb-1 group-hover:text-purple-300 transition-colors"
                                                style={{ fontFamily: "var(--font-space-grotesk)" }}
                                            >
                                                {exp.title}
                                            </h3>
                                            <p
                                                className="text-sm font-semibold mb-4 flex items-center gap-1.5"
                                                style={{ color: exp.accentColor, fontFamily: "var(--font-inter)" }}
                                            >
                                                <Briefcase size={12} /> {exp.company}
                                            </p>

                                            {/* Duration & Location */}
                                            <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500" style={{ fontFamily: "var(--font-inter)" }}>
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar size={12} className="text-cyan-500" />
                                                    {exp.duration}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin size={12} className="text-purple-400" />
                                                    {exp.location}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow" style={{ fontFamily: "var(--font-inter)" }}>
                                                {exp.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="border-t border-white/5 pt-4 mt-auto flex flex-wrap gap-2">
                                                {exp.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="tech-tag"
                                                        style={{
                                                            fontFamily: "var(--font-inter)",
                                                            background: `${exp.accentColor}14`,
                                                            color: exp.accentColor,
                                                            border: `1px solid ${exp.accentColor}35`,
                                                        }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredExperiences.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                        <p className="text-gray-500 text-base" style={{ fontFamily: "var(--font-inter)" }}>
                            No experiences found for this filter.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Experience;
