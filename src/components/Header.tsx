import React from 'react';
// import Sticky from 'react-stickynode';

import StyledHeader from '../styled/header';
import Toolbar from './Toolbar';
import Hero from './Hero';

const Header = () => {
  return (
    <StyledHeader id="home">
      <Toolbar />

      <Hero />
    </StyledHeader>
  );
};

export default Header;
