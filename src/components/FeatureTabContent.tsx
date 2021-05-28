import React, { FC } from 'react';

import { FeatureTabContentProps } from '../types';

const FeatureTabContent: FC<FeatureTabContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default FeatureTabContent;
