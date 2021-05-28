import React from 'react';

import SectionContainer from './SectionContainer';
import FeatureTabs from './FeatureTabs';
import FeatureTabContent from './FeatureTabContent';
import { StyledSectionTitle, StyledSectionSubtitle } from '../styled/section';
import SlideFeature from '../assets/images/slide-feature.png';
import { ReactComponent as Dollar } from '../assets/icons/dollar.svg';
import { ReactComponent as gear } from '../assets/icons/gear.svg';
import { ReactComponent as pieChart } from '../assets/icons/pie-chart.svg';
import { ReactComponent as briefcase } from '../assets/icons/briefcase.svg';

const SlideFeatures = () => {
  return (
    <SectionContainer>
      <StyledSectionTitle>What the features of product</StyledSectionTitle>
      <StyledSectionSubtitle>Introducing all screen details</StyledSectionSubtitle>

      <FeatureTabs>
        <FeatureTabContent icon={Dollar} label="Budget Overview">
          <img src={SlideFeature} alt="browser" />
        </FeatureTabContent>
        <React.Fragment></React.Fragment>
        <FeatureTabContent icon={gear} label="Create &amp; adjust">
          <img src={SlideFeature} alt="browser" />
        </FeatureTabContent>
        <FeatureTabContent icon={pieChart} label="View Reports">
          <img src={SlideFeature} alt="browser" />
        </FeatureTabContent>
        <FeatureTabContent icon={briefcase} label="Create &amp; adjust">
          <p>testing</p>
        </FeatureTabContent>
      </FeatureTabs>
    </SectionContainer>
  );
};

export default SlideFeatures;
