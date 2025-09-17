import { GraduationCap, BookOpen, Globe } from 'lucide-react'

interface Instructor {
  id: number
  name: string
  title: string
  affiliation: string
  specialization: string
  image: string
  bio: string
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Dr. Ahmad Al-Rashid",
    title: "Senior Scholar",
    affiliation: "Al-Azhar University",
    specialization: "Quranic Studies & Tafsir",
    image: "/api/placeholder/200/200",
    bio: "Over 20 years of experience in Quranic interpretation and Islamic jurisprudence."
  },
  {
    id: 2,
    name: "Sheikh Fatima Al-Zahra",
    title: "Arabic Language Specialist",
    affiliation: "Islamic University of Medina",
    specialization: "Arabic Grammar & Literature",
    image: "/api/placeholder/200/200",
    bio: "Expert in classical Arabic and modern teaching methodologies."
  },
  {
    id: 3,
    name: "Dr. Yusuf Al-Mansouri",
    title: "Hadith Scholar",
    affiliation: "Darul Uloom Deoband",
    specialization: "Hadith Sciences & Islamic History",
    image: "/api/placeholder/200/200",
    bio: "Renowned scholar specializing in authentic hadith transmission and verification."
  },
  {
    id: 4,
    name: "Ustadha Aisha Al-Qurashi",
    title: "Islamic Studies Instructor",
    affiliation: "International Islamic University",
    specialization: "Fiqh & Islamic Law",
    image: "/api/placeholder/200/200",
    bio: "Dedicated educator with expertise in Islamic jurisprudence and women's studies."
  },
  {
    id: 5,
    name: "Sheikh Omar Al-Baghdadi",
    title: "Spiritual Guide",
    affiliation: "Naqshbandi Sufi Order",
    specialization: "Tasawwuf & Spiritual Development",
    image: "/api/placeholder/200/200",
    bio: "Spiritual mentor guiding students on the path of inner purification and divine connection."
  },
  {
    id: 6,
    name: "Dr. Khadija Al-Andalusi",
    title: "Islamic History Professor",
    affiliation: "University of Granada",
    specialization: "Islamic Civilization & History",
    image: "/api/placeholder/200/200",
    bio: "Historian specializing in Islamic civilization and its contributions to world knowledge."
  }
]

export default function InstructorsSection() {
  return (
    <section id="instructors" className="section-padding bg-cream">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-navy mb-6 tracking-tight">
            Our <span className="text-gradient">Instructors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from distinguished scholars and educators who bring decades of experience 
            and authentic knowledge to our institute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className="card p-6 group hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-light p-1 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-navy-light to-navy flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {instructor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={16} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-display font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-gold font-semibold mb-2">{instructor.title}</p>
                <div className="flex items-center justify-center mb-3">
                  <Globe className="text-gray-400 mr-2" size={14} />
                  <span className="text-sm text-gray-600">{instructor.affiliation}</span>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <BookOpen className="text-gray-400 mr-2" size={14} />
                  <span className="text-sm text-gray-600">{instructor.specialization}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {instructor.bio}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
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
