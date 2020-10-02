import styled from 'styled-components';

export const PayRegistrySelectedStyles = styled.div`
  position: relative;
  top: 80px;
  overflow-y: scroll;
  height: 1vh;
  padding: 0 1rem 1rem;
  box-sizing: border-box;
  min-height: calc(100vh - 80px);
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.primaryLightColor};

  .CMRP_PayRegistry {
    &_header {
      padding: 1.5rem 0;
      display: flex;
    }

    &_filter {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 60px;
      width: 100%;

      &_select {
        height: 40px;
        border-radius: 5px;
        background: transparent;
        color: currentColor;

        option { background-color: ${(props) => props.theme.colors.defaultColor} }
      }

      &_containerValue {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &_clearFilter {
          background: none;
          border: none;
          text-align: start;
          cursor: pointer;
          color: currentColor;
        }
      }
    }

    &_tableContainer {
      margin-bottom: 100px;
    }
  }

  .--highlight {
    background-color: #c3d8ff;
  }
`;
