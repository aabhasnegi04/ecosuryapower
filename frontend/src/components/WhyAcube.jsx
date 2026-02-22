import { motion } from 'framer-motion'

export default function WhyAcube() {
  const features = [
    {
      title: "Pan-India installations",
      description: "Across residential, commercial & industrial projects"
    },
    {
      title: "Certified components only",
      description: "Tier-1 solar panels, inverters & storage systems"
    },
    {
      title: "End-to-end execution",
      description: "Design, installation & post-installation support"
    },
    {
      title: "Transparent pricing",
      description: "No hidden costs. Clear commitments."
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Why customers trust <span className="text-green-600">Eco Surya</span>
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base text-zinc-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Built for India. Designed to last.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          
          {/* Left: Features List */}
          <div className="space-y-5 md:space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-50 rounded-xl p-4 md:p-5 hover:bg-zinc-100 transition-colors duration-300"
              >
                <h3 className="text-base md:text-lg font-bold text-black mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Image & Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-5">
              <img 
                src="/reliability.jpg" 
                alt="Eco Surya Reliability" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-2.5">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black leading-tight">
                We engineer energy independence.
              </h3>
              <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
                Precision-designed systems.<br />
                Quality-first components.
              </p>
              <p className="text-base md:text-lg font-semibold text-black">
                Solar solutions that simply work.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
