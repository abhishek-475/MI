import React from 'react';
import Hero from './Hero';
import Products from './Products';
import Solutions from './Solutions';
import TechnicalSpecs from './TechnicalSpecs';
import B2BPortal from './B2BPortal';
import SupplyChain from './SupplyChain';

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <Products /> */}
      <Solutions />
      {/* <TechnicalSpecs /> */}
      {/* <B2BPortal /> */}
      <SupplyChain />
    </main>
  );
};

export default Home;