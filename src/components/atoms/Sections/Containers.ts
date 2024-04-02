import styled, { IStyledComponent } from 'styled-components';

export const StyledContainer: IStyledComponent<"web", any> = styled.main<any>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 60vh;
  margin-top: 40px;
`;