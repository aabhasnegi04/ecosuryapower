export default function ContactReassurance() {
  return (
    <section className="bg-zinc-100 text-black py-16 md:py-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            Still have questions? We're here.
          </h3>
        </div>

        {/* 3 Compact Blocks */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          
          {/* Talk to a solar expert */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-green-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              Talk to a solar expert
            </h4>
            <div className="space-y-1 mb-1">
              <a href="tel:+918860015074" className="text-base md:text-lg text-green-600 font-medium hover:underline block">
                Prince: +91 88600 15074
              </a>
              <a href="tel:+918860015035" className="text-base md:text-lg text-green-600 font-medium hover:underline block">
                Jestin: +91 88600 15035
              </a>
            </div>
            <p className="text-sm md:text-base text-zinc-600">
              Mon–Sat, 10am–7pm
            </p>
          </div>

          {/* Serving all over India */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-green-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              Serving all over India
            </h4>
            <p className="text-sm md:text-base text-zinc-600">
              Residential, commercial & industrial
            </p>
          </div>

          {/* End-to-end support */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-green-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-lg md:text-xl font-semibold mb-2">
              End-to-end support
            </h4>
            <p className="text-sm md:text-base text-zinc-600">
              Design → Installation → Maintenance
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
