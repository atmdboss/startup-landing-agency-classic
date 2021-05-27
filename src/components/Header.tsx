import React from 'react';

import StyledHeader from '../styled/header';
import Toolbar from './Toolbar';

const Header = () => {
  return (
    <StyledHeader id="home">
      <Toolbar />
    </StyledHeader>
  );
};

export default Header;
