import styled from 'styled-components';

export const MenuStyles = styled.div`
  position: fixed;
  z-index: 1500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.colors.primaryDarkColor};

  .CMRP_Menu {
    &_body {
      transition: all 200ms;
      
      &_settingsContainer {
        transition: all 200ms;
        display: flex;
        justify-content: space-between;

        svg {
          padding-right: 10px;
        }

        ul {
          list-style: none;
          position: relative;

          li::before {
            position: absolute;
            content: '◦';
            top: 1px;
            color: white;
            font-weight: bold;
            display: inline-flex;
            align-items: center;
            width: 1em;
            height: 100%;
            margin-left: -1.5rem;
            font-size: 2rem;
          }
        }
      }
      
      h1 {
        color: white;
        display: inline-flex;
        align-items: flex-end;
        letter-spacing: 2px;
        font-size: 1.5rem;
      }

      p { font-size: 1.5rem }
      label { font-size: 1.25rem }

      &_hr {
        height: 6px;
        width: 1.5rem;
        background-color: white;
        border-radius: 1rem;
        margin-bottom: 1px;
      }

      display: grid;
      justify-content: center;
      justify-items: center;
      gap: ${(props) => props.theme.spacing.bigSpacing};

      @media screen and (${(props) => props.theme.breakPoint.extraLargeScreen}) {
        gap: 1rem;
        p, h1 { font-size: 1.25rem }
        label { font-size: 1rem }
      }

      a, button {
        cursor: pointer;
        color: white;
        font-size: 2rem;
        text-decoration: underline;
        text-decoration-color: transparent;
        transition: all 200ms;
        font-family: 'Spartan';
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;

        svg {
          padding-right: 10px;
          width: 32px;
          height: 100%;
          fill: white;
        }

        &:hover {
          transform: scale(1.05);
          text-decoration-color: white;
        }
      }
    }
  }

  @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
    .CMRP_Menu {
      &_body {
        a, button {
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
          text-align: center;
          width: 80%;
        }
      }
    }
  }
`;
