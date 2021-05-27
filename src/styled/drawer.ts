import styled from 'styled-components';
import Drawer from 'rc-drawer';

export default styled(Drawer)`
  .drawer-content-wrapper {
    position: relative;

    @media screen and (min-width: 600px) {
      width: 65vw;
    }

    .drawer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-block-start: 1rem;
      height: 60%;
      padding: 1rem;

      li {
        margin-block-start: 1rem;
      }

      button {
        margin-block-start: auto;
      }
    }

    .close {
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
  }
`;
