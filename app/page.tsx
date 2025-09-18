import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import UniversityBar from '@/components/UniversityBar'
import AboutSection from '@/components/AboutSection'
import InstructorsSection from '@/components/InstructorsSection'
import ProgramsSection from '@/components/ProgramsSection'
import ScheduleSection from '@/components/ScheduleSection'
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
      <ScheduleSection />
      <Footer />
    </main>
  )
}
