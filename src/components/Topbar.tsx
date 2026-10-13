"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 12);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the section currently in view
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6">
      <div
        className={`container mx-auto relative flex items-center justify-between gap-3 rounded-full px-3 sm:px-4 py-2 transition-all duration-300 ${scrolled ? "glass !bg-background/85 shadow-lg shadow-black/5" : "border border-transparent"
          }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <a
            href="mailto:thanushcurtis@gmail.com"
            id="topbar-email"
            className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-foreground/5 hover:bg-foreground/10 transition-colors min-w-0"
          >
            <span className="relative flex w-2 h-2 shrink-0">
              <span className="ping-soft absolute inset-0 rounded-full bg-emerald-500" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            <span className="truncate opacity-90 group-hover:opacity-100">thanushcurtis@gmail.com</span>
          </a>
          <a
            href="/assets/ThanushkumarCV_2026.pdf"
            download="Thanushkumar-CV.pdf"
            id="topbar-cv"
            className="inline-flex items-center gap-1.5 shrink-0 rounded-full border border-line px-3 py-1.5 text-sm hover:border-accent/50 hover:text-accent transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            CV
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-1 text-sm" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              id={`nav-${l.label.toLowerCase()}`}
              className={`relative px-3 py-1.5 rounded-full transition-colors ${active === l.href ? "text-foreground bg-foreground/[0.07]" : "text-muted hover:text-foreground"
                }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="https://www.linkedin.com/in/thanushcurtis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            id="topbar-linkedin"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full text-muted hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
          </a>
          <a
            href="https://github.com/thanushcurtis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            id="topbar-github"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full text-muted hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" /></svg>
          </a>
          <ThemeToggle />
        </div>

        {/* Scroll progress */}
        <div className="pointer-events-none absolute left-6 right-6 -bottom-px h-px overflow-hidden rounded-full">
          <div
            className="h-full bg-gradient-accent origin-left transition-transform duration-150"
            style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
          />
        </div>
      </div>
    </header>
  );
}
