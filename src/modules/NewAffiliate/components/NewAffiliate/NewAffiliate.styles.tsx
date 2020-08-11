import styled from 'styled-components';

export const NewAffiliateStyles = styled.div`
  position: relative;
  top: 80px;
  min-height: calc(100vh - 80px);
  background-color: ${(props) => props.theme.colors.primaryLightColor};
  padding: .5rem 2rem;
  box-sizing: border-box;
  
  @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
    padding: .5rem;
  }

  .CMRP_NewAffiliate {
    &_header {
      display: flex;
      padding-bottom: 10px;
    }

    &_cardContainer {
      display: grid;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 10px 20px;
      grid-template-areas: "card1 card1 card1 card1" "card2 card2 card3 card3";
      padding-bottom: 10px;

      @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
        grid-template-columns: 1fr;
        grid-template-areas: "card1" "card2" "card3";
      }

      .card1 {
        grid-area: card1;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px;
        align-items: center;
        align-content: center;
        justify-content: space-between;
        padding: 15px 1rem 0;
        box-sizing: border-box;

        @media screen and (${(props) => props.theme.breakPoint.extraLargeScreen}) {
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        }
      }

      .card2 {
        grid-area: card2;
        display: grid;
        padding: 15px 1rem 0;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 20px;
        box-sizing: border-box;
      }

      .card3 {
        grid-area: card3;
        display: grid;
        padding: 15px 1rem 0;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 20px;
        box-sizing: border-box;
      }
    }

    &_body {
      grid-auto-rows: 80px;
      gap: 25px 0;

      &_field {
        padding-bottom: 5px;
        display: flex;
        align-items: center;
      }

      &_inputField {
        input { background: transparent; }
      }
    }
    
    &_select {
      position: relative;

      &_label {
        position: absolute;
        top: -20px;
        font-weight: 500;
      }

      .select__menu {
        background: ${(props) => props.theme.colors.primaryLightColor};
      }

      .select__single-value {
        color: ${(props) => props.theme.colors.primaryTextColor};
      }

      .select__control {
        min-height: 2.75rem!important;
        background: transparent;
        border: 1px solid ${(props) => props.theme.colors.borderColor};
        
        &--isFocused {
          border: 1px solid ${(props) => props.theme.colors.borderColor};
        }

        &--menu-is-open {
          border: 1px solid ${(props) => props.theme.colors.borderColor};
        }
      }
    }

    &_membersAdded {
      display: grid;
      gap: 15px;
      padding-bottom: 20px;
    }

    &_memberCard {
      &_container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding-bottom: 20px;
        gap: 20px;
        

        @media screen and (${(props) => props.theme.breakPoint.extraLargeScreen}) {
          grid-template-columns: 1fr 1fr;
        }

        @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
          grid-template-columns: 1fr;
        }
      }

      &_add {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 220px;
        opacity: 0.5;
        font-family: nunito;
        cursor: pointer;
        background: transparent;
        border: none;
        color: ${(props) => props.theme.colors.primaryTextColor};
        transition: all 200ms;
        border-radius: 5px;
        box-shadow: 0px 0px 4px 1px #00000040;
        margin: 5px 0;
        border: 1px solid;

        &:hover {
          background: ${(props) => props.theme.colors.defaultBackground};
        }
      }
    }

    &_footer {
      display: flex;
      justify-content: flex-end;

      label {
        margin: 0;
        height: 30px;
      }
    }
  }

  .CMRP_radioGroup {
    display: flex;
    flex-direction: column;
    height: 100%;

    span { font-weight: 500 }

    &_inputs {
      height: 40px;
      display: flex;
      align-items: center;

      &_container {
        margin-right: 15px;

        label { margin-left: 5px; }
      }
    }
  }
`;
