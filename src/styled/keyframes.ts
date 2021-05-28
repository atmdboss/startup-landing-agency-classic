import { keyframes } from 'styled-components';

export const rotate = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const shake = keyframes`
from {
    transform: rotate(-25deg);
  }
  to {
    transform: rotate(-10deg);
  }
`;

export const moveL = keyframes`
from {
    top: -50px;
    left: -200px;
}
to {
    top: 0px;
    left: -120px;
    
  }
`;

export const moveR = keyframes`
from {
    top: -50px;
    right: -200px;
}
to {
    top: 0px;
    right: -120px;
    
  }
`;

export const show = keyframes`
from {
    transform: scale(0);
}
to {
    transform: scale(1);
  }
`;
