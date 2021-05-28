import React, { useState, FC } from 'react';

import FeatureTabPane from './FeatureTabPane';
import { FeatureTabsProps } from '../types';
import { StyledFeatureTabs } from '../styled/feature';
// import { Scrollbars } from 'react-custom-scrollbars';

const FeatureTabs: FC<FeatureTabsProps> = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledFeatureTabs>
      <div className="tab-panes">
        <div>
          {props.children?.map((child, index) => {
            return (
              <FeatureTabPane
                className={index === activeTab ? 'active' : ''}
                icon={child.props.icon}
                label={child.props.label}
                onClick={() => {
                  setActiveTab(index);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="tab-content">
        {props.children?.map((child, index) => {
          return index === activeTab ? child.props.children : null;
        })}
      </div>
    </StyledFeatureTabs>
  );
};

export default FeatureTabs;
