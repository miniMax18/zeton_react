import styled from 'styled-components';
import ARROW_ICON_SVG from '/arrow_back-24px.svg';
import EXIT_ICON_SVG from '/exit.svg';
import type { ThemeTypes } from '../../../theme/appTheme';

interface ReturnButtonInterface {
  theme: ThemeTypes;
  exit?: string;
}

const ReturnButton = styled.button<ReturnButtonInterface>`
  background-color: ${({ theme }) => theme.background};
  border: none;
  height: 50px;
  width: 50px;
  transition: 0.2s;
  background-image: url(${({ exit }) =>
    exit ? EXIT_ICON_SVG : ARROW_ICON_SVG});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    height: 40px;
    width: 40px;
  }
`;

export default ReturnButton;
