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
        title="Hybrid Solar Systems - Best of Solar, Grid & Battery | Eco Surya"
        description="24/7 uninterrupted power with hybrid solar systems. Automatic switching between solar, battery, and grid. Zero downtime, maximum savings."
        keywords="hybrid solar system, solar battery backup, grid tied with battery, uninterrupted power, solar storage"
        url="https://www.ecosuryapower.com/solutions/hybrid-systems"
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
                    src="/Hybrid Systems.jpg" 
                    alt="Hybrid Solar System" 
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
                    HYBRID SOLAR SYSTEMS
                  </div>
                  <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold mb-6 md:mb-10 leading-[0.95] tracking-[-0.02em] text-[#0B0D10]">
                    Solar + Grid<br />+ Battery.<br />Zero Downtime.
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-14 text-[#6B7280] leading-relaxed font-light">
                    Automatic switching between power sources.<br className="hidden sm:block" />
                    24/7 uninterrupted power supply.
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
              Why choose<br />hybrid systems?
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#0B0D10]">Zero<br />Downtime</h3>
                <p className="text-lg text-center text-[#6B7280]">Automatic switching between sources</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#0B0D10]">Battery<br />Backup</h3>
                <p className="text-lg text-center text-[#6B7280]">Store excess solar for night use</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#0B0D10]">Grid<br />Fallback</h3>
                <p className="text-lg text-center text-[#6B7280]">Grid support when needed</p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. PROCESS TIMELINE - Modern Image-Based Journey */}
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 md:mb-20 text-center text-[#0B0D10] observe">
              How hybrid systems<br />work for you.
            </h2>
            
            {/* Desktop: Cards with Connecting Line */}
            <div className="relative">
              {/* Subtle Connecting Line - Desktop Only */}
              <div className="hidden md:block absolute top-20 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-green-200 via-green-300 to-green-200 opacity-40"></div>
              
              <div className="grid md:grid-cols-5 gap-8 md:gap-12">
                
                {[
                  { 
                    step: '01', 
                    title: 'Site Visit', 
                    desc: 'Free assessment',
                    image: '/Hybrid Systems.jpg'
                  },
                  { 
                    step: '02', 
                    title: 'Custom Design', 
                    desc: 'Tailored system',
                    image: '/Factory rooftop with panels.jpg'
                  },
                  { 
                    step: '03', 
                    title: 'Approvals', 
                    desc: 'We handle paperwork',
                    image: '/reliability.jpg'
                  },
                  { 
                    step: '04', 
                    title: 'Installation', 
                    desc: 'Professional setup',
                    image: '/beautiful-alternative-energy-plant-with-solar-panels.jpg'
                  },
                  { 
                    step: '05', 
                    title: 'Support', 
                    desc: '24/7 assistance',
                    image: '/Energy Storage.jpg'
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="relative group observe"
                  >
                    {/* Step Badge */}
                    <div className="absolute -top-3 -left-3 bg-green-600 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg z-20">
                      {item.step}
                    </div>

                    {/* Image Card */}
                    <div className="rounded-2xl overflow-hidden mb-5 shadow-md group-hover:shadow-xl transition-all duration-500 relative z-10">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg md:text-xl font-bold text-[#0B0D10] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B7280]">
                      {item.desc}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* 4. BUILT FOR INDIA - Split Sections */}
        
        {/* Section A - Text Left, Image Right */}
        <section className="relative bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 min-h-[600px]">
              
              {/* Text */}
              <div className="flex items-center px-8 md:px-16 py-20 md:py-32">
                <div className="observe">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#0B0D10] leading-tight">
                    Built for<br />Indian Rooftops.
                  </h2>
                  <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-6">
                    Extreme heat. Monsoon storms. Dust. Humidity.
                  </p>
                  <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
                    Our systems are engineered to withstand the harshest conditions India throws at them — and keep performing for 25+ years.
                  </p>
                </div>
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
                <div className="observe">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#0B0D10] leading-tight">
                    Expert<br />Installation.
                  </h2>
                  <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-6">
                    Precision engineering meets skilled craftsmanship.
                  </p>
                  <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
                    Every installation is executed by certified professionals who understand structural integrity, electrical safety, and long-term performance.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. RECOMMENDED SYSTEMS - Light Gradient */}
        <section 
          id="recommended" 
          className="py-40 md:py-48"
          style={{
            background: 'linear-gradient(180deg, #fafbfc 0%, #f5f7f9 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-24 text-center text-[#0B0D10] observe">
              Complete hybrid<br />solution.
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

        {/* 6. IMPACT NUMBERS - Dark Background - Balanced Layout */}
        <section className="py-32 md:py-40" style={{ background: '#0B1C3D' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 md:divide-x md:divide-white/10">
              
              <div className="text-center observe">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-[#00D26A] tracking-tight whitespace-nowrap">3-in-1</div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">Power Sources</div>
              </div>

              <div className="text-center observe">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-[#00D26A] tracking-tight whitespace-nowrap">100%</div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">Uptime Guarantee</div>
              </div>

              <div className="text-center observe">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-[#00D26A] tracking-tight whitespace-nowrap">540W+</div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">Panel Power</div>
              </div>

              <div className="text-center observe">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-[#00D26A] tracking-tight whitespace-nowrap">Pan-India</div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">Installation</div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. PREMIUM SOLAR CTA SECTION */}
        <section 
          className="parallax-section relative py-32 md:py-40 overflow-hidden"
          style={{
            backgroundImage: 'url(/beautiful-alternative-energy-plant-with-solar-panels.jpg)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Dark overlay for readability - lighter to show image */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Subtle green accent glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/15 to-transparent"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white observe leading-tight">
                Intelligent power<br />management system.
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-10 observe">
                Seamlessly switches between solar, battery, and grid for optimal efficiency.
              </p>
              <a 
                href="/contact" 
                className="inline-block w-full sm:w-auto bg-green-600 text-white px-8 py-4 text-lg font-semibold hover:bg-green-700 transition-all duration-300 observe text-center"
                style={{ 
                  borderRadius: '12px',
                  boxShadow: '0 0 40px rgba(0,200,100,0.3), 0 20px 60px rgba(22,163,74,0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(0,200,100,0.4), 0 25px 70px rgba(22,163,74,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0,200,100,0.3), 0 20px 60px rgba(22,163,74,0.4)';
                }}
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA - Minimal Luxury */}
        <section className="py-48 md:py-56 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#0B0D10] observe leading-tight">
              Ready for 24/7<br />uninterrupted power?
            </h2>
            <p className="text-xl text-[#6B7280] mb-16 observe">
              Get a free hybrid system consultation in 24 hours.
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
