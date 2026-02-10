import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" className="rounded-2xl">
      <div className="max-w-6xl">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Thanush Thilipkumar</h3>
        <p className="mt-2 font-medium opacity-90">
          Associate Software Engineer & Computer Science Graduate
        </p>
        <div className="mt-3 space-y-3 opacity-90">
          <p>
            Passionate about Technology, with a strong foundation in Backend Software Engineering. Experienced in building scalble backend solutions.
          </p>
          <p>
            Currently seeking opportunities to apply my expertise as an Software Engineer, contribute effectively, and further enhance my skills in a challenging environment.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="mailto:thanushcurtis@gmail.com"
          className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        >
          Email
        </a>
        <a
          href="https://github.com/thanushcurtis"
          className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/thanushcurtis/"
          className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
