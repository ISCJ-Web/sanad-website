'use client'

import { GraduationCap, BookOpen, Globe } from 'lucide-react'
import Link from 'next/link'

interface Instructor {
  id: number
  name: string
  slug: string
  title: string
  affiliation: string
  specialization: string
  image: string
  bio: string
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Shaykh Ismail Bowers",
    slug: "shaykh-ismail-bowers",
    title: "Resident Scholar",
    affiliation: "University of Oxford",
    specialization: "Hadith Sciences & Islamic Theology",
    image: "/images/instructors/instructor-3.jpg",
    bio: "Completed traditional ʿĀlimiyyah program at Al-Qarawiyyin in Fes, Morocco. Master's from Emory University, currently pursuing Ph.D. at Oxford. Co-founder of Pillars Seminary and Resident Scholar."
  },
  {
    id: 2,
    name: "Dr. Mounia Mnouer",
    slug: "dr-mounia-mnouer",
    title: "Arabic Language Specialist",
    affiliation: "Princeton University",
    specialization: "Arabic Language & Cross-Cultural Studies",
    image: "/images/instructors/instructor-1.jpg",
    bio: "Moroccan academic specializing in Arabic language, curriculum design, and cross-cultural studies. Currently Lecturer in Arabic at Princeton University with extensive teaching experience in Morocco and the United States."
  },
  {
    id: 3,
    name: "Shaykh Ahmed Ashour",
    slug: "shaykh-ahmed-ashour",
    title: "Islamic Studies Scholar",
    affiliation: "Al-Azhar University",
    specialization: "Islamic Law & Arabic Linguistics",
    image: "/images/instructors/instructor-2.jpg",
    bio: "Scholar with classical training at Al-Azhar University. Earned Ijāzah ʿĀliyah in Arabic Language and Islamic Studies, with expertise in fiqh, usūl, hadith, tafsīr, and Arabic linguistics."
  },
  {
    id: 4,
    name: "Shaykh Meurad Osman",
    slug: "shaykh-meurad-osman",
    title: "Islamic Law Instructor",
    affiliation: "World Islamic Sciences University",
    specialization: "Hanafi Fiqh & Islamic Theology",
    image: "/images/instructors/instructor-4.jpg",
    bio: "New Jersey native with traditional studies in U.S., Turkey, and Jordan. Graduate degree in Hanafi fiqh from World Islamic Sciences University. Former Imam and current instructor at multiple institutions."
  }
]

export default function InstructorsSection() {
  return (
    <section id="instructors" className="section-padding bg-cream">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-4 md:mb-6 tracking-tight">
            Our <span className="text-gradient">Instructors</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from distinguished scholars and educators who bring decades of experience 
            and authentic knowledge to our institute.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className="card p-4 md:p-6 group hover:shadow-2xl transition-all duration-300 animate-fade-in"
            >
              {/* Profile Image */}
              <div className="relative mb-3 md:mb-4">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-light p-1 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover rounded-full"
                      loading="eager"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-navy-light to-navy flex items-center justify-center hidden">
                      <span className="text-white font-bold text-2xl">
                        {instructor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={12} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center relative z-10">
                <h3 className="text-base md:text-lg font-display font-bold text-navy mb-1 md:mb-2 group-hover:text-gold transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-gold font-semibold mb-1 md:mb-2 text-xs md:text-sm">{instructor.title}</p>
                <div className="flex items-center justify-center mb-1 md:mb-2">
                  <Globe className="text-gray-400 mr-1 md:mr-2" size={10} />
                  <span className="text-xs text-gray-600">{instructor.affiliation}</span>
                </div>
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <BookOpen className="text-gray-400 mr-1 md:mr-2" size={10} />
                  <span className="text-xs text-gray-600">{instructor.specialization}</span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {instructor.bio}
                </p>
                <Link href={`/instructors/${instructor.slug}`} className="btn-secondary text-xs px-3 md:px-4 py-1.5 md:py-2 relative z-20">
                  Learn More
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-navy mb-4">
              Ready to Learn from Our Scholars?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community of learners and benefit from the wisdom and guidance 
              of our experienced instructors.
            </p>
            <button className="btn-primary">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
