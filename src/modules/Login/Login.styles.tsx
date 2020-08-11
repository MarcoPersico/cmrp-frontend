import styled from 'styled-components';
import login from '../../assests/Images/mutual.png';

export const LoginStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 6fr 2fr;
  background-image: url(${login});

  @media screen and (${(props) => props.theme.breakPoint.largeScreen}) {
    grid-template-columns: 2fr 1fr;
  }

  @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
    grid-template-columns: 0fr 1fr;
  }

  .CMRP_Login {
    &_background {
      background-color: ${(props) => props.theme.colors.primaryColor}66;
    }

    &_loginContainer {
      box-shadow: ${(props) => props.theme.shadow.leftShadow};
      background-color: ${(props) => props.theme.colors.defaultColor};
      padding: ${(props) => props.theme.spacing.bigSpacing};
      display: flex;
      flex-direction: column;
      justify-content: center;

      &_header, &_body {
        padding: ${(props) => props.theme.spacing.regularSpacing} 0;
      }

      &_body {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 12rem;
      }

      &_button {
        width: 100%;
        background: ${(props) => props.theme.colors.primaryColor};
        border-color: ${(props) => props.theme.colors.accentDarkOnly};
        color: white;
        transition: all 200ms;
        border-radius: 5px;

        &:hover {
          color: ${(props) => props.theme.colors.primaryTextColor};
          background: transparent;
        }
      }
    }
  }
`;
