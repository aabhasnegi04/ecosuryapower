import { useEffect, useRef, useState } from 'react';

export default function WhyAcube() {
  const [visibleBlocks, setVisibleBlocks] = useState([]);
  const [showRight, setShowRight] = useState(false);
  const blockRefs = useRef([]);
  const rightRef = useRef(null);

  const trustBlocks = [
    {
      title: "Pan-India installations",
      subtitle: "Across residential, commercial & industrial projects"
    },
    {
      title: "Certified components only",
      subtitle: "Tier-1 solar panels, inverters & storage systems"
    },
    {
      title: "End-to-end execution",
      subtitle: "Design, installation & post-installation support"
    },
    {
      title: "Transparent pricing",
      subtitle: "No hidden costs. Clear commitments."
    }
  ];

  useEffect(() => {
    // Observe each trust block
    const blockObservers = blockRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleBlocks((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    // Observe right column (desktop)
    const rightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowRight(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (rightRef.current) {
      rightObserver.observe(rightRef.current);
    }

    return () => {
      blockObservers.forEach((observer) => observer.disconnect());
      rightObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-white text-black py-20 md:py-28 lg:py-36">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-3">
            Why customers trust <span className="font-extrabold text-green-600">Eco Surya</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-500">
            Built for India. Designed to last.
          </p>
        </div>

        {/* Two Column Layout - Desktop / Single Column - Mobile */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          
          {/* LEFT SIDE - Trust Blocks (Progressive Reveal) */}
          <div className="space-y-5 md:space-y-6">
            {trustBlocks.map((block, index) => (
              <div
                key={index}
                ref={(el) => (blockRefs.current[index] = el)}
                className={`
                  p-6 md:p-7 lg:p-8
                  rounded-xl
                  transition-all duration-700 ease-out
                  ${index % 2 === 0 ? 'bg-zinc-50' : 'bg-white border border-zinc-200'}
                  ${
                    visibleBlocks.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }
                `}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 leading-tight">
                  {block.title}
                </h3>
                <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                  {block.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Belief / Promise (Desktop Only) */}
          <div 
            ref={rightRef}
            className={`
              hidden md:flex flex-col justify-center
              transition-opacity duration-1000
              ${showRight ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div className="space-y-7 lg:space-y-8 text-xl lg:text-2xl xl:text-3xl leading-[1.6] text-zinc-700">
              <p>
                We engineer energy independence.
              </p>
              <p>
                Precision-designed systems. Quality-first components.
              </p>
              <p className="text-black font-semibold pt-2">
                Solar solutions that simply work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
