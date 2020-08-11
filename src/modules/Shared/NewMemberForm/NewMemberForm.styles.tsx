import styled from 'styled-components';

export const NewMemberFormStyles = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 .5rem;

  .CMRP_NewMemberForm {
    &_header {
      font-weight: 600;
    }

    &_body {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 15px 0;
      height: 100%;

      &_field {
        display: flex;
        flex-direction: column;
        width: 275px;
        margin: 20px 0;

        input {
          background: transparent;
          height: 40px;
          margin-top: 10px;
          color: ${(props) => props.theme.colors.primaryTextColor};
        }

        @media screen and (${(props) => props.theme.breakPoint.largeScreen}) {
          width: 240px;
        }

        @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
          width: 100%;
        }
      }

      &_staticField {
        display: flex;
        justify-content: center;
        align-items: center;   
        padding: 10px 0;
        font-weight: 500;

        svg {
          color: #1976D2; 
          padding-bottom: 5px;
          padding-left: 5px;
        }
      }
    }

    &_footer {
      display: flex;
      justify-content: flex-end;

      @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
        justify-content: space-between;
      }
    }
  }
`;
