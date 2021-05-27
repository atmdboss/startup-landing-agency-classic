import React, { FC } from 'react';

import { StyledFeature } from '../styled/feature';
import { FeatureProps } from '../types';
import arrowRight from '../assets/icons/arrow-right.svg';

const Feature: FC<FeatureProps> = ({ title, description, icon, more }) => {
  return (
    <StyledFeature>
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="text">
        <span className="text__title">{title}</span>
        <p className="text__description">{description}</p>
        {more && (
          <a href={more} className="text__more">
            <span>Learn More</span>
            <img src={arrowRight} alt="right arrow" />
          </a>
        )}
      </div>
    </StyledFeature>
  );
};

export default Feature;
