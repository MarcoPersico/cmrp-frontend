import styled from 'styled-components';

export const FiltersStyles = styled.div`
  display: flex;
  flex-wrap: wrap;

  .CMRP_Filters {
    &_single {
      display: flex;
      flex-direction: column;
      margin-right: 15px;
      min-width: 200px;

      &_dropdown {
        height: 40px;
      }
      &_dropdown[multiple] {
        height: 75px;
        padding: 2px 0px;
      }
    }

    &_action {
      display: flex;
      align-items: center;
    }
  }
`;
