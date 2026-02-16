export default function OffGridPWMSolarInverter() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e6e6e6' }}>
      
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#e6e6e6' }}>
        <div className="w-full px-6 md:px-12 lg:px-20 py-32 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <div>
                <div className="text-sm text-green-600 font-medium mb-6 uppercase tracking-wider">
                  Elegant Series
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] text-[#0B0D10]">
                  Off-Grid PWM<br />Solar Inverter
                </h1>
                <p className="text-2xl md:text-3xl mb-12 font-light text-[#475063]">
                  Complete energy independence.
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
                  src="/products/off-grid-pwm-solar-inverter.png" 
                  alt="Elegant Series Off-Grid PWM Solar Inverter" 
                  className="w-full max-w-lg"
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
              <div className="text-5xl md:text-6xl font-bold text-green-600 leading-tight">1kVA</div>
              <div className="text-2xl text-zinc-400 my-1">—</div>
              <div className="text-5xl md:text-6xl font-bold text-green-600 leading-tight mb-4">5kVA</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Range</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">PWM</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">True CV</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-tight">5</div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Stage</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Charging</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-green-600 leading-none mb-4">DSP</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Technology</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VARIANTS */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#e6e6e6' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#0B0D10]">
            Two variants
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-zinc-200 p-8 hover:border-green-600 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 text-[#0B0D10]">PLUS</h3>
              <p className="text-lg text-[#475063] mb-6">
                Essential off-grid power
              </p>
              <div className="space-y-3 text-[#475063]">
                <p>✓ True CV PWM charging</p>
                <p>✓ LCD display</p>
                <p>✓ 5-stage battery charging</p>
              </div>
            </div>

            <div className="bg-white border-2 border-green-600 p-8 relative">
              <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 uppercase">
                Advanced
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#0B0D10]">UNIK</h3>
              <p className="text-lg text-[#475063] mb-6">
                Premium with AI charge sharing
              </p>
              <div className="space-y-3 text-[#475063]">
                <p>✓ AI charge sharing</p>
                <p>✓ Advanced DSP control</p>
                <p>✓ Enhanced LCD display</p>
                <p>✓ 5-stage intelligent charging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. USE CASE */}
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        {/* Background Image - Full Width, Opaque */}
        <div className="absolute inset-0">
          <img 
            src="/Factory rooftop with panels.jpg" 
            alt="Off-grid installation" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0B0D10]">
              Power anywhere.<br />No grid needed.
            </h2>
            <div className="space-y-4 text-lg text-[#475063]">
              <p>✓ Remote homes</p>
              <p>✓ Off-grid locations</p>
              <p>✓ Backup power</p>
              <p>✓ Unreliable grid areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#e6e6e6' }}>
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
