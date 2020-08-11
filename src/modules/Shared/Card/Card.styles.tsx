import styled from 'styled-components';

export const CardStyles = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.defaultBackground};
  border-radius: 5px;
  box-shadow: 0px 0px 4px 1px #00000040;
  padding: ${(props) => props.theme.spacing.regularSpacing} 0;
  box-sizing: content-box;
  margin: 5px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
