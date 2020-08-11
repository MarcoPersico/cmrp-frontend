import styled from 'styled-components';

export const SearchbarStyled = styled.form`
  position: relative;

  .CMRP_SearchBar {
    &_input {
      width: 100%;
      height: 100%;
      height: 2.5rem;
      box-sizing: border-box;
      padding: 0 2.5rem 0 .5rem;
      display: inline-flex;
      align-items: center;
      border: 1px solid #bbb;
      background-color: ${(props) => props.theme.colors.defaultColor};
      color: ${(props) => props.theme.colors.primaryTextColor};
      border-radius: .25rem;
      line-height: 2.5rem;

      &::-webkit-input-placeholder {
        color: #bbb;
      }
    }

    &_divider {
      position: absolute;
      top: 4px;
      right: 2.5rem;
      height: calc(100% - 8px);
      border-left: 1px solid #bbb;
      display: inline-flex;
      align-items: center;
    }

    &_action {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 43px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
      padding: 0;

      svg {
        fill: ${(props) => props.theme.colors.primaryTextColor};
      }
    }
  }
`;
