"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import ClickSpark from "../components/ClickSpark";


export default function Home() {
    return (
        <>
            <ClickSpark
                sparkColor="#fff"
                sparkSize={15}
                sparkRadius={10}
                sparkCount={8}
                duration={400}
            >
                <Navbar />
                <Hero />
                <AboutMe />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Resume />
                <Footer />
            </ClickSpark>
        </>
    );
}
