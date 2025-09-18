import { BookOpen, Clock, Users, Award, ArrowRight, User, Heart, Scale, GraduationCap, Type, PenTool } from 'lucide-react'

interface Program {
  id: number
  title: string
  description: string
  instructor: string
  text: string
  level: string
  features: string[]
  icon: React.ReactNode
  color: string
}

const programs: Program[] = [
  {
    id: 1,
    title: "Aqidah (Theology) & Tasawwuf (Practice)",
    description: "Comprehensive study of Islamic theology and spiritual development.",
    instructor: "Shaykh Ismail Bowers",
    text: "Al-Kharida Al-Bahiyyah by Shaykh Ahmad Al-Dardir",
    level: "Beginner",
    features: [
      "Theological schools & their development",
      "Attributes of Allah, Prophets, angels, books, Day of Judgement, Destiny",
      "Key debates & differences",
      "Illnesses of the heart & purification",
      "The path to Allah"
    ],
    icon: <Heart size={32} />,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Fiqh - Maliki",
    description: "Study of Islamic jurisprudence according to the Maliki school of thought.",
    instructor: "Shaykh Ismail Bowers",
    text: "Classical Maliki texts",
    level: "Beginner",
    features: [
      "Purification",
      "Prayer",
      "Zakah",
      "Fasting",
      "Hajj"
    ],
    icon: <Scale size={32} />,
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Fiqh - Shafi",
    description: "Study of Islamic jurisprudence according to the Shafi school of thought.",
    instructor: "Shaykh Ahmed Ashour",
    text: "Classical Shafi texts",
    level: "Beginner",
    features: [
      "Purification",
      "Prayer",
      "Zakah",
      "Fasting",
      "Hajj"
    ],
    icon: <Scale size={32} />,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "Fiqh - Hanafi",
    description: "Study of Islamic jurisprudence according to the Hanafi school of thought.",
    instructor: "Shaykh Meurad Osman",
    text: "Classical Hanafi texts",
    level: "Beginner",
    features: [
      "Purification",
      "Prayer",
      "Zakah",
      "Fasting",
      "Hajj"
    ],
    icon: <Scale size={32} />,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    title: "Arabic (Beginner)",
    description: "Foundational Arabic language study for beginners.",
    instructor: "Dr. Mounia Mnouer",
    text: "Al 'Arabiyya Bayna Yadayk",
    level: "Beginner",
    features: [
      "Foundational Grammar & Syntax",
      "Practical Vocabulary & Themes",
      "Reading & Listening Skills",
      "Speaking & Conversation Practice"
    ],
    icon: <Type size={32} />,
    color: "from-teal-500 to-teal-600"
  },
  {
    id: 6,
    title: "Arabic (Intermediate)",
    description: "Intermediate Arabic language study building on foundational knowledge.",
    instructor: "Shaykh Ahmed Ashour",
    text: "Qatr al-Nada wa Ball al-Sada by Imam Ibn Hisham",
    level: "Intermediate",
    features: [
      "Word Classification & Grammar Basics",
      "Sentence Structure",
      "Complex Constructions",
      "Reading & Fluency"
    ],
    icon: <PenTool size={32} />,
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
              <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                {program.icon}
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
