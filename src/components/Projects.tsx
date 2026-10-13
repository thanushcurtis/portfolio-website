"use client";

import { useState, useEffect } from "react";
import Section from "./Section";
import Reveal from "./Reveal";

const projects = [
    {
        title: "Agentic AI Portfolio Advisor",
        subtitle: "FastAPI | LangGraph | MongoDB Atlas",
        description: [
            "Built a multi-node agent graph using LangGraph for personalized financial analysis and portfolio recommendations.",
            "Integrated MongoDB Atlas for user profiling and Vector Search with Voyage AI embeddings for historical market intelligence.",
            "Developed a modern React dashboard using Vite to interface with the FastAPI backend, utilizing Cohere's Command-R+ for synthesis.",
        ],
        images: ["/assets/Portfolio-chat.png", "/assets/Live-Stocks.png"],
        link: "https://github.com/thanushcurtis/mongo-db-hackathon",
        tech: ["FastAPI", "LangGraph", "MongoDB", "Cohere", "React.js"],
    },
    {
        title: "Movie Recommendation Web App",
        subtitle: "React.js | Flask | Python (Final Year Project)",
        description: [
            "Conducted literature review for current movie recommendation platforms, identifying key features and technologies in recommendation algorithms.",
            "Designed and developed recommendation algorithm offering personalized movie recommendation using Natural Language Processing.",
            "Built a web app using React, MongoDB and Flask Web development framework.",
        ],
        images: ["/assets/Movie-Recommendation.png", "/assets/movie_details.png", "/assets/Watched_Movies.png"],
        link: "https://github.com/thanushcurtis/moviematch",
        tech: ["React.js", "Flask", "Python", "MongoDB", "NLP"],
    },
];

export default function Projects() {
    // State to track the active image index for each project
    const [activeIndices, setActiveIndices] = useState<number[]>(projects.map(() => 0));
    const [isHovered, setIsHovered] = useState<number | null>(null);

    // Auto-play effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndices((prev) => {
                return prev.map((currentIndex, projectIndex) => {
                    // Only auto-advance if not hovered
                    if (isHovered === projectIndex) return currentIndex;

                    const totalImages = projects[projectIndex].images.length;
                    if (totalImages <= 1) return currentIndex;

                    return (currentIndex + 1) % totalImages;
                });
            });
        }, 2000); // 2 seconds interval

        return () => clearInterval(interval);
    }, [isHovered]);

    const handleNext = (projectIndex: number, totalImages: number) => {
        setActiveIndices((prev) => {
            const newIndices = [...prev];
            newIndices[projectIndex] = (newIndices[projectIndex] + 1) % totalImages;
            return newIndices;
        });
    };

    const handlePrev = (projectIndex: number, totalImages: number) => {
        setActiveIndices((prev) => {
            const newIndices = [...prev];
            newIndices[projectIndex] = (newIndices[projectIndex] - 1 + totalImages) % totalImages;
            return newIndices;
        });
    };

    return (
        <Section id="projects" eyebrow="Selected work" title="Featured Projects" subtitle="Side projects where I explore agentic AI, recommendation systems and full-stack product building.">
            <div className="flex flex-col gap-10">
                {projects.map((project, index) => (
                    <Reveal key={index} delay={index * 80}>
                    <div
                        className="card group relative overflow-hidden rounded-3xl hover:transform-none"
                    >
                        <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                            {/* Image Carousel Section */}
                            <div
                                className="lg:w-[55%] relative p-4 sm:p-6"
                                onMouseEnter={() => setIsHovered(index)}
                                onMouseLeave={() => setIsHovered(null)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-accent-2/10 to-transparent" aria-hidden="true" />
                                <div className="relative rounded-xl overflow-hidden border border-line bg-surface-solid shadow-2xl shadow-black/10 transition-transform duration-500 group-hover:scale-[1.01]">
                                    {/* Browser chrome */}
                                    <div className="flex items-center gap-1.5 px-3 h-8 border-b border-line bg-foreground/[0.03]">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                                    </div>
                                    <div className="relative h-[240px] sm:h-[320px] overflow-hidden">
                                <div className="absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                                    style={{ transform: `translateX(-${activeIndices[index] * 100}%)` }}>
                                    {project.images.map((img, imgIndex) => (
                                        <div key={imgIndex} className="min-w-full h-full flex items-center justify-center relative bg-foreground/[0.02]">
                                            <img
                                                src={img}
                                                alt={`${project.title} screenshot ${imgIndex + 1}`}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Buttons */}
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => handlePrev(index, project.images.length)}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass text-foreground opacity-0 group-hover:opacity-100 transition-all hover:scale-110 focus:opacity-100 z-10"
                                            aria-label="Previous image"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                        </button>
                                        <button
                                            onClick={() => handleNext(index, project.images.length)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass text-foreground opacity-0 group-hover:opacity-100 transition-all hover:scale-110 focus:opacity-100 z-10"
                                            aria-label="Next image"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </button>

                                        {/* Dots Indicator */}
                                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 px-2 py-1.5 rounded-full glass">
                                            {project.images.map((_, dotIndex) => (
                                                <div
                                                    key={dotIndex}
                                                    className={`h-1.5 rounded-full transition-all duration-300 ${activeIndices[index] === dotIndex ? "w-5 bg-accent" : "w-1.5 bg-foreground/30"}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-[45%] p-6 sm:p-8 flex flex-col">
                                <div className="mb-4">
                                    <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")} /</span>
                                    <h3 className="mt-2 text-xl sm:text-2xl font-semibold mb-1.5">{project.title}</h3>
                                    <p className="text-sm font-medium text-muted mb-5">{project.subtitle}</p>

                                    <ul className="space-y-2.5 mb-6 text-sm sm:text-[15px] text-muted">
                                        {project.description.map((item, i) => (
                                            <li key={i} className="flex gap-3 leading-relaxed">
                                                <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-accent/70" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-5 flex flex-wrap gap-4 items-center justify-between border-t border-line">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="chip"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        id={`project-code-${index}`}
                                        className="group/code inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
                                    >
                                        View Code
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 3C6.72 2 4 3 4 3c-1.5 2-1 4.5.5 5.5-1 1.25-1 2.5-1 3.5 3.5 4 6.5 4 6.5 4 1 0 1.5 1 2 2" />
                                            <line x1="9" y1="18" x2="15" y2="18" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
