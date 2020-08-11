import styled from 'styled-components';

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    position: absolute;
    top: -20px;
    font-weight: 500;
    transition: all 200ms;
  }

  input {    
    width: 100%;
    height: 2.75rem;
    border-radius: .25rem;
    border: 1px solid ${(props) => props.theme.colors.borderColor};;
    box-sizing: border-box;
    padding: ${(props) => props.theme.spacing.smallSpacing};
    transition: all 200ms;
    color: ${(props) => props.theme.colors.primaryTextColor};

    &::placeholder {
      color: #999;
    } 

    &:invalid:focus {
        border-color: red;

        ~ label {
          color: red;
        }
    }

    &:focus {
      border-color: ${(props) => props.theme.colors.accentColor};

      ~ label {
        color: ${(props) => props.theme.colors.accentColor};
      }
    }

    &[type="month"]:read-only, &[type="number"]:read-only {
      cursor: default;
      background: ${(props) => props.theme.colors.borderColor};
      color: ${(props) => props.theme.colors.secondaryTextColor};

      &:focus, &:active {
        border: 1px solid ${(props) => props.theme.colors.borderColor};

        ~ label {
          color: unset;
        }
      }
    }
  }
`;
