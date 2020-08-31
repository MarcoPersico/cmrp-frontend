import styled from 'styled-components';

export const AffiliateCensusStyles = styled.div`
  position: relative;
  min-height: calc(100vh - 80px);
  top: 80px;
  z-index: 100;
  height: 1vh;
  width: 100%;
  scroll-behavior: smooth;
  background: ${(props) => props.theme.colors.primaryLightColor};
  box-sizing: border-box;
  z-index: 1000;
  overflow-y: scroll;
  padding-bottom: 110px;

  .CMRP_AffiliateCensus {
    &_header {
      display: flex;
      padding: 1rem;
    }

    &_body {
      padding: 0 1rem;
    }
  }
`;
