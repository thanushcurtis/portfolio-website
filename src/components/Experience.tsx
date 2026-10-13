import Section from "./Section";
import Reveal from "./Reveal";
import GitHubContributions from "./GitHubContributions";

const experiences = [
    {
        title: "Software Engineer",
        company: "Fnality",
        period: "Sep 2026 – Present",
        location: "Remote / Hybrid, London",
        current: true,
        description:
            "Building payment solutions for tokenised wholesale settlement.",
    },
    {
        title: "Junior Software Engineer",
        company: "Yapily",
        period: "Apr 2026 – Aug 2026",
        location: "Oxford Circus, London",
        description:
            "Migrated database access controls to GCP IAM via Terraform across dev, staging, and production environments, and resolved Open Banking API data precision discrepancies across microservices.",
    },
    {
        title: "Associate Software Engineer, Data",
        company: "EquiLend",
        period: "Aug 2025 – Apr 2026",
        location: "Canary Wharf, London",
        description:
            "Architected and deployed 10+ Airflow ingestion pipelines on Databricks, automating data processing from sources including Salesforce, the NY FED, and ServiceNow into Delta Lake for production analytics.",
    },
    {
        title: "Graduate Technology Analyst",
        company: "EquiLend",
        period: "Sep 2024 – Jul 2025",
        location: "Canary Wharf, London",
        description:
            "Developed Java REST endpoints on Quarkus with reactive programming, refactored PostgreSQL queries and stored procedures, and implemented observability metrics across 6 microservices using Micrometer, Prometheus, and Grafana.",
    },
    {
        title: "Software Engineering Intern",
        company: "NCR Corporation",
        period: "May 2023 – Aug 2023",
        location: "Paddington, London",
        description:
            "Developed a Java data-import tool to streamline performance testing, tested software installation in Linux, and gained proficiency in Agile practices across a cross-functional team.",
    },
    {
        title: "Demonstrator",
        company: "Queen Mary University of London",
        period: "Jan 2023 – April 2024",
        location: "London",
        description:
            "Explained computer science concepts to students, aiding in enhanced understanding of topics.",
    },
];

export default function Experience() {
    return (
        <Section id="experience" eyebrow="Career" title="Experience" subtitle="Where I've been building — from fintech infrastructure to data platforms.">
            <ol className="relative">
                {/* Timeline rail */}
                <div className="absolute left-[7px] sm:left-[calc(25%+7px)] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-line to-transparent" aria-hidden="true" />

                {experiences.map((exp, index) => (
                    <Reveal as="li" key={index} delay={index * 60} className="relative pl-8 sm:pl-0 pb-10 last:pb-0">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                            {/* Meta column */}
                            <div className="sm:w-1/4 shrink-0 sm:pr-10 sm:text-right sm:pt-5">
                                <div className="font-mono text-xs sm:text-sm text-muted">{exp.period}</div>
                                <div className="text-xs text-muted/80 mt-1 inline-flex items-center gap-1 sm:justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    {exp.location}
                                </div>
                            </div>

                            {/* Timeline dot */}
                            <span
                                className="absolute left-0 sm:left-1/4 top-1.5 sm:top-6 flex w-[15px] h-[15px] items-center justify-center"
                                aria-hidden="true"
                            >
                                {exp.current ? (
                                    <>
                                        <span className="ping-soft absolute inset-0 rounded-full bg-accent" />
                                        <span className="relative w-[15px] h-[15px] rounded-full bg-gradient-accent ring-4 ring-background" />
                                    </>
                                ) : (
                                    <span className="w-[11px] h-[11px] rounded-full bg-background border-2 border-foreground/25" />
                                )}
                            </span>

                            {/* Content card */}
                            <div className="sm:w-3/4 sm:pl-10">
                                <div className={`card p-5 sm:p-6 ${exp.current ? "border-accent/30 shadow-lg shadow-accent/10" : ""}`}>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                                        {exp.current ? (
                                            <span className="inline-flex items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
                                                Current
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className={`mt-0.5 text-sm font-medium ${exp.current ? "text-gradient" : "text-accent"}`}>{exp.company}</div>
                                    <p className="mt-3 text-sm sm:text-[15px] text-muted leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </ol>

            <Reveal>
                <GitHubContributions />
            </Reveal>
        </Section>
    );
}
