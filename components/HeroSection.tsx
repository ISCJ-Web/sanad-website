'use client'

import { ArrowRight, BookOpen, Users, Heart } from 'lucide-react'
import { getImagePath } from '@/utils/imagePath'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-navy rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 border border-gold rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 border border-navy rounded-full"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 transform rotate-45 border-2 border-gold"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 transform rotate-12 border-2 border-navy"></div>
      </div>

      <div className="container-max text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-64 h-32 flex items-center justify-center mx-auto mb-6">
                      <img 
                        src={getImagePath("/images/logo/sanad-logo.png")} 
                        alt="Sanad Institute Logo" 
                        className="h-full w-auto object-contain"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl hidden">
                <span className="text-white font-bold text-4xl">S</span>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy-light mb-4 tracking-tight">
              Discover. Learn. Connect.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Embark on a transformative journey of Islamic learning where tradition meets contemporary education, 
              fostering spiritual growth and community connection.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Join Us Today
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3 animate-fade-in">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                <BookOpen className="text-gold" size={32} />
              </div>
              <h3 className="font-display font-semibold text-navy">Authentic Learning</h3>
              <p className="text-gray-600 text-sm text-center">Traditional Islamic knowledge with modern teaching methods</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                <Users className="text-gold" size={32} />
              </div>
              <h3 className="font-display font-semibold text-navy">Community</h3>
              <p className="text-gray-600 text-sm text-center">Connect with like-minded learners and scholars</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                <Heart className="text-gold" size={32} />
              </div>
              <h3 className="font-display font-semibold text-navy">Spiritual Growth</h3>
              <p className="text-gray-600 text-sm text-center">Nurture your faith and deepen your understanding</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-navy rounded-full flex justify-center">
          <div className="w-1 h-3 bg-navy rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
