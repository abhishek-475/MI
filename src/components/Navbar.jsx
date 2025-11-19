import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaTimes,
  FaBars,
  FaLock,
  FaEnvelope,
  FaShieldAlt,
  FaArrowRight,
  FaShoppingCart,
  FaFileAlt,
  FaUsers,
  FaTools,
  FaIndustry,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activePortal, setActivePortal] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Technical Specs', href: '/technical-specs' },
    { name: 'Supply Chain', href: '/supply-chain' },
    { name: 'B2B Portal', href: '/b2b' },
    { name: 'Contact', href: '/contact' },
  ];

  const loginOptions = [
    {
      id: 'b2b',
      title: "B2B Portal",
      description: "Order management and tracking",
      icon: <FaShoppingCart className="w-5 h-5" />,
      route: '/b2b-portal'
    },
    {
      id: 'technical',
      title: "Technical Portal",
      description: "Documentation and specifications",
      icon: <FaFileAlt className="w-5 h-5" />,
      route: '/technical-portal'
    },
    {
      id: 'project',
      title: "Project Management",
      description: "Collaboration and project tracking",
      icon: <FaUsers className="w-5 h-5" />,
      route: '/project-portal'
    },
    {
      id: 'support',
      title: "Support Center",
      description: "Technical support and help desk",
      icon: <FaTools className="w-5 h-5" />,
      route: '/support-portal'
    }
  ];

  // Mock user database for demonstration
  const mockUsers = [
    {
      username: 'demo@industrial.com',
      password: 'demo123',
      name: 'Demo Client',
      company: 'Aerospace Innovations Inc.',
      portals: ['b2b', 'technical', 'project', 'support']
    },
    {
      username: 'client@manufacturing.com',
      password: 'client123',
      name: 'Manufacturing Client',
      company: 'Precision Manufacturing Corp',
      portals: ['b2b', 'support']
    },
    {
      username: 'partner@supplychain.com',
      password: 'partner123',
      name: 'Supply Chain Partner',
      company: 'Global Supply Chain Ltd',
      portals: ['b2b', 'technical']
    }
  ];

  const isActiveLink = (href) => {
    return location.pathname === href;
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setActivePortal(null);
  };

  // Client Login Modal Component
  const ClientLoginModal = () => {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      rememberMe: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      // Clear error when user starts typing
      if (loginError) setLoginError('');
    };

    const handlePortalSelect = (portal) => {
      setActivePortal(portal);
      setFormData({ username: '', password: '', rememberMe: false });
      setLoginError('');
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setLoginError('');

      // Simulate API call
      setTimeout(() => {
        const user = mockUsers.find(u =>
          u.username === formData.username && u.password === formData.password
        );

        if (user) {
          // Check if user has access to the selected portal
          if (activePortal && !user.portals.includes(activePortal.id)) {
            setLoginError(`You don't have access to the ${activePortal.title}. Please contact your administrator.`);
            setIsLoading(false);
            return;
          }

          setLoginSuccess(true);

          // Store login state
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(user));
          if (formData.rememberMe) {
            localStorage.setItem('rememberMe', 'true');
          }

          // Redirect after success
          setTimeout(() => {
            setShowLoginModal(false);
            setLoginSuccess(false);
            setIsLoading(false);

            // Navigate to selected portal or default portal
            if (activePortal) {
              navigate(activePortal.route);
            } else {
              navigate('/b2b-portal');
            }
          }, 1500);
        } else {
          setLoginError('Invalid username or password. Please try again.');
          setIsLoading(false);
        }
      }, 1500);
    };

    const handleBackToPortals = () => {
      setActivePortal(null);
      setFormData({ username: '', password: '', rememberMe: false });
      setLoginError('');
    };

    if (!showLoginModal) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm"
            onClick={() => setShowLoginModal(false)}
          ></div>

          {/* Modal Panel */}
          <div className="relative inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
            <div className="bg-white px-6 pt-6 pb-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                    <FaIndustry className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Client Portal</h3>
                    <p className="text-sm text-gray-600">Industrial Manufacturing Group</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Success State */}
              {loginSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Login Successful!</h4>
                  <p className="text-gray-600">Redirecting to your portal...</p>
                  <div className="mt-4">
                    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Portal Selection */}
                  {!activePortal && (
                    <>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Select Your Portal</h4>
                        <p className="text-gray-600 text-sm">Choose the portal you want to access</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {loginOptions.map((option, index) => (
                          <div
                            key={index}
                            onClick={() => handlePortalSelect(option)}
                            className="bg-gray-50 rounded-xl p-4 text-center border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
                          >
                            <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-200">
                              {option.icon}
                            </div>
                            <div className="text-sm font-semibold text-gray-900">{option.title}</div>
                            <div className="text-xs text-gray-600 mt-1">{option.description}</div>
                          </div>
                        ))}
                      </div>

                      <div className="text-center text-sm text-gray-500">
                        Not sure which portal to use? <br />
                        <button className="text-blue-600 hover:text-blue-700 font-medium mt-1">
                          Contact Support
                        </button>
                      </div>
                    </>
                  )}

                  {/* Login Form */}
                  {activePortal && (
                    <>
                      {/* Back Button */}
                      <button
                        onClick={handleBackToPortals}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-200"
                      >
                        <FaArrowRight className="w-3 h-3 rotate-180" />
                        <span className="text-sm font-medium">Back to portals</span>
                      </button>

                      {/* Portal Header */}
                      <div className="flex items-center space-x-3 mb-6 p-3 bg-blue-50 rounded-xl">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          {activePortal.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{activePortal.title}</h4>
                          <p className="text-sm text-gray-600">{activePortal.description}</p>
                        </div>
                      </div>

                      {/* Login Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {loginError && (
                          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2">
                            <FaExclamationTriangle className="text-red-500 flex-shrink-0" />
                            <span className="text-sm text-red-700">{loginError}</span>
                          </div>
                        )}

                        <div>
                          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                            Username or Email
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="username"
                              name="username"
                              value={formData.username}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 pl-11"
                              placeholder="Enter your username or email"
                            />
                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 pl-11 pr-11"
                              placeholder="Enter your password"
                            />
                            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                            >
                              {showPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="rememberMe"
                              name="rememberMe"
                              type="checkbox"
                              checked={formData.rememberMe}
                              onChange={handleChange}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                              Remember me
                            </label>
                          </div>
                          <button type="button" className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium">
                            Forgot password?
                          </button>
                        </div>

                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                        >
                          {isLoading ? (
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Signing in...</span>
                            </div>
                          ) : (
                            `Sign In to ${activePortal.title}`
                          )}
                        </button>
                      </form>

                      {/* Demo Credentials */}
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h5 className="text-sm font-semibold text-gray-900 mb-2">Demo Credentials:</h5>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div>Email: demo@industrial.com</div>
                          <div>Password: demo123</div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Security Notice */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-600">
                <FaShieldAlt className="w-3 h-3 text-green-600" />
                <span>Secure login with 256-bit SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-200/80 sticky top-0 z-40 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                onClick={handleLogoClick}
                className="flex items-center space-x-3 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                  <FaIndustry className="text-white text-lg" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900">Industrial</span>
                  <span className="block text-xs text-gray-600 font-medium tracking-widest">MANUFACTURING GROUP</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-12 flex items-baseline space-x-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-4 py-3 transition-all duration-200 font-medium group ${isActiveLink(item.href)
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Active Indicator */}
                    {isActiveLink(item.href) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                    )}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-200 -z-0"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={handleLoginClick}
                className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2"
              >
                <FaLock className="w-4 h-4" />
                <span>Client Login</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={handleLoginClick}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <FaLock className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200/80 bg-white/95 backdrop-blur-xl">
              <div className="py-4 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg ${isActiveLink(item.href)
                        ? "text-gray-900 bg-blue-50"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <button
                  onClick={handleLoginClick}
                  className="mt-3 w-full bg-gray-900 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <FaLock className="w-4 h-4" />
                  <span>Client Login</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Render the login modal */}
      <ClientLoginModal />
    </>
  );
};

export default Navbar;