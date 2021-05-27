import styled from 'styled-components';

export default styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  height: 5rem;

  @media screen and (min-width: 960px) {
    width: 75vw;
  }

  @media screen and (min-width: 1280px) {
    height: 7rem;
  }
`;
