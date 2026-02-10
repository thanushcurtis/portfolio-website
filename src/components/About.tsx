import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
        <p>
          I&apos;m Thanush Thilipkumar, a recent Computer Science graduate with a First-Class Honours degree.
          My journey in tech is driven by a curiosity to understand how things work under the hood and a
          passion for building scalable, user-centric applications.
        </p>
        <p>
          During my academic years, I&apos;ve honed my skills in both frontend and backend development, working with
          technologies like React, Next.js, Python, and Java. I enjoy tackling complex problems and turning
          ideas into functional, elegant solutions.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
          projects, or enjoying a good movie. I&apos;m always eager to learn and grow as a developer.
        </p>
      </div>
    </Section>
  );
}
