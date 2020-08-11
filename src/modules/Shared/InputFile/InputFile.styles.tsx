import styled from 'styled-components';

export const InputFileStyles = styled.div`
  display: grid;
  gap: 20px;
  position: relative;

  input[type="file"] {
    display: none;
  }

  .CMRP_InputFile {
    &_headerLabel {
      border-style: none;
      position: absolute;
      top: -25px;
      height: 40px;
    }

    &_label {
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      border-radius: 5px;
      border-style: dashed;
      color: #999;
      display: inline-block;
      padding: 6px;
      cursor: pointer;  
      height: 2.75rem;
      box-sizing: border-box;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;

      &_container {
        display: flex;
        align-items: center;
      }
    }

    &_name {
      display: flex;
      justify-content: center;
    }
  }

  .--invalid {
    color: red;
  }

  .--filled {
    color: ${(props) => props.theme.colors.primaryTextColor};
    border-color: ${(props) => props.theme.colors.primaryTextColor};
  }
`;
