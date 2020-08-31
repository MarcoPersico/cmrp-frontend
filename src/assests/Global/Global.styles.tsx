import { createGlobalStyle } from 'styled-components';

// Types
import { Theme } from '../Theme/Theme';

/** Global styles */
export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    font-family: 'Spartan';
  }
  
  body {
    background-color: ${(props) => props.theme.colors.primaryDarkColor};
    color: ${(props) => props.theme.colors.primaryTextColor};
  }

  h1, h2, h3 {
    font-family: 'Nunito';
  }

  input, button {
    outline: none;
  }

  .CMRP {
    &_headerTitle {
      position: relative;
      margin-bottom: 1rem;

      &::before {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        height: 8px;
        width: 15%;
        border-radius: 4px;
        background-color: ${(props) => props.theme.colors.primaryTextColor};;
      }
    }
    
    &_simple_button {
      cursor: pointer;
      min-width: 120px;
      margin: 5px;
      background-color: ${(props) => props.theme.colors.primaryColor};
      border: 1px solid ${(props) => props.theme.colors.accentDarkOnly};
      color: white;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 15px;
      transition: all 200ms;
      height: 40px;
      text-decoration: none;
      font-size: 14px;
      backface-visibility: hidden;
      -webkit-font-smoothing: antialiased;
      text-align: center;

      &:disabled {
        background-color: #cacaca;
        border-color: #cacaca;
        color: black;
        cursor: not-allowed;
      }
    }

    &_primary_button {
        cursor: pointer;
        min-width: 120px;
        min-height: 40px;
        border: 1px solid ${(props) => props.theme.colors.primaryColor};
        background: white;
    }

    &_animations {
      &_fadeIn {
        animation-name: fadeIn;
        animation-duration: 600ms;
      }

      &_1s {
        animation-duration: 1500ms;
      }

      &_fadeOut {
        animation-name: fadeOut;
        animation-duration: 200ms;
        animation-fill-mode: forwards;
      }

      &_slideUp {
        animation-name: slideUp;
        animation-duration: 600ms;
      }

      &_blink {
        animation-name: blink;
        animation-duration: 1200ms;
      }
    }

    @keyframes blink {
      0% { 
        opacity: .75;
      }
      25% {
        opacity: .25;
      }
      50% {
        opacity: 1;
      }
      75% {
        opacity: .25;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      from { 
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from { opacity: 1 }
      to { opacity: 0 }
    }

    @keyframes slideUp {
      from { 
        transform: translateY(-100vh);
      }
      to {
        transform: translateY(0);
      }
    }
  }

  .slide {
    &-enter {
      transform: scaleY(0);
      transform-origin: top left;
      border-radius: 0 0 10px 10px;

      &-active {
        transform: scaleY(1);
        transform-origin: top left;
        transition: opacity 200ms, transform 400ms;
        border-radius: 0 0 10px 10px;
      }
    }


    &-exit {
      transform: scaleY(1);
      transform-origin: top right;
      border-radius: 0 0 10px 10px;
 
      &-active {
        transform: scaleY(0);
        transform-origin: top right;
        transition: transform 400ms;
        border-radius: 0 0 10px 10px;
      }
    }
  }

  .slideWithOpacity {
    &-enter {
      transform: scaleY(0);
      transform-origin: top left;
      border-radius: 0 0 10px 10px;
      opacity: 0;

      &-active {
        transform: scaleY(1);
        transform-origin: top left;
        transition: opacity 500ms, transform 400ms;
        border-radius: 0 0 10px 10px;
        opacity: 1;
      }
    }


    &-exit {
      transform: scaleY(1);
      transform-origin: top right;
      border-radius: 0 0 10px 10px;
      opacity: 1;
 
      &-active {
        transform: scaleY(0);
        transform-origin: top right;
        transition: opacity 200ms, transform 400ms;
        border-radius: 0 0 10px 10px;
        opacity: 0;
      }
    }
  }

  .fade {
    &-enter {
      opacity: 0;

      &-active {
        opacity: 1;
        transition: opacity 500ms;
      }
    }


    &-exit {
      opacity: 1;
 
      &-active {
        opacity: 0;
        transition: opacity 200ms;
      }
    }
  }

  /* Customize website's scrollbar like Mac OS
  Not supports in Firefox and IE */

  /* total width */
  ::-webkit-scrollbar {
    background-color: #0000008c;
    width:10px;
    height: 10px;
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: #fff0;
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: #babac061;
    border-radius:16px;
    border: 4px solid #fff0;
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {display:none}

  .up {
    transition: all 200ms;
    transform: rotate(-90deg);
  }

  .right {
    transition: all 200ms;
    transform: rotate(0deg);
  }

  .--hideShadow {
    box-shadow: none;
  }

  .--highlighted {
    font-weight: 500;
    padding: 5px 5px 2px 5px;
    background: ${(props) => props.theme.colors.primaryDarkColor};
    color: white;
  }

  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="month"]::-webkit-calendar-picker-indicator {
    filter: invert(${(props) => props.theme.colors.invert});
  }

  .-active {
    font-weight: 700;
    color: green;
    display: flex;
    align-items: center;
  }

  .-inactive {
    font-weight: 700;
    color: red;
    display: flex;
    align-items: center;
  }
`;
