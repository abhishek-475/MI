import React from 'react';
import { 
  FaWeightHanging,
  FaTemperatureHigh,
  FaCogs,
  FaCertificate,
  FaCheck,
  FaDownload,
  FaComments,
  FaAward
} from 'react-icons/fa';
import { 
  GiMaterialsScience 
} from 'react-icons/gi';

const TechnicalSpecs = () => {
  const specs = [
    {
      parameter: "Load Capacity",
      value: "Up to 50 tons",
      unit: "Maximum Operating Load",
      icon: <FaWeightHanging className="w-6 h-6" />
    },
    {
      parameter: "Operating Temperature",
      value: "-40°C to 200°C",
      unit: "Standard Range",
      icon: <FaTemperatureHigh className="w-6 h-6" />
    },
    {
      parameter: "Material Specification",
      value: "316 Stainless Steel",
      unit: "ASTM A240 Compliant",
      icon: <GiMaterialsScience className="w-6 h-6" />
    },
    {
      parameter: "Quality Certification",
      value: "ISO 9001:2015",
      unit: "Fully Certified",
      icon: <FaCertificate className="w-6 h-6" />
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "AS9100 Aerospace Standards",
    "RoHS Compliance",
    "CE Marking",
    "UL Certification",
    "ISO 14001 Environmental"
  ];

  return (
    <section id="technical-specs" className="relative bg-gradient-to-br from-white to-gray-50/50 py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-200/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Specifications */}
          <div>
            {/* Enhanced Header */}
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200/60 mb-6">
              <div className="w-6 h-px bg-gradient-to-r from-blue-600 to-gray-300"></div>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Technical Excellence</span>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Engineering
              <span className="block font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Specifications
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
              Our components undergo rigorous testing and quality control procedures to ensure 
              exceptional performance and reliability in the most demanding industrial applications.
            </p>
            
            {/* Enhanced Specifications List */}
            <div className="space-y-4">
              {specs.map((spec, index) => (
                <div 
                  key={index} 
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 hover:border-gray-300/80 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                          {spec.parameter}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{spec.unit}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Download Technical Data Sheets</span>
                  <FaDownload className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200" />
                </span>
              </button>
              <button className="group relative bg-white/80 backdrop-blur-sm border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Contact Engineering</span>
                  <FaComments className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-10 text-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaCheck className="text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-light">Quality Certifications</h3>
              </div>
              
              {/* Certifications List */}
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 py-4 border-b border-gray-700/80 last:border-0 group hover:bg-white/5 rounded-xl px-3 -mx-3 transition-all duration-200"
                  >
                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-200">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="font-medium group-hover:text-white/90 transition-colors">{cert}</span>
                  </div>
                ))}
              </div>
              
              {/* Info Box */}
              <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/5 backdrop-blur-sm">
                <p className="text-sm text-gray-300 leading-relaxed">
                  All manufacturing processes adhere to strict quality control standards with 
                  comprehensive documentation and traceability throughout the production lifecycle.
                </p>
              </div>

              {/* Floating Element */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-4 shadow-2xl">
                <div className="text-center">
                  <FaAward className="text-white mx-auto mb-1" />
                  <div className="text-white font-bold text-sm">A+</div>
                  <div className="text-white/80 text-xs">Rating</div>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;