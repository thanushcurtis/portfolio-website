import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`w-full py-16 ${className ?? ""}`}>
      <div className="container mx-auto px-6">
        {title ? (
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}

