export default function SolarPanelsPoly() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e5e9ea' }}>
      
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#e5e9ea' }}>
        <div className="w-full px-6 md:px-12 lg:px-20 py-32 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <div>
                <div className="text-sm text-green-600 font-medium mb-6 uppercase tracking-wider">
                  Solar Panels
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] text-[#0B0D10]">
                  Polycrystalline<br />Solar Panels
                </h1>
                <p className="text-2xl md:text-3xl mb-12 font-light text-[#475063]">
                  Cost-effective power. Proven reliability.
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
                  src="/products/solar-panels-poly.png" 
                  alt="Polycrystalline Solar Panel" 
                  className="w-full max-w-lg mt-12"
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
              <div className="text-5xl md:text-6xl font-bold text-green-600 leading-tight">40Wp</div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-4">345Wp</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Range</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">Cost</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Effective</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">Quick</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Manufacturing</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">Grid</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Free Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#0B0D10]">
            Proven technology
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Improved Conductivity</h3>
              <p className="text-[#475063] leading-relaxed">
                Enhanced electrical conductivity for better power output
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Quick Manufacturing Cycle</h3>
              <p className="text-[#475063] leading-relaxed">
                Faster production process reduces costs and delivery time
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Powerful Diffusion</h3>
              <p className="text-[#475063] leading-relaxed">
                Optimized diffusion process for consistent performance
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Potential to be Grid-Free</h3>
              <p className="text-[#475063] leading-relaxed">
                Ideal for off-grid applications and remote locations
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Cost-Efficient</h3>
              <p className="text-[#475063] leading-relaxed">
                Lower upfront investment for large-scale installations
              </p>
            </div>

            <div className="bg-zinc-50 p-8">
              <h3 className="text-2xl font-bold mb-3 text-[#0B0D10]">Reliable Performance</h3>
              <p className="text-[#475063] leading-relaxed">
                Decades of proven reliability in diverse conditions
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. USE CASE */}
      <section className="relative py-32 md:py-40 overflow-hidden" style={{ backgroundColor: '#e5e9ea' }}>
        <div className="absolute inset-0">
          <img 
            src="/Factory rooftop with panels.jpg" 
            alt="Solar installation" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0B0D10]">
              Best value for<br />large installations.
            </h2>
            <div className="space-y-4 text-lg text-[#475063]">
              <p>✓ Large commercial installations</p>
              <p>✓ Industrial power systems</p>
              <p>✓ Off-grid applications</p>
              <p>✓ Budget-conscious projects</p>
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
