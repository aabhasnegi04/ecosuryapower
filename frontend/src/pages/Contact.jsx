import { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const observerRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: ''
  });

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form details
    const message = `Hi, I'm interested in solar solutions!

Name: ${formData.fullName}
Phone: ${formData.phone}
City: ${formData.city}

Please call me back. Thank you!`;

    // WhatsApp number (remove spaces and special characters)
    const whatsappNumber = '918860015034';
    
    // Create WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Optional: Show success message or redirect
    alert('Opening WhatsApp... Please click Send to complete your inquiry.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="Contact Eco Surya - Get Free Solar Consultation"
        description="Get expert solar guidance within 24 hours. Free consultation, transparent pricing, and 25-year performance commitment."
        keywords="contact eco surya, solar consultation, solar quote india"
        url="https://www.ecosuryapower.com/contact"
      />


      <style>{`
        .observe {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="min-h-screen bg-white">
        
        {/* 1. FORM SECTION - Black Background - Now at Top */}
        <section id="contact-form" className="bg-black text-white py-32 md:py-40 lg:py-48">
          <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
              
              {/* LEFT SIDE - Conviction */}
              <div className="flex flex-col justify-center observe">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 leading-tight">
                  Talk to a solar expert
                </h1>

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

              {/* RIGHT SIDE - Form */}
              <div className="flex flex-col justify-center observe">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 text-base md:text-lg text-white focus:outline-none focus:border-zinc-600 transition-colors rounded"
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 text-base md:text-lg text-white focus:outline-none focus:border-zinc-600 transition-colors rounded"
                  />
                  
                  <input
                    type="text"
                    name="city"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 text-base md:text-lg text-white focus:outline-none focus:border-zinc-600 transition-colors rounded"
                  />
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-8 py-5 text-lg md:text-xl font-semibold hover:bg-green-700 transition-all duration-300 rounded hover:scale-[1.02]"
                  >
                    Get Free Solar Consultation
                  </button>

                  {/* Trust Line Below Button */}
                  <p className="text-sm md:text-base text-zinc-500 text-center">
                    No obligation. Transparent pricing.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>


        {/* 2. CONTACT INFO SECTION */}
        <section className="py-20 md:py-32 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#0B0D10]">
              Get in Touch
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Address */}
              <div className="text-center observe">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#0B0D10] mb-2">Address</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  C-5/46, Sector-6 Rohini<br />
                  Delhi 110085, India
                </p>
              </div>

              {/* Phone */}
              <div className="text-center observe">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#0B0D10] mb-2">Phone</h4>
                <div className="text-zinc-600 text-sm space-y-1">
                  <div>
                    <a href="tel:+918860015074" className="hover:text-green-600 transition-colors">
                      Prince: +91 88600 15074
                    </a>
                  </div>
                  <div>
                    <a href="tel:+918860015035" className="hover:text-green-600 transition-colors">
                      Jestin: +91 88600 15035
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="text-center observe">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#0B0D10] mb-2">Email</h4>
                <a href="mailto:ecosuryapower@gmail.com" className="text-zinc-600 text-sm hover:text-green-600 transition-colors">
                  ecosuryapower@gmail.com
                </a>
              </div>

              {/* Working Hours */}
              <div className="text-center observe">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#0B0D10] mb-2">Working Hours</h4>
                <p className="text-zinc-600 text-sm">
                  Mon - Sat: 9 AM - 7 PM<br />
                  Sunday: Closed
                </p>
              </div>

            </div>

            {/* Map */}
            <div className="mt-16 observe">
              <div 
                className="w-full h-96 bg-zinc-200 rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.70489885076032!2d77.10824826264182!3d28.71122542474934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015158817fc1%3A0x41288f4525f8594f!2sc-5%2C%20Sector%206%20Rd%2C%20Pocket%206%2C%20Sector%206D%2C%20Rohini%2C%20New%20Delhi%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1771314007852!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eco Surya Location"
                ></iframe>
              </div>
            </div>

          </div>
        </section>

        {/* 3. SERVICE AREAS SECTION */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-[#0B0D10] observe">
              Serving Homes & Businesses<br />Across India
            </h2>

            <p className="text-center text-xl md:text-2xl text-zinc-600 observe max-w-3xl mx-auto leading-relaxed">
              Pan-India installation and service network. From Kashmir to Kanyakumari, we bring reliable solar solutions to your doorstep.
            </p>

          </div>
        </section>

        {/* 4. WHY CONTACT US - Trust Builder */}
        <section className="py-20 md:py-32 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#0B0D10] observe">
              Why Choose Eco Surya?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              
              {/* Block 1 */}
              <div className="text-center observe">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-600/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0B0D10] mb-3">
                  24-Hour Expert Response
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Get personalized solar guidance from certified experts within one business day.
                </p>
              </div>

              {/* Block 2 */}
              <div className="text-center observe">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-600/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0B0D10] mb-3">
                  Transparent Pricing
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  No hidden costs. Clear breakdown of system costs, savings, and ROI timeline.
                </p>
              </div>

              {/* Block 3 */}
              <div className="text-center observe">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-600/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0B0D10] mb-3">
                  25-Year Commitment
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Comprehensive warranty and lifetime support for your solar investment.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. FINAL CTA - Dark Section */}
        <section className="relative py-32 md:py-40 overflow-hidden" style={{ background: '#0f172a' }}>
          
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-600/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white observe leading-tight">
              Ready to power<br />your home?
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 observe">
              Start with a free consultation.
            </p>
            <a 
              href="#contact-form" 
              className="inline-block bg-green-600 text-white px-16 py-7 text-xl font-semibold hover:bg-green-700 transition-all duration-300 observe hover:-translate-y-1"
              style={{ 
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(34, 197, 94, 0.5)'
              }}
            >
              Start Your Solar Journey
            </a>
          </div>
        </section>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918860015074"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110"
          style={{ boxShadow: '0 10px 30px rgba(34, 197, 94, 0.4)' }}
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

      </div>
    </>
  );
}
