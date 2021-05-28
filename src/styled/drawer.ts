import styled from 'styled-components';

export default styled.div`
  background-color: white;
  height: 100vh;
  width: 90vw;
  position: fixed;
  top: 0;
  z-index: 10;
  transform: translateX(-100vw);
  transition: transform 0.4s ease-in-out;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  &.open {
    transform: translateX(0);
    left: 0;
  }

  .head {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;

    li {
      margin-block-end: 1rem;
    }

    button {
      margin-block-start: auto;
    }
  }

  @media screen and (min-width: 600px) {
    width: 65vw;
  }
`;
