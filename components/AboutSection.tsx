import { Target, Eye } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-navy mb-6 tracking-tight">
            About <span className="text-gradient">Sanad Institute</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to preserving the chain of authentic knowledge—fostering unity, 
            guarding against misguidance, and equipping Muslims to navigate modern challenges 
            with grounding in tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Mission */}
          <div className="card p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4">
                <Target className="text-gold" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-navy">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              To provide authentic Islamic education that combines traditional scholarship 
              with contemporary teaching methods, empowering students to deepen their faith 
              and contribute positively to their communities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We strive to create an environment where learning is not just academic but 
              transformative, fostering spiritual growth and practical application of Islamic principles.
            </p>
          </div>

          {/* Vision */}
          <div className="card p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mr-4">
                <Eye className="text-gold" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-navy">Our Vision</h3>
            </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      To nurture a generation of Muslims who embody knowledge, character, and service. We envision graduates who balance faith with life's demands, enriching their own lives and families, while having the opportunity to pursue roles as teachers, imams, scholars, or leaders — all grounded in authentic tradition and prepared to serve and guide their communities.
                    </p>
          </div>
        </div>

      </div>
    </section>
  )
}
