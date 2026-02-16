import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-white text-black py-0 md:py-20 lg:py-24 overflow-hidden">
      <div className="relative">
        
        {/* Desktop: Image bleeds left, text constrained right | Mobile: Full width stack */}
        <div className="md:grid md:grid-cols-[1.4fr_1fr] md:gap-0 md:items-center">
          
          {/* LEFT: Bleeding image - soft reveal, settles into place */}
          <motion.div 
            className="relative md:-ml-16 lg:-ml-28"
            initial={{ opacity: 0, y: 20, scale: 0.995 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.995 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img 
              src="/4,5,below_hero_section.jpg" 
              alt="Solar panels on urban rooftop"
              className="w-full h-auto md:hidden"
            />
            <img 
              src="/16,9,below_hero_section.jpg" 
              alt="Solar panels on urban rooftop"
              className="hidden md:block w-full h-[65vh] lg:h-[70vh] object-cover rounded-tr-3xl rounded-br-3xl"
            />
          </motion.div>

          {/* RIGHT: Text content - staggered reveal */}
          <div className="px-6 md:px-12 lg:px-16 xl:px-20 py-10 md:py-0">
            
            {/* Headline - appears after image */}
            <motion.h2 
              className="text-[2.75rem] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-black mb-8 md:mb-10 lg:mb-12"
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              Energy bills keep rising.
            </motion.h2>

            {/* Stacked text with visual decay - fade in one by one */}
            <div className="space-y-5 md:space-y-6 lg:space-y-7 mb-24 md:mb-28 lg:mb-32">
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-700"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
              >
                Power reliability drops.
              </motion.p>
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-500"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.34, ease: 'easeOut' }}
              >
                Costs increase.
              </motion.p>
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-400"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.46, ease: 'easeOut' }}
              >
                Control stays out of reach.
              </motion.p>
            </div>

            {/* Statement - appears last with authority */}
            <motion.p 
              className="text-base md:text-lg lg:text-xl leading-relaxed text-black font-semibold"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.66, ease: 'easeOut' }}
            >
              Clean energy should feel simple, personal, and reliable.
            </motion.p>

          </div>

        </div>

      </div>
    </section>
  );
}
