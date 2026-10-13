export default function Footer() {
  return (
    <footer className="border-t border-line mt-8">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span>© {new Date().getFullYear()} Thanushkumar Sasinthra Thilipkumar</span>
        <div className="flex items-center gap-5">
          <a href="https://github.com/thanushcurtis" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/thanushcurtis/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-foreground transition-colors" id="back-to-top">
            Back to top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
