import { useState } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipcode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form details
    const message = `Hi! 👋 I'm interested in solar solutions! ☀️

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📮 ZIP Code: ${formData.zipcode}

Please call me back. Thank you! 🙏`;

    // WhatsApp number (remove spaces and special characters)
    const whatsappNumber = '918860015034';
    
    // Create WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="bg-black text-white px-5 py-24 md:py-32 lg:py-40 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 leading-tight">
            Ready to make
            <br />
            the switch?
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 md:mb-16 leading-relaxed">
            Get a free, no-obligation quote in under 60 seconds.
          </p>

          <form className="space-y-6 max-w-2xl" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-zinc-900 border border-zinc-800 px-6 py-4 text-lg focus:outline-none focus:border-zinc-600 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-zinc-900 border border-zinc-800 px-6 py-4 text-lg focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900 border border-zinc-800 px-6 py-4 text-lg focus:outline-none focus:border-zinc-600 transition-colors"
            />
            <input
              type="text"
              name="zipcode"
              placeholder="ZIP code"
              value={formData.zipcode}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900 border border-zinc-800 px-6 py-4 text-lg focus:outline-none focus:border-zinc-600 transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-white text-black px-8 py-5 text-lg font-semibold hover:bg-zinc-200 transition-colors"
            >
              Get My Free Quote
            </button>
            <p className="text-sm text-zinc-500 text-center">
              No spam. Your information is safe with us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
