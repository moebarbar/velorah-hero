import { useState } from 'react'
import { useInView } from '../hooks/useInView'

export function Contact() {
  const { ref, inView } = useInView()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Ambient orb */}
      <div
        className="animate-orb-2 pointer-events-none absolute bottom-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, hsl(201,100%,45%) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Giant decorative background text */}
      <div
        className="pointer-events-none select-none absolute -bottom-6 sm:-bottom-10 left-0 right-0 text-center leading-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[20vw] text-white/[0.025]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Label */}
        <p
          className={`text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 sm:mb-6 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Reach Us
        </p>

        {/* Heading */}
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground max-w-3xl mb-5 sm:mb-6 transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            fontFamily: "'Instrument Serif', serif",
            lineHeight: '0.95',
            letterSpacing: '-1.5px',
          }}
        >
          Let's create something extraordinary.
        </h2>

        <p
          className={`text-muted-foreground max-w-md mb-10 sm:mb-16 leading-relaxed text-sm sm:text-base transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          We take on a limited number of projects each year to ensure every
          engagement receives our full attention. Tell us about yours.
        </p>

        {submitted ? (
          <p
            className="text-3xl sm:text-4xl text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}
          >
            Thank you. We'll be in touch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`max-w-xl space-y-4 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="liquid-glass rounded-lg">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full bg-transparent px-5 py-4 text-foreground placeholder:text-muted-foreground/40 text-sm outline-none"
                />
              </div>
              <div className="liquid-glass rounded-lg">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full bg-transparent px-5 py-4 text-foreground placeholder:text-muted-foreground/40 text-sm outline-none"
                />
              </div>
            </div>

            <div className="liquid-glass rounded-lg">
              <textarea
                placeholder="Tell us about your project"
                required
                rows={5}
                className="w-full bg-transparent px-5 py-4 text-foreground placeholder:text-muted-foreground/40 text-sm outline-none resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
              <button
                type="submit"
                className="liquid-glass rounded-full px-10 sm:px-12 py-4 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer w-full sm:w-auto text-center"
              >
                Send Message
              </button>
              <span className="text-xs text-muted-foreground/30">
                We respond within 48 hours
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
