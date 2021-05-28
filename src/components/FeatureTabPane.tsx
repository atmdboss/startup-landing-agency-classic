import React, { FC } from 'react';

import { FeatureTabPaneProps } from '../types';

const FeatureTabPane: FC<FeatureTabPaneProps> = ({ icon: Icon, label, onClick, className }) => {
  console.log({ icon: Icon });
  return (
    <div className={className} onClick={onClick}>
      <span className="icon">
        {Icon && <Icon />}

        {/* <img src={icon} alt="icon" /> */}
      </span>
      <span className="label">{label}</span>
    </div>
  );
};

export default FeatureTabPane;
