import styled from 'styled-components';

interface StyledProps {
  isOpen: boolean,
}

export const ActionGroupStyles = styled.div<StyledProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isOpen ? '100px' : '0px')};
  background: ${(props) => props.theme.colors.defaultBackground};
  box-shadow: 0px 0px 5px 3px #0000003d;
  transition: all 200ms;
  z-index: 100;

  @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
    height: ${(props) => (props.isOpen ? 'auto' : '0px')};
    min-height: ${(props) => (props.isOpen ? '100px' : '0px')};
  }

  .CMRP_ActionGroup {
    &_toggleContainer {
      width: 100%;

      &_action {
        cursor: pointer;
        transition: all 200ms;
        position: absolute;
        top: ${(props) => (props.isOpen ? '-20px' : '-50px')};
        right: 15px;
        border-radius: 50%;
        border: 1px solid #0000;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 3px 3px #00000026;
        color: currentColor;
        padding-top: ${(props) => (props.isOpen ? '0px' : '3px')};
        transform: ${(props) => (props.isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
        background: ${(props) => props.theme.colors.defaultBackground}dd;
      }
    }
    
    &_childrenContainer {
        display: ${(props) => (props.isOpen ? 'flex' : 'none')};
        height: 100%;
        flex-wrap: wrap;
        align-items: center;
        padding: 0 2rem;

        @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
          padding: 1.5rem 1rem 0 1rem;
          button, form {
            width: 100%;
          }
        }
      }
  }
`;
