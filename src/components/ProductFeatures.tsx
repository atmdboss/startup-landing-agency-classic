import React from 'react';

import SectionContainer from './SectionContainer';
import Feature from './Feature';
import { StyledFeatureGrid } from '../styled/feature';
import { StyledSectionTitle, StyledSectionSubtitle } from '../styled/section';
//ICONS
import Modeling from '../assets/icons/feature-modeling.svg';
import Promotion from '../assets/icons/feature-promotion.svg';
import Enterprise from '../assets/icons/feature-enterprise.svg';
import Marketing from '../assets/icons/feature-marketing.svg';
import Development from '../assets/icons/feature-development.svg';
import Support from '../assets/icons/feature-support.svg';

const ProductFeatures = () => {
  return (
    <SectionContainer maxWidth="lg">
      <StyledSectionTitle>What the features of product</StyledSectionTitle>
      <StyledSectionSubtitle>Features are highlighted here</StyledSectionSubtitle>

      <StyledFeatureGrid>
        <Feature
          title="3D modeling &amp; art"
          description="Get your info tests delivered at home collect a sample from the your pogress tests."
          icon={Modeling}
          more="#"
        />
        <Feature
          title="Digital promotion"
          description="Get your info tests delivered at home collect a sample from the your pogress tests."
          icon={Promotion}
          more="#"
        />
        <Feature
          title="Business Enterprise"
          description="Get your info tests delivered at home collect a sample from the your pogress tests."
          icon={Enterprise}
          more="#"
        />
        <Feature
          title="Marketing &amp; advertising"
          description="Get your info tests delivered at home collect a sample from the your pogress tests."
          icon={Marketing}
          more="#"
        />
        <Feature
          title="Ultimate development"
          description="Get your info tests delivered at home collect a sample from the your pogress tests."
          icon={Development}
          more="#"
        />
        <Feature
          title="Online support"
          description="Get your info tests delivered at home collect a sample from the your pogress tests."
          icon={Support}
          more="#"
        />
      </StyledFeatureGrid>
    </SectionContainer>
  );
};

export default ProductFeatures;
