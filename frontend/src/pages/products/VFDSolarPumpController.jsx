export default function VFDSolarPumpController() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fefefd' }}>
      
      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#fefefd' }}>
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-24 sm:py-28 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              
              <div>
                <div className="text-xs sm:text-sm text-green-600 font-medium mb-3 sm:mb-4 md:mb-6 uppercase tracking-wider">
                  Sunfarm Series
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-[1.05] text-[#0B0D10]">
                  VFD Solar Pump<br />Controller
                </h1>
                <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 sm:mb-8 md:mb-12 font-light text-[#475063]">
                  Efficient water pumping with solar power.
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
                  src="/products/vfd-solarpump-controller.png" 
                  alt="Sunfarm Series VFD Solar Pump Controller" 
                  className="w-full max-w-md sm:max-w-lg md:max-w-2xl"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECS - Technical Feature Grid */}
      <section className="relative py-32 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Engineered for Solar Pumping Excellence
            </h2>
            <p className="mt-5 text-lg text-gray-600">
              Built with advanced VFD and MPPT technology for efficient water pumping from solar power.
            </p>
          </div>

          {/* Spec Grid */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            {[
              {
                value: "2.2kW – 15kW",
                label: "Power Range",
                desc: "Scalable systems for various pump sizes and applications."
              },
              {
                value: "Built-in MPPT",
                label: "Maximum Power Tracking",
                desc: "Extract maximum power from solar panels efficiently."
              },
              {
                value: "VFD Control",
                label: "Variable Speed",
                desc: "Precise motor speed control for optimal performance."
              },
              {
                value: "Auto Operation",
                label: "Smart Control",
                desc: "Automatic operation based on solar availability."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-2xl
                          border border-gray-100
                          shadow-[0_10px_25px_rgba(0,0,0,0.04)]
                          transition duration-300
                          hover:-translate-y-2
                          hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="text-green-600 text-3xl md:text-4xl font-semibold">
                  {item.value}
                </div>
                
                <div className="mt-4 text-xs tracking-[0.3em] text-gray-400 uppercase">
                  {item.label}
                </div>
                
                <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Accent line */}
                <div className="mt-6 h-[2px] w-12 bg-green-600 group-hover:w-20 transition-all duration-300"></div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. PHASE OPTIONS - With Product Images */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#fefefd' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#0B0D10]">
            Single & three phase
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Single Phase Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 flex items-center justify-center min-h-[280px]">
                <img 
                  src="/products/vfd-solarpump-controller.png" 
                  alt="Single Phase VFD Solar Pump Controller" 
                  className="w-full max-w-xs object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3 text-[#0B0D10]">Single Phase</h3>
                <p className="text-lg text-[#475063] mb-6">For small agricultural applications</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer">2.2kW</span>
                  <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer">4.0kW</span>
                </div>
              </div>
            </div>

            {/* Three Phase Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 flex items-center justify-center min-h-[280px]">
                <img 
                  src="/products/vfd-solarpump-controller.png" 
                  alt="Three Phase VFD Solar Pump Controller" 
                  className="w-full max-w-xs object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3 text-[#0B0D10]">Three Phase</h3>
                <p className="text-lg text-[#475063] mb-6">For large-scale irrigation</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer">2.2kW</span>
                  <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer">4.0kW</span>
                  <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer">5.5kW</span>
                  <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer">7.5kW</span>
                  <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer">11kW</span>
                  <span className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-green-600 font-semibold rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors cursor-pointer">15kW</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PRODUCT SHOWCASE - Premium Framed Panel Style */}
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
                  src="/products/vfd-solarpump-controller.png" 
                  alt="VFD Solar Pump Controller" 
                  className="w-[340px] mx-auto"
                />
              </div>
            </div>
            
            {/* LEFT FEATURES */}
            <div className="absolute left-0 space-y-20 z-20 -translate-x-32">
              
              <div className="flex items-center gap-4">
                <div className="w-28 h-[1px] bg-gradient-to-r from-white/10 via-white/30 to-white/60"></div>
                <div>
                  <h4 className="text-xl font-semibold tracking-wide">Built-in MPPT</h4>
                  <p className="text-sm text-white/50 mt-1">Maximum solar extraction</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-28 h-[1px] bg-gradient-to-r from-white/10 via-white/30 to-white/60"></div>
                <div>
                  <h4 className="text-xl font-semibold tracking-wide">Pump Speed Control</h4>
                  <p className="text-sm text-white/50 mt-1">Variable frequency drive</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-28 h-[1px] bg-gradient-to-r from-white/10 via-white/30 to-white/60"></div>
                <div>
                  <h4 className="text-xl font-semibold tracking-wide">System Protection</h4>
                  <p className="text-sm text-white/50 mt-1">Comprehensive safety</p>
                </div>
              </div>
              
            </div>
            
            {/* RIGHT FEATURES */}
            <div className="absolute right-0 space-y-20 z-20 translate-x-32">
              
              <div className="flex items-center gap-4 justify-end">
                <div className="text-right">
                  <h4 className="text-xl font-semibold tracking-wide">Wide DC Voltage</h4>
                  <p className="text-sm text-white/50 mt-1">Flexible system design</p>
                </div>
                <div className="w-28 h-[1px] bg-gradient-to-l from-white/10 via-white/30 to-white/60"></div>
              </div>
              
              <div className="flex items-center gap-4 justify-end">
                <div className="text-right">
                  <h4 className="text-xl font-semibold tracking-wide">Generator Compatible</h4>
                  <p className="text-sm text-white/50 mt-1">Backup power support</p>
                </div>
                <div className="w-28 h-[1px] bg-gradient-to-l from-white/10 via-white/30 to-white/60"></div>
              </div>
              
              <div className="flex items-center gap-4 justify-end">
                <div className="text-right">
                  <h4 className="text-xl font-semibold tracking-wide">Easy Installation</h4>
                  <p className="text-sm text-white/50 mt-1">Simple setup</p>
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
                    src="/products/vfd-solarpump-controller.png" 
                    alt="VFD Solar Pump Controller" 
                    className="w-full max-w-[280px] mx-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* Features List */}
            <div className="mt-12 space-y-8 px-6 text-center max-w-md mx-auto">
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">Built-in MPPT</h4>
                <p className="text-white/60 text-sm mt-1">Maximum solar extraction</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">Wide DC Voltage</h4>
                <p className="text-white/60 text-sm mt-1">Flexible system design</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">Pump Speed Control</h4>
                <p className="text-white/60 text-sm mt-1">Variable frequency drive</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">Generator Compatible</h4>
                <p className="text-white/60 text-sm mt-1">Backup power support</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">System Protection</h4>
                <p className="text-white/60 text-sm mt-1">Comprehensive safety features</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5 border-l-2 border-white/20">
                <h4 className="text-lg font-semibold tracking-wide">Easy Installation</h4>
                <p className="text-white/60 text-sm mt-1">Simple setup and maintenance</p>
              </div>
              
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
