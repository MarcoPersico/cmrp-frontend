import styled from 'styled-components';

interface StyledProps {
  noPadding?: boolean,
}

export const ProfileFieldStyles = styled.div<StyledProps>`
  padding: ${(props) => (props.noPadding ? '0' : '15px 10px')};
  height: ${(props) => (props.noPadding ? '100%' : 'auto')};
  
  @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
    width: 100%;
  }

  .CMRP_ProfileField {
    &_title {
      font-weight: 500;
    }

    &_container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 45px;
      min-width: 270px;
      padding-top: 5px;
      position: relative;

      &_label {
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
        max-width: 200px;
        color: ${(props) => props.theme.colors.secondaryTextColor};
        display: flex;
        align-items: center;
      }

      button {
        cursor: pointer;
        height: 100%;
        border: none;
        background: none;
        color: ${(props) => props.theme.colors.primaryTextColor};
        display: flex;
        align-items: center;
        transition: all 200ms;

        &:hover {
          opacity: 0.75;
        }
        svg {
          fill: ${(props) => props.theme.colors.primaryTextColor};
        }
      }
    }

    &_buttonContainer {
      display: flex;
      justify-content: space-between;
    }

    &_edit {
      box-sizing: border-box;
      background: transparent;
      border: 1px solid ${(props) => props.theme.colors.primaryTextColor};
      border-radius: 5px;
      height: 35px;
      width: 100%;
      padding: 0 10px;
      color: ${(props) => props.theme.colors.primaryTextColor};
    }
  }

  button.CMRP_ProfileField_tooltip_icon {
    padding-bottom: 5px;
    width: 36px;
    height: 30px;
  }

`;
