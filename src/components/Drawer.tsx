import React, { FC } from 'react';

import StyledDrawer from '../styled/drawer';
import closeIcon from '../assets/icons/close.svg';
import { DrawerProps } from '../types';
import AppLogo from '../components/AppLogo';

const Drawer: FC<DrawerProps> = ({ children, open, onClose }) => {
  return (
    <StyledDrawer className={`${open && 'open'}`}>
      <div className="head">
        <AppLogo inDrawer onClick={onClose} />
        <img src={closeIcon} alt="close icon" onClick={onClose} />
      </div>
      <div className="contents">{children}</div>
    </StyledDrawer>
  );
};

export default Drawer;
