'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 flex items-center">
                        <img 
                          src="/images/logo/sanad-logo-white.png" 
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
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center hidden">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </div>
            </div>
                    <p className="text-gray-300 mb-6 max-w-md">
                      Dedicated to providing authentic Islamic education and fostering spiritual growth 
                      through comprehensive learning programs.
                    </p>
                    <div className="flex space-x-4">
                      <a href="https://www.instagram.com/sanad_institute/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors">
                        <Instagram size={20} />
                      </a>
                    </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#instructors" className="text-gray-300 hover:text-white transition-colors">Instructors</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-gold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold mt-1" />
                <span className="text-gray-300 text-sm">4145 Route 1 South and Promenade Blvd<br />Monmouth Junction, NJ 08852-0628</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold" />
                <span className="text-gray-300 text-sm">732-329-6995</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold" />
                <a href="mailto:sanad@iscj.org" className="text-gray-300 text-sm hover:text-white transition-colors">sanad@iscj.org</a>
              </div>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sanad Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
