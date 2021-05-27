import styled from 'styled-components';

export default styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.skyBlue};
`;
