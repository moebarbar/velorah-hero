const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Studio', href: '#studio' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Reach Us', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="px-8 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <a
            href="#"
            className="text-2xl text-foreground no-underline"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Velorah<sup className="text-xs">®</sup>
          </a>

          <ul className="flex flex-wrap gap-8 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Velorah. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Built with{' '}
            <span style={{ color: 'hsl(201, 100%, 50%)' }}>❤</span>
            {' '}by{' '}
            <a
              href="https://www.instagram.com/immoebarbar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors"
            >
              Moe Barbar
            </a>
          </p>
          <p
            className="text-sm text-muted-foreground/60"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
          >
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  )
}
