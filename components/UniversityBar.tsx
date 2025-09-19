'use client'

const universities = [
  {
    name: "Princeton University",
    logo: "https://www.princeton.edu/themes/custom/hobbes/images/logo-white.svg",
    alt: "Princeton University Logo"
  },
  {
    name: "Al-Azhar University",
    logo: "/images/universities/al-azhar-logo.png",
    alt: "Al-Azhar University Logo"
  },
  {
    name: "University of Oxford",
    logo: "/images/universities/oxford-logo.png",
    alt: "University of Oxford Logo"
  },
  {
    name: "University of Al-Qarawiyyin",
    logo: "/images/universities/uaq.png",
    alt: "University of Al-Qarawiyyin Logo"
  },
  {
    name: "Emory University",
    logo: "/images/universities/emory-logo.png",
    alt: "Emory University Logo"
  },
  {
    name: "World Islamic Sciences University",
    logo: "/images/universities/wisu-logo.png",
    alt: "World Islamic Sciences University Logo"
  }
]

export default function UniversityBar() {
  return (
    <section id="university-bar" className="py-8 md:py-12 bg-navy-light border-t border-b border-gray-200">
      <div className="container-max">
        <div className="text-center mb-8">
          <h3 className="text-lg font-display font-semibold text-white mb-2">
            World's Leading Institutions
          </h3>
          <p className="text-sm text-gray-300">
            Our instructors are connected to some of the world's most respected universities and Islamic institutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-10 items-center justify-items-center">
          {universities.map((university, index) => (
            <div
              key={university.name}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={university.logo}
                alt={university.alt}
                className={`h-16 md:h-16 lg:h-20 w-32 md:w-32 lg:w-40 object-contain transition-all duration-300 hover:scale-110 ${
                  university.name === "Princeton University" 
                    ? "opacity-70 hover:opacity-100" 
                    : "filter brightness-0 invert"
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
