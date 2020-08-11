import styled from 'styled-components';

export const SortableColumnStyles = styled.th`
  .CMRP_Table {
    &_sortable {
      cursor: pointer;
      background: transparent;
      border: none;
      font-weight: 700;
      font-size: 16px;
      color: ${(props) => props.theme.colors.hyperLinkColor};

      &_arrow {
        font-size: 18px;
        padding-left: 10px;
      }
    }
  }
`;
