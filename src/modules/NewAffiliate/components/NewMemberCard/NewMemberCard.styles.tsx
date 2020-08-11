import styled from 'styled-components';

export const NewMemberCardStyles = styled.div`
  .CMRP_NewMemberCard {
    &_body {
      position: relative;
      display: grid;
      height: 100%;
      box-sizing: border-box;
      margin: 0;
      grid-template-columns: repeat(auto-fill,minmax(260px, 1fr));
      padding: 1rem;
      gap: 20px;
    }

    &_actionContainer {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      right: 15px;

      @media screen and (${(props) => props.theme.breakPoint.smallScreen}) {
        position: relative;
      }
    }
  }
`;
