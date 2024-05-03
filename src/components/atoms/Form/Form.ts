import { styled } from 'styled-components';
import { type ThemeTypes } from '../../../theme/appTheme';

interface StyledFormInterface {}

interface StyledLabelInterface {}

interface StyledInputInterface {
  theme: ThemeTypes;
}
interface StyledRowInterface {
  theme: ThemeTypes;
}

export const StyledForm = styled.form<StyledFormInterface>`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.5rem;
  margin: 2rem auto;
`;

export const StyledLabel = styled.label<StyledLabelInterface>`
  font-size: 1.15rem;
  padding: 1rem 0 0.25rem;
`;

export const StyledInput = styled.input<StyledInputInterface>`
  padding: 0.5rem 1rem;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const StyledRow = styled.div<StyledRowInterface>`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    flex-direction: column;
  }
`;
