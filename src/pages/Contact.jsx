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
  FaShippingFast,
  FaMapMarkerAlt,
  FaClock,
  FaUserTie,
  FaIndustry,
  FaCog,
  FaRocket
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
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Sales & Support",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm EST",
      action: "Call Now",
      gradient: "from-blue-500 to-blue-600",
      badge: "Primary Contact"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Enterprise Sales",
      details: "sales@industrial-mfg.com",
      description: "We'll respond within 24 hours",
      action: "Send Email",
      gradient: "from-emerald-500 to-emerald-600",
      badge: "Fast Response"
    },
    {
      icon: <FaBuilding className="w-6 h-6" />,
      title: "Headquarters",
      details: "123 Industrial Way, Tech City, TC 12345",
      description: "Visit our main facility",
      action: "Get Directions",
      gradient: "from-purple-500 to-purple-600",
      badge: "Main Campus"
    },
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: "Technical Support",
      details: "Available 24/7",
      description: "Enterprise-grade technical assistance",
      action: "Contact Support",
      gradient: "from-orange-500 to-orange-600",
      badge: "24/7 Available"
    }
  ];

  const regionalOffices = [
    {
      region: "North America",
      location: "Chicago, IL",
      phone: "+1 (555) 234-5678",
      focus: "Manufacturing & Distribution",
      timezone: "EST / CST",
      icon: <FaMapMarkerAlt className="w-4 h-4" />
    },
    {
      region: "Europe",
      location: "Frankfurt, Germany",
      phone: "+49 69 12345678",
      focus: "Engineering & R&D",
      timezone: "CET",
      icon: <FaGlobeAmericas className="w-4 h-4" />
    },
    {
      region: "Asia Pacific",
      location: "Singapore",
      phone: "+65 6123 4567",
      focus: "Supply Chain Operations",
      timezone: "SGT",
      icon: <FaShippingFast className="w-4 h-4" />
    }
  ];

  const enterpriseFeatures = [
    {
      icon: <FaAward className="w-5 h-5" />,
      text: "50+ Years Industry Experience",
      description: "Proven track record in precision manufacturing"
    },
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      text: "Enterprise-Grade Security",
      description: "NDA protection and confidential handling"
    },
    {
      icon: <FaShippingFast className="w-5 h-5" />,
      text: "Global Supply Chain Network",
      description: "Seamless logistics and delivery worldwide"
    },
    {
      icon: <FaCheck className="w-5 h-5" />,
      text: "ISO 9001 Certified",
      description: "Quality management system certified"
    }
  ];

  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-28 lg:py-36 overflow-hidden">

      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-x-40 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-600/5 rounded-full blur-[100px] -translate-x-32 translate-y-32"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-transparent via-blue-50/10 to-transparent"></div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Premium Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-lg shadow-blue-500/5 border border-slate-200/60 mb-8">
            <div className="w-6 h-0.5 bg-gradient-to-r from-blue-600 to-slate-400 rounded-full"></div>
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-widest">
              Enterprise Solutions
            </span>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Contact Our  
            <span className="block font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Engineering Team
            </span>
          </h2>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/60 shadow-lg shadow-blue-500/5 max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Connect with our experts for enterprise manufacturing, engineering solutions,
              and technical consultations customized for your business requirements and industry challenges.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE – PREMIUM CONTACT CARDS */}
          <div className="space-y-12">

            {/* Enhanced Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-6 shadow-lg shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${method.gradient} rounded-t-2xl`}></div>
                  
                  {/* Badge */}
                  <div className="absolute -top-2 -right-2 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 shadow-lg border border-slate-200">
                    <span className="text-xs font-semibold text-slate-700">{method.badge}</span>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg">{method.title}</h3>
                      <p className="text-slate-800 text-base font-semibold mt-1">{method.details}</p>
                      <p className="text-slate-600 text-sm mt-1 flex items-center gap-1">
                        <FaClock className="w-3 h-3" />
                        {method.description}
                      </p>

                      <button className="mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 group/btn transition-all duration-200">
                        {method.action}
                        <FaPaperPlane className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Global Offices */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-8 shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:30px_30px]"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                    <FaGlobeAmericas className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Global Operations</h3>
                    <p className="text-blue-200 text-sm">Strategic locations worldwide</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {regionalOffices.map((office, index) => (
                    <div key={index} className="group py-4 border-b border-slate-700/80 last:border-none hover:bg-white/5 rounded-xl px-4 -mx-4 transition-all duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {office.icon}
                            <h4 className="font-bold text-lg">{office.region}</h4>
                          </div>
                          <p className="text-slate-300 text-sm">{office.location}</p>
                          <p className="text-blue-300 text-sm font-medium">{office.focus}</p>
                          <p className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                            <FaClock className="w-3 h-3" />
                            {office.timezone}
                          </p>
                        </div>
                        <p className="text-white font-semibold text-sm">{office.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Enterprise Features */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/80 shadow-lg shadow-blue-500/5">
              <h4 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                  <FaShieldAlt className="w-5 h-5" />
                </div>
                Enterprise Guarantees
              </h4>

              <div className="grid grid-cols-1 gap-4">
                {enterpriseFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50/80 transition-colors duration-200 group">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{item.text}</div>
                      <div className="text-slate-600 text-sm mt-1">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE – PREMIUM FORM */}
          <div className="relative">
            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-lg animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Inquiry Submitted Successfully!</h4>
                    <p className="text-green-100 text-sm">Our engineering team will contact you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-10 border border-slate-200/80 shadow-2xl shadow-blue-500/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaUserTie className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">Enterprise Inquiry</h3>
                  <p className="text-slate-600">Let's discuss your manufacturing requirements</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name / Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Full Name *</label>
                    <div className="relative">
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-400 shadow-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Corporate Email *</label>
                    <div className="relative">
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-400 shadow-sm"
                        placeholder="your.name@company.com"
                      />
                      <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Company / Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Company *</label>
                    <div className="relative">
                      <input 
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-400 shadow-sm"
                        placeholder="Your company name"
                      />
                      <FaIndustry className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Business Phone</label>
                    <div className="relative">
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-400 shadow-sm"
                        placeholder="+1 (555) 000-0000"
                      />
                      <FaPhone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Inquiry Type *</label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none shadow-sm"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="enterprise-sales">Enterprise Sales</option>
                      <option value="technical-consultation">Technical Consultation</option>
                      <option value="custom-solutions">Custom Solutions</option>
                      <option value="partnership">Strategic Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="quote">Request Quote</option>
                    </select>
                    <FaCog className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Project Requirements *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    className="w-full px-4 py-4 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-400 resize-none shadow-sm"
                    placeholder="Describe your project requirements, specifications, and timeline..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white py-5 px-6 rounded-2xl font-bold shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3 text-base">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing Inquiry...
                      </>
                    ) : (
                      <>
                        <FaRocket className="w-5 h-5" />
                        Submit Enterprise Inquiry
                        <FaPaperPlane className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </span>
                </button>

                <div className="text-center">
                  <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
                    <FaShieldAlt className="w-4 h-4 text-green-600" />
                    All inquiries are handled with strict confidentiality and NDA protection
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;