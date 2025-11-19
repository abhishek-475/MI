import React from 'react';
import { 
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaAward,
  FaCheck,
  FaIndustry,
  FaShieldAlt,
  FaCog,
  FaGlobeAmericas
} from 'react-icons/fa';

const Hero = () => {
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
              
              {/* Primary CTA */}
              <button className="group relative bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden border border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3 text-base">
                  Explore Capabilities
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </span>
              </button>

              {/* Secondary CTA */}
              <button className="group relative bg-white/90 backdrop-blur-md border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-10 py-5 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                <span className="relative flex items-center gap-3 text-base">
                  View Case Studies
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

          {/* RIGHT SIDE — PREMIUM IMAGE WITH FLOATING CARDS */}
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

            {/* Floating Quality Badge */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-slate-200/80 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
                  <FaCheck className="text-white text-xl" />
                </div>
                <div className="text-lg font-bold text-slate-900 mt-3">ISO 9001:2015</div>
                <div className="text-sm text-slate-500 font-medium">Quality Certified</div>
              </div>
            </div> */}

            {/* Floating Client Retention */}
            {/* <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-slate-200/80 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <FaChartLine className="text-white text-lg" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-500 font-medium">Client Retention</div>
                </div>
              </div>
            </div> */}

            {/* Floating Safety Badge */}
            {/* <div className="absolute bottom-32 -right-12 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-slate-200/80 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <FaShieldAlt className="text-white text-lg" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">Zero</div>
                  <div className="text-sm text-slate-500 font-medium">Safety Incidents</div>
                </div>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;