import styled from 'styled-components';

export const PayRegistryCardStyles = styled.div`
  transition: all 200ms;
  a { text-decoration: none; color: unset }

  .CMRP_PayRegistry {

    &_cardContainer {
      grid-template-columns: repeat(auto-fill,minmax(310px,1fr));
      padding: 1rem 1rem 0.25rem;
      display: grid;
      justify-content: center;

      @media screen and (${(props) => props.theme.breakPoint.extraLargeScreen}) {
        grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
      }

      @media screen and (${(props) => props.theme.breakPoint.largeScreen}) {
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      }

      @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
        grid-template-columns: 1fr;
        gap: 10px;
      }

    }
  }

  &:hover {
    transform: scale(1.01);
  }
`;
