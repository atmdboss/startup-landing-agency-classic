import styled, { css } from 'styled-components';

import { LogoProps } from '../types';

export default styled.a<LogoProps>`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.darkBlue};

  ${(props) =>
    props.inDrawer &&
    css`
      align-self: flex-start;
    `}

  img {
    margin-inline-end: 0.5rem;
  }
`;
