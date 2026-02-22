import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function SolutionsOverview() {
  const solutions = {
    featured: {
      image: '/ResidentialSolar.jpg',
      title: 'Residential Solar',
      description: 'Energy independence for your home.',
      link: '/solutions/residential',
      badge: 'Most Installed',
      mobileHeight: 'h-[420px]',
      mobileAlign: 'left'
    },
    stack: [
      {
        image: '/Factory rooftop with panels.jpg',
        title: 'Commercial Solar',
        description: 'Scale sustainably.',
        link: '/solutions/commercial',
        mobileHeight: 'h-[280px]',
        mobileAlign: 'right'
      },
      {
        image: '/man-worker-firld-by-solar-panels.jpg',
        title: 'Solar Panel Cleaning',
        description: 'Maximize efficiency.',
        link: '/solutions/solar-panel-cleaning',
        mobileHeight: 'h-[300px]',
        mobileAlign: 'left'
      },
      {
        image: '/Hybrid Systems.jpg',
        title: 'Hybrid Systems',
        description: 'Total power control.',
        link: '/solutions/hybrid-systems',
        badge: 'Advanced',
        mobileHeight: 'h-[260px]',
        mobileAlign: 'right'
      }
    ]
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Compact Header */}
        <div className="text-center mb-10 md:mb-12">
          <motion.p 
            className="text-xs md:text-sm font-semibold text-green-600 mb-2 uppercase tracking-wider"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            Solutions
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Powering Every Need.
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base text-zinc-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Scalable solar systems for homes, businesses, and intelligent energy storage.
          </motion.p>
        </div>

        {/* Desktop: Asymmetric 60/40 | Mobile: Editorial Stacked */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-6">
          
          {/* Featured Card - Residential */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-3 mb-8 md:mb-0"
          >
            <Link
              to={solutions.featured.link}
              className="group block relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 active:scale-[0.98] md:hover:-translate-y-1 h-[420px] md:h-[520px]"
              aria-label={`Explore ${solutions.featured.title}`}
            >
              {/* Image */}
              <img
                src={solutions.featured.image}
                alt={solutions.featured.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              
              {/* Lighter Gradient on Mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent md:from-black/60 md:via-black/15"></div>
              
              {/* Badge */}
              <div className="absolute top-5 left-5">
                <span className="inline-block px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                  {solutions.featured.badge}
                </span>
              </div>
              
              {/* Content - Always Bottom Left */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {solutions.featured.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 font-medium mb-3">
                  {solutions.featured.description}
                </p>
                <div className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,255,255,0)] group-hover:shadow-[inset_0_0_60px_rgba(255,255,255,0.1)] rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </Link>
          </motion.div>

          {/* Stacked Cards - Desktop: Right Column | Mobile: Continued Stack */}
          <div className="md:col-span-2 flex flex-col gap-5 md:gap-6">
            
            {solutions.stack.map((solution, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 + (index * 0.1) }}
                className={`flex-1 ${
                  index === 0 ? 'mb-5 md:mb-0' : 
                  index === 1 ? 'mb-6 md:mb-0' : 
                  ''
                }`}
              >
                <Link
                  to={solution.link}
                  className={`group block relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 active:scale-[0.98] md:hover:-translate-y-1 ${solution.mobileHeight} md:h-full`}
                  aria-label={`Explore ${solution.title}`}
                >
                  {/* Image */}
                  <img
                    src={solution.image}
                    alt={solution.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  
                  {/* Lighter Gradient on Mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent md:from-black/70 md:via-black/25"></div>
                  
                  {/* Badge (if exists) */}
                  {solution.badge && (
                    <div className={`absolute top-4 ${solution.mobileAlign === 'right' ? 'right-4' : 'left-4'} md:right-4`}>
                      <span className="inline-block px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                        {solution.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Content - Alternating Alignment on Mobile */}
                  <div className={`absolute bottom-5 ${
                    solution.mobileAlign === 'right' 
                      ? 'right-5 left-5 md:left-5 md:right-5' 
                      : 'left-5 right-5'
                  }`}>
                    <div className={`${
                      solution.mobileAlign === 'right' 
                        ? 'text-right md:text-left' 
                        : 'text-left'
                    }`}>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                        {solution.title}
                      </h3>
                      <p className="text-xs md:text-sm text-white/95 mb-2">
                        {solution.description}
                      </p>
                      <div className={`inline-flex items-center gap-1.5 text-white text-xs font-semibold group-hover:gap-2.5 transition-all ${
                        solution.mobileAlign === 'right' ? 'md:justify-start' : ''
                      }`}>
                        <span>Explore</span>
                        <svg 
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Glow on Hover */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,255,255,0)] group-hover:shadow-[inset_0_0_60px_rgba(255,255,255,0.1)] rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </Link>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}
