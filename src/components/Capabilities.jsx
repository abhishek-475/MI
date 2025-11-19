// CapabilitiesModal.jsx
import React, { useState } from 'react';
import { FaTimes, FaDownload, FaVideo, FaArrowRight } from 'react-icons/fa';

const CapabilitiesModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('machining');

  const capabilitiesData = {
    machining: {
      title: "Precision Machining",
      description: "State-of-the-art CNC machining with micron-level precision",
      features: [
        "5-Axis Simultaneous Machining",
        "Swiss-Type CNC Turning",
        "Multi-Pallet Systems",
        "High-Speed Machining"
      ],
      equipment: ["Mazak Integrex", "DMG Mori", "Haas Automation", "Okuma"],
      tolerances: "±0.0005\" Standard"
    },
    quality: {
      title: "Quality & Inspection",
      description: "Comprehensive quality control and metrology services",
      features: [
        "CMM with Scanning Capability",
        "Optical Comparators",
        "Surface Roughness Testing",
        "Material Certification"
      ],
      equipment: ["Zeiss CMM", "Mitutoyo", "Optical Gaging", "Digital Microscopy"],
      tolerances: "ISO 17025 Accredited"
    },
    automation: {
      title: "Automation & Robotics",
      description: "Advanced automation for high-volume precision manufacturing",
      features: [
        "Robotic Load/Unload Systems",
        "Automated Guided Vehicles",
        "IoT Monitoring",
        "Predictive Maintenance"
      ],
      equipment: ["Fanuc Robotics", "KUKA Systems", "Custom Automation", "PLC Integration"],
      tolerances: "24/7 Operation Capable"
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={onClose}></div>

        <div className="relative inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-6 pt-6 pb-6 sm:p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Manufacturing Capabilities</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mb-8">
              {Object.keys(capabilitiesData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {capabilitiesData[key].title}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {capabilitiesData[activeTab].title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {capabilitiesData[activeTab].description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {capabilitiesData[activeTab].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-slate-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Equipment</h4>
                    <div className="flex flex-wrap gap-2">
                      {capabilitiesData[activeTab].equipment.map((eq, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800">Standard Tolerances</h4>
                    <p className="text-blue-600 font-semibold">{capabilitiesData[activeTab].tolerances}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-800 mb-4">Resources</h4>
                <div className="space-y-4">
                  <button className="w-full bg-white border border-slate-300 rounded-lg p-4 text-left hover:border-blue-500 transition-colors group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">Technical Specifications PDF</div>
                        <div className="text-slate-600 text-sm">Detailed capabilities document</div>
                      </div>
                      <FaDownload className="text-slate-400 group-hover:text-blue-600" />
                    </div>
                  </button>

                  <button className="w-full bg-white border border-slate-300 rounded-lg p-4 text-left hover:border-blue-500 transition-colors group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">Facility Tour Video</div>
                        <div className="text-slate-600 text-sm">Virtual manufacturing tour</div>
                      </div>
                      <FaVideo className="text-slate-400 group-hover:text-blue-600" />
                    </div>
                  </button>

                  <button className="w-full bg-blue-600 text-white rounded-lg p-4 font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    Request Quote
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesModal;