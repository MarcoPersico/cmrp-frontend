import styled from 'styled-components';

export const PayRegistryResultsStyles = styled.div`
  position: relative;
  top: 80px;
  padding: 1rem;
  box-sizing: border-box;
  min-height: calc(100vh - 80px);
  background: ${(props) => props.theme.colors.primaryLightColor};

  h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 22px;
  }

  p {
    width: 100%;
    text-align: center;
    padding-bottom: 1rem;
  }

  .CMRP_results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: ${(props) => props.theme.spacing.bigSpacing};

    &_card {
      cursor: pointer;
      min-width: 120px;
      margin: 5px;
      background-color: ${(props) => props.theme.colors.primaryColor};
      border: 1px solid ${(props) => props.theme.colors.accentDarkOnly};
      color: white;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 15px;
      transition: all 200ms;
      height: 40px;
      text-decoration: none;
      font-size: 14px;
      backface-visibility: hidden;
      -webkit-font-smoothing: antialiased;
      text-align: center;

      &:hover {
        transform: scale(1.05);
      }
    }

    @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
      &_card {
        width: 85%;
        border-radius: 5px;
      }
    }
  }
`;
