import React from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';

import Header from './components/Header';
import ProductFeatures from './components/ProductFeatures';
import CoreFeatures from './components/CoreFeatures';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductFeatures />
      <CoreFeatures />
    </div>
  );
}

export default App;
