"use client";

import React, { useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

const allProjects = [
    {
        "name": "WorkivaX - Modern Job Portal Platform",
        "desc": "Full-featured job portal with applicant and employer dashboards, advanced job filtering, application tracking, rich text job posting, and secure authentication.",
        "tags": ["Next.js", "TypeScript", "MySQL", "Drizzle ORM", "TailwindCSS", "Argon2", "UploadThing"],
        "link": "https://workiva-jobs.vercel.app/",
        "github": "https://github.com/SurajSingh9696/Workiva",
        "image": "/projects/workivax.png"
    },

    {
        "name": "Shopelp - Inventory and Profit Management",
        "desc": "Advanced inventory platform with packet-based stock modeling, purchase tracking, profit analytics, low-stock alerts, and PDF reporting.",
        "tags": ["Next.js", "MongoDB", "Mongoose", "JWT", "TailwindCSS", "Framer Motion", "Recharts"],
        "link": "https://shopelp.vercel.app/",
        "github": "https://github.com/SurajSingh9696/Shopelp",
        "image": "/projects/shopelp.png"
    },

    {
        "name": "GhostTalk - Temporary Real-Time Chat Application",
        "desc": "Real-time chat platform with room-based messaging, OTP verification, secure auth flow, auto-room cleanup logic, and Socket.IO with HTTP fallback.",
        "tags": ["Next.js", "Socket.IO", "Node.js", "MongoDB", "JWT", "TailwindCSS", "Resend"],
        "link": "https://ghosttalkchat.vercel.app/",
        "github": "https://github.com/SurajSingh9696/GhostTalk",
        "image": "/projects/ghosttalk.png"
    },

    {
        "name": "Campus Lost and Found Portal",
        "desc": "React with JWT authentication for secure user access. Node.js and Express backend with MongoDB for data storage. Features include item reporting and searching.",
        "tags": ["React.js", "MongoDB", "JWT", "Node.js", "Express", "TailwindCSS"],
        "link": "https://campus-lost-and-found-site.vercel.app/",
        "github": "https://github.com/SurajSingh9696/CampusLostAndFound",
        "image": "/projects/campuslostandfound.png"
    },

    {
        "name": "ProjectHub - Project Management Application",
        "desc": "Production-ready project management app with authentication, dashboard workflows, team collaboration features, and modern responsive UI.",
        "tags": ["Next.js", "MongoDB", "Authentication", "TailwindCSS", "File Upload", "Theme Support"],
        "link": "https://projecthubmgmt.vercel.app/",
        "github": "https://github.com/SurajSingh9696/ProjectHub",
        "image": "/projects/ProjectHub.png"
    },

    {
        "name": "Pulse - SaaS Dashboard Solution",
        "desc": "SaaS dashboard with role-based authentication, admin analytics, API-driven modules, and business-focused dashboard design.",
        "tags": ["Next.js", "React.js", "SaaS", "JWT", "Chart.js", "TailwindCSS"],
        "link": "https://pulse-saas-dashboard.vercel.app/",
        "github": "https://github.com/SurajSingh9696/Pulse-SaaS-Dashboard",
        "image": "/projects/pulse.png"
    },

    {
        "name": "My Personal Portfolio",
        "desc": "Personal portfolio website for showcasing projects, skills, and visual identity with responsive design and optimized media.",
        "tags": ["Next.js", "React.js", "TailwindCSS", "Portfolio"],
        "link": "https://suraj-portfolio-site.vercel.app/",
        "github": "https://github.com/SurajSingh9696/MyPortfolio",
        "image": "/projects/portfolio.png"
    },

    {
        "name": "Campus Buy and Sell",
        "desc": "Workspace reserved for campus marketplace project (folder present, implementation not added yet).",
        "tags": ["Next.js", "Marketplace"],
        "link": "N/A",
        "github": "N/A",
        "image": "/projects/campus-buy-sell.png"
    },

    {
        "name": "HopeForward - Nonprofit Organization Website",
        "desc": "Informational website for a nonprofit organization with sections for mission, projects, team, and contact information. Built with Next.js and TailwindCSS for a modern and responsive design.",
        "tags": ["Django", "TailwindCSS", "MySQL"],
        "link": "https://hopeforward-ngo-site.vercel.app/",
        "github": "https://github.com/SurajSingh9696/ItVedant-Internship",
        "image": "/projects/hopeforward.png"
    },

    {
        "name": "MediaLoader",
        "desc": "Next.js media-focused application workspace with app and reusable components architecture.",
        "tags": ["Next.js", "TypeScript", "TailwindCSS"],
        "link": "N/A",
        "github": "N/A",
        "image": "/projects/medialoader.png"
    },

    {
        "name": "KeyFort - Modern Password Manager",
        "desc": "Secure password vault with encrypted credential storage, password generator, security scoring, categories, activity logs, and production-grade authentication.",
        "tags": ["Next.js", "TypeScript", "MongoDB", "Prisma", "NextAuth", "TailwindCSS", "Framer Motion"],
        "link": "https://key-fort.vercel.app/",
        "github": "https://github.com/SurajSingh9696/KeyFort",
        "image": "/projects/key-fort.png"
    },

    {
        "name": "ShopEase - E-Commerce Platform",
        "desc": "Production-ready e-commerce application with shopping, cart, checkout, admin workflows, and role-based JWT authentication.",
        "tags": ["React.js", "Node.js", "Express", "MongoDB", "JWT", "E-Commerce"],
        "link": "https://shopease-ecom-site.vercel.app/",
        "github": "https://github.com/SurajSingh9696/React-NodeJS-Projects/tree/main/09-ShopEase",
        "image": "/projects/shopease.png"
    },

    {
        "name": "CrackIt - Interview Preparation Platform",
        "desc": "AI-powered interview preparation system with resume analysis, role-based Q and A, and feedback loops.",
        "tags": ["React.js", "Node.js", "Express", "AI", "Analytics"],
        "link": "https://crackit-interview-prepapp.vercel.app/",
        "github": "https://github.com/SurajSingh9696/React-NodeJS-Projects/tree/main/11-CrackIt",
        "image": "/projects/ai-smart-interview-prep.png"
    },


    {
        "name": "Univert - Universal Converter",
        "desc": "Universal File Converter application with support for multiple file types, real-time conversion workflows, and clean frontend-backend integration.",
        "tags": ["React.js", "Node.js", "Express", "Docker", "TailwindCSS"],
        "link": "https://univert-ui.vercel.app/",
        "github": "https://github.com/SurajSingh9696/Univert",
        "image": "/projects/univert.png"
    },

    {
        "name": "Momentum - Habit Tracking App",
        "desc": "Habit tracking app with strong visual design, motion interactions, and modern component-driven frontend structure.",
        "tags": ["React.js", "Vite", "TailwindCSS", "Framer Motion", "React Three Fiber"],
        "link": "https://momentum-community-challenges.vercel.app/",
        "github": "https://github.com/SurajSingh9696/Momentum",
        "image": "/projects/momentum.png"
    },

    {
        "name": "SSL Sentry",
        "desc": "Full-stack project for SSL and security monitoring use cases with dedicated backend and frontend modules.",
        "tags": ["React.js", "Node.js", "Express", "Security"],
        "link": "https://ssl-sentry.vercel.app/",
        "github": "https://github.com/SurajSingh9696/SSL-Sentry",
        "image": "/projects/ssl-sentry.png"
    },

    {
        "name": "CloudShare - Cloud File Sharing Platform",
        "desc": "Secure file sharing platform for uploads, sharing, and controlled access with backend API support.",
        "tags": ["React.js", "Node.js", "Express", "MongoDB", "File Sharing"],
        "link": "https://cloudshare-filesharing-site.vercel.app/",
        "github": "https://github.com/SurajSingh9696/React-NodeJS-Projects/tree/main/06-CloudShare",
        "image": "/projects/cloudshare.png"
    },

    {
        "name": "MailPilot.AI - AI Email Generator",
        "desc": "AI-powered email generation tool for creating professional emails from prompts using modern React and Node architecture.",
        "tags": ["React.js", "Node.js", "Express", "AI", "API"],
        "link": "https://mailpilot-ai-webapp.vercel.app/",
        "github": "https://github.com/SurajSingh9696/React-NodeJS-Projects/tree/main/05-MailPilot.AI",
        "image": "/projects/mailpilot.png"
    },

    {
        "name": "EcoTrack - Eco-Activity Tracker",
        "desc": "Tracks eco-friendly actions and sustainability progress with persisted user records and analytics-oriented flows.",
        "tags": ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
        "link": "https://ecotrack-habit-tracker.vercel.app/",
        "github": "https://github.com/SurajSingh9696/React-NodeJS-Projects/tree/main/02-EcoTrack",
        "image": "/projects/ecotrack.png"
    },

    {
        "name": "QuickQR - QR Code Generator",
        "desc": "Image and text to QR generation app with real-time QR workflows and clean frontend-backend integration.",
        "tags": ["React.js", "Node.js", "Express", "QR Code"],
        "link": "https://quickqr-qrsharing-site.vercel.app/",
        "github": "https://github.com/SurajSingh9696/React-NodeJS-Projects/tree/main/03-QuickQR",
        "image": "/projects/quickqr.png"
    },

    {
        "name": "CityData.Org - Urban Data Explorer",
        "desc": "Urban insights platform for city statistics, data display, and structured information access patterns.",
        "tags": ["React.js", "Node.js", "Express", "TailwindCSS", "API"],
        "link": "https://city-data-org.vercel.app/",
        "github": "https://github.com/SurajSingh9696/React-NodeJS-Projects/tree/main/08-CityData.org",
        "image": "/projects/citydata.png"
    },

    {
        "name": "Imagine.AI",
        "desc": "AI image generation application built with React and Node.js backend services for prompt-based generation.",
        "tags": ["React.js", "Node.js", "Express", "AI", "API"],
        "link": "https://imagine-ai-imagemaker.vercel.app/",
        "github": "https://github.com/SurajSingh9696/React-NodeJS-Projects/tree/main/04-Imagine",
        "image": "/projects/imagineai.png"
    },

    {
        "name": "Imagination.AI - AI Image Generator",
        "desc": "Prompt-to-image web app using external AI APIs with modern interface and responsive workflows.",
        "tags": ["React.js", "Node.js", "Express", "AI", "API"],
        "link": "https://imagination-ai-site.vercel.app/",
        "github": "https://github.com/SurajSingh9696/Imagination.AIhttps://github.com/SurajSingh9696/React-Projects/tree/main/02-Imagination.AI",
        "image": "/projects/imagination.png"
    },

    {
        "name": "Img2Pdf - File to PDF Converter",
        "desc": "Document utility to compress images and generate PDFs with upload pipeline, processing, and deployment-ready structure.",
        "tags": ["React.js", "Node.js", "Express", "PDF", "File Processing"],
        "link": "https://imgtopdf-conversion-site.vercel.app/",
        "github": "https://github.com/SurajSingh9696/React-NodeJS-Projects/tree/main/01-ImgToPdf",
        "image": "/projects/img2pdf.png"
    },

    {
        "name": "React ToDo List",
        "desc": "Task management app with add, complete, delete actions and localStorage persistence.",
        "tags": ["React.js", "Vite", "LocalStorage"],
        "link": "https://taskmaster-todo-list.vercel.app/",
        "github": "https://github.com/SurajSingh9696/React-Projects/tree/main/01-ToDo%20List",
        "image": "/projects/react-todo.png"
    },


    {
        "name": "TaskFlow - Advanced Todo List",
        "desc": "Feature-rich task manager with priorities, categories, due dates, filtering, search, statistics, and progress tracking.",
        "tags": ["HTML", "CSS", "JavaScript", "Task Management", "LocalStorage"],
        "link": "https://task-flow-manager-html.vercel.app/",
        "github": "https://github.com/SurajSingh9696/DHTML/tree/main/13%20-%20TaskFlow%20-%20Todo%20lList",
        "image": "/projects/taskflow.png"
    },

    {
        "name": "Finance Tracker",
        "desc": "Finance management app for income and expense tracking, categorization, filtering, and dashboard statistics.",
        "tags": ["HTML", "CSS", "JavaScript", "Finance", "LocalStorage"],
        "link": "https://finanger-finance-manager.vercel.app/",
        "github": "https://github.com/SurajSingh9696/DHTML/tree/main/12%20-%20Finance%20Tracker",
        "image": "/projects/finance-tracker.png"
    }

];

const allTags = ["All", ...new Set(allProjects.flatMap(project => project.tags))];

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const filtered = allProjects.filter(
        (p) => filter === "All" || p.tags.includes(filter)
    );

    return (
        <div id="projects" className="relative py-24 px-6 md:px-20 text-white overflow-hidden">

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-800/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── Section Header ── */}
                <SectionHeader
                    label="Portfolio"
                    heading="Featured Projects"
                    sub="A comprehensive showcase of my recent work."
                    variant="purple"
                />

                {/* ── Filter Chips ── */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-2">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase transition-all duration-300 border ${filter === tag
                                ? "bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/40"
                                : "bg-[#1a1a2d] border-purple-900/40 text-gray-500 hover:text-white"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>


                {/* ── Project Cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((proj, index) => (
                            <motion.div
                                key={proj.name + index}
                                layout
                                initial={{ opacity: 0, scale: 0.94 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.88 }}
                                transition={{ duration: 0.28 }}
                                className="h-full"
                            >
                                <Tilt
                                    glareEnable={true}
                                    glareMaxOpacity={0.08}
                                    className="h-full rounded-2xl overflow-hidden group"
                                    perspective={1200}
                                >
                                    <div
                                        className="h-full flex flex-col border border-purple-900/15 hover:border-purple-500/30 transition-all duration-300 rounded-2xl overflow-hidden"
                                        style={{ background: "linear-gradient(145deg, #111128, #0d0d20)" }}
                                    >
                                        {/* Image */}
                                        <div className="h-44 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d20] via-black/30 to-transparent z-10" />
                                            <Image
                                                src={proj.image}
                                                alt={proj.name}
                                                fill
                                                className="object-cover group-hover:scale-108 transition-transform duration-600"
                                                sizes="(max-width: 1024px) 50vw, 33vw"
                                            />
                                            {/* Action buttons */}
                                            <div className="absolute top-3 right-3 z-20 flex gap-2">
                                                <a
                                                    href={proj.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label="View source code"
                                                    className="w-8 h-8 rounded-full flex items-center justify-center bg-black/60 hover:bg-purple-600 border border-white/10 hover:border-purple-400 backdrop-blur-sm transition-all duration-200"
                                                >
                                                    <Github size={14} />
                                                </a>
                                                {proj.link && (
                                                    <a
                                                        href={proj.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label="View live demo"
                                                        className="w-8 h-8 rounded-full flex items-center justify-center bg-black/60 hover:bg-cyan-600 border border-white/10 hover:border-cyan-400 backdrop-blur-sm transition-all duration-200"
                                                    >
                                                        <ExternalLink size={14} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-grow">
                                            <h3
                                                className="text-base font-bold mb-2 group-hover:text-purple-300 transition-colors leading-tight"
                                                style={{ fontFamily: "var(--font-space-grotesk)" }}
                                            >
                                                {proj.name}
                                            </h3>
                                            <p
                                                className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-2 flex-grow"
                                                style={{ fontFamily: "var(--font-inter)" }}
                                            >
                                                {proj.desc}
                                            </p>

                                            {/* Tags */}
                                            <div className="border-t border-white/5 pt-3 flex flex-wrap gap-1.5">
                                                {proj.tags.map(tag => (
                                                    <span key={tag} className="tag-purple">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Projects;
