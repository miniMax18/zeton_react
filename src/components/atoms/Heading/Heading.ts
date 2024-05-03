import styled from 'styled-components';
import { ThemeTypes } from '../../../theme/appTheme';

interface HeadingPropsInterface {
  theme: ThemeTypes;
  big?: boolean;
}

export const Heading = styled.h1<HeadingPropsInterface>`
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.xl : theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.bold};
  margin: 0 0 10px;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme, big }) =>
      big ? theme.fontSize.md : theme.fontSize.sm};
  }
`;

interface SubheadingPropsInterface {
  medium?: boolean;
}

export const Subheading = styled.h2<SubheadingPropsInterface>`
  font-size: ${({ theme, medium }: any) =>
    medium ? theme.fontSize.md : theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.regular};
  margin: 0 0 10px;
`;

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

export const StyledHeading = styled(Heading)`
  margin: 0 0 0 0;
`;
