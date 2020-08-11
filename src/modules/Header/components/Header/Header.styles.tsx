import styled from 'styled-components';

export const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  z-index: 2000;

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: ${(props) => props.theme.spacing.regularSpacing};
  box-shadow: 0px 0px 6px 2px #00000040;

  background: ${(props) => props.theme.colors.primaryDarkColor};
  color: white;

  .CMRP_Header_button {
    position: absolute;
    left: 1rem;
    cursor: pointer;
    height: 42px;
    width: 42px;
    box-sizing: border-box;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 7px;
    border-radius: 5px;
    border: none;

    background: transparent;
    transition: all 200ms;

    h3 {
      z-index: 5000;
    }

    &:hover {
      background: ${(props) => props.theme.colors.primaryColor};
    }

    i {
      box-sizing: border-box;
    }
  }
`;
