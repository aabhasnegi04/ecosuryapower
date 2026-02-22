import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white px-5 py-12 md:py-16 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-12">
          
          {/* Company Info */}
          <div className="md:col-span-1">
            <img src="/eco_surya_logo.png" alt="Eco Surya" className="h-20 md:h-24 w-auto mb-4" />
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Leading the clean energy revolution across India.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 text-base md:text-lg">Get in touch</h4>
            <div className="space-y-2 text-zinc-400 text-sm md:text-base">
              <p>
                <a href="tel:+918860015074" className="hover:text-white transition-colors">
                  Prince: +91 88600 15074
                </a>
              </p>
              <p>
                <a href="tel:+918860015035" className="hover:text-white transition-colors">
                  Jestin: +91 88600 15035
                </a>
              </p>
              <p>
                <a href="https://wa.me/918860015074" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </p>
              <p>
                <a href="mailto:ecosuryapower@gmail.com" className="hover:text-white transition-colors">
                  ecosuryapower@gmail.com
                </a>
              </p>
              <p>C-5/46, Sector-6 Rohini, Delhi 110085</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-base md:text-lg">Quick links</h4>
            <ul className="space-y-2 text-zinc-400 text-sm md:text-base">
              <li><Link to="/solutions/residential" className="hover:text-white transition-colors">Residential Solar</Link></li>
              <li><Link to="/solutions/commercial" className="hover:text-white transition-colors">Commercial Solar</Link></li>
              <li><Link to="/solutions/hybrid-systems" className="hover:text-white transition-colors">Hybrid Systems</Link></li>
              <li><Link to="/solutions/solar-panel-cleaning" className="hover:text-white transition-colors">Panel Cleaning</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>&copy; 2026 Eco Surya. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
