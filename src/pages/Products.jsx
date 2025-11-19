import React, { useState } from 'react';
import { 
  FaCog, 
  FaIndustry, 
  FaTools, 
  FaBolt, 
  FaShieldAlt,
  FaDownload,
  FaSearch,
  FaArrowRight,
  FaFileAlt,
  FaEye,
  FaArrowLeft
} from 'react-icons/fa';

const Products = () => {
  const [viewMode, setViewMode] = useState('featured'); 
  const [searchTerm, setSearchTerm] = useState('');

  const productCategories = [
    { id: 'all', name: 'All Products', icon: <FaIndustry className="w-4 h-4" /> },
    { id: 'mechanical', name: 'Mechanical Components', icon: <FaCog className="w-4 h-4" /> },
    { id: 'hydraulic', name: 'Hydraulic Systems', icon: <FaTools className="w-4 h-4" /> },
    { id: 'electrical', name: 'Electrical Systems', icon: <FaBolt className="w-4 h-4" /> },
    { id: 'safety', name: 'Safety Systems', icon: <FaShieldAlt className="w-4 h-4" /> }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Precision Bearings",
      category: "Mechanical Components",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "High-precision bearings engineered for extreme conditions and extended service life in industrial applications.",
      features: ["Corrosion Resistant", "High Load Capacity", "Extended Lifespan"]
    },
    {
      id: 2,
      name: "Hydraulic Systems",
      category: "Fluid Power",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Complete hydraulic systems designed for heavy machinery with enhanced efficiency and reliability.",
      features: ["Energy Efficient", "Low Maintenance", "Custom Configurations"]
    },
    {
      id: 3,
      name: "Control Panels",
      category: "Electrical Systems",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Advanced industrial control systems featuring state-of-the-art automation and monitoring capabilities.",
      features: ["IoT Ready", "Real-time Monitoring", "Remote Access"]
    }
  ];

  const catalogProducts = [
    {
      id: 1,
      name: "Precision Bearings Series 5000",
      category: "mechanical",
      sku: "IM-PB-5000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "High-precision bearings engineered for extreme conditions and extended service life in industrial applications.",
      features: ["Corrosion Resistant", "High Load Capacity", "Extended Lifespan", "ISO 9001 Certified"],
      specifications: {
        material: "Chromium Steel",
        temperature: "-40°C to 120°C",
        loadCapacity: "15,000 RPM"
      },
      documents: ["Technical Specs", "Installation Guide", "CAD Files"],
      priceRange: "$500 - $2,000"
    },
    {
      id: 2,
      name: "Advanced Hydraulic Systems H-8000",
      category: "hydraulic",
      sku: "IM-HS-8000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Complete hydraulic systems designed for heavy machinery with enhanced efficiency and reliability.",
      features: ["Energy Efficient", "Low Maintenance", "Custom Configurations", "24/7 Support"],
      specifications: {
        pressure: "Up to 5000 PSI",
        flowRate: "100 L/min",
        compatibility: "All major brands"
      },
      documents: ["Technical Manual", "Maintenance Guide", "System Diagrams"],
      priceRange: "$2,000 - $8,000"
    },
    {
      id: 3,
      name: "Industrial Control Panels ICP-3000",
      category: "electrical",
      sku: "IM-ICP-3000",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Advanced industrial control systems featuring state-of-the-art automation and monitoring capabilities.",
      features: ["IoT Ready", "Real-time Monitoring", "Remote Access", "Cybersecurity"],
      specifications: {
        voltage: "110-480V AC",
        protocols: "Modbus, Ethernet/IP",
        certification: "UL, CE Certified"
      },
      documents: ["User Manual", "Network Guide", "API Documentation"],
      priceRange: "$1,500 - $5,000"
    },
    {
      id: 4,
      name: "Safety Guard Systems SGS-2000",
      category: "safety",
      sku: "IM-SGS-2000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Complete safety solutions with integrated monitoring and emergency stop systems.",
      features: ["Fail-Safe Design", "Easy Integration", "Compliance Ready", "Self-Testing"],
      specifications: {
        standards: "ISO 13849, IEC 62061",
        responseTime: "< 10ms",
        monitoring: "Continuous self-check"
      },
      documents: ["Safety Manual", "Integration Guide", "Certificates"],
      priceRange: "$800 - $3,000"
    },
    {
      id: 5,
      name: "Heavy-Duty Gearboxes GB-7000",
      category: "mechanical",
      sku: "IM-GB-7000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Robust gear systems designed for high-torque applications in demanding environments.",
      features: ["High Torque", "Thermal Resistant", "Oil Sealed", "Custom Ratios"],
      specifications: {
        ratio: "5:1 to 100:1",
        torque: "Up to 50,000 Nm",
        efficiency: "98%"
      },
      documents: ["Engineering Data", "Mounting Instructions", "Service Manual"],
      priceRange: "$1,200 - $4,500"
    },
    {
      id: 6,
      name: "Power Transmission Units PTU-4000",
      category: "mechanical",
      sku: "IM-PTU-4000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Efficient power transmission systems for industrial machinery and automation.",
      features: ["High Efficiency", "Low Noise", "Maintenance Free", "Compact Design"],
      specifications: {
        power: "Up to 500 kW",
        speed: "0-3000 RPM",
        backlash: "< 1 arcmin"
      },
      documents: ["Selection Guide", "Technical Data", "CAD Models"],
      priceRange: "$900 - $3,500"
    },
    {
      id: 7,
      name: "Industrial Actuators ACT-6000",
      category: "mechanical",
      sku: "IM-ACT-6000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "High-precision linear and rotary actuators for industrial automation applications.",
      features: ["High Precision", "Long Service Life", "Multiple Mounting Options", "Sealed Design"],
      specifications: {
        force: "Up to 10,000 N",
        speed: "0-500 mm/s",
        stroke: "50-1000 mm"
      },
      documents: ["Technical Manual", "Mounting Guide", "CAD Files"],
      priceRange: "$700 - $2,500"
    },
    {
      id: 8,
      name: "Hydraulic Power Units HPU-9000",
      category: "hydraulic",
      sku: "IM-HPU-9000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Compact and efficient hydraulic power units for various industrial applications.",
      features: ["Compact Design", "Energy Efficient", "Quiet Operation", "Easy Maintenance"],
      specifications: {
        power: "1-50 HP",
        reservoir: "10-200 L",
        pressure: "Up to 3000 PSI"
      },
      documents: ["Installation Guide", "Technical Specs", "Wiring Diagrams"],
      priceRange: "$1,500 - $6,000"
    },
    {
      id: 9,
      name: "Motor Control Centers MCC-4000",
      category: "electrical",
      sku: "IM-MCC-4000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Advanced motor control centers with integrated protection and monitoring systems.",
      features: ["Smart Monitoring", "Overload Protection", "Remote Control", "Modular Design"],
      specifications: {
        voltage: "400-690V",
        current: "Up to 3200A",
        protection: "IP55 Standard"
      },
      documents: ["Technical Manual", "Wiring Guide", "Certificates"],
      priceRange: "$3,000 - $12,000"
    },
    {
      id: 10,
      name: "Emergency Stop Systems ESS-1000",
      category: "safety",
      sku: "IM-ESS-1000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Reliable emergency stop systems with fail-safe design for maximum safety.",
      features: ["Fail-Safe Design", "Quick Response", "Easy Reset", "Durable Construction"],
      specifications: {
        responseTime: "< 5ms",
        standards: "IEC 60204-1",
        contacts: "2NO + 2NC"
      },
      documents: ["Safety Manual", "Installation Guide", "Certificates"],
      priceRange: "$300 - $1,200"
    },
    {
      id: 11,
      name: "Linear Motion Systems LMS-8000",
      category: "mechanical",
      sku: "IM-LMS-8000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Precision linear motion systems for high-accuracy industrial applications.",
      features: ["High Accuracy", "Smooth Operation", "Low Friction", "Long Life"],
      specifications: {
        accuracy: "±0.01 mm",
        loadCapacity: "Up to 2000 kg",
        speed: "0-5 m/s"
      },
      documents: ["Technical Data", "Installation Guide", "CAD Models"],
      priceRange: "$2,000 - $8,000"
    },
    {
      id: 12,
      name: "Pneumatic Control Systems PCS-5000",
      category: "hydraulic",
      sku: "IM-PCS-5000",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Advanced pneumatic control systems for efficient and reliable operation.",
      features: ["Energy Efficient", "Low Noise", "Easy Installation", "Reliable Performance"],
      specifications: {
        pressure: "6-10 bar",
        flowRate: "Up to 5000 L/min",
        filtration: "5 micron"
      },
      documents: ["Technical Manual", "Installation Guide", "Maintenance Schedule"],
      priceRange: "$1,000 - $4,000"
    }
  ];

  const filteredProducts = catalogProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  if (viewMode === 'featured') {
    return (
      <section id="products" className="relative bg-gradient-to-b from-white to-gray-50/50 py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200/60 mb-6">
              <div className="w-6 h-px bg-gradient-to-r from-blue-600 to-gray-300"></div>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Our Products</span>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Industrial Components
              <span className="block font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                & Systems
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              Comprehensive portfolio of precision-engineered components designed for optimal performance, 
              durability, and reliability in the most demanding industrial environments.
            </p>
          </div>

          {/* Enhanced Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-2xl border border-gray-200/60 overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-gray-900/10 z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-4 py-2 rounded-full shadow-sm border border-gray-200/60">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
                    {product.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-6 space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100/80">
                    <button className="group/btn text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-2 transition-all duration-300 text-sm">
                      <span>Technical Details</span>
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {/* <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                      Request Quote
                    </button> */}
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-16">
            <button 
              onClick={() => setViewMode('catalog')}
              className="group relative bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="relative flex items-center justify-center space-x-3">
                <span>View Complete Product Catalog</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Catalog View with Clean Search
  return (
    <section id="catalog" className="relative bg-gradient-to-b from-white to-gray-50/80 py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Catalog Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setViewMode('featured')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-gray-200/60 hover:border-gray-300"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>Back to Featured</span>
            </button>
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200/60">
              <div className="w-6 h-px bg-gradient-to-r from-blue-600 to-gray-300"></div>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Product Catalog</span>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
            <div className="w-24"></div> {/* Spacer for balance */}
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Complete Product
            <span className="block font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Catalog
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse our comprehensive industrial manufacturing catalog featuring detailed specifications, 
            technical documents, and enterprise-grade components for your business needs.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products by name, description, or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-lg transition-all duration-300"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
                {searchTerm && (
                  <span className="text-blue-600 font-normal ml-2">
                    for "{searchTerm}"
                  </span>
                )}
              </h3>
              <p className="text-gray-600 mt-1">
                Showing all products from our industrial manufacturing catalog
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-xl px-4 py-2 text-sm bg-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Sort by: Featured</option>
                <option>Sort by: Name A-Z</option>
                <option>Sort by: Name Z-A</option>
                <option>Sort by: Price Low-High</option>
                <option>Sort by: Price High-Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/60 overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-gray-900/10 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-semibold px-3 py-2 rounded-full shadow-sm border border-gray-200/60">
                    {productCategories.find(cat => cat.id === product.category)?.icon}
                    <span>{productCategories.find(cat => cat.id === product.category)?.name}</span>
                  </span>
                </div>

                {/* SKU Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-black/80 text-white text-xs font-mono px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    {product.sku}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-3">
                    <button 
                      className="bg-white/90 text-gray-700 p-2 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105"
                      title="View Details"
                    >
                      <FaEye className="w-4 h-4" />
                    </button>
                    {product.documents.slice(0, 2).map((doc, index) => (
                      <button 
                        key={index}
                        className="bg-white/90 text-gray-700 p-2 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105"
                        title={`Download ${doc}`}
                      >
                        <FaDownload className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                  {product.description}
                </p>
                
                {/* Price Range */}
                <div className="mb-4">
                  <span className="text-lg font-bold text-gray-900 bg-gradient-to-r from-blue-50 to-gray-50 px-3 py-1.5 rounded-lg border border-gray-200/60">
                    {product.priceRange}
                  </span>
                </div>
                
                {/* Features List */}
                <div className="mb-6 space-y-2">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                  {product.features.length > 3 && (
                    <div className="text-sm text-blue-600 font-medium">
                      +{product.features.length - 3} more features
                    </div>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100/80">
                  <button className="group/btn text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-2 transition-all duration-300 text-sm hover:scale-105">
                    <span>Technical Details</span>
                    <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                  {/* <button className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2">
                    <FaFileAlt className="w-4 h-4" />
                    <span>Request Quote</span>
                  </button> */}
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-gray-200/60 max-w-2xl mx-auto">
              <FaSearch className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h3>
              <p className="text-gray-600 mb-6 text-lg">
                {searchTerm ? `No products found for "${searchTerm}". Try searching with different terms.` : 'No products available at the moment.'}
              </p>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>
        )}

        {/* Catalog Footer */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50/50 rounded-2xl p-8 border border-gray-200/60">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Custom Solutions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
              Can't find what you're looking for? Our engineering team specializes in custom-designed 
              components and systems tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2">
                <FaIndustry className="w-5 h-5" />
                <span>Discuss Custom Project</span>
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center space-x-2">
                <FaDownload className="w-5 h-5" />
                <span>Download Full Catalog PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;