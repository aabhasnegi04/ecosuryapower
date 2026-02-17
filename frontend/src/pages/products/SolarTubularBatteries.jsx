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

      {/* 2. SPECS */}
      <section className="py-32 md:py-40 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-20">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-green-600 leading-tight">40AH</div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-4">250AH</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Range</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">Deep</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Cycle</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">Long</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Life</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">Low</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Maintenance</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#0B0D10]">
            Built to last
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">PPCP Container</h3>
              <p className="text-[#475063] leading-relaxed">
                Durable polypropylene copolymer container for long life
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">High Porosity Separators</h3>
              <p className="text-[#475063] leading-relaxed">
                Envelope separators for better electrolyte circulation
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Microporous Ceramic Vent</h3>
              <p className="text-[#475063] leading-relaxed">
                Prevents acid spillage and ensures safe operation
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Acid Resistant Gauntlet</h3>
              <p className="text-[#475063] leading-relaxed">
                High tensile polyester gauntlet for durability
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Low Resistance Fasteners</h3>
              <p className="text-[#475063] leading-relaxed">
                Ensures efficient current flow and minimal losses
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Heavy Duty Terminals</h3>
              <p className="text-[#475063] leading-relaxed">
                Robust terminals for reliable connections
              </p>
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
