const ITEMS = [
  'Brand Identity',
  'Digital Experience',
  'Art Direction',
  'Motion & Film',
  'Strategy',
  'Experience Design',
  'Visual Culture',
  'Editorial',
  'Spatial Design',
  'Brand Identity',
  'Digital Experience',
  'Art Direction',
  'Motion & Film',
  'Strategy',
  'Experience Design',
  'Visual Culture',
  'Editorial',
  'Spatial Design',
]

export function Marquee() {
  return (
    <div className="relative py-5 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {ITEMS.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span
              className="text-xs tracking-[0.25em] uppercase text-muted-foreground/50"
            >
              {item}
            </span>
            <span className="text-muted-foreground/20 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
