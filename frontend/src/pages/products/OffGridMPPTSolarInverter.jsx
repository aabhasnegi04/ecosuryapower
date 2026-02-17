export default function OffGridMPPTSolarInverter() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e6e6e6' }}>
      
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#e6e6e6' }}>
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-24 sm:py-28 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              
              <div>
                <div className="text-xs sm:text-sm text-green-600 font-medium mb-3 sm:mb-4 md:mb-6 uppercase tracking-wider">
                  Flare Series
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-[1.05] text-[#0B0D10]">
                  Off-Grid MPPT<br />Solar Inverter
                </h1>
                <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-12 font-light text-[#475063]">
                  Maximum power extraction with intelligent MPPT.
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
                  src="/products/off-grid-pmmt-solar-inverter.png" 
                  alt="Flare Series Off-Grid MPPT Solar Inverter" 
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
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 leading-tight">1kVA</div>
              <div className="text-lg sm:text-xl md:text-2xl text-zinc-400 my-0.5 sm:my-1">—</div>
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 leading-tight mb-2 sm:mb-3 md:mb-4">150kVA</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-green-600 leading-none mb-2 sm:mb-3 md:mb-4">MPPT</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">True MPPT</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-green-600 leading-none mb-2 sm:mb-3 md:mb-4">IoT</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">Remote Monitor</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-green-600 leading-none mb-2 sm:mb-3 md:mb-4">DSP</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-zinc-500">Advanced</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#e6e6e6' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-16 text-center text-[#0B0D10]">
            Intelligent features
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0B0D10]">True MPPT</h3>
              <p className="text-sm sm:text-base text-[#475063] leading-relaxed">
                Maximum Power Point Tracking extracts 20-30% more energy from solar panels
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0B0D10]">Configurable Settings</h3>
              <p className="text-sm sm:text-base text-[#475063] leading-relaxed">
                Customize charging parameters and system behavior for your specific needs
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0B0D10]">AI Charge Sharing</h3>
              <p className="text-sm sm:text-base text-[#475063] leading-relaxed">
                Intelligent load distribution between solar, battery, and grid sources
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0B0D10]">Remote Monitoring</h3>
              <p className="text-sm sm:text-base text-[#475063] leading-relaxed">
                IoT-enabled remote monitoring and control from anywhere
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
            alt="Off-grid MPPT installation" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-[#0B0D10]">
              Maximum efficiency.<br />Any weather condition.
            </h2>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-[#475063]">
              <p>✓ Large off-grid installations</p>
              <p>✓ Industrial applications</p>
              <p>✓ Remote telecom towers</p>
              <p>✓ Critical backup systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 mb-16 md:mb-0" style={{ backgroundColor: '#e6e6e6' }}>
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
