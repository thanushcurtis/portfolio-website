import { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, eyebrow, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={`w-full py-20 sm:py-24 ${className ?? ""}`}>
      <div className="container mx-auto px-6">
        {title ? (
          <Reveal className="mb-12">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              {title}
            </h2>
            {subtitle ? <p className="mt-3 max-w-2xl text-muted">{subtitle}</p> : null}
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}
