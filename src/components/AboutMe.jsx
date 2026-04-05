"use client";

import React from "react";
import Image from "next/image";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MapPin, GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const education = [
    {
        title: "B.Tech in Computer Science",
        institution: "Shri Ramswaroop Memorial College of Engineering and Management, Lucknow",
        date: "2024 – 2028",
        location: "Lucknow, India",
        icon: "/logos/srmcem.webp",
    },
    {
        title: "Intermediate · PCM · ISC",
        institution: "New Public College, Nilmatha",
        date: "2024",
        location: "Lucknow, India",
        icon: "/logos/npc.webp",
    },
    {
        title: "Matriculation · ICSE",
        institution: "New Public College, Nilmatha",
        date: "2022",
        location: "Lucknow, India",
        icon: "/logos/npc.webp",
    },
];

const AboutMe = () => {
    return (
        <div id="about" className="relative py-24 px-6 md:px-20 text-white overflow-hidden">

            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* ── Section Header ── */}
                <SectionHeader
                    label="About Me"
                    heading="My Journey"
                    sub="A web developer building modern, interactive, and efficient applications — powered by clean code and a growing passion for AI-driven solutions."
                    variant="purple"
                />

                {/* ── Education Timeline ── */}
                <section>
                    <div className="flex items-center justify-center gap-2 mb-12">
                        <GraduationCap className="text-cyan-400" size={20} />
                        <h3
                            className="text-xl font-semibold text-cyan-400 uppercase tracking-widest text-sm"
                            style={{ fontFamily: "var(--font-inter)", letterSpacing: "0.15em" }}
                        >
                            Education
                        </h3>
                    </div>

                    <VerticalTimeline animate={true} lineColor="rgba(139, 92, 246, 0.3)">
                        {education.map((item, idx) => (
                            <VerticalTimelineElement
                                key={idx}
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "linear-gradient(145deg, #111128, #0d0d20)",
                                    color: "#fff",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                                    border: "1px solid rgba(139, 92, 246, 0.2)",
                                    borderRadius: "1rem",
                                    backdropFilter: "blur(12px)",
                                }}
                                contentArrowStyle={{ borderRight: "7px solid rgba(139, 92, 246, 0.25)" }}
                                date={
                                    <span
                                        className="text-purple-400 font-semibold text-sm"
                                        style={{ fontFamily: "var(--font-inter)" }}
                                    >
                                        {item.date}
                                    </span>
                                }
                                iconStyle={{
                                    background: "#fff",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    overflow: "hidden",
                                    boxShadow: "0 0 0 3px rgba(139,92,246,0.3)",
                                }}
                                icon={
                                    <Image
                                        src={item.icon}
                                        alt={item.institution}
                                        width={52}
                                        height={52}
                                        className="p-1 object-contain"
                                    />
                                }
                            >
                                <h4
                                    className="text-lg font-bold text-white mb-1"
                                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                                >
                                    {item.title}
                                </h4>
                                <p
                                    className="text-purple-300 text-sm font-semibold mb-3"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    {item.institution}
                                </p>
                                <p className="flex items-center gap-1.5 text-xs text-gray-500 font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                                    <MapPin size={12} className="text-cyan-500" />
                                    {item.location}
                                </p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </section>
            </div>
        </div>
    );
};

export default AboutMe;
