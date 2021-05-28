import React from 'react';

export type FeatureProps = {
  icon: string;
  title: string;
  description: string;
  more?: string;
};

export type FeatureGridProps = {
  noRow?: boolean;
};

export type FeatureTabContentProps = {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  label: string;
};

export type FeatureTabPaneProps = FeatureTabContentProps & {
  onClick: () => void;
  className?: string;
};

export type FeatureTabsProps = {
  children?: React.ReactElement<FeatureTabContentProps & { children?: React.ReactNode }>[];
};
