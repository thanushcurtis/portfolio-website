import Section from "./Section";
import GitHubContributions from "./GitHubContributions";

const experiences = [
    {
        title: "Associate Software Engineer, Data",
        company: "EquiLend",
        period: "Aug 2025 – Present",
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
        <Section id="experience" title="Experience">
            <div className="space-y-0">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col sm:flex-row gap-4 sm:gap-8 py-8 border-b border-black/5 dark:border-white/5 last:border-0 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] -mx-4 px-4 rounded-lg transition-colors"
                    >
                        <div className="sm:w-1/4 shrink-0">
                            <div className="font-semibold text-base">{exp.company}</div>
                            <div className="text-sm opacity-60 mt-1 font-mono">{exp.period}</div>
                            <div className="text-xs opacity-40 mt-0.5 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                {exp.location}
                            </div>
                        </div>
                        <div className="sm:w-3/4 sm:pl-6">
                            <h3 className="text-lg font-semibold text-foreground/90 mb-2">{exp.title}</h3>
                            <p className="text-sm sm:text-base opacity-70 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <GitHubContributions />
        </Section>
    );
}
