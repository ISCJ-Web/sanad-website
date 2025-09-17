'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { getImagePath } from '@/utils/imagePath'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 flex items-center">
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
              <div className="h-10 w-auto bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center px-3 hidden">
                <span className="text-white font-bold text-lg">Sanad</span>
              </div>
            </div>
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
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-navy hover:text-gold transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary w-full mt-4">
                Join Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
