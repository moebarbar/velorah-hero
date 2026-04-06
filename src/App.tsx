import { VideoBackground } from './components/VideoBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Studio } from './sections/Studio'
import { About } from './sections/About'
import { Journal } from './sections/Journal'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Hero — fullscreen with video */}
      <div className="relative min-h-screen">
        <VideoBackground />
        <Navbar />
        <Hero />
      </div>

      <Marquee />
      <Studio />
      <Marquee />
      <About />
      <Marquee />
      <Journal />
      <Marquee />
      <Contact />
      <Footer />
    </div>
  )
}
