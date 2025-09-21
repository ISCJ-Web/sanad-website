'use client'

import { ArrowRight, BookOpen, Award, Clock } from 'lucide-react'

export default function HeroSection() {
  const scrollToAbout = () => {
    const universitySection = document.getElementById('university-bar');
    if (universitySection) {
      const navbarHeight = 80; // Account for navbar height
      const elementPosition = universitySection.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20 pb-16 md:pb-20">
      <div className="container-max text-center z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 md:mb-8">
            <div className="w-64 md:w-80 lg:w-96 h-32 md:h-40 lg:h-48 flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <img
                        src="/images/logo/sanad-hero-logo.png"
                        alt="Sanad Institute Hero Logo"
                        className="h-full w-auto object-contain"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-2xl hidden">
                <span className="text-white font-bold text-3xl md:text-4xl">S</span>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-navy-light mb-4 tracking-tight">
              The Islamic Society of Central Jersey Presents
            </h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                      Sanad Institute — Rooted in tradition, relevant for today.
                    </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <button 
              onClick={scrollToAbout}
              className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 flex items-center justify-center space-x-2 w-full sm:w-auto text-center"
            >
              <span>Learn More</span>
              <ArrowRight size={20} />
            </button>
                    <a 
                      href="https://form.jotform.com/252610636338052" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto text-center inline-block"
                    >
                      Join Us Today
                    </a>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto px-4">
            <div className="flex flex-col items-center space-y-3 animate-fade-in">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/10 rounded-full flex items-center justify-center">
                <BookOpen className="text-gold" size={24} />
              </div>
              <h3 className="font-display font-semibold text-navy text-sm md:text-base">Authentic Learning</h3>
              <p className="text-gray-600 text-xs md:text-sm text-center">Structured study of classical texts with modern pedagogy, assessments, and certification.</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/10 rounded-full flex items-center justify-center">
                <Award className="text-gold" size={24} />
              </div>
              <h3 className="font-display font-semibold text-navy text-sm md:text-base">Qualified Instructors</h3>
              <p className="text-gray-600 text-xs md:text-sm text-center">All our instructors are certified with years of teaching experience</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/10 rounded-full flex items-center justify-center">
                <Clock className="text-gold" size={24} />
              </div>
              <h3 className="font-display font-semibold text-navy text-sm md:text-base">Flexible Schedule</h3>
              <p className="text-gray-600 text-xs md:text-sm text-center">Morning, evening, and weekend classes available to accommodate your schedule</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
