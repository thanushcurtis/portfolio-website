"use client";

import { ElementType, ReactNode, useEffect, useRef, CSSProperties } from "react";

type RevealProps = {
    children: ReactNode;
    as?: ElementType;
    delay?: number;
    className?: string;
};

/** Fades/slides children in once they scroll into view. */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag ref={ref} className={`reveal ${className}`} style={{ "--delay": `${delay}ms` } as CSSProperties}>
            {children}
        </Tag>
    );
}
