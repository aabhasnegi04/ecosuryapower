import { useEffect, useRef } from 'react';
import SEO from '../../components/SEO';

export default function SolarPanelCleaning() {
  const observerRef = useRef(null);

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

  return (
    <>
      <SEO 
        title="Professional Solar Panel Cleaning Service | Eco Surya"
        description="Restore your solar panel efficiency with professional cleaning. Remove dust, dirt & bird droppings. Increase output by up to 25%. Eco-friendly process."
        keywords="solar panel cleaning, solar maintenance, panel cleaning service, solar efficiency, professional cleaning"
        url="https://www.ecosuryapower.com/solutions/solar-panel-cleaning"
      />

      <style>{`
        .observe {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(24, 182, 99, 0.12);
        }

        .process-step {
          transition: all 0.4s ease;
        }

        .process-step:hover {
          transform: scale(1.05);
        }

        .sun-glow {
          background: radial-gradient(circle at center, rgba(255, 200, 87, 0.15) 0%, transparent 70%);
        }

        .feature-card {
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
        }
      `}</style>

      <div className="min-h-screen bg-white">

        
        {/* 1. HERO SECTION - Cinematic Full-Width Background */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-32">
          
          {/* Full-Width Background Image */}
          <div className="absolute inset-0 top-32">
            <img 
              src="/man-worker-firld-by-solar-panels.jpg" 
              alt="Solar Panel Cleaning" 
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl">
                
                {/* Headline - Bold Statement */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                  Your Solar System<br />
                  Deserves to Perform<br />
                  at <span className="text-green-400">100%</span>.
                </h1>
                
                {/* Subheadline */}
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 font-light">
                  Professional cleaning that restores performance and extends panel life.
                </p>
                
                {/* Single Bold CTA */}
                <a 
                  href="#cleaning-form" 
                  className="inline-block bg-green-500 text-white px-10 py-5 text-lg font-bold rounded-xl shadow-2xl hover:bg-green-600 hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  Book a Free Cleaning Inspection
                </a>
                
              </div>
            </div>
          </div>
          
          {/* Subtle Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
          
        </section>


        {/* 2. WHY CLEANING MATTERS - Editorial Story Layout */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            
            {/* Section Intro */}
            <div className="mb-20 observe">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Dust is Costing You Power.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Even a thin layer of dust can reduce solar efficiency significantly. In India's climate, regular cleaning is not optional — it's essential.
              </p>
            </div>

            {/* Split Layout: Big Stat + Supporting Points */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* LEFT - Dominant Impact Stat */}
              <div className="observe">
                <div className="text-[100px] md:text-[120px] lg:text-[140px] font-bold text-[#18B663] leading-none">
                  25%
                </div>
                <p className="text-2xl md:text-3xl font-semibold mt-6 text-gray-900">
                  Average Power Loss
                </p>
                <p className="text-lg text-gray-600 mt-3 leading-relaxed">
                  From dust, pollution, and debris buildup on solar panels.
                </p>
              </div>

              {/* RIGHT - Supporting Consequences */}
              <div className="space-y-10 observe">
                
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Hot Spots & Long-Term Damage
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Uneven grime accumulation causes overheating and accelerates panel degradation.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Lower Return on Investment
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Reduced output delays your payback period and decreases lifetime savings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Shortened Panel Lifespan
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Lack of maintenance reduces long-term durability and system reliability.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* 3. OUR CLEANING PROCESS - Simplified Centered Layout */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 observe mb-16">
              How We Clean — The Right Way.
            </h2>

            {/* Simplified Step Blocks */}
            <div className="space-y-12 text-left">
              
              {/* Step 01 */}
              <div className="observe">
                <span className="text-green-600 font-semibold text-sm tracking-wider">01</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-2">
                  Inspection & Safety Check
                </h3>
                <p className="text-base text-gray-600 mt-2 max-w-xl">
                  We examine dust level and roof safety before work begins.
                </p>
              </div>

              {/* Step 02 */}
              <div className="observe">
                <span className="text-green-600 font-semibold text-sm tracking-wider">02</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-2">
                  Eco-Friendly Cleaning Application
                </h3>
                <p className="text-base text-gray-600 mt-2 max-w-xl">
                  Specialized panel-safe cleaning solution removes buildup.
                </p>
              </div>

              {/* Step 03 */}
              <div className="observe">
                <span className="text-green-600 font-semibold text-sm tracking-wider">03</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-2">
                  Deionized Water Rinse
                </h3>
                <p className="text-base text-gray-600 mt-2 max-w-xl">
                  Pure water ensures zero residue and no mineral marks.
                </p>
              </div>

              {/* Step 04 */}
              <div className="observe">
                <span className="text-green-600 font-semibold text-sm tracking-wider">04</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-2">
                  Performance Verification
                </h3>
                <p className="text-base text-gray-600 mt-2 max-w-xl">
                  We confirm panel condition and recommend next cleaning cycle.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* 5. WHY CHOOSE US - Credibility Section */}
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-[#0B0D10] observe">
              Why Choose Our Service?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              
              <div className="feature-card bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-md observe">
                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0B0D10]">Safe & Certified</h3>
                <p className="text-base text-[#6B7280]">Trained technicians with safety equipment. No damage to panels or roof.</p>
              </div>

              <div className="feature-card bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md observe">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0B0D10]">Eco-Friendly</h3>
                <p className="text-base text-[#6B7280]">Biodegradable cleaning agents. No harsh chemicals. Water-efficient process.</p>
              </div>

              <div className="feature-card bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-md observe">
                <div className="w-14 h-14 rounded-full bg-yellow-600 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0B0D10]">Flexible Scheduling</h3>
                <p className="text-base text-[#6B7280]">We work around your schedule. Minimal disruption to your operations.</p>
              </div>

              <div className="feature-card bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-md observe">
                <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0B0D10]">Performance Guarantee</h3>
                <p className="text-base text-[#6B7280]">Visible improvement in output or we re-clean for free.</p>
              </div>

            </div>
          </div>
        </section>


        {/* 6. SERVICE COVERAGE - Residential/Commercial */}
        <section className="py-32 md:py-40" style={{ background: '#F7F8FA' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-[#0B0D10] observe">
              We Serve All Types of Installations.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Residential */}
              <div className="observe">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/ResidentialSolar.jpg" 
                      alt="Residential Solar Cleaning" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-10">
                    <h3 className="text-3xl font-bold mb-4 text-[#0B0D10]">Residential</h3>
                    <p className="text-lg text-[#6B7280] mb-6">
                      Rooftop solar systems for homes and apartments. Quick service with minimal disruption.
                    </p>
                    <ul className="space-y-3 text-base text-[#6B7280]">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>1-5 kW systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Same-day service available</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Annual maintenance plans</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commercial */}
              <div className="observe">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/Factory rooftop with panels.jpg" 
                      alt="Commercial Solar Cleaning" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-10">
                    <h3 className="text-3xl font-bold mb-4 text-[#0B0D10]">Commercial</h3>
                    <p className="text-lg text-[#6B7280] mb-6">
                      Large-scale installations for factories, warehouses, and commercial buildings.
                    </p>
                    <ul className="space-y-3 text-base text-[#6B7280]">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>10 kW to MW scale</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Scheduled maintenance contracts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Performance reporting included</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 7. TESTIMONIAL SECTION */}
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-[#0B0D10] observe">
              What Our Clients Say.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              
              <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-2xl shadow-md observe">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-[#0B0D10] mb-6 italic">
                  "Our solar output increased by 22% after the cleaning. The team was professional and completed the work in just 3 hours."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">
                    R
                  </div>
                  <div>
                    <div className="font-bold text-[#0B0D10]">Rajesh Kumar</div>
                    <div className="text-sm text-[#6B7280]">Homeowner, Bangalore</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-md observe">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-[#0B0D10] mb-6 italic">
                  "We have a 50 kW commercial installation. Eco Surya's quarterly cleaning service keeps our panels performing at peak efficiency."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    P
                  </div>
                  <div>
                    <div className="font-bold text-[#0B0D10]">Priya Sharma</div>
                    <div className="text-sm text-[#6B7280]">Factory Manager, Pune</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 8. CONTACT FORM - Cleaning Service Specific */}
        <section id="cleaning-form" className="bg-black text-white py-32 md:py-40">
          <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
              
              {/* LEFT SIDE - Conviction */}
              <div className="flex flex-col justify-center observe">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 leading-tight">
                  Book Your Panel Cleaning
                </h2>

                {/* Proof Points */}
                <div className="space-y-4 mb-8 md:mb-10">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg md:text-xl text-zinc-200">Free inspection included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg md:text-xl text-zinc-200">Eco-safe cleaning process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg md:text-xl text-zinc-200">Residential & commercial service</span>
                  </div>
                </div>

                {/* Trust Line */}
                <p className="text-base md:text-lg text-zinc-400">
                  We respond within 24 hours. Flexible scheduling available.
                </p>
              </div>

              {/* RIGHT SIDE - Form */}
              <div className="flex flex-col justify-center observe">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = formData.get('fullName');
                  const phone = formData.get('phone');
                  const city = formData.get('city');
                  
                  const message = `Hi, I need solar panel cleaning service!

Name: ${name}
Phone: ${phone}
City: ${city}

Please contact me to schedule a cleaning inspection. Thank you!`;

                  const whatsappNumber = '918860015034';
                  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                  alert('Opening WhatsApp... Please click Send to complete your inquiry.');
                }}>
                  
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your name"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 text-base md:text-lg text-white focus:outline-none focus:border-zinc-600 transition-colors rounded"
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 text-base md:text-lg text-white focus:outline-none focus:border-zinc-600 transition-colors rounded"
                  />
                  
                  <input
                    type="text"
                    name="city"
                    placeholder="Your city"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 px-5 py-4 text-base md:text-lg text-white focus:outline-none focus:border-zinc-600 transition-colors rounded"
                  />
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-8 py-5 text-lg md:text-xl font-semibold hover:bg-green-700 transition-all duration-300 rounded hover:scale-[1.02]"
                  >
                    Request Cleaning Service
                  </button>

                  {/* Trust Line Below Button */}
                  <p className="text-sm md:text-base text-zinc-500 text-center">
                    Free inspection. No obligation.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>


      </div>

    </>
  )
}
