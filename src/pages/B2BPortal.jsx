import React from 'react';
import { 
  FaShoppingCart,
  FaChartLine,
  FaDatabase,
  FaUsers,
  FaCalendarAlt,
  FaArrowRight,
  FaCog,
  FaShieldAlt,
  FaSync,
  FaFileInvoice,
  FaHeadset
} from 'react-icons/fa';

const B2BPortal = () => {
  const portalFeatures = [
    {
      icon: <FaShoppingCart className="w-6 h-6" />,
      title: "Procurement Management",
      description: "Streamlined ordering process with real-time inventory tracking, volume pricing, and automated procurement workflows.",
      features: ["Real-time Inventory", "Volume Pricing", "Automated Workflows"],
      buttonText: "Access Portal"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Supply Chain Analytics",
      description: "Comprehensive logistics tracking, inventory forecasting, and supply chain optimization tools with predictive analytics.",
      features: ["Logistics Tracking", "Inventory Forecasting", "Predictive Analytics"],
      buttonText: "View Dashboard"
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Business Intelligence",
      description: "Advanced reporting, performance analytics, and custom business intelligence tools for strategic decision-making.",
      features: ["Advanced Reporting", "Performance Analytics", "Custom BI Tools"],
      buttonText: "Generate Reports"
    }
  ];

  const additionalFeatures = [
    {
      icon: <FaFileInvoice className="w-5 h-5" />,
      text: "Automated Invoicing"
    },
    {
      icon: <FaSync className="w-5 h-5" />,
      text: "Real-time Sync"
    },
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      text: "Enterprise Security"
    },
    {
      icon: <FaCog className="w-5 h-5" />,
      text: "Custom Integration"
    }
  ];

  return (
    <section id="b2b" className="relative bg-gradient-to-br from-gray-50 to-white py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-200/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200/60 mb-6">
            <div className="w-6 h-px bg-gradient-to-r from-blue-600 to-gray-300"></div>
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Business Solutions</span>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Enterprise
            <span className="block font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Client Portal
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            Dedicated platform for our business partners featuring advanced tools for procurement, 
            supply chain management, and enterprise resource planning.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {portalFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 hover:border-blue-200/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300 mb-6 mx-auto">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-sm text-center">
                {feature.description}
              </p>

              {/* Feature List */}
              <div className="space-y-2 mb-6">
                {feature.features.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group/btn">
                <span className="flex items-center justify-center space-x-2">
                  <span>{feature.buttonText}</span>
                  <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                </span>
              </button>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Platform Features</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive suite of tools designed for enterprise-level business operations and collaboration.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="text-sm font-medium text-gray-900">{feature.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <FaUsers className="w-12 h-12 text-white/80" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-light mb-4">Become a Partner</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Register your organization to access enterprise features, volume pricing, 
              and dedicated account management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center space-x-2">
                  <span>Register Organization</span>
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              <button className="group bg-transparent border border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10">
                <span className="flex items-center justify-center space-x-2">
                  <span>Schedule Consultation</span>
                  <FaCalendarAlt className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-200" />
                </span>
              </button>
            </div>
            
            {/* Support Info */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <div className="flex items-center justify-center space-x-2 text-gray-300 text-sm">
                <FaHeadset className="w-4 h-4" />
                <span>24/7 Enterprise Support Available</span>
              </div>
            </div>
          </div>
        </div>

        

        
      </div>
    </section>
  );
};

export default B2BPortal;