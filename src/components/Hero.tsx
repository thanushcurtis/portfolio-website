"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import Particles from "./Particles";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "<Software Engineer/>";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 90);

    return () => clearInterval(typingInterval);
  }, []);

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
      className="w-full min-h-[78vh] sm:min-h-[calc(100vh-80px)] py-16 sm:py-20 flex items-center relative overflow-hidden group"
    >
      {/* Particles Background */}
      <Particles />

      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--glow), transparent 75%)`,
        }}
      />

      <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
        {/* Avatar with animated gradient ring */}
        <div className="rise relative w-28 h-28 mx-auto" style={{ ["--delay" as string]: "0ms" }}>
          <div className="avatar-ring absolute -inset-[3px] rounded-full opacity-90 blur-[0.5px]" />
          <div className="absolute -inset-6 rounded-full bg-accent/20 blur-2xl" />
          <img
            src="/assets/thanush.png"
            alt="Thanush Thilipkumar"
            width={112}
            height={112}
            loading="eager"
            className="relative object-cover rounded-full w-full h-full border-4 border-background shadow-xl"
          />
          <span className="absolute -right-8 top-3 select-none rounded-full glass text-foreground text-xs font-medium px-3 py-1 shadow-md">
            Hi <span className="wave-emoji">👋</span>
          </span>
        </div>

        <h1 className="rise mt-8 text-[34px] sm:text-[48px] font-semibold tracking-tight leading-tight" style={{ ["--delay" as string]: "150ms" }}>
          I&apos;m Thanush,
        </h1>
        <div
          className="rise mt-1 text-[34px] sm:text-[44px] font-extrabold tracking-tight flex justify-center items-center h-[41px] sm:h-[53px] text-foreground"
          style={{ ["--delay" as string]: "250ms" }}
          aria-label="Software Engineer"
        >
          {typedText}
          <span className="w-1 h-[34px] sm:h-[44px] bg-foreground ml-1 animate-pulse rounded-sm" />
        </div>

        <p className="rise mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed" style={{ ["--delay" as string]: "380ms" }}>
          Building reliable backend systems — currently working on
          tokenised payments for banks and businesses in london.
        </p>

        <div className="rise mt-9 flex flex-wrap items-center justify-center gap-3" style={{ ["--delay" as string]: "460ms" }}>
          <a
            href="mailto:thanushcurtis@gmail.com"
            id="hero-cta-talk"
            className="group/btn relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
          >
            Let’s talk
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-background/15">
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
          <a
            href="#projects"
            id="hero-cta-projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent/40"
          >
            View my work
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#expertise"
        aria-label="Scroll to content"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-6 h-10 rounded-full border-2 border-foreground/20 justify-center pt-2 hover:border-accent/60 transition-colors"
      >
        <span className="scroll-dot w-1 h-2 rounded-full bg-foreground/50" />
      </a>
    </section>
  );
}
