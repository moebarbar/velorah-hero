export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 pt-24 sm:pt-32 pb-32 sm:pb-40 min-h-[calc(100vh-80px)] justify-center">
      {/* H1 */}
      <h1
        className="animate-fade-rise text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal max-w-5xl text-foreground"
        style={{
          fontFamily: "'Instrument Serif', serif",
          lineHeight: '0.95',
          letterSpacing: '-1.5px',
        }}
      >
        Where{' '}
        <em className="not-italic text-muted-foreground">dreams</em>{' '}
        rise{' '}
        <em className="not-italic text-muted-foreground">
          through the silence.
        </em>
      </h1>

      {/* Subtext */}
      <p className="animate-fade-rise-delay text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl mt-6 sm:mt-8 leading-relaxed px-2">
        We're designing tools for deep thinkers, bold creators, and quiet
        rebels. Amid the chaos, we build digital spaces for sharp focus and
        inspired work.
      </p>

      {/* CTA */}
      <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-10 sm:px-14 py-4 sm:py-5 text-sm sm:text-base text-foreground mt-10 sm:mt-12 hover:scale-[1.03] transition-transform cursor-pointer">
        Begin Journey
      </button>
    </section>
  )
}
