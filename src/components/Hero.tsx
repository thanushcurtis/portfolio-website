"use client";

import { useState, useRef, MouseEvent } from "react";
import Particles from "./Particles";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="w-full min-h-[60vh] sm:min-h-[calc(100vh-80px)] py-16 sm:py-20 flex items-center relative overflow-hidden group"
    >
      {/* Particles Background */}
      <Particles />

      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
        <div
          className="relative w-24 h-24 mx-auto"
        >
          <img
            src="/assets/thanush.png"
            alt="Profile photo"
            width={96}
            height={96}
            loading="eager"
            className="object-cover rounded-full ring-4 ring-white/70 w-full h-full shadow-lg"
          />
          <span className="absolute -right-6 top-4 select-none rounded-full bg-white/95 text-black text-xs px-3 py-1 shadow">
            Hi <span className="wave-emoji">👋</span>
          </span>
        </div>
        <h1 className="mt-6 text-[32px] sm:text-[40px] font-semibold tracking-tight">
          I'm Thanush,
        </h1>
        <div className="mt-1 text-[34px] sm:text-[44px] font-extrabold tracking-tight">&lt;Software Engineer/&gt;</div>
        <p className="mt-4 mx-auto opacity-70 text-base sm:text-xl leading-relaxed max-w-2xl font-medium">
          Building scalable backend systems and data pipelines.
        </p>
        <p className="mt-1 mx-auto opacity-50 text-sm">
          Software Engineer @ EquiLend
        </p>
        <p className="mt-1 mx-auto opacity-50 text-sm">
          Computer Science, Queen Mary University of London
        </p>
        <div className="mt-8">
          <a
            href="mailto:thanushcurtis@gmail.com"
            className="group/btn inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 shadow-sm transition-transform hover:scale-105"
          >
            Let’s talk
            <span className="inline-flex items-center justify-center w-4.5 h-4.5 rounded-full border border-white/20 bg-white/10">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/btn:rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
