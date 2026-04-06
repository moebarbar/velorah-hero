const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Studio', href: '#studio' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Reach Us', href: '#contact' },
]

export function Navbar() {
  return (
    <nav className="relative z-10">
      <div className="flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="text-3xl tracking-tight text-foreground no-underline"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </a>

        {/* Nav Links — hidden on mobile */}
        <ul className="hidden md:flex flex-row items-center gap-8 list-none">
          {NAV_LINKS.map(({ label, href, active }) => (
            <li key={label}>
              <a
                href={href}
                className={`text-sm transition-colors hover:text-foreground ${
                  active ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground cursor-pointer hover:scale-[1.03] transition-transform">
          Begin Journey
        </button>
      </div>
    </nav>
  )
}
