"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Github, Mail, Linkedin, Terminal, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { EducationCard } from "./components/EducationCard"
import { Experience, ExperienceCard } from "./components/ExperienceCard"
import { Project, ProjectCard } from "./components/ProjectCard"
import { SectionHeading } from "./components/SectionHeading"
import { NavLink } from "./components/NavLink"
import { SocialIcon } from "./components/SocialIcon"

export default function Home() {
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev)
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans">
            <header className="fixed w-full top-0 z-10 bg-[#0f172a]/90 backdrop-blur-sm">
                <div className="container mx-auto px-28 py-4 flex justify-between items-center">
                    <NavLink href="/">
                        <div className="text-[#0bc] font-bold text-xl">
                            <Terminal className="inline-block mr-2" size={20} />
                            <span>Cristian</span>
                        </div>
                    </NavLink>
                    <nav className="hidden md:flex space-x-8">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#education">Education</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        {/* <NavLink href="#contact">Contact</NavLink> */}
                    </nav>
                    <div className="flex space-x-4">
                        <SocialIcon href="https://github.com/inojosacs" icon={<Github size={20} />} />
                        <SocialIcon href="https://www.linkedin.com/in/cristian-inojosa/" icon={<Linkedin size={20} />} />
                        <SocialIcon href="mailto:foo@gmail.com" icon={<Mail size={20} />} />
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-28 pt-32 pb-20">
                <section className="min-h-[80vh] flex flex-col justify-center">
                    <div className="terminal-container bg-[#0d1b2a] p-4 rounded-xl border border-slate-700 mb-12 max-w-lg">
                        <div className="flex items-center mb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="font-mono text-sm text-[#0bc]">
                            <span>guest@inojosacs ~$ </span>
                            <span className="text-slate-300">whoami</span>
                            <div className="mt-2 text-slate-300">Software Engineer, Full Stack Developer, Problem Solver</div>
                            <div className="mt-4">
                                <span>guest@inojosacs ~$ </span>
                                <span className="text-slate-300">echo $GREETING</span>
                                <div className="mt-2 text-slate-300">Hello, world! 👋</div>
                            </div>
                            <div className="mt-4">
                                <span>guest@inojosacs ~$ </span>
                                <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-slate-300 transition-opacity`}>|</span>
                            </div>
                        </div>

                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Hi, I&apos;m Cristian I
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg text-slate-400 max-w-2xl mb-12"
                    >
                        I&apos;m a Venezuelan software engineer based in Catalonia, Spain. Currently, I&apos;m
                        focused on creating scalable and efficient applications using cutting-edge technologies.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Link
                            href="#about"
                            className="px-6 py-3 rounded-xl bg-transparent text-[#0bc] border border-[#0bc] hover:bg-[#3b82f6]/10 transition-colors duration-300"
                        >
                            Know more
                        </Link>
                    </motion.div>
                </section>

                <section id="about" className="py-20">
                    <SectionHeading>About Me</SectionHeading>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="md:col-span-2">
                            <p className="text-slate-400 mb-4">
                                Hello! I&apos;m Cristian, a passionate software engineer with a strong background in full stack
                                development and cloud technologies. My journey in tech began with a fascination for creating efficient
                                and scalable solutions, which led me to pursue a career in software engineering.
                            </p>
                            <p className="text-slate-400 mb-4">
                                I&apos;ve had the opportunity to work on
                                diverse projects that have honed my skills in both front-end and back-end development. My focus is on
                                delivering high-quality, user-centric applications that solve real-world problems.
                            </p>
                            <p className="text-slate-400 mb-8">Here are a few technologies I&apos;ve been working with recently:</p>
                            <ul className="grid grid-cols-2 gap-2 text-sm">
                                {["JavaScript", "TypeScript", "React", "Node.js", "Python", "Django", "Postgres", "AWS"].map((tech) => (
                                    <li key={tech} className="flex items-center">
                                        <ChevronRight className="text-[#0bc] mr-2" size={16} />
                                        <span>{tech}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative aspect-square rounded-xl overflow-hidden">
                                <div className="absolute inset-0 z-10"></div>
                                <Image
                                    src="/assets/images/icpc.jpg"
                                    alt="Cristian Inojosa"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover transition-all duration-300 rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="experience" className="py-20">
                    <SectionHeading>Where I&apos;ve Worked</SectionHeading>
                    <div className="grid md:grid-cols-3 gap-8">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))}
                    </div>
                </section>

                <section id="education" className="py-20">
                    <SectionHeading>Education</SectionHeading>
                    <EducationCard />
                </section>

                <section id="projects" className="py-20">
                    <SectionHeading>Some Things I&apos;ve Built</SectionHeading>
                    <div className="space-y-24">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} isEven={index % 2 === 0} />
                        ))}
                    </div>
                </section>

            </main>

            <footer className="bg-[#0f172a] py-6 text-center text-sm text-slate-500">
                <div className="container mx-auto px-28">
                    <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}


const projects: Project[] = [
    {
        title: "Wordle",
        description:
            "A web app inspired by the popular Wordle game from The New York Times, but with the added advantage of unlimited play, without daily restrictions.",
        image: "/assets/images/wordle.png",
        technologies: ["React", "Javascript"],
        github: "https://github.com/inojosacs",
        demo: "https://inojosacs.github.io/wordle/",
    },
    {
        title: "CF Stats",
        description:
            "App to track codeforces progress",
        image: "/assets/images/cf-stats.png",
        technologies: ["React", "Javascript"],
        github: "https://github.com/inojosacs",
        demo: "https://inojosacs.github.io/wordle/",
    },
]

const experiences: Experience[] = [
    {
        period: "November 2023 - Present",
        role: "Backend Developer",
        company: "Pearl AI",
        responsibilities: [
            "Developing and maintaining a dental AI platform as a full-stack engineer",
            "Building backend services using Node.js and managing databases with PostgreSQL",
            "Developing and optimizing frontend applications using React and Vue.js",
            "Collaborating with cross-functional teams to improve AI-driven dental solutions",
        ],
    },
    {
        period: "July 2022 - November 2023",
        role: "Full Stack Developer",
        company: "Mahisoft Inc",
        responsibilities: [
            "Contributing to Teams App, a human resources management platform built with Django and React",
            "Migrated core features from Workable.com to Teams, including job and candidate management",
            "Redesigned the performance assessment scheduling module to enhance UX and functionality",
            "Led efforts to expand Teams’ capabilities for use by external companies beyond Mahisoft clients",
        ],
    },
    {
        period: "Jan 2021 - Dec 2021",
        role: "Instructor & Problem Setter",
        company: "Olimpiada Venezolana de Informática (OVI)",
        responsibilities: [
            "Designed and taught programming classes for pre-university students",
            "Created competitive programming problems on topics such as binary search, Dijkstra’s algorithm, segment trees, and number theory",
            "Promoted algorithmic problem-solving skills among students through hands-on training",
        ],
    },
]
