"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { 
    SiReact, 
    SiNodedotjs, 
    SiMongodb, 
    SiTailwindcss, 
    SiJavascript, 
    SiFlask, 
    SiExpress, 
    SiJsonwebtokens, 
    SiNextdotjs, 
    SiMysql, 
    SiDocker, 
    SiPython 
} from "react-icons/si";

const skills = [
    { name: "React.js",    color: "#61dafb", bg: "#1e3a4a", icon: SiReact },
    { name: "Node.js",     color: "#68a063", bg: "#1a3020", icon: SiNodedotjs },
    { name: "MongoDB",     color: "#47a248", bg: "#192e1a", icon: SiMongodb },
    { name: "Tailwind",    color: "#38bdf8", bg: "#1a3040", icon: SiTailwindcss },
    { name: "JavaScript",  color: "#f7df1e", bg: "#332f00", icon: SiJavascript },
    { name: "Flask",       color: "#aac66e", bg: "#28301a", icon: SiFlask },
    { name: "Express",     color: "#c9c9c9", bg: "#252525", icon: SiExpress },
    { name: "JWT",         color: "#d63aff", bg: "#2e1a38", icon: SiJsonwebtokens },
    { name: "Next.js",     color: "#e2e8f0", bg: "#1c1c1c", icon: SiNextdotjs },
    { name: "MySQL",       color: "#5b8fd4", bg: "#1a2340", icon: SiMysql },
    { name: "Docker",      color: "#2496ed", bg: "#152438", icon: SiDocker },
    { name: "Python",      color: "#ffd43b", bg: "#2e2a00", icon: SiPython },
];

const Skills = () => {
    return (
        <div id="skills" className="relative py-24 px-6 md:px-20 text-white overflow-hidden">

            {/* Ambient glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-700/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* ── Section Header ── */}
                <SectionHeader
                    label="Tech Stack"
                    heading="Technical Skills"
                    sub="Technologies I use to bring ideas to life."
                    variant="cyan"
                />

                {/* ── Skills Grid ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                        >
                            <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.08}
                                className="rounded-2xl cursor-pointer group"
                                perspective={900}
                                scale={1.06}
                            >
                                <div
                                    className="relative flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-300"
                                    style={{
                                        background: "linear-gradient(145deg, #111128, #0d0d20)",
                                        borderColor: "rgba(139, 92, 246, 0.15)",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = `${skill.color}55`}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.15)"}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center shadow-inner"
                                        style={{
                                            backgroundColor: skill.bg,
                                            border: `1.5px solid ${skill.color}44`,
                                            color: skill.color,
                                        }}
                                    >
                                        <skill.icon size={24} />
                                    </div>

                                    {/* Skill name */}
                                    <span
                                        className="text-[11px] font-bold text-center text-gray-300 group-hover:text-white transition-colors leading-tight"
                                        style={{ fontFamily: "var(--font-inter)", letterSpacing: "0.04em" }}
                                    >
                                        {skill.name}
                                    </span>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
