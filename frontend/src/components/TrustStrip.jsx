export default function TrustStrip() {
  return (
    <section className="bg-white text-black py-16 md:py-20 lg:py-24 border-b border-zinc-200">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between items-center gap-8 md:gap-x-12 md:gap-y-8">
          <div className="text-base md:text-lg lg:text-xl text-zinc-600">
            Trusted by <span className="font-semibold text-black">500+ homes</span>
          </div>
          <div className="text-base md:text-lg lg:text-xl text-zinc-600">
            <span className="font-semibold text-black">25-year</span> warranty
          </div>
          <div className="text-base md:text-lg lg:text-xl text-zinc-600">
            <span className="font-semibold text-black">ISO certified</span>
          </div>
          <div className="text-base md:text-lg lg:text-xl text-zinc-600">
            <span className="font-semibold text-black">24/7</span> support
          </div>
        </div>
      </div>
    </section>
  );
}
