import { useState, useEffect } from 'react';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [energyType, setEnergyType] = useState(0);
  const energyTypes = ['energy future', 'residential energy', 'commercial energy', 'industrial energy'];

  useEffect(() => {
    let triggered = false;
    let timeoutId;

    timeoutId = setTimeout(() => {
      if (!triggered) {
        setIsOpen(true);
        triggered = true;
      }
    }, 10000);

    const handleScroll = () => {
      if (triggered) return;
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 40) {
        setIsOpen(true);
        triggered = true;
        clearTimeout(timeoutId);
      }
    };

    const handleMouseLeave = (e) => {
      if (triggered) return;
      if (e.clientY < 10 && window.innerWidth > 768) {
        setIsOpen(true);
        triggered = true;
        clearTimeout(timeoutId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Rotating energy type text
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setEnergyType((prev) => (prev + 1) % energyTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create WhatsApp message with form details
    const message = `Hi, I'm interested in solar solutions!

Name: ${formData.name}
Phone: ${formData.phone}
City: ${formData.city}

Please call me back. Thank you!`;

    // WhatsApp number (remove spaces and special characters)
    const whatsappNumber = '918860015034';
    
    // Create WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalScaleIn {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(30px);
          }
          50% {
            transform: scale(1.02) translateY(0);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideUpMobile {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        @keyframes successPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes underlineGrow {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes textFade {
          0% { 
            opacity: 0.3;
            transform: translateY(5px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-overlay {
          animation: overlayFadeIn 0.4s ease;
        }

        .modal-content {
          animation: modalScaleIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s backwards;
        }

        .modal-content-mobile {
          animation: slideUpMobile 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .input-glow {
          border-color: #16A34A;
          box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.15);
        }

        .success-check {
          animation: successPulse 0.6s ease;
        }

        .accent-underline {
          position: relative;
          display: inline-block;
        }

        .accent-underline::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #16A34A, #0E7C36);
          animation: underlineGrow 0.8s ease 0.6s backwards;
        }

        .energy-text {
          animation: textFade 0.6s ease;
        }
      `}</style>

      {/* Overlay with vignette */}
      <div 
        className="modal-overlay fixed inset-0 z-50 backdrop-blur-lg"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.25), rgba(0,0,0,0.5))'
        }}
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
        <div 
          className={`${window.innerWidth < 768 ? 'modal-content-mobile' : 'modal-content'} pointer-events-auto w-full rounded-[28px] md:rounded-[32px] overflow-hidden relative`}
          style={{
            maxWidth: window.innerWidth < 768 ? '100%' : '680px',
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 50px 120px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.5) inset',
            position: window.innerWidth < 768 ? 'fixed' : 'relative',
            bottom: window.innerWidth < 768 ? '0' : 'auto',
            left: window.innerWidth < 768 ? '0' : 'auto',
            right: window.innerWidth < 768 ? '0' : 'auto',
            borderBottomLeftRadius: window.innerWidth < 768 ? '0' : '32px',
            borderBottomRightRadius: window.innerWidth < 768 ? '0' : '32px',
            height: window.innerWidth < 768 ? '90vh' : 'auto',
          }}
        >
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-50 text-zinc-400 hover:text-zinc-700 transition-colors duration-200 cursor-pointer"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            
            {!isSuccess ? (
              <>
                {/* Heading with rotating text */}
                <h2 className="text-[2.25rem] md:text-[2.75rem] font-bold mb-4 text-[#0B0D10] leading-[1.05] tracking-tight">
                  Let's design your<br />
                  <span className="accent-underline energy-text" key={energyType}>
                    {energyTypes[energyType]}.
                  </span>
                </h2>
                <p className="text-sm md:text-base text-[#6B7280] mb-3">
                  Enter your city. We'll handle the rest.
                </p>

                {/* Subtle Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2.5 py-1 border border-zinc-200 text-zinc-500 text-xs rounded-md">
                    Residential
                  </span>
                  <span className="px-2.5 py-1 border border-zinc-200 text-zinc-500 text-xs rounded-md">
                    Commercial
                  </span>
                  <span className="px-2.5 py-1 border border-zinc-200 text-zinc-500 text-xs rounded-md">
                    Industrial
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-black/6 mb-6" />

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    autoFocus
                    required
                    className={`w-full px-4 py-3.5 bg-transparent border rounded-[10px] text-[#0B0D10] text-base placeholder:text-zinc-400 focus:outline-none transition-all duration-300 ${focusedField === 'name' ? 'input-glow' : 'border-black/15'}`}
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3.5 bg-transparent border rounded-[10px] text-[#0B0D10] text-base placeholder:text-zinc-400 focus:outline-none transition-all duration-300 ${focusedField === 'phone' ? 'input-glow' : 'border-black/15'}`}
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('city')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3.5 bg-transparent border rounded-[10px] text-[#0B0D10] text-base placeholder:text-zinc-400 focus:outline-none transition-all duration-300 ${focusedField === 'city' ? 'input-glow' : 'border-black/15'}`}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-[12px] font-semibold text-base text-white transition-all duration-300 flex items-center justify-center gap-2 mt-6 active:scale-[0.98]"
                    style={{
                      background: isSubmitting ? '#9CA3AF' : 'linear-gradient(145deg, #16A34A, #0E7C36)',
                      transform: isSubmitting ? 'none' : 'translateY(0)',
                      boxShadow: isSubmitting ? 'none' : '0 12px 30px rgba(22,163,74,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 20px 45px rgba(22,163,74,0.5), inset 0 1px 0 rgba(255,255,255,0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(22,163,74,0.4), inset 0 1px 0 rgba(255,255,255,0.3)';
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Get My Solar Estimate
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                </form>

                {/* Footer Text */}
                <p className="text-center text-xs text-zinc-400 mt-6">
                  No spam. No pressure.
                </p>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="success-check inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0B0D10] mb-2">We'll be in touch soon</h3>
                <p className="text-zinc-500">Expect a call within 24 hours</p>
              </div>
            )}

          </div>

        </div>
      </div>
    </>
  );
}
