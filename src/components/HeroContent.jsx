"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";

// 🔠 Tech stack for typewriter effect
const stacks = [
  "MERN Stack",
  "React.js",
  "Next.js",
  "Node.js",
  "JavaScript",
  "MongoDB",
  "REST APIs",
  "JWT Auth",
];

export default function HeroContent() {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [del, setDel] = useState(false);

  // ⌨️ Typewriter Effect Logic
  useEffect(() => {
    const current = stacks[word];
    const timeout = setTimeout(
      () => {
        if (!del && text !== current) {
          setText(current.slice(0, text.length + 1));
        } else if (del && text !== "") {
          setText(current.slice(0, text.length - 1));
        } else if (!del && text === current) {
          setTimeout(() => setDel(true), 900);
        } else if (del && text === "") {
          setDel(false);
          setWord((prev) => (prev + 1) % stacks.length);
        }
      },
      del ? 45 : 95
    );
    return () => clearTimeout(timeout);
  }, [text, del, word]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative z-20 w-full px-4 sm:px-6 md:px-20 pt-24 sm:pt-28 md:pt-40 lg:pt-48"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto gap-8 md:gap-10">

        {/* ── Left Content ── */}
        <div className="w-full max-w-[600px] flex flex-col gap-4 sm:gap-5 text-center md:text-left items-center md:items-start">

          {/* Role Badge */}
          <motion.div variants={slideInFromLeft(0.1)}>
            <span
              className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] px-3 sm:px-4 py-1.5 rounded-full border"
              style={{
                fontFamily: "var(--font-inter)",
                color: "#a78bfa",
                background: "rgba(139, 92, 246, 0.08)",
                borderColor: "rgba(139, 92, 246, 0.3)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse inline-block" />
              Full-Stack Developer & AI Enthusiast
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={slideInFromLeft(0.2)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Hi, I&apos;m{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              Suraj Singh
            </span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.p
            variants={slideInFromLeft(0.3)}
            className="text-sm sm:text-base md:text-lg text-gray-400 font-medium leading-relaxed px-2 sm:px-0"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Building modern, scalable apps with{" "}
            <span
              className="font-semibold"
              style={{ color: "#22d3ee" }}
            >
              {text}
              <span className="opacity-80 animate-pulse">|</span>
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={slideInFromLeft(0.4)}
            className="flex flex-col sm:flex-row flex-wrap gap-3 items-center w-full sm:w-auto"
          >
            {/* Primary: View My Work */}
            <a
              href="#projects"
              aria-label="View my work projects"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #0891b2)",
                fontFamily: "var(--font-inter)",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
              View My Work
            </a>

            {/* Secondary: Download CV */}
            <a
              href="/resume.pdf"
              download="Suraj_Singh_Resume.pdf"
              aria-label="Download my resume"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-300 border border-purple-700/40 bg-purple-950/20 hover:bg-purple-900/30 hover:border-purple-500/60 hover:text-white transition-all duration-300 w-full sm:w-auto"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 16v-8m0 8l-3-3m3 3l3-3M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* ── Right Illustration ── */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="hidden md:flex w-[580px] lg:w-[640px] justify-end relative overflow-visible"
        >
          <div className="relative group">
            {/* Ambient glow behind illustration */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #7c3aed 0%, #0891b2 100%)" }}
            />
            <img
              src="/mainIconsdark.svg"
              alt="Tech Stack Illustration"
              className="w-full h-auto object-contain translate-x-10 lg:translate-x-16 transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
