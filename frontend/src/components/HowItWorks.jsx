import { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    { 
      number: "01",
      title: "Consultation", 
      description: "We visit your home or rooftop to understand your electricity needs." 
    },
    { 
      number: "02",
      title: "System Design", 
      description: "We design a solar system that fits your space and budget." 
    },
    { 
      number: "03",
      title: "Installation", 
      description: "Our team installs the system safely at your property." 
    },
    { 
      number: "04",
      title: "Activation & Support", 
      description: "We turn on your system and stay with you for ongoing support." 
    }
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleSteps((prev) => [...new Set([...prev, index])]);
              }, index * 150); // Stagger each step by 150ms
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white text-black py-20 md:py-28 lg:py-36">
      <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 lg:mb-28 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 md:mb-4">
            How it works
          </h2>
          <p className="text-base md:text-lg text-zinc-500">
            From first call to powered-on system.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-24 lg:space-y-28">
          {steps.map((step, index) => (
            <div 
              key={index} 
              ref={(el) => (stepRefs.current[index] = el)}
              className={`relative transition-all duration-700 ease-out ${
                visibleSteps.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Large faint number in background */}
              <div className={`absolute -left-2 md:-left-4 -top-4 md:-top-6 text-[120px] md:text-[140px] lg:text-[160px] font-bold text-zinc-200 leading-none select-none pointer-events-none transition-opacity duration-700 ${
                visibleSteps.includes(index) ? 'opacity-100' : 'opacity-0'
              }`}>
                {step.number}
              </div>
              
              {/* Content */}
              <div className="relative pl-0">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-black">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-zinc-600 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
