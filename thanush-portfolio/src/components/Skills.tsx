import Section from "./Section";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Vercel",
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <li
            key={s}
            className="px-3 py-1 rounded-full border border-black/10 dark:border-white/15 text-sm"
          >
            {s}
          </li>
        ))}
      </ul>
    </Section>
  );
}

