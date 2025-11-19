import React, { useState } from 'react';
import {
  FaArrowRight,
  FaUsers,
  FaAward,
  FaCheck,
  FaIndustry,
  FaCogs,
  FaGlobeAmericas,
  FaMicroscope, FaRobot,
  FaRulerCombined,
  FaToolbox, FaTimes, FaBolt, FaDownload, FaVideo
} from 'react-icons/fa';

const Hero = () => {
  const [showCapabilitiesModal, setShowCapabilitiesModal] = useState(false);

  const handleExploreCapabilities = () => {
    setShowCapabilitiesModal(true);
  };

  // Capabilities Modal Component
  const CapabilitiesModal = () => {
    const capabilities = [
      {
        icon: <FaCogs className="w-8 h-8" />,
        title: "Precision Machining",
        description: "Advanced CNC machining with micron-level accuracy for complex geometries",
        features: ["5-Axis CNC Machining", "Swiss-Type Turning", "Multi-Spindle Automation", "High-Speed Machining"],
        specs: ["±0.0005″ Tolerance", "40+ Machine Fleet", "24/7 Operation", "CAD/CAM Integration"],
        color: "blue"
      },
      {
        icon: <FaMicroscope className="w-8 h-8" />,
        title: "Quality Assurance",
        description: "Comprehensive inspection and quality control systems",
        features: ["CMM Inspection", "Optical Measurement", "Surface Analysis", "Material Testing"],
        specs: ["ISO 9001:2015", "AS9100 Certified", "NADCAP Accredited", "First Article Inspection"],
        color: "emerald"
      },
      {
        icon: <FaRobot className="w-8 h-8" />,
        title: "Automation & Robotics",
        description: "Smart manufacturing with advanced automation systems",
        features: ["Robotic Integration", "IoT Monitoring", "AGV Systems", "Lights-Out Manufacturing"],
        specs: ["95% Uptime", "Real-time Monitoring", "Predictive Maintenance", "Custom Automation"],
        color: "purple"
      },
      {
        icon: <FaRulerCombined className="w-8 h-8" />,
        title: "Engineering Services",
        description: "End-to-end engineering and design support",
        features: ["CAD/CAM Design", "Prototype Development", "Value Engineering", "DFM Analysis"],
        specs: ["24-hr Turnaround", "Expert Engineering Team", "Custom Solutions", "Rapid Prototyping"],
        color: "amber"
      }
    ];

    const getColorClasses = (color) => {
      const colors = {
        blue: "from-blue-600 to-blue-700",
        emerald: "from-emerald-600 to-emerald-700",
        purple: "from-purple-600 to-purple-700",
        amber: "from-amber-600 to-amber-700"
      };
      return colors[color] || colors.blue;
    };

    if (!showCapabilitiesModal) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm"
            onClick={() => setShowCapabilitiesModal(false)}
          ></div>

          {/* Modal Panel */}
          <div className="relative inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
            <div className="bg-white px-6 pt-6 pb-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                    <FaToolbox className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Manufacturing Capabilities</h2>
                    <p className="text-gray-600">Advanced technologies and processes for precision manufacturing</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCapabilitiesModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {capabilities.map((capability, index) => (
                  <div key={index} className="group relative bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getColorClasses(capability.color)} rounded-t-xl`}></div>

                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(capability.color)} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                        {capability.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{capability.description}</p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                              <FaBolt className="w-3 h-3 text-blue-600" />
                              Key Features
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {capability.features.map((feature, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-300">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                              <FaCheck className="w-3 h-3 text-green-600" />
                              Specifications
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {capability.specs.map((spec, idx) => (
                                <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                  <FaDownload className="w-5 h-5" />
                  Download Full Capabilities PDF
                </button>
                <button className="flex-1 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-4 px-6 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md flex items-center justify-center gap-3">
                  <FaVideo className="w-5 h-5" />
                  Schedule Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };



  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">

      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-slate-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-transparent via-blue-50/10 to-transparent"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-40 lg:pt-40">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-12">

            {/* Premium Badge */}
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-2xl border border-slate-200/80 shadow-lg shadow-blue-500/5">
              <div className="w-6 h-0.5 bg-gradient-to-r from-blue-600 to-slate-400 rounded-full"></div>
              <span className="text-sm font-semibold text-slate-700 tracking-widest uppercase">
                Excellence Since 1974
              </span>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-slate-900 tracking-tight">
                Precision
                <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                  Engineering
                </span>
                <span className="block font-semibold text-slate-800 relative">
                  Solutions
                  <div className="absolute -bottom-3 left-0 h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg shadow-blue-500/30"></div>
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                Global leader in industrial manufacturing and precision-engineered components
              </p>
            </div>

            {/* Description */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-slate-200/60 shadow-xl shadow-blue-500/5">
              <p className="text-slate-600 leading-relaxed text-base">
                For nearly five decades, we've delivered exceptional precision manufacturing solutions
                to Fortune 500 companies worldwide. Our commitment to quality, innovation, and technical
                excellence sets the standard in industrial manufacturing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              <button
                onClick={handleExploreCapabilities}
                className="group relative bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden border border-slate-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3 text-base">
                  Explore Capabilities
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 border-t border-slate-200/60">
              <p className="text-sm text-slate-500 tracking-widest uppercase font-semibold mb-8 flex items-center">
                <FaGlobeAmericas className="w-4 h-4 text-blue-600 mr-3" />
                Trusted By Global Leaders
              </p>

              <div className="grid grid-cols-3 gap-8">
                {/* Stat 1 */}
                <div className="text-center group p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <FaIndustry className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mt-4 text-slate-900">50+</div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">Years Experience</div>
                </div>

                {/* Stat 2 */}
                <div className="text-center group p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <FaUsers className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mt-4 text-slate-900">500+</div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">Global Clients</div>
                </div>

                {/* Stat 3 */}
                <div className="text-center group p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <FaAward className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mt-4 text-slate-900">ISO 9001</div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">Certified</div>
                </div>
              </div>
            </div>

          </div>

          <div className="relative">

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200/80">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80"
                className="w-full h-[580px] object-cover transform hover:scale-[1.03] transition duration-700"
                alt="Advanced Industrial Manufacturing Facility"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
              <div className="absolute inset-0 ring-1 ring-white/30 rounded-3xl pointer-events-none"></div>
            </div>


          </div>

        </div>
      </div>

      {/* Render Modal */}
      <CapabilitiesModal />
    </section>
  );
};

export default Hero;