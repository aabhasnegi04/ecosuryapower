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
        title="Commercial Solar Solutions - Energy Infrastructure for Business | Eco Surya"
        description="Reduce operational costs with commercial solar. 4-6 year payback, accelerated depreciation, ESG compliance. Built for Indian industries."
        keywords="commercial solar, industrial solar, business solar, factory solar, warehouse solar, reduce energy costs"
        url="https://www.ecosuryapower.com/solutions/commercial"
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
                    src="/Factory rooftop with panels.jpg" 
                    alt="Commercial Solar Installation" 
                    className="w-full max-w-sm sm:max-w-md md:max-w-2xl hero-image"
                    style={{ 
                      borderRadius: '12px',
                      boxShadow: '0 25px 70px rgba(0,0,0,0.18)'
                    }}
                  />
                </div>

                {/* Text - Second on Mobile */}
                <div className="w-full">
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-green-600 font-bold mb-6 md:mb-10">
                    COMMERCIAL SOLUTIONS
                  </div>
                  <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold mb-6 md:mb-10 leading-[0.95] tracking-[-0.02em] text-[#0B0D10]">
                    Energy<br />Infrastructure<br />for Business.
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-14 text-[#6B7280] leading-relaxed font-light">
                    Reduce operational costs. Stabilize energy expenses.<br className="hidden sm:block" />
                    Built for Indian industries & institutions.
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
                      Schedule Site Audit
                    </a>
                    <a 
                      href="#case-study" 
                      className="inline-block border-2 border-[#0B0D10] text-[#0B0D10] px-8 sm:px-10 md:px-12 py-4 md:py-6 text-base md:text-lg font-semibold hover:bg-[#0B0D10] hover:text-white transition-all duration-300 text-center"
                      style={{ borderRadius: '14px' }}
                    >
                      View Case Studies
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEM SECTION - Soft Gray with Elevated Cards */}
        <section className="py-40 md:py-48" style={{ background: '#F5F6F8' }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-24 text-center text-[#0B0D10] observe">
              Why businesses<br />are switching.
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#0B0D10]">Rising Energy<br />Costs</h3>
                <p className="text-lg text-center text-[#6B7280]">Electricity tariffs impacting margins</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#0B0D10]">Unreliable Grid<br />Supply</h3>
                <p className="text-lg text-center text-[#6B7280]">Production interruptions</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#0B0D10]">Diesel Generator<br />Costs</h3>
                <p className="text-lg text-center text-[#6B7280]">High recurring fuel expenses</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[#0B0D10]">ESG & Sustainability<br />Goals</h3>
                <p className="text-lg text-center text-[#6B7280]">Reduce carbon footprint</p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. PROCESS TIMELINE - Modern Image-Based Journey */}
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 md:mb-20 text-center text-[#0B0D10] observe">
              Your commercial solar<br />journey.
            </h2>
            
            {/* Desktop: Cards with Connecting Line */}
            <div className="relative">
              {/* Subtle Connecting Line - Desktop Only */}
              <div className="hidden md:block absolute top-20 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-green-200 via-green-300 to-green-200 opacity-40"></div>
              
              <div className="grid md:grid-cols-5 gap-8 md:gap-12">
                
                {[
                  { 
                    step: '01', 
                    title: 'Energy Audit', 
                    desc: 'Site assessment',
                    image: '/Factory rooftop with panels.jpg'
                  },
                  { 
                    step: '02', 
                    title: 'ROI Planning', 
                    desc: 'System design',
                    image: '/beautiful-alternative-energy-plant-with-solar-panels.jpg'
                  },
                  { 
                    step: '03', 
                    title: 'Approvals', 
                    desc: 'Net metering',
                    image: '/reliability.jpg'
                  },
                  { 
                    step: '04', 
                    title: 'Installation', 
                    desc: 'Commissioning',
                    image: '/ResidentialSolar.jpg'
                  },
                  { 
                    step: '05', 
                    title: 'AMC Support', 
                    desc: 'Monitoring',
                    image: '/Hybrid Systems.jpg'
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

        {/* 4. INDUSTRIES WE SERVE */}
        <section className="py-40 md:py-48" style={{ background: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-24 text-center text-[#0B0D10] observe">
              Industries we serve.
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Warehouses */}
              <div 
                className="industry-card bg-white p-10 observe"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Warehouses</h3>
                <p className="text-base text-[#6B7280] mb-4">Large rooftop spaces ideal for solar installations</p>
                <div className="industry-underline"></div>
              </div>

              {/* Manufacturing */}
              <div 
                className="industry-card bg-white p-10 observe"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Manufacturing Units</h3>
                <p className="text-base text-[#6B7280] mb-4">High energy consumption, maximum savings potential</p>
                <div className="industry-underline"></div>
              </div>

              {/* IT Parks */}
              <div 
                className="industry-card bg-white p-10 observe"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">IT Parks</h3>
                <p className="text-base text-[#6B7280] mb-4">24/7 operations benefit from reliable solar power</p>
                <div className="industry-underline"></div>
              </div>

              {/* Hotels */}
              <div 
                className="industry-card bg-white p-10 observe"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Hotels</h3>
                <p className="text-base text-[#6B7280] mb-4">Reduce operational costs, enhance green credentials</p>
                <div className="industry-underline"></div>
              </div>

              {/* Hospitals */}
              <div 
                className="industry-card bg-white p-10 observe"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Hospitals</h3>
                <p className="text-base text-[#6B7280] mb-4">Critical power backup with solar + battery systems</p>
                <div className="industry-underline"></div>
              </div>

              {/* Educational */}
              <div 
                className="industry-card bg-white p-10 observe"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
                }}
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Educational Institutions</h3>
                <p className="text-base text-[#6B7280] mb-4">Teach sustainability while saving on energy bills</p>
                <div className="industry-underline"></div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. BUILT FOR INDIA - Split Sections */}
        
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

        {/* 6. RECOMMENDED SYSTEMS - Light Gradient */}
        <section 
          id="recommended" 
          className="py-40 md:py-48"
          style={{
            background: 'linear-gradient(180deg, #fafbfc 0%, #f5f7f9 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-24 text-center text-[#0B0D10] observe">
              Industrial-grade<br />components.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              
              {/* Card 1 */}
              <a 
                href="/products/on-grid-solar-inverter"
                className="product-card bg-white p-10 block observe"
                style={{
                  borderRadius: '24px',
                  boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
                  transform: 'translateY(-10px)'
                }}
              >
                <div className="mb-8 overflow-hidden" style={{ borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img 
                    src="/products/single-and-three-phase-on-grid-solar-inverter.png" 
                    alt="On-Grid Solar Inverter" 
                    className="w-full h-64 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0B0D10]">On-Grid Solar<br />Inverter</h3>
                <p className="text-base text-[#6B7280] mb-4">Net metering for maximum ROI</p>
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

        {/* 7. IMPACT NUMBERS - Dark Background - Balanced Layout */}
        <section className="py-32 md:py-40" style={{ background: '#0B1C3D' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 md:divide-x md:divide-white/10">
              
              <div className="text-center observe">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-[#00D26A] tracking-tight whitespace-nowrap">₹0</div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">Upfront Financing</div>
              </div>

              <div className="text-center observe">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-[#00D26A] tracking-tight whitespace-nowrap">4-6 Years</div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">Typical Payback</div>
              </div>

              <div className="text-center observe">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-[#00D26A] tracking-tight whitespace-nowrap">25+</div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">Years System Life</div>
              </div>

              <div className="text-center observe">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-[#00D26A] tracking-tight whitespace-nowrap">Pan-India</div>
                <div className="text-sm tracking-[0.2em] text-gray-400 uppercase">Installation</div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. PREMIUM SOLAR CTA SECTION */}
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
                Engineered for Indian<br />industrial conditions.
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-10 observe">
                Designed to perform in extreme heat, dust, and high-load environments.
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

        {/* 9. CASE STUDY SECTION */}
        <section id="case-study" className="py-40 md:py-48" style={{ background: '#F8F9FA' }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16 observe">
              <div className="text-xs uppercase tracking-[0.2em] text-green-600 font-bold mb-6">
                SUCCESS STORY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D10]">
                Real results from real businesses.
              </h2>
            </div>

            <div 
              className="bg-white p-8 md:p-12 lg:p-16 observe"
              style={{
                borderRadius: '24px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
              }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left - Image */}
                <div>
                  <img 
                    src="/Factory rooftop with panels.jpg" 
                    alt="Commercial Solar Case Study" 
                    className="w-full"
                    style={{ 
                      borderRadius: '16px',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>

                {/* Right - Content */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B0D10]">
                    250kW Rooftop Installation
                  </h3>
                  <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                    Installed a 250kW solar rooftop system for a textile manufacturing facility in Gujarat. The system generates clean energy while significantly reducing operational costs.
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-4xl font-bold text-green-600 mb-2">38%</div>
                      <div className="text-sm text-[#6B7280] uppercase tracking-wider">Yearly Cost Savings</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-green-600 mb-2">250kW</div>
                      <div className="text-sm text-[#6B7280] uppercase tracking-wider">System Capacity</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-green-600 mb-2">5.2 Years</div>
                      <div className="text-sm text-[#6B7280] uppercase tracking-wider">Payback Period</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-green-600 mb-2">280 Tons</div>
                      <div className="text-sm text-[#6B7280] uppercase tracking-wider">CO₂ Reduced/Year</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-green-600 font-semibold">
                    <span>View More Case Studies</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA - Minimal Luxury */}
        <section className="py-48 md:py-56 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#0B0D10] observe leading-tight">
              Ready to reduce your<br />operational energy costs?
            </h2>
            <p className="text-xl text-[#6B7280] mb-16 observe">
              Get a free commercial energy assessment within 48 hours.
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
              Schedule Site Audit
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
