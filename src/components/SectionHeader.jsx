// SectionHeader.jsx - Reusable section title component
import React from "react";

/**
 * SectionHeader
 * @param {string} label   - Small badge text above heading (e.g. "About Me")
 * @param {string} heading - Main heading text
 * @param {string} sub     - Optional subtitle
 * @param {"purple"|"cyan"} variant - Gradient colour variant
 * @param {"center"|"left"} align   - Text alignment
 */
export default function SectionHeader({ label, heading, sub, variant = "purple", align = "center" }) {
    const isCenter = align === "center";

    const gradientClass = variant === "cyan" ? "section-heading-cyan" : "section-heading-purple";

    return (
        <div className={`mb-16 ${isCenter ? "text-center" : "text-left"}`}>
            {/* Label badge */}
            {label && (
                <div className={isCenter ? "flex justify-center" : ""}>
                    <span className="section-label">{label}</span>
                </div>
            )}

            {/* Main heading */}
            <h2
                className={`font-bold inline-block leading-tight ${gradientClass}`}
                style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    letterSpacing: "-0.03em",
                }}
            >
                {heading}
            </h2>

            {/* Divider */}
            <div className={`section-divider ${isCenter ? "mx-auto" : "ml-0"}`} />

            {/* Subtitle */}
            {sub && (
                <p
                    className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl leading-relaxed"
                    style={{
                        fontFamily: "var(--font-inter)",
                        margin: isCenter ? "1.25rem auto 0" : "1.25rem 0 0",
                    }}
                >
                    {sub}
                </p>
            )}
        </div>
    );
}
