import { motion } from 'framer-motion';

export default function BuiltForIndia() {
  return (
    <>
      {/* Section A - Text Left, Image Right */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[600px]">
            
            {/* Text */}
            <div className="flex items-center px-8 md:px-16 py-20 md:py-32">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#0B0D10] leading-tight">
                  Built for<br />Indian Rooftops.
                </h2>
                <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-6">
                  Extreme heat. Monsoon storms. Dust. Humidity.
                </p>
                <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
                  Our systems are engineered to withstand the harshest conditions India throws at them — and keep performing for 25+ years.
                </p>
              </motion.div>
            </div>

            {/* Image */}
            <div className="relative min-h-[400px] md:min-h-full">
              <img 
                src="/about/indian-rooftop.jpg" 
                alt="Indian Rooftop Solar" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Section B - Image Left, Text Right */}
      <section className="relative bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 min-h-[600px]">
            
            {/* Image */}
            <div className="relative min-h-[400px] md:min-h-full order-2 md:order-1">
              <img 
                src="/about/Installer Team Working.jpg" 
                alt="Installation Team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex items-center px-8 md:px-16 py-20 md:py-32 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#0B0D10] leading-tight">
                  Expert<br />Installation.
                </h2>
                <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-6">
                  Precision engineering meets skilled craftsmanship.
                </p>
                <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
                  Every installation is executed by certified professionals who understand structural integrity, electrical safety, and long-term performance.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
