import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Studio', href: '#studio' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Reach Us', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="relative z-20">
        <div className="flex flex-row justify-between items-center px-5 sm:px-8 py-5 max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl sm:text-3xl tracking-tight text-foreground no-underline"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Velorah<sup className="text-xs">®</sup>
          </a>

          {/* Nav Links — desktop */}
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

          {/* Desktop CTA */}
          <button className="hidden md:block liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground cursor-pointer hover:scale-[1.03] transition-transform">
            Begin Journey
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 origin-center ${
                open ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 origin-center ${
                open ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-center items-center transition-all duration-500 md:hidden
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{ background: 'hsl(201, 100%, 8%)' }}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 p-2 cursor-pointer"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-px bg-foreground rotate-45 translate-y-px" />
          <span className="block w-6 h-px bg-foreground -rotate-45 -translate-y-px" />
        </button>

        <ul className="flex flex-col items-center gap-8 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="text-3xl text-foreground hover:text-muted-foreground transition-colors"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="liquid-glass rounded-full px-10 py-4 text-sm text-foreground cursor-pointer mt-12"
          onClick={() => setOpen(false)}
        >
          Begin Journey
        </button>
      </div>
    </>
  )
}
