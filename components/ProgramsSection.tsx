'use client'

import { BookOpen, Clock, Users, Award, ArrowRight, User } from 'lucide-react'

interface Program {
  id: number
  title: string
  description: string
  instructor: string
  text: string
  level: string
  features: string[]
  iconImage: string
  color: string
}

const programs: Program[] = [
  {
    id: 1,
    title: "Aqidah & Tasawwuf",
    description: "Islamic theology & Spirituality.",
    instructor: "Shaykh Ismail Bowers",
    text: "Al-Kharida Al-Bahiyyah & Taj Al-Arus",
    level: "Beginner",
    features: [
      "Core beliefs & theological schools",
      "Key debates & differences",
      "Purification of the heart & path to Allah"
    ],
    iconImage: "/images/class icons/theology.png",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Maliki Fiqh",
    description: "Islamic jurisprudence according to the Maliki Madhhab",
    instructor: "Shaykh Ismail Bowers",
    text: "Al-Murshid Al-Mu'in",
    level: "Beginner",
    features: [
      "Core acts of worship: Salah to Hajj",
      "Methodologies of the Maliki school of law",
      "Practical application in daily life"
    ],
    iconImage: "/images/class icons/maliki.png",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Shafi'i Fiqh",
    description: "Islamic jurisprudence according to the Shafi'i Madhhab",
    instructor: "Shaykh Ahmed Ashour",
    text: "Matn Abi Shuja'",
    level: "Beginner",
    features: [
      "Core acts of worship: Salah to Hajj",
      "Methodologies of the Shafi'i school of law",
      "Practical application in daily life"
    ],
    iconImage: "/images/class icons/shafi.png",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "Hanafi Fiqh",
    description: "Islamic jurisprudence according to the Hanafi Madhhab",
    instructor: "Shaykh Meurad Osman",
    text: "Maraqi 'l-Sa'adat",
    level: "Beginner",
    features: [
      "Core acts of worship: Salah to Hajj",
      "Methodologies of the Hanafi school of law",
      "Practical application in daily life"
    ],
    iconImage: "/images/class icons/hanafi.png",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    title: "Arabic (Beginner)",
    description: "Foundational Study of Arabic",
    instructor: "Dr. Mounia Mnouer",
    text: "Al 'Arabiyya Bayna Yadayk",
    level: "Beginner",
    features: [
      "Foundational Grammar & Syntax",
      "Practical Vocabulary & Themes",
      "Reading & Listening Skills",
      "Speaking & Conversation Practice"
    ],
    iconImage: "/images/class icons/arabic beginner.png",
    color: "from-teal-500 to-teal-600"
  },
  {
    id: 6,
    title: "Arabic (Intermediate)",
    description: "Intermediate Arabic language study",
    instructor: "Shaykh Ahmed Ashour",
    text: "Qatr Al-Nada",
    level: "Intermediate",
    features: [
      "Word Classification & Grammar Basics",
      "Sentence Structure",
      "Complex Constructions",
      "Reading & Fluency"
    ],
    iconImage: "/images/class icons/arabic advanced.png",
    color: "from-indigo-500 to-indigo-600"
  }
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-navy mb-6 tracking-tight">
            Our <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed to provide authentic Islamic education 
            at every level of learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="card p-6 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
              
              {/* Icon */}
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto p-3 shadow-sm border border-gray-100">
                <img
                  src={program.iconImage}
                  alt={`${program.title} icon`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center hidden">
                  <span className="text-gray-500 font-bold text-xs">Icon</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold text-navy mb-3 group-hover:text-gold transition-colors text-center">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-center">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="text-gold mr-2" size={16} />
                    <span className="font-medium">Instructor:</span>
                    <span className="ml-2">{program.instructor}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="text-gold mr-2" size={16} />
                    <span className="font-medium">Text:</span>
                    <span className="ml-2">{program.text}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="text-gold mr-2" size={16} />
                    <span className="font-medium">Level:</span>
                    <span className="ml-2">{program.level}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-navy mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
