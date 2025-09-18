import { ArrowLeft, GraduationCap, BookOpen, Globe, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface Instructor {
  id: number
  name: string
  slug: string
  title: string
  affiliation: string
  specialization: string
  image: string
  bio: string
  email?: string
  phone?: string
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Dr. Mounia Mnouer",
    slug: "dr-mounia-mnouer",
    title: "Arabic Language Specialist",
    affiliation: "Princeton University",
    specialization: "Arabic Language & Cross-Cultural Studies",
    image: "/images/instructors/instructor-1.jpg",
    bio: "Dr. Mounia Mnouer is a Moroccan academic and educator specializing in Arabic language, curriculum design, and cross-cultural studies.\n\nShe holds a B.A. in English Linguistics from Moulay Ismail University and both an M.A. and Ph.D. from Northern Arizona University, where she also served as Senior Lecturer of Arabic.\n\nShe has taught Arabic language and culture in Morocco and the United States, including at Northern Arizona University and Middlebury College, and she is currently a Lecturer in Arabic at Princeton University.\n\nHer research focuses on intercultural learning, indigenous Amazigh language and culture, and curriculum equity."
  },
  {
    id: 2,
    name: "Shaykh Ahmed Ashour",
    slug: "shaykh-ahmed-ashour",
    title: "Islamic Studies Scholar",
    affiliation: "Al-Azhar University",
    specialization: "Islamic Law & Arabic Linguistics",
    image: "/images/instructors/instructor-2.jpg",
    bio: "Shaykh Ahmed Ashour is a scholar of Islamic studies and the Arabic language with classical training at Al-Azhar University and a career dedicated to teaching and community leadership.\n\nHe began the memorization of the Noble Qur'an at a young age and pursued his formal studies at Al-Azhar's Faculty of Arabic Language, where he earned the Ijāzah ʿĀliyah (Licentiate in Arabic Language and Islamic Studies).\n\nHe went on to complete postgraduate studies at the Higher Institute for Islamic Studies in Cairo and studied under many of Al-Azhar's most distinguished scholars in the fields of fiqh, usūl, hadith, tafsīr, and Arabic linguistics."
  },
  {
    id: 3,
    name: "Shaykh Ismail Bowers",
    slug: "shaykh-ismail-bowers",
    title: "Resident Scholar",
    affiliation: "University of Oxford",
    specialization: "Hadith Sciences & Islamic Theology",
    image: "/images/instructors/instructor-3.jpg",
    bio: "Born and raised in Knoxville, Tennessee, Shaykh Ismail Bowers studied for nearly a decade in Morocco, completing the distinguished traditional ʿĀlimiyyah program at the University of Al-Qarawiyyin in Fes, where he received ijāzah in multiple disciplines.\n\nHis studies covered Qur'anic exegesis, Hadith sciences, Islamic law, theology, and Arabic philology under some of Morocco's leading scholars.\n\nHe later earned a Master's degree in Theology from Emory University, graduating top of his class, and is currently pursuing a Ph.D. at the University of Oxford focusing on Hadith and Islamic theology.\n\nAlongside his academic work, Shaykh Ismail is co-founder of Pillars Seminary and has taught hundreds of students in Islamic sciences and Arabic. As Resident Scholar of the Islamic Society of Central Jersey, he brings a blend of traditional scholarship, academic rigor, and community leadership."
  },
  {
    id: 4,
    name: "Shaykh Meurad Osman",
    slug: "shaykh-meurad-osman",
    title: "Islamic Law Instructor",
    affiliation: "World Islamic Sciences University",
    specialization: "Hanafi Fiqh & Islamic Theology",
    image: "/images/instructors/instructor-4.jpg",
    bio: "Shaykh Meurad Osman was born and raised in New Jersey and holds a degree in Sociology from Kean University.\n\nHe pursued traditional studies in the U.S., Turkey, and Jordan, learning from scholars such as Shaykh Zahir Ishaq, Dr. Salah Abdul Haj, and Dr. Muadh Hawa.\n\nHis studies included ʿAqīdah, Hanafi fiqh, tazkiyah, tajwīd, and Arabic. He completed a graduate degree in Hanafi fiqh and usūl at the World Islamic Sciences University in Amman, Jordan, and also served as Imam at the Islamic Center of Ocean County.\n\nCurrently, he teaches with Arkview, Safina Society, Darul Fath, Mecca Center, and Noor Ul-Iman, while continuing to instruct students in Islamic law, theology, and Qur'anic studies."
  }
]

export async function generateStaticParams() {
  return instructors.map((instructor) => ({
    id: instructor.slug,
  }))
}

export default function InstructorPage({ params }: { params: { id: string } }) {
  const instructor = instructors.find(inst => inst.slug === params.id)

  if (!instructor) {
    return (
      <div className="min-h-screen bg-cream">
        <Navigation />
        <div className="container-max section-padding text-center">
          <h1 className="text-4xl font-display font-bold text-navy mb-4">Instructor Not Found</h1>
          <p className="text-gray-600 mb-8">The requested instructor could not be found.</p>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-20 pb-8 bg-white">
        <div className="container-max">
          <div className="flex items-center space-x-2 text-sm text-gray-600 px-4 sm:px-6 md:px-8 lg:px-0">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#instructors" className="hover:text-gold transition-colors">Instructors</Link>
            <span>/</span>
            <span className="text-navy font-medium">{instructor.name}</span>
          </div>
        </div>
      </div>

      {/* Instructor Header */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold to-gold-light p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Instructor Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                  {instructor.name}
                </h1>
                <p className="text-2xl text-gold font-semibold mb-4">{instructor.title}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center lg:justify-start">
                    <GraduationCap className="text-gold mr-3" size={20} />
                    <span className="text-lg text-gray-600">{instructor.affiliation}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <BookOpen className="text-gold mr-3" size={20} />
                    <span className="text-lg text-gray-600">{instructor.specialization}</span>
                  </div>
                </div>

                <Link href="/#instructors" className="btn-secondary inline-flex items-center">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Instructors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-navy mb-8 text-center">
              Biography
            </h2>
            <div className="card p-8">
              <div className="prose prose-lg max-w-none">
                {instructor.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">
              View Programs
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our comprehensive programs and discover how you can benefit from {instructor.name.split(' ')[0]}'s expertise.
            </p>
            <Link href="/#programs" className="btn-primary">
              View Programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
