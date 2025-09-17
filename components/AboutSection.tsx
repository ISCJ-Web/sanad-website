import { Target, Eye, BookOpen, Users } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-navy mb-6 tracking-tight">
            About <span className="text-gradient">Sanad Institute</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to preserving and sharing authentic Islamic knowledge while 
            fostering a welcoming community of learners and scholars.
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
              To be a leading Islamic educational institution that bridges the gap between 
              traditional Islamic scholarship and modern educational excellence, creating 
              well-rounded individuals who embody Islamic values.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where our graduates become ambassadors of peace, 
              knowledge, and positive change in their communities and beyond.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-display font-semibold text-navy mb-3">Authenticity</h4>
            <p className="text-gray-600 text-sm">
              Rooted in traditional Islamic scholarship and authentic sources of knowledge.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-display font-semibold text-navy mb-3">Community</h4>
            <p className="text-gray-600 text-sm">
              Building strong bonds of brotherhood and sisterhood among learners.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-display font-semibold text-navy mb-3">Excellence</h4>
            <p className="text-gray-600 text-sm">
              Committed to the highest standards of teaching and learning.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-display font-semibold text-navy mb-3">Innovation</h4>
            <p className="text-gray-600 text-sm">
              Embracing modern methods while preserving traditional wisdom.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
