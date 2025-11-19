import React from 'react';
import { 
  FaPlane, FaCar, FaBolt, FaHospital, FaHardHat, FaRobot,
  FaCheckCircle, FaShippingFast, FaLightbulb, FaDownload, FaArrowRight,
  FaCog, FaIndustry, FaMicrochip, FaAward, FaCertificate,
  FaCrosshairs, FaCubes, FaRocket
} from 'react-icons/fa';
import { GiMechanicalArm } from 'react-icons/gi';

const Solutions = () => {
  const industrySolutions = [
    {
      industry: "Aerospace & Defense",
      icon: <FaPlane className="w-7 h-7" />,
      description: "Precision components for aviation and defense applications with strict compliance to AS9100 standards.",
      features: ["AS9100 Certified", "High-Temperature Alloys", "Critical Tolerance Components"],
      applications: ["Aircraft Structures", "Defense Systems", "Satellite Components"],
      gradient: "from-blue-600 to-cyan-600",
      certifications: ["AS9100", "NADCAP"]
    },
    {
      industry: "Automotive Manufacturing",
      icon: <FaCar className="w-7 h-7" />,
      description: "High-volume production solutions for automotive OEMs and tier suppliers with JIT delivery.",
      features: ["Lean Manufacturing", "JIT Delivery", "Quality Management"],
      applications: ["Engine Components", "Transmission Systems", "Electric Vehicle Parts"],
      gradient: "from-emerald-600 to-green-600",
      certifications: ["IATF 16949", "ISO/TS 16949"]
    },
    {
      industry: "Energy & Power Generation",
      icon: <FaBolt className="w-7 h-7" />,
      description: "Robust components for energy infrastructure with focus on durability and performance.",
      features: ["Corrosion Resistance", "High-Pressure Rating", "Long Service Life"],
      applications: ["Turbine Components", "Power Transmission", "Renewable Energy Systems"],
      gradient: "from-amber-600 to-orange-600",
      certifications: ["ASME", "API Standards"]
    },
    {
      industry: "Medical Equipment",
      icon: <FaHospital className="w-7 h-7" />,
      description: "Precision medical components manufactured in certified cleanroom environments.",
      features: ["ISO 13485 Certified", "Biocompatible Materials", "Sterile Packaging"],
      applications: ["Surgical Instruments", "Diagnostic Equipment", "Implant Components"],
      gradient: "from-purple-600 to-indigo-600",
      certifications: ["ISO 13485", "FDA Compliant"]
    },
    {
      industry: "Heavy Machinery",
      icon: <FaHardHat className="w-7 h-7" />,
      description: "Durable components for construction and mining equipment built to withstand extreme conditions.",
      features: ["Heavy-Duty Construction", "Wear Resistance", "Custom Engineering"],
      applications: ["Construction Equipment", "Mining Machinery", "Agricultural Implements"],
      gradient: "from-slate-700 to-gray-700",
      certifications: ["ISO 9001", "CE Marking"]
    },
    {
      industry: "Industrial Automation",
      icon: <FaRobot className="w-7 h-7" />,
      description: "Custom automation solutions and robotic components for smart manufacturing.",
      features: ["IoT Integration", "Precision Motion Control", "Custom Automation"],
      applications: ["Robotic Systems", "Assembly Lines", "Process Automation"],
      gradient: "from-red-600 to-pink-600",
      certifications: ["UL Certified", "CE Compliance"]
    }
  ];

  const capabilities = [
    { 
      name: "CNC Machining", 
      value: "95%", 
      description: "Accuracy Rate",
      icon: <GiMechanicalArm className="w-10 h-10" />,
      color: "blue"
    },
    { 
      name: "Quality Control", 
      value: "99.8%", 
      description: "Pass Rate",
      icon: <FaCheckCircle className="w-10 h-10" />,
      color: "emerald"
    },
    { 
      name: "On-Time Delivery", 
      value: "98.5%", 
      description: "Delivery Performance",
      icon: <FaShippingFast className="w-10 h-10" />,
      color: "amber"
    },
    { 
      name: "Custom Solutions", 
      value: "1000+", 
      description: "Projects Completed",
      icon: <FaLightbulb className="w-10 h-10" />,
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-600 to-blue-700",
      emerald: "from-emerald-600 to-emerald-700",
      amber: "from-amber-600 to-amber-700",
      purple: "from-purple-600 to-purple-700"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="solutions" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/20 py-28 lg:py-36 overflow-hidden">

      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-x-40 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-600/5 rounded-full blur-[100px] -translate-x-32 translate-y-32"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-transparent via-blue-50/5 to-transparent"></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Premium Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-lg shadow-blue-500/5 border border-slate-200/60 mb-8">
            <div className="w-6 h-0.5 bg-gradient-to-r from-blue-600 to-slate-400 rounded-full"></div>
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">
              Industry Solutions
            </span>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Precision  
            <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Manufacturing
            </span>
            <span className="block text-3xl md:text-4xl font-semibold text-slate-700 mt-4">
              For Demanding Industries
            </span>
          </h2>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/60 shadow-lg shadow-blue-500/5 max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Advanced precision manufacturing solutions for aerospace, automotive, medical, 
              and industrial applications. Leveraging 50+ years of expertise to deliver 
              exceptional quality and reliability.
            </p>
          </div>
        </div>

        {/* Enhanced Capabilities Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-8 shadow-lg shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(capability.color)} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className={`relative flex justify-center mb-6 p-4 bg-gradient-to-br ${getColorClasses(capability.color)} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {capability.icon}
              </div>
              
              <div className="text-center relative">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {capability.value}
                </div>
                <div className="text-lg font-semibold text-slate-800 mb-2">
                  {capability.name}
                </div>
                <p className="text-sm text-slate-600 font-medium">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Industry Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {industrySolutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-8 shadow-lg shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${solution.gradient} rounded-t-3xl`}></div>
              
              {/* Certifications Badge */}
              <div className="absolute -top-2 -right-2 bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 shadow-lg border border-slate-200">
                <div className="flex items-center space-x-1">
                  <FaCertificate className="w-3 h-3 text-amber-600" />
                  <span className="text-xs font-semibold text-slate-700">{solution.certifications[0]}</span>
                </div>
              </div>
              
              {/* Header with Icon */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {solution.industry}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium">
                {solution.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center">
                  <FaCrosshairs className="w-4 h-4 mr-2 text-blue-600" />
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm text-slate-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient} flex-shrink-0`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center">
                  <FaCubes className="w-4 h-4 mr-2 text-blue-600" />
                  Applications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {solution.applications.map((application, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-2 text-xs font-medium bg-slate-100 border border-slate-200 rounded-xl text-slate-700 group-hover:border-slate-300 transition-colors duration-300"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-6 pt-6 border-t border-slate-200/60">
                <button className="group w-full flex items-center justify-center space-x-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200">
                  <span>View Case Study</span>
                  <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-12 shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 mb-6 border border-white/10">
              <FaAward className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-semibold text-white/90">Award-Winning Engineering</span>
            </div>

            <h3 className="text-4xl font-light mb-4">Ready to Elevate Your Manufacturing?</h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 font-medium">
              Partner with industry leaders for precision-engineered solutions that drive innovation and efficiency.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group relative bg-white text-slate-900 px-10 py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden border border-white">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  Consult Our Engineers
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
              </button>

              <button className="group relative bg-transparent border border-white/30 text-white px-10 py-5 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm">
                <span className="relative flex items-center gap-3">
                  Download Capabilities PDF
                  <FaDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solutions;