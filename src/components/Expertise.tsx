import Section from "./Section";

const items = [
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
    title: "React.js", subtitle: "Front End", category: "Frameworks", icon: (
      <img src="/logos/react.png" alt="React" className="w-10 h-10 object-contain" />
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
  { category: "Data & Processing", skills: ["Airflow", "Databricks", "JavaScript", "SQL", "Oracle & Postgres Databases"] },
  { category: "Cloud & Tooling", skills: ["AWS Certified Solutions Architect – Associate", "Docker"] },
  { category: "Monitoring", skills: ["Micrometer", "Prometheus", "Grafana"] },
];

export default function Expertise() {
  return (
    <Section className="bg-white dark:bg-zinc-900 rounded-2xl" id="expertise">
      <div className="flex flex-col gap-16">
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Expertise Across Leading
              <br />
              <span className="text-foreground/90">&lt;Dev&gt; Technologies</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto opacity-80">
              With a deep understanding of modern development frameworks and tools, I specialize in creating scalable, and secure applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((it) => (
              <div key={it.title} className="flex items-start gap-4 p-4 rounded-lg border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <div className="shrink-0 text-foreground/80">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center overflow-hidden bg-transparent">
                    {it.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{it.title}</h3>
                  {it.subtitle.split("\n").map((line, i) => (
                    <p key={i} className="text-xs opacity-70 leading-4 mt-0.5">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-16">
          <div>
            <div className="space-y-4 max-w-4xl mx-auto">
              {technicalSkills.map((category) => (
                <div key={category.category} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10 border-b border-black/5 dark:border-white/5 pb-4 last:border-0">
                  <h4 className="text-sm font-bold min-w-[180px] uppercase tracking-wider opacity-80">{category.category}:</h4>
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {category.skills.map((skill, index) => (
                      <span key={skill} className="text-base text-foreground/90">
                        {skill}
                        {index < category.skills.length - 1 && <span className="mx-1 opacity-40"> | </span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center w-full">
            <a
              href="https://www.credly.com/badges/88e9cd17-68d8-4959-973c-7324ede5a736/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center gap-8 p-6 bg-zinc-50 dark:bg-zinc-800/30 rounded-2xl border border-black/5 dark:border-white/10 hover:border-blue-500/30 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800/50 cursor-pointer w-full max-w-4xl mx-auto"
            >
              <div className="relative w-32 h-32 flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/aws-certified-solutions-architect-associate.png"
                  alt="AWS Certified Solutions Architect - Associate"
                  className="object-contain w-full h-full drop-shadow-sm"
                />
              </div>

              <div className="flex-grow text-center md:text-left space-y-2">
                <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">AWS Certified Solutions Architect</h3>
                <p className="text-lg opacity-80">Associate</p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-5 py-2.5 rounded-full transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
                Verify
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
