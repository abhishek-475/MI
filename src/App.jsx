import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import TechnicalSpecs from './pages/TechnicalSpecs';
import SupplyChain from './pages/SupplyChain';
import Contact from './pages/Contact';
import Home from './pages/Home';
import B2BPortal from './pages/B2BPortal';
import Solutions from './pages/Solutions';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/technical-specs" element={<TechnicalSpecs />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/b2b' element={<B2BPortal />} />
          <Route path='/solutions' element={<Solutions />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;