import styled from 'styled-components';

export const AlertStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: ${(props) => props.theme.colors.primaryDarkColor};
  
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6000;

  .CMRP_alert {
    width: 600px;
    min-height: 200px;
    background-color: white;
    border-radius: 10px;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;

    button {
      width: 120px;
      background-color: ${(props) => props.theme.colors.primaryColor};
      color: white;

      &:hover {
        background-color: transparent;
        border-color: ${(props) => props.theme.colors.primaryColor};
        color: ${(props) => props.theme.colors.primaryColor};
      }
    }

    &_buttonContainer  {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
    }

    &_message {
      padding: 10px;
      text-align: center;
    }

    &_header {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        padding-right: 10px;
      }
    }
  
    @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
      width: 90%;
    }
  }
`;
