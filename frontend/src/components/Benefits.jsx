export default function Benefits() {
  const benefits = [
    {
      title: "Zero upfront cost",
      description: "Start saving from day one with flexible financing options tailored to your needs."
    },
    {
      title: "Energy independence",
      description: "Take control of your power. Reduce reliance on the grid and protect against rising rates."
    },
    {
      title: "Increase home value",
      description: "Solar installations boost property value by an average of 4% while cutting monthly bills."
    }
  ];

  return (
    <section className="bg-white text-black px-5 py-24 md:py-32 lg:py-40 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-20 md:mb-28 max-w-4xl leading-tight">
          Why solar makes sense
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <div className="text-6xl md:text-7xl font-bold text-zinc-200">
                0{index + 1}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                {benefit.title}
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
