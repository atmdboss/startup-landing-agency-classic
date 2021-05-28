import React from 'react';

import SectionContainer from './SectionContainer';
import Feature from './Feature';
import { StyledFeatureGrid, StyledCoreFeatureSection } from '../styled/feature';
import { StyledSectionHeading, StyledSectionTitle } from '../styled/section';
import CoreFeatureImage from '../assets/images/core-feature.png';
import SmartFeature from '../assets/icons/feature-marketing.svg';
import SecureContents from '../assets/icons/feature-support.svg';

const CoreFeatures = () => {
  return (
    <SectionContainer maxWidth="lg">
      <StyledCoreFeatureSection>
        <div className="image">
          <img src={CoreFeatureImage} alt="browser" />
        </div>
        <div className="text">
          <StyledSectionHeading>Core Features</StyledSectionHeading>
          <StyledSectionTitle>Smart Jackpots that you may love</StyledSectionTitle>

          <StyledFeatureGrid noRow>
            <Feature
              icon={SmartFeature}
              title="Smart Features"
              description="Get your info tests delivered at home collect a sample from the your pogress tests."
            />
            <Feature
              icon={SecureContents}
              title="Secure Contents"
              description="Get your info tests delivered at home collect a sample from the your pogress tests."
            />
          </StyledFeatureGrid>
        </div>
      </StyledCoreFeatureSection>
    </SectionContainer>
  );
};

export default CoreFeatures;
