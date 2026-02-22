import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/beautiful-alternative-energy-plant-with-solar-panels.jpg)' }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 py-24 md:px-6 max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] tracking-tight" 
          style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Powering a{' '}
          <span className="text-green-400 font-bold">smarter</span>
          <br />
          energy future
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/90 mt-6 mb-10 leading-relaxed max-w-2xl mx-auto"
          style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Reliable solar solutions for{' '}
          <span className="font-semibold text-white">homes</span> and{' '}
          <span className="font-semibold text-white">businesses</span> across India
        </motion.p>

        <motion.a
          href="#contact-form"
          className="inline-block bg-green-600 text-white px-8 py-3 text-sm md:text-base font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          Get Free Consultation
        </motion.a>
      </div>
    </section>
  );
}
