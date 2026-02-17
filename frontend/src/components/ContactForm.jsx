import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message with form details
    const message = `Hi, I'm interested in solar solutions!

Name: ${formData.name}
Phone: ${formData.phone}
City: ${formData.city}

Please call me back. Thank you!`

    // WhatsApp number (remove spaces and special characters)
    const whatsappNumber = '918860015034'
    
    // Create WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank')
    
    // Show success message
    setIsSubmitted(true)
  }

  // Intersection observer for fade-in animation
  const sectionRef = (node) => {
    if (node) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(node)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact-form" className="bg-black text-white py-24 md:py-32 lg:py-40">
        <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <svg className="w-16 h-16 md:w-20 md:h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Thanks!
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-zinc-400">
              Our team will contact you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" ref={sectionRef} className="bg-black text-white py-24 md:py-32 lg:py-40">
      <motion.div 
        className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        
        {/* Desktop: Two Column Layout | Mobile: Single Column */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          
          {/* LEFT SIDE - Conviction */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 leading-tight">
              Talk to a solar expert
            </h2>

            {/* Proof Points */}
            <div className="space-y-4 mb-8 md:mb-10">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg md:text-xl text-zinc-200">Pan-India installation</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg md:text-xl text-zinc-200">Certified solar components</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg md:text-xl text-zinc-200">End-to-end execution</span>
              </div>
            </div>

            {/* Trust Line */}
            <p className="text-base md:text-lg text-zinc-400">
              We respond within 24 hours. No spam. No pressure.
            </p>
          </div>

          {/* RIGHT SIDE - Action (Form) */}
          <div className="flex flex-col justify-center">
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 text-base md:text-lg focus:outline-none focus:border-zinc-600 transition-colors rounded"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 text-base md:text-lg focus:outline-none focus:border-zinc-600 transition-colors rounded"
              />
              
              <input
                type="text"
                name="city"
                placeholder="Your city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 text-base md:text-lg focus:outline-none focus:border-zinc-600 transition-colors rounded"
              />
              
              <motion.button
                type="submit"
                className="w-full bg-green-600 text-white px-8 py-5 text-lg md:text-xl font-semibold hover:bg-green-700 transition-colors rounded"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Get Free Solar Consultation
              </motion.button>

              {/* Trust Line Below Button */}
              <p className="text-sm md:text-base text-zinc-500 text-center">
                No obligation. Transparent pricing.
              </p>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
