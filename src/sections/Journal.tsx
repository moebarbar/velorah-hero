import { useInView } from '../hooks/useInView'

const ARTICLES = [
  {
    date: 'March 2026',
    category: 'Design Thinking',
    title: 'On the patience required to do great work.',
    excerpt:
      'In an era of instant everything, choosing to slow down is a radical act. Here is what we have learned from a decade of refusing to rush.',
    readTime: '6 min',
  },
  {
    date: 'February 2026',
    category: 'Culture',
    title: 'Why silence is the most underrated design element.',
    excerpt:
      'Negative space is not empty — it is where meaning breathes. A meditation on restraint, whitespace, and the courage to leave things out.',
    readTime: '4 min',
  },
  {
    date: 'January 2026',
    category: 'Process',
    title: 'The first question we ask every new client.',
    excerpt:
      'Before sketching a single mark, we ask one question that changes everything. It has nothing to do with aesthetics, and everything to do with truth.',
    readTime: '5 min',
  },
]

export function Journal() {
  const { ref, inView } = useInView()

  return (
    <section
      id="journal"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden"
    >
      {/* Orb */}
      <div
        className="animate-orb pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, hsl(201,100%,50%) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-20">
          <div>
            <p
              className={`text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Journal
            </p>
            <h2
              className={`text-5xl sm:text-6xl text-foreground transition-all duration-700 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                fontFamily: "'Instrument Serif', serif",
                lineHeight: '0.95',
                letterSpacing: '-1.5px',
              }}
            >
              Thoughts from the studio.
            </h2>
          </div>
          <a
            href="#"
            className={`text-xs tracking-[0.2em] uppercase text-muted-foreground/50 hover:text-muted-foreground transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            All entries →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article, i) => (
            <article
              key={article.title}
              className={`group relative flex flex-col cursor-pointer border border-white/[0.06] hover:border-white/[0.14]
                bg-white/[0.02] hover:bg-white/[0.04]
                transition-all duration-500
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Top accent bar */}
              <div className="h-px w-0 group-hover:w-full bg-white/30 transition-all duration-700 absolute top-0 left-0" />

              {/* Image placeholder — textured dark block */}
              <div
                className="relative h-44 overflow-hidden border-b border-white/[0.06]"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)`,
                }}
              >
                {/* Category badge */}
                <span className="absolute top-4 left-4 text-[9px] tracking-[0.25em] uppercase text-muted-foreground/60 border border-white/10 px-3 py-1">
                  {article.category}
                </span>
                {/* Decorative serif letter */}
                <span
                  className="absolute -bottom-4 -right-2 text-9xl text-white/[0.03] select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {article.title[0]}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] text-muted-foreground/40">{article.date}</span>
                  <span className="text-[10px] text-muted-foreground/30">{article.readTime} read</span>
                </div>

                <h3
                  className="text-xl text-foreground mb-4 leading-snug group-hover:text-white transition-colors flex-1"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground/70 leading-relaxed mb-7">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-[10px] text-white/25 group-hover:text-white/60 transition-all duration-300 tracking-[0.2em] uppercase mt-auto">
                  Read more
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
