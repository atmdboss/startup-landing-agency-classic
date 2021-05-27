import styled, { css } from 'styled-components';

import { ButtonProps } from '../types';

export default styled.button<ButtonProps>`
  background-color: white;
  color: ${(props) => props.theme.colors.darkBlue};
  box-shadow: 1px 2px 9px 2px rgba(0, 0, 0, 0.79);
  padding: 1rem 2.5rem;
  border-radius: 4px;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.dark &&
    css`
      background-color: ${(props) => props.theme.colors.darkBlue};
      color: white;
    `};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
