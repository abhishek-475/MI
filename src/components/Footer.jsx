import React from 'react';
import {
  FaLinkedin,
  FaYoutube,
  FaArrowRight,
  FaEnvelope,
  FaShieldAlt,
  FaFileContract,
  FaBalanceScale,
  FaAward,
  FaCertificate,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
} from 'react-icons/fa';
import {
  FiArrowRight
} from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin className="w-4 h-4" />, href: '#' },
    { name: 'YouTube', icon: <FaYoutube className="w-4 h-4" />, href: '#' }
  ];

  const products = [
    'Mechanical Components',
    'Electrical Systems',
    'Hydraulic Systems',
    'Control Panels',
    'Automation Solutions'
  ];

  const enterpriseLinks = [
    'About Us',
    'Leadership',
    'Careers',
    'Contact',
    'Support'
  ];

  const legalLinks = [
    { name: 'Privacy Policy', icon: <FaShieldAlt className="w-3 h-3" /> },
    { name: 'Terms of Service', icon: <FaFileContract className="w-3 h-3" /> },
    { name: 'Compliance', icon: <FaBalanceScale className="w-3 h-3" /> }
  ];

  const certifications = [
    'ISO 9001:2015',
    'AS9100 Certified',
    'RoHS Compliant',
    'CE Marked'
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt className="w-4 h-4" />, text: '123 Industrial Way, Tech City' },
    { icon: <FaPhone className="w-4 h-4" />, text: '+1 (555) 123-4567' },
    { icon: <FaClock className="w-4 h-4" />, text: 'Mon-Fri 8AM-6PM EST' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-100 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-gray-900 font-bold text-lg">IM</span>
              </div>
              <div>
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Industrial
                </span>
                <span className="block text-xs text-gray-400 font-medium tracking-wider mt-1">PRECISION MANUFACTURING</span>
              </div>
            </div>

            <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-sm lg:text-base">
              Global leader in precision industrial manufacturing since 1974.
              Delivering exceptional quality and technical excellence to industry leaders worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-400 text-sm">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <div className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold text-lg lg:text-xl mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Products
            </h3>
            <ul className="space-y-4">
              {products.map((item) => (
                <li key={item}>
                  <a href="#" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center">
                    <FiArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise Column */}
          <div>
            <h3 className="font-semibold text-lg lg:text-xl mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Enterprise
            </h3>
            <ul className="space-y-4">
              {enterpriseLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center">
                    <FiArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        {/* <div className="mt-12 mb-8">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                  <FaEnvelope className="w-6 h-6 text-blue-400" />
                  <h4 className="text-xl font-semibold text-white">Ready to Get Started?</h4>
                </div>
                <p className="text-gray-400 text-sm">Contact our engineering team for custom solutions</p>
              </div>
              <button className="group bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center space-x-2">
                  <span>Contact Sales</span>
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center mt-12">
          <p className="text-gray-400 text-sm flex items-center">
            <span className="w-1 h-1 bg-gray-600 rounded-full mr-2"></span>
            © 2024 Industrial Manufacturing Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group text-gray-400 hover:text-white text-sm transition-all duration-300 flex items-center space-x-2"
              >
                {item.icon}
                <span className="relative">
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gray-400 group-hover:w-full transition-all duration-300"></div>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-800">
          {certifications.map((badge) => (
            <div key={badge} className="flex items-center space-x-2 text-gray-400 text-xs group">
              <FaCertificate className="w-3 h-3 text-green-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-gray-300 transition-colors duration-300">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;