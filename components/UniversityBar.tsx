'use client'

import { getImagePath } from '@/utils/imagePath'

const universities = [
  {
    name: "Princeton University",
    logo: "https://www.princeton.edu/themes/custom/hobbes/images/logo-white.svg",
    alt: "Princeton University Logo"
  },
  {
    name: "Al-Azhar University",
    logo: getImagePath("/images/universities/al-azhar-logo.png"),
    alt: "Al-Azhar University Logo"
  },
  {
    name: "University of Oxford",
    logo: getImagePath("/images/universities/oxford-logo.png"),
    alt: "University of Oxford Logo"
  },
  {
    name: "Emory University",
    logo: getImagePath("/images/universities/emory-logo.png"),
    alt: "Emory University Logo"
  },
  {
    name: "World Islamic Sciences University",
    logo: getImagePath("/images/universities/wisu-logo.png"),
    alt: "World Islamic Sciences University Logo"
  },
  {
    name: "University of Al-Qarawiyyin",
    logo: getImagePath("/images/universities/uaq.png"),
    alt: "University of Al-Qarawiyyin Logo"
  }
]

export default function UniversityBar() {
  return (
    <section className="py-12 bg-navy-light border-t border-b border-gray-200">
      <div className="container-max">
        <div className="text-center mb-8">
          <h3 className="text-lg font-display font-semibold text-white mb-2">
            Our Instructors Represent
          </h3>
          <p className="text-sm text-gray-300">
            Distinguished universities and institutions worldwide
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
          {universities.map((university, index) => (
            <div
              key={university.name}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={university.logo}
                alt={university.alt}
                className={`h-10 md:h-12 lg:h-14 w-20 md:w-24 lg:w-28 object-contain transition-all duration-300 ${
                  university.name === "Princeton University" 
                    ? "opacity-70 hover:opacity-100" 
                    : "filter brightness-0 invert hover:brightness-100 hover:invert-0"
                }`}
                onError={(e) => {
                  // Fallback to university name if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="hidden text-sm font-medium text-gray-300 text-center">
                {university.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
