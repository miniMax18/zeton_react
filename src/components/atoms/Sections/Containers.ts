import styled, { IStyledComponent } from 'styled-components';

interface StyledContainer {}

export const StyledContainer: IStyledComponent<'web', StyledContainer> =
  styled.main<StyledContainer>`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 60vh;
    margin-top: 40px;
  `;
