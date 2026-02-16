import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import StickyMobileCTA from './StickyMobileCTA'
import LeadPopup from './LeadPopup'

export default function Layout() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
      <LeadPopup />
    </div>
  )
}
