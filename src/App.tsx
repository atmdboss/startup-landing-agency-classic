import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './App.css';

import Header from './components/Header';

function App() {
  return (
    <Scrollbars className="App">
      <Header />
    </Scrollbars>
  );
}

export default App;
