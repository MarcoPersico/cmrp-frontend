import styled from 'styled-components';

export const AffiliateProfileStyles = styled.div`
  padding: 0 ${(props) => props.theme.spacing.bigSpacing} ${(props) => props.theme.spacing.regularSpacing};
  padding-bottom: 105px;
  position: relative;
  @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
    padding: 0 ${(props) => props.theme.spacing.smallSpacing} ${(props) => props.theme.spacing.regularSpacing};  
    padding-bottom: 230px; 
  }

  .CMRP_AffiliateProfile {
    &_header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &_actionGroup {
        position: fixed;
        background: ${(props) => props.theme.colors.defaultBackground};
        left: 0;
        bottom: 0;
        z-index: 1000;
        height: 80px;
        box-shadow: 0px -3px 3px 0px #00000040;
        padding: 0 2rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        box-sizing: border-box;

        @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
          height: 225px;
          padding: 0.5rem;

          button, form {
            width: 100%;
          }
        }
      }
    }

    &_funeralService {
      width: 275px;
      margin-left: 0;

      @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
        width: 100%;
      }
    }

    &_cardContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 10px 20px;
      grid-template-areas: "card1 card1" "card2 card3";

      @media screen and (${(props) => props.theme.breakPoint.largeScreen}) {
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        grid-template-areas: "card1" "card2" "card3";
      }

      .card1 { grid-area: card1; }

      .card2 { 
        grid-area: card2;

        @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
          justify-content: flex-start;
        }
      }

      .card3 {
        grid-area: card3;
        
        @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
          justify-content: flex-start;
        }
      }
    }

    &_sectionHeader {
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 10px 0;

      button {
        cursor: pointer;
        border: none;
        background: none;
        color: ${(props) => props.theme.colors.primaryTextColor};
        font-size: 20px;
        font-weight: bold;
        font-family: Nunito;
        display: flex;
        align-items: center;
        padding: 0;

        span { margin-right: 10px; }
      }
    }

    &_sectionContainer {
      display: flex;
      flex-direction: column-reverse;
    }

    &_memberCardContainer {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px 20px;

      @media screen and (${(props) => props.theme.breakPoint.extraLargeScreen}) {
        grid-template-columns: 1fr 1fr; 
      }

      @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
        grid-template-columns: 1fr;  
      }
    }

    &_memberCard {
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
        margin: 5px 0;
        box-shadow: 0px 0px 4px 1px #00000040;
        border: 1px solid;

        &:hover {
          background: ${(props) => props.theme.colors.defaultBackground};
        }
      }
    }

    &_memberButton {
      width: 100%;
      display: flex;
    }

    &_memberFooter {
      width: 100%;
      padding: 0 10px;
      justify-content: flex-end;
      
      input {
        width: 50%;
      }

      @media screen and (${(props) => props.theme.breakPoint.largeScreen}) {
        .CMRP_ActivationField_buttonGroup,
        .CMRP_simple_button {
          width: 100%;
          padding: 0;
        } 
        input {
          width: 100%;
        }
      }
    }

    &_memberFooterOnOpen {
      justify-content: space-between;
    }

    &_disclaimer {
      font-size: 12px;
      opacity: 0.75;
      padding: 0 10px;
    }
  }

  .CMRP_ProfileField_container_label.CMRP_AffiliateProfile_active {
      font-weight: 700;
      color: green;
      display: flex;
      align-items: center;   
    }
  .CMRP_ProfileField_container_label.CMRP_AffiliateProfile_inactive {
      font-weight: 700;
      color: red;
      overflow: unset!important; 
      display: flex;
      align-items: center;   
  }
`;
