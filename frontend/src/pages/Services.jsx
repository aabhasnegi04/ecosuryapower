export default function Services() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl">
            End-to-end solar solutions from design to maintenance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Installation */}
          <div className="border border-zinc-200 p-8 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Installation</h3>
            <p className="text-zinc-600 mb-4">
              Professional on-site installation by certified technicians
            </p>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>• Site survey & assessment</li>
              <li>• System design & engineering</li>
              <li>• Professional installation</li>
              <li>• Safety compliance</li>
              <li>• Grid connection support</li>
            </ul>
          </div>

          {/* Maintenance */}
          <div className="border border-zinc-200 p-8 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Maintenance</h3>
            <p className="text-zinc-600 mb-4">
              Regular maintenance to ensure optimal performance
            </p>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>• Panel cleaning</li>
              <li>• Performance monitoring</li>
              <li>• Inverter health checks</li>
              <li>• Connection inspection</li>
              <li>• Preventive maintenance</li>
            </ul>
          </div>

          {/* AMC Support */}
          <div className="border border-zinc-200 p-8 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">AMC Support</h3>
            <p className="text-zinc-600 mb-4">
              Annual maintenance contracts for worry-free operation
            </p>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>• Scheduled visits</li>
              <li>• Priority support</li>
              <li>• Performance reports</li>
              <li>• Spare parts coverage</li>
              <li>• 24/7 helpline</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="bg-black text-white p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need service support?
          </h2>
          <p className="text-lg text-zinc-300 mb-6">
            Our team is ready to help
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded hover:bg-green-700 transition-colors"
          >
            Contact Support
          </a>
        </div>

      </div>
    </div>
  )
}
