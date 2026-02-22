import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We visit your home or rooftop to understand your electricity needs.",
    gradient: "from-[#E9E3F7] to-[#CDBCEB]",
    icon: (
      <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "System Design",
    description: "We design a solar system that fits your space and budget.",
    gradient: "from-[#E7F6B2] to-[#C9EC61]",
    icon: (
      <svg className="w-16 h-16 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Installation",
    description: "Our team installs the system safely at your property.",
    gradient: "from-[#ECEFF4] to-[#C9CFDA]",
    icon: (
      <svg className="w-16 h-16 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Activation & Support",
    description: "We turn on your system and stay with you for ongoing support.",
    gradient: "from-[#F9DEB2] to-[#F4B860]",
    icon: (
      <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Heading */}
        <div className="text-center mb-20 md:mb-24">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            How it works
          </motion.h2>
          <motion.p 
            className="text-gray-500 mt-3 md:mt-4 text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From first call to powered-on system.
          </motion.p>
        </div>

        {/* Desktop: Continuous Timeline with Step Numbers */}
        <div className="relative mb-20 hidden lg:block">
          {/* Single Continuous Horizontal Line */}
          <div className="absolute top-5 left-0 right-0 h-[1px] bg-[#DDE3EA]"></div>
          
          {/* Step Numbers Positioned on Line */}
          <div className="relative grid grid-cols-4">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="inline-block bg-[#F5F7FA] px-6 text-base tracking-[0.3em] text-gray-700 font-bold">
                  {step.number}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cards Grid - Desktop: Horizontal | Mobile: Vertical Timeline */}
        <div className="relative">
          
          {/* Mobile: Vertical Connector Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#DDE3EA] lg:hidden"></div>
          
          {/* Cards */}
          <div className="grid gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                {/* Mobile: Step Number Circle on Timeline */}
                <div className="absolute -left-[13px] top-8 lg:hidden">
                  <div className="w-10 h-10 rounded-full bg-[#F5F7FA] border-2 border-[#DDE3EA] flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex flex-col rounded-3xl p-6 md:p-8 bg-gradient-to-br ${step.gradient}
                    shadow-[0_6px_20px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]
                    transition-all duration-300 hover:-translate-y-1 ml-8 lg:ml-0`}
                >
                  
                  {/* Desktop: Step Number Hidden (shown above cards) */}
                  {/* Mobile: No number inside card anymore */}

                  {/* Icon Container - Glassy Effect with More Padding */}
                  <div className="h-[140px] rounded-2xl bg-white/70 backdrop-blur-md mb-7 flex items-center justify-center transition-all duration-300 hover:bg-white/80 p-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
