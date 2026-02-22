import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Landing from './pages/Landing'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'

// Solution pages
import Residential from './pages/solutions/Residential'
import Commercial from './pages/solutions/Commercial'
import HybridSystems from './pages/solutions/HybridSystems'
import SolarPanelCleaning from './pages/solutions/SolarPanelCleaning'

// Product pages
import SolarPanelMonoPerc from './pages/products/SolarPanelMonoPerc'
import SolarPanelsPoly from './pages/products/SolarPanelsPoly'
import SparkleHybridSolarInverters from './pages/products/SparkleHybridSolarInverters'
import HybridSolarInverter from './pages/products/HybridSolarInverter'
import OnGridSolarInverter from './pages/products/OnGridSolarInverter'
import OffGridPWMSolarInverter from './pages/products/OffGridPWMSolarInverter'
import OffGridMPPTSolarInverter from './pages/products/OffGridMPPTSolarInverter'
import SolarMicroInverter from './pages/products/SolarMicroInverter'
import EnergyStorageSystems from './pages/products/EnergyStorageSystems'
import SolarTubularBatteries from './pages/products/SolarTubularBatteries'
import VFDSolarPumpController from './pages/products/VFDSolarPumpController'

// Service pages
import Services from './pages/Services'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          
          {/* Solutions */}
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/residential" element={<Residential />} />
          <Route path="solutions/commercial" element={<Commercial />} />
          <Route path="solutions/hybrid-systems" element={<HybridSystems />} />
          <Route path="solutions/solar-panel-cleaning" element={<SolarPanelCleaning />} />
          
          {/* Products - No main products page, only individual product pages */}
          <Route path="products/solar-panel-mono-perc" element={<SolarPanelMonoPerc />} />
          <Route path="products/solar-panels-poly" element={<SolarPanelsPoly />} />
          <Route path="products/sparkle-hybrid-solar-inverters" element={<SparkleHybridSolarInverters />} />
          <Route path="products/hybrid-solar-inverter" element={<HybridSolarInverter />} />
          <Route path="products/on-grid-solar-inverter" element={<OnGridSolarInverter />} />
          <Route path="products/off-grid-pwm-solar-inverter" element={<OffGridPWMSolarInverter />} />
          <Route path="products/off-grid-mppt-solar-inverter" element={<OffGridMPPTSolarInverter />} />
          <Route path="products/solar-micro-inverter" element={<SolarMicroInverter />} />
          <Route path="products/energy-storage-systems" element={<EnergyStorageSystems />} />
          <Route path="products/solar-tubular-batteries" element={<SolarTubularBatteries />} />
          <Route path="products/vfd-solar-pump-controller" element={<VFDSolarPumpController />} />
          
          {/* Services */}
          <Route path="services" element={<Services />} />
          
          {/* Other */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
