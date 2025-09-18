import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import UniversityBar from '@/components/UniversityBar'
import AboutSection from '@/components/AboutSection'
import InstructorsSection from '@/components/InstructorsSection'
import ProgramsSection from '@/components/ProgramsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <UniversityBar />
      <AboutSection />
      <InstructorsSection />
      <ProgramsSection />
      <Footer />
    </main>
  )
}
