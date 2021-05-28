import styled from 'styled-components';

import { SectionProps } from '../types';

export default styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-block-start: 3rem;
  padding-block-end: 3rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  text-align: center;
  max-width: ${(props) => {
    switch (props.maxWidth) {
      case 'sm':
        return '300px';
      case 'md':
        return '600px';
      case 'lg':
        return '960px';
      case 'xl':
        return '1280px';

      default:
        return '100%';
    }
  }};

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledSectionTitle = styled.p`
  font-size: ${(props) => props.theme.fonts.md};
  font-weight: 500;
  flex-basis: 100%;

  @media screen and (min-width: 1280px) {
    font-size: ${(props) => props.theme.fonts.lg};
  }
`;

export const StyledSectionSubtitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fonts.sm};
  color: ${(props) => props.theme.colors.lightGrey};
  font-weight: 300;
  flex-basis: 100%;

  @media screen and (min-width: 1280px) {
    font-size: ${(props) => props.theme.fonts.md};
  }
`;

export const StyledSectionHeading = styled.h3`
  font-size: ${(props) => props.theme.fonts.sm};
  color: ${(props) => props.theme.colors.violet};
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: ${(props) => props.theme.fonts.md};
  }
`;
