export default function HybridSolarInverter() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center bg-white">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-24 sm:py-28 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              
              <div>
                <div className="text-xs sm:text-sm text-green-600 font-medium mb-3 sm:mb-4 md:mb-6 uppercase tracking-wider">
                  Fusion Series
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-[1.05] text-[#0B0D10]">
                  Hybrid Solar<br />Inverter
                </h1>
                <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-12 font-light text-[#475063]">
                  Bidirectional power flow with ultimate flexibility.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-20 md:mb-0">
                  <a 
                    href="/contact" 
                    className="inline-block bg-green-600 text-white px-8 sm:px-10 py-3.5 sm:py-4 md:py-5 text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors text-center rounded-lg"
                  >
                    Get Price
                  </a>
                  <a 
                    href="tel:+918860015074" 
                    className="inline-block border-2 border-[#0B0D10] text-[#0B0D10] px-8 sm:px-10 py-3.5 sm:py-4 md:py-5 text-base sm:text-lg font-semibold hover:bg-[#0B0D10] hover:text-white transition-colors text-center rounded-lg"
                  >
                    Talk to Expert
                  </a>
                </div>
              </div>

              <div className="flex justify-center items-center order-first md:order-last">
                <img 
                  src="/products/hybrid-solar-inverter.png" 
                  alt="Fusion Series Hybrid Solar Inverter" 
                  className="w-full max-w-xs sm:max-w-sm md:max-w-lg"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECS */}
      <section className="py-12 sm:py-20 md:py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-16 lg:gap-20">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 leading-tight">5kVA</div>
              <div className="text-lg sm:text-xl md:text-2xl text-zinc-400 my-0.5 sm:my-1">—</div>
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 leading-tight mb-2 sm:mb-3 md:mb-4">150kVA</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-green-600 leading-tight">Bi</div>
              <div className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-2 sm:mb-3 md:mb-4">Directional</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">Inverter</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-green-600 leading-none mb-2 sm:mb-3 md:mb-4">IGBT</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">Rectifier</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-green-600 leading-none mb-2 sm:mb-3 md:mb-4">DSP</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">Multiple</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-16 text-center text-[#0B0D10]">
            Advanced capabilities
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0B0D10]">Bidirectional Inverter</h3>
              <p className="text-sm sm:text-base text-[#475063] leading-relaxed">
                Power flows both ways - from grid to battery and battery to grid
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0B0D10]">Flexibility in Design</h3>
              <p className="text-sm sm:text-base text-[#475063] leading-relaxed">
                Adaptable system architecture for diverse installation requirements
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0B0D10]">Grid Utilization</h3>
              <p className="text-sm sm:text-base text-[#475063] leading-relaxed">
                Intelligent grid management for optimal energy usage and cost savings
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0B0D10]">Battery-Less Operation</h3>
              <p className="text-sm sm:text-base text-[#475063] leading-relaxed">
                Can operate without batteries for grid-tied solar applications
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0B0D10]">IGBT Based Rectifier</h3>
              <p className="text-sm sm:text-base text-[#475063] leading-relaxed">
                High-efficiency power conversion with advanced IGBT technology
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0B0D10]">Multiple DSP Control</h3>
              <p className="text-sm sm:text-base text-[#475063] leading-relaxed">
                Advanced digital signal processing for superior performance and reliability
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. USE CASE */}
      <section className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/Factory rooftop with panels.jpg" 
            alt="Hybrid solar installation" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-[#0B0D10]">
              Ultimate flexibility.<br />Grid or battery.
            </h2>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-[#475063]">
              <p>✓ Commercial buildings</p>
              <p>✓ Industrial facilities</p>
              <p>✓ Large residential complexes</p>
              <p>✓ Grid-tied with battery backup</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-zinc-50 mb-16 md:mb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#0B0D10]">
            Get expert advice
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 text-[#475063]">
            Talk to our solar specialists
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-green-600 text-white px-10 sm:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors rounded-lg"
          >
            Get Free Consultation
          </a>
          <div className="mt-4 sm:mt-6">
            <a href="tel:+918860015074" className="text-sm sm:text-base md:text-lg text-[#475063] hover:text-green-600 transition-colors">
              or call +91 88600 15074
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-zinc-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 divide-x divide-zinc-200">
          <a 
            href="/contact"
            className="flex items-center justify-center py-4 text-[#0B0D10] font-semibold hover:bg-green-50 transition-colors active:bg-green-100"
          >
            Get Price
          </a>
          <a 
            href="tel:+918860015074"
            className="flex items-center justify-center gap-2 py-4 text-[#0B0D10] font-semibold hover:bg-green-50 transition-colors active:bg-green-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call
          </a>
        </div>
      </div>

    </div>
  )
}
