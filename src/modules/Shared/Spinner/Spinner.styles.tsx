import styled from 'styled-components';

export const SpinnerStyled = styled.div`
  z-index: 6000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primaryDarkColor};
`;
