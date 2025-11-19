import React, { useState } from "react";
import {
  FaArrowRight,
  FaUsers,
  FaAward,
  FaCheck,
  FaIndustry,
  FaCogs,
  FaGlobeAmericas,
  FaMicroscope,
  FaRobot,
  FaRulerCombined,
  FaToolbox,
  FaTimes,
  FaBolt,
  FaDownload,
  FaVideo,
} from "react-icons/fa";

/* ------------------------------------------------------------
   Capabilities Modal Component
------------------------------------------------------------ */
const CapabilitiesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const capabilities = [
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Precision Machining",
      description:
        "Advanced CNC machining with micron-level accuracy for complex geometries",
      features: [
        "5-Axis CNC Machining",
        "Swiss-Type Turning",
        "Multi-Spindle Automation",
        "High-Speed Machining",
      ],
      specs: [
        "±0.0005″ Tolerance",
        "40+ Machine Fleet",
        "24/7 Operation",
        "CAD/CAM Integration",
      ],
      color: "blue",
    },
    {
      icon: <FaMicroscope className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Comprehensive inspection and quality control systems",
      features: [
        "CMM Inspection",
        "Optical Measurement",
        "Surface Analysis",
        "Material Testing",
      ],
      specs: ["ISO 9001:2015", "AS9100 Certified", "NADCAP Accredited", "FAI"],
      color: "emerald",
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "Automation & Robotics",
      description: "Smart manufacturing with advanced automation systems",
      features: [
        "Robotic Integration",
        "IoT Monitoring",
        "AGV Systems",
        "Lights-Out Manufacturing",
      ],
      specs: [
        "95% Uptime",
        "Real-time Monitoring",
        "Predictive Maintenance",
        "Custom Automation",
      ],
      color: "purple",
    },
    {
      icon: <FaRulerCombined className="w-8 h-8" />,
      title: "Engineering Services",
      description: "End-to-end engineering and design support",
      features: [
        "CAD/CAM Design",
        "Prototype Development",
        "Value Engineering",
        "DFM Analysis",
      ],
      specs: [
        "24-hr Turnaround",
        "Expert Engineering Team",
        "Custom Solutions",
        "Rapid Prototyping",
      ],
      color: "amber",
    },
  ];

  const colorMap = {
    blue: "from-blue-600 to-blue-700",
    emerald: "from-emerald-600 to-emerald-700",
    purple: "from-purple-600 to-purple-700",
    amber: "from-amber-600 to-amber-700",
  };

  const colorClass = (color) => colorMap[color] || colorMap.blue;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative mx-auto my-12 w-full max-w-6xl rounded-2xl bg-white shadow-2xl p-6 sm:p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg">
              <FaToolbox className="text-xl" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Manufacturing Capabilities
              </h2>
              <p className="text-gray-600">
                Advanced technologies for precision manufacturing
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="relative bg-gray-50 p-6 border border-gray-200 rounded-xl hover:shadow-lg transition"
            >
              {/* Accent Line */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorClass(
                  cap.color
                )} rounded-t-xl`}
              />

              <div className="flex gap-4 items-start">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${colorClass(
                    cap.color
                  )} text-white flex items-center justify-center rounded-lg shadow-lg`}
                >
                  {cap.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {cap.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {cap.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <FaBolt className="w-3 h-3 text-blue-600" />
                      Key Features
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {cap.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specs */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <FaCheck className="w-3 h-3 text-green-600" />
                      Specifications
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {cap.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
          <button className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition flex justify-center items-center gap-3">
            <FaDownload className="w-5 h-5" />
            Download Full Capabilities PDF
          </button>

          <button className="flex-1 py-4 px-6 bg-white border border-gray-300 rounded-xl font-semibold hover:border-gray-400 hover:text-gray-900 transition flex justify-center items-center gap-3">
            <FaVideo className="w-5 h-5" />
            Schedule Virtual Tour
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------
   MAIN HERO SECTION
------------------------------------------------------------ */
const Hero = () => {
  const [showCapabilitiesModal, setShowCapabilitiesModal] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-slate-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-transparent via-blue-50/10 to-transparent" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-40 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left */}
          <div className="space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-2xl border border-slate-200 shadow-lg">
              <div className="w-6 h-0.5 bg-gradient-to-r from-blue-600 to-slate-400 rounded-full" />
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">
                Excellence Since 1974
              </span>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-tight">
                Precision
                <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
                  Engineering
                </span>
                <span className="block font-semibold text-slate-800 relative">
                  Solutions
                  <div className="absolute -bottom-3 left-0 w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg" />
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                Global leader in industrial manufacturing and precision-engineered
                components.
              </p>
            </div>

            {/* Description Box */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-slate-200 shadow-xl">
              <p className="text-slate-600 leading-relaxed">
                For nearly five decades, we’ve delivered exceptional precision
                manufacturing solutions to Fortune 500 companies worldwide.
              </p>
            </div>

            {/* Buttons */}
            <button
              onClick={() => setShowCapabilitiesModal(true)}
              className="group relative bg-slate-900 text-white px-10 py-5 rounded-2xl font-semibold shadow-2xl hover:scale-[1.02] transition overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20 opacity-0 group-hover:opacity-100 transition" />
              <span className="relative flex items-center gap-3">
                Explore Capabilities
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition" />
              </span>
            </button>

            {/* Stats */}
            <div className="pt-12 border-t border-slate-200">
              <p className="text-sm text-slate-500 tracking-widest uppercase font-semibold mb-8 flex items-center">
                <FaGlobeAmericas className="w-4 h-4 text-blue-600 mr-3" />
                Trusted By Global Leaders
              </p>

              <div className="grid grid-cols-3 gap-8">
                {/* Stat */}
                {[
                  { icon: FaIndustry, value: "50+", label: "Years Experience" },
                  { icon: FaUsers, value: "500+", label: "Global Clients" },
                  { icon: FaAward, value: "ISO 9001", label: "Certified" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="text-center p-4 rounded-xl group hover:bg-white/50 transition"
                  >
                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <s.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-4">
                      {s.value}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80"
                className="w-full h-[580px] object-cover hover:scale-[1.03] transition duration-700"
                alt="Advanced Industrial Manufacturing Facility"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10" />
              <div className="absolute inset-0 ring-1 ring-white/30 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <CapabilitiesModal
        isOpen={showCapabilitiesModal}
        onClose={() => setShowCapabilitiesModal(false)}
      />
    </section>
  );
};

export default Hero;
