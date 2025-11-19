import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaBuilding, 
  FaComments,
  FaGlobeAmericas,
  FaCheck,
  FaPaperPlane,
  FaHeadset,
  FaShieldAlt,
  FaAward,
  FaShippingFast
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Sales & Support",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm EST",
      action: "Call Now"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Enterprise Sales",
      details: "sales@industrial-mfg.com",
      description: "We'll respond within 24 hours",
      action: "Send Email"
    },
    {
      icon: <FaBuilding className="w-5 h-5" />,
      title: "Headquarters",
      details: "123 Industrial Way, Tech City, TC 12345",
      description: "Visit our main facility",
      action: "Get Directions"
    },
    {
      icon: <FaHeadset className="w-5 h-5" />,
      title: "Technical Support",
      details: "Available 24/7",
      description: "Enterprise-grade technical assistance",
      action: "Contact Support"
    }
  ];

  const regionalOffices = [
    {
      region: "North America",
      location: "Chicago, IL",
      phone: "+1 (555) 234-5678",
      focus: "Manufacturing & Distribution"
    },
    {
      region: "Europe",
      location: "Frankfurt, Germany",
      phone: "+49 69 12345678",
      focus: "Engineering & R&D"
    },
    {
      region: "Asia Pacific",
      location: "Singapore",
      phone: "+65 6123 4567",
      focus: "Supply Chain Operations"
    }
  ];

  const enterpriseFeatures = [
    {
      icon: <FaAward className="w-4 h-4" />,
      text: "50+ Years Industry Experience"
    },
    {
      icon: <FaShieldAlt className="w-4 h-4" />,
      text: "Enterprise-Grade Security"
    },
    {
      icon: <FaShippingFast className="w-4 h-4" />,
      text: "Global Supply Chain Network"
    },
    {
      icon: <FaCheck className="w-4 h-4" />,
      text: "ISO 9001 Certified"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-100 py-24 lg:py-32 overflow-hidden">

      {/* Subtle Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white shadow-sm backdrop-blur-md rounded-full px-8 py-3 border border-gray-200 mb-6">
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Enterprise Solutions
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Contact Our  
            <span className="block font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Engineering Team
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Connect with our experts for enterprise manufacturing, engineering solutions,
            and technical consultations customized for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* LEFT SIDE – CONTACT CARDS */}
          <div className="space-y-10">

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="group bg-white shadow-md hover:shadow-xl rounded-2xl p-6 border border-gray-200 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{method.title}</h3>
                      <p className="text-gray-800 text-sm font-medium">{method.details}</p>
                      <p className="text-gray-600 text-xs mt-1">{method.description}</p>

                      <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                        {method.action}
                        <FaPaperPlane className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Offices */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <FaGlobeAmericas className="w-5 h-5 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Global Operations</h3>
              </div>

              <div className="space-y-4">
                {regionalOffices.map((office, index) => (
                  <div key={index} className="py-4 border-b border-gray-700 last:border-none">
                    <h4 className="font-semibold">{office.region}</h4>
                    <p className="text-gray-300 text-sm">{office.location}</p>
                    <p className="text-blue-300 text-xs">{office.focus}</p>
                    <p className="text-white font-medium text-sm mt-1">{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Features */}
            <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4 text-blue-600" />
                Enterprise Guarantees
              </h4>

              <div className="space-y-3">
                {enterpriseFeatures.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      {item.icon}
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaPaperPlane className="text-white w-4 h-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Enterprise Inquiry</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Full Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Corporate Email *</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="your.name@company.com"
                  />
                </div>
              </div>

              {/* Company / Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Company *</label>
                  <input 
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Business Phone</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-medium">Inquiry Type *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="">Select inquiry type</option>
                  <option value="enterprise-sales">Enterprise Sales</option>
                  <option value="technical-consultation">Technical Consultation</option>
                  <option value="custom-solutions">Custom Solutions</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium">Project Requirements *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="input-field resize-none"
                  placeholder="Describe your project requirements..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Submit Inquiry
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-sm">
                All inquiries are handled with strict confidentiality.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
