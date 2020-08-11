import styled from 'styled-components';

export const ActivationFieldStyles = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .CMRP_ActivationField {
    &_input {
      height: 35px;
      width: 170px;
      border-radius: 4px;
      border: 1px solid #bbbbbb;   
      margin-right: 5px;  
      padding: 0 10px;

      @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
        margin-left: 0;
        width: 100%;
      } 
    }

    &_buttonGroup {
      display: flex;

      @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
        width: 100%;
        justify-content: space-between;
        padding: 10px 0px;

        .CMRP_simple_button {
          margin-left: 0;
        }
      } 
    }
  }
`;
