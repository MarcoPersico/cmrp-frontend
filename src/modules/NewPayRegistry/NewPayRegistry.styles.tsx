import styled from 'styled-components';

export const NewPayRegistryStyles = styled.div`
  position: relative;
  top: 80px;
  justify-content: flex-start;
  padding: 1rem;
  box-sizing: border-box;
  min-height: calc(100vh - 80px);
  background: ${(props) => props.theme.colors.primaryLightColor};

  h2 {
    display: flex;
    max-width: 400px;
  }

  .CMRP_NewPayRegistry {
    &_inputFile {
      align-items: center;
      span { text-align: center }
      label {
        height: 100px;
        text-align: center;

        @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
          margin-top: 16px;
        }
      }
    }

    &_actionContainer {
      display: flex;
      justify-content: flex-end;
    }

    &_form {
      display: grid;
      gap: 20px;
      padding-top: 15px;
    }

    &_formBody {
      width: 100%;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 150px 40px;
      gap: 20px 100px;
      grid-template-areas: "file file" "period code";
      justify-content: center;
      align-items: center;
  
      &_date {
        height: 2.75rem;
        box-sizing: border-box;
        input { background: transparent; }
      }

      .file { grid-area: file; }
      .period { grid-area: period; }
      .code { grid-area: code; }

      @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
        grid-template-areas: "file" "period" "code";
        grid-template-rows: 140px 40px 40px;
        grid-template-columns: 1fr;
        padding-bottom: 25px;

        .code { margin-top: 40px }
      }
    }

    &_header {
      padding-bottom: 15px;
      font-size: 20px;

      &_highlight {
        font-style: italic;
        font-weight: 700;
        font-size: 16px;
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
  }
`;
