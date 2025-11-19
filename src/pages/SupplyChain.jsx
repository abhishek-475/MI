import React from 'react';
import { 
  FaGlobeAmericas,
  FaChartLine,
  FaShieldAlt,
  FaBolt,
  FaTruck,
  FaClock,
  FaArrowRight,
  FaDownload,
  FaCheckCircle
} from 'react-icons/fa';

const SupplyChain = () => {
  const metrics = [
    { 
      value: "99.8%", 
      label: "On-Time Delivery", 
      description: "Global delivery performance",
      icon: <FaTruck className="w-7 h-7" />
    },
    { 
      value: "50+", 
      label: "Countries Served", 
      description: "Worldwide logistics network",
      icon: <FaGlobeAmericas className="w-7 h-7" />
    },
    { 
      value: "24/7", 
      label: "Supply Monitoring", 
      description: "Real-time tracking",
      icon: <FaClock className="w-7 h-7" />
    },
    { 
      value: "<0.1%", 
      label: "Defect Rate", 
      description: "Quality assurance",
      icon: <FaCheckCircle className="w-7 h-7" />
    }
  ];

  const features = [
    {
      icon: <FaGlobeAmericas className="w-6 h-6" />,
      title: "Global Logistics Network",
      description: "Strategic partnerships with industry-leading logistics providers"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Real-Time Visibility",
      description: "Advanced tracking, analytics, and end-to-end transparency"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Risk Mitigation",
      description: "Predictive intelligence to prevent supply chain disruptions"
    },
    {
      icon: <FaBolt className="w-6 h-6" />,
      title: "Rapid Response",
      description: "Agile operations that adapt to dynamic market conditions"
    }
  ];

  return (
    <section id="supply-chain" className="relative bg-gradient-to-b from-white to-blue-50/40 py-24 lg:py-32 overflow-hidden">

      {/* --- Soft Glow Backgrounds --- */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gray-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-green-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* --- Section Header --- */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200/60 mb-6">
            <div className="w-6 h-px bg-gradient-to-r from-blue-600 to-gray-300"></div>
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Supply Chain
            </span>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Supply Chain
            <span className="block font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow">
            World-class logistics, predictive analytics, and real-time monitoring—all designed to
            ensure uninterrupted global supply chain operations.
          </p>
        </div>

        {/* --- Key Metrics Grid --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center border border-gray-200/60
              hover:border-blue-300/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>

              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {metric.value}
              </div>

              <div className="text-lg font-semibold text-gray-800 mb-1">
                {metric.label}
              </div>

              <p className="text-sm text-gray-600">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- Feature Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/60
              hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl
                flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent
              bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* --- CTA Section --- */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 text-white shadow-2xl border border-gray-700/40">
            <h3 className="text-2xl lg:text-3xl font-light mb-4">
              Ready to Elevate Your Global Supply Chain?
            </h3>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Streamline operations, reduce risks, and enhance delivery performance with
              advanced supply chain systems tailored for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button className="group bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg 
              hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all">
                <span className="flex items-center gap-2">
                  Request Logistics Assessment
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group bg-transparent border border-white/40 text-white font-semibold px-8 py-4 
              rounded-xl hover:bg-white/10 hover:border-white/90 transition-all">
                <span className="flex items-center gap-2">
                  View Case Studies
                  <FaDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupplyChain;
