import { useInView } from '../hooks/useInView'

const PROJECTS = [
  {
    category: 'Brand Identity',
    title: 'Luminary',
    description:
      'A complete visual identity system for a luxury fragrance house — from wordmark to packaging to retail environment.',
    year: '2025',
  },
  {
    category: 'Digital Experience',
    title: 'Solstice',
    description:
      'An immersive web experience for a contemporary art foundation, blending motion and editorial design.',
    year: '2025',
  },
  {
    category: 'Art Direction',
    title: 'Vellum',
    description:
      'Campaign direction and identity for an independent fashion label rooted in sustainable craft.',
    year: '2024',
  },
  {
    category: 'Strategy & Design',
    title: 'Aurient',
    description:
      'Brand positioning and digital platform for a high-growth architecture and interiors studio.',
    year: '2024',
  },
  {
    category: 'Motion & Film',
    title: 'Crestline',
    description:
      'Title sequences and motion identity for a critically acclaimed documentary series.',
    year: '2024',
  },
  {
    category: 'Experience Design',
    title: 'Reverie',
    description:
      'Spatial and digital experience design for a members-only cultural club in three cities.',
    year: '2023',
  },
]

export function Studio() {
  const { ref, inView } = useInView()

  return (
    <section
      id="studio"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Ambient orb */}
      <div
        className="animate-orb pointer-events-none absolute -top-32 -left-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, hsl(201,100%,40%) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-20">
          <div>
            <p
              className={`text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Studio
            </p>
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground max-w-2xl transition-all duration-700 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                fontFamily: "'Instrument Serif', serif",
                lineHeight: '0.95',
                letterSpacing: '-1.5px',
              }}
            >
              Crafted with intention.
            </h2>
          </div>
          <p
            className={`text-sm text-muted-foreground max-w-xs leading-relaxed transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Selected work from our studio — each project a study in restraint and precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className={`group relative p-6 sm:p-8 cursor-pointer border border-white/[0.06] -mt-px -ml-px
                transition-all duration-500
                hover:bg-white/[0.04] hover:border-white/[0.12] hover:z-10
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              {/* Large background number */}
              <span
                className="absolute top-4 right-5 text-6xl sm:text-7xl text-white/[0.04] group-hover:text-white/[0.08] transition-colors select-none pointer-events-none"
                style={{ fontFamily: "'Instrument Serif', serif", lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Top row */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60">
                  {project.category}
                </span>
                <span className="text-[10px] text-muted-foreground/30">
                  {project.year}
                </span>
              </div>

              {/* Accent line */}
              <div className="w-8 h-px bg-white/20 group-hover:w-16 group-hover:bg-white/40 transition-all duration-500 mb-4 sm:mb-5" />

              <h3
                className="text-xl sm:text-2xl text-foreground mb-3 group-hover:text-white transition-colors"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <span className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-[10px] text-white/25 group-hover:text-white/60 transition-all duration-300 tracking-[0.2em] uppercase">
                View project
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
