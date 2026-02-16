export default function Process() {
  const steps = [
    {
      title: "Free consultation",
      description: "We analyze your energy needs and design a custom solar solution."
    },
    {
      title: "Professional installation",
      description: "Our certified team handles everything from permits to final connection."
    },
    {
      title: "Start saving",
      description: "Watch your energy bills drop while your home value rises."
    }
  ];

  return (
    <section className="bg-zinc-50 text-black px-5 py-24 md:py-32 lg:py-40 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-28">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Simple process,
            <br />
            <span className="text-zinc-400">powerful results</span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-6 md:flex-col md:gap-8">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-black text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
