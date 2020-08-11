import styled from 'styled-components';

export const SwitchInputStyled = styled.div`
  display: flex;
  align-items: center;

  label {
    cursor: pointer;
    font-size: 1.2rem;
    color: white;
    font-family: 'Spartan';
    margin-right: 5px;
  }

  .onoffswitch {
    position: relative;
    width: 55px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  .onoffswitch-checkbox {
    display: none;
  }

  .onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 20px;
    padding: 0;
    line-height: 20px;
    border: 0px solid #FFFFFF;
    border-radius: 30px;
    background-color: #eaeaea;

    &:before {
      transition: all 200ms;
      content: "";
      display: block;
      width: 30px;
      margin: -5px;
      background: #FFFFFF;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 31px;
      border-radius: 30px;
      box-shadow: 0 6px 12px 0px #0000004d;
      height: 30px;
    }
  }

  .onoffswitch-checkbox:checked + .onoffswitch-label {
    background-color: ${(props) => props.theme.colors.primaryColor};
    border-color: #42A5F5;

    &:before {
      border-color: #42A5F5;
    }

    .onoffswitch-inner {
      margin-left: 0;
    }

    &:before {
      right: 8px;
      background-color: white;
      box-shadow: 3px 6px 18px 0px rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
    label {
      font-family: 1rem;
    }
  }

`;
