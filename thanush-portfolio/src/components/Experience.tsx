import Section from "./Section";

const experiences = [
    {
        title: "Associate Software Engineer, Data",
        company: "EquiLend",
        period: "Aug 2025 – Present",
        location: "Canary Wharf",
        description: [
            "Architected and deployed 10+ Airflow ingestion pipelines on Databricks, automating raw data processing and enabling reliable, production-ready analytics datasets.",
            "Built an ETL pipeline using Airflow and Databricks to integrate Salesforce and database data, automating revenue calculations and improving accuracy.",
            "Engineered robust ingestion pipelines to scrape and ingest daily reference rates from the New York FED website, providing critical real-time data for downstream financial applications.",
            "Integrated ServiceNow incidents records data into Delta Lake via API, supporting data-driven insights and operational reporting.",
        ],
    },
    {
        title: "Graduate Technology Analyst",
        company: "EquiLend",
        period: "Sep 2024 – Jul 2025",
        location: "Canary Wharf",
        description: [
            "Developed Java REST endpoints on the Quarkus framework using Mutiny for reactive programming.",
            "Refactored the REST API codebase to improve code quality and optimize PostgreSQL JSON queries with JSONB functions, resulting in cleaner architecture and better query performance.",
            "Implemented custom metrics using Micrometer to enable observability across 6 microservices, integrating with Prometheus and Grafana for enhanced monitoring and insights.",
            "Refactored a monolithic stored procedure into two separate procedures to resolve stale security prices, ensuring up-to-date data display and improved performance.",
            "Provided technical support for client queries on company’s trading/post-trade applications across web, MQ, and API channels.",
        ],
    },
    {
        title: "Software Engineering Intern",
        company: "NCR Corporation",
        period: "May 2023 – Aug 2023",
        location: "Paddington",
        description: [
            "Developed a data import tool using Java to streamline the generation of import files for the database, significantly improving the efficiency of performance testing.",
            "Conducted comprehensive testing of the company’s software installation process in a Linux environment, ensuring seamless deployment and functionality.",
            "Gained proficiency in Agile practices, including user story creation, sprint planning, and regular retrospectives, while collaborating with a diverse team of software engineers, QA testers, and product managers.",
        ],
    },
    {
        title: "Demonstrator",
        company: "Queen Mary University of London",
        period: "Jan 2023 – April 2024",
        location: "London",
        description: [
            "Explained concepts to students, aiding in enhanced understanding of topics.",
        ],
    },
];

export default function Experience() {
    return (
        <Section id="experience" title="Experience">
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <div className="sm:w-1/4 shrink-0">
                            <div className="font-semibold text-lg">{exp.company}</div>
                            <div className="text-sm opacity-70 mt-1">{exp.period}</div>
                            <div className="text-sm opacity-60 mt-0.5">{exp.location}</div>
                        </div>
                        <div className="sm:w-3/4">
                            <h3 className="text-lg font-medium mb-2 text-foreground/90">{exp.title}</h3>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm sm:text-base opacity-80 marker:opacity-50">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="pl-1 leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
