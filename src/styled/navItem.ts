import styled from 'styled-components';

export default styled.li`
  list-style-type: none;
  color: ${(props) => props.theme.colors.darkBlue};
  &:hover {
    color: ${(props) => props.theme.colors.violet};
    cursor: pointer;
  }
  @media screen and (min-width: 1280px) {
    display: inline-block;
    margin-inline-end: 1.5rem;
  }
`;
