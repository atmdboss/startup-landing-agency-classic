import React from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';

import Header from './components/Header';
import ProductFeatures from './components/ProductFeatures';
import CoreFeatures from './components/CoreFeatures';
import DesignSection from './components/DesignSection';
import SlideFeatures from './components/SlideFeatures';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductFeatures />
      <CoreFeatures />
      <DesignSection />
      <SlideFeatures />
    </div>
  );
}

export default App;
