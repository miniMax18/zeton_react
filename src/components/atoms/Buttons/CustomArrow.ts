import styled from 'styled-components';
import type { ThemeTypes } from '../../../theme/appTheme';

interface CustomArrowInterface {
  theme: ThemeTypes;
}

const CustomArrow = styled.span<CustomArrowInterface>`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  background: transparent;
  height: 100%;
  width: 4rem;
  pointer-events: none;
  &::before,
  &::after {
    --size: 0.65rem;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    transform: translate(-30%, -50%);
  }

  &::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid black;
  }
  @media only screen and(max-width: ${({ theme }: CustomArrowInterface) =>
      theme.mediaMaxSize.xs}) {
    &::before,
    &::after {
      --size: 0.5rem;
    }
  }
`;

export default CustomArrow;
