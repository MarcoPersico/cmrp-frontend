import styled from 'styled-components';

export const TableStyles = styled.div`
  @media screen and (${(props) => props.theme.breakPoint.mediumScreen}) {
    width: calc(100vw - 2rem);
    height: 50vh;
    overflow: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      tr {
        th {
          border: 1px solid ${(props) => props.theme.colors.primaryTextColor};
          height: 45px;
          background-color: ${(props) => props.theme.colors.defaultColor};
          position: sticky;
          z-index: 100;
          top: -1px;
        
          &:before {
            content: "";
            height: 1px;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 100000;
            background-color: ${(props) => props.theme.colors.primaryTextColor};
          }

          &:after {
            content: "";
            height: 1px;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 100000;
            background-color: ${(props) => props.theme.colors.primaryTextColor};
          }
        }
      }
    }
  }

  tbody {
    tr, td {
      border: 1px solid currentColor;
      padding: 0.5rem; 
      color: ${(props) => props.theme.colors.primaryTextColor}cc;
      a {
        cursor: pointer;
        border: none;
        background: none;
        color: ${(props) => props.theme.colors.hyperLinkColor};
        text-decoration: underline;
      
        &:hover { 
          color: ${(props) => props.theme.colors.hyperLinkColor}88;
        }
      }
    }
  }
`;
