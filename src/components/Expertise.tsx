import Section from "./Section";
import Reveal from "./Reveal";

const items = [
  {
    title: "AI & Agents", subtitle: "Agentic AI & RAG", category: "AI", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 opacity-80 text-blue-500">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
      </svg>
    )
  },
  {
    title: "Java", subtitle: "Object-oriented & backend", category: "Languages", icon: (
      <img src="/logos/java.png" alt="Java" className="w-10 h-10 object-contain" />
    )
  },
  {
    title: "Python", subtitle: "Scripting, data & Algorithms", category: "Languages", icon: (
      <img src="/logos/python.png" alt="Python" className="w-10 h-10 object-contain" />
    )
  },
  {
    title: "Databases", subtitle: "Enterprise RDBMS & SQL expertise", category: "Languages", icon: (
      <img src="/logos/postgresql-original.svg" alt="Databases" className="w-10 h-10 object-contain" />
    )
  },

  {
    title: "Quarkus", subtitle: "Cloud-native Java framework", category: "Frameworks", icon: (
      <img src="/logos/quarkus.png" alt="Quarkus" className="w-10 h-10 object-contain" />
    )
  },

  {
    title: "REST API", subtitle: "Design & implementation", category: "APIs", icon: (
      <img src="/logos/rest.png" alt="REST API" className="w-10 h-10 object-contain" />
    )
  },

  {
    title: "Databricks", subtitle: "Data Engineering", category: "Data", icon: (
      <img src="/logos/databricks.png" alt="Databricks" className="w-10 h-10 object-contain" />
    )
  },

  {
    title: "Airflow", subtitle: "Scheduling & Workflow ", category: "DevOps", icon: (
      <img src="/logos/apacheairflow-original.svg" alt="Airflow" className="w-10 h-10 object-contain" />
    )
  },
];

const technicalSkills = [
  { category: "AI & Agents", skills: ["LangChain", "Vector Search", "FastAPI", "Agentic Workflows"] },
  { category: "Data & Processing", skills: ["Airflow", "Databricks", "JavaScript", "SQL", "Oracle & Postgres Databases"] },
  { category: "Cloud & Tooling", skills: ["AWS Certified Solutions Architect – Associate", "Docker", "Google Cloud"] },
  { category: "Monitoring", skills: ["Micrometer", "Prometheus", "Grafana"] },
];

export default function Expertise() {
  return (
    <Section id="expertise">
      <div className="flex flex-col gap-16">
        <div>
          <Reveal className="text-center mb-12">
            <span className="eyebrow">Toolkit</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              Expertise Across Leading
              <br />
              <span className="text-gradient font-mono">&lt;Dev&gt; Technologies</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted">
              With a deep understanding of modern development frameworks and tools, I specialize in creating scalable, and secure applications.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 50}>
                <div className="card group h-full flex items-center gap-4 p-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-foreground/[0.04] border border-line transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <div className="w-8 h-8 flex items-center justify-center [&>img]:w-8 [&>img]:h-8 [&>svg]:w-7 [&>svg]:h-7">
                      {it.icon}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm">{it.title}</h3>
                    {it.subtitle.split("\n").map((line, j) => (
                      <p key={j} className="text-xs text-muted leading-4 mt-1">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <Reveal>
            <div className="card p-6 sm:p-8 max-w-4xl mx-auto w-full hover:transform-none">
              <div className="space-y-5">
                {technicalSkills.map((category) => (
                  <div key={category.category} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 border-b border-line pb-5 last:border-0 last:pb-0">
                    <h4 className="text-xs font-semibold min-w-[170px] uppercase tracking-[0.14em] text-muted">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="flex justify-center w-full">
            <a
              href="https://www.credly.com/badges/88e9cd17-68d8-4959-973c-7324ede5a736/public_url"
              target="_blank"
              rel="noopener noreferrer"
              id="aws-cert-link"
              className="card group relative overflow-hidden flex flex-col md:flex-row items-center gap-8 p-6 sm:p-8 cursor-pointer w-full max-w-4xl mx-auto"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl transition-opacity opacity-60 group-hover:opacity-100" />
              <div className="relative w-28 h-28 flex-shrink-0 transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500">
                <img
                  src="/assets/aws-certified-solutions-architect-associate.png"
                  alt="AWS Certified Solutions Architect - Associate"
                  className="object-contain w-full h-full drop-shadow-lg"
                />
              </div>

              <div className="relative flex-grow text-center md:text-left space-y-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Certification</span>
                <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-accent transition-colors">AWS Certified Solutions Architect</h3>
                <p className="text-base text-muted">Associate</p>
              </div>

              <div className="relative flex-shrink-0 flex items-center gap-2 text-sm font-medium text-accent border border-accent/30 bg-accent/10 px-5 py-2.5 rounded-full transition-all group-hover:bg-accent group-hover:text-background">
                Verify
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
