import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past hero (roughly 100vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="bg-white/95 backdrop-blur-sm border-t border-zinc-200 px-5 py-4 shadow-lg">
            <div className="flex gap-3">
              <motion.a
                href="tel:+918860015074"
                className="flex-1 bg-black text-white text-center py-3.5 font-semibold text-base hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </motion.a>
              <motion.button
                className="flex-1 bg-zinc-900 text-white text-center py-3.5 font-semibold text-base hover:bg-zinc-800 transition-colors"
                onClick={() => {
                  // Scroll to contact form
                  document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
