import { useEffect, useRef } from 'react';
import SEO from '../../components/SEO';

export default function Residential() {
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
        title="Residential Solar Solutions - Energy Independence for Your Home | Eco Surya"
        description="Lower electricity bills with premium residential solar solutions. Reliable backup power, smart monitoring, and 25-year warranty. Built for Indian rooftops."
        keywords="residential solar, home solar panels, rooftop solar, solar for homes, reduce electricity bills, solar power home"
        url="https://www.ecosuryapower.com/solutions/residential"
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

        .hero-image {
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-image:hover {
          transform: scale(1.03) translateY(-8px);
        }

        .problem-card {
          position: relative;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .problem-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, transparent, transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .problem-card:hover::before {
          background: linear-gradient(135deg, #16A34A, #0E7C36);
          opacity: 1;
        }

        .problem-card:hover {
          transform: translateY(-16px);
          box-shadow: 0 40px 80px rgba(22, 163, 74, 0.15);
        }

        .problem-card:hover .icon-circle {
          transform: scale(1.15);
          box-shadow: 0 20px 40px rgba(22, 163, 74, 0.3);
        }

        .icon-circle {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .product-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 40px 90px rgba(0,0,0,0.18);
        }

        .product-card:hover img {
          transform: scale(1.08);
        }

        .product-card img {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product-card:hover .explore-arrow {
          transform: translateX(8px);
        }

        .explore-arrow {
          transition: transform 0.3s ease;
        }

        .step-circle {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .step-circle:hover {
          transform: scale(1.15);
          background: linear-gradient(135deg, #16A34A, #0E7C36);
          color: white;
          box-shadow: 0 20px 40px rgba(22, 163, 74, 0.3);
        }

        .step-line {
          background: linear-gradient(90deg, #16A34A 0%, #16A34A 50%, #e5e7eb 50%, #e5e7eb 100%);
          background-size: 200% 100%;
          background-position: 100% 0;
          transition: background-position 2s ease;
        }

        .step-line.animate {
          background-position: 0 0;
        }

        .parallax-section {
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
        }

        @media (max-width: 768px) {
          .parallax-section {
            background-attachment: scroll;
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-number {
          animation: countUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .cta-button-glow {
          position: relative;
          overflow: hidden;
        }

        .cta-button-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #16A34A, #0E7C36);
          border-radius: 18px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          filter: blur(20px);
        }

        .cta-button-glow:hover::before {
          opacity: 0.6;
        }
      `}</style>

      <div className="min-h-screen bg-white">
        
        {/* 1. HERO SECTION - Gradient White */}
        <section 
          className="relative min-h-screen flex items-center pt-32 pb-20"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fb 100%)'
          }}
        >
          {/* Radial glow behind image */}
          <div 
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none hidden md:block"
            style={{
              background: 'radial-gradient(circle, rgba(22,163,74,0.15), transparent 70%)'
            }}
          ></div>
          
          <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
                
                {/* Image - First on Mobile */}
                <div className="w-full flex justify-center items-center md:order-last">
                  <img 
                    src="/ResidentialSolar.jpg" 
                    alt="Residential Solar Installation" 
                    className="w-full max-w-sm sm:max-w-md md:max-w-2xl hero-image"
                    style={{ 
                      borderRadius: '16px',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                    }}
                  />
                </div>

                {/* Text - Second on Mobile */}
                <div className="w-full">
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-green-600 font-bold mb-6 md:mb-10">
                    RESIDENTIAL SOLUTIONS
                  </div>
                  <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold mb-6 md:mb-10 leading-[0.95] tracking-[-0.02em] text-[#0B0D10]">
                    Energy<br />Independence<br />for Your Home.
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-14 text-[#6B7280] leading-relaxed font-light">
                    Lower bills. Reliable backup. Smart monitoring.<br className="hidden sm:block" />
                    Built for Indian rooftops.
                  </p>
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                    <a 
                      href="/contact" 
                      className="inline-block bg-green-600 text-white px-8 sm:px-10 md:px-12 py-4 md:py-6 text-base md:text-lg font-semibold hover:bg-green-700 transition-all duration-300 text-center"
                      style={{ 
                        borderRadius: '14px',
                        boxShadow: '0 12px 30px rgba(22,163,74,0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 20px 50px rgba(22,163,74,0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(22,163,74,0.3)';
                      }}
                    >
                      Get Free Consultation
                    </a>
                    <a 
                      href="#recommended" 
                      className="inline-block border-2 border-[#0B0D10] text-[#0B0D10] px-8 sm:px-10 md:px-12 py-4 md:py-6 text-base md:text-lg font-semibold hover:bg-[#0B0D10] hover:text-white transition-all duration-300 text-center"
                      style={{ borderRadius: '14px' }}
                    >
                      View Systems
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEM SECTION - Soft Gray with Elevated Cards */}
        <section className="py-40 md:py-48" style={{ background: '#F7F8FA' }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-24 text-center text-[#0B0D10] observe">
              Why homeowners<br />are switching.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              
              <div 
                className="problem-card bg-white p-10 observe"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="mb-8 flex justify-center">
                  <div 
                    className="icon-circle w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #16A34A 0%, #0E7C36 100%)' }}
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#0B0D10]">Rising electricity<br />tariffs</h3>
                <p className="text-lg text-center text-[#6B7280]">Power costs increase every year</p>
              </div>

              <div 
                className="problem-card bg-white p-10 observe"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="mb-8 flex justify-center">
                  <div 
                    className="icon-circle w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #16A34A 0%, #0E7C36 100%)' }}
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#0B0D10]">Power cuts &<br />outages</h3>
                <p className="text-lg text-center text-[#6B7280]">Unreliable grid supply</p>
              </div>

              <div 
                className="problem-card bg-white p-10 observe"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="mb-8 flex justify-center">
                  <div 
                    className="icon-circle w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #16A34A 0%, #0E7C36 100%)' }}
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#0B0D10]">High generator<br />fuel costs</h3>
                <p className="text-lg text-center text-[#6B7280]">Expensive diesel dependency</p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. PROCESS TIMELINE - White with Modern Stepper */}
        <section className="py-40 md:py-48 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-24 text-center text-[#0B0D10] observe">
              How your solar<br />journey works.
            </h2>
            
            {/* Desktop Timeline */}
            <div className="hidden md:block observe">
              <div className="relative">
                {/* Animated Line */}
                <div 
                  className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-500 to-green-400"
                  style={{ opacity: 0.2 }}
                ></div>
                
                <div className="grid grid-cols-5 gap-8 relative">
                  
                  {[
                    { num: '01', title: 'Site Visit', desc: 'Free assessment' },
                    { num: '02', title: 'Custom Design', desc: 'Tailored system' },
                    { num: '03', title: 'Approvals', desc: 'We handle paperwork' },
                    { num: '04', title: 'Installation', desc: 'Professional setup' },
                    { num: '05', title: 'Support', desc: '24/7 assistance' }
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="step-circle w-32 h-32 mx-auto bg-white border-4 border-green-600 rounded-full flex items-center justify-center mb-8 relative z-10"
                        style={{ boxShadow: '0 10px 30px rgba(22,163,74,0.2)' }}
                      >
                        <span className="text-3xl font-bold text-green-600">{step.num}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-[#0B0D10]">{step.title}</h3>
                      <p className="text-base text-[#6B7280]">{step.desc}</p>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>

            {/* Mobile Stepper */}
            <div className="md:hidden space-y-10 observe">
              {[
                { num: '01', title: 'Site Visit', desc: 'Free assessment' },
                { num: '02', title: 'Custom Design', desc: 'Tailored system' },
                { num: '03', title: 'Approvals', desc: 'We handle paperwork' },
                { num: '04', title: 'Installation', desc: 'Professional setup' },
                { num: '05', title: 'Support', desc: '24/7 assistance' }
              ].map((step, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-20 h-20 bg-white border-4 border-green-600 rounded-full flex items-center justify-center"
                      style={{ boxShadow: '0 10px 30px rgba(22,163,74,0.2)' }}
                    >
                      <span className="text-2xl font-bold text-green-600">{step.num}</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">{step.title}</h3>
                    <p className="text-lg text-[#6B7280]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. RECOMMENDED SYSTEMS - Light Gradient */}
        <section 
          id="recommended" 
          className="py-40 md:py-48"
          style={{
            background: 'linear-gradient(180deg, #fafbfc 0%, #f5f7f9 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-24 text-center text-[#0B0D10] observe">
              Perfect for<br />your home.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              
              {/* Card 1 */}
              <a 
                href="/products/hybrid-solar-inverter"
                className="product-card bg-white p-10 block observe"
                style={{
                  borderRadius: '24px',
                  boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
                  transform: 'translateY(-10px)'
                }}
              >
                <div className="mb-8 overflow-hidden" style={{ borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img 
                    src="/products/hybrid-solar-inverter.png" 
                    alt="Hybrid Solar Inverter" 
                    className="w-full h-64 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0B0D10]">Hybrid Solar<br />Inverter</h3>
                <p className="text-base text-[#6B7280] mb-4">Grid + battery backup for 24/7 power</p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <span>Explore</span>
                  <svg className="w-5 h-5 explore-arrow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>

              {/* Card 2 */}
              <a 
                href="/products/solar-panel-mono-perc"
                className="product-card bg-white p-10 block observe"
                style={{
                  borderRadius: '24px',
                  boxShadow: '0 15px 50px rgba(0,0,0,0.08)'
                }}
              >
                <div className="mb-8 overflow-hidden" style={{ borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img 
                    src="/products/solar-panel-mono-half-cut-mono-perc.png" 
                    alt="Mono PERC Panels" 
                    className="w-full h-64 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0B0D10]">Mono PERC<br />Panels</h3>
                <p className="text-base text-[#6B7280] mb-4">21.21% efficiency, works in low light</p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <span>Explore</span>
                  <svg className="w-5 h-5 explore-arrow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>

              {/* Card 3 */}
              <a 
                href="/products/energy-storage-systems"
                className="product-card bg-white p-10 block observe"
                style={{
                  borderRadius: '24px',
                  boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
                  transform: 'translateY(10px)'
                }}
              >
                <div className="mb-8 overflow-hidden" style={{ borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img 
                    src="/products/energy-storage-systems.png" 
                    alt="Energy Storage" 
                    className="w-full h-64 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0B0D10]">Energy Storage<br />System</h3>
                <p className="text-base text-[#6B7280] mb-4">Li-ion batteries for reliable backup</p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <span>Explore</span>
                  <svg className="w-5 h-5 explore-arrow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* 5. IMPACT NUMBERS - Dark Background */}
        <section className="py-40 md:py-56" style={{ background: '#0f172a' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 lg:gap-24">
              
              <div className="text-center observe">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-green-500 stat-number">₹0</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-zinc-400 opacity-70">Electricity Goal</div>
              </div>

              <div className="text-center observe">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-green-500 stat-number">25</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-zinc-400 opacity-70">Years Warranty</div>
              </div>

              <div className="text-center observe">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-green-500 stat-number">540W+</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-zinc-400 opacity-70">Panel Power</div>
              </div>

              <div className="text-center observe">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-green-500 stat-number">Pan-India</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-zinc-400 opacity-70">Installation</div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. CINEMATIC IMAGE SECTION */}
        <section 
          className="parallax-section relative py-48 md:py-56 overflow-hidden"
          style={{
            backgroundImage: 'url(/Factory rooftop with panels.jpg)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white observe leading-tight">
                Built for Indian homes<br />and real weather<br />conditions.
              </h2>
              <p className="text-2xl text-zinc-200 mb-12 observe">
                Designed to perform in heat, dust & low-light conditions.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-black px-12 py-6 text-lg font-semibold hover:bg-zinc-100 transition-all duration-300 observe"
                style={{ 
                  borderRadius: '14px',
                  boxShadow: '0 15px 40px rgba(255,255,255,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,255,255,0.2)';
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA - Minimal Luxury */}
        <section className="py-48 md:py-56 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#0B0D10] observe leading-tight">
              Ready to power<br />your home?
            </h2>
            <p className="text-xl text-[#6B7280] mb-16 observe">
              Get a free consultation in 24 hours.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-green-600 text-white px-16 py-7 text-xl font-semibold hover:bg-green-700 transition-all duration-300 observe cta-button-glow"
              style={{ 
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(22,163,74,0.35)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(22,163,74,0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(22,163,74,0.35)';
              }}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
