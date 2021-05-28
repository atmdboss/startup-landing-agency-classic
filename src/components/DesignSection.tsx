import React from 'react';

import SectionContainer from './SectionContainer';
import { StyledSectionHeading, StyledSectionTitle, StyledSectionSubtitle } from '../styled/section';
import { StyledCoreFeatureSection } from '../styled/feature';
import StyledButton from '../styled/button';
import DesignFeature from '../assets/images/design-feature.png';

const DesignSection = () => {
  return (
    <SectionContainer maxWidth="lg">
      <StyledCoreFeatureSection>
        <div className="text">
          <StyledSectionHeading>Behind the design</StyledSectionHeading>
          <StyledSectionTitle>Code that we used to built the website with integrating apps</StyledSectionTitle>
          <StyledSectionSubtitle className="content">
            Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </StyledSectionSubtitle>
          <StyledButton dark>Explore More</StyledButton>
        </div>
        <div className="image">
          <img src={DesignFeature} alt="browser" />
        </div>
      </StyledCoreFeatureSection>
    </SectionContainer>
  );
};

export default DesignSection;
