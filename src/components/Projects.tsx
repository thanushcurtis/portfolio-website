"use client";

import { useState } from "react";
import Section from "./Section";
import movieApp from "../../asserts/Movie-Recommendation.png";
import movieDetails from "../../asserts/movie_details.png";
import watchedMovies from "../../asserts/Watched_Movies.png";

const projects = [
    {
        title: "Movie Recommendation Web App",
        subtitle: "React.js | Flask | Python (Final Year Project)",
        description: [
            "Conducted literature review for current movie recommendation platforms, identifying key features and technologies in recommendation algorithms.",
            "Designed and developed recommendation algorithm offering personalized movie recommendation using Natural Language Processing.",
            "Built a web app using React, MongoDB and Flask Web development framework.",
        ],
        images: [movieApp, movieDetails, watchedMovies],
        link: "https://github.com/thanushcurtis/moviematch",
        tech: ["React.js", "Flask", "Python", "MongoDB", "NLP"],
    },
];

export default function Projects() {
    // State to track the active image index for each project
    const [activeIndices, setActiveIndices] = useState<number[]>(projects.map(() => 0));

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
        <Section id="projects" title="Featured Projects" className="bg-white dark:bg-zinc-900">
            <div className="flex flex-col gap-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/5 dark:border-white/10"
                    >
                        <div className="flex flex-col lg:flex-row">
                            {/* Image Carousel Section */}
                            <div className="lg:w-1/2 relative min-h-[300px] bg-zinc-100 dark:bg-zinc-900/50 flex items-center justify-center p-4 overflow-hidden">
                                <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${activeIndices[index] * 100}%)` }}>
                                    {project.images.map((img, imgIndex) => (
                                        <div key={imgIndex} className="min-w-full h-full flex items-center justify-center relative">
                                            <img
                                                src={img.src}
                                                alt={`${project.title} screenshot ${imgIndex + 1}`}
                                                className="max-w-full max-h-full object-contain shadow-sm rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Buttons */}
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => handlePrev(index, project.images.length)}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 focus:opacity-100 z-10"
                                            aria-label="Previous image"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                        </button>
                                        <button
                                            onClick={() => handleNext(index, project.images.length)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 focus:opacity-100 z-10"
                                            aria-label="Next image"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </button>

                                        {/* Dots Indicator */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                            {project.images.map((_, dotIndex) => (
                                                <div
                                                    key={dotIndex}
                                                    className={`w-2 h-2 rounded-full transition-colors ${activeIndices[index] === dotIndex ? "bg-white" : "bg-white/40"}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-sm font-medium opacity-70 mb-4">{project.subtitle}</p>

                                    <ul className="space-y-2 mb-6 list-disc list-outside ml-4 text-sm sm:text-base opacity-80">
                                        {project.description.map((item, i) => (
                                            <li key={i} className="pl-1 leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-black/5 dark:border-white/10">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-black/5 dark:bg-white/10 text-foreground/80"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
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
                ))}
            </div>
        </Section>
    );
}
