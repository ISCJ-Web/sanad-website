import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import InstructorsSection from '@/components/InstructorsSection'
import ProgramsSection from '@/components/ProgramsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <InstructorsSection />
      <ProgramsSection />
      <Footer />
    </main>
  )
}
