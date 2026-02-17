import { useEffect, useRef } from 'react';
import SEO from '../components/SEO';

export default function About() {
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
        title="About Eco Surya - Engineering India's Solar Future"
        description="Powering India's transition to clean energy with reliable solar systems built for real-world conditions. 25-year commitment to energy independence."
        keywords="about eco surya, solar company india, solar engineering, renewable energy"
        url="https://www.ecosuryapower.com/about"
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

        .number-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { text-shadow: 0 0 20px rgba(34, 197, 94, 0.4); }
          50% { text-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
        }
      `}</style>

      <div className="min-h-screen bg-black">
        
        {/* 1. CINEMATIC HERO - Full Screen Video */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
          
          {/* Background Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/about/about_hero_video.mp4" type="video/mp4" />
          </video>

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

          {/* Content */}
          <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 text-center">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] font-bold mb-6 md:mb-8 leading-[0.9] tracking-[-0.04em] text-white">
                Powering India's<br />Energy Independence.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 md:mb-16 text-white/90 leading-relaxed font-light max-w-3xl mx-auto px-4">
                Built for real homes. Real weather. Real reliability.
              </p>
              
              <div className="flex justify-center items-center px-4">
                <a 
                  href="/contact" 
                  className="w-full sm:w-auto inline-block bg-green-600 text-white px-10 md:px-12 py-5 md:py-6 text-base md:text-lg font-semibold hover:bg-green-700 transition-all duration-300 text-center"
                  style={{ 
                    borderRadius: '14px',
                    boxShadow: '0 20px 60px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* 2. WHY WE EXIST - Dark Section With Bold Statement */}
        <section className="relative py-40 md:py-48" style={{ background: '#0f172a' }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
            
            {/* Main Statement */}
            <blockquote className="observe mb-20">
              <p className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white mb-8">
                "Solar is not just savings.<br />It's energy sovereignty."
              </p>
            </blockquote>

            {/* 3 Pillars */}
            <div className="grid md:grid-cols-3 gap-12 md:gap-16 mt-20">
              
              <div className="observe">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-600/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Independent</h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Break free from grid dependency and rising tariffs.
                </p>
              </div>

              <div className="observe">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-600/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Reliable</h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Engineered for extreme Indian weather conditions.
                </p>
              </div>

              <div className="observe">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-600/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Future-Ready</h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  25-year systems built for tomorrow's energy needs.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. ENGINEERING PHILOSOPHY - Split Sections with Images */}
        
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

        {/* Section C - Text Left, Image Right */}
        <section className="relative bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 min-h-[600px]">
              
              {/* Text */}
              <div className="flex items-center px-8 md:px-16 py-20 md:py-32">
                <div className="observe">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#0B0D10] leading-tight">
                    Premium<br />Components.
                  </h2>
                  <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed mb-6">
                    No compromises. Only proven technology.
                  </p>
                  <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
                    From 540W+ monocrystalline panels to intelligent hybrid inverters — every component is selected for maximum efficiency and longevity.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative min-h-[400px] md:min-h-full">
                <img 
                  src="/about/solar-inverter.jpg" 
                  alt="Solar Inverter Technology" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* 4. IMPACT NUMBERS - Glowing Stats */}
        <section className="relative py-40 md:py-48" style={{ background: '#0f172a' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-20">
              
              <div className="text-center observe">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-green-500 number-glow">₹0</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-zinc-400">Electricity Goal</div>
              </div>

              <div className="text-center observe">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-green-500 number-glow">25</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-zinc-400">Years Warranty</div>
              </div>

              <div className="text-center observe">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-green-500 number-glow">540W+</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-zinc-400">Panel Power</div>
              </div>

              <div className="text-center observe">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-green-500 number-glow whitespace-nowrap">Pan-India</div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-zinc-400">Installation</div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. PROCESS - Card-Based Floating Steps */}
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center text-[#0B0D10] observe">
              How we work.
            </h2>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-5 gap-6">
              
              {[
                { num: '01', title: 'Consultation', desc: 'Understand your energy needs' },
                { num: '02', title: 'Design', desc: 'Custom system engineering' },
                { num: '03', title: 'Installation', desc: 'Professional setup' },
                { num: '04', title: 'Activation', desc: 'System commissioning' },
                { num: '05', title: 'Support', desc: '25-year commitment' }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="observe group"
                >
                  <div 
                    className="bg-white p-8 rounded-2xl border-2 border-zinc-200 hover:border-green-600 transition-all duration-300 hover:-translate-y-2"
                    style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}
                  >
                    <div className="text-5xl font-bold text-green-600 mb-4">{step.num}</div>
                    <h3 className="text-xl font-bold text-[#0B0D10] mb-3">{step.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
              
            </div>

            {/* Mobile Stack */}
            <div className="md:hidden space-y-6">
              {[
                { num: '01', title: 'Consultation', desc: 'Understand your energy needs' },
                { num: '02', title: 'Design', desc: 'Custom system engineering' },
                { num: '03', title: 'Installation', desc: 'Professional setup' },
                { num: '04', title: 'Activation', desc: 'System commissioning' },
                { num: '05', title: 'Support', desc: '25-year commitment' }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="observe bg-white p-6 rounded-2xl border-2 border-zinc-200"
                  style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}
                >
                  <div className="text-4xl font-bold text-green-600 mb-3">{step.num}</div>
                  <h3 className="text-xl font-bold text-[#0B0D10] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. FULL-WIDTH VISUAL BREAK */}
        <section className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
          
          {/* Background Image */}
          <img 
            src="/about/Close-up Solar Panel Texture Shot.jpg" 
            alt="Solar Panel Close-up" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight observe">
              Built for the<br />next 25 years.
            </h2>
          </div>
        </section>

        {/* 7. FINAL CTA - Cinematic */}
        <section className="relative py-40 md:py-48 overflow-hidden" style={{ background: '#0f172a' }}>
          
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-600/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white observe leading-tight">
              Ready to take control<br />of your power?
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-16 observe">
              Start your solar journey with India's most reliable systems.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-green-600 text-white px-16 py-7 text-xl font-semibold hover:bg-green-700 transition-all duration-300 observe hover:-translate-y-1"
              style={{ 
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(34, 197, 94, 0.5)'
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
