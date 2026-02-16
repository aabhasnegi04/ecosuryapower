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
          Powering a smarter
          <br />
          energy future
        </motion.h1>
      </div>
    </section>
  );
}
