'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const scrollToHome = () => {
    // If we're on the home page, scroll to home section
    if (pathname === '/') {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const navbarHeight = 80; // Account for navbar height
        const elementPosition = homeSection.offsetTop;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on a different page, navigate to home page
      router.push('/');
    }
    setIsOpen(false); // Close mobile menu if open
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'Programs', href: '#programs' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-3 md:py-4 px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={scrollToHome}
              className="h-8 md:h-10 flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300"
              aria-label="Go to home section"
            >
                      <img
                        src="/images/logo/sanad-logo.png"
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
              <div className="h-8 md:h-10 w-auto bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center px-2 md:px-3 hidden">
                <span className="text-white font-bold text-sm md:text-lg">Sanad</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-navy hover:text-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <button className="btn-primary">
              Join Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-navy hover:text-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-navy hover:text-gold transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                className="btn-primary w-full mt-4"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
