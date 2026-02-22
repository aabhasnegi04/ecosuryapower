import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false)
  const [mobileView, setMobileView] = useState('main') // 'main', 'products', 'category', 'solutions'
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [featuredProduct, setFeaturedProduct] = useState({
    name: "Sparkle Hybrid Inverter",
    description: "Uninterrupted power with intelligent solar + battery control.",
    image: "/products/sparkle-hybrid-solar-inverters.png",
    link: "/products/sparkle-hybrid-solar-inverters"
  })
  const [featuredSolution, setFeaturedSolution] = useState({
    name: "Residential Solar",
    description: "Energy independence for your home with reliable backup power.",
    image: "/ResidentialSolar.jpg",
    link: "/solutions/residential"
  })

  const location = useLocation()
  const isProductPage = location.pathname.startsWith('/products/')
  const isSolutionPage = location.pathname.startsWith('/solutions/')
  const isAboutPage = location.pathname === '/about'
  const isLightMode = isProductPage || isSolutionPage || (isAboutPage && scrolled)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileClose = () => {
    setIsOpen(false)
    setTimeout(() => {
      setMobileView('main')
      setSelectedCategory(null)
    }, 300)
  }

  const handleProductsClick = () => {
    setMobileView('products')
  }

  const handleSolutionsClick = () => {
    setMobileView('solutions')
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setMobileView('category')
  }

  const handleBackClick = () => {
    if (mobileView === 'category') {
      setMobileView('products')
      setSelectedCategory(null)
    } else if (mobileView === 'products') {
      setMobileView('main')
    } else if (mobileView === 'solutions') {
      setMobileView('main')
    }
  }

  const productCategories = [
    {
      name: "Solar Inverters",
      products: [
        { 
          name: "Sparkle Hybrid Solar Inverters", 
          link: "/products/sparkle-hybrid-solar-inverters",
          image: "/products/sparkle-hybrid-solar-inverters.png",
          description: "Uninterrupted power with intelligent solar + battery control."
        },
        { 
          name: "Hybrid Solar Inverter", 
          link: "/products/hybrid-solar-inverter",
          image: "/products/hybrid-solar-inverter.png",
          description: "Seamless power management for modern energy needs."
        },
        { 
          name: "On-Grid Solar Inverter", 
          link: "/products/on-grid-solar-inverter",
          image: "/products/single-and-three-phase-on-grid-solar-inverter.png",
          description: "Grid-tied inverters for net metering systems."
        },
        { 
          name: "Off-Grid PWM Solar Inverter", 
          link: "/products/off-grid-pwm-solar-inverter",
          image: "/products/off-grid-pwm-solar-inverter.png",
          description: "Reliable off-grid solution with PWM charge controller."
        },
        { 
          name: "Off-Grid MPPT Solar Inverter", 
          link: "/products/off-grid-mppt-solar-inverter",
          image: "/products/off-grid-pmmt-solar-inverter.png",
          description: "Advanced off-grid inverter with MPPT technology."
        },
        { 
          name: "Solar Micro Inverter", 
          link: "/products/solar-micro-inverter",
          image: "/products/solar-micro-inverter.png",
          description: "Panel-level optimization for maximum output."
        }
      ]
    },
    {
      name: "Solar Panels",
      products: [
        { 
          name: "Mono PERC / Half Cut", 
          link: "/products/solar-panel-mono-perc",
          image: "/products/solar-panel-mono-half-cut-mono-perc.png",
          description: "High-efficiency monocrystalline panels with half-cut cell technology."
        },
        { 
          name: "Polycrystalline", 
          link: "/products/solar-panels-poly",
          image: "/products/solar-panels-poly.png",
          description: "Cost-effective solar solution with proven reliability."
        }
      ]
    },
    {
      name: "Energy Storage",
      products: [
        { 
          name: "Energy Storage Systems", 
          link: "/products/energy-storage-systems",
          image: "/products/energy-storage-systems.png",
          description: "Advanced lithium-ion battery storage solutions."
        },
        { 
          name: "Solar Tubular Batteries", 
          link: "/products/solar-tubular-batteries",
          image: "/products/solar-tubular-batteries.png",
          description: "Deep-cycle tubular batteries for solar storage."
        }
      ]
    },
    {
      name: "Solar Pumping",
      products: [
        { 
          name: "VFD Solar Pump Controller", 
          link: "/products/vfd-solar-pump-controller",
          image: "/products/vfd-solarpump-controller.png",
          description: "Efficient water pumping with solar power."
        }
      ]
    }
  ]

  const handleProductHover = (product) => {
    setFeaturedProduct({
      name: product.name,
      description: product.description,
      image: product.image,
      link: product.link
    })
  }

  const resetFeaturedProduct = () => {
    setFeaturedProduct({
      name: "Sparkle Hybrid Inverter",
      description: "Uninterrupted power with intelligent solar + battery control.",
      image: "/products/sparkle-hybrid-solar-inverters.png",
      link: "/products/sparkle-hybrid-solar-inverters"
    })
  }

  const solutions = [
    {
      name: "Residential Solar",
      description: "Energy independence for your home with reliable backup power.",
      image: "/ResidentialSolar.jpg",
      link: "/solutions/residential",
      icon: "🏠"
    },
    {
      name: "Commercial Solar",
      description: "Reduce operational costs and scale sustainably for your business.",
      image: "/Factory rooftop with panels.jpg",
      link: "/solutions/commercial",
      icon: "🏭"
    },
    {
      name: "Hybrid Systems",
      description: "Solar + Grid + Battery for 24/7 uninterrupted power supply.",
      image: "/Hybrid Systems.jpg",
      link: "/solutions/hybrid-systems",
      icon: "⚡"
    },
    {
      name: "Solar Panel Cleaning",
      description: "Professional cleaning service to restore peak panel performance.",
      image: "/man-worker-firld-by-solar-panels.jpg",
      link: "/solutions/solar-panel-cleaning",
      icon: "✨"
    }
  ]

  const handleSolutionHover = (solution) => {
    setFeaturedSolution({
      name: solution.name,
      description: solution.description,
      image: solution.image,
      link: solution.link
    })
  }

  const resetFeaturedSolution = () => {
    setFeaturedSolution({
      name: "Residential Solar",
      description: "Energy independence for your home with reliable backup power.",
      image: "/ResidentialSolar.jpg",
      link: "/solutions/residential"
    })
  }

  return (
    <>
    <motion.nav 
      className={`absolute top-0 left-0 right-0 ${isOpen ? 'z-[101]' : 'z-50'} transition-all duration-300 ${
        isLightMode 
          ? scrolled 
            ? 'bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]' 
            : 'bg-white/92 backdrop-blur-md border-b border-black/[0.06]'
          : scrolled 
            ? 'bg-black/90 backdrop-blur-md' 
            : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="px-5 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-24 md:h-32">
          <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
            <img 
              src={isLightMode ? "/eco_surya_logo_black_text.jpg" : "/eco_surya_logo.png"} 
              alt="Eco Surya" 
              className={isLightMode ? "h-36 md:h-40 w-auto" : "h-32 md:h-40 w-auto"}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowSolutionsDropdown(true)}
              onMouseLeave={() => {
                setShowSolutionsDropdown(false)
                resetFeaturedSolution()
              }}
            >
              <button 
                className={`transition-all duration-300 relative group ${
                  isLightMode ? 'text-zinc-900 hover:text-green-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Solutions
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  isLightMode ? 'bg-green-600' : 'bg-white'
                }`}></span>
              </button>

              {/* Solutions Mega Menu Dropdown */}
              <AnimatePresence>
                {showSolutionsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute top-full right-0 mt-4 w-[700px] bg-white rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="grid grid-cols-[300px_1fr]">
                      
                      {/* LEFT - Featured Solution (Dynamic) */}
                      <motion.div 
                        className="relative overflow-hidden"
                        key={featuredSolution.link}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Full-size solution image */}
                        <div className="w-full h-full">
                          <img 
                            src={featuredSolution.image}
                            alt={featuredSolution.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Text overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {featuredSolution.name}
                          </h3>
                          <p className="text-sm text-white/90 leading-relaxed mb-4">
                            {featuredSolution.description}
                          </p>
                          <Link
                            to={featuredSolution.link}
                            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-green-400 transition-colors group"
                            onClick={() => setShowSolutionsDropdown(false)}
                          >
                            Learn More
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>

                      {/* RIGHT - Solutions Grid */}
                      <div className="p-8">
                        <h3 className="text-xs font-semibold text-green-600 mb-4 uppercase tracking-wider">
                          Choose Your Solution
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {solutions.map((solution, idx) => (
                            <Link
                              key={idx}
                              to={solution.link}
                              onMouseEnter={() => handleSolutionHover(solution)}
                              className="group p-4 rounded-lg hover:bg-zinc-50 transition-all duration-200"
                              onClick={() => setShowSolutionsDropdown(false)}
                            >
                              <div className="text-3xl mb-2">{solution.icon}</div>
                              <h4 className="text-sm font-bold text-zinc-900 mb-1 group-hover:text-green-600 transition-colors">
                                {solution.name}
                              </h4>
                              <p className="text-xs text-zinc-600 leading-relaxed">
                                {solution.description.split('.')[0]}.
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => {
                setShowProductsDropdown(false)
                resetFeaturedProduct()
              }}
            >
              <button 
                className={`transition-all duration-300 relative group ${
                  isLightMode ? 'text-zinc-900 hover:text-green-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Products & Technology
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  isLightMode ? 'bg-green-600' : 'bg-white'
                }`}></span>
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {showProductsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute top-full right-0 mt-4 w-[900px] bg-white rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="grid grid-cols-[380px_1fr] divide-x divide-zinc-100">
                      
                      {/* LEFT - Featured Product (Dynamic) */}
                      <motion.div 
                        className="relative overflow-hidden"
                        key={featuredProduct.link}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Full-size product image */}
                        <div className="w-full h-full">
                          <img 
                            src={featuredProduct.image}
                            alt={featuredProduct.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Text overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {featuredProduct.name}
                          </h3>
                          <p className="text-sm text-white/90 leading-relaxed mb-4">
                            {featuredProduct.description}
                          </p>
                          <Link
                            to={featuredProduct.link}
                            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-green-400 transition-colors group"
                            onClick={() => setShowProductsDropdown(false)}
                          >
                            Explore
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>

                      {/* RIGHT - Product Categories */}
                      <div className="p-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                          {productCategories.map((category, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.15 + (idx * 0.05) }}
                            >
                              <h3 className="text-xs font-semibold text-green-600 mb-3 uppercase tracking-wider">
                                {category.name}
                              </h3>
                              <ul className="space-y-2">
                                {category.products.map((product, pidx) => (
                                  <li key={pidx}>
                                    <Link
                                      to={product.link}
                                      onMouseEnter={() => handleProductHover(product)}
                                      className="group flex items-center text-sm text-zinc-700 hover:text-green-600 transition-all duration-200"
                                      onClick={() => setShowProductsDropdown(false)}
                                    >
                                      <span className="transition-transform group-hover:translate-x-1">
                                        {product.name}
                                      </span>
                                      <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/about" 
              className={`transition-all duration-300 relative group ${
                isLightMode ? 'text-zinc-900 hover:text-green-600' : 'text-white/90 hover:text-white'
              }`}
            >
              About
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                isLightMode ? 'bg-green-600' : 'bg-white'
              }`}></span>
            </Link>
            <Link 
              to="/contact" 
              className={`transition-all duration-300 relative group ${
                isLightMode ? 'text-zinc-900 hover:text-green-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                isLightMode ? 'bg-green-600' : 'bg-white'
              }`}></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isLightMode ? 'text-black' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Navigation - Tesla Style Drill-Down - Outside nav for proper z-index */}
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden fixed inset-0 bg-white z-[100] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-zinc-200">
                <img 
                  src="/eco_surya_logo_black_text.jpg" 
                  alt="Eco Surya" 
                  className="h-16 w-auto" 
                />
                <button
                  onClick={handleMobileClose}
                  className="text-black p-2"
                  aria-label="Close menu"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Content - Animated Views */}
              <div className="relative h-[calc(100vh-88px)] overflow-hidden">
                
                {/* MAIN VIEW */}
                <motion.div
                  className="absolute inset-0 overflow-y-auto bg-white"
                  initial={false}
                  animate={{ 
                    x: mobileView === 'main' ? 0 : '-100%',
                    opacity: mobileView === 'main' ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="px-6 py-8 space-y-2">
                    <button
                      onClick={handleSolutionsClick}
                      className="w-full flex items-center justify-between py-5 text-black text-2xl font-medium border-b border-zinc-200"
                    >
                      Solutions
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      onClick={handleProductsClick}
                      className="w-full flex items-center justify-between py-5 text-black text-2xl font-medium border-b border-zinc-200"
                    >
                      Products & Technology
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <Link
                      to="/about"
                      className="flex items-center justify-between py-5 text-black text-2xl font-medium border-b border-zinc-200"
                      onClick={handleMobileClose}
                    >
                      About
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <Link
                      to="/contact"
                      className="flex items-center justify-between py-5 text-black text-2xl font-medium border-b border-zinc-200"
                      onClick={handleMobileClose}
                    >
                      Contact
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    {/* CTA Buttons */}
                    <div className="pt-8 space-y-3">
                      <a
                        href="tel:+918860015074"
                        className="flex items-center justify-center gap-3 bg-green-600 text-white py-5 rounded-lg text-lg font-semibold"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Now
                      </a>
                      <Link
                        to="/contact"
                        className="block text-center bg-black text-white py-5 rounded-lg text-lg font-semibold"
                        onClick={handleMobileClose}
                      >
                        Get Free Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* PRODUCTS CATEGORIES VIEW */}
                <motion.div
                  className="absolute inset-0 overflow-y-auto bg-white"
                  initial={false}
                  animate={{ 
                    x: mobileView === 'products' ? 0 : '100%',
                    opacity: mobileView === 'products' ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="px-6 py-8">
                    {/* Back Button */}
                    <button
                      onClick={handleBackClick}
                      className="flex items-center gap-3 text-black text-lg mb-8"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>

                    <h2 className="text-black text-3xl font-bold mb-8">Products & Technology</h2>

                    <div className="space-y-2">
                      {productCategories.map((category, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleCategoryClick(category)}
                          className="w-full flex items-center justify-between py-6 text-black text-xl font-medium border-b border-zinc-200"
                        >
                          {category.name}
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* PRODUCT LIST VIEW */}
                <motion.div
                  className="absolute inset-0 overflow-y-auto bg-white"
                  initial={false}
                  animate={{ 
                    x: mobileView === 'category' ? 0 : '100%',
                    opacity: mobileView === 'category' ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {selectedCategory && (
                    <div className="px-6 py-8">
                      {/* Back Button */}
                      <button
                        onClick={handleBackClick}
                        className="flex items-center gap-3 text-black text-lg mb-8"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>

                      <h2 className="text-black text-3xl font-bold mb-8">{selectedCategory.name}</h2>

                      <div className="space-y-3">
                        {selectedCategory.products.map((product, idx) => (
                          <Link
                            key={idx}
                            to={product.link}
                            onClick={handleMobileClose}
                            className={`block py-5 px-5 rounded-lg border transition-colors ${
                              product.name === "Sparkle Hybrid Solar Inverters"
                                ? 'bg-green-50 border-green-600 text-black'
                                : 'border-zinc-200 text-black hover:border-green-600 hover:bg-zinc-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {product.name === "Sparkle Hybrid Solar Inverters" && (
                                  <span className="text-xl">⭐</span>
                                )}
                                <span className="text-lg font-medium">{product.name}</span>
                              </div>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* SOLUTIONS VIEW */}
                <motion.div
                  className="absolute inset-0 overflow-y-auto bg-white"
                  initial={false}
                  animate={{ 
                    x: mobileView === 'solutions' ? 0 : '100%',
                    opacity: mobileView === 'solutions' ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="px-6 py-8">
                    {/* Back Button */}
                    <button
                      onClick={handleBackClick}
                      className="flex items-center gap-3 text-black text-lg mb-8"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>

                    <h2 className="text-black text-3xl font-bold mb-8">Solutions</h2>

                    <div className="space-y-4">
                      {solutions.map((solution, idx) => (
                        <Link
                          key={idx}
                          to={solution.link}
                          onClick={handleMobileClose}
                          className="block p-6 rounded-lg border border-zinc-200 hover:border-green-600 hover:bg-zinc-50 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-4xl">{solution.icon}</div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-black mb-2">{solution.name}</h3>
                              <p className="text-sm text-zinc-600 leading-relaxed">{solution.description}</p>
                            </div>
                            <svg className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  )
}
