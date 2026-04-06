import { useInView } from '../hooks/useInView'

const STATS = [
  { value: '12', suffix: '+', label: 'Years of practice' },
  { value: '200', suffix: '+', label: 'Projects delivered' },
  { value: '40', suffix: '', label: 'Countries reached' },
]

export function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Ambient orb */}
      <div
        className="animate-orb-2 pointer-events-none absolute -top-20 -right-40 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, hsl(201,100%,60%) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Label */}
        <p
          className={`text-xs tracking-[0.2em] uppercase text-muted-foreground mb-12 sm:mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          About
        </p>

        {/* Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 items-start mb-16 sm:mb-28">
          {/* Left — pull quote */}
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="text-7xl sm:text-8xl text-white/[0.06] leading-none mb-2 select-none"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              "
            </div>
            <blockquote
              className="text-3xl sm:text-4xl lg:text-5xl text-foreground"
              style={{
                fontFamily: "'Instrument Serif', serif",
                lineHeight: '1.1',
                letterSpacing: '-1px',
              }}
            >
              We don't build brands.{' '}
              <em className="not-italic text-muted-foreground">
                We give them a soul.
              </em>
            </blockquote>
          </div>

          {/* Right — body */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-muted-foreground leading-relaxed mb-5 text-sm sm:text-base">
              Velorah is a creative studio for the quietly ambitious. We partner
              with founders, institutions, and cultural leaders who understand
              that design is not decoration — it is the clearest expression of
              who you are and what you stand for.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              We work slowly, deliberately, and without compromise. Every project
              begins with deep listening and ends with work that endures.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative p-8 sm:p-10 border border-white/[0.06] hover:bg-white/[0.03] transition-colors"
              style={{ transitionDelay: `${400 + i * 80}ms` }}
            >
              <div
                className="text-6xl sm:text-7xl lg:text-8xl text-foreground mb-3 leading-none"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {stat.value}
                <span className="text-3xl sm:text-4xl text-muted-foreground/50">{stat.suffix}</span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/60">
                {stat.label}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-white/20 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className={`text-center mt-16 sm:mt-24 text-muted-foreground/50 text-lg sm:text-xl transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
        >
          Some things are worth doing slowly.
        </p>
      </div>
    </section>
  )
}
