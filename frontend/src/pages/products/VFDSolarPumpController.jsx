export default function VFDSolarPumpController() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fefefd' }}>
      
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#fefefd' }}>
        <div className="w-full px-6 md:px-12 lg:px-20 py-32 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <div>
                <div className="text-sm text-green-600 font-medium mb-6 uppercase tracking-wider">
                  Sunfarm Series
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] text-[#0B0D10]">
                  VFD Solar Pump<br />Controller
                </h1>
                <p className="text-2xl md:text-3xl mb-12 font-light text-[#475063]">
                  Efficient water pumping with solar power.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="inline-block bg-green-600 text-white px-10 py-5 text-lg font-semibold hover:bg-green-700 transition-colors text-center"
                  >
                    Get Price
                  </a>
                  <a 
                    href="tel:+918860015074" 
                    className="inline-block border-2 border-[#0B0D10] text-[#0B0D10] px-10 py-5 text-lg font-semibold hover:bg-[#0B0D10] hover:text-white transition-colors text-center"
                  >
                    Talk to Expert
                  </a>
                </div>
              </div>

              <div className="flex justify-center items-center order-first md:order-last">
                <img 
                  src="/products/vfd-solarpump-controller.png" 
                  alt="Sunfarm Series VFD Solar Pump Controller" 
                  className="w-full max-w-2xl"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECS */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-20">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-green-600 leading-tight">2.2</div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-4">15kW</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Range</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">MPPT</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Built-in</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">VFD</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Speed Control</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">Auto</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHASE OPTIONS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#fefefd' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#0B0D10]">
            Single & three phase
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8">
              <h3 className="text-3xl font-bold mb-6 text-[#0B0D10]">Single Phase</h3>
              <p className="text-lg text-[#475063] mb-6">For small agricultural applications</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold">2.2kW</span>
                <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold">4.0kW</span>
              </div>
            </div>

            <div className="bg-white p-8">
              <h3 className="text-3xl font-bold mb-6 text-[#0B0D10]">Three Phase</h3>
              <p className="text-lg text-[#475063] mb-6">For large-scale irrigation</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold">2.2kW</span>
                <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold">4.0kW</span>
                <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold">5.5kW</span>
                <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold">7.5kW</span>
                <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold">11kW</span>
                <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold">15kW</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#0B0D10]">
            Smart features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Built-in MPPT</h3>
              <p className="text-[#475063] leading-relaxed">
                Integrated MPPT solar charger maximizes solar energy extraction
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Wide DC Voltage Range</h3>
              <p className="text-[#475063] leading-relaxed">
                Supports 150V–400V / 250V–800V for flexible system design
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Pump Speed Control</h3>
              <p className="text-[#475063] leading-relaxed">
                Variable frequency drive for optimal pump performance
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Generator Compatible</h3>
              <p className="text-[#475063] leading-relaxed">
                Works seamlessly with generator backup when needed
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">System Protection</h3>
              <p className="text-[#475063] leading-relaxed">
                Comprehensive protection features ensure safe operation
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Easy Installation</h3>
              <p className="text-[#475063] leading-relaxed">
                Simple setup and minimal maintenance requirements
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. USE CASE */}
      <section className="relative py-32 md:py-40 overflow-hidden" style={{ backgroundColor: '#fefefd' }}>
        <div className="absolute inset-0">
          <img 
            src="/Factory rooftop with panels.jpg" 
            alt="Solar pump installation" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0B0D10]">
              Water pumping.<br />No electricity bills.
            </h2>
            <div className="space-y-4 text-lg text-[#475063]">
              <p>✓ Agricultural irrigation</p>
              <p>✓ Drinking water supply</p>
              <p>✓ Livestock watering</p>
              <p>✓ Community water systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
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
