"use client";

import React from "react";
import Image from "next/image";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Full Stack Developer",
        company: "Tech Innovators Inc.",
        date: "Jan 2024 - Present",
        location: "San Francisco, CA",
        description: "Leading development of scalable web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved application performance by 40%. Mentoring junior developers and conducting code reviews.",
        technologies: ["React.js", "Node.js", "MongoDB", "Docker", "AWS"],
        icon: "/logos/company1.webp", // Replace with your company logo
        iconBg: "#22d3ee", // Cyan background
    },
    {
        title: "Frontend Developer Intern",
        company: "Digital Solutions Ltd.",
        date: "Jun 2023 - Dec 2023",
        location: "New York, NY",
        description: "Developed responsive web interfaces and collaborated with design teams to implement pixel-perfect UI components. Optimized application load times by 35% through code splitting and lazy loading.",
        technologies: ["React.js", "TailwindCSS", "JavaScript", "Git"],
        icon: "/logos/company2.webp", // Replace with your company logo
        iconBg: "#a855f7", // Purple background
    },
    {
        title: "Web Development Volunteer",
        company: "Code for Good NGO",
        date: "Mar 2023 - May 2023",
        location: "Remote",
        description: "Built and maintained websites for non-profit organizations. Mentored junior developers and contributed to open-source projects. Helped organizations increase their online presence by 60%.",
        technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
        icon: "/logos/volunteer.webp", // Replace with your organization logo
        iconBg: "#ec4899", // Pink background
    },
    {
        title: "Backend Developer",
        company: "StartupHub",
        date: "Sep 2022 - Feb 2023",
        location: "Austin, TX",
        description: "Designed and implemented RESTful APIs for mobile and web applications. Managed database architecture and implemented authentication systems using JWT. Reduced API response time by 50%.",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
        icon: "/logos/startup.webp", // Replace with your company logo
        iconBg: "#3b82f6", // Blue background
    },
];

const ExperienceTimeline = () => {
    return (
        <div id="experience" className="py-20 px-6 md:px-20 text-white bg-transparent">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block mb-3">
                        Work Experience
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My professional journey building innovative solutions and contributing to impactful projects.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <VerticalTimeline animate={true} lineColor="#312e81">
                    {experiences.map((exp, idx) => (
                        <VerticalTimelineElement
                            key={idx}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "rgba(17, 17, 34, 0.8)",
                                color: "#fff",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                                border: "1px solid rgba(34, 211, 238, 0.3)",
                                backdropFilter: "blur(10px)",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid rgba(34, 211, 238, 0.3)"
                            }}
                            date={exp.date}
                            iconStyle={{
                                background: exp.iconBg,
                                color: "#fff",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: `0 0 20px ${exp.iconBg}60`,
                            }}
                            icon={
                                <Briefcase size={24} />
                                // Alternative: Use company logo
                                // <Image
                                //     src={exp.icon}
                                //     alt={exp.company}
                                //     width={40}
                                //     height={40}
                                //     className="object-contain rounded-full"
                                // />
                            }
                        >
                            {/* Job Title */}
                            <h3 className="vertical-timeline-element-title text-xl font-bold text-white">
                                {exp.title}
                            </h3>

                            {/* Company Name */}
                            <h4 className="vertical-timeline-element-subtitle text-cyan-300 font-semibold mt-1">
                                {exp.company}
                            </h4>

                            {/* Location */}
                            <p className="flex items-center gap-1.5 text-sm text-gray-400 mt-2">
                                <MapPin size={14} /> {exp.location}
                            </p>

                            {/* Description */}
                            <p className="text-gray-300 mt-4 leading-relaxed text-sm">
                                {exp.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[10px] px-2.5 py-1 rounded-md bg-cyan-900/20 border border-cyan-800/30 text-cyan-300 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default ExperienceTimeline;
