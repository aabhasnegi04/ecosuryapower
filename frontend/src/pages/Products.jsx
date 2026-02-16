export default function Products() {
  const productCategories = [
    {
      name: "Solar Inverters",
      description: "Convert DC to AC with maximum efficiency",
      products: [
        { name: "Sparkle Hybrid Solar Inverters", link: "/products/sparkle-hybrid-solar-inverters" },
        { name: "Hybrid Solar Inverter", link: "/products/hybrid-solar-inverter" },
        { name: "Single & Three Phase On-Grid Solar Inverter", link: "/products/on-grid-solar-inverter" },
        { name: "Off-Grid PWM Solar Inverter", link: "/products/off-grid-pwm-solar-inverter" },
        { name: "Off-Grid MPPT Solar Inverter", link: "/products/off-grid-mppt-solar-inverter" },
        { name: "Solar Micro Inverter", link: "/products/solar-micro-inverter" }
      ]
    },
    {
      name: "Solar Panels",
      description: "High-efficiency Tier-1 solar modules",
      products: [
        { name: "Solar Panel – Mono Half Cut / Mono PERC", link: "/products/solar-panel-mono-perc" },
        { name: "Solar Panels – Polycrystalline", link: "/products/solar-panels-poly" }
      ]
    },
    {
      name: "Energy Storage",
      description: "Store solar energy for use anytime",
      products: [
        { name: "Energy Storage Systems", link: "/products/energy-storage-systems" },
        { name: "Solar Tubular Batteries", link: "/products/solar-tubular-batteries" }
      ]
    },
    {
      name: "Solar Pumping",
      description: "Efficient water pumping with solar power",
      products: [
        { name: "VFD Solar Pump Controller", link: "/products/vfd-solar-pump-controller" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Products & Technology
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl">
            Certified solar components from trusted manufacturers
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-16 md:space-y-20">
          {productCategories.map((category, index) => (
            <div key={index} className="border-b border-zinc-200 pb-12 last:border-0">
              
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {category.name}
                </h2>
                <p className="text-lg text-zinc-600">
                  {category.description}
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, idx) => (
                  <a
                    key={idx}
                    href={product.link}
                    className="group p-6 border border-zinc-200 rounded-lg hover:border-green-600 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-green-600 transition-colors mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center text-sm text-zinc-500 group-hover:text-green-600 transition-colors">
                      View details
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-black text-white p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need help choosing the right products?
          </h2>
          <p className="text-lg text-zinc-300 mb-6">
            Our experts will guide you to the best solution
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded hover:bg-green-700 transition-colors"
          >
            Talk to an Expert
          </a>
        </div>

      </div>
    </div>
  )
}
