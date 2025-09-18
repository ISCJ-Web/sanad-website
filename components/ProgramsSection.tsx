import { BookOpen, Clock, Users, Award, ArrowRight } from 'lucide-react'

interface Program {
  id: number
  title: string
  description: string
  duration: string
  level: string
  students: string
  features: string[]
  icon: React.ReactNode
  color: string
}

const programs: Program[] = [
  {
    id: 1,
    title: "Quranic Studies",
    description: "Comprehensive study of the Holy Quran including recitation, memorization, and interpretation.",
    duration: "2 Years",
    level: "Beginner to Advanced",
    students: "50+ Students",
    features: ["Tajweed Rules", "Hifz Program", "Tafsir Studies", "Quranic Arabic"],
    icon: <BookOpen size={32} />,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Arabic Language",
    description: "Master classical and modern Arabic through structured curriculum and practical application.",
    duration: "18 Months",
    level: "All Levels",
    students: "40+ Students",
    features: ["Grammar & Syntax", "Classical Literature", "Modern Arabic", "Conversation Practice"],
    icon: <BookOpen size={32} />,
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Islamic Studies",
    description: "Deep dive into Islamic theology, jurisprudence, and spiritual development.",
    duration: "3 Years",
    level: "Intermediate to Advanced",
    students: "35+ Students",
    features: ["Aqeedah", "Fiqh", "Hadith Sciences", "Islamic History"],
    icon: <BookOpen size={32} />,
    color: "from-purple-500 to-purple-600"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="card p-6 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                {program.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold text-navy mb-3 group-hover:text-gold transition-colors text-center">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="text-gold mr-2" size={16} />
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2">{program.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="text-gold mr-2" size={16} />
                    <span className="font-medium">Level:</span>
                    <span className="ml-2">{program.level}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="text-gold mr-2" size={16} />
                    <span className="font-medium">Students:</span>
                    <span className="ml-2">{program.students}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-navy mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-display font-bold text-navy mb-2">Small Class Sizes</h3>
              <p className="text-gray-600 text-sm">
                Maximum 15 students per class for personalized attention and better learning outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-display font-bold text-navy mb-2">Certified Instructors</h3>
              <p className="text-gray-600 text-sm">
                All our instructors are certified scholars with years of teaching experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-display font-bold text-navy mb-2">Flexible Schedule</h3>
              <p className="text-gray-600 text-sm">
                Morning, evening, and weekend classes available to accommodate your schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
