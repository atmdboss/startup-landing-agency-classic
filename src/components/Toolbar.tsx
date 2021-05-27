import React, { useCallback, useEffect, useState } from 'react';

import StyledToolbar from '../styled/toolbar';
import hamburgerIcon from '../assets/icons/hamburger.svg';
import closeIcon from '../assets/icons/close.svg';
import AppLogo from '../components/AppLogo';
import StyledNavItem from '../styled/navItem';
import StyledDrawer from '../styled/drawer';
import StyledButton from '../styled/button';

const Toolbar = () => {
  /*
    ******************************
    STATE AND HOOKS
    ******************************
    */
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
  const handleResize = useCallback(() => {
    return setIsMobile(window.innerWidth <= 960);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };
  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  /*
    ******************************
    RETURN
    ******************************
    */
  return (
    <StyledToolbar>
      <AppLogo />

      {isMobile ? (
        <React.Fragment>
          <img src={hamburgerIcon} alt="hamburger icon" onClick={handleDrawerOpen} />

          <StyledDrawer
            open={isOpen}
            height="100vh"
            placement="left"
            handler={<img className="close" src={closeIcon} alt="close icon" onClick={handleDrawerClose} />}
          >
            <AppLogo inDrawer onClick={handleDrawerClose} />

            <StyledNavItem onClick={handleDrawerClose}>Home</StyledNavItem>
            <StyledNavItem onClick={handleDrawerClose}>Services</StyledNavItem>
            <StyledNavItem onClick={handleDrawerClose}>Pricing</StyledNavItem>
            <StyledNavItem onClick={handleDrawerClose}>Testimonials</StyledNavItem>
            <StyledNavItem onClick={handleDrawerClose}>News</StyledNavItem>

            <StyledButton onClick={handleDrawerClose} dark fullWidth>
              Purchase Now
            </StyledButton>
          </StyledDrawer>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="links">
            <StyledNavItem>Home</StyledNavItem>
            <StyledNavItem>Services</StyledNavItem>
            <StyledNavItem>Pricing</StyledNavItem>
            <StyledNavItem>Testimonials</StyledNavItem>
            <StyledNavItem>News</StyledNavItem>
          </div>

          <div className="btn">
            <StyledButton dark fullWidth>
              Purchase Now
            </StyledButton>
          </div>
        </React.Fragment>
      )}
    </StyledToolbar>
  );
};

export default Toolbar;
