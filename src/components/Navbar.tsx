import Link from "next/link";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight">
          Thanush
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:opacity-80">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

