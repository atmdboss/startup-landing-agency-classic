import React, { FC } from 'react';

import StyledSection from '../styled/section';
import { SectionProps } from '../types';

const SectionContainer: FC<SectionProps> = ({ maxWidth, children }) => {
  return <StyledSection maxWidth={maxWidth}>{children}</StyledSection>;
};

export default SectionContainer;
