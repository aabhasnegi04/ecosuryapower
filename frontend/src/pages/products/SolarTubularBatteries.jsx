export default function SolarTubularBatteries() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e3e5e4' }}>
      
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#e3e5e4' }}>
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-24 sm:py-28 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              
              <div>
                <div className="text-xs sm:text-sm text-green-600 font-medium mb-3 sm:mb-4 md:mb-6 uppercase tracking-wider">
                  Energy Storage
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-[1.05] text-[#0B0D10]">
                  Solar Tubular<br />Batteries
                </h1>
                <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-12 font-light text-[#475063]">
                  Deep-cycle tubular batteries for solar storage.
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
                  src="/products/solar-tubular-batteries.png" 
                  alt="Solar Tubular Batteries" 
                  className="w-full max-w-md sm:max-w-lg md:max-w-2xl"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL FEATURE GRID - Premium Spec Showcase */}
      <section className="relative py-32 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0B0D10]">
              Built for Deep-Cycle Solar Storage
            </h2>
            <p className="mt-5 text-lg text-gray-600">
              Tubular battery technology designed for long life and reliable solar energy storage.
            </p>
          </div>

          {/* Spec Grid */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Spec Card 1 */}
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <div className="text-green-600 text-3xl md:text-4xl font-semibold">
                40AH – 250AH
              </div>
              <div className="mt-4 text-xs tracking-[0.3em] text-gray-400 uppercase">
                Capacity Range
              </div>
              <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                Wide range for various solar system sizes.
              </p>
              <div className="mt-6 h-[2px] w-12 bg-green-600 group-hover:w-20 transition-all duration-300"></div>
            </div>

            {/* Spec Card 2 */}
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <div className="text-green-600 text-3xl md:text-4xl font-semibold">
                Deep Cycle
              </div>
              <div className="mt-4 text-xs tracking-[0.3em] text-gray-400 uppercase">
                Design
              </div>
              <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                Optimized for repeated charge-discharge cycles.
              </p>
              <div className="mt-6 h-[2px] w-12 bg-green-600 group-hover:w-20 transition-all duration-300"></div>
            </div>

            {/* Spec Card 3 */}
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <div className="text-green-600 text-3xl md:text-4xl font-semibold">
                Long Life
              </div>
              <div className="mt-4 text-xs tracking-[0.3em] text-gray-400 uppercase">
                Durability
              </div>
              <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                Extended lifespan with tubular plate technology.
              </p>
              <div className="mt-6 h-[2px] w-12 bg-green-600 group-hover:w-20 transition-all duration-300"></div>
            </div>

            {/* Spec Card 4 */}
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <div className="text-green-600 text-3xl md:text-4xl font-semibold">
                Low
              </div>
              <div className="mt-4 text-xs tracking-[0.3em] text-gray-400 uppercase">
                Maintenance
              </div>
              <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                Minimal upkeep for hassle-free operation.
              </p>
              <div className="mt-6 h-[2px] w-12 bg-green-600 group-hover:w-20 transition-all duration-300"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE - Premium Framed Panel Style */}
      <section className="relative py-20 lg:py-44 overflow-hidden text-white">
        {/* Dark Spotlight Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1F3A67_0%,#0C1629_70%)]"></div>
        
        {/* Subtle Center Light Layer */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          
          {/* Desktop: Centered Product with Side Callouts */}
          <div className="hidden lg:flex items-center justify-center relative min-h-[600px]">
            
            {/* Ambient Glow Behind Frame */}
            <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(30,80,160,0.25)_0%,transparent_70%)] blur-3xl"></div>
            
            {/* Premium Framed Product Panel */}
            <div className="relative z-10 bg-gradient-to-b from-[#162B4F] to-[#101D34] p-16 rounded-3xl shadow-[0_80px_140px_rgba(0,0,0,0.85)] border border-white/10 hover:scale-[1.01] transition duration-500 ease-out">
              <div className="bg-[#F4F6F8] p-8 rounded-2xl shadow-inner">
                <img 
                  src="/products/solar-tubular-batteries.png" 
                  alt="Solar Tubular Batteries" 
                  className="w-[340px] mx-auto"
                />
              </div>
            </div>
            
            {/* LEFT FEATURES */}
            <div className="absolute left-0 space-y-20 z-20 -translate-x-32">
              
              <div className="flex items-center gap-4">
                <div className="w-28 h-[1px] bg-gradient-to-r from-white/10 via-white/30 to-white/60"></div>
                <div>
                  <h4 className="text-xl font-semibold tracking-wide">PPCP Container</h4>
                  <p className="text-sm text-white/50 mt-1">Durable polypropylene copolymer</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-28 h-[1px] bg-gradient-to-r from-white/10 via-white/30 to-white/60"></div>
                <div>
                  <h4 className="text-xl font-semibold tracking-wide">High Porosity Separators</h4>
                  <p className="text-sm text-white/50 mt-1">Better electrolyte circulation</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-28 h-[1px] bg-gradient-to-r from-white/10 via-white/30 to-white/60"></div>
                <div>
                  <h4 className="text-xl font-semibold tracking-wide">Microporous Ceramic Vent</h4>
                  <p className="text-sm text-white/50 mt-1">Prevents acid spillage</p>
                </div>
              </div>
              
            </div>
            
            {/* RIGHT FEATURES */}
            <div className="absolute right-0 space-y-20 z-20 translate-x-32">
              
              <div className="flex items-center gap-4 justify-end">
                <div className="text-right">
                  <h4 className="text-xl font-semibold tracking-wide">Acid Resistant Gauntlet</h4>
                  <p className="text-sm text-white/50 mt-1">High tensile polyester</p>
                </div>
                <div className="w-28 h-[1px] bg-gradient-to-l from-white/10 via-white/30 to-white/60"></div>
              </div>
              
              <div className="flex items-center gap-4 justify-end">
                <div className="text-right">
                  <h4 className="text-xl font-semibold tracking-wide">Low Resistance Fasteners</h4>
                  <p className="text-sm text-white/50 mt-1">Efficient current flow</p>
                </div>
                <div className="w-28 h-[1px] bg-gradient-to-l from-white/10 via-white/30 to-white/60"></div>
              </div>
              
              <div className="flex items-center gap-4 justify-end">
                <div className="text-right">
                  <h4 className="text-xl font-semibold tracking-wide">Heavy Duty Terminals</h4>
                  <p className="text-sm text-white/50 mt-1">Robust connections</p>
                </div>
                <div className="w-28 h-[1px] bg-gradient-to-l from-white/10 via-white/30 to-white/60"></div>
              </div>
              
            </div>
            
          </div>
          
          {/* Mobile: Vertical Stack Layout */}
          <div className="lg:hidden">
            
            {/* Product Frame */}
            <div className="flex justify-center mb-12">
              <div className="w-[90%] sm:w-[80%] md:w-[70%] bg-gradient-to-b from-[#162B4F] to-[#101D34] p-8 sm:p-10 md:p-12 rounded-3xl shadow-[0_80px_140px_rgba(0,0,0,0.85)] border border-white/10">
                <div className="bg-[#F4F6F8] p-6 sm:p-8 rounded-2xl shadow-inner">
                  <img 
                    src="/products/solar-tubular-batteries.png" 
                    alt="Solar Tubular Batteries" 
                    className="w-full max-w-[280px] mx-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* Features List */}
            <div className="mt-12 space-y-8 px-6 text-center max-w-md mx-auto">
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">PPCP Container</h4>
                <p className="text-white/60 text-sm mt-1">Durable polypropylene copolymer</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">Acid Resistant Gauntlet</h4>
                <p className="text-white/60 text-sm mt-1">High tensile polyester</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">Low Resistance Fasteners</h4>
                <p className="text-white/60 text-sm mt-1">Efficient current flow</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">Heavy Duty Terminals</h4>
                <p className="text-white/60 text-sm mt-1">Robust connections</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">High Porosity Separators</h4>
                <p className="text-white/60 text-sm mt-1">Better electrolyte circulation</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">Microporous Ceramic Vent</h4>
                <p className="text-white/60 text-sm mt-1">Prevents acid spillage</p>
              </div>
              
            </div>
            
          </div>
          
        </div>
      </section>

      {/* 4. USE CASE */}
      <section className="relative py-32 md:py-40 overflow-hidden" style={{ backgroundColor: '#e3e5e4' }}>
        <div className="absolute inset-0">
          <img 
            src="/Energy Storage.jpg" 
            alt="Battery storage" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0B0D10]">
              Deep discharge.<br />Long cycle life.
            </h2>
            <div className="space-y-4 text-lg text-[#475063]">
              <p>✓ Solar power storage systems</p>
              <p>✓ Off-grid installations</p>
              <p>✓ Backup power applications</p>
              <p>✓ Renewable energy projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0B0D10]">
            Get expert advice
          </h2>
          <p className="text-xl mb-12 text-[#475063]">
            Talk to our solar specialists
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-green-600 text-white px-12 py-6 text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <div className="mt-6">
            <a href="tel:+918860015074" className="text-lg text-[#475063] hover:text-green-600 transition-colors">
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
            className="flex items-center justify-center py-4 text-[#0B0D10] font-semibold hover:bg-green-50 transition-colors"
          >
            Get Price
          </a>
          <a 
            href="tel:+918860015074"
            className="flex items-center justify-center gap-2 py-4 text-[#0B0D10] font-semibold hover:bg-green-50 transition-colors"
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
