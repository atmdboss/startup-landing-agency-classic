import React, { FC } from 'react';

import StyledLogo from '../styled/logo';
import logo from '../assets/icons/logo.svg';

import { LogoProps } from '../types';

const AppLogo: FC<LogoProps> = ({ inDrawer, onClick }) => {
  return (
    <StyledLogo inDrawer={inDrawer} onClick={onClick} href="#">
      <img src={logo} alt="app logo" />
      <span>Startup Landing</span>
    </StyledLogo>
  );
};

export default AppLogo;
