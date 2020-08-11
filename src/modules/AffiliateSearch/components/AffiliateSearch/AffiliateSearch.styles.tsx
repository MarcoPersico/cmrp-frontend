import styled from 'styled-components';

export const AffiliateSearchStyles = styled.div`
  position: relative;
  min-height: calc(100vh - 80px);
  top: 80px;
  z-index: 100;
  width: 100%;
  scroll-behavior: smooth;
  background: ${(props) => props.theme.colors.primaryLightColor};
  z-index: 1000;

  .CMRP_AffiliateSearch {
    &_searcher {
      padding: 20px;
      display: flex;
      justify-content: center;
    
      @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
        padding: ${(props) => props.theme.spacing.regularSpacing};
      }
    }

    &_searchbar {
      width: 455px;

      @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
        width: 100%;
      }
    }

    &_notFound {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      p { 
        font-size: 22px;
        text-align: center;
      }
    }
  }
`;
