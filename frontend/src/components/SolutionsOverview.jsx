import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function SolutionSection({ image, title, description, cta, link, index, darkOverlay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const isEven = index % 2 === 0

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      {/* Background Image - static, confident, no animation */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${darkOverlay || 'bg-gradient-to-r from-black/30 via-black/15 to-transparent'}`}></div>
      </div>

      {/* Content - gentle reveal inside */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full py-24 md:py-32">
        <div className={`max-w-2xl ${isEven ? '' : 'ml-auto text-right'}`}>
          
          {/* Headline - primary animation, subtle upward */}
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-10 lg:mb-12 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {title}
          </motion.h2>
          
          {/* Description - opacity only, confirms */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white mb-10 md:mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          >
            {description}
          </motion.p>
          
          {/* CTA - opacity only, last, optional */}
          <motion.a 
            href={link} 
            className="inline-flex items-center gap-2 text-base md:text-lg text-white hover:text-green-400 transition-colors group font-semibold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
          >
            {cta}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          
        </div>
      </div>
    </section>
  )
}

export default function SolutionsOverview() {
  const solutions = [
    {
      image: '/ResidentialSolar.jpg',
      title: 'Residential Solar',
      description: 'Power your home with clean energy.',
      cta: 'Explore residential solutions',
      link: '/solutions/residential',
      darkOverlay: 'bg-gradient-to-r from-black/60 via-black/40 to-black/20'
    },
    {
      image: '/Factory rooftop with panels.jpg',
      title: 'Commercial Solar',
      description: 'Scale sustainably. Lower operational costs.',
      cta: 'Explore commercial solutions',
      link: '/solutions/commercial',
      darkOverlay: 'bg-gradient-to-r from-black/65 via-black/45 to-black/25'
    },
    {
      image: '/Hybrid Systems.jpg',
      title: 'Hybrid Systems',
      description: 'Uninterrupted power. Total control.',
      cta: 'Explore hybrid systems',
      link: '/solutions/hybrid-systems',
      darkOverlay: 'bg-gradient-to-r from-black/70 via-black/50 to-black/30'
    },
    {
      image: '/Energy Storage.jpg',
      title: 'Energy Storage',
      description: 'Store excess. Use on demand.',
      cta: 'Explore energy storage',
      link: '/solutions/energy-storage',
      darkOverlay: 'bg-gradient-to-r from-black/75 via-black/55 to-black/35'
    }
  ]

  return (
    <>
      {solutions.map((solution, index) => (
        <SolutionSection key={index} {...solution} index={index} />
      ))}
    </>
  )
}
